import React, {useEffect, useState} from "react";
import IbgeServices, {City} from "@/services/IBGE/ibge.services";
import {AutoComplete} from "antd";

interface CitiesAutoCompleteProps {
    state: string;
    selectedCity: string;
    setSelectedCity: React.Dispatch<React.SetStateAction<string>>;
}

const CitiesAutoComplete = ({state, selectedCity, setSelectedCity}: CitiesAutoCompleteProps) => {
    const [cities, setCities] = useState<City[]>([]);

    const ibgeService = new IbgeServices();

    const handleCityChange = (city: string) => {
        if (!city) return;
        setSelectedCity(city);
    }

    const getCities = () => {
        if (!state || state === "N/A") return;
        ibgeService.getCities(state).then(cities => {
            setCities(cities);
        })
    }

    useEffect(() => {
        getCities();
    }, [getCities, state]);

    return <>
        <AutoComplete
            style={{width: 250, padding: 10}}
            options={cities.map(city => ({label: city.nome, value: city.nome}))}
            placeholder="Digite o nome de uma Cidade"
            filterOption={(inputValue, option) =>
                option?.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
            }
            onChange={handleCityChange}
        />
    </>
}

export default CitiesAutoComplete;