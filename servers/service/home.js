module.exports = {
  index: ctx => {
    return ctx.body = {
      name: 'home',
      age: 123
    };
  }
};
