<script>
  /** @type {import("@prismicio/client").Content.FeaturedBlogsSlice} */
  export let slice;
</script>

<section>
  <h2>{slice.primary.title}</h2>
  {#each slice.items as item}
    <hr>
    <a href="/">
      <li>
        <h3>{item.blog_title}</h3>
        <span>READ BLOG</span>
      </li>
    </a>
  {/each}
</section>

<style>
  section {
    margin: 1rem;
    padding: 2rem;
    border-radius: 1rem;
    background-color: var(--c-opossing-background);
  }

  h2 {
    color: var(--c-opossing-text);
    text-transform: uppercase;
    font-size: 2rem;
  }

  hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  li {
    font-size: 1.5rem;
    color: var(--c-opossing-text);
    list-style: none;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  h3 {
    color: var(--c-opossing-text);
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: normal;
  }

  span {
    color: var(--c-opossing-text);
    text-transform: uppercase;
    font-size: 1rem;
    margin-top: 5px;
  }

  @media only screen and (min-width: 767px) {
    li {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    h3 {
      flex: 1;
    }

    span {
      margin-left: 10px;
    }
  }
</style>
