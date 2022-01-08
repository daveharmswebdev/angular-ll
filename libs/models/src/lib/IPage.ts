import { IPageable } from './IPageable';
import { ISort } from './ISort';

export interface IPage<T> {
  content: T[];
  pageable: IPageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  first: boolean;
  size: number;
  numberOfElements: number;
  number: number;
  sort: ISort;
  empty: boolean;
}
