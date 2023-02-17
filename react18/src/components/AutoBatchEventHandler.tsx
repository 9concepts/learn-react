import { useState } from "react"
import { flushSync } from "react-dom"

export const AutoBatchEventHandler = () => {
  console.log("AutoBatchEventHandler is rendered")
  const [state1, setState1] = useState(0)
  const [state2, setState2] = useState(0)

  const onClickHandler = () => {
    console.log(state1)
    flushSync(() => {
      setState1((prev) => prev + 1)
    })
    console.log(state1)
    setState2((prev) => prev + 1)
  }

  return (
    <div>
      <p>Automatic Batching 確認用（イベントハンドラ）</p>
      <button onClick={onClickHandler}>Update state</button>
      <p>State 1: {state1}</p>
      <p>State 2: {state2}</p>
    </div>
  )
}
