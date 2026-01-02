import { Injectable } from '@nestjs/common';
import { ConnectUser } from './dto/connect-user.dto';
import { CreateAuthDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {
  connectUser(user: ConnectUser) {
    const mockConnectUser = {
      email: 'jhon.doe@exemple.com',
      password: 'supersecret123',
      firstname: 'Jhon',
      lastname: 'Doe',
    };

    try {
      if (user.email !== mockConnectUser.email) {
        return {
          success: false,
          message: 'email introuvable en base',
          code: 401,
        };
      }

      if (user.password !== mockConnectUser.password) {
        return {
          success: false,
          message: 'mot de passe introuvable en base',
          code: 401,
        };
      }

      const response = {
        success: true,
        message: 'connexion réussie',
        code: 200,
        data: { mockConnectUser },
      };

      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  registerUser(user: CreateAuthDto) {
    const mockRegisterUser = {
      firstname: "Jhon",
      lastname: "Doe",
      email: "jhon.doe@exemple.com",
      password: "supersecret123",
    };

    if (user.email !== mockRegisterUser.email) {
      return {
        success: false,
        message: "Email non reconnu, référez-vous au README",
        code: 401,
        data: null,
      };
    }

    if (user.firstname !== mockRegisterUser.firstname) {
      return {
        success: false,
        message: "Prénom non reconnu, référez-vous au README",
        code: 401,
        data: null,
      };
    }

    if (user.lastname !== mockRegisterUser.lastname) {
      return {
        success: false,
        message: "Nom de famille non reconnu, référez-vous au README",
        code: 401,
        data: null,
      };
    }

    if (user.password !== mockRegisterUser.password) {
      return {
        success: false,
        message: "Mot de passe incorrect",
        code: 401,
        data: null,
      };
    }

    return {
      success: true,
      message: "Utilisateur enregistré avec succès",
      code: 200,
      data: {
        mockRegisterUser
      },
    };
  }
}
