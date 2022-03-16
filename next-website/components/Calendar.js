
import { useState } from 'react';
import React from 'react';
import Kalend, { CalendarView } from 'kalend' // import component
// import '../node_modules/kalend/dist/styles/index.css'; // import styles
import style from '../styles/Home.module.scss'



export default function Calendar() {

  let id = 2;

  const [event, setEvent] = useState([
    {
      id: 1,
      startAt: '2022-03-14T07:00:00.000+11',// Time Zone London UTC+0
      endAt: '2022-03-14T09:00:00.000+11',
      // timezoneStartAt: 'UTC+11',// Time zone Nouméa
      summary: 'Color',
      color: "green"
    }
  ])

  const sameDate = []



  const convertTimeZone = offset => (-offset / 60)
  let localUTC = convertTimeZone(new Date('Mars 15, 2022 10:15:30 GMT-3:00').getTimezoneOffset())






  // Evenement affichés sur le calendrier


  return (
    <div>
      {typeof window !== "undefined" &&
        <div className={style.calendar}>
          <Kalend
            style={{
              //couleur de la pastille 
              primaryColor: '#0070ff',
              //couleur autres journée calendrier
              baseColor: '#f9a826',
              //couleur text pastille
              inverseBaseColor: '#fff'
            }}
            onEventClick={() => alert('You clicked an event ')}
            onNewEventClick={(e) => {



              let year, month, day, hourStart, hourEnd


              year = e.day.getFullYear().toString()

              month = (e.day.getMonth() + 1).toString()
              if (month < 10) month = '0' + month
              if (month == 13) month = '01'

              day = e.day.getDate().toString()


              console.log(localUTC)
              hourStart = Math.floor(e.hour)
              hourEnd = (hourStart + 1).toString()
              if (hourEnd < 10) hourEnd = '0' + hourEnd
              hourStart = hourStart.toString()
              if (hourStart < 10) hourStart = '0' + hourStart

              const newEvent = {
                id: id++,
                startAt: year + '-' + month + '-' + day + 'T' + hourStart + ':00:00.000' + localUTC,
                endAt: year + '-' + month + '-' + day + 'T' + hourEnd + ':00:00.000' + localUTC,
                // timezoneStartAt: 'UTC+11',
                summary: 'This is event ' + id,
                color: "red"
              }

              sameDate.push(newEvent.startAt)
              const hasDuplicates = (arr) => arr.length !== new Set(arr).size;
              if (!hasDuplicates(sameDate)) setEvent(event => [...event, newEvent])
              else alert("already clicked")
            }
            }

            events={event}
            initialDate={new Date().toISOString()}
            hourHeight={24}
            initialView={CalendarView.WEEK}
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

