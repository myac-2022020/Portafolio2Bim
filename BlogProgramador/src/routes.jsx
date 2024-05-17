import { Taller } from "./pages/Taller/Taller.jsx";
import { Technology } from "./pages/Technology/Technology.jsx";
import { SupervicedPractice } from "./pages/SupervisedPractice/SupervicedPractice.jsx";

export const routes = [
    {
        path: '/taller',
        element: <Taller />
    },
    {
        path: '/technology',
        element: <Technology />
    },
    {
        path: '/practice',
        element: <SupervicedPractice/>
    },
    {
        path: '/*',
        element: <Taller />
    },
]