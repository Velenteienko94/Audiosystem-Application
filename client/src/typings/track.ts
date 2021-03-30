export type TTrack = {
  name: string;
  artist: string;
  duration: number;
};

export type TAlbum = {
  name: string;
  artist: string;
  tracks: TTrack[];
};
