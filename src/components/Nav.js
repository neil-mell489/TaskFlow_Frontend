const Nav = (props) => {
    // User is logged in - show only the logout button
    const loggedInLink = (
        <div>
            <button id="logout-btn" onClick={props.handleLogout}>Logout</button>
        </div>
    );

    // User is NOT logged in - show signup/login nav buttons
    const noAuthLinks = (
        <div>
            <div>
                <button className="nav-button" onClick={() => props.handleNavigation("/signup")}>Sign Up</button>
            </div>
            <div>
                <button className="nav-button" onClick={() => props.handleNavigation("/login")}>Login</button>
            </div>
        </div>
    );

    return (
        <nav className="navbar bg-black font-bold text-white flex flex-row-reverse">
            <div className="p-10 hover:text-violet-600">
                <button className="nav-button" onClick={() => props.handleNavigation("/")}>Home</button>
            </div>
            <div className="p-10 hover:text-violet-600">
                {props.isLoggedIn ? loggedInLink : noAuthLinks}
            </div>
        </nav>
    );
};

export default Nav;
