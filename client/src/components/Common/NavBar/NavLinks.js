"use client"
import React from "react";
import Link from "next/link";
import Dropdown from "./Dropdown";
import { useAuth } from "@/context/auth";


function NavLinks() {
  const { authUser, IsLoading, setAuthUser } = useAuth();
  const links = [
    {
      title: "Домашня сторінка",
      path: "/",
    },
    {
      title: "Про нас",
      path: "/about",
    },
    {
      title: "Контакти",
      path: "/contact",
    },
    {
      title: "Події",
      path: "/events",
    },
    {
      title: "Основні моменти",
      path: "/highlights",
    },
    {
      isDropdown: true,
      title: "Учню",
      links: [
        {
          title: "Departments",
          path: "/academics/departments",
        },
        {
          title: "Бібліотека",
          path: "/academics/resources/library",
        },
        {
          title: "Classroom",
          path: "/academics/resources/moodle",
        },
      ]
    },
    {
      title: "Alumni",
      path: "/alumni",
    },
    // {
    //   title: "Administration",
    //   path: "/administration",
    // },
    {
      authDependent: true,
      title: "LogIn",
      path: "/login",
      Alttitle: "Dashboard",
      Altpath: "/admin/dashboard",
    },
  ];

  return (
    <>
      {links.map((el, index) => (
        <React.Fragment key={index}>
          {(el.isDropdown) ?
            <Dropdown data={el} />
            :
            <li className="m-1 transition duration-300 ease-in-out transform hover:scale-110">
              {el.authDependent && authUser && authUser?.isAdmin ?
                <Link href={el.Altpath} className="font-bold text-white hover:underline px-2 bg-transparent">{el.Alttitle}</Link> :
                <Link href={el.path} className="font-bold text-white hover:underline px-2 bg-transparent">{el.title}</Link>
              }
            </li >
          }
        </React.Fragment>
      ))}
    </>

  )
}

export default NavLinks