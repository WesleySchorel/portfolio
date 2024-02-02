<script>
  /** @type {import("@prismicio/client").Content.FeaturedBlogsSlice} */
  export let slice;
</script>

<section>
  <h2>{slice.primary.title}</h2>
  <ul>
    {#each slice.items as item}
      <hr>
      <a href="blogs/{item.blog_link}">
        <li>
          <h3>{item.blog_title}</h3>
          <span>READ BLOG</span>
        </li>
      </a>
    {/each}
  </ul>
  <a class="blogs" href="/blogs">More blogs</a>
</section>

<style>
  section {
    margin: 0 1.5rem 3rem 1.5rem;
    padding: 2rem;
    border-radius: 1rem;
    background-color: var(--c-opossing-background);
  }

  h2 {
    color: var(--c-opossing-text);
    text-transform: uppercase;
    font-size: 2rem;
    margin-bottom: 1.8rem;
  }

  hr {
    margin-bottom: 1rem;
  }

  li {
    font-size: 1.5rem;
    color: var(--c-opossing-text);
    list-style: none;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 1rem;
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
    margin-top: 0.5rem;
  }

  .blogs {
    display: inline-block;

    color: var(--c-text);
    background-color: var(--c-background);
    font-size: 1rem;
    text-align: center;

    margin-top: 1rem;
    padding: 0.5rem 1rem 0.5rem 1rem;

    border: 1px solid rgb(0, 0, 0);
    border-radius: 100rem;
  }

  @media only screen and (min-width: 767px) {
    section {
      margin: 0 4rem 12rem 4rem;
      padding: 4rem;
      border-radius: 2.5rem;
    }

    li {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    h2 {
      font-size: 3rem;
      margin-bottom: 3rem;
    }

    h3 {
      flex: 1;
      font-size: 1.5rem;
    }

    span {
      margin-top: 0;
      margin-left: 10px;
      font-size: 1.5rem;
    }

    .blogs {
      font-size: 1.5rem;
      margin-top: 2rem;
      padding: 1rem 4rem 1rem 4rem;
      border-width: 2px;
    }
  }
</style>
