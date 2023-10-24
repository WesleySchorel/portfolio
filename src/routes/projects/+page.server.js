import { createClient } from "$lib/prismicio"

export async function load({fetch, request}){
    const client = createClient({fetch, request})

    const projects = await client.getAllByType('project')

    return { projects }
}