import {Form, Radio} from "antd";

export const EstateRegionFilter = () => {
    return <Form.Item>
        <Radio.Group>
            <Radio value={1}>Urbano</Radio>
            <Radio value={2}>Rural</Radio>
        </Radio.Group>
    </Form.Item>
}