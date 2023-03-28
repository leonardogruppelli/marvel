export interface ApiResponse<Response> {
  code: number;
  data: ApiPagination<Response>;
  status: string;
}

export interface ApiPagination<Response> {
  count: number;
  limit: number;
  offset: number;
  results: Response;
  total: number;
}
