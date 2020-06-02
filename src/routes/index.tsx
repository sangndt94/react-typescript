import Home from "../pages/Home";
import { UserHoc } from "../hoc/UserHoc";

export const Routes = [
    {
        path : '/',
        component : UserHoc<React.Component>(Home)
    }
]