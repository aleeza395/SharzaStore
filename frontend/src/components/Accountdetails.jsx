import React, { useState } from 'react'
import Title from './Title';

const Accountdetails = () => {

    const [transactionID, setTransactionID] = useState('');

  return (
    <div className='w-full'>
            <div>
                <Title text1={'ACCOUNT'} text2={'DETAILS'} />
            </div>
    
            <div className='flex flex-col gap-2 mt-2 text-sm'>
                <div className='flex justify-between'>
                    <p className='text-green-900'>Name</p>
                    <p className='text-green-700'>Shazia Zahid</p>
                </div>
                <hr className='border-green-200' />
                <div className='flex justify-between'>
                    <p className='text-green-900'>Account number</p>
                    <p className='text-green-700'>0324 8546939</p>
                </div>
            </div>
            
        </div>
  )
}

export default Accountdetails