import {options} from '../../app/api/auth/[...nextauth]/options';
import { getServerSession } from "next-auth/next";
import {redirect} from 'next/navigation';
import { Avatar } from '@mui/material';
export default async function Login(){
    const session = await getServerSession(options);

    if (session){
        return(
            <>
                <h4>Welcome {session?.user?.name}</h4>
                <Avatar alt={session?.user?.name as string} src={session?.user?.image as string} />
            </>
        )
    }else{
        return (
            <>
                {/* <h1>User not logged in</h1>
                <button onClick={() => redirect('/api/auth/signin?callbackUrl=/server')}>Sign in </button> */}

                {redirect('/api/auth/signin')}
            
            </>
        )
    }


    return(

        <>
    (<h1>Welcome {session?.user?.email}</h1>
                
   +
        </>
    )
}