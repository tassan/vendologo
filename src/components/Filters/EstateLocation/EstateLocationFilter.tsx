import {BrazilState} from "@/models/Brazil";
import {LocationFilterContainer} from "@/components/Filters/EstateLocation/styles";
import React, {useState, lazy, Suspense} from "react";
import {StatesDropdown} from "@/components/Filters/EstateLocation/components/StateDropdown";
import {Form} from "antd";

const CitiesAutoComplete = lazy(() => import('@/components/Filters/EstateLocation/components/CitiesAutoComplete'));

export function EstateLocationFilter() {
    const [selectedState, setSelectedState] = useState<BrazilState>({uf: 'N/A', name: 'Selecione um Estado'});
    const [selectedCity, setSelectedCity] = useState<string>('Selecione uma Cidade');

    return <Form.Item>
        <LocationFilterContainer>
            <StatesDropdown selectedState={selectedState} setSelectedState={setSelectedState}/>
            <Suspense fallback={<div>Carregando...</div>}>
                <CitiesAutoComplete state={selectedState.uf} selectedCity={selectedCity}
                                    setSelectedCity={setSelectedCity}/>
            </Suspense>
        </LocationFilterContainer>
    </Form.Item>
}