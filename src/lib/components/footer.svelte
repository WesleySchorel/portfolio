<script>
  import Tape from "$lib/assets/Tape.svg";
  import BlossomSelfie from "$lib/assets/BlossomSelfie.jpeg";
</script>

<footer>
  <div class="text">
    <h2>LET'S CONNECT</h2>
    <div class="socials">
      <a href="mailto:wesleyschorel@gmail.com" class="mail" target="_blank"
        >wesleyschorel@gmail.com</a
      >
      <a
        href="https://github.com/WesleySchorel"
        aria-label="Visit my Github page"
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            fill="white"
          />
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/wesley-schorel-387410299/"
        aria-label="Visit my Linkedin page"
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155"
            fill="white"
          />
        </svg>
      </a>
    </div>
  </div>

  <div class="media">
    <img class="tape" src={Tape} alt="Tape" />
    <img
      class="poloroid"
      src={BlossomSelfie}
      alt="Wesley in a Blossom Forest"
    />
  </div>

  <span>© {new Date().getFullYear()} Wesley Schorel · All Rights Reserved</span>
</footer>

<style>
  footer {
    background-color: var(--c-opossing-background);
    padding: 6rem 2rem 2rem 2rem;
  }

  h2 {
    color: var(--c-opossing-text);
    font-size: 3.375rem;
    margin-bottom: 1rem;
  }

  .socials {
    display: flex;
    flex-wrap: wrap;
  }

  a {
    display: flex;
    justify-content: center;
    flex-direction: column;

    color: var(--c-opossing-text);
    font-size: 1.25rem;
    text-align: center;

    margin: 0 0.7rem 1rem 0;
    padding: 1rem;

    border: 1px solid rgb(255, 255, 255);
    border-radius: 100rem;

    transition: 0.3s;
  }

  span {
    display: flex;
    justify-content: center;

    font-size: 0.7rem;
    color: var(--c-opossing-text);
    /* opacity: 0.35; */
  }

  .media {
    display: flex;
    justify-content: center;
    padding: 5rem 0 4rem 0;
  }

  .tape {
    width: 6rem;
    height: auto;

    position: absolute;
    z-index: 1;
    margin-top: -1.75rem;
    margin-left: 1rem;
    transform: rotate(4deg);
  }

  .poloroid {
    width: 15rem;
    height: 17rem;
    object-fit: cover;
    border: 0.7rem solid rgb(255, 255, 255);
    border-bottom: 2rem solid rgb(255, 255, 255);
    transform: rotate(4deg);
    transition: 0.3s;
  }

  @media only screen and (min-width: 1067px) {
    footer {
      display: grid;
      grid: 1fr / 1.5fr 0.5fr;
      grid-auto-flow: row;
      grid-template-areas: "text media";

      padding: 6rem 5rem 2rem 5rem;
    }

    h2 {
      font-size: 6.375rem;
    }

    a {
      font-size: 2rem;
      color: var(--c-opossing-text);
      padding: 2rem;
      transition: 0.3s;
      border-width: 2px;
    }

    a:hover {
      opacity: 0.75;
    }

    .mail {
      padding: 0 4rem 0 4rem;
    }

    span {
      justify-content: left;
      font-size: 1rem;
    }

    .text {
      padding: 6rem 0rem 10rem 0rem;
    }

    .media {
      padding: 0;
    }

    .tape {
      width: 10rem;
      height: auto;
      margin-top: -3rem;
      margin-left: 1rem;
    }

    .poloroid {
      width: 24rem;
      height: 28rem;
      border: 1.2rem solid rgb(255, 255, 255);
      border-bottom: 2.5rem solid rgb(255, 255, 255);
    }

    .poloroid:hover {
      transform: rotate(5deg);
    }
  }
</style>
