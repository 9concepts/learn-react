import { useState } from "react"

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const AutoBatchOther = () => {
  console.log("AutoBatchOther is rendered")
  const [todos, setTodos] = useState<Todo[] | null>(null)
  const [isFinish, setIsFinish] = useState(false)
  const [state3, setState3] = useState('')

  const onClickHandler = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data) => {
        // イベントハンドラ以外で state 更新している。
        setTodos(data)
        setIsFinish(true)
        setState3('hello')
      })
  }

  return (
    <div>
      <p>Automatic Batch 確認用（その他）</p>
      <button onClick={onClickHandler}>Fetch</button>
      <p>isFinish: {isFinish ? 'true' : 'false'}</p>
      {todos?.map(todo => <p key={todo.id}>{todo.title}</p>)}
    </div>
  )
}
