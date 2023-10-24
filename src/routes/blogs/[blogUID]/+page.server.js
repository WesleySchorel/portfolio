import { createClient } from "$lib/prismicio"

export async function load({fetch, request, params}){
    const client = createClient({fetch, request})
    const {blogUID} = params
    const blog = await client.getByUID('blog', blogUID)

    return { blog }
}