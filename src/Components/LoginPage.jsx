// import React, { useState } from "react";
// import axios from "axios";

// const LoginPage = () => {
//   const [formData, setFormData] = useState({
//     userEmail: "",
//     userPassword: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Validate form fields
//   const validateForm = () => {
//     const { userEmail, userPassword } = formData;
//     if (!userEmail || !userPassword) {
//       alert("Email and Password are required");
//       return false;
//     }
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(userEmail)) {
//       alert("Please enter a valid email address");
//       return false;
//     }
//     return true;
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     setLoading(true); // Show loader
//     setError(null); // Reset error state

//     try {
//       // Send POST request to login endpoint
//       const response = await axios.get(
//         `http://192.168.188.251:8080/user/userLogin?userEmail=${formData.userEmail}&userPassword=${formData.userPassword}`, // Assuming this is your backend login URL
//         formData, // Send email and password in the body
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       // Check for successful login response
//       if (response.status === 200) {
//         alert("Login successful!");
//         console.log("Server Response:", response.data);
//         // Optionally, redirect or store user data in state/global state (like Redux or Context API)
//       }
//     } catch (error) {
//       // Handle errors
//       if (error.response) {
//         // If the server responded with an error
//         setError(
//           error.response.data.message || "Login failed. Please try again."
//         );
//       } else {
//         // If no response (network error)
//         setError("An error occurred. Please try again later.");
//       }
//       console.error("Error during login:", error);
//     } finally {
//       setLoading(false); // Hide loader
//     }
//   };

//   return (
//     <div
//       className="login-container"
//       style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}
//     >
//       <h2>User Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email: </label>
//           <input
//             type="email"
//             name="userEmail"
//             value={formData.userEmail}
//             onChange={handleChange}
//             placeholder="Enter Your Email"
//             required
//           />
//         </div>
//         <div>
//           <label>Password: </label>
//           <input
//             type="password"
//             name="userPassword"
//             value={formData.userPassword}
//             onChange={handleChange}
//             placeholder="Enter Your Password"
//             required
//           />
//         </div>
//         <button type="submit" disabled={loading}>
//           {loading ? "Please wait..." : "Login"}
//         </button>
//       </form>

//       {error && (
//         <div style={{ marginTop: "20px", color: "red" }}>
//           <p>{error}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LoginPage;

//1--------

// import React, { useState } from "react";
// import axios from "axios";

// const LoginPage = () => {
//   const [formData, setFormData] = useState({
//     userEmail: "",
//     userPassword: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validateForm = () => {
//     const { userEmail, userPassword } = formData;
//     if (!userEmail || !userPassword) {
//       alert("Email and Password are required");
//       return false;
//     }
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(userEmail)) {
//       alert("Please enter a valid email address");
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const response = await axios.get(
//         `http://192.168.140.109:8090/user/login?userEmail=${formData.userEmail}&userPassword=${formData.userPassword}`,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }

//       );

//       if (response.status === 302) {
//         alert("Login successful!");
//         console.log(formData);
//         window.open("/booking", "_blank");

//         // Redirect to booking page
//       }
//     } catch (error) {
//       if (error.response) {
//         setError(
//           error.response.data.message || "Login failed. Please try again."
//         );
//       } else {
//         setError("An error occurred. Please try again later.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       className="login-container"
//       style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}
//     >
//       <h2>User Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email: </label>
//           <input
//             type="email"
//             name="userEmail"
//             value={formData.userEmail}
//             onChange={handleChange}
//             placeholder="Enter Your Email"
//             required
//           />
//         </div>
//         <div>
//           <label>Password: </label>
//           <input
//             type="password"
//             name="userPassword"
//             value={formData.userPassword}
//             onChange={handleChange}
//             placeholder="Enter Your Password"
//             required
//           />
//         </div>
//         <button type="submit" disabled={loading}>
//           {loading ? "Please wait..." : "Login"}
//         </button>
//       </form>
//       {error && <div style={{ marginTop: "20px", color: "red" }}>{error}</div>}
//     </div>
//   );
// };

// export default LoginPage;

// -2;
// import React, { useState } from "react";
// import axios from "axios";
// //import { useNavigate } from "react-router-dom";

// const LoginPage = () => {
//   const [formData, setFormData] = useState({
//     userEmail: "",
//     userPassword: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   //const navigate=useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validateForm = () => {
//     const { userEmail, userPassword } = formData;
//     if (!userEmail || !userPassword) {
//       alert("Email and Password are required");
//       return false;
//     }
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(userEmail)) {
//       alert("Please enter a valid email address");
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const response = await axios.get(`http://192.168.43.18:8090/user/login`, {
//         params: {
//           userEmail: formData.userEmail,
//           userPassword: formData.userPassword,
//         },
//         headers: {
//           "Content-Type": "application/json",
//         },
//         validateStatus: (status) => status < 500, // Allow handling of all non-server error statuses
//       });

//       if (response.status === 302) {
//         alert("Login successful!");
//         console.log("User Data:", response.data);
//         window.location.replace("/booking");
//         //  navigate("/booking")
//         // Redirect to booking page
//       } else {
//         const errorMessage =
//           response.data?.message || "Login failed. Please try again.";
//         setError(errorMessage);
//       }
//     } catch (error) {
//       if (error.response) {
//         setError(
//           error.response.data?.message || "Login failed. Please try again."
//         );
//       } else {
//         setError("An error occurred. Please try again later.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       className="login-container"
//       style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}
//     >
//       <h2>User Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email: </label>
//           <input
//             type="email"
//             name="userEmail"
//             value={formData.userEmail}
//             onChange={handleChange}
//             placeholder="Enter Your Email"
//             required
//           />
//         </div>
//         <div>
//           <label>Password: </label>
//           <input
//             type="password"
//             name="userPassword"
//             value={formData.userPassword}
//             onChange={handleChange}
//             placeholder="Enter Your Password"
//             required
//           />
//         </div>
//         <button type="submit" disabled={loading}>
//           {loading ? "Please wait..." : "Login"}
//         </button>
//       </form>
//       {error && <div style={{ marginTop: "20px", color: "red" }}>{error}</div>}
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    userEmail: "",
    userPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { userEmail, userPassword } = formData;
    if (!userEmail || !userPassword) {
      alert("Email and Password are required");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
      alert("Please enter a valid email address");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `http://192.168.188.251:8080/user/login`,
        {
          params: {
            userEmail: formData.userEmail,
            userPassword: formData.userPassword,
          },
          headers: {
            "Content-Type": "application/json",
          },
          validateStatus: (status) => status < 500, // Allow handling of all non-server error statuses
        }
      );

      if (response.status === 302) {
        alert("Login successful!");
        console.log("User Data:", response.data);
        navigate("/booking"); // Correctly redirect using React Router
      } else {
        const errorMessage =
          response.data?.message || "Login failed. Please try again.";
        setError(errorMessage);
      }
    } catch (error) {
      if (error.response) {
        setError(
          error.response.data?.message || "Login failed. Please try again."
        );
      } else {
        setError("An error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="login-container"
      style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}
    >
      <h2>User Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="userEmail"
            value={formData.userEmail}
            onChange={handleChange}
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="userPassword"
            value={formData.userPassword}
            onChange={handleChange}
            placeholder="Enter Your Password"
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Please wait..." : "Login"}
        </button>
      </form>
      {error && <div style={{ marginTop: "20px", color: "red" }}>{error}</div>}
    </div>
  );
};

export default LoginPage;
