export function generateSeed(): string {
  return crypto.randomUUID();
}