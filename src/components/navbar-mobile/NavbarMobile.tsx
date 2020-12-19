import { IonCol, IonGrid, IonHeader, IonMenuButton, IonRow, IonText, IonToolbar } from '@ionic/react';
import React from 'react';
import './NavbarMobile.css';

interface ContainerProps { }

const NavbarMobile: React.FC<ContainerProps> = () => {
  return (
    <IonHeader translucent className="navbar">
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
