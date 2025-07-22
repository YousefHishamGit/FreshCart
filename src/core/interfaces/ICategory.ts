

export interface ICategory {
  results: number
  metadata: Category
  data: Daum[]
}

export interface Category {
  currentPage: number
  numberOfPages: number
  limit: number
}

export interface Daum {
  _id: string
  name: string
  slug: string
  image: string
  createdAt: string
  updatedAt: string
}