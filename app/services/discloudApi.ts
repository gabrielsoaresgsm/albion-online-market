import { ApiResponse, Guild, Root } from '@/types';

const infoFakeGuild: Guild[] = [
  {
    id: "",
    name: "",
    icon: "",
    owner: false,
    permissions: "",
    features: []
  }
];

export const getDiscloudAppStatus = async (): Promise<Root> => {
  const url = `https://api.discloud.app/v2/user`;
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'api-token': process.env.TOKEN || ''
      }
    });

    if (!response.ok) throw new Error('Network response was not ok.');

    const data: Root = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Discloud app status:', error);
    return { status: 'error', message: 'Failed to fetch status', user: {} };
  }
};

export const getGuildsDiscord = async (): Promise<Guild[]> => {
  const url = `https://discord.com/api/v9/users/@me/guilds`;
  try {
    const response = await fetch(url, {
      method: 'GET', 
      next: { revalidate: 1800 },
      headers: {
        'Authorization': `Bot ${process.env.DISCORD_TOKEN || ''}`
      }
    });

    if (!response.ok) throw new Error('Network response was not ok.');

    const data: Guild[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Discloud app status:', error);
    return infoFakeGuild;
  }
};
