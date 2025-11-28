import { useState } from "react";
function useForm(initialValues) {
  const [formData, setFormData] = useState(initialValues);

  // Track input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`[INPUT CHANGE] ${name}: ${value}`);
    setFormData({ ...formData, [name]: value });
  };

  
  const handleSubmit = (callback) => (e) => {
    e.preventDefault();
    console.log("[FORM SUBMITTED]:", formData);
    callback(formData);
  };

  return { formData, handleChange, handleSubmit };
}


export default function App() {
  // Registration Form using the hook
  const registerForm = useForm({
    name: "",
    email: "",
    password: "",
  });


  const loginForm = useForm({
    email: "",
    password: "",
  });

  return (
    <div style={{ padding: "20px" }}>
      {/* Registration Form */}
      <h2>Student Registration</h2>
      <form onSubmit={registerForm.handleSubmit((data) => console.log("REGISTER DATA:", data))}>
        <input
          name="name"
          placeholder="Name"
          onChange={registerForm.handleChange}
        />
        <br /><br />

        <input
          name="email"
          placeholder="Email"
          onChange={registerForm.handleChange}
        />
        <br /><br />

        <input
          name="password"
          placeholder="Password"
          onChange={registerForm.handleChange}
        />
        <br /><br />

        <button type="submit">Register</button>
      </form>

      <hr />

      {/* Login Form */}
      <h2>Student Login</h2>
      <form onSubmit={loginForm.handleSubmit((data) => console.log("LOGIN DATA:", data))}>
        <input
          name="email"
          placeholder="Email"
          onChange={loginForm.handleChange}
        />
        <br /><br />

        <input
          name="password"
          placeholder="Password"
          onChange={loginForm.handleChange}
        />
        <br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
