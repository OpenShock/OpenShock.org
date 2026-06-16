import Fuse from 'fuse.js';
import { allIntegrations, games } from './integrations';

const integrationFuse = new Fuse(allIntegrations, {
  keys: [
    { name: 'name', weight: 2 },
    { name: 'tags', weight: 1.5 },
    { name: 'author', weight: 1 },
    { name: 'description', weight: 0.5 }
  ],
  threshold: 0.3,
  ignoreLocation: true
});

const gameFuse = new Fuse(games, {
  keys: [
    { name: 'name', weight: 2 },
    { name: 'tags', weight: 1 }
  ],
  threshold: 0.3
});

export function searchIntegrations(query: string) {
  if (!query) return allIntegrations;

  const results = integrationFuse.search(query).map((result) => result.item);

  // If the query matches a game, surface that game's integrations first
  // so they aren't buried behind unrelated integrations with similar names.
  const matchedGame = gameFuse.search(query)[0]?.item;
  if (matchedGame) {
    results.sort((a, b) => {
      const aIsMatchedGame = a.gameId === matchedGame.id;
      const bIsMatchedGame = b.gameId === matchedGame.id;
      if (aIsMatchedGame === bIsMatchedGame) return 0;
      return aIsMatchedGame ? -1 : 1;
    });
  }

  return results;
}

export function searchGames(query: string) {
  if (!query) return games;
  return gameFuse.search(query).map((result) => result.item);
}

export function getMatchedGame(query: string) {
  if (!query) return undefined;
  return gameFuse.search(query)[0]?.item;
}