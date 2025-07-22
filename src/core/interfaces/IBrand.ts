export interface IBrands {
  results: number
  metadata: Brand
  data: Daum[]
}

export interface Brand {
  currentPage: number
  numberOfPages: number
  limit: number
  nextPage: number
}

export interface Daum {
  _id: string
  name: string
  slug: string
  image: string
  createdAt: string
  updatedAt: string
}