import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { gql } from '@apollo/client'
import { Query } from '@apollo/client/react/components'

const query = gql`
query getSinglePhoto($id:ID!) {
  photo(id:$id) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={query} variables={{ id }}>
    {
      ({ loading, error, data }) => {
        if (!data) {
          return <p>Loading</p>
        } else {
          const { photo = {} } = data
          return (<PhotoCard {...photo} />)
        }
      }
    }
  </Query>
)
