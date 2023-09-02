const crypto =  require('crypto') 

// Processes completed in groups of 2
// process.env.UV_THREADPOOL_SIZE = 2 

// 
process.env.UV_THREADPOOL_SIZE = 5

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

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('3:', Date.now() - start)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('4:', Date.now() - start)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('5:', Date.now() - start)
})

