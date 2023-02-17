import { useState, useTransition } from "react";
import { Avatar } from "./Avatar";
import { TaskList } from "./TaskList";

export type Task = {
  id: number;
  title: string;
  assignee: string;
}

const member = {
  a: 'Alice',
  b: 'Bob',
  c: 'Chary'
}

const generateDummyTasks = (): Task[] => {
  return Array(10000).fill('').map((_, index) => ({
    id: index,
    title: `タスク ${index + 1}`,
    assignee: index % 3 === 0 ? member.a : index % 2 ? member.b : member.c
  }))
}

const tasks = generateDummyTasks()

const filteringAssignee = (assignee: string) => {
  if (assignee === '') return tasks;

  return tasks.filter(task => task.assignee === assignee)
}

export const Transition = () => {
  // const [isPending, startTransition] = useTransition()
  const [selectedAssignee, setSelectedAssignee] = useState<string>('')
  const [taskList, setTaskList] = useState(tasks)
  const onClickAssignee = (assignee: string) => {
    setSelectedAssignee(assignee)
    setTaskList(filteringAssignee(assignee))
    // startTransition(() => {
    //   setTaskList(filteringAssignee(assignee))
    // })
  }

  return (
    <div>
      <p>Transition</p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Avatar isSelected={selectedAssignee === member.a} onClick={onClickAssignee}>{member.a}</Avatar>
        <Avatar isSelected={selectedAssignee === member.b} onClick={onClickAssignee}>{member.b}</Avatar>
        <Avatar isSelected={selectedAssignee === member.c} onClick={onClickAssignee}>{member.c}</Avatar>
      </div>
      <button onClick={() => onClickAssignee("")}>Reset</button>
      <TaskList taskList={taskList} />
    </div>
  )
}
