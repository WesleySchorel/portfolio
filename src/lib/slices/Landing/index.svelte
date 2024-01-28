<script>
  /** @type {import("@prismicio/client").Content.LandingSlice} */
  export let slice;
</script>

<section>
  <h1>{@html slice.primary.title}</h1>

  <div class="links">
    <a href="/projects">View projects</a>
    <a href="/blogs">Read blogs</a>
  </div>

  <img src={slice.primary.hero_image.url} alt=" " />
  <p>{slice.primary.description}</p>
</section>

<style>
  section {
    margin: 2rem;
  }

  h1 {
    color: var(--c-text);
  }

  .links {
    display: flex;
    flex-wrap: wrap;
  }

  a {
    display: flex;
    justify-content: center;
    flex-direction: column;

    color: var(--c-text);
    font-size: 1.25rem;
    text-align: center;
    text-decoration: none;

    margin: 2rem 0.7rem 2rem 0;
    padding: 1rem 1.75rem 1rem 1.75rem;
    

    border: 0.125rem solid rgb(0, 0, 0);
    border-radius: 100rem;
  }

  img {
    width: 100%;
    height: 20rem;
    object-fit: cover;
    border-radius: var(--border-radius);
    margin-bottom: 1rem;
  }

  p {
    color: var(--c-text);
  }

  @media only screen and (min-width: 767px) {
    section {
      margin: 4rem;
    }

    h1 {
      font-size: 4rem;
      width: 90%;
    }

    a {
      font-size: 2rem;
      padding: 1rem 4rem 1rem 4rem;
    }

    img {
      height: 30rem;
    }
  }
</style>
