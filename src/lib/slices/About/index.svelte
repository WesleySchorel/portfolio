<script>
  /** @type {import("@prismicio/client").Content.AboutSlice} */
  export let slice;
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  <article>
    <h1>
      {@html slice.primary.title}.
    </h1>
    <p>{@html slice.primary.text}</p>
  </article>
</section>

<style>
  section {
    background-color: var(--c-background-2);
  }

  article {
    margin: auto;
    width: 80%;
    /* border: 3px solid var(--c-error); */
  }

  p {
    width: 65%;
  }

  @media screen and (max-width: 480px) {
    p {
      width: 100%;
    }
  }
</style>
