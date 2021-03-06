import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
// Moment
import moment from 'moment';
// Components
import { CalendarEvent } from "./CalendarEvent";
import { CalendarModal } from "./CalendarModal";
// UI Components
import { Navbar } from "../ui/Navbar";
import { messages } from "../../helpers/calendar-messages-es";
// Styles
import 'react-big-calendar/lib/css/react-big-calendar.css'

import 'moment/locale/es';
moment.locale( 'es' );

const localizer = momentLocalizer( moment );

const events = [{
  title: 'Cumpleaños Shakishis',
  start: moment().toDate(),
  end: moment().add( 2, 'hours' ).toDate(),
  bgcolor: '#fafafa',
  notes: 'Comprar algo genial',
  user: {
    _id: '1234',
    name: 'Camilo'
  }
}]

export const CalendarScreen = () => {
  const [ lastView, setLastView ] =useState( localStorage.getItem( 'lastView' ) || 'month' );

  const onDoubleClick = ( e ) => {
    console.log(e)
  }

  const onSelectEvent = ( e ) => {
    console.log(e)
  }

  const onViewChange = ( e ) => {
    setLastView( e );
    localStorage.setItem( 'lastView', e );
  }

  const eventStyleGetter = ( event, start, end, isSelected  ) => {
    const style = {
      backgroundColor: '#367CF7',
      borderRadius: '0px',
      opacity: 0.8,
      display: 'block',
      color: 'white'
    }

    return {
      style
    }
  }

  return(
    <div className='calendar-screen'>
      <Navbar />

      <Calendar 
        localizer={ localizer }
        events={ events }
        startAccessor='start'
        endAccessor='end'
        messages={ messages }
        eventPropGetter={ eventStyleGetter }
        onDoubleClickEvent={ onDoubleClick }
        onSelectEvent={ onSelectEvent }
        onView={ onViewChange }
        view={ lastView }
        components={{
          event: CalendarEvent
        }}
      />

      <CalendarModal />

    </div>
  );
}
