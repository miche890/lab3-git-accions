const request = require('supertest');
const server = require('../index');

afterAll(() => {
	server.close();
});

describe('Pruebas de API', () => {
	it('Debe devolver "API funcionando correctamente"', async () => {
		const res = await request(server).get('/');
		expect(res.status).toBe(200);
		expect(res.text).toBe('API funcionando correctamente');
	});

	it('La ruta /prueba debe devolver "Prueba exitosa"', async () => {
		const res = await request(server).get('/prueba');
		expect(res.status).toBe(200);
		expect(res.text).toBe('Prueba exitosa');
	});
});
