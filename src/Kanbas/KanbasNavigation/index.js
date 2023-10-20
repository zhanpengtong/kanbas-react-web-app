import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { BsFillInboxFill } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaSlideshare } from "react-icons/fa";
import { MdOutlineExitToApp } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import "./index.css";
function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];

  const linkToIconMap = {
    Account: <BiUserCircle className="wd-icon" />,
    Dashboard: <RiDashboard3Fill className="wd-icon" />,
    Courses: <FaBook className="wd-icon" />,
    Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,
    Inbox: <BsFillInboxFill className="wd-icon" />,
    History: <AiOutlineClockCircle className="wd-icon" />,
    Studio: <FaSlideshare className="wd-icon" />,
    Commons: <MdOutlineExitToApp className="wd-icon" />,
    Help: <AiOutlineQuestionCircle className="wd-icon" />,
  };

  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation" style={{ width: 150 }}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {linkToIconMap[link]}
          <br/>
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;
