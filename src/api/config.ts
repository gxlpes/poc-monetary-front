let baseUrl = '';

if (process.env.NODE_ENV === 'development') {
    baseUrl = 'http://localhost:3000';
} else {
    baseUrl = process.env.AUTH_BASE_URL || ''; // Use AUTH_BASE_URL for other environments
}

const paths = {
    authenticate: '/authenticate',
}

export { baseUrl, paths };
