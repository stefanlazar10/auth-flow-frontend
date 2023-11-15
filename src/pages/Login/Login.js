const Login = () => {

    return (
<div className="text-black">
<form action ="" class="relative centre">
    <h1>Login</h1>
    <div class="input-box border-solid border-black border-1 rounded left-2">
        <input type="text" placeholder="Username" required/>
            
    </div>
    <div class="input-box">
        <input type="password" placeholder="password" required/>
    </div>
    <div class ="remember">
        <label><input type="checkkbox border-0"/>Remember me</label>
        <a href="#">Forgot password?</a>
       
    </div>
    <button type="submit" class="btn order-solid border-black border-1 rounded">Login</button>
</form>
</div>
)
}

export default Login;