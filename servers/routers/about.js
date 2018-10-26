module.exports = (router, server) => {
  router.get('/about', server.about.index)
};
