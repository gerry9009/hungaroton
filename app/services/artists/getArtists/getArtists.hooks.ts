import { useQuery } from "@tanstack/react-query";
import { ArtistsFilter } from "./getArtists.types";
import { getArtists } from "./getArtists";

export const useArtists = (params: ArtistsFilter) => {
  return useQuery({
    queryKey: ["artists", params],
    queryFn: () => getArtists(params),
    networkMode: "offlineFirst",
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};
