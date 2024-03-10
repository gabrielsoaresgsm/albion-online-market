import { ApiResponse, Root } from '@/types';
import axios from 'axios';

export const getDiscloudAppStatus = async (): Promise<Root> => {
  const url = `https://api.discloud.app/v2/user`;
  try {
    const response = await axios.get(url, {
      headers: {
        'api-token': 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjQ4MTk1NzczMjQ4MDU4MTY1MCIsImtleSI6IjUxYWRmMzRiNTFkMWZmMTljNGNiNjVkZTkxZTAifQ.dO-iBSuyVKPB4z_RpSrI4kMFTIEw60M1ldlgnXhZyvs'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching Discloud app status:', error);
    return { status: 'error', message: 'Failed to fetch status', user: {}}
  }
};

export const getDiscord = async () => {
  const url = `https://discord.com/api/v9/users/@me`;
  try {
    const response = await axios.get(url, {
      headers: {
        'Authorization': 'Bot MTA4Mjg2MDI5MTE1MjQyMDk1NA.GatEae.qMA8Szg-xAxiv6OhbZUHF-HKt6RA4mh6Fjbt9E'
      }
    });
    console.log("response", response)
    return response?.data;
  } catch (error) {
    console.error('Error fetching Discloud app status:', error);
  }
};
