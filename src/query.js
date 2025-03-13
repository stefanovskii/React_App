import { gql } from '@apollo/client'

const GET_ALL_CHARACTERS = gql`
  query Character($page: Int, $status: String, $species: String) {
    characters(page: $page, filter: { status: $status, species: $species }) {
      info {
        pages
        next
        prev
      },
      results {
        id
        name
        status
        species
        gender
        origin {
          name
        }
        image
      }
    }
  }`


export { GET_ALL_CHARACTERS }