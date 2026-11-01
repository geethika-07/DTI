export interface Coordinates {
  latitude: number;
  longitude: number;
}

export type TerritoryViewMode = 'territory' | 'grid';

export interface Territory {
  id: string;
  name: string;
  ownerId: string;
  ownerName: string;
  ownerColor: string;
  isCurrentPlayer: boolean;
  areaKm2: number;
  capturedAt: string;
  coordinates: Coordinates[];
}

export interface HexCell {
  id: string;
  center: Coordinates;
  vertices: Coordinates[];
  ownerId?: string;
  ownerColor?: string;
  isCurrentPlayer: boolean;
}
