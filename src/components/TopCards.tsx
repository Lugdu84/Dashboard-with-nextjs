import React from 'react'

type Props = {}

const TopCards = (props: Props) => {
  return (
      <div className='grid lg:grid-cols-5 gap-4 p-4'>
          <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
              <div className='flex flex-col w-full pb-4'>
                  <p className='text-2xl font-bold'>735 €</p>
                  <p className='text-gray-600'>Revenu quotidien</p>
              </div>
              <p className='bg-green-200 flex justify-center p-2 items-center rounded-lg'>
                  <span className='text-green-700 text-lg' style={{whiteSpace: 'nowrap'}}>+ 18 %</span>
              </p>
          </div>
          <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
               <div className='flex flex-col w-full pb-4'>
                    <p className='text-2xl font-bold'>1 324 454 €</p>
                    <p className='text-gray-600'>Revenu annuel</p>
              </div>
              <p className='bg-green-200 flex justify-center p-2 items-center rounded-lg'>
                  <span className='text-green-700 text-lg' style={{whiteSpace: 'nowrap'}}>+ 7 %</span>
              </p>
          </div>
          <div className=' bg-white flex justify-between w-full border p-4 rounded-lg'>
               <div className='flex flex-col w-full pb-4'>
                    <p className='text-2xl font-bold'>345</p>
                    <p className='text-gray-600'>Clients</p>
              </div>
              <p className='bg-green-200 flex justify-center p-2 items-center rounded-lg'>
                  <span className='text-green-700 text-lg' style={{whiteSpace: 'nowrap'}}>+ 12 %</span>
              </p>
          </div>
    </div>
  )
}

export default TopCards