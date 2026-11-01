import { create } from 'zustand';
import { Party } from '../types/party';

interface PartyState {
  parties: Party[];
  activeParty: Party | null;
  setActiveParty: (party: Party | null) => void;
  setParties: (parties: Party[]) => void;
}

export const usePartyStore = create<PartyState>((set) => ({
  parties: [],
  activeParty: null,

  setActiveParty: (party) => set({ activeParty: party }),
  setParties: (parties) => set({ parties }),
}));
