<script>
    import global from "../global.css";
</script>

<nav>
    <ul>
        <li>
            <a href="/">Home</a>
        </li>
        <li>
            <a href="/projects">Projects</a>
        </li>
        <li>
            <a href="/blogs">Blog</a>
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
</style>
