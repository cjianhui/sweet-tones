# Sweet Tones (Work-in-progress)
Full stack React + GraphQL online store application with CRUD operations and user authentication with JWT.


## Stack Used
### Front End
- React 
  - [Next.js](https://github.com/zeit/next.js/) (For server-side rendering, routing and tooling)
  - [Styled Components](https://github.com/styled-components/styled-components)
  
- [Apollo Client](https://github.com/apollographql/apollo-client) (In place of Redux)
  - Execute GraphQL queries and mutations
  - Cache GraphQL data
  - Manage local and UI states
  
### Back End
- [GraphQL Yoga](https://github.com/prisma/graphql-yoga)
  - GraphQL Server built on Express
  - Provide public-facing (GraphQL) API
  - Implements query and mutation resolvers
  - Custom server side logic (credit card, authentication etc.)

- [Prisma](https://github.com/prisma/prisma)
  - GraphQL Database Interface
  - Private-facing API to interact with DB
  - Provides a set of GraphQL CRUD APIs (for MySQL, Postgres or MongoDB) 
  - Queried by Yoga Server
  
### Testing
- Jest
- Enzyme

## Development
### Front End
1. cd to `/frontend`
2. Execute `npm run dev`
3. Access `localhost:<port number>`

### Back End
1. cd to `/backend`
2. Whenever Prisma schema (datamodel.graphql) is altered, run `npm run deploy`
2. To run GraphQL server, run `npm run dev`
3. Access `localhost:<port number>`

## Deployment
