<script>
    export let data
    
    console.log(data)
  </script>
  
  <section>
      <article>
          <h1>{data.blog.data.title}</h1>
          <p>{data.blog.data.blog_post}.</p>
          
      </article>
  </section>
  
  <style>
    article {
      margin: auto;
      width: 80%;
      /* border: 3px solid var(--c-error); */
    }
  </style>