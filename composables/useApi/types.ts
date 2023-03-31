import type { UseFetchOptions } from "#app";
import type { NitroFetchRequest } from "nitropack";
import type { KeysOf } from "nuxt/dist/app/composables/asyncData";

export type TUseApiOptions<IResponse> = UseFetchOptions<
  TGenericOrUnk<IResponse>,
  TGenericOrUnk<IResponse>,
  KeysOf<TGenericOrUnk<IResponse>>,
  NitroFetchRequest,
  "get" | "post" | "put" | "delete"
>;

export type TGenericOrUnk<T> = T extends void ? unknown : T;
