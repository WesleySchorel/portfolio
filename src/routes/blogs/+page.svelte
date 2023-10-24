<script>
    export let data
    
    console.log(data)
  </script>
  
  <section>
      <article>
          <h1>Blogs</h1>
          <p>These are my blogs.</p>
          
          <ul>
            {#each data.blogs as blog}
            <li><a href="/blogs/{blog.uid}">{blog.data.title}</a></li>
            
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
  </style>