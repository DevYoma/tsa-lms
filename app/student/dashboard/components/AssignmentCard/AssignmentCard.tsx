import Image from 'next/image';
import './AssignmentCard.scss';
import Padlock from '@/public/assets/padlock.svg';
import { useRouter } from 'next/navigation';

// Backend => conditional style from the backend for the opacity

const AssignmentCard = () => {
  const router = useRouter();
  const assignmentData = [
    {
      id: 1, 
      week: 1, 
      title: "Design your Portfolio",
      dueDate: "28th Feb, 2024", // convert the date from the api to this format
      locked: false, 
      link: "/student/dashboard/assignments"
    },
    {
      id: 2, 
      week: 2, 
      title: "Generate your Brief", 
      dueDate: "", 
      locked: true,
      link: ""
    }, 
    {
      id: 3, 
      week: 3, 
      title: "Generate your Brief", 
      dueDate: "", 
      locked: true, 
      link: ""
    }
  ]
  return (
    <div className="assignmentCard">
      <h2>Assignments</h2>

      <div className="assignmentCard__lists">
        {assignmentData.map((assignment) => (
            <div 
              key={assignment.id}
              onClick={() => assignment.link  && router.push(assignment.link)}
              className={`assignmentCard__list ${assignment.locked && 'assignmentOpacity'}`}
            >
              <div className="assignmentCard__listDetail">
                <p>Week {assignment.week}:</p>
                <h3>{assignment.title}</h3>
              </div>
    
              {assignment.locked ? (
                <Image 
                  alt='Padlock'
                  src={Padlock}
                  style={{
                    marginRight: "2rem"
                  }}
                />
              ) : (
                <div 
                  className="assignmentCard__listDate"
                >
                  Due: {assignment.dueDate}
                </div>
              )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AssignmentCard