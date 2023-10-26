<script>
    import global from "../global.css";
    import { page } from "$app/stores";
</script>

<nav>
    <ul>
        <li>
            <a href="/" class:active={$page.url.pathname === "/"}>Home</a>
        </li>
        <li>
            <a
                href="/projects"
                class:active={$page.url.pathname === "/projects"}>Projects</a
            >
        </li>
        <li>
            <a href="/blogs" class:active={$page.url.pathname === "/blogs"}
                >Blogs</a
            >
        </li>
    </ul>
</nav>

<main>
    <slot />
</main>

<footer>
    &#169; {new Date().getFullYear()} Wesley Schorel &#183; All Rights Reserved
</footer>

<style>
    nav {
        margin: auto;
        width: 80%;
        padding: 1rem 0 0 0;
    }

    ul {
        display: flex;
    }

    ul a {
        text-decoration: none;
    }

    ul a:hover {
        opacity: 0.65;
        transition: 0.2s;
    }

    li {
        display: flex;
        flex-direction: column;
        padding-right: 1rem;
        color: var(--c-nav-link);
    }

    li .active {
        color: var(--c-nav-link-active);
    }

    footer {
        text-align: center;
        margin: auto;
        width: 100%;
        padding: 1rem;
    }
</style>
