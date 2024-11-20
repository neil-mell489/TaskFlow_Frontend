const Nav = (props) => {
    // User is logged in - show only the logout button
    const loggedInLink = (
        <div>
            <button id="logout-btn" onClick={props.handleLogout} className="nav-button hover:text-violet-600 m-5">Logout</button>
        </div>
    );

    // User is NOT logged in - show signup/login nav buttons
    const noAuthLinks = (
        <div>
            <div className="m-5 pr-5">
                <button className="nav-button hover:text-violet-600" onClick={() => props.handleNavigation("/signup")}>Sign Up</button>
            </div>
            <div className="m-5 pr-5">
                <button className="nav-button hover:text-violet-600" onClick={() => props.handleNavigation("/login")}>Login</button>
            </div>
        </div>
    );

    return (
        <nav className="navbar bg-black font-bold text-white flex justify-between items-center">
            {/* TaskFlow logo or title */}
            <div className="logo ml-5">
                TaskFlow
            </div>
            {/* Conditional links */}
            <div>
                {props.isLoggedIn ? loggedInLink : noAuthLinks}
            </div>
        </nav>
    );
};

export default Nav;