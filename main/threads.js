const crypto =  require('crypto') 

/**
 * Node Event Loop => Single Threaded
 * Some of Node framework/Std Lib => Not Single Threaded
 */
const start = Date.now()
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('1:', Date.now() - start)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('2:', Date.now() - start)
})

