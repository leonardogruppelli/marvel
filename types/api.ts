export interface IApiResponse<IResponse> {
  code: number;
  data: IApiPagination<IResponse>;
}

export interface IApiPagination<IResponse> {
  count: number;
  limit: number;
  offset: number;
  total: number;
  results: IResponse;
}
