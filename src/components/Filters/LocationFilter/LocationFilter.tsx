import {Dropdown} from "@nextui-org/react";
import {BrazilState, brazilStates} from "@/models/BrazilStates";
import {LocationFilterContainer} from "@/components/Filters/LocationFilter/styles";
import React, {useMemo, useState} from "react";

const StatesDropdown = () => {
    const [selectedState, setSelectedState] = useState<BrazilState>({uf: 'N/A', name: 'Selecione um Estado'});

    const handleStateChange = (uf: string) => {
        if (!uf) return;

        const stateSelected = brazilStates.find(state => state.uf === uf);
        setSelectedState(stateSelected!);
        console.log(selectedState);
    }

    useMemo(() => {
        console.log(selectedState);
    }, [selectedState])

    return <Dropdown>
        <Dropdown.Button light>{selectedState && selectedState.name}</Dropdown.Button>
        <Dropdown.Menu
            aria-label={"Selecione um Estado"}
            onAction={(value) => handleStateChange(value as string)}
        >
            {brazilStates && brazilStates.map((state, index) => (
                <Dropdown.Item key={state.uf} textValue={state.uf}>{state.name}</Dropdown.Item>
            ))}
        </Dropdown.Menu>
    </Dropdown>
}

const CitiesDropdown = () => {
    return <Dropdown>
        <Dropdown.Button light>Cidades</Dropdown.Button>
        <Dropdown.Menu aria-label={"Selecione uma Cidade"}>
            <Dropdown.Item textValue={"1"}>Cidade 1</Dropdown.Item>
            <Dropdown.Item textValue={"2"}>Cidade 2</Dropdown.Item>
            <Dropdown.Item textValue={"3"}>Cidade 3</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
}


export function LocationFilter() {
    return <LocationFilterContainer>
        <StatesDropdown />
        <CitiesDropdown />
    </LocationFilterContainer>
}