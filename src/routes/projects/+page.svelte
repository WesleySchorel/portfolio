<script>
  export let data;

  console.log(data);
</script>

<section>
  <article>
    <h1>Projects</h1>
    <ul>
      {#each data.projects as project}
        <a href="/projects/{project.uid}">
          <li>
            <div class="img">
              <img
                src={project.data.project_image.url}
                alt={project.data.title}
              />
            </div>

            <div class="text">
              <h2>{project.data.title}</h2>
              <p>{project.data.description}</p>
            </div>
          </li>
        </a>
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

  a {
    text-decoration: none;
  }

  li {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-auto-columns: 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas: "img text";
    padding: 0 0 2rem 0;
  }

  .img {
    grid-area: img;
  }

  .text {
    grid-area: text;
    padding: 1rem;
  }

  p {
    margin: 1rem 0 0 0;
  }

  img {
    height: 22rem;
    width: auto;
    border: 1px solid var(--c-stroke);
  }

  @media screen and (max-width: 480px) {
    li {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      grid-auto-columns: 1fr;
      gap: 0px 0px;
      grid-auto-flow: row;
      grid-template-areas: "img" "text";
    }

    img {
      height: 10rem;
      width: auto;
    }

    .text {
      grid-area: text;
      padding: 1rem 0 0 0;
    }
  }
</style>
