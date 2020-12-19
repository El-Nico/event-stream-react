import {
  IonButton,
  IonCol,
  IonContent,
  IonDatetime,
  IonGrid,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonSpinner,
} from "@ionic/react";
import Axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { RouteComponentProps, withRouter } from "react-router-dom";
import Aevent from "../../models/models";
import "./AddEvent.css";

interface ContainerProps extends RouteComponentProps {
  event: Aevent;
  routerprops: any;
}

const AddEvent: React.FC<ContainerProps> = (props) => {
  //form handler from react hook form
  const { handleSubmit } = useForm({});

  const onSubmit = (data: any) => {
    //spinner starts spinnign
    setPosting(true);
    //get state
    const nextEvent: Aevent = {
      title,
      description,
      course,
      dueDate: new Date(dueDate),
    };
    if (locationState) {
      //axios post request updates current event
      Axios.put("/event/" + eventToEdit._id, nextEvent).then((res) => {
        setPosting(false);
        props.history.push("/");
      });
    } else {
      //axios post request creates new event
      Axios.post("/events", nextEvent).then((res) => {
        setPosting(false);
        props.history.push("/");
      });
    }
  };

  //form defaults will auto fill if its an edit route
  const locationState: any = props.location.state ? props.location.state : null;
  const eventToEdit = locationState
    ? locationState.event
    : {
        title: " ",
        description: " ",
        course: " ",
        dueDate: Date.now(),
      };

  //form state
  const [dueDate, setdueDate] = useState<string>(
    eventToEdit.dueDate.toString() || " "
  );
  const [title, setTitle] = useState<string>(eventToEdit.title || " ");
  const [description, setDescription] = useState<string>(
    eventToEdit.description || " "
  );
  const [course, setCourse] = useState<string>(eventToEdit.course || " ");
  const [isPosting, setPosting] = useState<boolean>(false);

  //form
  const myForm = () => {
    let submitButtonText = "CREATE!";
    if (locationState) {
      submitButtonText = "EDIT!";
    }
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <IonGrid>
          <IonRow>
            <IonCol size-sm="6" offset-sm="3">
              <IonItem>
                <IonLabel position="floating">Event Title</IonLabel>
                <IonInput
                  type="text"
                  name="title"
                  value={title}
                  onIonChange={(e) => setTitle(e.detail.value!)}
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size-sm="6" offset-sm="3">
              <IonItem>
                <IonLabel position="floating">Description</IonLabel>
                <IonInput
                  type="text"
                  name="description"
                  value={description}
                  onIonChange={(e) => setDescription(e.detail.value!)}
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size-sm="6" offset-sm="3">
              <IonItem>
                <IonLabel position="floating">Course</IonLabel>

                <IonSelect
                  placeholder="Select One"
                  value={course}
                  onIonChange={(e) => setCourse(e.detail.value!)}
                >
                  <IonSelectOption value="Software">
                    Software Engineering
                  </IonSelectOption>
                  <IonSelectOption value="Cyber">
                    Cyber Security Defence & Operations
                  </IonSelectOption>
                  <IonSelectOption value="Database">
                    Back-end Web Development
                  </IonSelectOption>
                  <IonSelectOption value="Mobile">
                    Mobile Development
                  </IonSelectOption>
                  <IonSelectOption value="Game">Game Design</IonSelectOption>
                  <IonSelectOption value="Research">
                    Research Project
                  </IonSelectOption>
                  <IonSelectOption value="College">Other</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size-sm="6" offset-sm="3">
              <IonItem>
                <IonLabel>Due Date</IonLabel>
                <IonDatetime
                  display-format="DD MMMM YYYY HH:mm"
                  picker-format="DD MMMM YYYY HH:mm"
                  placeholder="Select
                            Date"
                  name="dueDate"
                  value={dueDate}
                  onIonChange={(e) => setdueDate(e.detail.value!)}
                ></IonDatetime>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size-sm="6" offset-sm="3">
              <IonButton type="submit" color="primary" expand="block">
                {submitButtonText}
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </form>
    );
  };

  return (
    <IonContent className="main-content">
      {isPosting ? <IonSpinner></IonSpinner> : myForm()}
    </IonContent>
  );
};

export default withRouter(AddEvent);
