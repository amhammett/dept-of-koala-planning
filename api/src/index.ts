import Fastify, { FastifyInstance } from 'fastify'
import cors from '@fastify/cors'
import multipart from '@fastify/multipart'
import { Server, IncomingMessage, ServerResponse } from 'http'

const server: FastifyInstance = Fastify({
  logger: true
})
await server.register(multipart, {})
await server.register(cors, { 
  origin: (origin, cb) => {
    cb(null, true)
    return
  }
})

server.get('/', async (request, reply) => {
  request.log.info('slash')
  return { hello: 'world' }
})

server.get('/favicon.ico', async (request, reply) => {
  request.log.info('favicon')
  return {}
})

const uploadSchema = {
  consumes: ['multipart/form-data'],
  body: {
      type: 'object',
      required: ['file'],
      properties: {
          file: { isFile: true }
      }
  }
}

server.post('/upload', async (request, reply) => {
  const parts = request.parts()
  for await (const part of parts) {
    if (part.type === 'file') {
      // await pump(part.file, fs.createWriteStream(part.filename))
      console.log(`file = ${part.filename}`)
    } else {
      // part.type === 'field
      console.log(`${part.fieldname} = ${part.value}`)
    }
  }

  return {success: true}
})

const start = async () => {
  try {
    await server.listen({ port: 3000 })

    const address = server.server.address()
    const port = typeof address === 'string' ? address : address?.port

  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()
