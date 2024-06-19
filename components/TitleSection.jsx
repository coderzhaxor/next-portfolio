import React from 'react'

export const TitleSection = ({title, emoticon, margin, className}) => {
  return (
    <div className={`flex items-center gap-x-4 ${margin ?? 'mt-16'} ${className ?? ''}`}>
        <div className="line h-[1px] flex-1 bg-green-800/10"></div>
            <h1 className='pr-6 pl-4 py-2 bg-black/10 border border-green-800 rounded-3xl flex font-medium items-center text-lg'>{emoticon} {title}</h1>
        <div className="line h-[1px] flex-1 bg-green-800/10"></div>
    </div>
  )
}
