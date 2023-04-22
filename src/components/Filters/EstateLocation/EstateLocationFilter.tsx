import {BrazilState} from "@/models/Brazil";
import {LocationFilterContainer} from "@/components/Filters/EstateLocation/styles";
import React, {useCallback, useState} from "react";
import {StatesDropdown} from "@/components/Filters/EstateLocation/components/StateDropdown";
import {Form} from "antd";
import CitiesAutoComplete from "@/components/Filters/EstateLocation/components/CitiesAutoComplete";

export function EstateLocationFilter() {
    const [selectedState, setSelectedState] = useState<BrazilState>({name: 'Selecione o Estado', uf: 'N/A'});
    const [selectedCity, setSelectedCity] = useState<string>('Selecione uma Cidade');
    const [citiesAutoCompleteEnabled, setCitiesAutoCompleteEnabled] = useState<boolean>(false);

    useCallback(() => {
        setCitiesAutoCompleteEnabled(selectedState.uf !== 'N/A');
    }, [selectedState.uf]);

    return <Form.Item>
        <StatesDropdown selectedState={selectedState} setSelectedState={setSelectedState}/>
        <CitiesAutoComplete state={selectedState.uf} selectedCity={selectedCity}
                            setSelectedCity={setSelectedCity}
                            enabled={citiesAutoCompleteEnabled}/>
    </Form.Item>
}