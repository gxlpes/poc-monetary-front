import axios from 'axios';
import { baseUrl, paths } from './config'; // Import baseUrl and paths from config file

interface AuthCredentials {
    email: string;
    password: string;
    code?: string;
}

async function authenticate(credentials: AuthCredentials): Promise<any> {
    const url = `${baseUrl}${paths.authenticate}`;
    try {
        const response = await axios.post(url, credentials);
        return response.data;
    } catch (error) {
        console.error('Error during authentication:', error);
        throw error;
    }
}

export { authenticate };
