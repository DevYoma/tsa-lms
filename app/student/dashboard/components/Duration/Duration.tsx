import React from 'react'

type Props = {
    weeks: number;
    backgroundColor?: string;
}

const Duration = (props: Props) => {
  return (
    <p 
        style={{
            backgroundColor: `${props.backgroundColor}`
        }}
        className="bg-[#FFF3DB] text-[#303030] text-xl font-semibold tracking-tight p-[0.31rem]"
    >
        {props.weeks} weeks
    </p>
  )
}

export default Duration