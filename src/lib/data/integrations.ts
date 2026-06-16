export interface IntegrationLink {
  label: string;
  url: string;
}

export interface Integration {
  id: string;
  name: string;
  thumbnail: string;
  description: string;
  author: string;
  tags: string[];
  official: boolean;
  links: IntegrationLink[];
}

export interface Game {
  id: string;
  name: string;
  thumbnail: string;
  tags: string[];
  integrations: Integration[];
}

export const games: Game[] = [
  {
    id: 'vrchat',
    name: 'VRChat',
    thumbnail: '/images/games/vrchat.jpg',
    tags: ['VR', 'Social'],
    integrations: [
      {
        id: 'vrchat-osc-haptics',
        name: 'Loreeem ipsum',
        thumbnail: '/images/games/vrchat.jpg',
        description: 'Lorem ipsum',
        author: 'OpenShock Community',
        tags: ['Haptic', 'Avatar', 'Realtime'],
        official: false,
        links: [{ label: 'GitHub', url: 'https://github.com/openShock/vrchat-integration' }]
      }
    ]
  },
  {
    id: 'minecraft',
    name: 'Minecraft',
    thumbnail: '/images/games/minecraft.jpg',
    tags: ['Sandbox'],
    integrations: [
      {
        id: 'minecraft-haptic-mod',
        name: 'Lorem ipsum',
        thumbnail: '/images/games/minecraft.jpg',
        description: 'Lorem ipsum',
        author: 'CommunityDev',
        tags: ['Mod', 'Fabric', 'Mining'],
        official: false,
        links: [{ label: 'GitHub', url: 'https://github.com/example/minecraft-haptic-mod' }]
      }
    ]
  },
  {
    id: 'beatsaber',
    name: 'Beat Saber',
    thumbnail: '/images/games/beatsaber.jpg',
    tags: ['Rhythm', 'VR'],
    integrations: [
      {
        id: 'beatsaber-haptic',
        name: 'Lorem ipsum',
        thumbnail: '/images/games/beatsaber.jpg',
        description: 'Lorem ipsum',
        author: 'RhythmDev',
        tags: ['Rhythm', 'Sync', 'Immersive'],
        official: false,
        links: [{ label: 'GitHub', url: 'https://github.com/example/beatsaber-haptic' }]
      }
    ]
  },
  {
    id: 'ue5',
    name: 'Unreal Engine 5',
    thumbnail: '/images/games/ue5.jpg',
    tags: ['Engine', 'Plugin'],
    integrations: [
      {
        id: 'ue5-haptic-plugin',
        name: 'Lorem ipsum',
        thumbnail: '/images/games/ue5.jpg',
        description: 'Lorem ipsum',
        author: 'EngineDev',
        tags: ['Plugin', 'C++', 'UE5'],
        official: false,
        links: [{ label: 'GitHub', url: 'https://github.com/example/ue5-haptic-plugin' }]
      }
    ]
  }
];

export type IntegrationWithGame = Integration & {
  gameId: string;
  gameName: string;
};

export const allIntegrations: IntegrationWithGame[] = games.flatMap((game) =>
  game.integrations.map((integration) => ({
    ...integration,
    gameId: game.id,
    gameName: game.name
  }))
);