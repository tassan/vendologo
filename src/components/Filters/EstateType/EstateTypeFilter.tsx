import React from "react";
import {AutoComplete, Form} from "antd";

export const EstateTypeFilter = () => {
    return <Form.Item>
        <span>Tipo do Imóvel</span>
        <AutoComplete
            style={{color: 'black', width: '30%', height: '100%', margin: '0 16px'}}
            options={[
                {value: 'Apartamento'},
                {value: 'Casa'},
                {value: 'Terreno'},
                {value: 'Comercial'},
            ]}
            placeholder="Apartamento, Casa, Terreno, Comercial"
            filterOption={(inputValue, option) =>
                option?.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
            }
        />
    </Form.Item>
}