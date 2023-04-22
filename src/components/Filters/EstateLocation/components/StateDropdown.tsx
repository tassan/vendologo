import {brazil, BrazilState} from "@/models/Brazil";
import React, {useCallback, useMemo} from "react";
import {Select, Space} from "antd";

interface StateDropdownProps {
    selectedState: BrazilState;
    setSelectedState: React.Dispatch<React.SetStateAction<BrazilState>>;
}

export const StatesDropdown = ({selectedState, setSelectedState}: StateDropdownProps) => {

    const handleStateChange: (uf: string) => void = useCallback((uf: string) => {
        if (!uf) return;

        const stateSelected = brazil.find(state => state.uf === uf);
        setSelectedState(stateSelected!);
    }, [setSelectedState]);

    useMemo(() => {
        
        if (!selectedState) return;
        
        handleStateChange(selectedState.uf);
  
    }, [handleStateChange, selectedState])

    return <Space wrap>
        <Select
            defaultValue={selectedState && selectedState.name}
            style={{width: 250}}
            onChange={handleStateChange}
            options={brazil.map(state => ({label: state.name, value: state.uf}))}
        />
    </Space>
}