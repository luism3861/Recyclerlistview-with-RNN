
  export const DataCall =  async  () => {
    const api = await fetch('https://dog.ceo/api/breed/husky/images');
    const response = await api.json();
    const fullData = response.message;
    return fullData;
  }

