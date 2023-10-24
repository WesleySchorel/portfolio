import { createClient } from "$lib/prismicio"

export async function load({fetch, request}){
    const client = createClient({fetch, request})

    const blogs = await client.getAllByType('blog')

    return { blogs }
}