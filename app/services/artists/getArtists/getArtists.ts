import { apiClient } from "@/app/lib";
import { ArtistsFilter, GetArtistsResponse } from "./getArtists.types";

export const getArtists = async ({
  includeImage = true,
  pageLength = 50,
  pageNumber = 1,
  search,
  type,
  letter,
}: ArtistsFilter): Promise<GetArtistsResponse> => {
  const response = await apiClient.get("/artists", {
    params: {
      include_image: includeImage,
      per_page: pageLength,
      page: pageNumber,
      ...(search ? { search } : {}),
      ...(type ? { type } : {}),
      ...(letter ? { letter } : {}),
    },
  });
  return response.data;
};
