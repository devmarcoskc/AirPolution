import React, { useState } from 'react';
import * as C from './styles';
import BgGreen from '../assets/test.jpg';
import { useForm } from 'react-hook-form';
import { InputLatAndLon } from '../Types/types';
import { getPolutionInfos } from '../Hooks/ApiRequest';
import { ReponseAirPolution } from '../Types/types';
import { color } from 'framer-motion';

type Props = {}

const Home = (props: Props) => {
  const [resultsToShow, setResultsToShow] = useState<boolean>(true);
  const [apiResult, setApiResult] = useState<ReponseAirPolution>()

  const {
    register,
    watch,
    handleSubmit,
    formState: {errors}
  } = useForm<InputLatAndLon>();

  const submitData = async (data: InputLatAndLon) => {
    let response:ReponseAirPolution =  await getPolutionInfos(data.lat, data.lon);
    setApiResult(response);
    setResultsToShow(true);
  }

  return (
    <C.Section style={{backgroundImage:`url(${BgGreen})`}}>
        <div className='background-rgba'>
        <C.Header>
            <C.Navigation>
                <span>Níveis de Poluição Atmosférica</span>
                <span>Faça sua Parte</span>
                <span>O que Causa Poluição</span>
            </C.Navigation>
        </C.Header>
        <C.Container>
            {!resultsToShow &&
            <C.SearPolutionArea>
                <C.Form
                    onSubmit={handleSubmit(submitData)}
                    method="POST"
                >
                    <h1>Níveis de Poluição Atmosférica:</h1>
                    <div className='lat-and-lon-flex-div'>
                        <div className='lat-and-lon-flex-column'>
                            <label>Latitude:</label>
                            <input 
                                type='text'
                                {...register('lat', {
                                    required: true,
                                    pattern: /^[-]?[0-9]+[.]?[0-9]+$/gi
                                })}
                            />
                            {errors.lat && (
                                <span className='error-condition'>
                                    {errors.lat.type === "required" && "Campo é obrigatório*"}
                                    {errors.lat.type === "pattern" && "Digite uma latitude válida*"}
                                </span>
                            )}
                        </div>
                        <div className='lat-and-lon-flex-column'>
                            <label>Longitude:</label>
                            <input 
                                type='text'
                                {...register('lon', {
                                    required: true,
                                    pattern: /^[-]?[0-9]+[.]?[0-9]+$/gi
                                })}
                            />
                            {errors.lon && (
                                <span className='error-condition'>
                                    {errors.lon.type === "required" && "Campo é obrigatório*"}
                                    {errors.lon.type === "pattern" && "Digite uma longitude válida*"}
                                </span>
                            )}
                        </div>
                    </div>
                    <h2>
                        Digite a latitude e longitude do seu local de interesse
                        para calcularmos e mostrar os resultados dos níveis de Poluição Atmosférica
                        em tempo real.
                    </h2>
                    <span>
                        Não sabe como fazer ? Vá em google maps, digite seu local e clique
                        com o botao direito do mouse.
                    </span>

                    <button type="submit">Ver Resultados</button>
                </C.Form>
            </C.SearPolutionArea>
            }
            {resultsToShow &&
                <C.ResultPolutionArea
                    coResult={apiResult?.list[0].components.co}
                    nh3Result={apiResult?.list[0].components.nh3}
                    no2Result={apiResult?.list[0].components.no2}
                    o3Result={apiResult?.list[0].components.o3}
                    pm2Result={apiResult?.list[0].components.pm2_5}
                    pm10Result={apiResult?.list[0].components.pm10}
                    so2Result={apiResult?.list[0].components.so2}
                >
                    <h1>Níveis de Poluição da Sua Localidade Agora:</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Poluente:</th>
                                <th>Resultado(μg/m3):</th>
                                <th>Resultados Aceitáveis(μg/m3):</th>
                                <th>Resultados Ruins(μg/m3):</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>CO</td>
                                <td 
                                    className='co-result'
                                    style={{
                                      color: 
                                      `${apiResult?.list[0].components.co !== undefined && apiResult?.list[0].components.co > 2200 ? 
                                      '#7C0A02' : ''}`
                                    }}
                                >
                                    {apiResult?.list[0].components.co}
                                </td>
                                <td>0 - 2200</td>
                                <td>{'> 2200'}</td>
                            </tr>
                            <tr>
                                <td>NH3</td>
                                <td 
                                    className='nh3-result'
                                    style={{
                                        color: 
                                        `${apiResult?.list[0].components.nh3 !== undefined && apiResult?.list[0].components.nh3 > 17 ? 
                                        '#7C0A02' : ''}`
                                      }}
                                >
                                    {apiResult?.list[0].components.nh3}
                                </td>
                                <td>0 - 17</td>
                                <td>{'> 17'}</td>
                            </tr>
                            <tr>
                                <td>NO2</td>
                                <td 
                                    className='no2-result'
                                    style={{
                                        color: 
                                        `${apiResult?.list[0].components.no2 !== undefined && apiResult?.list[0].components.no2 > 70 ? 
                                        '#7C0A02' : ''}`
                                      }}
                                >{apiResult?.list[0].components.no2}</td>
                                <td>0 - 70</td>
                                <td>{'> 70'}</td>
                            </tr>
                            <tr>
                                <td>O3</td>
                                <td 
                                    className='o3-result'
                                    style={{
                                        color: 
                                        `${apiResult?.list[0].components.o3 !== undefined && apiResult?.list[0].components.o3 > 80 ? 
                                        '#7C0A02' : ''}`
                                      }}
                                >
                                    {apiResult?.list[0].components.o3}
                                </td>
                                <td>0 - 80</td>
                                <td>{'> 80'}</td>
                            </tr>
                            <tr>
                                <td>PM2_5</td>
                                <td 
                                    className='pm2-result'
                                    style={{
                                        color: 
                                        `${apiResult?.list[0].components.pm2_5 !== undefined && apiResult?.list[0].components.pm2_5 > 40 ? 
                                        '#7C0A02' : ''}`
                                      }}
                                >
                                    {apiResult?.list[0].components.pm2_5}</td>
                                <td>0 - 40</td>
                                <td>{'> 40'}</td>
                            </tr>
                            <tr>
                                <td>PM2_10</td>
                                <td 
                                    className='pm10-result'
                                    style={{
                                        color: 
                                        `${apiResult?.list[0].components.pm10 !== undefined && apiResult?.list[0].components.pm10 > 50 ? 
                                        '#7C0A02' : ''}`
                                      }}
                                >
                                    {apiResult?.list[0].components.pm10}</td>
                                <td>0 - 50</td>
                                <td>{'> 50'}</td>
                            </tr>
                            <tr>
                                <td>SO2</td>
                                <td 
                                    className='so2-result'
                                    style={{
                                        color: 
                                        `${apiResult?.list[0].components.so2 !== undefined && apiResult?.list[0].components.so2 > 40 ? 
                                        '#7C0A02' : ''}`
                                      }}
                                >
                                    {apiResult?.list[0].components.so2}
                                </td>
                                <td>0 - 40</td>
                                <td>{'> 40'}</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Os resultados estão sucessítiveis a uma margem de erro de aproxidamente 12%.</p>
                    <h3>Nome dos Poluentes:</h3>
                    <p>
                       Monóxido de Carbono (CO), Amoníaco (NH3), Dióxido de Nitrogênio (NO2), 
                       Ozônio (O3), Material Particulado Fino (diâmetro inferior a 2,5 micrometros), 
                       Material Particulado Fino (diâmetro inferior a 10 micrometros), Dióxido de Enxofre (SO2) 
                    </p>
                    <button onClick={() => setResultsToShow(false)}>Voltar</button>
                </C.ResultPolutionArea>
            }
        </C.Container>
        </div>
    </C.Section>
  )
}

export default Home;