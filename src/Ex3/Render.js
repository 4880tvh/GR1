import diamond from '../../../ass1/src/assets/images/diamond.png'
import mario from '../../../ass1/src/assets/images/mariko.jpg'
import './styles.css'

function Render(props) {
    const FinishGame = () =>{
        alert('Congratulations !!!')
    }
    const { pose } = props;
    console.log(pose)
    return (
        <div className="parent">
            <div className="div1"><img id='1' className='posi' style={(pose[0]==0&&pose[1]==7)?{ width: '64px',display:'block' }:{display:'none'}} src={mario}></img></div>
            <div className="div2"> <img id='2' className='posi' style={(pose[0]==1&&pose[1]==7)?{ width: '64px',display:'block' }:{display:'none'}} src={mario}></img></div>
            <div className="div3"> <img id='3' className='posi' style={(pose[0]==2&&pose[1]==7)?{ width: '64px',display:'block' }:{display:'none'}} src={mario}></img></div>
            <div className="div4"> <img id='4' className='posi' style={(pose[0]==3&&pose[1]==7)?{ width: '64px',display:'block' }:{display:'none'}} src={mario}></img></div>
            <div className="div5">{(pose[0]==4&&pose[1]==7)?<FinishGame />:<img className='diamond' src={diamond}></img>}</div>
            <div className="div6"> <img id='6' className='posi' style={(pose[0]==5&&pose[1]==7)?{ width: '64px',display:'block' }:{display:'none'}} src={mario}></img></div>
            <div className="div7"> <img id='7' className='posi' style={(pose[0]==0&&pose[1]==6)?{ width: '64px',display:'block' }:{display:'none'}} src={mario}></img></div>
            <div className="div8"> <img id='8' className='posi' style={(pose[0]==1&&pose[1]==6)?{ width: '64px',display:'block' }:{display:'none'}} src={mario}></img></div>
            <div className="div9"> <img id='9' className='posi' style={(pose[0]==2&&pose[1]==6)?{ width: '64px',display:'block' }:{display:'none'}} src={mario}></img></div>
            <div className="div10"> </div>
            <div className="div11"> </div>
            <div className="div12"> </div>
            <div className="div13"> <img id='13' className='posi' style={(pose[0]==0&&pose[1]==5)?{ width: '64px',display:'block' }:{display:'none'}} src={mario}></img></div>
            <div className="div14"> <img id='14' className='posi' style={(pose[0]==1&&pose[1]==5)?{ width: '64px',display:'block' }:{display:'none'}} src={mario}></img></div>
            <div className="div15"> <img id='15' className='posi' style={(pose[0]==2&&pose[1]==5)?{ width: '64px',display:'block' }:{display:'none'}} src={mario}></img></div>
            <div className="div16"> <img id='16' className='posi' style={(pose[0]==3&&pose[1]==5)?{ width: '64px',display:'block' }:{display:'none'}} src={mario}></img></div>
            <div className="div17"> <img id='17' className='posi' style={(pose[0]==4&&pose[1]==5)?{ width: '64px',display:'block' }:{display:'none'}} src={mario}></img></div>
            <div className="div18"> <img id='18' className='posi' style={(pose[0]==5&&pose[1]==5)?{ width: '64px',display:'block' }:{display:'none'}} src={mario}></img></div>
            <div className="div19"></div>
            <div className="div20"></div>
            <div className="div21"></div>
            <div className="div22"></div>
            <div className="div23"> <img id='23' className='posi' style={(pose[0]==4&&pose[1]==4)?{ width: '64px',display:'block' }:{display:'none'}} src={mario}></img></div>
            <div className="div24"> <img id='24' className='posi' style={(pose[0]==5&&pose[1]==4)?{ width: '64px',display:'block' }:{display:'none'}} src={mario}></img></div>
            <div className="div25"> <img id='25' className='posi' style={(pose[0]==0&&pose[1]==3)?{ width: '64px',display:'block' }:{display:'none'}} src={mario}></img></div>
            <div className="div26"> <img id='26' className='posi' style={(pose[0]==1&&pose[1]==3)?{ width: '64px',display:'block' }:{display:'none'}} src={mario}></img></div>
            <div className="div27"> <img id='27' className='posi' style={(pose[0]==2&&pose[1]==3)?{ width: '64px',display:'block' }:{display:'none'}} src={mario}></img></div>
            <div className="div28"> <img id='28' className='posi' style={(pose[0]==3&&pose[1]==3)?{ width: '64px',display:'block' }:{display:'none'}} src={mario}></img></div>
            <div className="div29"> <img id='29' className='posi' style={(pose[0]==4&&pose[1]==3)?{ width: '64px',display:'block' }:{display:'none'}} src={mario}></img></div>
            <div className="div30"> <img id='30' className='posi' style={(pose[0]==5&&pose[1]==3)?{ width: '64px',display:'block' }:{display:'none'}} src={mario}></img></div>
            <div className="div31"> <img id='31' className='posi' style={(pose[0]==0&&pose[1]==2)?{ width: '64px',display:'block' }:{display:'none'}} src={mario}></img></div>
            <div className="div32"> <img id='32' className='posi' style={(pose[0]==1&&pose[1]==2)?{ width: '64px',display:'block' }:{display:'none'}} src={mario}></img></div>
            <div className="div33"></div>
            <div className="div34"></div>
            <div className="div35"></div>
            <div className="div36"></div>
            <div className="div37"> <img id='37' className='posi' style={(pose[0]==0&&pose[1]==1)?{ width: '64px',display:'block' }:{display:'none'}} src={mario}></img></div>
            <div className="div38"> <img id='38' className='posi' style={(pose[0]==1&&pose[1]==1)?{ width: '64px',display:'block' }:{display:'none'}} src={mario}></img></div>
            <div className="div39"> <img id='39' className='posi' style={(pose[0]==2&&pose[1]==1)?{ width: '64px',display:'block' }:{display:'none'}} src={mario}></img></div>
            <div className="div40"> <img id='40' className='posi' style={(pose[0]==3&&pose[1]==1)?{ width: '64px',display:'block' }:{display:'none'}} src={mario}></img></div>
            <div className="div41"> <img id='41' className='posi' style={(pose[0]==4&&pose[1]==1)?{ width: '64px',display:'block' }:{display:'none'}} src={mario}></img></div>
            <div className="div42"> <img id='42' className='posi' style={(pose[0]==5&&pose[1]==1)?{ width: '64px',display:'block' }:{display:'none'}} src={mario}></img></div>
            <div className="div43"> <img id='43' className='posi' style={(pose[0]==0&&pose[1]==0)?{ width: '64px',display:'block' }:{display:'none'}} src={mario}></img></div>
            <div className="div44"> <img id='44' className='posi' style={(pose[0]==1&&pose[1]==0)?{ width: '64px',display:'block' }:{display:'none'}} src={mario}></img></div>
            <div className="div45"> <img id='45' className='posi' style={(pose[0]==2&&pose[1]==0)?{ width: '64px',display:'block' }:{display:'none'}} src={mario}></img></div>
            <div className="div46"> <img id='46' className='posi' style={(pose[0]==3&&pose[1]==0)?{ width: '64px',display:'block' }:{display:'none'}} src={mario}></img></div>
            <div className="div47"> <img id='47' className='posi' style={(pose[0]==4&&pose[1]==0)?{ width: '64px',display:'block' }:{display:'none'}} src={mario}></img></div>
            <div className="div48"> <img id='48' className='posi' style={(pose[0]==5&&pose[1]==0)?{ width: '64px',display:'block' }:{display:'none'}} src={mario}></img></div>
        </div>
    )
}

export default Render