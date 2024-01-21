<script>
    import { page } from "$app/stores";
    import BlossomSelfie from "$lib/assets/BlossomSelfie.jpeg";
    import GithubIcon from "$lib/assets/Github.svg";
    import LinkedinIcon from "$lib/assets/Linkedin.svg";
    import Tape from "$lib/assets/Tape.svg";
  </script>
  
  <footer>
    <div class="text">
      <h2>LET'S CONNECT</h2>
      <a href="mailto:wesleyschorel@gmail.com">wesleyschorel@gmail.com</a>
      <a href="https://github.com/WesleySchorel"><img src={GithubIcon} alt="Github" /></a>
      <a href="https://www.linkedin.com/in/wesley-schorel-387410299/"><img src={LinkedinIcon} alt="Linkedin" /></a>
    </div>
  
    <span>© {new Date().getFullYear()} Wesley Schorel · All Rights Reserved</span>
  
    <div class="media">
      <img class="tape" src={Tape} alt=" " />
      <img class="poloroid" src={BlossomSelfie} alt="Wesley in a Blossom Forest" />
    </div>
  </footer>
  
  <style>
    footer {
      display: grid;
      grid-template-columns: 1.5fr 0.5fr;
      grid-template-rows: 1fr;
      gap: 0px 0px;
      grid-auto-flow: row;
      grid-template-areas: "text media";
      background-color: var(--c-opossing-background);
    }
  
    .text {
      grid-area: text;
      padding: 12rem 0 0 4rem;
    }
  
    .media {
      grid-area: media;
      padding: 8rem 6rem 3rem 0;
    }
  
    h2 {
      color: var(--c-opossing-text);
      font-size: 6.375rem;
      padding-bottom: 4rem;
    }
  
    a {
      font-size: 2rem;
      text-align: center;
      text-decoration: none;
      color: var(--c-opossing-text);
      padding: 2rem;
      margin-right: 1rem;
      border: 0.125rem solid rgb(255, 255, 255);
      border-radius: 100rem;
      transition: 0.3s;
    }
  
    a:hover {
      border-color: var(--c-opossing-hover);
    }
  
    span {
      color: var(--c-opossing-text);
      opacity: 0.25;
      padding: 0 0 2rem 4rem;
    }
  
    .text img {
      width: 2.2rem;
      height: 2rem;
    }
  
    .tape {
      position: absolute;
      z-index: 1;
      margin: -3.5rem 0 0 7rem;
      transform: rotate(3.85deg);
    }
  
    .poloroid {
      width: 24rem;
      height: 28rem;
      object-fit: cover;
      border: 1.2rem solid rgb(255, 255, 255);
      transform: rotate(3.85deg);
    }
  </style>