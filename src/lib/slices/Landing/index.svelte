<script>
  /** @type {import("@prismicio/client").Content.LandingSlice} */
  export let slice;
</script>

<section>
  <h1>{@html slice.primary.title}</h1>

  <div class="links">
    <a class="primary-link" href="/projects">View projects</a>
    <a href="/blogs">Read blogs</a>
  </div>

  <img src={slice.primary.hero_image.url} alt="" />
  <p>{slice.primary.description}</p>
</section>

<style>
  section {
    margin: 1.25rem;
  }

  h1 {
    color: var(--c-text);
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    margin: 1rem 0 2rem 0;
  }

  .primary-link {
    color: var(--c-opossing-text);
    background-color: var(--c-opossing-background);
  }

  a {
    display: flex;
    justify-content: center;
    flex-direction: column;

    color: var(--c-text);
    background-color: var(--c-background);
    font-size: 1.25rem;
    text-align: center;

    margin-right: 0.7rem;
    padding: 0.5rem 1rem 0.5rem 1rem;
    

    border: 1px solid rgb(0, 0, 0);
    border-radius: 100rem;
  }

  img {
    width: 100%;
    height: 18rem;
    object-fit: cover;
    border-radius: var(--border-radius);
  }

  p {
    margin: 5rem 0 5rem 0;
    color: var(--c-text);
  }

  @media only screen and (min-width: 767px) {
    section {
      margin: 6rem 4rem 4rem 4rem;
    }

    h1 {
      width: 90%;
    }

    .links {
      margin: 2rem 0 4rem 0;
    }

    a {
      font-size: 2rem;
      padding: 1rem 4rem 1rem 4rem;
      border-width: 2px;
    }

    img {
      height: 32rem;
    }

    p {
      margin: 8rem 0 8rem 0;
      font-size: clamp(1.8rem,5.5vw,2.125rem);
      width: 80%;
    }
  }
</style>
