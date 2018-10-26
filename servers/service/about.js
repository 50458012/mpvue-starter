module.exports = {
  index: ctx => {
    return ctx.body = {
      name: 'about',
      age: 456
    };
  }
};
