import Link from "next/link"
import { ReactNode } from "react"
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx"
import { HiOutlineShoppingBag } from "react-icons/hi"
import { FiSettings } from "react-icons/fi"


type Props = {
    children: ReactNode
}

const Sidebar = ({ children }: Props) => {
  return (
      <div className="flex">
        <div className='fixed w-20 h-screen bg-white border-r-[1px] flex flex-col justify-between p-4'>
              <div className="flex flex-col items-center">
                  <Link href="/">
                      <div className="bg-purple-800 text-white p-3 rounded-lg">
                          <RxSketchLogo size={20} />
                      </div>
                  </Link>
                  <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
                  <Link href="/">
                      <div className="bg-gray-100 p-3 my-4 rounded-lg  hover:bg-gray-200">
                          <RxDashboard size={20} />
                      </div>
                  </Link>
                  <Link href="/customers">
                      <div className="bg-gray-100 p-3 my-4 rounded-lg  hover:bg-gray-200">
                          <RxPerson size={20} />
                      </div>
                  </Link>
                  <Link href="/orders">
                      <div className="bg-gray-100 p-3 my-4 rounded-lg  hover:bg-gray-200">
                          <HiOutlineShoppingBag size={20} />
                      </div>
                  </Link>
                  <Link href="/settings">
                      <div className="bg-gray-100 p-3 my-4 rounded-lg  hover:bg-gray-200">
                          <FiSettings size={20} />
                      </div>
                  </Link>
            </div>
        </div>
        <main className="ml-20 w-full">{children}</main>
    </div>
  )
}

export default Sidebar