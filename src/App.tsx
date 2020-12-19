import { IonApp, IonPage, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/float-elements.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/typography.css";
import React from "react";
import { Redirect, Route } from "react-router-dom";
import FooterMobile from "./components/footer-mobile/FooterMobile";
import NavbarMobile from "./components/navbar-mobile/NavbarMobile";
import SideMenu from "./components/sidemenu/SideMenu";
import About from "./pages/about/About";
import AddEvent from "./pages/add-event/AddEvent";
import ArchivedEvents from "./pages/archived-events/ArchivedEvents";
import Home from "./pages/home/Home";
/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => (
  <IonReactRouter>
    <div id="app">
      <IonApp>
        {/* header */}
        <NavbarMobile />
        {/* toggle menu */}
        <SideMenu></SideMenu>
        {/* main app */}
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
