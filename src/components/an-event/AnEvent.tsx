import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonIcon,
  IonItem,
  IonRow,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import "./AnEvent.css";
import { RouteComponentProps, withRouter } from "react-router-dom";
import Aevent from "../../models/models";
import { Subscription, timer } from "rxjs";
import Axios from "axios";

interface ContainerProps extends RouteComponentProps {
  event: Aevent;
  routerprops: any;
}

const AnEvent: React.FC<ContainerProps> = (props) => {
  // Declare a new state variable, to hold the timestamp
  const [timeStamp, setTimestamp] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  //when edit button clicked navigate to add event page and pass the event as state
  const handleEdit = () => {
    props.history.push({
      pathname: "/edit-event/" + props.event._id,
      state: { event: props.event },
    });
  };

  //axios call deletes event from database
  const handleDelete = () => {
    Axios.delete("/event/" + props.event._id).then((res) => {
      //refresh the page
      window.location.reload();
    });
  };

  //set the size of the image on card
  let imgSize = "400";
  let imgSrc = `https://source.unsplash.com/${imgSize}x${imgSize}/?${props.event.course}`;

  useEffect(() => {
    //an rxjs subscription that emits a new timestamp every second
    const timestampTimer: Subscription= timer(0, 1000).subscribe((val) => {
      // Get todays date and time
      var now = new Date().getTime();

      //duedate
      var countDownDate = new Date(props.event.dueDate).getTime();

      // Find the distance between now an the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.abs(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      var minutes = Math.abs(
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      );
      var seconds = Math.abs(Math.floor((distance % (1000 * 60)) / 1000));

      setTimestamp({
        days,
        hours,
        minutes,
        seconds,
      });
    });

    return () => {
      //cleanup work in useeffect() | unsubscribe from timer on dismount prevents memory leakage and slow down
      timestampTimer.unsubscribe();
    };
  }, []);

  return (
    <IonCard>
      <img src={imgSrc} className="display-image" />
      <IonCardHeader>
        <IonCardSubtitle class="centre">
          due in {timeStamp.days} days {timeStamp.hours} hours{" "}
          {timeStamp.minutes} minutes and {timeStamp.seconds} seconds
        </IonCardSubtitle>
        <IonCardTitle class="centre">
          {props.event.title} | {props.event.course}
        </IonCardTitle>
        <IonCardSubtitle class="centre">
          Due on {new Date(props.event.dueDate).toDateString()} |{" "}
          {new Date(props.event.dueDate).toLocaleTimeString()}
        </IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent class="centre">
        {props.event.description}
        <div>
          <a
            href="https://moodle2020.dorset.ie"
            target="_blank"
            rel="noopener noreferrer"
          >
            go to moodle
          </a>
        </div>
      </IonCardContent>
      <IonToolbar>
        <IonToolbar>
          <IonGrid>
            <IonRow>
              <IonCol></IonCol>
              <IonCol>
                <IonItem lines="none">
                  <IonButton
                    fill="outline"
                    color="secondary"
                    onClick={handleEdit}
                  >
                    <IonIcon slot="start" name="create-outline"></IonIcon>
                    Edit
                  </IonButton>
                  <IonButton
                    color="danger"
                    fill="outline"
                    onClick={handleDelete}
                  >
                    Delete
                    <IonIcon slot="end" name="trash-outline"></IonIcon>
                  </IonButton>
                </IonItem>
              </IonCol>
              <IonCol></IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonToolbar>
    </IonCard>
  );
};

export default withRouter(AnEvent);
