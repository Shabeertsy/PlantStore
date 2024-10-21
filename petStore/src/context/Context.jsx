import { createContext, useState, useEffect } from "react";
import jwt_decode from 'jwt-decode'
import { instance } from "../Axios";
import { useNavigate } from "react-router-dom";



// Create context and context data
export const DataContext = createContext();



export const DataProvider = ({ children }) => {


    const navigate = useNavigate()

    let [apiData, setApiData] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [profile, setProfile] = useState([])


    // get authtoken from localStorage

    const [authToken, setAuthtoken] = useState(() => localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken')) : null)
    const [user, setUser] = useState(() => localStorage.getItem('authToken') ? jwt_decode((localStorage.getItem('authToken'))) : null)

    



    return (
        <DataContext.Provider value={contextData}>
            {children}
        </DataContext.Provider>)
};