<script>
  /** @type {import("@prismicio/client").Content.AboutSlice} */
  export let slice;
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  <article>
    <h1><span>{slice.primary.title}</span>.</h1>
    <p>{slice.primary.text}</p>
  </article>
</section>

<style>
  section {
    background-color: var(--c-background-1);
  }

  article {
    margin: auto;
    width: 80%;
    /* border: 3px solid var(--c-error); */
  }

  p {
    width: 65%;
  }
</style>
