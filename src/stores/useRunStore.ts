import { create } from 'zustand';
import { RunSession, RunStatus } from '../types/run';
import { Coordinates } from '../types/territory';

interface RunState {
  currentSession: RunSession | null;
  status: RunStatus;
  startRun: () => void;
  pauseRun: () => void;
  resumeRun: () => void;
  endRun: () => void;
  addRoutePoint: (point: Coordinates) => void;
  updateStats: (distanceMeters: number, paceSecondsPerKm: number) => void;
}

export const useRunStore = create<RunState>((set) => ({
  currentSession: null,
  status: 'idle',

  startRun: () =>
    set({
      status: 'running',
      currentSession: {
        id: `run-${Date.now()}`,
        startTime: Date.now(),
        durationSeconds: 0,
        distanceMeters: 0,
        currentPaceSecondsPerKm: 0,
        route: [],
        territoriesClaimedCount: 0,
        caloriesBurned: 0,
        status: 'running',
      },
    }),

  pauseRun: () =>
    set((state) => ({
      status: 'paused',
      currentSession: state.currentSession
        ? { ...state.currentSession, status: 'paused' }
        : null,
    })),

  resumeRun: () =>
    set((state) => ({
      status: 'running',
      currentSession: state.currentSession
        ? { ...state.currentSession, status: 'running' }
        : null,
    })),

  endRun: () =>
    set((state) => ({
      status: 'finished',
      currentSession: state.currentSession
        ? {
            ...state.currentSession,
            endTime: Date.now(),
            status: 'finished',
          }
        : null,
    })),

  addRoutePoint: (point) =>
    set((state) => {
      if (!state.currentSession) return state;
      return {
        currentSession: {
          ...state.currentSession,
          route: [...state.currentSession.route, point],
        },
      };
    }),

  updateStats: (distanceMeters, paceSecondsPerKm) =>
    set((state) => {
      if (!state.currentSession) return state;
      return {
        currentSession: {
          ...state.currentSession,
          distanceMeters,
          currentPaceSecondsPerKm: paceSecondsPerKm,
        },
      };
    }),
}));
