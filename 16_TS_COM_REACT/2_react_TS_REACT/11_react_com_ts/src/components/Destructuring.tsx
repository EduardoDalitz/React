import React from 'react'

type Props = {
    title: string
    content: string
    commentsQty: number
    tags: string[]

    category: Category
}

export enum Category{
  js="JavaScript",
  ts="typescript",
  p="python",

}

const Destructuring = ({title,content,commentsQty, tags, category }: Props) => {
  return (
    <div>
        <h1>{title}</h1>
        <p>{content}</p>
        <p>{commentsQty}</p>
        <div>
            {tags.map(tag => (
                <span>#{tag}</span>
            ))}
        </div>
        <h3>Categoria: {category}</h3>

    </div>
  )
}

export default Destructuring