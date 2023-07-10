import axios from "axios";

const apiURL: string = 'https://coinranking1.p.rapidapi.com/coins';
const headers = {
  'X-RapidAPI-Key': 'f3268bfb5dmsha2a6accff6d42fap14d002jsn087ab1d3a854',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
};

async function getCoins(): Promise<any> {
  try {
    const response = await axios.get(apiURL, {
      params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h',
        'tiers[0]': '1',
        orderBy: 'marketCap',
        orderDirection: 'desc',
        limit: '50',
        offset: '0'
      },
      headers: headers
    });
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default getCoins;
