import React from 'react'
import XLAppDiscover from '@/pages/discover'
import XLRecommend from "../pages/discover/c-pages/recommend";
import XLRanking from "../pages/discover/c-pages/ranking";
import XLSongs from "../pages/discover/c-pages/songs";
import XLDjradio from "../pages/discover/c-pages/djradio";
import XLArtist from "../pages/discover/c-pages/artist";
import XLAlbum from "../pages/discover/c-pages/album";
import XLAppMine from '@/pages/mine'
import XLAppFriends from '@/pages/friends'
import { Redirect } from 'react-router-dom';

const routes = [
    {
        path: '/',
        exact: true,
        // component: XLAppDiscover
        render: () => (
            <Redirect to="/discover" />
        )
    },
    {
        path: '/discover',
        component: XLAppDiscover,
        routes: [
            {
                path: "/discover",
                exact: true,
                render: () => (
                    <Redirect to="/discover/recommend" />
                )
            },
            {
                path: "/discover/recommend",
                component: XLRecommend
            },
            {
                path: "/discover/ranking",
                component: XLRanking
            },
            {
                path: "/discover/songs",
                component: XLSongs
            },
            {
                path: "/discover/djradio",
                exact: true,
                component: XLDjradio
            },
            {
                path: "/discover/artist",
                component: XLArtist
            },
            {
                path: "/discover/album",
                component: XLAlbum
            }
        ]
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