import React from 'react'
import MainRoutes from './routes/MainRoutes'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="min-h-screen w-full text-slate-100 font-sans bg-gray-900 flex flex-col antialiased">
      <header className="w-full max-w-6xl mx-auto px-4 pt-6 pb-2">
        <Navbar />
      </header>
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-6">
        <MainRoutes />
      </main>
    </div>
  )
}

export default App