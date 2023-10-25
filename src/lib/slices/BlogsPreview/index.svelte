<script>
  /** @type {import("@prismicio/client").Content.BlogsPreviewSlice} */
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
    <p>{slice.primary.text}</p>

    <ul>
      {#each slice.items as item}
        <li>
          <a href={item.blog_link}>
            <h2>{item.blog_title}</h2>
          </a>
        </li>
      {/each}
    </ul>

    <a class="link" href="/blogs">View all blogs →</a>
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

  ul {
    display: flex;
  }

  li {
    display: flex;
    flex-direction: column;
    color: var(--c-text);
    background-color: var(--c-blog-background);
    font-size: 1.5rem;
    text-align: left;
    border-radius: 5px;
    padding: 1rem;
    margin: 1rem 1rem 0 0;
  }

  li a {
    text-decoration: none;
  }

  .link {
    color: var(--c-button-background-2);
  }

  @media screen and (max-width: 480px) {
    ul {
    display: block;
  }
  }
</style>
