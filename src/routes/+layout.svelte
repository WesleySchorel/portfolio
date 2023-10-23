<script>
    import global from "../global.css";
</script>

<nav>
    <ul>
        <li>
            <a prefetch href="/">Home</a>
        </li>
        <li>
            <a prefetch href="/projects">Projects</a>
        </li>
        <li>
            <a prefetch href="/blog">Blog</a>
        </li>
    </ul>
</nav>

<main>
    <slot />
</main>

<style>
    nav {
        margin: auto;
        width: 80%;
        padding: 1rem 0 0rem 0;
    }

    ul {
        display: flex;
    }

    li {
        display: flex;
        flex-direction: column;
        padding-right: 1rem;
    }

    @media screen and (max-width: 480px) {
    nav a {
      font-size: 1rem;
    }
  }
</style>
