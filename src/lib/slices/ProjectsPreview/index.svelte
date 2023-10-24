<script>
  /** @type {import("@prismicio/client").Content.ProjectsPreviewSlice} */
  export let slice;
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  <article>
    <h1><span>{slice.primary.title}</span>.</h1>
    <p>{slice.primary.text}</p>
    <a class="button" prefetch href="/projects">Recent work</a>
  </article>
</section>

<style>
  section {
    background-color: var(--c-background-3);
  }

  article {
    margin: auto;
    width: 80%;
    /* border: 3px solid var(--c-error); */
  }

  p {
    width: 65%;
  }

  .button {
    background-color: var(--c-button-background-2);
  }

  @media screen and (max-width: 480px) {
    p {
      width: 100%;
    }
  }
</style>
