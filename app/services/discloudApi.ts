import { ApiResponse, Guild, Root } from '@/types';

const infoFakeGuild: Guild[] = [
  {
    id: "545477",
    name: "Albion Online Market",
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

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bot ${process.env.DISCORD_TOKEN || ''}`
    },
    next: {revalidate: 60 * 60 * 5}
  }); 
  
  if (!response.ok) return infoFakeGuild;

  const data: Guild[] = await response.json();
  return data;
};

export const postServerCount = async (serverCount: number) => {
  const url = `https://top.gg/api/bots/1082860291152420954/stats`;
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${process.env.TOPGG_TOKEN || ''}`
      },
      body: JSON.stringify({ server_count: serverCount })
    });

    if (!response.ok) throw new Error('Network response was not ok.');
    return response;
  } catch (error) {
    console.error('Error posting server count:', error);
    return false
  }
};
