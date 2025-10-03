import { useCallback } from "react";

import { useRouter, useSearchParams } from "next/navigation";

import { ListWrapper } from "@/app/components";
import { CONTENT_TEXTS } from "@/app/constants";
import { Artist, ArtistsFilter, ArtistsType } from "@/app/services";

import { Box, Typography } from "@mui/material";
import AlbumIcon from "@mui/icons-material/Album";

export const useArtistFilters = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const search = searchParams.get("search") ?? "";
  const letter = searchParams.get("letter") ?? "";
  const page = parseInt(searchParams.get("page") ?? "1", 10);
  const typeParam = searchParams.get("type") ?? "";
  const type: ArtistsType | undefined =
    typeParam && Object.values(ArtistsType).includes(typeParam as ArtistsType)
      ? (typeParam as ArtistsType)
      : undefined;

  const setFilters = useCallback(
    (filters: ArtistsFilter) => {
      const params = new URLSearchParams(searchParams.toString());

      if (filters.search !== undefined) {
        params.set("search", filters.search);
      } else {
        params.delete("search");
      }

      if (filters.type !== undefined) {
        params.set("type", filters.type);
      } else {
        params.delete("type");
      }

      if (filters.letter !== undefined) {
        params.set("letter", filters.letter);
      } else {
        params.delete("letter");
      }

      if (filters.page !== undefined) {
        params.set("page", filters.page.toString());
      } else {
        params.delete("page");
      }

      router.push(`?${params.toString()}`);
    },
    [searchParams, router]
  );

  return { search, type, letter, page, setFilters };
};

export const useRenderArtistsComponent = () => {
  const router = useRouter();

  const renderListItems = (artists: Artist[]) => {
    return artists.map((artist) => (
      <ListWrapper.Item
        key={artist.id}
        title={artist.name}
        imgUrl={artist.portrait}
        ContentComponent={() => (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <AlbumIcon color="primary" fontSize="small" />
            <Typography>
              {CONTENT_TEXTS.artists.albums.replace(
                "{count}",
                String(artist.albumCount)
              )}
            </Typography>
          </Box>
        )}
        buttonConfig={{
          value: CONTENT_TEXTS.artists.button,
          onClick: () => {
            const query = new URLSearchParams({
              name: artist.name,
              img: artist.portrait,
              albums: artist.albumCount.toString(),
            }).toString();
            router.push(`/artists/${artist.id}?${query}`);
          },
        }}
      />
    ));
  };

  return { renderListItems };
};
