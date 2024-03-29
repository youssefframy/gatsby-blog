import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Icon } from "@iconify/react"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `
  )

  return (
    <div className="dark:bg-mainBlack dark:text-white">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="py-4 px-4 md:px-16 lg:px-24">
        <hr className="w-full pb-6 md:pb-8" />
        <main className="container">
          {children}
        </main>
        <div className="flex justify-start items-center gap-4 md:gap-6">
          <a alt="github account" href="https://github.com/youssefframy" target="_blank" aria-label="Github Account">
            <Icon icon="fa-brands:github-alt" w={32} height={32} className="hover:text-mainPurple cursor-pointer duration-200 transition-all ease-linear" />
          </a>
          <a alt="Linkedin profile" href="https://www.linkedin.com/in/youssefframy/" target="_blank" aria-label="LinkedIn Profile">
            <Icon icon="la:linkedin-in" w={32} height={32} className="hover:text-mainPurple cursor-pointer duration-200 transition-all ease-linear" />
          </a>
        </div>
        <hr className="w-full my-4" />
        <footer className="lg:text-lg font-semibold pb-2">
          © {new Date().getFullYear()}, Created by Y. R
        </footer>
      </div>
    </div>
  )
}

export default Layout
