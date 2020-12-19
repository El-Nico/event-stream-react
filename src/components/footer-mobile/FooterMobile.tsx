import {
  IonCol,
  IonFooter,
  IonGrid,
  IonRow,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import "./FooterMobile.css";

interface ContainerProps {}

const FooterMobile: React.FC<ContainerProps> = () => {
  return (
    <IonToolbar>
      <IonFooter className="footer-div">
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol size="12">
              <div style={{ textAlign: "center" }}>
                <p>
                  Copyright &copy; 2020, |{" "}
                  <a
                    href="https:/nicholas-eruba.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Nicholas Chibuike-Eruba
                  </a>
                </p>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonFooter>
    </IonToolbar>
  );
};

export default FooterMobile;
