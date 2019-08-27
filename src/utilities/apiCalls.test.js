import * as apiCalls from './apiCalls';
import * as mockData from './mockData';

describe('apiCalls', () => {
  // const mockPromiseError = 'response.json is not a function';
  // describe('findGenres', () => {
  //   beforeEach(() => {
  //     window.fetch = jest.fn().mockImplementation(() =>
  //       Promise.resolve({
  //         ok: true,
  //         json: () => Promise.resolve(mockData.mockGenre)
  //       })
  //     );
  //   });
  //   it('should call the fetch with the correct arguements', async () => {
  //     const mockUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;
  //     await ApiFetch.findGenres(mockUrl);
  //     expect(window.fetch).toHaveBeenCalledWith(mockUrl);
  //   });
  //   it('should return a parsed version of the result', async () => {
  //     const expected = await ApiFetch.findGenres();
  //     expect(expected).toEqual(mockData.mockGenre);
  //   });
  //   it('should throw an error if fetch fails', async () => {
  //     window.fetch = jest.fn().mockImplementation(() =>
  //       Promise.resolve({
  //         ok: false
  //       })
  //     );
  //     await expect(ApiFetch.findGenres()).rejects.toEqual(
  //       Error(mockPromiseError)
  //     );
  //   });
  // });
});