# AGENTS.md

## Project Goal
**Factory of Numbers** is a browser-based 2D automation puzzle game where numbers are the core resources. Players build production chains to transform and route numbers in order to fulfill hub orders.

## Architecture Rules
- `src/sim` contains deterministic simulation logic written in **pure TypeScript**.
- `src/sim` must not depend on Phaser, DOM APIs, or rendering concerns.
- `src/game` contains visualization, input, scene orchestration, and other game-framework integration.

## Code Style
- Use TypeScript in **strict mode**.
- Do not use `any`.
- All functions, methods, and classes must have explicit types where applicable.
- Add comments only where behavior is non-obvious; prefer clear naming and small functions.

## Commands
Use these project commands:
- `npm run dev`
- `npm run build`
- `npm run test`
- `npm run lint`
- `npm run format`
- `npm run preview`

If any command/script is missing, leave a `TODO` in the related setup task and do not invent ad-hoc alternatives.

## Definition of Done
Every change is complete only when:
- Build passes.
- Unit tests pass.
- Strict type checks pass.
- No ESLint errors remain.

## Codex Workflow Expectations
For every task, Codex must always:
1. Show which files were changed.
2. Add or update tests for `src/sim` logic when simulation behavior is added or modified.
