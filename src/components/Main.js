import { useEffect, useState, createContext } from "react"
import {Routes, Route} from 'react-router-dom'
import Index from "../pages/Index"
import Show from "../pages/Show"
import Home from "../pages/Home"
import { getEvent } from "../../../TaskFlow_Backend/controllers/eventController"

export const EventsContext = createContext(null)

const Main = (props) => {
    const [events, setEvents] = useState(null)

    const URL = "http://localhost:4000/api/events/"

    const getEvents = async() => {
        const response = await fetch(URL)
        const data = await response.json()
        setEvents(data.data)
    }

    const createEvents = async(event) => {
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(event)
        })
        getEvents()
    }

    const updateEvents = async (event, id) => {
        // make post request to create people
        await fetch(URL + id, { // http://localhost:4000/api/people/jlk7bj234k5h58585ng
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(event),
        });
        // update list of people
        getEvents();
      };
      
      const deleteEvents = async (id) => {
        // make post request to create people
        await fetch(URL + id, {
            method: "DELETE",
        });
        // update list of people
        getEvents();
      };
    

    useEffect(() => {
        getEvents()
    }, [])

    return (
        <main>
            <EventsContext.Provider value={events}>
                <Routes>
                    <Route path="/" element={<Profile createEvents={createevent}/>}/>
                    {/* <Route path="/events" element={<Index />}/> */}
                    {/* <Route path="/events/:id" element={<Show updatePeople={updatePeople} deletePeople={deletePeople}/>}/> */}
                </Routes>
            </EventsContext.Provider>
        </main>
    )
}

export default Main
