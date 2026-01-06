import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useGoogleLogin } from "@react-oauth/google";

export default function RegisterPage() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const navigate = useNavigate()

    const googleRegister = useGoogleLogin({
        onSuccess: (response)=>{
            axios.post(import.meta.env.VITE_BACKEND_URL+"/api/users/google-register",{
                token : response.access_token
            }).then(
                (response)=>{
                    console.log(response.data)
                    localStorage.setItem("token",response.data.token)
                    toast.success("Registration successful")
                    // All new registration are users
                    navigate("/")
                    
                }
            ).catch(
                ()=>{
                    toast.error("google Registration failed failed")
                }
            )
        }
    })

    function register(){
       // Validation
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            toast.error("All fields are required")
            return
        }

        if (password !== confirmPassword) {
            toast.error("Passwords do not match")
            return
        }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters")
            return
        }

        console.log(firstName, lastName, email, password)
        
        axios.post(import.meta.env.VITE_BACKEND_URL + "/api/users/register", {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }).then(
            (response) => {
                console.log(response.data)
                localStorage.setItem("token", response.data.token)
                toast.success("Registration successful! Welcome!")
                
                // All new registrations are users, navigate to user dashboard
                navigate("/")
            }
        ).catch(
            (error) => {
                console.log(error)
                toast.error(error.response?.data?.message || "Registration failed")
            }
        )
    }
     return (
        <div className="w-full h-screen bg-cover bg-center flex justify-center items-center"
            style={{ backgroundImage: "url('/loginbg2.jpg')" }}>
            <div className="w-[500px] min-h-[600px] backdrop-blur-sm shadow-2xl rounded-[30px] relative gap-[15px] text-white flex flex-col items-center justify-center py-8">
                <h1 className="absolute top-[20px] text-2xl font-bold text-center">Register</h1>
                
                <div className="w-[350px] flex flex-col">
                    <span className="text-lg">First Name</span>
                    <input 
                        onChange={(e) => setFirstName(e.target.value)}
                        type="text" 
                        className="w-[350px] h-[40px] border border-white rounded-xl px-3 "
                        placeholder="Enter your first name"
                    />
                </div>

                <div className="w-[350px] flex flex-col">
                    <span className="text-lg">Last Name</span>
                    <input 
                        onChange={(e) => setLastName(e.target.value)}
                        type="text" 
                        className="w-[350px] h-[40px] border border-white rounded-xl px-3"
                        placeholder="Enter your last name"
                    />
                </div>

                <div className="w-[350px] flex flex-col">
                    <span className="text-lg">Email</span>
                    <input 
                        onChange={(e) => setEmail(e.target.value)}
                        type="email" 
                        className="w-[350px] h-[40px] border border-white rounded-xl px-3 "
                        placeholder="Enter your email"
                    />
                </div>

                <div className="w-[350px] flex flex-col">
                    <span className="text-lg">Password</span>
                    <input 
                        onChange={(e) => setPassword(e.target.value)}
                        type="password" 
                        className="w-[350px] h-[40px] border border-white rounded-xl px-3 "
                        placeholder="Enter your password"
                    />
                </div>

                <div className="w-[350px] flex flex-col">
                    <span className="text-lg">Confirm Password</span>
                    <input 
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        type="password" 
                        className="w-[350px] h-[40px] border border-white rounded-xl px-3 "
                        placeholder="Confirm your password"
                    />
                </div>

                <button 
                    onClick={register} 
                    className="w-[350px] h-[40px] bg-blue-500 rounded-xl text-white text-lg mt-3 hover:bg-blue-600 transition-all duration-300">
                    Register
                </button>

                <button 
                    onClick={googleRegister} 
                    className="w-[350px] h-[40px] bg-red-500 rounded-xl text-white text-lg hover:bg-red-600 transition-all duration-300">
                    Register with Google
                </button>

                <p>Already have an account? <Link to="/login" className="text-blue-500 underline">Login</Link> here</p>
            </div>
        </div>
    );


}