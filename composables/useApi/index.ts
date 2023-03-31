import type { UseFetchOptions } from "#app";
import type { NitroFetchRequest } from "nitropack";
import type { FetchError } from "ofetch";
import type { KeysOf } from "nuxt/dist/app/composables/asyncData";

export function useApi<IResponse>(
  url: string,
  options: UseFetchOptions<
    IResponse extends void ? unknown : IResponse,
    IResponse extends void ? unknown : IResponse,
    KeysOf<IResponse extends void ? unknown : IResponse>,
    NitroFetchRequest,
    "get" | "post" | "put" | "delete"
  >
) {
  const config = useRuntimeConfig();

  return useFetch<
    IResponse,
    FetchError,
    NitroFetchRequest,
    "get" | "post" | "put" | "delete"
  >(url, {
    baseURL: config.public.apiBaseUrl,
    key: url,
    ...options,
    query: {
      apikey: config.public.apiPublicKey,
      ...options.query,
    },
  });
}
