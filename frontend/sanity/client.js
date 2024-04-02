import { createClient } from '@sanity/client'

export const client = createClient({
    projectId: "3c3aryfw",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-03-07"
})