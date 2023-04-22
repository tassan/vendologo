import {StatesDropdown} from "@/components/StatesDropdown/StateDropdown";
import {useEffect, useState} from "react";
import {BrazilState} from "@/models/Brazil";
import CitiesAutoComplete from "@/components/CitiesAutoComplete/CitiesAutoComplete";

export function LocationFilter() {
    const [selectedState, setSelectedState] = useState<BrazilState>({} as BrazilState);
    const [, setSelectedCity] = useState<string>('');
    const [enabled, setEnabled] = useState<boolean>(false);

    useEffect(() => {
        if (selectedState && selectedState.uf) {
            setEnabled(true);
        }
    }, [selectedState]);

    return <>
        <StatesDropdown selectedState={selectedState} setSelectedState={setSelectedState}/>
        <CitiesAutoComplete state={selectedState.uf} setSelectedCity={setSelectedCity} enabled={enabled} />
    </>
}