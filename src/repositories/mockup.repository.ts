import { Filter, Pagination, Repository } from '../entities/repository.entity'

export class MockupRepository<TField, T> implements Repository<TField, T> {
  private data: T[] = []
  async findAll(filter?: Filter): Promise<Pagination<T>> {
    return {
      total: this.data.length,
      data: this.data,
    }
  }
  async create(data: TField): Promise<T> {
    const newdata = {
      ...data,
      id: '1',
      createdAt: 1679553200,
      updatedAt: 1679553200,
      deletedAt: 1679553200,
      createdBy: '1',
      updatedBy: '1',
      deletedBy: '1',
    } as T
    this.data.push(newdata)
    return newdata
  }
  async read(id: string): Promise<T> {
    return this.data.find((item: any) => item.id === id) as T
  }
  async update(id: string, data: TField): Promise<T> {
    const item = this.data.find((item: any) => item.id === id)
    if (item) {
      const newdata = {
        ...item,
        ...data,
        updatedAt: 1679553200,
        updatedBy: '1',
      }
      return newdata
    }
    throw new Error('Item not found')
  }
  async delete(id: string): Promise<void> {
    const item = this.data.find((item: any) => item.id === id)
    if (item) {
      const index = this.data.indexOf(item)
      this.data.splice(index, 1)
      return
    }
    throw new Error('Item not found')
  }
}
