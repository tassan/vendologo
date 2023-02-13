import {Button, Form} from "antd";
import React from "react";
import {
    EstateAreaFilter,
    EstateContractTypeFilter,
    EstateLocationFilter,
    EstatePriceRangeFilter,
    EstateRegionFilter,
    EstateTypeFilter,
    EstateUtilitiesFilter
} from "@/components/Filters";


const SearchEstateButton = () => {
    return <Form.Item>
        <Button type="primary" htmlType="submit">
            Buscar
        </Button>
    </Form.Item>
}


export function SearchEstateForm() {
    return <Form
        layout="horizontal"
        style={{width: '100%'}}

    >
        <EstateLocationFilter/>
        <EstateContractTypeFilter/>
        <EstateRegionFilter/>
        <EstateTypeFilter/>
        <EstatePriceRangeFilter/>
        <EstateAreaFilter/>
        <EstateUtilitiesFilter/>
        <SearchEstateButton/>
    </Form>
}