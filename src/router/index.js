import React from 'react'
import XLAppDiscover from '@/pages/discover'
import XLAppMine from '@/pages/mine'
import XLAppFriends from '@/pages/friends'
import { Redirect } from 'react-router-dom';

const routes = [
    {
        path: '/',
        exact: true,
        // component: XLAppDiscover
        render: ()=>(
            <Redirect to="/discover"/>
        )
    },
    {
        path: '/discover',
        component: XLAppDiscover
    },
    {
        path: '/mine',
        component: XLAppMine
    },
    {
        path: '/friend',
        component: XLAppFriends
    }
];
export default routes;