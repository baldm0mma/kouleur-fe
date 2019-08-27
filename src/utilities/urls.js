export const getAllProjectsUrl = 'http://localhost:3001/api/v1/projects';
export const getAllPalettesUrl = 'http://localhost:3001/api/v1/palettes/search';
export const postNewPaletteUrl = 'http://localhost:3001/api/v1/palettes';
export const deleteProjectUrl = id =>
  `http://localhost:3001/api/v1/projects/${id}`;
export const deletePaletteUrl = id =>
  `http://localhost:3001/api/v1/palettes/${id}`;
