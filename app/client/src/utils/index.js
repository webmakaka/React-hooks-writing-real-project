import { parse } from 'query-string';

export const range = (start, end) => {
  return [...Array(end).keys()].map((el) => el + start);
};

export const LIMIT = 10;

export const getPaginator = (search) => {
  const parsedSearch = parse(search);
  const currentPage = parsedSearch.page ? Number(parsedSearch.page) : 1;
  const offset = currentPage * 10 - LIMIT;
  return { currentPage, offset };
};
