import React, {useState } from 'react';
import * as C from './styles';
import BgGreen from '../assets/test.jpg';
import DoYourPart from '../Components/DoYourPart';
import PolutionCases from '../Components/PolutionCauses';
import PolutionLevels from '../Components/PolutionLevels';

const Home = () => {
  const [menuControl, setMenuControl] = useState<number>(0);
  
  const goToPolutionLevels = (e:React.MouseEvent<HTMLSpanElement>) => {
    setMenuControl(0);
  }

  const goToDoYourPart = (e:React.MouseEvent<HTMLSpanElement>) => {
    setMenuControl(1);
  }

  const goToCausesPolution = (e:React.MouseEvent<HTMLSpanElement>) => {
    setMenuControl(2);
  }

  return (
    <C.Section style={{backgroundImage:`url(${BgGreen})`}}>
        <div className='background-rgba'>
        <C.Header>
            <C.Navigation colorToChange={menuControl}>
                <span 
                    onClick={goToPolutionLevels}
                    style={{color:`${menuControl === 0 ? 'white' : '#004526'}`}}
                >
                    Níveis de Poluição Atmosférica
                </span>
                <span 
                    onClick={goToDoYourPart}
                    style={{color:`${menuControl === 1 ? 'white' : '#004526'}`}}
                >
                    Faça sua Parte
                </span>
                <span 
                    onClick={goToCausesPolution}
                    style={{color:`${menuControl === 2 ? 'white' : '#004526'}`}}
                >
                    O que Causa Poluição
                </span>
            </C.Navigation>
        </C.Header>
        <C.Container>
            {menuControl === 0 &&
                <PolutionLevels menuControl={menuControl}/>
            }
            {menuControl  === 1 &&
                <DoYourPart menuControl={menuControl}/>
            }
            {menuControl === 2 &&
                <PolutionCases menuControl={menuControl}/>
            }
        </C.Container>
        </div>
    </C.Section>
  )
}

export default Home;