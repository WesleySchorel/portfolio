<script>
  export let data;
</script>

<section>
  <article>
    <h1>Projects</h1>
    <div class="projects-container">
      {#each data.projects as project}
        <a href="/projects/{project.uid}">
          <div class="project">
            <img
              src={project.data.project_image.url}
              alt={project.data.title}
            />
            <h2>{project.data.title}</h2>
            <p>{project.data.description}</p>
          </div>
        </a>
      {/each}
    </div>
  </article>
</section>

<style>
  article {
    margin: auto;
    width: 80%;
    /* border: 3px solid var(--c-error); */
  }

  a {
    text-decoration: none;
  }

  img {
    height: 14rem;
    width: auto;
  }

  .projects-container {
    color: var(--c-pink);
    width: 80%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  .project {
    border: 1px solid var(--c-stroke);
    border-radius: 5px;
    background-color: var(--c-blog-background);
    transition: 0.2s;
  }

  .project:hover {
    transform: translateY(-6px);
    opacity: 0.65;
    transition: 0.2s;
  }

  h2 {
    padding: 1rem 0 0 1rem;
  }

  p {
    padding: 1rem;
  }

  @media screen and (max-width: 480px) {
    .projects-container {
      grid-template-columns: repeat(1, 1fr);
    }

    img {
      height: 10rem;
      width: auto;
    }
  }
</style>
