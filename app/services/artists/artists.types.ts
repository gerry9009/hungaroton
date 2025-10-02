export interface Artist {
  id: number;
  name: string;
  albumCount: number;
  portrait: string;
}

export interface ArtistPagination {
  current_page: number;
  total_pages: number;
  per_page: number;
  total_items: number;
}

export enum ArtistsType {
  composer = "is_composer",
  performer = "is_performer",
  primary = "is_primary",
}
