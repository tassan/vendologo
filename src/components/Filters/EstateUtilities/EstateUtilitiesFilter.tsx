import {Col, Form, InputNumber, Row, Slider} from "antd";
import React from "react";



const EstateBedroomsFilter = () => {
    return  <Form.Item>
        <span>Quartos</span>
        <Row>
            <Col span={12}>
                <Slider
                    min={1}
                    max={10}
                    style={{margin: '0 16px'}}
                />
            </Col>
            <Col span={4}>
                <InputNumber
                    min={1}
                    max={10}
                    defaultValue={1}
                    style={{ margin: '0 16px' }}
                />
            </Col>
        </Row>
    </Form.Item>
}

const EstateBathroomsFilter = () => {
    return <Form.Item>
        <span>Banheiros</span>
        <Row>
            <Col span={12}>
                <Slider
                    min={1}
                    max={10}
                    style={{margin: '0 16px'}}
                />
            </Col>
            <Col span={4}>
                <InputNumber
                    min={1}
                    max={10}
                    defaultValue={1}
                    style={{ margin: '0 16px' }}
                />
            </Col>
        </Row>
    </Form.Item>
}

const EstateGarageSpacesFilter = () => {
    return <Form.Item>
        <span>Vagas de Garagem</span>
        <Row>
            <Col span={12}>
                <Slider
                    min={1}
                    max={10}
                    style={{margin: '0 16px'}}
                />
            </Col>
            <Col span={4}>
                <InputNumber
                    min={1}
                    max={10}
                    defaultValue={1}
                    style={{ margin: '0 16px' }}
                />
            </Col>
        </Row>
    </Form.Item>
}

export const EstateUtilitiesFilter = () => {
    return <>
        <EstateBedroomsFilter/>
        <EstateBathroomsFilter/>
        <EstateGarageSpacesFilter/>
    </>
}