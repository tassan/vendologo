import {Form} from "antd";
import {EstateLocationFilter, PriceFilter} from "@/components/Filters";
import {useEffect, useState} from "react";

interface InitialFilterProps {
    contractType: ContractType;
}

type ContractType = 'Alugar' | 'Comprar';

// The InitialFilter component is a filter to get the initial data from the API
// It gets the intention of the customer (buy or rent), the estate location (city and state)
// and max price to filter the data
export function InitialFilter(props: InitialFilterProps) {
    const [priceFilterTitle, setPriceFilterTitle] = useState<string>('Aluguel até');

    useEffect(() => {
        if (props.contractType === 'Comprar') {
            setPriceFilterTitle('Imóvel até');
        }
    }, [props.contractType]);

    return (
        <Form>
            <Form.Item>
                <EstateLocationFilter />
            </Form.Item>
            <PriceFilter title={priceFilterTitle}/>
        </Form>
    )
}