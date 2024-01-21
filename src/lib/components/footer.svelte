<script>
    import { page } from "$app/stores";
    import Tape from "$lib/assets/Tape.svg";
    import BlossomSelfie from "$lib/assets/BlossomSelfie.jpeg";
  </script>
  
  <footer>
    <div class="text">
      <h2>LET'S CONNECT</h2>
      <a href="mailto:wesleyschorel@gmail.com">wesleyschorel@gmail.com</a>
    </div>
  
    <div class="media">
      <img class="tape" src={Tape} alt=" " />
      <img class="poloroid" src={BlossomSelfie} alt="Wesley in a Blossom Forest" />
    </div>

    <span>© {new Date().getFullYear()} Wesley Schorel · All Rights Reserved</span>
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
      padding: 2rem 4rem 2rem 4rem;
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