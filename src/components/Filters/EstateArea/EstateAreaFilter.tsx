import React from "react";
import {Col, Form, InputNumber, Row, Slider} from "antd";

export const EstateAreaFilter = () => {
  return <Form.Item>
      <span>Área do Imóvel</span>
      <Row>
          <Col span={12}>
              <Slider
                  min={1}
                  max={2000000}
                  range
                  defaultValue={[100, 2000000]}
                  style={{margin: '0 16px'}}
              />
          </Col>
          <Col span={4}>
              <InputNumber
                  min={1}
                  max={2000000}
                  defaultValue={100}
                  formatter={value => `${value}m²`}
                  style={{ margin: '0 16px' }}
              />
          </Col>
      </Row>
  </Form.Item>

}
