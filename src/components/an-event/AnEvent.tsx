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
import { Observable, Subscription, timer } from "rxjs";

interface ContainerProps extends RouteComponentProps {
  event: Aevent;
  routerprops: any;
}

interface timestamp {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const AnEvent: React.FC<ContainerProps> = (props) => {
  // Declare a new state variable, to hold the timestamp
  const [timeStamp, setTimestamp] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const handleEdit = () => {
    console.log(props);
    props.history.push({
      pathname: "/edit-event/" + props.event._id,
    });
  };
  const handleDelete = () => {};
  let timestampTimer: Subscription;

  let imgSize = "400";
  let imgSrc = `https://source.unsplash.com/${imgSize}x${imgSize}/?${props.event.course}`;

  useEffect(() => {
    //an rxjs subscription that emits a new timestamp every second
    timestampTimer = timer(0, 1000).subscribe((val) => {
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

    return ()=>{
        //cleanup work in useeffect()
        timestampTimer.unsubscribe()
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
          Due on {props.event.dueDate.toDateString()} |{" "}
          {props.event.dueDate.toLocaleTimeString()}
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
