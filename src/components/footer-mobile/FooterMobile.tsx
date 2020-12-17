import { IonCol, IonFooter, IonGrid, IonRow } from '@ionic/react';
import React from 'react';
import './FooterMobile.css';

interface ContainerProps { }

const FooterMobile: React.FC<ContainerProps> = () => {
  return (
    <IonFooter>
    <IonGrid>
        <IonRow className="ion-justify-content-center">
            <IonCol size="12">
            
                <div style={{textAlign: "center"}}>
                    <p>Copyright &copy; 2020, | <a href="https:/nicholas-eruba.com" target="_blank">Nicholas Chibuike-Eruba</a></p>
                </div>
            </IonCol>
        </IonRow>
    </IonGrid>
</IonFooter>
  );
};

export default FooterMobile;
