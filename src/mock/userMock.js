import mock from '../utils/mock';

mock.onPost('/api/home/me').reply(200, {
    user: {
        'id': 1,
        'name': 'Marcos Costa',
        'username': 'marcoscosta',
        'email': 'marcoscosta.dev@gmail.com',        
        'avatar': '/images/avatars/avatar_1.jpg'
    },
});

mock.onPost('/api/home/login').reply((config) => {  
    const { email, password } = JSON.parse(config.data);

    if(email !== 'marcoscosta.dev@gmail.com' || password !== 'admin') {
        return [400, {message: 'Seu email ou Senha estão incorretos'}]
    }

    const user = {
        id: 1,
        name: 'Marcos costa',
        username: 'marcoscosta',
        email: 'marcoscosta.dev@gmail.com',
        avatar: '/images/avatars/avatar_1.jpg',
    }
    return [200, { user }]
})

mock.onGet('/api/home/user/marcoscosta').reply(200, {
    id: 1,
    name: 'Marcos Costa',
    username: 'marcoscosta',
    email: 'marcoscosta@conectadev.com',
    accessToken: 'dadadadadadadad',
    avatar: '/images/avatars/avatar_1.jpg',
    joinedIn: '06 de janeiro, 2020',
    work: 'Arquiteto de Software',
    totalPost: '388',
  });