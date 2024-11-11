import { IoIosNotificationsOutline } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import  './navbar.css';
const Navbar = ()=>{
return (<>
<div className="navbar">
<div className="logo">Logo</div>
<div className="search-container">
    <select>
        <option value="" disabled selected hidden>Category</option>
        <option value="Option1">Option 1</option>
        <option value="Option2">Option 2</option>
        <option value="Option3">Option 3</option>
    </select>
    <div className="search-input">
    <input type="text" placeholder="Search"/>
    <button class="search-button">
        <i class="fa fa-search"><IoIosSearch /></i>
    </button>
    </div>
   
</div>
    <div className="icon">
    <IoIosNotificationsOutline />
   
   <FaCircleUser />
    </div>
    
</div>
   
</>)
}
export default Navbar;