import gql from 'graphql-tag'

export const allArticlesQuery = gql`

query allArticlesQuery{
    articles{
      id
      title
      content
      image{
        url
      }
      published
      category{
        name
      }
      slug
   }
  }
  `
export const singleArticleQuery = gql`
  query singleArticleQuery($id: ID!){
  article(id: $id){
    id
    title
    content
    image{
      url
    }
    published
    category{
      name
    }
    slug
  }
  }`

export const allCommentairesQuery = gql`
  query allCommentaires{
  commentaires{
    id
    nom
    email
    message
  }
}`
