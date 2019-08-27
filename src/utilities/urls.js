const path = process.env.REACT_APP_BACKEND_URL;

export const getAllProjectsUrl = `${path}/projects`;
export const getAllPalettesUrl = `${path}/palettes/search`;
export const postNewPaletteUrl = `${path}/palettes`;
export const deleteProjectUrl = id => `${path}/projects/${id}`;
export const deletePaletteUrl = id => `${path}/palettes/${id}`;
