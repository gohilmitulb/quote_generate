
const request = async () => {
    try {
      const api = 'https://api.api-ninjas.com/v1/quotes'
      
      const response = await fetch(api,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': 'azkzMeZUd1SAFlUs6e0HZg==Rdu61yBCSEaz5G00'
        }
      })
  
      const data = await response.json();
      console.log(data[0].quote);
      console.log(data[0].author);
      console.log(data[0].category);
    } catch (error) {
      console.log(error)
    } 
  }
  request();
  