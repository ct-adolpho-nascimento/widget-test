export const styles = `
  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  :root {
    --hue: 220;
    --accent: hsl(var(--hue) 80% 70%);
    --bkg: hsl(var(--hue) 50% 96%);
    --txt: hsl(var(--hue) 70% 14%);
  }

  svg{
    max-width: 100%;
  }
  body {
    font-family: 'Inter', sans-serif;
    display: grid;
    place-items: center;
    min-height: 100vh;
    font-size: 2rem;
    line-height: 1.5;
    background-color: var(--bkg);
    color: var(--txt);
  }

  .container {
    display: grid;
    place-items: center;
    width: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.17'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }

  .banner {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    width: 100%;
    padding: 6rem 2rem;
  }

  .content {
    max-width: 35ch;
    display: grid;
    gap: 3rem;
    background-color: var(--bkg);
    padding: 2rem;
    border-radius: 2rem;
  }

  .content h2 {
    font-size: 3rem;
    line-height: 1.1;
  }

  .shirt {
    --shirt: hsl(var(--hue) 60% 50%);
    color: var(--shirt);
  }

  .text-container {
    display: grid;
    gap: .6rem;
  }

  .btn-container {
    display: flex;
    gap: 2rem;
  }

  button {
    width: 60px;
    height: 60px;
    border-radius: 100vmax;
    border: none;
    background-color: hsl(var(--hue) 60% 50%);
    transition: box-shadow 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
    cursor: pointer;
  }

  button:focus {
    outline: none;
  }

  button:is(:hover, :focus-visible) {
    box-shadow: 0 0 0 5px var(--bkg),
                0 0 0 12px hsl(var(--hue) 60% 50%);
  }

  [data-color="90"]{
    --hue: 90;
  }
  [data-color="10"]{
    --hue: 10;
  }
  [data-color="260"]{
    --hue: 260;
  }
  [data-color="320"]{
    --hue: 320;
  }
`;