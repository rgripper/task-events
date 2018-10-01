## Events browser

This an event browser with search results based either on the user location (if allowed) or just around Australia (if location is denied).

You can check out deployed build here (responsive):
https://rgripper.github.io/task-events/

I've also created a simple design to guide me while working on this demo:
https://www.figma.com/file/GhueTdfGbh1pyZKItqChhGks/Ticketmaster-events?node-id=0%3A1

While there are very few features, this is a production quality code with the most important tech choices made and put intro this demo. It is ready for developing a fully-featured app.

### Running

Usual commands: `yarn start`, `yarn test`, `yarn build`.

### Tech choices

- TypeScript 3.0
- Webpack 4 with development and production configs
- `react-emotion` for CSS styling
- `rematch` on top of Redux for state management
- `react-router` for navigation
- `jest` with `enzyme` for testing

### Tests

For demo purposes there are 2 tests in `/src/Home/ShowItem.spec.tsx`.

### Based on my other repo
https://github.com/rgripper/task-my-shows

I've base this work on `task-my-shows` repository as it contains a very similar task I've done recently.