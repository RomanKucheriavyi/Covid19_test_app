import {useState, useEffect} from 'react';

export const useDataFetching = () => {

    const _apiAdress = "https://api.covid19api.com/summary";
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(_apiAdress)
                .then(result => result.json())
                .catch(err => console.log(err))

            const result = (response.Countries).map(_transformSummary);
            setData(result);
        }
        fetchData();
    }, []);

    useEffect(() => {
        setFiltered(
            data.filter((item) => item.Country.toLowerCase().includes(search.toLowerCase()))
        );
    }, [search, data]);

    return {
        filtered,
        setSearch,
        setFiltered
    };
};

const _transformSummary = (data) => {
    return {    
        id: data.ID,
        Country: data.Country,
        TotalConfirmed: data.TotalConfirmed,
        TotalDeaths: data.TotalDeaths,
        TotalRecovered: data.TotalRecovered
    };
};


// export default class CovidService {
//     _apiAdress = "https://api.covid19api.com";

//     async getResource (url) {
//         const result = await fetch(`${this._apiAdress}${url}`);
//         if (!result.ok) {
//             throw new Error(`Could not fetch ${url}, received ${result.status}`);
//         };
//         const body = await result.json();
//         return body;
//     };

//     async getSummary () {
//         const result = (await this.getResource(`/summary`)).Countries;
//         return result.map(this._transformSummary);
//     };

//     _transformSummary = (data) => {
//         return {    
//             id: data.ID,
//             Country: data.Country,
//             TotalConfirmed: data.TotalConfirmed,
//             TotalDeaths: data.TotalDeaths,
//             TotalRecovered: data.TotalRecovered
//         };
//     };
// };