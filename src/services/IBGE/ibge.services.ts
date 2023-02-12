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

        return data;
    }
}

export default IbgeServices;