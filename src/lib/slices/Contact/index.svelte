<script>
  /** @type {import("@prismicio/client").Content.ContactSlice} */
  export let slice;
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  <article>
    <h1>{@html slice.primary.title}.</h1>
    <p>{slice.primary.text}</p>
    <a class="button" href="mailto:{slice.primary.email}">{slice.primary.email}</a>
  </article>
</section>

<style>
  section {
    background-color: var(--c-background-1);
  }

  article {
    margin: auto;
    width: 50%;
    text-align: center;
    /* border: 3px solid var(--c-error); */
  }
</style>