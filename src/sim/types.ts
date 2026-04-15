export type Direction = 'N' | 'E' | 'S' | 'W';

export interface Vec2i {
  x: number;
  y: number;
}

export interface TilePos {
  x: number;
  y: number;
}

export function dirToVector(dir: Direction): Vec2i {
  switch (dir) {
    case 'N':
      return { x: 0, y: -1 };
    case 'E':
      return { x: 1, y: 0 };
    case 'S':
      return { x: 0, y: 1 };
    case 'W':
      return { x: -1, y: 0 };
  }
}

export function addDir(pos: TilePos, dir: Direction): TilePos {
  const vec: Vec2i = dirToVector(dir);
  return {
    x: pos.x + vec.x,
    y: pos.y + vec.y
  };
}

export function opposite(dir: Direction): Direction {
  switch (dir) {
    case 'N':
      return 'S';
    case 'E':
      return 'W';
    case 'S':
      return 'N';
    case 'W':
      return 'E';
  }
}
