import {BrazilState} from "@/models/Brazil";
import {LocationFilterContainer} from "@/components/Filters/LocationFilter/styles";
import React, {useState, lazy, Suspense} from "react";
import {StatesDropdown} from "@/components/Filters/LocationFilter/StateDropdown";

const CitiesDropdown = lazy(() => import('@/components/Filters/LocationFilter/CitiesDropdown'));

export function LocationFilter() {
    const [selectedState, setSelectedState] = useState<BrazilState>({uf: 'N/A', name: 'Selecione um Estado'});
    const [selectedCity, setSelectedCity] = useState<string>('Selecione uma Cidade');

    return <LocationFilterContainer>
        <StatesDropdown selectedState={selectedState} setSelectedState={setSelectedState}/>
        <Suspense fallback={<div>Carregando...</div>}>
            <CitiesDropdown state={selectedState.uf} selectedCity={selectedCity} setSelectedCity={setSelectedCity}/>
        </Suspense>
    </LocationFilterContainer>
}