/**
 * Utility functions for formatting running stats and territorial metrics
 */

export function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

export function formatDistance(meters: number): string {
  if (meters < 1000) {
    return `${Math.round(meters)} m`;
  }
  return `${(meters / 1000).toFixed(2)} km`;
}

export function formatPace(secondsPerKm: number): string {
  if (!secondsPerKm || !isFinite(secondsPerKm)) return "--'--\"";
  const mins = Math.floor(secondsPerKm / 60);
  const secs = Math.floor(secondsPerKm % 60);
  return `${mins}'${secs.toString().padStart(2, '0')}" /km`;
}

export function formatArea(km2: number): string {
  if (km2 < 0.01) {
    return `${(km2 * 1000000).toFixed(0)} m²`;
  }
  return `${km2.toFixed(3)} km²`;
}
