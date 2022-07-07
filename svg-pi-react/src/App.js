import {useState, useEffect} from 'react'
import './App.css'
import ProgressBar from './components/ProgressBar/ProgressBar'

const App = () => {

  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const loadingDuration = 3000 // 3 seconds

  useEffect(() => {
    let loadingTimeout = setTimeout(() => {
      if (loading >= 100) return
      setProgress(progress + 1)
    }, loadingDuration/100)

    if (progress === 100) {
      setLoading(false)
    }

    return () => {
      clearTimeout(loadingTimeout)
    }
  }, [progress, loading])

  return (
    <div className="App">
      {loading ? (
        <ProgressBar progress={progress} trackWidth={5} indicatorWidth={10} />
      ) : (
        <div
          className="App-content"
        >
          <p>The main page of the app that appears after the <strong title="ProgressBar">SVG Pi</strong> hits 100%.</p>
        </div>
      )}
    </div>
  )
}

export default App