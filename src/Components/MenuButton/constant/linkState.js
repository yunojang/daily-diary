import {
  AiOutlineCalendar as CalendarIcon,
  AiOutlineHome as HomeIcon,
} from "react-icons/ai";
import ROUTE_PATH from "constant/routePath";

export const HOME_LINK_STATE = {
  icon: <HomeIcon />,
  path: ROUTE_PATH.home,
};

export const ARCHIEVE_LINK_STATE = {
  icon: <CalendarIcon />,
  path: ROUTE_PATH.achieve,
};
