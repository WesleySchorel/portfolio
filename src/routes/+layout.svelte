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

<footer>&#169; {new Date().getFullYear()} Wesley Schorel All Rights Reserved</footer>

<style>
    nav {
        margin: auto;
        width: 80%;
        padding: 1rem 0 0 0;
    }

    ul {
        display: flex;
    }

    li {
        display: flex;
        flex-direction: column;
        padding-right: 1rem;
    }

    footer {
        text-align: center;
        margin: auto;
        width: 50%;
        padding: 1rem;
    }
</style>
