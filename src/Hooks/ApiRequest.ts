import axios from "axios";

export const getPolutionInfos = async (lat: string, lon: string) => {
    let response = await axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=27e49b8de60ecfe1de1eedcccd79a63e`).
    then(response => {
        return response.data;
    })
    .catch(error => {
        return error.response;
    })
    return response;
}