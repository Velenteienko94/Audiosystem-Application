/**
 * Converts seconds to the time string
 * @param {number}seconds - amount of seconds to transform
 * @returns {string} time string
 */
export function secondsToTimeString(seconds: number): string {
  const fullMinutes = Math.floor(seconds > 60 ? seconds / 60 : 0)
    .toString()
    .padStart(2, "0");
  const fullSeconds = (seconds % 60).toString().padStart(2, "0");

  return `${fullMinutes}:${fullSeconds}`;
}
