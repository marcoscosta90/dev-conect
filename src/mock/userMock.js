import mock from '../utils/mock';

/* mock.onPost('/api/home/login').reply(200, {
    'id': 1,
    'username': 'marcoscosta',
    'email': 'marcoscosta.dev@gmail.com'
}) */

mock.onPost('/api/home/login').reply((config) => {  
    const { email, password } = JSON.parse(config.data);

    if(email !== 'marcoscosta.dev@gmail.com' || password !== 'admin') {
        return [400, {message: 'seu email ou senha estao incorretos'}]
    }

    const user = {
        id: 1,
        name: 'Marcos costa',
        username: 'marcoscosta',
        email: 'marcoscosta.dev@gmail.com'
    }
    return [200, { user }]
})