import {Col, Form, InputNumber, Row, Slider} from "antd";
import {useState} from "react";
import FormItemLabel from "antd/es/form/FormItemLabel";
import {SliderMarks} from "antd/es/slider";

interface PriceFilterProps {
    title: string;
    minPrice: number;
    maxPrice: number;
}

export function PriceFilter({title, minPrice = 0, maxPrice = 10000}: PriceFilterProps) {
    const [inputValue, setInputValue] = useState(0)

    const onChange = (newValue: number | null) => {
        if (newValue === null) return;

        setInputValue(newValue);
    };

    const priceMarks: SliderMarks = {
        // [2500] : {
        //     label: <>R$ 2500</>,
        // },
        // [5000] : {
        //     label: <>R$ 5000</>,
        // },
        [minPrice]: {
            label: <>R$ {minPrice}</>,
        },
        [maxPrice]: {
            label: <>R$ {maxPrice}</>,
        }
    }


return (
    <Form.Item name="price" label={title} noStyle>
        <Row>
            <Col span={12}>
                <span>{title}</span>
            </Col>
        </Row>
        <Row>
            <Col span={12}>
                <Slider
                    marks={priceMarks}
                    min={minPrice}
                    max={maxPrice}
                    onChange={onChange}
                    value={typeof inputValue === 'number' ? inputValue : 0}
                    step={1}
                />
            </Col>
            <Col span={12}>
                <InputNumber
                    min={minPrice}
                    max={maxPrice}
                    style={{margin: '0 16px', width: '90%'}}
                    value={inputValue}
                    formatter={value => `R$ ${value}`
                        .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                    parser={(value?: string) => Number(value?.replace(/R\$\s?|(,*)/g, '') ?? 0)}
                    onChange={onChange}
                    size={'large'}
                />
            </Col>
        </Row>
    </Form.Item>
)
}