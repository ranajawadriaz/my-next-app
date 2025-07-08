// import Image from "next/image";
'use client'
import Link from "next/link";
import ProductsCard from "./components/productsCard";
// import UsersData from "./components/renderServer";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users">Users</Link>
      <ProductsCard />
      <Link href='/usersdata'>UsersData</Link>
      
      
      
    </main>
    
  );
}
