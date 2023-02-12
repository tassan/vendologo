import {brazil, BrazilState} from "@/models/Brazil";
import React, {useMemo} from "react";
import {Dropdown} from "@nextui-org/react";

interface StateDropdownProps {
    selectedState: BrazilState;
    setSelectedState: React.Dispatch<React.SetStateAction<BrazilState>>;
}

export const StatesDropdown = ({selectedState, setSelectedState}: StateDropdownProps) => {

    const handleStateChange = (uf: string) => {
        if (!uf) return;

        const stateSelected = brazil.find(state => state.uf === uf);
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
            {brazil && brazil.map((state, index) => (
                <Dropdown.Item key={state.uf} textValue={state.uf}>{state.name}</Dropdown.Item>
            ))}
        </Dropdown.Menu>
    </Dropdown>
}