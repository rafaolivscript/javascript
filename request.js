const axios = require('axios');

/**
 * com a bibioteca axios do node conseguimos fazer requisições http
 * e fazer os tratamentos de erro necessário 
 * 
 * usando o then para receber a request caso ocorra tudo certo
 * e o catch para mostrar um erro caso ocorra na requisição
 */

const api =  'https://api.adviceslip.com/advice';

axios.get(api)
    .then(response =>{
        const advice =  response.data.slip.advice
        console.log('Frase',advice)
    })
.catch(error => {
    console.error('erro ao fazer a requist', error)
})
