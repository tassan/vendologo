import React, {useEffect, useState} from "react";
import IbgeServices, {City} from "@/services/IBGE/ibge.services";
import {AutoComplete} from "antd";

interface CitiesAutoCompleteProps {
    state: string;
    setSelectedCity: React.Dispatch<React.SetStateAction<string>>;
    enabled: boolean;
}

const CitiesAutoComplete = ({state, setSelectedCity, enabled}: CitiesAutoCompleteProps) => {
    const [cities, setCities] = useState<City[]>([]);
    const [autoCompleteText, setAutoCompleteText] = useState<string>('Selecione um Estado');

    const handleCityChange = (city: string) => {
        if (!city) return;
        setSelectedCity(city);
    }

    useEffect(() => {
        if (enabled) {
            setAutoCompleteText('Selecione uma Cidade');
        } else {
            setAutoCompleteText('Selecione um Estado');
        }
    }, [enabled]);

    useEffect(() => {
        const getCities = () => {
            const ibgeService = new IbgeServices();

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