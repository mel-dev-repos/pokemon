import React from "react"
import { Footer } from "./Footer.layout"
import { Header } from "./Header.layout"

export const MainLayout = ({children}: {children: React.ReactNode}) => {
  return(
    <main>
      <Header/>
      {children}
      <Footer/>
    </main>
  )
}