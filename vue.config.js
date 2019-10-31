module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/prism.com/'
    : '/',
  'transpileDependencies': [
    'vuetify'
  ]
}
