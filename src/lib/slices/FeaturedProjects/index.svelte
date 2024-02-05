<script>
  /** @type {import("@prismicio/client").Content.FeaturedProjectsSlice} */
  export let slice;
</script>

<section>
  <div class="text">
    <h2>{slice.primary.title}</h2>
    <p>{slice.primary.description}</p>
  </div>

  <div class="projects">
    <ul>
      {#each slice.items as item}
        <a href="projects/{item.project_link}">
          <li>
            <img src={item.project_img.url} alt={item.project_title} />
            <h3>{item.project_title}</h3>
            <span>{item.project_description}</span>
          </li>
        </a>
      {/each}
    </ul>
  </div>
</section>

<style>
  section {
    margin: 2rem 1.25rem 8rem 1.25rem;
  }

  .text {
    grid-area: text;
  }

  .projects {
    grid-area: projects;
  }

  h2 {
    font-size: 1.75rem;
    color: var(--c-text);
  }

  p {
    margin: 0 0 3rem 0;
    color: var(--c-text);
  }

  a {
    color: var(--c-text);
  }

  li {
    list-style: none;
    padding: 2rem;
    margin-bottom: 2rem;
    border-radius: var(--border-radius);
    border: 1px solid rgb(0, 0, 0);
  }

  img {
    display: block;
    margin: auto;
    width: auto;
    height: 10rem;
    margin-bottom: 2rem;
  }

  h3 {
    font-size: 1.5rem;
    color: var(--c-text);
  }

  span {
    font-size: 1.5rem;
    color: var(--c-text);
  }

  @media only screen and (min-width: 1067px) {
    section {
      margin: 6rem 4rem 4rem 4rem;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: 1fr;
      gap: 0;
      grid-template-areas: "text projects";
    }

    h2 {
      font-size: 5rem;
      margin-bottom: 1rem;
    }

    p {
      margin: 0 0 16rem 0;
      font-size: clamp(1.8rem, 5.5vw, 2.125rem);
      width: 80%;
    }

    li {
      border-width: 2px;
      margin-bottom: 3rem;
    }

    img {
      height: 20rem;
    }
  }
</style>
