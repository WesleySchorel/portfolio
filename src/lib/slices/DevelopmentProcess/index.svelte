<script>
  /** @type {import("@prismicio/client").Content.DevelopmentProcessSlice} */
  export let slice;
</script>

<section>

  <h2>{slice.primary.title}</h2>

  <ol>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ol>

  <p>{slice.primary.description}</p>
  <a href="/blogs">View projects</a>
</section>

<style>
  section {
    margin: 0 1.25rem 5rem 1.25rem;
    padding: 2rem;
    border-radius: var(--border-radius);
    background-color: var(--c-opossing-background);
  }

  h2 {
    color: var(--c-opossing-text);
    text-transform: uppercase;
    font-size: 2rem;
    margin-bottom: 1.8rem;
  }

  ol {
    display: flex;
    flex: row;
    list-style: none;
  }

  li {
    color: var(--c-opossing-text);
    margin-right: 1rem;
  }

  p {
    color: var(--c-opossing-text);
    font-size: 1rem;
  }

  a {
    display: inline-block;

    color: var(--c-text);
    background-color: var(--c-background);
    font-size: 1.25rem;
    text-align: center;

    margin-top: 2rem;
    padding: 0.5rem 1rem 0.5rem 1rem;

    border: 1px solid rgb(0, 0, 0);
    border-radius: 100rem;
  }

  @media only screen and (min-width: 767px) {
    section {
      margin: 0 4rem 12rem 4rem;
      padding: 4rem;
      border-radius: var(--border-radius);
    }

    h2 {
      font-size: 3rem;
      margin-bottom: 3rem;
      /* text-align: center; */
    }

    p {
      font-size: 1.5rem;
      width: 80%;
    }

    a {
      font-size: 1.5rem;
      margin-top: 2rem;
      padding: 1rem 4rem 1rem 4rem;
      border-width: 2px;
    }
  }
</style>
