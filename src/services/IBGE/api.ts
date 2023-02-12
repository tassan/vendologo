import axios from 'redaxios';

class IbgeApiServices {
  async getStates() {
    const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
    return response.data;
  }

  async getCities(uf: string) {
    if (!uf || typeof uf !== 'string') {
      return [];
    }

    const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`);

    if (!response.data) {
      throw new Error('Não foi possível obter os dados');
      return [];
    }

    return response.data;
  }
}

export default IbgeApiServices;