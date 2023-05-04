import React from 'react';
import * as C from './styles';
import { useState, useEffect } from 'react';

type Props = {
    menuControl: number;
}

const PolutionCases = ({menuControl}: Props) => {
  const [opacity, setOpacity] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
        setOpacity(menuControl+1)
    },200);
  },[]);

  return (
    <C.PolutionCausesContainer opacityToShow={opacity}>
        <h1>Causas da poluição:</h1>
        <C.PolutionTextsArea>
            <C.LeftSide>
                <h2>Monóxido de carbono (CO):</h2>
                <p>
                    O gás é liberado através da queima incompleta de
                   combústiveis fósseis, bem como por processos industriais.
                   "É altamente tóxico para a saúde humana por ter a propriedade 
                   de se ligar à hemoglobina mais facilmente do que o oxigênio, causando a asfixia e até a morte."
                </p>
                <h2>Amônia (NH3):</h2>
                <p>
                    As principais fontes emissoras de amônia estão a volatização das fezes dos animais, a queima de biomassa,
                    as perdas do solo sob vegetação nativa, a fertilização dos solos para cultivo agrícola, as emissões de 
                    excrementos humanos e a combustão de combustíveis fósseis.
                </p>
                <h2>Dióxido de nitrogênio (NO2):</h2>
                <p>
                    Os Principais sintetizadores artificais dos óxidos de nitrogênio são:
                    veículos automotores, motores de combustão interna, Usinas termelétricas e siderúgicas, fábricas de papel.

                </p>
                <h2>Ozônio (O3):</h2>
                <p>
                    Poluição por ozônio é um tipo de poluição causado a partir de reações químicas entre raios solares, 
                    gases presentes na atmosfera e compostos liberados por veículos, processos industriais e instalações 
                    como usinas de energia e aterros sanitários.
                </p>
            </C.LeftSide>
            <C.RightSide>
                    <h2>Material Partículado (PM2_5 e PM_10):</h2>
                    <p>
                       É uma mistura complexa de sólidos com diâmetro reduzido, cujos componentes apresentam características físicas e 
                       químicas diversas. Em geral o material particulado é classificado de acordo com o diâmetro das partículas, devido 
                       à relação existente entre diâmetro e possibilidade de penetração no trato respiratório.
                       As fontes principais de material particulado são a queima de combustíveis fósseis, queima de biomassa vegetal, 
                       emissões de amônia na agricultura e emissões decorrentes de obras e pavimentação de vias.
                    </p>
                    <h2>Dóxido de Enxofre (SO2):</h2>
                    <p>
                        É um gás tóxico e incolor, pode ser emitido por fontes naturais ou por fontes antropogênicas e pode reagir com outros 
                        compostos na atmosfera, formando material particulado de diâmetro reduzido. A emissão antropogênica é causada pela 
                        queima de combustíveis fósseis que contenham enxofre em sua composição. 
                        As atividades de geração de energia, uso veicular e aquecimento doméstico são as que apresentam emissões mais significativas.
                    </p>
                </C.RightSide>
        </C.PolutionTextsArea>
    </C.PolutionCausesContainer>
  )
}

export default PolutionCases;