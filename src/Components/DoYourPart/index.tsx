import React, { useEffect, useState } from 'react';
import * as C from './styles';
import {GiEcology} from 'react-icons/gi';
import {FaChevronLeft} from 'react-icons/fa';
import {FaChevronRight} from 'react-icons/fa';

type Props = {
    menuControl: number;
}

const DoYourPart = ({menuControl}: Props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [opacity, setOpacity] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
        setOpacity(menuControl+1)
    }, 200);
  },[]);

  const goToPrevious = (e:React.MouseEvent<HTMLDivElement>) => {
    if(currentIndex === 0) {
        setCurrentIndex(2);
    } else {
        setCurrentIndex(currentIndex-1);
    }
  }

  const goToNext = (e:React.MouseEvent<HTMLDivElement>) => {
    if(currentIndex === 2) {
        setCurrentIndex(0);
    } else {
        setCurrentIndex(currentIndex+1);
    }
    
  }

  return (
    <C.DoYourPartContainer 
        menuControl={opacity}
    >
        <div className='arrow-right' onClick={goToNext}>
            <FaChevronRight/>
        </div>
        <div className='arrow-left' onClick={goToPrevious}>
            <FaChevronLeft />
        </div>
        <C.Slider sliderToMove={currentIndex}>
            <C.ItemSlider>
                <h1>Utilize mais itens sustentáveis</h1>
                <div className='text-and-svg'>
                    <p>
                    As vantagens de utlizar itens sustentáveis é que você está escolhendo
                    itens que foram feitos apartir de matérias-primas renováveis. São biodegradáveis,
                    possuem embalagens mínimas ou ecológicas. Isso tudo contribue com a redução
                    dos danos ao meio ambiente.
                    </p>
                    <GiEcology/>
                </div>
            </C.ItemSlider>
            <C.ItemSlider>
                <h1>Prefira transporte públicos</h1>
                <div className='text-and-svg'>
                    <p>
                        Avalie a viabilidade de usar o transporte público para ir ao trabalho, ao invés de usar carro.
                        Assim, você contribui para aliviar o trânsito e faz a sua parte na preservação ambiental, principalmente quanto à qualidade do ar que respira. 
                    </p>
                    <GiEcology/>
                </div>
            </C.ItemSlider>
            <C.ItemSlider>
                <h1>Utilize mais bicicleta sempre que possível</h1>
                <div className='text-and-svg'>
                    <p>
                        No dia a dia, use bicicleta sempre que possível. Você pode fazer pequenas compras, 
                        passeios e visitas aos amigos mais próximos indo de bicicleta. Dessa forma, você economiza combustível, 
                        ajuda a melhorar a qualidade do ar e ainda exercita o corpo.
                    </p>
                    <GiEcology/>
                </div>
            </C.ItemSlider>
        </C.Slider>
        <div className='dots-area'>
            <div 
                className='dots'
                style={{color: `${currentIndex == 0 ? 'white' : ''}`}}
                onClick={() => setCurrentIndex(0)}
            >
                ●
            </div>
            <div 
                className='dots'
                style={{color: `${currentIndex == 1 ? 'white' : ''}`}}
                onClick={() => setCurrentIndex(1)}
            >
                ●
            </div>
            <div 
                className='dots'
                style={{color: `${currentIndex == 2 ? 'white' : ''}`}}
                onClick={() => setCurrentIndex(2)}
            >
                ●
            </div>
        </div>
    </C.DoYourPartContainer>
  )
}

export default DoYourPart;