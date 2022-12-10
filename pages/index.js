import Head from "next/head";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import frontend from "../public/frontend.png";
import backend from "../public/backend.png";
import Image from "next/image";
import web1 from "../public/pathik.jpg";
import web2 from "../public/oj.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { SiHashnode } from "react-icons/si";
import { FiMenu } from "react-icons/fi";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [open, setOpen] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Sachit Sankhe</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white flex-wrap w-full">
            <h1 className="font-burtons text-xl">developedbysachit</h1>
            <FiMenu
              className="lg:hidden block h-6 w-6 cursor-pointer"
              onClick={() => setOpen(!open)}
            />

            <div
              className={`${
                open ? "block" : "hidden"
              } w-full lg:flex lg:items-center lg:w-auto`}
            >
              <ul className=" dark:bg-gray-800 rounded-lg dark:lg:bg-inherit lg:flex items-center lg:justify-between">
                <li className="block py-5 lg:p-0">
                  <a
                    href="#projects"
                    className="hover:bg-gradient-to-r from-cyan-500 text- to-teal-500 hover:text-white hover:border-none hover:px-2 hover:py-2 hover:rounded-md mx-8"
                  >
                    Projects
                  </a>
                </li>
                <li className="block ml-9 lg:ml-0">
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl"
                  />
                </li>
                <li className="block py-5 lg:p-0">
                  <a
                    className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                    href="https://drive.google.com/drive/u/2/folders/1Rx9msWV5DZdWyHVT3IhfBIfQSNTw6lhE"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Sachit Sankhe
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Android and Web Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              I have experience in creating Full-Stack Android and Web
              Applications. My tech-stack includes Kotlin, Python, Django,
              PostgreSQL, SQLite, Firebase.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a
                href="https://github.com/SachitSankhe"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/sachit-sankhe-a8931421a/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin />
              </a>

              <a
                href="https://slatecoder.hashnode.dev"
                target="_blank"
                rel="noreferrer"
              >
                <SiHashnode />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" alt="" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my Engineering journey, I have always been
              interested in developing Web and Android applications. This liking
              of mine has helped me in building multiple projects. I have also
              work with a team in developing Android Application for a{" "}
              <span className="text-teal-500"> company </span>
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including{" "}
              <span className="text-teal-500"> Frontend </span> and{" "}
              <span className="text-teal-500"> Backend </span> for Web
              Applications and Full-Stack for{" "}
              <span className="text-teal-500"> Android </span> Applications.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg px-10 pt-5 rounded-xl my-10 dark:bg-gray-800 dark:text-white flex-1 dark:shadow-cyan-600">
              <Image src={frontend} width={190} height={130} alt="" />
              <h3 className="text-lg font-medium pb-2 ">
                Creating your ideal Frontend
              </h3>
              <p className="py-2">
                Do you want a modern frontend with latest tech? Let&#39;s create
                it.
              </p>
              <h4 className="py-4 text-2xl">Languages I Use</h4>
              <p className="dark:hover:text-teal-400 py-1">HTML,CSS,Tailwind</p>
              <p className="dark:hover:text-teal-400 py-1">JavaScript</p>
              <p className="dark:hover:text-teal-400 py-1">ReactJs</p>
              {/* <p className="text-gray-800 py-1">Indesign</p> */}
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800 dark:text-white flex-1 dark:shadow-cyan-600">
              <Image src={code} width={170} height={100} alt="" />
              <h3 className="text-lg font-medium pt-4 pb-2 ">
                Code your dream App
              </h3>
              <p className="py-2">
                Do you have an idea for your next great app? Let&#39;s make it a
                reality.
              </p>
              <h4 className="py-4 text-2xl">Tools I Use</h4>
              <p className="dark:hover:text-teal-400 py-1">Android Studio</p>
              <p className="dark:hover:text-teal-400 py-1">Firebase</p>
              <p className="dark:hover:text-teal-400 py-1">Jetpack Compose</p>
              {/* <p className="text-gray-800 py-1">Indesign</p> */}
            </div>
            {/* slatecoder.hashnode.dev */}
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800 dark:text-white flex-1 dark:shadow-cyan-600">
              <Image src={backend} width={170} height={100} alt="" />
              <h3 className="text-lg font-medium pt-4 pb-2 ">
                Developing Top-Notch Backend
              </h3>
              <p className="py-2">
                Want to have a robust backend for your application? Let&#39;s
                build it.
              </p>
              <h4 className="py-4 text-2xl">Framework I Use</h4>
              <p className="dark:hover:text-teal-400 py-1">Django-Rest</p>
              <p className="dark:hover:text-teal-400 py-1">PostgreSQL/SQLite</p>
              <p className="dark:hover:text-teal-400 py-1">Docker</p>
              {/* <p className="text-gray-800 py-1">Indesign</p> */}
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white " id="projects">
              Projects
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              During my 3 years as an Engineering Student, I have developed
              multiple Full-Stack Applications that have all the functionalities
              required right from a Backend interacting with a{" "}
              <span className="text-teal-500"> database </span> to{" "}
              <span className="text-teal-500"> API </span> usage in the Frontend
              of the applications. Some of my projects are listed below.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <a
                href="https://github.com/SachitSankhe/Pathik-back"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web1}
                  alt=""
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a
                href="https://github.com/SachitSankhe/OJ_Project"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="rounded-lg"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web2}
                  alt=""
                />
              </a>
            </div>
            {/* <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
                alt=""
              />
            </div> */}
          </div>
        </section>
      </main>
    </div>
  );
}
