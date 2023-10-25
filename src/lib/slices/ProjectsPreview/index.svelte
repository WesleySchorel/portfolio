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
      <a class="link" href="/projects">View all projects →</a>
    </div>
    <div class="img">
      <img
        src=""
        alt=" "
      />
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

  img {
    height: 14rem;
    width: auto;
    margin: 1rem;
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
  }
</style>
