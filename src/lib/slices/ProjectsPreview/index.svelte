<script>
  /** @type {import("@prismicio/client").Content.ProjectsPreviewSlice} */
  export let slice;
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  <article>
    <div class="text">
      <h1>
        {@html slice.primary.title}.
      </h1>
      <p>{slice.primary.text}</p>

      {#each slice.items as item}
      <button onclick="document.getElementById('projectImg').src='{item.project.url}'">{item.project_number}</button>
      {/each}

      <a class="link" href="/projects">View all projects →</a>
    </div>
    <div class="img">
      <img id="projectImg" src="{slice.primary.project_placeholder.url}" alt="project">
    </div>
  </article>
</section>

<style>
  section {
    background-color: var(--c-background-3);
  }

  article {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    grid-template-rows: 1fr;
    grid-auto-columns: 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas: "text img";
    margin: auto;
    width: 80%;
    /* border: 3px solid var(--c-error); */
  }

  button {
    margin: 1rem 1rem 0 0;
    font-size: 1.5rem;
    color: var(--c-text);
    background-color: var(--c-button-background-3);
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 50%;
    border: 1px solid var(--c-stroke);
  }

  button:hover {
    transform: translateY(-3px);
    opacity: 0.65;
    cursor: pointer;
  }

  img {
    height: 20rem;
    width: auto;
    margin-left: 1rem;
    border: 1px solid var(--c-stroke);
  }

  a {
    display: flex;
  }

  .link {
    color: var(--c-button-background-1);
  }

  .text {
    grid-area: text;
  }

  .img {
    grid-area: img;
  }

  @media screen and (max-width: 480px) {
    article {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      grid-auto-columns: 1fr;
      gap: 0px 0px;
      grid-auto-flow: row;
      grid-template-areas: "text" "img";
    }

    button {
    font-size: 1rem;
    height: 2.5rem;
    width: 2.5rem;
  }

  img {
    height: 12rem;
    width: auto;
    margin: 0rem;
    border: 1px solid var(--c-stroke);
  }
  }
</style>
