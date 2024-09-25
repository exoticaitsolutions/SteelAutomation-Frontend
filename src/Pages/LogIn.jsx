import { Link } from "react-router-dom";
function LogIn (){
return(
    <body_Login>
    <div className="container">
    <div class="login-box">
        
      <img src="login.png" />
      <h2>Member Login</h2>

      <form className="login-form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Sign In</button>
      </form>
     
      <div className="login-btn">
      <Link to="">Forgot Password?</Link>
      </div>
    </div>
    </div>
  </body_Login>
);
}
export default LogIn;