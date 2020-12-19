import { IonCol, IonContent, IonGrid, IonRow } from "@ionic/react";
import Axios from "axios";
import React, { Component } from "react";
import AnEvent from "../../components/an-event/AnEvent";
import Aevent from "../../models/models";
import "./Home.css";

class Home extends Component {
  state: { events: Aevent[] } = {
    events: [],
  };
  // axios requests
  componentDidMount() {
    Axios.get("/events").then((res) => {
      //filter by current events
      this.setState({ events: res.data });
    });
  }

  render() {
    const events = this.state.events
      //only display events that are within the deadline on homepage, rest go to archived
      .filter((event) => {
        var d = new Date(event.dueDate).getTime();
        var now = new Date().getTime();
        return d > now;
      })
      //sort by next upcoming event
      .sort((a: Aevent, b: Aevent) => {
        a.dueDate = new Date(a.dueDate);
        b.dueDate = new Date(b.dueDate);
        return a.dueDate.getTime() - b.dueDate.getTime();
      })
      .map((event) => {
        return <AnEvent event={event} key={event._id} routerprops={null} />;
      });

    return (
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <div style={{ height: "50px" }}></div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>{events}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <div style={{ height: "50px" }}></div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    );
  }
}

export default Home;
