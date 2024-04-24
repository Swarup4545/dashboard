import React from 'react'
import { IoIosInformationCircleOutline } from "react-icons/io";
import { PiPolygon } from 'react-icons/pi';
import coinbase from '../image/Coinbase.png'
import crypto from '../image/crypto.jpeg'
import { MdOutlineBugReport } from "react-icons/md";
import gram from '../image/gram.png'
import ploygon from '../image/polygon.png'
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { IoIosPeople } from "react-icons/io";
const DashBoard = () => {
  return (
    <>
      <div className='bg-blue-500 h-[100px]'>
        <div className='w-[90%] m-auto'>
          <p>Find the best opportunities for your skills and wallet</p>
          <p className='text-3xl font-bold text-white'>Opportunity Discovery</p>
          <div className='w-full bg-white rounded'>
            <div className='flex flex-wrap gap-2'>
              <div className='w-[50%]'>
                <p>We have 444 opprtunities for you</p>
                <input type="text" className='w-full border-2 border-gray-200 p-2 outline-none md:h-9 mt-2 mb-3' />
              </div>
              <div className='w-[12%]'>
                <p>Program type</p>
                <select className='h-9 mt-2'>
                  <option value="0">All programs</option>
                  <option value="1">Audi</option>
                  <option value="2">BMW</option>
                  <option value="3">Citroen</option>
                  <option value="4">Ford</option>
                </select>
              </div>
              <div className='w-[12%]'>
                <p>Program type</p>
                <select className='h-9 mt-2'>
                  <option value="0">All asssets</option>
                  <option value="1">Audi</option>
                  <option value="2">BMW</option>
                  <option value="3">Citroen</option>
                  <option value="4">Ford</option>
                </select>
              </div>
              <div className='w-[12%]'>
                <p>Indusrty</p>
                <select className='h-9 mt-2'>
                  <option value="0">All industries</option>
                  <option value="1">Audi</option>
                  <option value="2">BMW</option>
                  <option value="3">Citroen</option>
                  <option value="4">Ford</option>
                </select>
              </div>
              <div className='w-[10%] my-8'>
                <button className='bg-blue-500'><span className='px-2 py-1'>Search</span></button>
              </div>
            </div>
          </div>
          <div className='flex flex-wrap gap-3 mt-3'>
            <p>Popular now</p>
            <button className='rounded-full bg-blue-200'><span className='py-1 px-1'>BBP</span></button>
            <button className='rounded-full bg-blue-200'><span className='py-1 px-1'>Domain</span></button>
            <button className='rounded-full bg-blue-200'><span className='py-1 px-1'>internet&online services</span></button>
            <button className='rounded-full bg-blue-200'><span className='py-1 px-1'>Temu</span></button>
          </div>
          <div className='flex mt-3'>
            <p className='text-black text-xl font-semibold'>Campaigns & Top-paying oppryunities</p><IoIosInformationCircleOutline className='ml-2 mt-2' />
          </div>
        </div>
        <div className='m-auto w-[90%] flex flex-wrap justify-evenly mt-10'>
          <div className='w-[278px] bg-white shadow mt-2 md:mt-0'>
            <div className='w-[98%] px-2'>
              <div className='flex border-b border-gray-300'>
                <div className='h-8 w-8 rounded-full' style={{
                  backgroundImage:
                    `url(${coinbase})`, backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}>

                </div>
                <p className=''>Coinbase</p>
                <div className='flex ml-auto'>
                  <MdOutlineStarBorderPurple500 className='ml-4 mt-1' />
                  <BsThreeDotsVertical className='mx-2 mt-1' />
                </div>
              </div>
              <p className='font-semibold text-balck mt-10'>Bug Bouty Program</p>
              <p>Retesting,Collaboration</p>
              <div className='flex gap-1 mt-1'>
                <button className='bg-[#bfdbfe] rounded-full'><span className='border-r py-1 px-1 font-semibold text-blue'>Domain</span><span className='py-1 px-2'>14</span></button>
                <button className='bg-[#bfdbfe] rounded-full'><span className='border-r py-1 px-1 font-semibold text-blue'>OtherAsset</span><span className='py-1 px-2'>5</span></button>
              </div>
              <div className='flex gap-1 mt-1'>
                <button className='bg-[#bfdbfe] rounded-full'><span className='border-r py-1 px-1 font-semibold text-blue'>AndroidPlayst..</span><span className='py-1 px-2'>3</span></button>
                <button className='bg-[#bfdbfe] rounded-full'><span className='border-r py-1 px-1 font-semibold text-blue'>IosAppStore</span><span className='py-1 px-2'>2</span></button>
              </div>
              <div className='flex gap-1 mt-1'>
                <button className='bg-[#bfdbfe] rounded-full'><span className='border-r py-1 px-1 font-semibold text-blue'>SmartContract</span><span className='py-1 px-1'>1</span></button>
                <button className='bg-[#bfdbfe] rounded-full'><span className='border-r py-1 px-1 font-semibold text-blue'>Cidr</span><span className='py-1 px-1'>1</span></button>
                <button className='bg-[#fb7185] rounded-full'><span className='py-1 px-2 font-semibold text-blue'>+3</span></button>
              </div>
              <div className='flex mt-2'>
                <div className='bg-pink-500 h-4 w-4 mt-1 rounded-full'>
                </div>
                <p>Gold Standard</p>
              </div>
              <p className='text-green-400 font-bold text-xl mt-3 mb-3'>$200-$1M</p>
              <div className='flex justify-evenly'>
                <div className='flex gap-3'>
                  <MdOutlineBugReport className='mt-1' /> <span>795</span>
                </div>
                <div className='flex gap-3'>
                  <IoIosPeople className='mt-1' /><span>401</span>
                </div>
                <div className='flex gap-3'>
                  <GoDotFill color='green' className='mt-1' /><span>97%</span>
                </div>
              </div>
              <div className='border-2 border-blue-300 w-[90%] text-center m-auto mt-2 mb-2'>
                <span className='text-blue-500 py-2'>See details</span>
              </div>


            </div>
          </div>
          <div className='w-[278px] bg-white shadow mt-2 md:mt-0'>
            <div className='w-[98%] px-2'>
              <div className='flex border-b border-gray-300'>
                <div className='h-8 w-8 rounded-full mt-2'>
                  <img src={crypto} alt="" />
                </div>
                <p>Crypto.com</p>
                <div className='flex ml-auto'>
                  <MdOutlineStarBorderPurple500 className='ml-4 mt-1' />
                  <BsThreeDotsVertical className='mx-2 mt-1' />
                </div>
              </div>
              <button className='bg-[#e9d5ff] rounded mt-5'><span className='py-1 px-4'>Campaign</span></button>
              <p className='font-semibold text-balck mt-1'>Bug Bouty Program</p>
              <p>Retesting,Collaboration</p>
              <div className='flex gap-1 mt-1'>
                <button className='bg-[#bfdbfe] rounded-full'><span className='border-r py-1 px-1 font-semibold text-blue'>Domain</span><span className='py-1 px-2'>10</span></button>
                <button className='bg-[#bfdbfe] rounded-full'><span className='border-r py-1 px-1 font-semibold text-blue'>OtherAsset</span><span className='py-1 px-2'>5</span></button>
              </div>
              <div className='flex gap-1 mt-1'>
                <button className='bg-[#bfdbfe] rounded-full'><span className='border-r py-1 px-1 font-semibold text-blue'>Api</span><span className='py-1 px-2'>2</span></button>
                <button className='bg-[#bfdbfe] rounded-full'><span className='border-r py-1 px-1 font-semibold text-blue'>Wildcard</span><span className='py-1 px-2'>2</span></button>
                <button className='bg-[#fb7185] rounded-full'><span className='py-1 px-2 font-semibold text-blue'>+1</span></button>
              </div>
              <div className='flex mt-1'>
                <div className='bg-pink-500 h-4 w-4 mt-1 rounded-full'>
                </div>
                <p>Gold Standard</p>
              </div>
              <div className='flex'>
                <p className='font-semibold text-gray-400'>End in 39 days</p><IoIosInformationCircleOutline className='mt-1' />
              </div>
              <div className='flex mt-3 mb-2'><p className='text-green-400 font-bold text-xl'>UP to $160</p><span className='text-[#a78bfa] font-bold text-xl'>{`(x 2 more)`}</span><IoIosInformationCircleOutline className='mt-1' size={20} /></div>
              <div className='flex justify-evenly'>
                <div className='flex gap-3'>
                  <MdOutlineBugReport className='mt-1' /> <span>218</span>
                </div>
                <div className='flex gap-3'>
                  <IoIosPeople className='mt-1' /><span>119</span>
                </div>
                <div className='flex gap-3'>
                  <GoDotFill color='green' className='mt-1' /><span>99%</span>
                </div>
              </div>
              <div className='border-2 border-blue-300 w-[90%] text-center m-auto mt-1 mb-2'>
                <span className='text-blue-500 py-2'>See details</span>
              </div>
            </div>
          </div>
          <div className='w-[278px] bg-white shadow mt-2 md:mt-0'>
            <div className='w-[98%] px-2'>
              <div className='flex border-b border-gray-300'>
                <div className='h-9 w-9 rounded-full border-black mt-1'>
                  <img src={gram} alt="" />
                </div>
                <p>Grammarly</p>
                <div className='flex ml-auto'>
                  <MdOutlineStarBorderPurple500 className='ml-4 mt-1' />
                  <BsThreeDotsVertical className='mx-2 mt-1' />
                </div>
              </div>
              <button className='bg-[#fde68a] rounded mt-5'><span className='py-1 px-4'>Updated</span></button>
              <p className='font-semibold text-balck mt-1'>Bug Bouty Program</p>
              <p className=''>Traiged by HakerOne,Retesting, Collaboration</p>
              <div className='flex gap-1 mt-1'>
                <button className='bg-[#bfdbfe] rounded-full'><span className='border-r py-1 px-1 font-semibold text-blue'>Other Asset</span><span className='py-1 px-2'>4</span></button>
                <button className='bg-[#bfdbfe] rounded-full'><span className='border-r py-1 px-1 font-semibold text-blue'>Executable</span><span className='py-1 px-2'>3</span></button>
              </div>
              <div className='flex gap-1 mt-1'>
                <button className='bg-[#bfdbfe] rounded-full'><span className='border-r py-1 px-1 font-semibold text-blue'>Wildcard</span><span className='py-1 px-2'>3</span></button>
                <button className='bg-[#bfdbfe] rounded-full'><span className='border-r py-1 px-1 font-semibold text-blue'>AndroidPlayStore</span><span className='py-1 px-2'>1</span></button>
              </div>
              <div className='flex gap-1 mt-1'>
                <button className='bg-[#bfdbfe] rounded-full'><span className='border-r py-1 px-1 font-semibold text-blue'>AiModel</span><span className='py-1 px-1'>1</span></button>
                <button className='bg-[#bfdbfe] rounded-full'><span className='border-r py-1 px-1 font-semibold text-blue'>IosAppStore</span><span className='py-1 px-1'>1</span></button>
                <button className='bg-[#fb7185] rounded-full'><span className='py-1 px-2 font-semibold text-blue'>+1</span></button>
              </div>
              <div className='flex mt-3 mb-2'><p className='text-green-400 font-bold text-xl mt-1'>$50-$100k</p><IoIosInformationCircleOutline className='mt-1' size={20} /></div>

              <div className='flex justify-evenly'>
                <div className='flex gap-3'>
                  <MdOutlineBugReport className='mt-1' /> <span>247</span>
                </div>
                <div className='flex gap-3'>
                  <IoIosPeople className='mt-1' /><span>121</span>
                </div>
                <div className='flex gap-3'>
                  <GoDotFill color='green' className='mt-1' /><span>96%</span>
                </div>
              </div>
              <div className='border-2 border-blue-300 w-[90%] text-center m-auto mb-2 mt-1'>
                <span className='text-blue-500 py-2'>See details</span>
              </div>
            </div>
          </div>
          <div className='w-[278px] bg-white shadow mt-2 md:mt-0'>
            <div className='w-[98%] px-2'>
              <div className='flex border-b border-gray-300'>
                <div className='h-8 w-8 rounded-full mt-2'>
                  <img src={ploygon} alt="" />
                </div>
                <p>Plygon Technology</p>
                <div className='flex ml-auto'>
                  <MdOutlineStarBorderPurple500 className='ml-4 mt-1' />
                  <BsThreeDotsVertical className='mx-2 mt-1' />
                </div>
              </div>
              <button className='bg-[#e9d5ff] rounded mt-5' ><span className='py-1 px-4'>Campaign</span></button>
              <p className='font-semibold text-balck mt-1'>Bug Bouty Program</p>
              <p className=''>Traiged by HakerOne,Retesting, Collaboration</p>
              <div className='flex gap-1 mt-1'>
                <button className='bg-[#bfdbfe] rounded-full'><span className='border-r py-1 px-1 font-semibold text-blue'>Dmain</span><span className='py-1 px-1'>11</span></button>
              </div>
              <div className='flex gap-1 mt-1'>
                <button className='bg-[#bfdbfe] rounded-full'><span className='border-r py-1 px-1 font-semibold text-blue'>SourceCode</span><span className='py-1 px-1'>3</span></button>
              </div>
              <div className='flex'>
                <p className='font-semibold text-gray-400'>End in 39 days</p><IoIosInformationCircleOutline className='mt-1' />
              </div>
              <div className='flex mt-4 mb-3'><p className='text-green-400 font-bold text-xl'>UP to $40k</p><span className='text-[#a78bfa] font-bold text-xl'>{`(x 2 more)`}</span><IoIosInformationCircleOutline className='mt-1' size={20} /></div>
              <div className='flex justify-evenly'>
                <div className='flex gap-3'>
                  <MdOutlineBugReport className='mt-1' /> <span>29</span>
                </div>
                <div className='flex gap-3'>
                  <IoIosPeople className='mt-1' /><span>15</span>
                </div>
                <div className='flex gap-3'>
                  <GoDotFill color='green' className='mt-1' /><span>97%</span>
                </div>
              </div>
              <div className='border-2 border-blue-300 w-[90%] text-center m-auto mb-2 mt-1'>
                <span className='text-blue-500 py-2'>See details</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default DashBoard