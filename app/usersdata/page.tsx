import Link from 'next/link';
import React from 'react'

interface usersData{
    id:number;
    name:string;
    email:string
}

const UsersData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users'
        ,
        {cache:'no-store'} //disable cache, reloads
        // {next:{revalidate:10}} //reloads later but cache there
        //no cache in axious
    )
    const usersdata:usersData[]=await res.json()
  return (
    <>
    <h1>UsersData</h1>
    <p >{new Date().toLocaleTimeString()}</p>
    <table className='table table-bordered'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>


        {usersdata.map(user=><tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            

        </tr>)}
        </tbody>
    </table>
    <br />
    <Link href='/'>GO back to Home</Link>
    </>

    


    
  )
}

export default UsersData