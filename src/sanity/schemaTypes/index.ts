import { type SchemaTypeDefinition } from 'sanity'
import { postType } from './postType'
import { menu } from './menu'
import { recommended } from './recommended'
import { blockContentType } from './blockContentType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, menu, recommended, blockContentType],
}
