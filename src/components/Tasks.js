
import  Task from '../components/Task';

const Tasks= ({ tasks, onDelete }) => {
  return (
    < div className="listharu">
      {tasks.map((task) =>( 
         <Task key={task.id} task={task} onDelete={onDelete}/> ))}
    </div>

  )
}

export default Tasks