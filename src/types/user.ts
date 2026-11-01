import { Coordinates } from './territory';

export interface UserProfile {
  id: string;
  username: string;
  email: string;
  avatarUrl: string;
  level: number;
  totalDistanceKm: number;
  totalTerritoryCapturedKm2: number;
  totalRunsCount: number;
  winsCount: number;
  joinedDate: string;
}

export interface NearbyCompetitor {
  id: string;
  username: string;
  avatarUrl: string;
  location: Coordinates;
  territoryColor: string;
  level: number;
  distanceFromUserMeters: number;
  isOnline: boolean;
}

export interface LeaderboardEntry {
  rank: number;
  userId: string;
  username: string;
  avatarUrl: string;
  territoryCapturedKm2: number;
  distanceKm: number;
  score: number;
  isCurrentUser: boolean;
}
