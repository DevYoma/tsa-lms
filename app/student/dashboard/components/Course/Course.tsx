import Link from 'next/link'
import './Course.scss'
import ProgressBar from './ProgressBar/ProgressBar'

const Course = () => {
  return (
    <div className='courseCard'>
        <div className="courseCard__header">
            <p>Your Course</p>
            <p>4 weeks</p>
        </div>

        <p className="courseCard__title">Introduction to UI/UX Design</p>

        <div className="courseCard__progress">
          <ProgressBar 
            backgroundColor='#F4BC45'
            border='2px solid lightgrey'
            name={`Progress ( 20% )`}
            percent={20}
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