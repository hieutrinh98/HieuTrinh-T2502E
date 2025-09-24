
function Login() {
    return(
        <div style={{maxWidth:'600px', margin:'0 auto', padding:'24px'}}>
            <h3>Login</h3>
            <div className="d-block py-2">
                <input placeholder="User name" className="form-control text-center" type="text" name="" id="" />
            </div>
            <div className="d-block py-2">
                <input placeholder="Password" className="form-control text-center" type="password" name="" id="" />
            </div>
            <div className="d-block w-100">
                <a className="btn btn-primary w-100" href="/authentic">Login</a>
            </div>
        </div>
    )
}
export default Login;