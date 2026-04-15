import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { World } from '../World';

describe('World', () => {
  it('uses fixed timestep for deterministic stepping', () => {
    const world: World = new World(8, 8, 0.1);

    world.update(0.35);

    assert.equal(world.getSimulationTicks(), 3);
    assert.equal(world.getAccumulatorSeconds(), 0.05);
  });

  it('places, rotates and removes building', () => {
    const world: World = new World(8, 8, 0.1);

    assert.equal(world.placeBuilding({ x: 2, y: 2 }, { kind: 'placeholder', dir: 'N' }), true);
    assert.equal(world.rotateBuilding({ x: 2, y: 2 }), true);
    assert.equal(world.getBuilding({ x: 2, y: 2 })?.dir, 'E');
    assert.equal(world.removeBuilding({ x: 2, y: 2 }), true);
    assert.equal(world.getBuilding({ x: 2, y: 2 }), undefined);
  });
});
