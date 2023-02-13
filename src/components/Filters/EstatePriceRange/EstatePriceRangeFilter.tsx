import {Col, Form, InputNumber, Row, Slider} from "antd";
import React from "react";

export const EstatePriceRangeFilter = () => {
    return <Form.Item>
        <span>Faixa de Preço</span>
        <Row>
            <Col span={12}>
                <Slider
                    min={1}
                    max={2000000}
                    range
                    defaultValue={[1, 2000000]}
                    style={{margin: '0 16px'}}

                />
            </Col>
            <Col span={4}>
                <InputNumber
                    min={1}
                    max={2000000}
                    defaultValue={1}
                    formatter={value => `R$ ${value}`}
                    style={{ margin: '0 16px' }}
                />
            </Col>
        </Row>
    </Form.Item>
}