import React from 'react'
import { data } from '@/data/data'
import { FaShoppingBag } from 'react-icons/fa'

type Props = {}

const RecentOrders = (props: Props) => {
  return (
      <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll'>
          <h1>Commandes récentes</h1>
          <div className="">
              <ul>
                  {data.map((order) => (
                      <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer ' key={order.id}>
                          <div className='bg-purple-100 rounded-lg p-3'>
                                <FaShoppingBag className='text-purple-800' size={20} />
                          </div>
                          <div className='pl-4 '>
                              <p className='text-gray-800 font-bold'>
                                  {order.total} €
                              </p>
                              <p className='text-gray-400 text-sm'>{order.name.first} {order.name.last}</p>
                          </div>
                          <p className='lg:flex md:hidden absolute right-6 text-sm'>{ order.date}</p>
                      </li>
                      
                  ))}
                              
              </ul>
          </div>
    </div>
  )
}

export default RecentOrders