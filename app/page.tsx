import Dashboard from "./dashboard/page";
import Header from "@/components/Header/Header";
import SideMenu from "@/components/Header/SideMenu/SideMenu";



export default function Home() {
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
