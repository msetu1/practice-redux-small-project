import { Link } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
    return (
        <div className="max-w-7xl mx-auto h-16 flex items-center gap-3 px-5">
            <div className="flex items-center">
                <h2 className="text-xl ">Task<span className="font-bold  text-rose-500">Master</span></h2>
            </div>
            <Link to='/'>Tasks</Link>
            <Link to='/users'>Users</Link>
            <div className="ml-auto">
                <ModeToggle/>
            </div>
        </div>
    );
};

export default Navbar;