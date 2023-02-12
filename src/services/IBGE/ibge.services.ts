import IbgeApiServices from "@/services/IBGE/api";

export type City = {
    id: number;
    nome: string;
}

class IbgeServices {

    async getCities(uf: string): Promise<City[]> {
        const api = new IbgeApiServices();

        const data = await api.getCities(uf);

        if (!data) {
            return [];
        }

        let orderedData = data.sort((a: City, b: City) => {
                return a.nome.localeCompare(b.nome);
            }
        );

        return orderedData;
    }
}

export default IbgeServices;