import React from 'react'
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs'
import { data } from '@/data/data'

type Props = {}

export default function customers({}: Props) {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='flex justify-between p-4'>
        <h2>Clients</h2>
      </div>
      <div className='p-4'>
        <div className='w-full m-auto p-4 border roundee-lg bg-white overflow-y-auto'>
          <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
            <span>Nom</span>
            <span className='sm:text-left text-right'>Email</span>
            <span className='hidden md:grid'>Dernière commande</span>
            <span className='hidden sm:grid'>Méthode</span>
          </div>
          <ul>
            {data.map((order) => (
              <li key={order.id} className="bg-gray-50 hover:gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
                <div className='flex items-center'>
                  <div className='bg-purple-100 p-3 rounded-lg'>
                    <BsPersonFill className='' />
                  </div>
                  {order.name.first} {order.name.last}
                </div>
                <p className='text-gray-600 sm:text-left text-right'>{order.email}</p>
                <p className='hidden md:flex'>{order.date}</p>
                <div  className='sm:flex hidden justify-between items-center'>
                  <p>{order.method}</p>
                  <BsThreeDotsVertical />
                </div>
              </li>
            ))}
          </ul>
      </div>
      </div>
    </div>
  )
}