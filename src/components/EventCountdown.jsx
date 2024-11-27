import React, { useState, useEffect } from 'react'

import '../App.css'

const EventCountdown = ({colorTheme, eventTitle, bgImage, eventDate}) => {

  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const updateCountdown = () => {
      // Pega o tempo atual em milissegundos:
      const currentTime = new Date().getTime();

      // Pega a data do evento em milissegundos:
      const eventTime = new Date(eventDate).getTime();

      // Calcula quanto tempo falta para o evento em milissegundos
      const timeDifference = eventTime - currentTime;

      if(timeDifference > 0){
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setTimeRemaining({days , hours , minutes, seconds});
      } else {
        setTimeRemaining({days : 0, hours: 0, minutes: 0, minutes: 0, seconds: 0});
      }
    }

    const intervalId = setInterval(updateCountdown, 1000);
  
    return () => clearInterval(intervalId);
  }, [eventDate])
  

  return (
    <>
      <div className='event-bg' 
           style={{backgroundImage: `url('${bgImage}')`}}>
        <div className='container popUp'>
          <h1 className='text-center event-title'>{eventTitle}</h1>
          <div className="timer-box popIn">                   
            <div className="box" style={{backgroundColor: `${colorTheme}`}}>
              <h1>{timeRemaining.days}</h1>
              <p>{timeRemaining.days == 1? 'Dia' : 'Dias'}</p>
            </div>            
            <div className="box" style={{backgroundColor: `${colorTheme}`}}>
              <h1>{timeRemaining.hours}</h1>
              <p>Horas</p>
            </div>            
            <div className="box" style={{backgroundColor: `${colorTheme}`}}>
              <h1>{timeRemaining.minutes}</h1>
              <p>Minutos</p>
            </div>            
            <div className="box" style={{backgroundColor: `${colorTheme}`}}>
              <h1>{timeRemaining.seconds}</h1>
              <p>Segundos</p>
            </div>            
          </div>
        </div>
      </div>
    </>
  )
}

export default EventCountdown