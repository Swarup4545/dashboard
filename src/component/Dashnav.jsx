import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineBugReport } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdOutlineLeaderboard } from "react-icons/md";
import { LiaNotesMedicalSolid } from "react-icons/lia";
import { MdOutlineNoteAlt } from "react-icons/md";
import { MdMyLocation } from "react-icons/md";
import { MdHelpOutline } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa6";
import { PiUserCircleLight } from "react-icons/pi";
const Dashnav = ({ show, setShow }) => {

  return (
    <>
      <div className={show ? `fixed md:relative flex flex-col pb-5 text-lg h-[100vh] text-white whitespace-nowrap bg-black shadow-sm w-[295px] rounded-[10px]` : `hidden`}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0fee06e66bb52d98f1092db5d716d2d958a75c999343a30f15c641b032c4cde?"
          className="self-end w-10 pt-1 aspect-square" onClick={() => setShow(!show)}
        />
        <div className="flex mt-7 text-3xl font-semibold full-width border-b">
          <div className='mx-3'>Hackerone</div>
        </div>
        <div className="flex gap-4 px-6 py-2 mt-1 text-center rounded-2xl bg-[#4ade80] leading-[100%]">
          < MdMyLocation/>
          <div>Opportunity</div>
        </div>
        <div className="flex gap-4 px-6 py-5 mt-1 text-center rounded-2xl leading-[100%]">
          <MdOutlineDashboard />
          <div>Dashboard</div>
        </div>
        <div className="flex gap-4 px-6 py-5 mt-1 text-center rounded-2xl leading-[100%]">
          <MdOutlineBugReport/>
          <div>Inbox</div>
        </div>
        <div className="flex gap-4 px-6 py-5 mt-1 text-center rounded-2xl  leading-[100%]">
          <AiOutlineFundProjectionScreen/>
          <div><Link to="/">Hacktivity</Link></div>
        </div>
        <div className="flex gap-4 px-6 py-5 mt-1 text-center rounded-2xl leading-[100%]">
          <MdOutlineLeaderboard/>
          <div>Leaderboard</div>
        </div>
        <div className="flex gap-4 px-6 py-5 mt-1 text-center rounded-2xl leading-[100%]">
          <LiaNotesMedicalSolid/>
          <div>Directory</div>
        </div>
        <div className="flex flex-col justify-end py-3 mt-20 text-center border-t border-white border-solid leading-[100%]">
        <div className="flex gap-4 px-6 py-2 rounded-2xl">
            <MdHelpOutline/>
            <div className="my-auto">Help</div>
            <div className='h-4 w-4 rounded-full bg-white ml-auto pb-4'><span className='text-black text-[14px]'>0</span></div>
          </div>
          <div className="flex gap-4 px-6 py-2 rounded-2xl">
            <IoIosNotifications/>
            
            <div className="my-auto">Notification</div>
            <div className='h-4 w-4 rounded-full bg-white ml-auto pb-4'><span className='text-black text-[14px]'>0</span></div>
          </div>
          <div className="flex gap-4 px-6 py-2 rounded-2xl">
            <PiUserCircleLight color='white'/>
            <div className="my-auto">Profile</div>
            <FaChevronRight className='ml-auto'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashnav