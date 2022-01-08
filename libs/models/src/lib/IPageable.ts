import { ISort } from './ISort';

export interface IPageable {
  sort: ISort;
  pageSize: number;
  pageNumber: number;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}
