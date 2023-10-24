import { createClient } from "$lib/prismicio"

export async function load({fetch, request, params}){
    const client = createClient({fetch, request})
    const {projectUID} = params
    const project = await client.getByUID('project', projectUID)

    return { project }
}