export interface Memory {
  id: number;
  url: string;
  caption: string;
  poetry: string; // Original love shayris/poetry
  date?: string;
  rotation?: number; // Pre-calculated rotation for polaroid effect
}

export interface FunnyMoment {
  id: number;
  url: string;
  caption: string;
  sticker: string; // Emoji or sticker overlay
  rotation: number;
  comment: string; // Witty handwritten comment
}

export interface CandidPhoto {
    id: number;
    url: string;
    caption: string;
}

export interface Note {
  id: number;
  title: string;
  content: string;
  color: string;
}

export interface FuturePromise {
  id: number;
  text: string;
  color: string;
}

export enum PageState {
  HERO = 'HERO',
  GALLERY = 'GALLERY',
  CANDIDS = 'CANDIDS',
  FUN_SECTION = 'FUN_SECTION',
  FUNNY_GALLERY = 'FUNNY_GALLERY',
  NOTES = 'NOTES',
  ENDING = 'ENDING',
}