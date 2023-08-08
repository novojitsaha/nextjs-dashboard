import {options} from '../api/auth/[...nextauth]/options'

import { getServerSession } from "next-auth/next"


export default async function (){
    const session = await getServerSession()
    
    
    return(
        <>

            
            {session? (
                <h1>logged in</h1>
            ) : (
                <h1>NOT logged in</h1>
            )
    
        }
        </>
    )
}