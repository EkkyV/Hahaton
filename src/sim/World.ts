import type { Direction, TilePos } from './types';

export interface Item {
  id: string;
  value: number;
  progress: number;
  dir: Direction;
}

export interface Building {
  kind: string;
  dir: Direction;
}

export class World {
  public readonly width: number;
  public readonly height: number;
  public readonly fixedStepSeconds: number;

  private readonly buildingsByTile: Map<string, Building>;
  private readonly itemsByTile: Map<string, Item[]>;
  private timeAccumulatorSeconds: number;
  private simulationTicks: number;

  public constructor(width: number, height: number, fixedStepSeconds: number = 0.1) {
    this.width = width;
    this.height = height;
    this.fixedStepSeconds = fixedStepSeconds;
    this.buildingsByTile = new Map<string, Building>();
    this.itemsByTile = new Map<string, Item[]>();
    this.timeAccumulatorSeconds = 0;
    this.simulationTicks = 0;
  }

  public update(dt: number): void {
    if (dt <= 0) {
      return;
    }

    this.timeAccumulatorSeconds += dt;

    // Fixed timestep guarantees deterministic stepping order independent of frame rate.
    while (this.timeAccumulatorSeconds >= this.fixedStepSeconds) {
      this.step();
      this.timeAccumulatorSeconds -= this.fixedStepSeconds;
    }
  }

  public placeBuilding(pos: TilePos, building: Building): boolean {
    if (!this.isInside(pos)) {
      return false;
    }

    this.buildingsByTile.set(this.tileKey(pos), { ...building });
    return true;
  }

  public removeBuilding(pos: TilePos): boolean {
    return this.buildingsByTile.delete(this.tileKey(pos));
  }

  public rotateBuilding(pos: TilePos): boolean {
    const key: string = this.tileKey(pos);
    const building: Building | undefined = this.buildingsByTile.get(key);

    if (building === undefined) {
      return false;
    }

    const rotatedDir: Direction = this.rotateClockwise(building.dir);
    this.buildingsByTile.set(key, {
      ...building,
      dir: rotatedDir
    });

    return true;
  }

  public getBuilding(pos: TilePos): Building | undefined {
    const building: Building | undefined = this.buildingsByTile.get(this.tileKey(pos));
    if (building === undefined) {
      return undefined;
    }

    return { ...building };
  }

  public getItems(pos: TilePos): readonly Item[] {
    const items: Item[] | undefined = this.itemsByTile.get(this.tileKey(pos));
    if (items === undefined) {
      return [];
    }

    return items.map((item: Item) => ({ ...item }));
  }

  public getAccumulatorSeconds(): number {
    return this.timeAccumulatorSeconds;
  }

  public getSimulationTicks(): number {
    return this.simulationTicks;
  }

  private step(): void {
    this.simulationTicks += 1;
  }

  private isInside(pos: TilePos): boolean {
    return pos.x >= 0 && pos.x < this.width && pos.y >= 0 && pos.y < this.height;
  }

  private tileKey(pos: TilePos): string {
    return `${pos.x},${pos.y}`;
  }

  private rotateClockwise(dir: Direction): Direction {
    switch (dir) {
      case 'N':
        return 'E';
      case 'E':
        return 'S';
      case 'S':
        return 'W';
      case 'W':
        return 'N';
    }
  }
}
