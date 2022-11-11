import supertest from 'supertest'

import { app } from '../../../index'

const api = supertest(app)

jest.setTimeout(100000)

describe('probando ruta /swapi/:resource para obtener los recursos de la api', () => {
  test('obteniendo todos los recursos de /people', async () => {
    const { body } = await api
      .post('/swapi/people')
      .expect(201)
      .expect('Content-Type', 'application/json; charset=utf-8')

    expect(body.message).toContain('Consulta exitosaa')
  })
})

console.log(supertest)
console.log(app)
