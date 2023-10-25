<script>
  /** @type {import("@prismicio/client").Content.IntroductionSlice} */
  export let slice;
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  <section class="grid">
    <div class="text-container">
      <h1>
        {@html slice.primary.title}
      </h1>
      <ul>
        <li>
          <a href="https://github.com/WesleySchorel" target="_blank"
            ><img src="github.svg" alt="Vitit Github" /></a
          >
        </li>
        <li>
          <a href="https://twitter.com/WesleySchorel" target="_blank"
            ><img src="x-twitter.svg" alt="Visit Twitter" /></a
          >
        </li>
      </ul>
    </div>
    <div class="img-container">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        width="100%"
        id="blobSvg"
        style="opacity: 1;"
        ><image
          x="0"
          y="0"
          width="100%"
          height="100%"
          clip-path="url(#shape)"
          href="avatar.png"
          preserveAspectRatio="none"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color: rgb(238, 205, 163);" />
            <stop offset="100%" style="stop-color: rgb(239, 98, 159);" />
          </linearGradient>
        </defs>
        <clipPath id="shape"
          ><path id="blob" fill="url(#gradient)">
            <animate
              attributeName="d"
              dur="10000ms"
              repeatCount="indefinite"
              values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"
            />
          </path></clipPath
        ></svg
      >
    </div>
  </section>
</section>

<style>
  section {
    background-color: var(--c-background-1);
  }

  section .grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-auto-columns: 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas: "text img";
    margin: auto;
    width: 80%;
    /* border: 3px solid var(--c-error); */
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
    padding: 0rem 1rem 0 0;
  }

  .text-container li img {
    height: 2.5rem;
    width: 2.5rem;
  }

  .text-container li img:hover {
    transform: translateY(-3px);
    opacity: 0.65;
  }

  .img-container {
    grid-area: img;
    display: flex;
    justify-content: right;
    align-items: right;
  }

  @media screen and (max-width: 480px) {
    section .grid {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      grid-auto-columns: 1fr;
      gap: 0px 0px;
      grid-auto-flow: row;
      grid-template-areas: "text" "img";
    }

    .text-container li {
      display: flex;
      flex-direction: column;
      padding: 0 0.75rem 0 0;
    }

    .text-container li img {
      width: 2rem;
    }
  }
</style>
