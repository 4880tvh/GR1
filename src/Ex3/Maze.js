import React from 'react'
import { useState, useEffect } from 'react'
import './styles.css'
import Render from './Render'
const Maze = () => {


  const [pose, setPose] = useState([3, 0])

  const startGame = () => {
  
    const start = [3,0]
    let temp = [...start]
    setPose(temp)
  }

  const arrowGoUp = () => {
    let temp = [...pose]
    temp[1] += 1

    if (temp[0] < 0 || temp[0] > 5 || temp[1] > 7 || temp[1] < 0 || (temp[0] == 3 && temp[1] == 2) || (temp[0] == 4 && temp[1] == 2) || (temp[0] == 5 && temp[1] == 2) || (temp[0] == 2 && temp[1] == 2) || (temp[0] == 0 && temp[1] == 4) || (temp[0] == 1 && temp[1] == 4) || (temp[0] == 2 && temp[1] == 4) || (temp[0] == 3 && temp[1] == 4) || (temp[0] == 3 && temp[1] == 6) || (temp[0] == 4 && temp[1] == 6) || (temp[0] == 5 && temp[1] == 6)) {
      temp[1] = temp[1] - 1
    }
    setPose(temp)
  }
  const arrowGoDown = () => {
    let temp = [...pose]
    temp[1] -= 1
    if (temp[0] < 0 || temp[0] > 5 || temp[1] > 7 || temp[1] < 0 || (temp[0] == 3 && temp[1] == 2) || (temp[0] == 4 && temp[1] == 2) || (temp[0] == 5 && temp[1] == 2) || (temp[0] == 2 && temp[1] == 2) || (temp[0] == 0 && temp[1] == 4) || (temp[0] == 1 && temp[1] == 4) || (temp[0] == 2 && temp[1] == 4) || (temp[0] == 3 && temp[1] == 4) || (temp[0] == 3 && temp[1] == 6) || (temp[0] == 4 && temp[1] == 6) || (temp[0] == 5 && temp[1] == 6)) {
      temp[1] += 1
    }
    setPose(temp)
  }

  const arrowGoLeft = () => {

    let temp = [...pose]
    temp[0] -= 1
    if (temp[0] < 0 || temp[0] > 5 || temp[1] > 7 || temp[1] < 0 || (temp[0] == 3 && temp[1] == 2) || (temp[0] == 4 && temp[1] == 2) || (temp[0] == 5 && temp[1] == 2) || (temp[0] == 2 && temp[1] == 2) || (temp[0] == 0 && temp[1] == 4) || (temp[0] == 1 && temp[1] == 4) || (temp[0] == 2 && temp[1] == 4) || (temp[0] == 3 && temp[1] == 4) || (temp[0] == 3 && temp[1] == 6) || (temp[0] == 4 && temp[1] == 6) || (temp[0] == 5 && temp[1] == 6)) {
      temp[0] += 1
    }
    setPose(temp)

  }

  const arrowGoRight = () => {
    let temp = [...pose]
    temp[0] += 1
    if (temp[0] < 0 || temp[0] > 5 || temp[1] > 7 || temp[1] < 0 || (temp[0] == 3 && temp[1] == 2) || (temp[0] == 4 && temp[1] == 2) || (temp[0] == 5 && temp[1] == 2) || (temp[0] == 2 && temp[1] == 2) || (temp[0] == 0 && temp[1] == 4) || (temp[0] == 1 && temp[1] == 4) || (temp[0] == 2 && temp[1] == 4) || (temp[0] == 3 && temp[1] == 4) || (temp[0] == 3 && temp[1] == 6) || (temp[0] == 4 && temp[1] == 6) || (temp[0] == 5 && temp[1] == 6)) {
      temp[0] -= 1
    }
    setPose(temp)
  }

  useEffect(() => {
    console.log(pose);
  }, [pose])

  return (
    <div className='above' >
      <Render pose={pose} />
      <div className='instruction'>
        <div onClick={arrowGoUp} id='arrowUp' style={{ padding: '8px', fontSize: '28px', cursor: 'pointer', display: 'block' }}>Move up</div>
        <div onClick={arrowGoDown} id='arrowDown' style={{ padding: '8px', fontSize: '28px', cursor: 'pointer', display: 'block' }}>Move down</div>
        <div onClick={arrowGoLeft} id='arrowLeft' style={{ padding: '8px', fontSize: '28px', cursor: 'pointer', display: 'block' }}>Move Left</div>
        <div onClick={arrowGoRight} id='arrowRight' style={{ padding: '8px', fontSize: '28px', cursor: 'pointer', display: 'block' }}>Move Right</div>
        <div className='btn'>
          <button onClick={startGame} style={{ backgroundColor: 'green', color: 'white', cursor: 'pointer', fontSize: '28px', height: '80px', width: '240px', borderRadius: '12px' }}>Run</button>
        </div>
      </div>
    </div>
  )
}

export default Maze