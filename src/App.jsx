//  import React from "react";
// import { Routes, Route, Link } from "react-router-dom";
// import LoginPage from "./Components/LoginPage";
// import SignupPage from "./Components/SignUpPage";
// import AdminLoginPage from "./Components/AdminLoginPage";
// import AdminSignupPage from "./Components/AdminSignupPage";
// import "../src/css/App.css";
// import BookingPage from "./Components/BookingPAge";

// const App = () => {
//   return (
//     <div className="App">
//       <div id="land">
//         <h2>Ticket Booking App</h2>
//         <nav>
//           <div className="links">
//             <h3>Admin</h3>
//             <Link className="lin" to="/admin/login">
//               Admin Login
//             </Link>{" "}
//             <Link className="lin" to="/admin/signup">
//               Admin Signup
//             </Link>
//           </div>
//           <div className="links">
//             <h3>User</h3>
//             <Link className="lin" to="/login">
//               User Login
//             </Link>{" "}
//             <Link className="lin" to="/signup">
//               User Signup
//             </Link>
//           </div>
//         </nav>
//       </div>
    
//       <Routes>
//         {/* User Routes */}
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<SignupPage />} />
//         <Route path="/booking" element={<BookingPage />} />
//         {/* Add this */}
//         {/* Admin Routes */}
//         <Route path="/admin/login" element={<AdminLoginPage />} />
//         <Route path="/admin/signup" element={<AdminSignupPage />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;
//old
// import React from "react";
// import { Routes, Route, Link, useLocation } from "react-router-dom";
// import LoginPage from "./Components/LoginPage";
// import SignupPage from "./Components/SignUpPage";
// import AdminLoginPage from "./Components/AdminLoginPage";
// import AdminSignupPage from "./Components/AdminSignupPage";
// import "../src/css/App.css";
// import AddTheaters from "./Components/AddTheaters";
// import BookingPage from "./Components/BookingPage";
// import AdminHome from "./Components/AdminHome";
// import AddMovie from "./Components/AddMovie";
// import MovieShow from "./Components/Movieshow";
// import TheaterHome from "./Components/TheaterHome";
// import Screen from "./Components/Screen";

// const App = () => {
//   const location = useLocation();

//   // Define routes where the navigation should be hidden
//   const hideNavRoutes = ["/login", "/signup", "/admin/login", "/admin/signup", "/booking","/add-theaters","/adminhome","/add-movie","/theater-home","/movie-show","/screen"];

//   const shouldHideNav = hideNavRoutes.includes(location.pathname);

//   return (
//     <div className="App">
//       {/* Conditionally render the navigation */}
//       {!shouldHideNav && (
//         <div id="land">
//           <h2>Ticket Booking App</h2>
//           <nav>
//             <div className="links">
//               <h3>Admin</h3>
//               <Link className="lin" to="/admin/login">
//                 Admin Login
//               </Link>{" "}
//               <Link className="lin" to="/admin/signup">
//                 Admin Signup
//               </Link>
//             </div>
//             <div className="links">
//               <h3>User</h3>
//               <Link className="lin" to="/login">
//                 User Login
//               </Link>{" "}
//               <Link className="lin" to="/signup">
//                 User Signup
//               </Link>
//             </div>
//           </nav>
//         </div>
//       )}

//       <Routes>
//         {/* User Routes */}
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<SignupPage />} />
//         <Route path="/booking" element={<BookingPage />} />
//         {/* Admin Routes */}
//         <Route path="/admin/login" element={<AdminLoginPage />} />
//         <Route path="/admin/signup" element={<AdminSignupPage />} />
//         <Route path="/add-theaters" element={<AddTheaters />} />
//         <Route path="/adminhome" element={<AdminHome />} />
//         <Route path="/add-movie" element={<AddMovie />} />
//         <Route path="/screen" element={<Screen/>}/>
//         <Route path="/movie-show" element={<MovieShow/>}/>
//         <Route path="/theater-home" element={<TheaterHome/>}/>
//       </Routes>
//     </div>
//   );
// };

// export default App;
//new 
import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import LoginPage from "./Components/LoginPage";

import AdminLoginPage from "./Components/AdminLoginPage";
import AdminSignupPage from "./Components/AdminSignupPage";
import './index.css';
// import './App.css';
import "../src/css/App.css";
import AddTheaters from "./Components/AddTheaters";
import BookingPage from "./Components/BookingPage";
import AdminHome from "./Components/AdminHome";
import AddMovie from "./Components/AddMovie";
import MovieShow from "./Components/MovieShow";
import TheaterHome from "./Components/TheaterHome";
import Screen from "./Components/Screen";
import UserPage from "./Components/UserPage";
import AdminPage from "./Components/AdminPage";
import SignupPage from "./Components/SignUpPage";

const App = () => {
  const location = useLocation();
  
  // Define routes where the navigation should be hidden
  const hideNavRoutes = ["/login", "/signup", "/admin/login", "/admin/signup", "/booking","/add-theaters","/adminhome","/add-movie","/theater-home","/movie-show","/screen","/user-home","/admin-home"];

  const shouldHideNav = hideNavRoutes.includes(location.pathname);

  return (
    <div className="App">
      {/* Conditionally render the navigation */}
      {!shouldHideNav && (
        <div id="land">
          <h2>Ticket Booking App</h2>
          <nav>
            <div className="links">
              <Link className="lin" to="/admin-home">
                Admin
            </Link>
            </div>
            <div className="links">
            <Link className="lin" to="/user-home">
                User 
            </Link>
            </div>
          </nav>
        </div>
      )}

      <Routes>
        {/* User Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/booking" element={<BookingPage />} />
        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin/signup" element={<AdminSignupPage />} />
        <Route path="/add-theaters" element={<AddTheaters />} />
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="/screen" element={<Screen/>}/>
        <Route path="/movie-show" element={<MovieShow/>}/>
        <Route path="/theater-home" element={<TheaterHome/>}/>
        <Route path="/user-home" element={<UserPage/>}/>
        <Route path="/admin-home" element={<AdminPage/>}/>
      </Routes>
    </div>
  );
};

export default App;