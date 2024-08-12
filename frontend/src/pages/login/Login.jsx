/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link } from "react-router-dom"
import useLogin from "../../hooks/useLogin";
const Login = () => {

    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { loading, login } = useLogin()
    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(userName, password)
    }

    return (
        <div className="flex felx-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg
        bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Login
                    <span className="text-blue-500"> ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input type="text"
                            value={userName}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter username" className="w-full input input-border h-10" />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">password</span>
                        </label>
                        <input type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password" className="w-full input input-border h-10" />
                    </div>
                    <Link to='/signup' className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                        Don't have an account?
                    </Link>
                    <div>
                        <button className="btn btn-block btn-sm mt-2"
                            disabled={loading}
                        >
                            {loading ? <span className="loading loading-spinner"></span> : "Login"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login




// const Login = () => {
//     return (
//         <div className="flex felx-col items-center justify-center min-w-96 mx-auto">
//             <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg
//         bg-opacity-0">
//                 <h1 className="text-3xl font-semibold text-center text-gray-300">
//                     Login
//                     <span className="text-blue-500">ChatApp</span>
//                 </h1>

//                 <form>
//                     <div>
//                         <label className="label p-2">
//                             <span className="text-base label-text">Username</span>
//                         </label>
//                         <input type="text" placeholder="Enter username" className="w-full input input-border h-10" />
//                     </div>
//                     <div>
//                         <label className="label p-2">
//                             <span className="text-base label-text">password</span>
//                         </label>
//                         <input type="text" placeholder="Enter password" className="w-full input input-border h-10" />
//                     </div>
//                     <a href="" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
//                         Don't have an account?
//                     </a>
//                     <div>
//                         <button className="btn btn-block btn-sm mt-2">Login</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Login