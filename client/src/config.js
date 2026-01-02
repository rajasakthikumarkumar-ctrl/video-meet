// Configuration for different environments
const config = {
  development: {
    API_BASE: 'http://localhost:5001/api',
    SOCKET_URL: 'http://localhost:5001'
  },
  production: {
    API_BASE: 'https://video-meet-aj54.onrender.com/api',
    SOCKET_URL: 'https://video-meet-aj54.onrender.com'
  }
};

// Determine current environment
const environment = process.env.NODE_ENV || 'development';

// Export current configuration
export const API_BASE = config[environment].API_BASE;
export const SOCKET_URL = config[environment].SOCKET_URL;

export default config[environment];