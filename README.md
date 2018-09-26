## Events browser

https://rgripper.github.io/task-events/

### Running

Usual commands: `yarn start`, `yarn test`, `yarn build`.

### Tech choices

- Based on create-react-app
- TypeScript 3.0
- Webpack 3. Config is ejected from create-react-app so a bit messy - some stuff automatically arrived to `dependencies` instead of `devDependencies`
- CSS Modules and a SCSS loader
- `rematch` on top of Redux for state management
- `react-router` for navigation
- For test there is `jest` with `enzyme`

### Tests

For demo purposes there are 2 tests in `/src/Home/ShowItem.spec.tsx`.

### Based on
https://github.com/rgripper/task-my-shows

I've base this work on `task-my-shows` repository as it contains a very similar task I've done recently. I've already put most up to date tools and libraries into it and it's overall of good quality.