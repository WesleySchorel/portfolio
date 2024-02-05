<script>
  /** @type {import("@prismicio/client").Content.DevelopmentProcessSlice} */
  import Search from "$lib/assets/i-search.png";
  import Pallete from "$lib/assets/i-pallete.png";
  import Gear from "$lib/assets/i-gear.png";
  import Bug from "$lib/assets/i-bug.png";
  import Rocket from "$lib/assets/i-rocket.png";
  export let slice;
</script>

<section>
  <h2>{slice.primary.title}</h2>
  <p>{slice.primary.description}</p>
  <ol>
    <li><img src={Search} alt="Analyse" /></li>
    <li><img src={Pallete} alt="Design" /></li>
    <li><img src={Gear} alt="Develop" /></li>
    <li><img src={Bug} alt="Test" /></li>
    <li><img src={Rocket} alt="Deploy" /></li>
  </ol>

  <a href="/blogs">View projects</a>
</section>

<style>
  section {
    margin: 0 1.25rem 8rem 1.25rem;
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

  p {
    color: var(--c-opossing-text);
    font-size: 1rem;
    margin-bottom: 1.8rem;
  }

  ol {
    display: flex;
    flex: row;
    list-style: none;
  }

  li {
    color: var(--c-opossing-text);
    margin-right: 0.7rem;
  }

  li:nth-child(5) {
    transform: rotate(45deg);
  }

  img {
    height: 2.5rem;
    width: 2.5rem;
    padding: 0.5rem;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 100rem;
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
      margin: 0 4rem 16rem 4rem;
      padding: 5rem;
      border-radius: var(--border-radius);
      text-align: center;
    }

    h2 {
      font-size: 3rem;
      margin-bottom: 3rem;
    }

    p {
      font-size: 1.5rem;
      padding-left: 10rem;
      padding-right: 10rem;
      margin-bottom: 4rem;
    }

    ol {
      display: flex;
      justify-content: center;
    }

    li {
      color: var(--c-opossing-text);
      margin-right: 1.5rem;
    }

    img {
      height: 4.5rem;
      width: 4.5rem;
      padding: 1rem;
      border: 2px solid rgb(255, 255, 255);
      border-radius: 100rem;
    }

    a {
      font-size: 1.5rem;
      margin-top: 4rem;
      padding: 1rem 4rem 1rem 4rem;
      border-width: 2px;
    }
  }
</style>
