<script>
  /** @type {import("@prismicio/client").Content.IntroductionSlice} */
  export let slice;
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  <div class="text-container">
    <h1>
      {slice.primary.title_start} <span>{slice.primary.title_name}</span>{slice
        .primary.title_end}
    </h1>
    <ul>
      <li>
        <a prefetch href="https://github.com/WesleySchorel" target="_blank">Github</a>
      </li>
      <li>
        <a prefetch href="https://nl.linkedin.com/in/WesleySchorel" target="_blank">Linkedin</a>
      </li>
      <li>
        <a prefetch href="/">Mail</a>
      </li>
      <li>
        <a prefetch href="https://twitter.com/WesleySchorel" target="_blank">Twitter</a>
      </li>
    </ul>
  </div>
  <div class="img-container">
    <img src={slice.primary.circle.url} alt=" " />
  </div>
</section>

<style>
  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-auto-columns: 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas: "text img";
  }

  .text-container {
    grid-area: text;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
  }

  .text-container ul {
        display: flex;
    }

  .text-container li {
        display: flex;
        flex-direction: column;
        padding-right: 0.5rem;
    }

  /* .text-container a {
    background-color: var(--c-socials);
    padding: 0.5rem;
  } */

  .img-container {
    grid-area: img;
    display: flex;
    justify-content: right;
    align-items: right;
  }
</style>
