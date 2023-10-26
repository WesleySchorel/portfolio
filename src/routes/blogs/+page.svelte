<script>
  export let data;
</script>

<section>
  <article>
    <h1>Blogs</h1>
    <ul>
      {#each data.blogs as blog}
        <a href="/blogs/{blog.uid}">
          <li>
            <h2>{blog.data.title}</h2>
            <p>{blog.data.description}</p>
            <p class="details">{blog.data.read_time}</p>
          </li>
        </a>
      {/each}
    </ul>
  </article>
</section>

<style>
  article {
    margin: auto;
    width: 80%;
    /* border: 3px solid var(--c-error); */
  }

  a {
    text-decoration: none;
  }

  p {
    margin: 1rem 0 0 0;
  }

  .details {
    opacity: 0.5;
  }

  ul {
    list-style: none;
  }

  li {
    background-color: var(--c-blog-background);
    padding: 1rem;
    margin: 0rem 0 2rem 0;
    border-radius: 5px;
    border: 1px solid var(--c-stroke);
    transition: 0.2s;
  }

  li:hover {
    transform: translateY(-3px);
    opacity: 0.65;
    transition: 0.2s;
  }
</style>
