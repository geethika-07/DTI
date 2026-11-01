import { create } from 'zustand';
import { Territory, HexCell, TerritoryViewMode } from '../types/territory';

interface TerritoryState {
  viewMode: TerritoryViewMode;
  territories: Territory[];
  hexCells: HexCell[];
  selectedTerritory: Territory | null;
  setViewMode: (mode: TerritoryViewMode) => void;
  selectTerritory: (territory: Territory | null) => void;
  setTerritories: (territories: Territory[]) => void;
}

export const useTerritoryStore = create<TerritoryState>((set) => ({
  viewMode: 'territory',
  territories: [],
  hexCells: [],
  selectedTerritory: null,

  setViewMode: (mode) => set({ viewMode: mode }),
  selectTerritory: (territory) => set({ selectedTerritory: territory }),
  setTerritories: (territories) => set({ territories }),
}));
