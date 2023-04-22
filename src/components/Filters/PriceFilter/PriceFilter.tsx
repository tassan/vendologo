import {Form, InputNumber} from "antd";
import formatCurrency from "@/utils/CurrencyFormatter";
import {useState} from "react";

interface PriceFilterProps {
    title: string;
}

export function PriceFilter(props: PriceFilterProps) {
    const [, setSelectedPrice] = useState<number>(0);

    const onChange = (value?: number) => {
        setSelectedPrice(value!);
    }

    return (
        <Form.Item name="price" label={props.title} noStyle>
            <InputNumber style={{width: '100%'}}
                         formatter={(value) => formatCurrency(Number(value))}
                         parser={(value) => value!.replace(/\$\s?|(,*)/g, '')}
                         onChange={() => onChange}
            />
        </Form.Item>
    )
}