import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { IonApp, IonContent, IonHeader, IonItem, IonList, IonMenu, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/home/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import NavbarMobile from './components/navbar-mobile/NavbarMobile';
import FooterMobile from './components/footer-mobile/FooterMobile';
import SideMenu from './components/sidemenu/SideMenu';
import About from './pages/about/About';
import AddEvent from './pages/add-event/AddEvent';
import ArchivedEvents from './pages/archived-events/ArchivedEvents';

const App: React.FC = () => (

  // <IonApp>
  //   {/* header */}
  //   <NavbarMobile />
  //   <IonReactRouter>
  //   <div id="app">
  //     <IonSplitPane contentId="main">
  //     <IonMenu contentId="main">
  //           <IonHeader>
  //               <IonToolbar>
  //                   <IonTitle>
  //                       Menu
  //                   </IonTitle>
  //               </IonToolbar>
  //           </IonHeader>
  //           <IonContent>
  //               <IonList>
                  
  //               </IonList>
  //           </IonContent>
  //       </IonMenu>
        
  //     <div id="main">
  //       <IonRouterOutlet>
  //       <Route path="/home" component={Home} exact={true} />
  //       <Route exact path="/" render={() => <Redirect to="/home" />} />
  //     </IonRouterOutlet> 
  //     </div>
  //     </IonSplitPane>
  //     </div>
  //   </IonReactRouter>
  //   {/* footer */}
  //   <FooterMobile />
  // </IonApp>

  <IonReactRouter>
    <div id="app">
      <IonApp>
      {/* header */}
     <NavbarMobile />
      
          <SideMenu></SideMenu> 
          <IonPage id="main">
            <IonRouterOutlet>
              <Route path="/home" component={Home} exact={true} />
              <Route path="/archived" component={ArchivedEvents} exact={true} />
              <Route path="/add-event" component={AddEvent} exact={true} />
              <Route path="/about" component={About} exact={true} />
              <Route path="/edit-event/:id" component={AddEvent} exact={true} />
              <Route exact path="/" render={() => <Redirect to="/home" />} />
            </IonRouterOutlet>
          </IonPage>
 {/* footer */}
  <FooterMobile />
      </IonApp>
    </div>
  </IonReactRouter>
  
);

export default App;
