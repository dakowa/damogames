import React from 'react'
import Tetris from './components/Tetris'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-green-500 mb-8">Damo Games</h1>
        <Tetris />
      </div>
    </div>
  )
}

export default App