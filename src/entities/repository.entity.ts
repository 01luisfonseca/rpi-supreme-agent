export type Order = {
  field: string
  direction: 'asc' | 'desc'
}

export type Filter = {
  search?: string
  limit?: number
  offset?: number
  order?: Order
}

export type Pagination<T> = {
  total: number
  data: T[]
  error?: string
}

export type Repository<TFields, T> = {
  findAll(filter?: Filter): Promise<Pagination<T>>
  create(data: TFields): Promise<T>
  read(id: string): Promise<T>
  update(id: string, data: TFields): Promise<T>
  delete(id: string): Promise<void>
}
