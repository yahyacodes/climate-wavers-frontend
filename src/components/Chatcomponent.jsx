import React, { useState } from 'react'
import { AiOutlineSend } from 'react-icons/ai'

const Chatcomponent = () => {

    const [textValue, setTextValue] = useState('')
    const [isSubbmited, setIsSubbmited] = useState(false)


  return (
    <div className='max-h-fit h-[90%] flex flex-col justify-between'>
        <div className='overflow-auto'>
        {
            isSubbmited ?
                textValue
            :
                null
        }
        </div>
        <div className='bg-graylight p-1 mx-5 md:p-2 border-2 border-graydark  rounded-full flex flex-row items-center '>
            <input className='justify-self-end bg-transparent w-[80%] focus:outline-0 focus:bg-gray-200 focus:rounded-full p-2 text-black ' onChange={(e) => setTextValue(e.target.value)}  type="text" placeholder='Ask a question.' /> <AiOutlineSend size={25} onClick={() => setIsSubbmited(true)} className='items-end cursor-pointer ' type='submit' /> 
        </div>
    </div>
  )
}

export default Chatcomponent