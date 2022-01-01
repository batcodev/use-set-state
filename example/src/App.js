import React from 'react'
import { useMyHook } from 'use-set-state'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App