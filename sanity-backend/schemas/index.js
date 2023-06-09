// First, we must import the schema creator
// import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
// import schemaTypes from 'all:part:@sanity/base/schema-type'
import post from './post'
import user from './user'
import comment from './comment'
import postedBy from './postedBy'

export const schemaTypes = [post, user, comment, postedBy]
