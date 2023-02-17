import { useDeferredValue } from "react"
import { type Task } from "./Transition"

type Props = {
  taskList: Task[]
}

export const TaskList = ({ taskList }: Props) => {
  const deferredTaskList = useDeferredValue(taskList)
  return (
    <div>
      {deferredTaskList.map(task => (<div key={task.id} style={{ background: 'lavender', width: '300px', margin: 'auto' }}>
        <p>タイトル: {task.title}</p>
        <p>担当: {task.assignee}</p>
      </div>))}
    </div>
  )
}
