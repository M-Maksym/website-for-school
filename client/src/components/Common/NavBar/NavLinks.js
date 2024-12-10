"use client"
import React from "react";
import Link from "next/link";
import Dropdown from "./Dropdown";
import { useAuth } from "@/context/auth";


function NavLinks() {
  const { authUser, IsLoading, setAuthUser } = useAuth();
  const links = [
    {
      title: "Головна сторінка",
      path: "/",
    },
    {
      isDropdown: true,
      title: "Інформація про школу",
      links: [
        {
          title: "Історія",
          path: "/about",
        },
        {
          title: "Колектив",
          path: "/collective",
        },
        {
          title: "Цифрові технології",
          path: "/digital-technologies",
        },
      ]
    },
    {
      title: "Новини",
      path: "/events",
    },
    {
      isDropdown: true,
      title: "Структура навчального року",
      links: [
        {
          title: "Структура",
          path: "/structure-year/structure",
        },
        {
          title: "Розклад уроків",
          path: "/structure-year/lesson-schedule",
        },
        {
          title: "Розклад дзвінків",
          path: "/structure-year/call-schedule",
        },
      ]
    },
    {
      isDropdown: true,
      title: "Батькам і дітям",
      links: [
        {
          title: "Випускнику та ДПА",
          path: "/parents/graduate",
        },
        {
          title: "Зарахування дітей до школи",
          path: "/parents/children",
        },
        {
          title: "Доступність закладу освіти для осіб з особливими потребами",
          path: "/parents/accessibility",
        },
        {
          title: "Корисне та цікаве",
          path: "/parents/interesting",
        },
      ]
    },
    {
      title: "Контакти",
      path: "/contact",
    },
    {
      title: "Методична робота",
      path: "/methodical-work",
    },
    {
      title: "Публічна інформація",
      path: "/public-information",
    },
    {
      authDependent: true,
      title: "Увійти",
      path: "/login",
      Alttitle: "Керування",
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