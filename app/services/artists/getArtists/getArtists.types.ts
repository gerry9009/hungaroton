import { Artist, ArtistPagination, ArtistsType } from "../artists.types";

export interface GetArtistsResponse {
  data: Artist[];
  pagination: ArtistPagination;
}

export interface ArtistsFilter {
  includeImage?: boolean;
  pageNumber?: number;
  pageLength?: number;
  search?: string;
  type?: ArtistsType | undefined;
  letter?: string;
}
