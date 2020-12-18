import React from 'react';
import './NavbarMobile.css';
import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';

interface ContainerProps { }

const NavbarMobile: React.FC<ContainerProps> = () => {
  return (
    <IonHeader translucent>
    <IonToolbar>
        <IonGrid>
            <IonRow>
                <IonCol size="2">
                    <IonMenuButton></IonMenuButton>
                </IonCol>
                <IonCol className="ion-align-self-center">
                    <div id="container" style={{width: "100%"}}>
                        <div id="logo" style={{margin:"auto"}}>
                            <IonText><span className="green" style={{color:"green"}}>Dorset</span> Events</IonText>
                        </div>
                    </div>
                </IonCol>
            </IonRow>
        </IonGrid>
    </IonToolbar>
</IonHeader>
  );
};

export default NavbarMobile;
