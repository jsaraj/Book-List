
import React, { useEffect, useState } from 'react'

import Data from './Data';


//for save data in localstorage after any refresh
const GetDataFromLs = () => {
    const data = localStorage.getItem('book');
    if (data) {
        return JSON.parse(data);
    } else {
        return [];
    }
}

function OperationBook() {

    const [books, setBooks] = useState(GetDataFromLs);
    const [title, setTitle] = useState();
    const [author, setAuthor] = useState();
    const [number, setNumber] = useState();


    const submitHandler = (e) => {
        e.preventDefault();

        let book = {
            title,
            author,
            number
        }

        setBooks([...books, book]);

    }

    useEffect(() => {
        localStorage.setItem('book', JSON.stringify(books))
    }, [books])


    const deleteBook = (number) => {
        const filterBook=books.filter((element)=>{
            return element.number!==number
        })
        setBooks(filterBook)
    }

    return (
        <>
            <div className='justify-between flex mx-32 py-10'>
                <div className='bg-gray-300 w-5/12 rounded-md h-80'>
                    <form className='p-3' onSubmit={submitHandler}>
                        <label className='flex w-full'>Title:</label>
                        <input type='text' name='title' required onChange={(e) => { setTitle(e.target.value) }} className='flex w-full mb-4 p-1 rounded-sm'></input>
                        <label className='flex w-full'>Author:</label>
                        <input type='text' name='author' required onChange={(e) => { setAuthor(e.target.value) }} className='flex w-full mb-4 p-1 rounded-sm' ></input>
                        <label className='flex w-full'>Number:</label>
                        <input type='text' name='number' required onChange={(e) => { setNumber(e.target.value) }} className='flex w-full mb-8 p-1 rounded-sm'></input>
                        <input type='submit' value='Add' className='flex w-full bg-orange-400 p-2 rounded-sm cursor-pointer'></input>
                    </form>
                </div>
                <div className='bg-gray-300 w-5/12 rounded-md h-96'>
                    {
                        books.length > 0
                            ? <>
                                <div className='flex overflow-y-scroll h-80 p-1'>
                                    <table className='w-full h-10'>
                                        <tr className='h-6 border border-orange-400 bg-orange-400'>
                                            <th className='w-6 '>No.</th>
                                            <th className='w-52 '>Title</th>
                                            <th className='w-48 '>Author</th>
                                            <th className='w-20 '>Op</th>
                                        </tr>

                                        <Data books={books} deleteBook={deleteBook}  />
                                    </table>
                                </div>
                                <div className='flex justify-center p-2 pt-4'>
                                    <button className='bg-orange-400 p-2 rounded-sm w-full' onClick={() => setBooks([])}>Remove All</button>
                                </div>
                            </>

                            : <div className='flex justify-center pt-20'>No Books Added</div>
                    }

                </div>

            </div>
        </>
    )
}

export default OperationBook