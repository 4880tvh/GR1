import React from 'react'
import './styles.css';
import { useState, useEffect } from 'react';
import Pic1 from '../../../ass1/src/assets/images/Picture1.jpg';
import Pic2 from '../../../ass1/src/assets/images/Picture2.jpg';
import Pic3 from '../../../ass1/src/assets/images/Picture3.jpg';
import Pic4 from '../../../ass1/src/assets/images/Picture4.jpg';
import Pic5 from '../../../ass1/src/assets/images/Picture5.jpg';
import Pic6 from '../../../ass1/src/assets/images/Picture6.jpg';
import { v4 as uuidv4 } from 'uuid'

const GridImage = () => {
  // let images =[]
  const [images,setImages] = useState([]);
  const [classes,setClasses] = useState(1);
  // console.log(typeof images)

  function handleInput(e) {
    e.preventDefault();
    var rows = document.getElementById('row')?.value || 0
    var columns = document.getElementById('col')?.value || 0
    console.log(rows + "" + columns)
    render(rows, columns)
    setClasses(columns)
  }

  const render = (rows,columns) =>
  {
    var temp = []
    
    // console.log(rows + "" + columns)
      for(var i = 0; i < rows; i++)
      {     
        for(var j = 0; j < columns; j++)
        {
          temp.push(Pic1)
        } 
          // images.push(Pic2);
      }  
      setImages(temp)
      console.log(images)
  }
  
  

  // useEffect(() => {
  //   console.log('useEffect has been called!');
  //   console.log(images);
    
  // }, [images]);

  return (
    <div style={{margin:'48px 0'}}><form onSubmit={handleInput}>
      <input id='row' placeholder='nhap vao so dong'></input>
      <input id='col' placeholder='nhap vao so cot'></input>

      <input type="submit" value="Create the table" />
    </form>
    <div className={`grid-container-${classes}`} >
    {images.map((images) =>{
      return( 
        <div className={`col-${classes}`}><img src={images} alt=''></img></div>
      )
  } )}
      </div>
      
    </div>

  )
}

export default GridImage;