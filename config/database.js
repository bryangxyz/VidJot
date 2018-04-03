if (process.env.NODE_ENV === 'production') {
  module.exports = {
    mongoURI: 'mongodb://bryan:bryan@ds231719.mlab.com:31719/vidjot-prod'
  }
} else {
  module.exports = {
    mongoURI: 'mongodb://localhost/vidjot-dev'
  }
}