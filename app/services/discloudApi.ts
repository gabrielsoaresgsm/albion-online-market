import { ApiResponse, Root } from '@/types';
import axios from 'axios';

export const getDiscloudAppStatus = async (): Promise<Root> => {
  const url = `https://api.discloud.app/v2/user`;
  try {
    const response = await axios.get(url, {
      headers: {
        'api-token': process.env.TOKEN
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching Discloud app status:', error);
    return { status: 'error', message: 'Failed to fetch status', user: {}}
  }
};

/*
export const getDiscord = async (token) => {
  const url = `https://discord.com/api/v9/users/@me`;
  try {
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bot ${token}`
      }
    });
    console.log("response", response)
    return response?.data;
  } catch (error) {
    console.error('Error fetching Discloud app status:', error);
  }
};
*/
