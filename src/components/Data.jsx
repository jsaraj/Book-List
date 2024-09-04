
import { FaFileCircleXmark, FaFilePen } from "react-icons/fa6";
import React from 'react'



function Data({ books, deleteBook }) {


    return (
        books.map((book, index) => {
            return <tr key={index} className='h-10 even:bg-gray-200'>
                <td className='text-center border border-orange-400'>{book.number}</td>
                <td className='text-center border border-orange-400'>{book.title}</td>
                <td className='text-center border border-orange-400'>{book.author}</td>
                <td className='text-center border border-orange-400'>
                    <div className='flex justify-around'>
                        <FaFileCircleXmark color='red' className='mt-1 cursor-pointer' onClick={() => { deleteBook(book.number) }} />
                        <FaFilePen color='green' className='mt-1 cursor-pointer' />
                    </div>
                </td>
            </tr>
        })
    )



}

export default Data