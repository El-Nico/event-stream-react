import {
  IonCol,
  IonContent,
  IonGrid,
  IonRow,
  IonText,
  IonTitle,
} from "@ionic/react";
import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <IonContent style={{ position: "relative", top: "50px" }}>
      <div className="about-container">
        <IonGrid>
          <IonRow>
            <IonCol></IonCol>
            <IonCol>
              <div className="centre full-width">
                <IonTitle>About</IonTitle>
              </div>
            </IonCol>
            <IonCol></IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <div className="centre">
                <IonText>
                  the purpose of this website is to implement a system where
                  students can create read update delete events like assingments
                  and school functions, the events are then organized using the
                  javascript Date class by order of deadline | to view overdue
                  events go to /archived
                  <br /> CREDITS
                  <br /> Images from:
                  <a
                    href="https://source.unsplash.com/"
                    target="_blank"
                    rel=" noopener noreferrer"
                  >
                    https://source.unsplash.com/
                  </a>
                </IonText>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>
    </IonContent>
  );
};

export default About;
