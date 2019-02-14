
const request = require('request'); // n librerias que hacen lo mismo

const verTodosGits = () => {
  const options = {
    uri: 'https://api.github.com/gists', // 'https://api.github.com/users/mabel2k16/repos',
    headers: {
      'User-Agent': 'Awesome-Octocat-App',
    },
  };
  return new Promise((resolve, reject) => {
    request(options, (error, response, body) => {
      console.log('=====================================');
      console.log(body);
      console.log('=====================================');
      console.log(response.statusCode);
      console.log('=====================================');
      if (error) {
        return reject(error);
      }
      const repositorios = JSON.parse(body);
      return resolve(repositorios);
    });
  });
};

const repositorioRequest = (loginBuscado) => {
  const options2 = {
    uri: `https://api.github.com/users/${loginBuscado}/repos`,
    headers: {
      'User-Agent': 'Awesome-Octocat-App',
    },
  };
  return new Promise((resolve, reject) => {
    request(options2, (error2, response2, body2) => {
      if (error2) {
        return reject(error2);
      }
      if (response2.statusCode !== 200) {
        return reject(new Error('API rate limit exceeded'));
      }
      const respuestaJson = JSON.parse(body2);
      return resolve(respuestaJson);
    });
  });
};

const branchRequest = (duenio, nomRepositorio) => {
  const options3 = {
    uri: `https://api.github.com/repos/${duenio}/${nomRepositorio}/branches`,
    headers: {
      'User-Agent': 'Awesome-Octocat-App',
    },
  };
  return new Promise((resolve, reject) => {
    request(options3, (error3, response3, body3) => {
      if (error3) {
        return reject(error3);
      }
      const respuestaJson = JSON.parse(body3);
      return resolve(respuestaJson);
    });
  });
};

const funcionNueva = async () => {
  const loginDuenio = 'mabel2k16';
  // antes era la promesa inicial
  try {
    const repositorios = await repositorioRequest(loginDuenio);
    console.log('=====================================');
    console.log(repositorios);
    console.log('=====================================');
    // el primer then
    let arrayDeRespuestas;
    if (Object.keys(repositorios).length > 0) {
      const vectorDePromesas = [];
      repositorios.forEach((repositorio) => {
        const branchRequestPromise = branchRequest(loginDuenio, repositorio.name);
        vectorDePromesas.push(branchRequestPromise); // hacen las llamadas
      });
      arrayDeRespuestas = await Promise.all(vectorDePromesas); // tengo un vector de llamadas asíncronas, cuando todas esten resueltas resolver la promesa
    } else {
      throw new Error('sin repositorios');
    }

  } catch(err) {
      console.log('error', err);
      return Promise.reject(err);
  }
  

    // repositorioRequest(loginDuenio)
    // .then((repositorios) => {
    //   if (Object.keys(repositorios).length > 0) {
    //     const vectorDePromesas = [];
    //     repositorios.forEach((repositorio) => {
    //       const branchRequestPromise = branchRequest(loginDuenio, repositorio.name);
    //       vectorDePromesas.push(branchRequestPromise); // hacen las llamadas
    //     });
    //     return Promise.all(vectorDePromesas); // tengo un vector de llamadas asíncronas, cuando todas esten resueltas resolver la promesa
    //   }
    //   return Promise.reject(new Error('sin repositorios'));
    // })
    // .then((arrayDeRespuestas) => {
    //   if (Object.keys(arrayDeRespuestas).length > 0) {
    //     console.log('===== Branch de todos los repositorios =====');
    //     console.log(JSON.stringify(arrayDeRespuestas, null, 4));
    //     console.log('=============================================');
    //     return Promise.resolve(arrayDeRespuestas);
    //   }
    //   return Promise.reject(new Error('Repositorios Sin branches'));
    // })
    // .catch((err) => {
    //   console.log('error', err);
    //   return Promise.reject(err);
    // });
};

funcionNueva();
