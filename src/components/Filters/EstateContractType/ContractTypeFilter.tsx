import {Form, Radio} from "antd";
import React from "react";

export const EstateContractTypeFilter = () => {
    return <Form.Item>
        <Radio.Group>
            <Radio value={1}>Alugar</Radio>
            <Radio value={2}>Vender</Radio>
        </Radio.Group>
    </Form.Item>
}