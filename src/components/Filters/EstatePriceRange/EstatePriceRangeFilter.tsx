import {Col, Form, InputNumber, Row, Slider} from "antd";
import React from "react";

interface EstatePriceRangeFilterProps {
    rangeTitle: string;
}

// The EstatePriceRangeFilter component is a filter to get the max price to filter the data

export const EstatePriceRangeFilter = (props: EstatePriceRangeFilterProps) => {
    const [priceRange, setPriceRange] = React.useState([1, 2000000]);
    const [priceSelected, setPriceSelected] = React.useState([1, 2000000]);

    const handleSliderChange = (value: any) => {
        setPriceRange(value);
    }

    return <Form.Item>
        <span>{props.rangeTitle}</span>
        <Row>
            <Col span={12}>
                <Slider
                    min={1}
                    max={2000000}
                    range
                    defaultValue={[1, 2000000]}
                    tipFormatter={value => `R$ ${value}`}
                    style={{margin: '0 16px'}}
                    onChange={handleSliderChange}
                />
            </Col>
            <Col span={4}>
                <InputNumber
                    min={1}
                    max={2000000}
                    defaultValue={1}
                    formatter={value => `R$ ${value}`}
                    style={{margin: '0 16px'}}
                    onChange={value => setPriceSelected([value as number, priceSelected[1]])}
                />
            </Col>
        </Row>
    </Form.Item>
}