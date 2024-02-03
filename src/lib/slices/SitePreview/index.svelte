<script>
  /** @type {import("@prismicio/client").Content.SitePreviewSlice} */
  export let slice;
</script>

<section>
  <h2>{slice.primary.title}</h2>
  <img src={slice.primary.laptop.url} alt="" />
</section>

<style>
  section {
    text-align: center;
    margin: 0 1.25rem 5rem 1.25rem;
  }

  h2 {
    color: var(--c-text);
    text-transform: uppercase;
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  img {
    height: 12rem;
    width: auto;
  }

  @media only screen and (min-width: 767px) {
    section {
      margin: 0 4rem 16rem 4rem;
    }

    h2 {
      font-size: 3rem;
    }

    img {
    height: 32rem;
    width: auto;
  }
  }
</style>