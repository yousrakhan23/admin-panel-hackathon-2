import { createClient } from 'next-sanity'

export const client = createClient({
  projectId:"b8cf56un",
  dataset:"production",
  apiVersion:"2025-02-08",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
