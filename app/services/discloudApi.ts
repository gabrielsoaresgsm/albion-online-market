import { ApiResponse } from '@/types';
import axios from 'axios';

export const getDiscloudAppStatus = async (appId: string): Promise<ApiResponse> => {
  const url = `https://api.discloud.app/v2/app/${appId}/status`;
  try {
    const response = await axios.get(url, {
      headers: {
        'api-token': 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjQ4MTk1NzczMjQ4MDU4MTY1MCIsImtleSI6IjUxYWRmMzRiNTFkMWZmMTljNGNiNjVkZTkxZTAifQ.dO-iBSuyVKPB4z_RpSrI4kMFTIEw60M1ldlgnXhZyvs'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching Discloud app status:', error);
    return { status: 'error', message: 'Failed to fetch status', apps: {}}
  }
};