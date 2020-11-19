const proxy = [
    {
      context: '/api',
      target: 'http://localhost:8080/perguntas',
      pathRewrite: {'^/api' : ''}
    }
  ];module.exports = proxy;