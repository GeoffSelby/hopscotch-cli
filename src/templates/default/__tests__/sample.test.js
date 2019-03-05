const app = require('../lib');

test('it returns a string', () => {
  const str = app.helloWorld();

  expect(str).toEqual('Hello World');
});
