module.exports = (router, server) => {
  ['/', '/home'].forEach(url => {
    router.get(url, server.home.index)
  })
};
