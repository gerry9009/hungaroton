"use client";

import { useEffect, useMemo, useState } from "react";

import {
  Layout,
  DynamicForm,
  ListWrapper,
  PaginationBar,
} from "@/app/components";

import { formConfig } from "./page.config";
import { useArtistFilters, useRenderArtistsComponent } from "./page.hooks";
import { getFormFieldConfig, shouldSetSearchFilters } from "./page.utils";

import { useArtists } from "@/app/services";
import { useDebouncedValue } from "@/app/hooks";
import { CONTENT_TEXTS } from "@/app/constants";

export default function ArtistsPage() {
  const { search, type, letter, page, setFilters } = useArtistFilters();
  const [localSearch, setLocalSearch] = useState(search);
  const debouncedSearch = useDebouncedValue(localSearch, 800);

  const { renderListItems } = useRenderArtistsComponent();

  const params = useMemo(
    () => ({
      page,
      search: debouncedSearch || "",
      type,
      letter,
    }),
    [page, debouncedSearch, type, letter]
  );

  const { data, isLoading, isError } = useArtists(params);

  const [pageCount, setPageCount] = useState(data?.pagination.total_pages);

  useEffect(() => {
    if (data?.pagination.total_pages) {
      setPageCount(data.pagination.total_pages);
    }
  }, [data?.pagination.total_pages]);

  useEffect(() => {
    if (shouldSetSearchFilters(debouncedSearch, search)) {
      setFilters({
        search: debouncedSearch || "",
        page: 1,
        type,
        letter,
      });
    }
  }, [debouncedSearch, setFilters]);

  const handleFormChange = (values: Record<string, any>) => {
    if (values.search !== localSearch) {
      setLocalSearch(values.search);
      return;
    }

    setFilters({
      search,
      type: values.type ?? undefined,
      letter: values.letter ?? undefined,
      page: 1,
    });
  };

  const handlePagination = (_: React.ChangeEvent<unknown>, value: number) => {
    setFilters({ search, type, letter, page: value });
  };

  return (
    <Layout.withHeader
      title={CONTENT_TEXTS.artists.title}
      footerString={CONTENT_TEXTS.artists.footer}
    >
      <DynamicForm
        fields={getFormFieldConfig({
          config: formConfig,
          search,
          type: type ?? "",
          letter,
        })}
        onChange={handleFormChange}
      />

      <PaginationBar
        count={pageCount}
        page={page}
        onChange={handlePagination}
        disabled={isLoading || isError}
      />
      <ListWrapper loading={isLoading || isError}>
        {renderListItems(data?.data || [])}
      </ListWrapper>
      <PaginationBar
        count={pageCount}
        page={page}
        onChange={handlePagination}
        disabled={isLoading || isError}
      />
    </Layout.withHeader>
  );
}
