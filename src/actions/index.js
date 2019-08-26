export const setProjects = projects => ({
  type: 'SET_PROJECTS',
  projects
});

export const setPalettes = palettes => ({
  type: 'SET_PALETTES',
  palettes
});

export const setCurrentProject = (id, name) => ({
  type: 'SET_CURRENT_PROJECT',
  id,
  name
});

export const setError = errorMessage => ({
  type: 'SET_ERROR',
  errorMessage
});

export const toggleNewProject = boolean => ({
  type: 'TOGGLE_NEW_PROJECT',
  boolean
});

export const setCurrentPalette = palette => ({
  type: 'SET_CURRENT_PALETTE',
  palette
})

export const toggleLock = num => ({
  type: 'TOGGLE_LOCK',
  num
})