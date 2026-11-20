export const ease = [0.22, 1, 0.36, 1] as const;

export const inViewOptions = { once: true, amount: 0.25 } as const;

// left, top, right, bottom
const directions = [
  { x: -1, y: 0 },
  { x: 0, y: -1 },
  { x: 1, y: 0 },
  { x: 0, y: 1 },
];

// Start offset for an item at (column, row). Fixed per position, no randomness,
// so the server and client render the same start state.
export function flyFrom(column: number, row: number) {
  const direction = directions[(column + row * 3) % 4];
  const distance = 220 + ((column * 7 + row * 5) % 4) * 90;
  return {
    opacity: 0,
    x: direction.x * distance,
    y: direction.y * distance,
    rotate: (column + row) % 2 ? 6 : -6,
  };
}

export const landed = { opacity: 1, x: 0, y: 0, rotate: 0 };

export function flyDelay(column: number, row: number) {
  return 0.25 + ((column * 3 + row * 2) % 6) * 0.08;
}

// Props for a motion element that flies in from its (column, row) start position once `play` is true.
export function flyIn(play: boolean, column: number, row: number) {
  return {
    initial: flyFrom(column, row),
    animate: play ? landed : undefined,
    transition: { duration: 0.9, delay: flyDelay(column, row), ease },
  };
}
