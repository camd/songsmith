export interface phraseType {
  id: string;
  text: string;
  notes?: string;
  audio?: string;
}

export interface songType {
  phrases: phraseType[];
  title: string;
  artist: string;
}
