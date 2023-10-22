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
        padding: 1rem 0 1rem 0;
    }

    nav a {
        color: var(--c-text);
    }

    ul {
        display: flex;
    }

    li {
        display: flex;
        flex-direction: column;
        padding-right: 0.5rem;
    }
</style>
