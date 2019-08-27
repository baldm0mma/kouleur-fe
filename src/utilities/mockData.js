export const projects = [
  {
    id: 1,
    name: 'YumTimTumTam'
  },
  {
    id: 2,
    name: 'SkippityTippity'
  }
];

export const palettes = [
  {
    id: 1,
    project_id: 1,
    palette_name: 'TimTamSlammy',
    color_1: 'aaaaaa',
    color_2: 'bbbbbb',
    color_3: 'cccccc',
    color_4: 'dddddd',
    color_5: 'eeeeee'
  },
  {
    id: 2,
    project_id: 1,
    palette_name: 'BiffBoffDiffDoff',
    color_1: '111111',
    color_2: '222222',
    color_3: '333333',
    color_4: '444444',
    color_5: '555555'
  }
];

export const errorMessage = "Nah man, that ain't gonna work for me";

export const setCurrentPaletteReducer_defaultState = [
  { id: 0, hex: '', isLocked: false },
  { id: 1, hex: '', isLocked: false },
  { id: 2, hex: '', isLocked: false },
  { id: 3, hex: '', isLocked: false },
  { id: 4, hex: '', isLocked: false }
];
