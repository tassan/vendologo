import {EstateLocationFilter} from "@/components/Filters/EstateLocation/EstateLocationFilter";
import {Button, Col, Form, InputNumber, Radio, Row, Slider} from "antd";
import React from "react";
import {EstateContractTypeFilter} from "@/components/Filters/EstateContractType/ContractTypeFilter";
import {EstateAreaFilter} from "@/components/Filters/EstateArea/EstateAreaFilter";
import {EstateTypeFilter} from "@/components/Filters/EstateType/EstateTypeFilter";
import {EstateRegionFilter} from "@/components/Filters/EstateRegion/EstateRegionFilter";
import {EstatePriceRangeFilter} from "@/components/Filters/EstatePriceRange/EstatePriceRangeFilter";
import {EstateUtilitiesFilter} from "@/components/Filters/EstateUtilities/EstateUtilitiesFilter";


const SearchEstateButton = () => {
    return <Form.Item>
        <Button type="primary" htmlType="submit">
            Buscar
        </Button>
    </Form.Item>
}


function SearchEstateForm() {
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
        <SearchEstateButton />
    </Form>
}

export default SearchEstateForm;