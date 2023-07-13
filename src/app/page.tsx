import Image from "next/image";
import { useState } from "react";

export default function Home() {
  return (
    <main>
      <div className="fixed w-full h-16 bg-opacity-90 bg-white z-50"></div>
      <div className="ease-in-out flex justify-center">
        <div className="z-50 w-full flex px-5 fixed justify-between max-w-6xl h-16 items-center">
          <img
            className="h-8 w-8 rounded-full"
            src="https://media.discordapp.net/attachments/986830804221042728/1127849941201600522/image.png?width=136&height=136"
          ></img>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="text-zinc-900 w-8 h-8 md:hidden lg:hidden"
          >
            <path
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
              clip-rule="evenodd"
            />
          </svg>
          <div className="hidden justify-center md:flex lg:flex">
            <ul className="sm:justify-center text-slate-600 flex font-light space-x-10 ">
              <li>
                <a href="https://preview.cruip.com/simple/index.html">
                  Pricing
                </a>
              </li>
              <li>
                <a href="https://preview.cruip.com/simple/about.html">
                  About us
                </a>
              </li>
              <li>
                <a href="https://preview.cruip.com/simple/tutorials.htmlx">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li className="flex">
                <a href="">Resources</a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </li>
            </ul>
          </div>
          <div className="justify-items-end text-black text-slate-600 hidden md:flex lg:flex">
            <button className="w-28 h-10">Sign in</button>
            <button className="w-28 bg-black text-white h-10 rounded">
              Sign up &#8594;
            </button>
          </div>
        </div>
      </div>
      <section className="relative">
        <div className="z-[-100] absolute -bottom-16 left-1/2 lg:translate-x-[-50%]">
          <svg className="w-[1360px] h-[578px] block overflow-hidden align-middle ">
            <g className="fill-current gradient-stop" fill-rule="evenodd">
              <circle
                className="hidden lg:block text-zinc-300"
                cx="1232"
                cy="128"
                r="128"
              ></circle>
              <circle
                className="hidden lg:block text-zinc-300"
                cx="155"
                cy="443"
                r="64"
              ></circle>
            </g>
          </svg>
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stop-color="#FFF" offset="0%"></stop>
              <stop stop-color="#EAEAEA" offset="77.402%"></stop>
              <stop stop-color="#DFDFDF" offset="100%"></stop>
            </linearGradient>
          </defs>
        </div>
        <div className="px-5">
          <div className="tracking-[-0.02em] mb-4 text-black pt-32 leading-[3.725rem] text-center text-5.5xl font-bold md:text-7.5xl lg:text-7.5xl pt-40 max-w-6xl mx-auto leading-none">
            Make your website{" "}
            <span className="text-center tracking-tight font-bold text-transparent text-5.5xl bg-clip-text bg-gradient-to-r from-blue-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% md:text-7.5xl lg:text-7.5xl">
              wonderful
            </span>
          </div>
          <div className="mx-auto pb-12 max-w-3xl">
            <div className="font-light text-xl text-zinc-500 mb-8 text-center">
              Our landing page template works on all devices, so you only have
              to set it up once, and get beautiful results forever.
            </div>
            <div className="mx-auto md:flex md:max-w-none md:justify-center lg:flex max-w-none justify-center ">
              <button className="rounded mb-4 px-8 py-3 w-full bg-blue-600 hover:bg-blue-800 md:w-auto md:mr:4 lg:w-auto mr-4">
                Start free trial
              </button>
              <button className="rounded px-8 py-3 w-full bg-black hover:bg-zinc-800 md:w-auto md:max-h-12 lg:w-auto max-h-12 ">
                Learn more
              </button>
            </div>
          </div>

          <img
            src="https://cdn.discordapp.com/attachments/1057770682332745879/1127817176024358943/image.png"
            className="rop-shadow-md max-w-full w-[48rem] rounded-md mr-auto ml-auto max-w-6x1 justify-center"
          ></img>

          <button className="group drop-shadow-xl mb-20 flex bg-white text-black p-4 rounded-full justify-center relative bottom-7 inset-x-auto ml-auto mr-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="group-hover:text-blue-500 text-slate-600 w-6 h-6 mr-2 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
              />
            </svg>
            <div>Watch the full video (2 min)</div>
          </button>
        </div>
      </section>
      <section className="relative">
        <div className="bg-zinc-50 mb-16 absolute top-0 bottom-0 right-0 left-0 z-0 "></div>
        <div className="z-10 relative">
          <div className="pt-12 text-black font-extrabold text-center mb-4 text-3.5xl lg:text-4.5xl">
            How Simple works
          </div>
          <div className="absolute w-px h-20 m-auto right-0 left-0 -translate-y-40 bg-gray-200 p-px"></div>
          <div className="mx-auto pb-12 font-light text-xl max-w-3xl text-zinc-500 tracking-[-0.01em] text-center">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
            cupidatat.
          </div>
          <img
            className="max-w-6xl w-full pb-12 px-5 lg:mx-auto"
            src="https://preview.cruip.com/simple/images/features-top-image.png"
          ></img>

          <section className="lg:grid max-w-6xl gap-6 grid-cols-12 mx-auto">
            <div className="col-span-6">
              <div className="px-5">
                <div className="mt-4 text-black font-extrabold text-3.5xl mb-4 ">
                  Powerful suite of tools
                </div>
                <div className="pb-12 font-light text-xl max-w-3xl text-zinc-500 tracking-[-0.01em]">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa.
                </div>
              </div>
              <div className="px-5">
                <button className="border border-gray-100 rounded-md bg-white hover:bg-gray-100 p-5 flex mb-3">
                  <div>
                    <div className="text-left text-black font-semibold text-l">
                      Building the simple ecosystem
                    </div>
                    <div className="text-left text-zinc-500 font-light text-l">
                      Take collaberation to the next level with security and
                      administrative features built for teams
                    </div>
                  </div>
                  <img
                    className="h-8 ml-2 my-auto w-auto rounded-full"
                    src="https://cdn.discordapp.com/attachments/986830804221042728/1127996659624857741/image.png"
                  ></img>
                </button>
                <button className="border border-gray-100 rounded-md bg-white hover:bg-gray-100 p-5 flex mb-3">
                  <div>
                    <div className="text-left text-black font-semibold text-l">
                      Building the simple ecosystem
                    </div>
                    <div className="text-left text-zinc-500 font-light text-l">
                      Take collaberation to the next level with security and
                      administrative features built for teams
                    </div>
                  </div>
                  <img
                    className="h-8 ml-3 my-auto w-auto rounded-full"
                    src="https://cdn.discordapp.com/attachments/986830804221042728/1127996733952102580/image.png"
                  ></img>
                </button>
                <button className="border border-zinc-100 rounded-md bg-white hover:bg-gray-100 p-5 flex mb-3">
                  <div>
                    <div className="text-left text-black font-semibold text-l">
                      Building the simple ecosystem
                    </div>
                    <div className="text-left text-gray-500 font-light text-l">
                      Take collaberation to the next level with security and
                      administrative features built for teams
                    </div>
                  </div>
                  <img
                    className="h-8 ml-3 my-auto w-auto rounded-full"
                    src="https://media.discordapp.net/attachments/986830804221042728/1127996858522943608/image.png?width=392&height=396"
                  ></img>
                </button>
              </div>
            </div>
            <div className="mb-8 relative flex-col inline-flex px-5 lg:col-span-6">
              <img
                className="w-full h-auto rounded-md col-span-6"
                src="https://preview.cruip.com/simple/images/features-home-bg-01.png"
              ></img>
              <img
                className="absolute w-full animate-float top-20 "
                src="https://preview.cruip.com/simple/images/features-home-element-01.png"
              ></img>
              <img
                className="absolute w-full animate-float top-28 animation-delay-500"
                src="https://preview.cruip.com/simple/images/features-home-element-02.png"
              ></img>
              <img
                className="absolute w-full animate-float top-72 animation-delay-1000"
                src="https://preview.cruip.com/simple/images/features-home-element-03.png"
              ></img>{" "}
            </div>
          </section>
        </div>
      </section>
      <section className="relative">
        <div className="bg-zinc-900 absolute top-1/2 bottom-0 left-0 right-0 md:mt-[6rem] lg:mt-0"></div>
        <div className="absolute w-px h-20 m-auto right-0 left-0 -bottom-10 bg-gray-200 p-px"></div>
        <div className="relative px-5 pb-20">
          <div className="pt-12 text-center text-black font-extrabold text-3.5xl lg:text-4.5xl">
            Explore the solutions
          </div>
          <div className="pb-12 text-center font-light text-xl max-w-3xl text-zinc-500 tracking-[-0.01em] lg:mx-auto">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
            cupidatat.
          </div>
        </div>
        <div className="relative px-5 pb-20 max-w-6xl flex flex-col ml-auto mr-auto gap-6 md:grid md:grid-cols-2 md:max-w-[42rem] lg:grid lg:grid-cols-3 lg:max-w-6xl">
          <div className="rounded-md p-6 bg-white drop-shadow-lg">
            <img
              className="h-14 w-14 ml-auto mr-auto"
              src="https://cdn.discordapp.com/attachments/1057770682332745879/1127497119822004335/image.png"
            ></img>
            <div className="mt-3 mb-1 text-center text-xl font-bold text-black">
              Headless CMS
            </div>
            <div className="text-zinc-500 font-light text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          <div className="rounded-md p-6 bg-white drop-shadow-lg">
            <img
              className="h-14 w-14 ml-auto mr-auto"
              src="https://cdn.discordapp.com/attachments/1057770682332745879/1127593432127377538/image.png"
            ></img>
            <div className="mt-3 mb-1 text-center text-xl font-bold text-black">
              Headless CMS
            </div>
            <div className="text-zinc-500 font-light text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          <div className="rounded-md p-6 bg-white drop-shadow-lg">
            <img
              className="h-14 w-14 ml-auto mr-auto"
              src="https://media.discordapp.net/attachments/1057770682332745879/1127593669038452746/image.png?width=232&height=232"
            ></img>
            <div className="mt-3 mb-1 text-center text-xl font-bold text-black">
              Headless CMS
            </div>
            <div className="text-zinc-500 font-light text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          <div className="rounded-md p-6 bg-white drop-shadow-lg">
            <img
              className="h-14 w-14 ml-auto mr-auto"
              src="https://media.discordapp.net/attachments/1057770682332745879/1127593834667311164/image.png?width=232&height=232"
            ></img>
            <div className="mt-3 mb-1 text-center text-xl font-bold text-black">
              Headless CMS
            </div>
            <div className="text-zinc-500 font-light text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          <div className="rounded-md p-6 bg-white drop-shadow-lg">
            <img
              className="h-14 w-14 ml-auto mr-auto"
              src="https://media.discordapp.net/attachments/1057770682332745879/1127594043040338011/image.png?width=232&height=232"
            ></img>
            <div className="mt-3 mb-1 text-center text-xl font-bold text-black">
              Headless CMS
            </div>
            <div className="text-zinc-500 font-light text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          <div className="rounded-md p-6 bg-white drop-shadow-lg">
            <img
              className="h-14 w-14 ml-auto mr-auto"
              src="https://media.discordapp.net/attachments/1057770682332745879/1127594168064163880/image.png?width=232&height=232"
            ></img>
            <div className="mt-3 mb-1 text-center text-xl font-bold text-black">
              Headless CMS
            </div>
            <div className="text-zinc-500 font-light text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="px-6 max-w-6xl mx-auto">
          <div className="py-20">
            <div className="pb-20 text-center max-w-3xl mx-auto">
              <div className="text-black font-extrabold text-3.5xl lg:text-4.5xl">
                Simple can help you scale internationally
              </div>
              <div className="font-light text-xl text-zinc-500 tracking-[-0.01em]">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
                cupidatat.
              </div>
            </div>
            <div className="pt-20 items-center flex-col flex">
              <div className="relative">
                <img
                  className="z-20 rounded-full relative max-w-[25rem] max-h-[25rem] w-full h-full px-5"
                  src="https://preview.cruip.com/simple/images/planet.png"
                ></img>
                <div className="z-10 scale-150 absolute w-20 h-20 bg-zinc-200 max-w-[27rem] max-h-[27rem] w-full h-full -top-0 animate-pulse rounded-full"></div>
                <img
                  className="z-30 absolute top-0 -right-[27%] w-[65.25%] -top-[3%]"
                  src="https://preview.cruip.com/simple/images/planet-avatar-01.png"
                  alt="Planet avatar 01"
                />
                <img
                  className="z-30 absolute -bottom-[20%] -right-[18%] w-[88.7%]"
                  src="https://preview.cruip.com/simple/images/planet-avatar-02.png"
                  alt="Planet avatar 02"
                />
                <svg
                  className="z-30 absolute left-[6%] top-0 w-1/5"
                  viewBox="0 0 80 80"
                >
                  <circle
                    className="fill-current text-zinc-800"
                    cx="40"
                    cy="40"
                    r="40"
                  ></circle>
                  <path
                    className="stroke-current text-white"
                    d="M30.19 41.221c7.074 3.299 12.957-4.7 20.03-1.401l1.769.824-1.419-3.883M43.988 50.877l3.887-1.41-1.769-.824c-2.19-1.021-3.475-2.651-4.42-4.512M38.724 36.91c-.944-1.86-2.23-3.49-4.42-4.512"
                    stroke-linecap="square"
                    stroke-width="2"
                  ></path>
                </svg>
                <svg
                  className="z-30 absolute top-[32%] -left-[27%] left-0 w-[16%]"
                  viewBox="0 0 64 64"
                >
                  <circle
                    className="fill-current text-blue-600"
                    cx="32"
                    cy="32"
                    r="32"
                  ></circle>
                  <path
                    className="stroke-current text-whtie"
                    d="M20.733 31.416l18.127-8.452M43.039 31.926L24.913 40.38"
                    stroke-width="2"
                    fill="none"
                  ></path>
                  <path
                    className="stroke-current text-white"
                    stroke-linecap="square"
                    d="M32.238 20.595l6.622 2.369-2.442 6.594M31.534 42.747l-6.621-2.368 2.442-6.595"
                    stroke-width="2"
                    fill="none"
                  ></path>
                </svg>
                <svg
                  className="z-30 absolute top-[55%] -right-[16%] w-[16%] drop-shadow-lg"
                  viewBox="0 0 64 64"
                >
                  <circle
                    className="fill-white"
                    cx="32"
                    cy="32"
                    r="32"
                  ></circle>
                  <path
                    className="fill-current text-gray-500"
                    d="M37.11 32.44l-1.69 4.646-8.458-3.078.676-1.859-4.773 1.42 2.744 4.156.677-1.858 9.396 3.42a.994.994 0 001.278-.587l2.03-5.576-1.88-.684zM27.037 30.878l1.691-4.646 8.457 3.078-.676 1.858 4.773-1.42-2.744-4.155-.676 1.858-9.397-3.42a.994.994 0 00-1.278.587l-2.03 5.576 1.88.684z"
                  ></path>
                </svg>
                <svg className="absolute w-[3.8%] h-[4.2%] rounded-full z-30  top-[19%] left-[46%] bg-blue-500"></svg>
                <svg className="absolute w-[3.8%] h-[4.2%] rounded-full z-30  top-[45%] left-[50%] bg-blue-500"></svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="text-center pb-20 max-w-3xl mx-auto text-black font-extrabold text-3.5xl lg:text-4.5xl">
          The most innovative businesses choose Simple
        </div>

        <ul className="drop-shadow mb-16 font-medium text-sm justify-center flex-wrap flex m-[-0.5rem]">
          <li className="m-2">
            <a
              href=""
              className="inline-flex rounded-full text-center px-4 py-2 text-white bg-blue-600 hover:bg-blue-800"
            >
              Developers
            </a>
          </li>
          <li className="m-2">
            <a
              href=""
              className="inline-flex rounded-full ext-center px-4 py-2 text-zinc-600 bg-white hover:bg-zinc-200"
            >
              SaaS
            </a>
          </li>
          <li className="m-2">
            <a
              href=""
              className="inline-flex rounded-full text-center px-4 py-2 text-zinc-600 bg-white hover:bg-zinc-200"
            >
              Web Agencies
            </a>
          </li>
          <li className="m-2">
            <a
              href=""
              className="inline-flex rounded-full text-center px-4 py-2 text-zinc-600 bg-white hover:bg-zinc-200"
            >
              E-Commerce
            </a>
          </li>
          <li className="m-2">
            <a
              href=""
              className="inline-flex rounded-full text-center px-4 py-2 text-zinc-600 bg-white hover:bg-zinc-200 "
            >
              Startup
            </a>
          </li>
        </ul>
        <div className="max-w-[24rem] px-6 mx-auto md:max-w-6xl lg:max-w-6xl">
          <div className="gap-x-[2rem] gap-y-[1.5rem] grid items-start md:grid-cols-3 lg:grid-cols-3 ">
            <article className="opacity-100	ease-[cubic-bezier(.25,.46,.45,.94)] duration-700 flex-col h-full flex pointer-events-auto">
              <header>
                <a className="block mb-[1.5rem]">
                  <figure className="pb-[56.25%] rounded overflow-hidden h-0 relative">
                    <img
                      className="ease-out duration-700 object-cover"
                      src="https://preview.cruip.com/simple/images/news-01.jpg"
                    ></img>
                  </figure>
                </a>
                <div className="mb-3">
                  <ul className="flex-wrap font-medium text-xs flex m-[-0.25rem]">
                    <li className="m-[0.25rem]">
                      <a
                        href=""
                        className="text-xs ease-in-out duration-150 text-center py-[0.25rem] px-3 bg-blue-500 rounded-full inline-flex hover:bg-blue-700"
                      >
                        Case studies
                      </a>
                    </li>
                    <li className="m-[0.25rem]">
                      <a
                        href=""
                        className="text-xs ease-in-out duration-150 text-center text-black py-[0.25rem] px-3 bg-white shadow rounded-full inline-flex hover:bg-zinc-200"
                      >
                        hubspot
                      </a>
                    </li>
                  </ul>
                </div>
                <h3 className="leading-[1.375] font-bold text-xl text-black">
                  <a href="" className="hover:underline">
                    “How HubSpot saved 25% on developing costs by switching to
                    Simple.”
                  </a>
                </h3>
              </header>
              <footer className="text-sm items-center flex mt-4">
                <div className="shrink-0 flex mr-[0.75rem]">
                  <a className="relative">
                    <span className="m-[-1px] top-0 bottom-0 left-0 right-0 absolute">
                      <span className="rounded-full m-[-1px] top-0 bottom-0 left-0 right-0 absolute"></span>
                    </span>
                    <img
                      src="https://preview.cruip.com/simple/images/news-author-01.jpg"
                      className="w-[32px] h-[32px] rounded-full relative max-w-full h-auto block align-middle"
                    ></img>
                  </a>
                </div>
                <div>
                  <span className="text-zinc-500 font-light">By</span>
                  <a href="" className="font-normal text-black hover:underline">
                    {" "}
                    Lisa Allison
                  </a>
                </div>
              </footer>
            </article>
            <article className="opacity-100	ease-[cubic-bezier(.25,.46,.45,.94)] duration-700 flex-col h-full flex pointer-events-auto">
              <header>
                <a className="block mb-[1.5rem]">
                  <figure className="pb-[56.25%] rounded overflow-hidden h-0 relative">
                    <img
                      className="ease-out duration-700 object-cover"
                      src="https://preview.cruip.com/simple/images/news-02.jpg"
                    ></img>
                  </figure>
                </a>
                <div className="mb-3">
                  <ul className="flex-wrap font-medium text-xs flex m-[-0.25rem]">
                    <li className="m-[0.25rem]">
                      <a
                        href=""
                        className="text-xs ease-in-out duration-150 text-center py-[0.25rem] px-3 bg-blue-500 rounded-full inline-flex hover:bg-blue-700"
                      >
                        Case studies
                      </a>
                    </li>
                    <li className="m-[0.25rem]">
                      <a
                        href=""
                        className="text-xs ease-in-out duration-150 text-center text-black py-[0.25rem] px-3 bg-white shadow rounded-full inline-flex hover:bg-zinc-200"
                      >
                        Facebook
                      </a>
                    </li>
                  </ul>
                </div>
                <h3 className="leading-[1.375] font-bold text-xl text-black">
                  <a href="" className="hover:underline">
                    “How Facebook brought 13% cost savings to their bottom line
                    with Simple’s products.”
                  </a>
                </h3>
              </header>
              <footer className="text-sm items-center flex mt-4">
                <div className="shrink-0 flex mr-[0.75rem]">
                  <a className="relative">
                    <span className="m-[-1px] top-0 bottom-0 left-0 right-0 absolute">
                      <span className="rounded-full m-[-1px] top-0 bottom-0 left-0 right-0 absolute"></span>
                    </span>
                    <img
                      src="https://preview.cruip.com/simple/images/news-author-02.jpg"
                      className="w-[32px] h-[32px] rounded-full relative max-w-full h-auto block align-middle"
                    ></img>
                  </a>
                </div>
                <div>
                  <span className="text-zinc-500 font-light">By</span>
                  <a href="" className="font-normal text-black hover:underline">
                    {" "}
                    Knut Mayer
                  </a>
                </div>
              </footer>
            </article>
            <article className="opacity-100	ease-[cubic-bezier(.25,.46,.45,.94)] duration-700 flex-col h-full flex pointer-events-auto">
              <header>
                <a className="block mb-[1.5rem]">
                  <figure className="pb-[56.25%] rounded overflow-hidden h-0 relative">
                    <img
                      className="ease-out duration-700 object-cover"
                      src="https://preview.cruip.com/simple/images/news-03.jpg"
                    ></img>
                  </figure>
                </a>
                <div className="mb-3">
                  <ul className="flex-wrap font-medium text-xs flex m-[-0.25rem]">
                    <li className="m-[0.25rem]">
                      <a
                        href=""
                        className="text-xs ease-in-out duration-150 text-center py-[0.25rem] px-3 bg-blue-500 rounded-full inline-flex hover:bg-blue-700"
                      >
                        Case studies
                      </a>
                    </li>
                    <li className="m-[0.25rem]">
                      <a
                        href=""
                        className="text-xs ease-in-out duration-150 text-center text-black py-[0.25rem] px-3 bg-white shadow rounded-full inline-flex hover:bg-zinc-200"
                      >
                        hubspot
                      </a>
                    </li>
                  </ul>
                </div>
                <h3 className="leading-[1.375] font-bold text-xl text-black hover:underline">
                  <a href="">
                    “How Tinder grew 115% and saved 120 Hours each week by
                    outsourcing to Simple.”
                  </a>
                </h3>
              </header>
              <footer className="text-sm items-center flex mt-4">
                <div className="shrink-0 flex mr-[0.75rem]">
                  <a className="relative">
                    <span className="m-[-1px] top-0 bottom-0 left-0 right-0 absolute">
                      <span className="rounded-full m-[-1px] top-0 bottom-0 left-0 right-0 absolute"></span>
                    </span>
                    <img
                      src="https://preview.cruip.com/simple/images/news-author-01.jpg"
                      className="w-[32px] h-[32px] rounded-full relative max-w-full h-auto block align-middle"
                    ></img>
                  </a>
                </div>
                <div>
                  <span className="text-zinc-500 font-light">By</span>
                  <a href="" className="font-normal text-black hover:underline">
                    {" "}
                    Lisa Allison
                  </a>
                </div>
              </footer>
            </article>
          </div>
        </div>
      </section>
      <section>
        <div className="px-[1.5rem] max-w-6xl mx-auto">
          <div className="pb-[3rem] lg:pb-[5rem]">
            <div className="px-[2rem] py-[2.5rem] rounded bg-blue-600 opacity-100 ease-[cubic-bezier(.25,.46,.45,.94)] lg:py-[4rem] px-[3rem]">
              <div className="flex-col justify-between justify-items-center items-center flex lg:flex-row ">
                <div className="mb-[1.5rem] text-center  mr-0 lg:mb-0 lg:text-left lg:mr-[4rem] ">
                  <h3 className="mb-[1rem] text-3.5xl font-bold lg:leading-5">
                    Ready to get started?
                  </h3>
                  <p className="opacity-75 text-lg">
                    We have a generous free tier available to get you started
                    right away.
                  </p>
                </div>
                <button className="">
                  <a className="px-[2rem] py-[0.75rem] bg-white rounded text-blue-600">
                    Get started for free
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="px-[1rem] lg:px-[1.5rem] max-w-6xl mx-auto">
          <div className="py-[2rem] border-y gap-8 md:grid md:grid-cols-12 md:py-[3rem] lg:grid lg:grid-cols-12 lg:py-[3rem]">
            <div className="mb-8 col-[span_12_/_span_12] lg:mb-0 lg:col-span-3">
              <div className="mb-2">
                <a className="inline-block">
                  <button className="w-8 h-8 rounded-full bg-gradient-to-bl from-blue-500 to-teal-400"></button>
                </a>
                <div className="flex text-sm text-zinc-500 mt-2 lg:mt-0">
                  <a href="" className="mr-[0.25rem] hover:text-zinc-700">
                    Terms
                  </a>
                  <a className="">.</a>
                  <a href="" className="ml-[0.25rem] hover:text-zinc-700">
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
            <div className="mb-8 col-span-6 md:col-span-3 lg:mb-0 lg:col-span-2">
              <h3 className="text-black font-medium mb-[0.5rem]">Products</h3>
              <ul className="text-sm text-zinc-500 font-light">
                <li className="mb-[0.5rem] hover:text-zinc-700">
                  <a href="">Web Studio</a>
                </li>
                <li className="mb-[0.5rem] hover:text-zinc-700">
                  <a href="">DynamicBox Flex</a>
                </li>
                <li className="mb-[0.5rem] hover:text-zinc-700">
                  <a href="">Programming Forms</a>
                </li>
                <li className="mb-[0.5rem] hover:text-zinc-700">
                  <a href="">Integrations</a>
                </li>
                <li className="mb-[0.5rem] hover:text-zinc-700">
                  <a href="">Command-line</a>
                </li>
              </ul>
            </div>
            <div className="mb-8 col-span-6 md:col-span-3 lg:mb-0 lg:col-span-2">
              <h3 className="text-black font-medium mb-[0.5rem]">Resources</h3>
              <ul className="text-sm text-zinc-500 font-light">
                <li className="mb-[0.5rem] hover:text-zinc-700">
                  <a href="">Documentation</a>
                </li>
                <li className="mb-[0.5rem] hover:text-zinc-700">
                  <a href="">Tutorials & Guides</a>
                </li>
                <li className="mb-[0.5rem] hover:text-zinc-700">
                  <a href="">Blog</a>
                </li>
                <li className="mb-[0.5rem] hover:text-zinc-700">
                  <a href="">Support Center</a>
                </li>
                <li className="mb-[0.5rem] hover:text-zinc-700">
                  <a href="">Partners</a>
                </li>
              </ul>
            </div>
            <div className="mb-8 col-span-6 md:col-span-3 lg:mb-0 lg:col-span-2">
              <h3 className="text-black font-medium mb-[0.5rem]">Company</h3>
              <ul className="text-sm text-zinc-500 font-light">
                <li className="mb-[0.5rem] hover:text-zinc-700">
                  <a href="">Home</a>
                </li>
                <li className="mb-[0.5rem] hover:text-zinc-700">
                  <a href="">About us</a>
                </li>
                <li className="mb-[0.5rem] hover:text-zinc-700">
                  <a href="">Company values</a>
                </li>
                <li className="mb-[0.5rem] hover:text-zinc-700">
                  <a href="">Pricing</a>
                </li>
                <li className="mb-[0.5rem] hover:text-zinc-700">
                  <a href="">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="col-span-6 md:col-span-3 lg:col-span-3">
              <h6 className="text-black font-medium mb-[0.5rem]">Subscribe</h6>
              <p className="text-zinc-500 text-sm font-light mb-[1rem]">
                Get the latest news and articles to your inbox every month.
              </p>
              <form className="max-w-[20rem] lg:max-w-none">
                <div className="rounded border border-zinc-200 flex-wrap flex mb-4">
                  <div className="max-w-[20rem] w-full lg:max-w-none  ">
                    <div className=" items-center max-w-[20rem] flex relative">
                      <input
                        className="text-zinc-500 text-sm px-[0.75rem] py-[0.5rem] lg:pr-[3rem] w-full"
                        type="Email"
                        placeholder="Your Email"
                      />
                      <button className="absolute left-auto top-0 right-0 bottom-0 lg:left-auto">
                        <span className="absolute mt-[0.5rem] mb-[0.5rem] top-0 bottom-0 left-0 right-0 w-px ml-[-1px] bg-zinc-200 lg:right-auto "></span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-8 h-7 text-blue-600"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div></div>
        </div>
      </footer>
      <div className="max-w-6xl w-full mx-auto px-6 py-[1rem] justify-between items-center flex-none lg:py-[2rem] lg:flex">
        <ul className="items-center mb-4 lg:mb-0 lg:ml-4 flex order-1 ">
          <li className="my-auto rounded-full bg-white drop-shadow-md">
            <a>
              <svg
                className="p-px"
                color="#808080"
                height={38}
                width={38}
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z"></path>
              </svg>
            </a>
          </li>
          <li className="my-auto rounded-full bg-white drop-shadow-md ml-[1rem]">
            <a>
              <svg
                className="p-px"
                color="#808080"
                height={38}
                width={38}
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"></path>
              </svg>
            </a>
          </li>
          <li className="my-auto rounded-full bg-white drop-shadow-md ml-[1rem]">
            <a>
              <svg
                className=""
                viewBox="0 0 32 32"
                color="#808080"
                height={38}
                width={38}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z"></path>
              </svg>
            </a>
          </li>
        </ul>
        <div className="text-sm mr-[1rem] text-zinc-500 font-[350]">
          © Cruip.com. All rights reserved.
        </div>
      </div>
    </main>
  );
}
