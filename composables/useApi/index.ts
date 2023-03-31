import type { TUseApiOptions } from "./types";
import type { NitroFetchRequest } from "nitropack";
import type { FetchError } from "ofetch";

export function useApi<IResponse>(
  url: string,
  options?: TUseApiOptions<IResponse>
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
      ...options?.query,
    },
  });
}
