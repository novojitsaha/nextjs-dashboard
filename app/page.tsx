import Dashboard from "./dashboard/page";
import Header from "@/components/Header/Header";
import SideMenu from "@/components/Header/SideMenu/SideMenu";
import Login from "@/components/Login/Login";
import { getServerSession } from "next-auth";
import {options} from './api/auth/[...nextauth]/options'


export default async function Home() {
  const session = await getServerSession(options)
  return (
    <>
      <main>

        <Header/>
        <SideMenu/>
        <Dashboard/>
        

      </main>
   
    
    </>
      

  )
}
