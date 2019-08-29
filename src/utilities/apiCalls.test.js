import * as apiCalls from './apiCalls';
import * as mockData from './mockData';

describe('API Calls', () => {
  const mockPromiseError = 'response.json is not a function';
  describe('getProjects', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockData.projects)
        })

      );
    });
  });
});