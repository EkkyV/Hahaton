import { describe, expect, it } from 'vitest';

import { World } from '../src/sim/World';

describe('World fixed timestep', () => {
  it('produces identical state for batched and split updates', () => {
    const batchedWorld: World = new World(10, 10, 0.1);
    const splitWorld: World = new World(10, 10, 0.1);

    batchedWorld.update(0.3);

    splitWorld.update(0.1);
    splitWorld.update(0.1);
    splitWorld.update(0.1);

    expect(splitWorld.getSimulationTicks()).toBe(batchedWorld.getSimulationTicks());
    expect(splitWorld.getAccumulatorSeconds()).toBeCloseTo(batchedWorld.getAccumulatorSeconds(), 10);
  });
});
