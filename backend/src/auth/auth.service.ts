import { Injectable } from '@nestjs/common';
import { connectUser } from './dto/connect-user.dto';

@Injectable()
export class AuthService {
  connectUSer(user: connectUser) {
    try {
      const mockUSer = {
        email: 'jhon.doe@exemple.com',
        password: 'supersecret123',
      };
      if (user.email != mockUSer.email || user.password != mockUSer.password) {
        throw new Error('Erreur : utilisateur introuvable');
      }

      const response = {message : "connexion réussie" , data : user}
      return response
    } catch (error) {
      throw new Error(error)
    }
  }
}
