import { Territory } from '../types/territory';
import { Colors } from '../constants/theme';

export const MOCK_TERRITORIES: Territory[] = [
  {
    id: 't-1',
    name: 'Sector Alpha',
    ownerId: 'player-me',
    ownerName: 'You (RunnerOne)',
    ownerColor: Colors.primary,
    isCurrentPlayer: true,
    areaKm2: 0.142,
    capturedAt: '2026-11-01T07:15:00Z',
    coordinates: [
      { latitude: 37.78825, longitude: -122.4324 },
      { latitude: 37.7895, longitude: -122.431 },
      { latitude: 37.788, longitude: -122.428 },
      { latitude: 37.7865, longitude: -122.431 },
    ],
  },
  {
    id: 't-2',
    name: 'Sector Bravo',
    ownerId: 'player-ghost',
    ownerName: 'GhostStride',
    ownerColor: Colors.competitorOrange,
    isCurrentPlayer: false,
    areaKm2: 0.215,
    capturedAt: '2026-10-31T18:40:00Z',
    coordinates: [
      { latitude: 37.7845, longitude: -122.435 },
      { latitude: 37.786, longitude: -122.432 },
      { latitude: 37.784, longitude: -122.43 },
      { latitude: 37.7825, longitude: -122.433 },
    ],
  },
];
