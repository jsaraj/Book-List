
import React from 'react'
import { FaFileCircleXmark, FaFilePen } from "react-icons/fa6";


function OperationBook() {
    return (
        <>
            <div className='justify-between flex mx-32 py-10'>
                <div className='bg-gray-300 w-5/12 rounded-md'>
                    <form className='p-3'>
                        <label className='flex w-full'>Title:</label>
                        <input type='text' name='title' className='flex w-full mb-4 p-1 rounded-sm'></input>
                        <label className='flex w-full'>Author:</label>
                        <input type='text' name='author' className='flex w-full mb-4 p-1 rounded-sm' ></input>
                        <label className='flex w-full'>Number:</label>
                        <input type='text' name='number' className='flex w-full mb-8 p-1 rounded-sm'></input>
                        <input type='submit' value='Add' className='flex w-full bg-orange-400 p-2 rounded-sm'></input>
                    </form>
                </div>
                <div className='bg-gray-300 w-5/12 rounded-md flex'>
                    <div className='border-r border-orange-400 w-1/12'>
                        <label className='flex justify-center font-bold'>No.</label>
                        <p className='border-t border-orange-400 flex justify-center mt-1'>1</p>
                        <p className='border-t border-orange-400 flex justify-center mt-1'>2</p>
                        <p className='border-t border-orange-400 flex justify-center mt-1'>2</p>

                    </div>
                    <div className='border-r border-orange-400 w-5/12'>
                        <label className='flex justify-center font-bold'>Title</label>
                        <p className='border-t border-orange-400 flex justify-center mt-1'>First Moon</p>
                        <p className='border-t border-orange-400 flex justify-center mt-1'>Jonathan</p>
                        <p className='border-t border-orange-400 flex justify-center mt-1'>Jonathan</p>
                    </div>
                    <div className=' w-4/12 border-r border-orange-400'>
                        <label className='flex justify-center font-bold'>Author</label>
                        <p className='border-t border-orange-400 flex justify-center mt-1'>Jaber saraj</p>
                        <p className='border-t border-orange-400 flex justify-center mt-1'>Akbar Bakhshi</p>
                        <p className='border-t border-orange-400 flex justify-center mt-1'>Akbar Bakhshi</p>
                    </div>
                    <div className=' w-2/12'>
                        <label className='flex justify-center font-bold'>Op</label>
                        <div className='flex justify-around mt-1 pt-1 border-t border-orange-400 '>
                            <FaFileCircleXmark className='mt-1 cursor-pointer' />
                            <FaFilePen className='mt-1 cursor-pointer' />
                        </div>
                        <div className='flex justify-around mt-1 pt-1 border-t border-orange-400 '>
                            <FaFileCircleXmark className='mt-1 cursor-pointer' />
                            <FaFilePen className='mt-1 cursor-pointer' />
                        </div>
                        <div className='flex justify-around mt-1 pt-1 border-t border-orange-400 '>
                            <FaFileCircleXmark className='mt-1 cursor-pointer' />
                            <FaFilePen className='mt-1 cursor-pointer' />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default OperationBook