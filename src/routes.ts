import { Request, Response } from 'express';

import createUser from './services/CreateUser';

export default function helloWorld (request: Request, response: Response) {

    const user = createUser({
        email: 'priscila@priscila.com',
        password: '123456',
        techs: [
            'NodeJS', 
            'ReactJS', 
            'React Native', 
            { title: 'Javascript', experience: 100 },
            { title: 'Nova tech', experience: 100 },
        ]
    })

    return response.json( {message: 'Hello World'} );
}