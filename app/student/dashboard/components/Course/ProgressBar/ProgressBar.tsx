import React from 'react'
import './ProgressBar.scss'

type ProgressBarProp = {
    width?: string;
    backgroundColor: string;
    name: string; // progress bar name
    percent: number;
    border: string;
}

const ProgressBar = ({ width, backgroundColor, name, percent, border }: ProgressBarProp) => {
  return (
    <div className="progress__container">
        <div className="progress__header">
            <p>{name}</p>
            {/* <p>{percent}%</p> */}
        </div>
        <div className="resumeProgressBar" style={{
            border: border
        }}>
            <div className="resumeProgressBarInner" 
                style={{
                    width: `${percent}%`, 
                    backgroundColor,
                }}
            >
                {/* width is here... */}
            </div>
        </div>
    </div>
  )
}

export default ProgressBar