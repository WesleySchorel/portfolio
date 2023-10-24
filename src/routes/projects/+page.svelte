<script>
  export let data
  
  console.log(data)
</script>

<section>
    <article>
        <h1>Projects</h1>
        <ul>
          {#each data.projects as project}
          <li><a href="/projects/{project.uid}">{project.data.title}</a></li>
          {/each}
        </ul>
    </article>
</section>

<style>
  article {
    margin: auto;
    width: 80%;
    /* border: 3px solid var(--c-error); */
  }
</style>