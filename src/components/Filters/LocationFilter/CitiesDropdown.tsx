import React, {useEffect, useMemo, useState} from "react";
import IbgeServices, {City} from "@/services/IBGE/ibge.services";
import {Dropdown} from "@nextui-org/react";

interface CitiesDropdownProps {
    state: string;
    selectedCity: string;
    setSelectedCity: React.Dispatch<React.SetStateAction<string>>;
}

const CitiesDropdown = ({state, selectedCity, setSelectedCity}: CitiesDropdownProps) => {
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
    }, [state]);

    return <Dropdown>
        <Dropdown.Button light>{selectedCity && selectedCity}</Dropdown.Button>
        <Dropdown.Menu
            aria-label={"Selecione uma Cidade"}
            onAction={(value) => handleCityChange(value as string)}
        >
            {cities && cities.map((city, index) => (
                <Dropdown.Item key={city.nome} textValue={city.nome}>{city.nome}</Dropdown.Item>
            ))}
        </Dropdown.Menu>
    </Dropdown>
}

export default CitiesDropdown;