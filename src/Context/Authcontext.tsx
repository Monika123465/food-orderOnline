
import { createContext, useState } from "react";




const local = localStorage.getItem('users')
const initalData = {
    //users:JSON.parse(localStorage.getItem('users')||"")||[],
    users: local ? JSON.parse(local) : [],
    user: {},
    Signup: (_: SignUp) => { },
    signIn: (_: signin): boolean => false,
     Logout:()=>{}
}

// initial data change nii ho raha hai yahi method rah ja raha haibaad me v islie work nii kar raha hai huu


export const UserContext = createContext(initalData)
interface signin {
    email: string
    password: string

}

interface SignUp {
    username: string;
    email: string;
    lastName: string;
    password: string;
}

function AuthContextProvider({ children }: {children:React.ReactNode}) {
    const [users, setUsers] = useState<SignUp[]>(local ? JSON.parse(local) : []);
    const [user, setUser] = useState<SignUp>(JSON.parse(localStorage.getItem('user') || "null"));


    const Signup = (user: SignUp) => {
        const updateuser = [...users, user]
        setUsers(updateuser)
        localStorage.setItem('users', JSON.stringify(updateuser))
    }

    const signIn = ({ email, password }: signin): boolean => {
       // console.log(users,'monika')
        const user = users.find((el) => (el.email === email) && (el.password === password))
        console.log(user)

        if (!user){
            return false
             
        }
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user))

        return true
    }
    const Logout=()=>{
        if(user){
               window.location.reload()
          //setUser(null)
        localStorage.removeItem('user')
    } 
}
    return <UserContext.Provider value={{ user, users, Signup, signIn ,Logout}}>
        {children}

    </UserContext.Provider>

}

export default AuthContextProvider