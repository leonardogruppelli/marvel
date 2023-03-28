import type { UseFetchOptions } from "#app";
import type { NitroFetchRequest } from "nitropack";
import type { KeysOf, _Transform } from "nuxt/dist/app/composables/asyncData";

export type UseApiOptions<Response> = UseFetchOptions<
  TypeOrUnk<Response>,
  TypeOrUnk<Response>,
  KeysOf<TypeOrUnk<Response>>,
  NitroFetchRequest,
  "get" | "post" | "put" | "delete"
> &
  AuthOptions;

export interface AuthOptions {
  auth?: boolean;
}

export type TypeOrUnk<T> = T extends void ? unknown : T;
