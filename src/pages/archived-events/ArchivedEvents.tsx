import { IonContent, IonPage} from '@ionic/react';
import Axios from 'axios';
import React, { Component } from 'react';
import AnEvent from '../../components/an-event/AnEvent';
import Aevent from '../../models/models';
import './ArchivedEvents.css';

class ArchivedEvents extends Component {
  state:{events: Aevent[]} = {
    events: []
  }
  // axios requests
  componentDidMount(){
    console.log("homedidmount")
    Axios.get('/events')
      .then(res => {
        //filter by current events
        this.setState({events: res.data})
      });
  }

  render () {
    const events= this.state.events
    //only display events that are within the deadline on homepage, rest go to archived
    .filter(event => {
      var d= new Date(event.dueDate).getTime();
      var now = new Date().getTime();
      return d<now;
    })
    //sort by next upcoming event
    .sort((a: Aevent, b: Aevent) => {
      a.dueDate=new Date(a.dueDate);
      b.dueDate=new Date(b.dueDate)
      return b.dueDate.getTime() -  a.dueDate.getTime();
  })
    .map(event =>{
     return <AnEvent
        event={event}
        key={event._id}
        routerprops={null}
        />
    });

    return (
    <IonPage>
      <IonContent>
        {events}
      </IonContent>
    </IonPage>
  );
  }
  
};

export default ArchivedEvents;
