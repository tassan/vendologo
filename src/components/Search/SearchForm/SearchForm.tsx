import {Form, Tabs} from "antd";
import {SearchFormContainer} from "@/components/Search/SearchForm/styles";
import {InitialFilter} from "@/components/Filters/InitialFilter/InitialFilter";

export function SearchForm() {

    const [form] = Form.useForm();

    const items = [
        {
            key: '1',
            label: `Alugar`,
            children: <InitialFilter contractType='Alugar'/>,
        },
        {
            key: '2',
            label: `Comprar`,
            children: <InitialFilter contractType='Comprar'/>,
        }
    ]

    return (
        <SearchFormContainer>
            <Form layout={'horizontal'}>
                <h1>Escolha onde você quer morar</h1>
                <Tabs defaultActiveKey="1" items={items}/>
            </Form>
        </SearchFormContainer>
    )
}