import {Form} from "antd";
import {PriceFilter} from "@/components/Filters";
import {useEffect, useState} from "react";
import {LocationFilter} from "@/components/Filters/LocationFilter/LocationFilter";

interface InitialFilterProps {
    contractType: ContractType;
}

type ContractType = 'Alugar' | 'Comprar';

export function InitialFilter(props: InitialFilterProps) {
    const [priceFilterTitle, setPriceFilterTitle] = useState<string>('Aluguel até');

    useEffect(() => {
        if (props.contractType === 'Comprar') {
            setPriceFilterTitle('Imóvel até');
        }
    }, [props.contractType]);

    return (
        <Form>
            <LocationFilter />
            <PriceFilter title={priceFilterTitle} minPrice={0} maxPrice={100000}/>
        </Form>
    )
}