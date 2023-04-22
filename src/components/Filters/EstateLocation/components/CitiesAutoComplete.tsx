import React, {useEffect, useState} from "react";
import IbgeServices, {City} from "@/services/IBGE/ibge.services";
import {AutoComplete} from "antd";

interface CitiesAutoCompleteProps {
    state: string;
    selectedCity: string;
    setSelectedCity: React.Dispatch<React.SetStateAction<string>>;
    enabled: boolean;
}

const CitiesAutoComplete = ({state, selectedCity, setSelectedCity, enabled}: CitiesAutoCompleteProps) => {
    const [cities, setCities] = useState<City[]>([]);

    const ibgeService = new IbgeServices();

    const handleCityChange = (city: string) => {
        if (!city) return;
        setSelectedCity(city);
    }

    let autoCompleteText = !enabled ? "Selecione um Estado" : 'Digite o nome de uma Cidade';

    useEffect(() => {
        const getCities = () => {
            if (!state || state === "N/A") return;
            ibgeService.getCities(state).then(cities => {
                setCities(cities);
            })
        }

        getCities();
    }, [state]);

    return <>
        <AutoComplete
            disabled={!enabled}
            style={{width: 250, padding: 10}}
            options={cities.map(city => ({label: city.nome, value: city.nome}))}
            placeholder={autoCompleteText}
            filterOption={(inputValue, option) =>
                option?.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
            }
            onChange={handleCityChange}
        />
    </>
}

export default CitiesAutoComplete;