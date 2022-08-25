import React from 'react'
function Inputbox({icon,handledata,title,placeholder}) {
  return (
    <>
      <div className="w-full border-gray-300 py-2 border-b flex items-center gap-2">
          <div className="text-xl text-gray-700">
            {icon}
          </div>
          <input
            type="text"
            placeholder={placeholder}
            required
            value={title}
            onChange={(e) =>handledata(e.target.value)}
            className="w-full h-full text-lg text-textcolor placeholder:text-gray-500 outline-none border-none bg-transparent"
          />
        </div>
    </>
  )
}

export default Inputbox