import {useState, useEffect} from 'react';

export const useDataFetching = () => {
    const _apiAdress = "https://api.covid19api.com/summary";
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(_apiAdress)
                .then(result => result.json())
                .catch(err => console.error(err))

            const result = (response.Countries).map(_transformSummary);
            setData(result);
        }
        fetchData();
    }, []);

    return {
        data
    };
};

export const useFilteredData = (data) => {
    const [search, setSearch] = useState("");
    const [filtered, setFiltered] = useState([]);
    
    useEffect(() => {
        const filteredData = data.filter((item) => item.countryName.toLowerCase().includes(search.toLowerCase()));
        setFiltered(filteredData);
    }, [search, data]);

    return {
        filtered,
        setSearch,
        setFiltered
    };
};

const _transformSummary = (item) => {
    return {    
        id: item.ID,
        countryName: item.Country,
        totalConfirmed: item.TotalConfirmed,
        totalDeaths: item.TotalDeaths,
        totalRecovered: item.TotalRecovered
    };
};

