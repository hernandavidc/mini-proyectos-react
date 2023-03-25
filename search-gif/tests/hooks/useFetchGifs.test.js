import { expect } from '@jest/globals';
import { getGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en useFetchGifs', () => {
  test('debe de retornar un arreglo de gifs, con el formato esperado', async () => {
    const gifs = await getGifs('Jujutsu kaisen');

    expect( gifs.length ).toBeGreaterThan(0);
    expect( gifs[0] ).toEqual({
      id: expect.any( String ),
      title: expect.any( String ),
      url: expect.any( String ),
    })
  });
});