import { FaGreaterThan } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { FaSearchPlus } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import "./sidebar.css"

const Sidebar = () => (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav">
        <li className="sidebar-list"><a href="#"><FaGreaterThan /></a></li>
        <li className="sidebar-list"><a href="#"><CiCirclePlus /></a></li>
        <li className="sidebar-list active"><a href="#"><IoSettingsOutline /></a></li>
        <li className="sidebar-list"><a href="#"><FaSearchPlus /></a></li>
      </ul>
    </aside>
  );
  export default Sidebar;