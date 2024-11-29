import { createContext, ReactNode, useState } from "react";

interface props {
    children : ReactNode ; 
}
interface values {
    page : string , 
    setPage : React.Dispatch<React.SetStateAction<string>> , 
}
export const currentPage = createContext<values | null>(null) ; 
export default function Context({children} : props) {
    const currentLocation = location.pathname.slice(location.pathname.lastIndexOf('/')).slice(1) ; 
    const [page , setPage] = useState(currentLocation) ; 
    return (
        <currentPage.Provider value={{page , setPage}}>{children}</currentPage.Provider>
    )
}