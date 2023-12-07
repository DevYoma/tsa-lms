import Link from 'next/link'
import './Course.scss'
import ProgressBar from './ProgressBar/ProgressBar'
import Duration from '../Duration/Duration';

type CourseProp = {
  courseName: string;
  noOfWeeks: number; 
  progress: number;
  progressBarColor?: string;
  // cardWidth: number => prop to dynamically change the width based on the scenerio
}

const Course = (props: CourseProp) => {
  return (
    <div className='courseCard'>
        <div className="courseCard__header">
            <p>Your Course</p>
            {/* <p>{props.noOfWeeks} weeks</p> */}
            <Duration weeks={props.noOfWeeks}/>
        </div>

        <p className="courseCard__title">{props.courseName}</p>

        <div className="courseCard__progress">
          {/* 
            DESIGN CASE
            - Each Progress Bars has different colors, they can be from the API or hardCoded. 
          
          */}
          <ProgressBar 
            backgroundColor={props.progressBarColor || "#F4BC45"}
            border='2px solid lightgrey'
            name={`Progress ${props.progress}%`}
            percent={props.progress}
          />
        </div>

        <div className="flex justify-end underline mt-[1.38rem]">
          <Link 
            className="tracking-tight text-[#114CFE] font-semibold text-[1.3125rem]"
            href="#"
          >
            Click to Continue
          </Link>
        </div>
    </div>
  )
}

export default Course