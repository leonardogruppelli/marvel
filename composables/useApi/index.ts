import type { UseApiOptions } from "./types";
import type { FetchError } from "ofetch";
import type { NitroFetchRequest } from "nitropack";

export function useApi<Response>(
  url: string,
  options?: UseApiOptions<Response>
) {
  const config = useRuntimeConfig();

  return useFetch<
    Response,
    FetchError,
    NitroFetchRequest,
    "get" | "post" | "put" | "delete"
  >(url, {
    baseURL: config.public.apiBaseUrl,
    key: url,
    query: {
      apikey: config.public.apiPublicKey,
    },
    ...options,
  });
}
