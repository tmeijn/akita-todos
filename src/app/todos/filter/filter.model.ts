export enum VISIBILITY_FILTER {
  SHOW_ALL = 'SHOW_ALL',
  SHOW_ACTIVE = 'SHOW_ACTIVE',
  SHOW_COMPLETED = 'SHOW_COMPLETED'
}

export interface TodoFilter {
  label: string;
  value: VISIBILITY_FILTER;
}

export const filters: TodoFilter[] = [
  { label: 'All', value: VISIBILITY_FILTER.SHOW_ALL },
  { label: 'Completed', value: VISIBILITY_FILTER.SHOW_COMPLETED },
  { label: 'Active', value: VISIBILITY_FILTER.SHOW_ACTIVE }
];


