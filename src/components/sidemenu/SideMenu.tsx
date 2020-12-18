import React, { useState } from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonMenuToggle, IonIcon, IonLabel, IonItem } from "@ionic/react";
import { RouteComponentProps, withRouter } from 'react-router';
import { addCircleOutline, archiveOutline, homeOutline, informationOutline } from 'ionicons/icons';

interface Page {
    title: string;
    path: string;
    icon: string;
}

const pages: Page[] = [
    { title: 'Home', path: '/', icon: homeOutline },
    { title: 'Archived Events', path: '/archived', icon: archiveOutline },
    { title: 'Add Event', path: '/add-event', icon: addCircleOutline },
    { title: 'About the App', path: '/about', icon: informationOutline}
];

type Props = RouteComponentProps<{}>;

const SideMenu = ({ history }: Props) => {
    const [activePage, setActivePage] = useState(pages[0].title);

    const renderMenuItems = (): JSX.Element[] => {
        return pages.map((page: Page) => (
            <IonMenuToggle key={page.title} auto-hide="false">
                <IonItem 
                lines="none"
                button
                    color={page.title === activePage ? 'primary' : ''}
                    onClick={() => navigateToPage(page)}>
                    <IonIcon slot="start" icon={page.icon}></IonIcon>
                    <IonLabel>
                        {page.title}
                    </IonLabel>
                </IonItem>
            </IonMenuToggle>
        ));
    }

    const navigateToPage = (page: Page) => {
        history.push(page.path);
        setActivePage(page.title);
    }

    return (
        <IonMenu contentId="main">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Dorset Events
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    { renderMenuItems() }
                </IonList>
            </IonContent>
        </IonMenu>
    );
}

export default withRouter(
    SideMenu
);