export namespace Common {
  export type Card = {
    name: string
    code: string
    previewText: string
    type: {
      value: string
      xmlId: string
    }
    date: number
    link: string
    image: string
    id: string
  }
  export type Cards = Card[]
}
