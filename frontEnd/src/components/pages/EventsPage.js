import React from "react";
import { Outlet } from 'react-router-dom';
import EventsNavigation from '../EventsNavigation';

export default function EventsPage(){
    return <>
        <EventsNavigation />
        <Outlet />
    </>
}

