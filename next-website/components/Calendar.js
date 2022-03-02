
import React from 'react';
import Kalend, { CalendarView } from 'kalend' // import component
// import '../node_modules/kalend/dist/styles/index.css'; // import styles
import style from '../styles/Home.module.scss'
// import '../styles/index.css' // import styles



export default function Calendar() {


  // Evenement affichés sur le calendrier
  let events = [
    {
      id: 1,
      startAt: '2022-02-28T06:00:00.000Z',// Time Zone London UTC+0
      endAt: '2022-02-28T07:00:00.000Z',
      timezoneStartAt: 'UTC+11',// Time zone Nouméa
      summary: 'Color',
      color: "#D82148"

    },
    {
      id: 2,
      startAt: '2021-11-21T18:00:00.000Z',
      endAt: '2021-11-21T19:00:00.000Z',
      timezoneStartAt: 'Europe/Berlin', // optional
      summary: 'test',
      // color: [randomColor]
    }
  ];



  events.push({
    id: 4,
    startAt: '2022-02-28T07:00:00.000Z',// Time Zone London UTC+0
    endAt: '2022-02-28T08:00:00.000Z',
    timezoneStartAt: 'UTC+11',
    summary: 'Rendez vous',
    color: "orange"
  })


  return (
    <div>


      {typeof window !== "undefined" &&
        <div className={style.calendar}>
          <Kalend
            style={{
              //couleur de la pastille 
              primaryColor: '#f9a826',
              //couleur autres journée calendrier
              baseColor: '#f9a826',
              //couleur text pastille
              inverseBaseColor: '#0070ff'
            }}
          onEventClick={() => alert('You clicked an event ')}
          onNewEventClick={(e, t) => {
            console.log(e)
            console.log(t)
          }}
          events={events}
          initialDate={new Date().toISOString()}
          hourHeight={24}
          initialView={CalendarView.DAY}
          disabledViews={CalendarView[CalendarView.DAY]}
            // onSelectView={() => alert('On Selected View ')}
            // selectedView={CalendarView.MONTH}
            // onPageChange={() => alert('On Page Change')}
          timeFormat={'24'}
          disableMobileDropdown={true}
          weekDayStart={'Monday'}
          calendarIDsHidden={["1"]}
          language={'fr'}
          />
        </div>
      }
    </div>

  )

}

