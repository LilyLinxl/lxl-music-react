import XLAppDiscover from '@/pages/discover'
import XLAppMine from '@/pages/mine'
import XLAppFriends from '@/pages/friends'

const routes = [
    {
        path: '/',
        exact: true,
        component: XLAppDiscover
    },
    {
        path: '/mine',
        component: XLAppMine
    },
    {
        path: '/friends',
        component: XLAppFriends
    }
];
export default routes;