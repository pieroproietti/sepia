/**
 * sepia: a first access system configurator
 * author: Piero Proietti
 * mail: piero.proietti@gmail.com
 */
import Button from '@mui/material/Button';

export default function Buttons() {
    return (
        <>
    <a
    href="https://github.com/pieroproietti/sepia"
    target="_blank"
    rel="noreferrer"
    >
    <Button variant="contained">
      <span role="img" aria-label="Sepia">

      </span>
      Sepia
    </Button>
    </a>

    <a
    href="https://github.com/electron-react-boilerplate/electron-react-boilerplate"
    target="_blank"
    rel="noreferrer"
    >
    <Button variant="contained">
      <span role="img" aria-label="Boiler">

      </span>
      Boiler
    </Button>
  </a>

  <a
    href="https://mui.com/"
    target="_blank"
    rel="noreferrer"
  >
    <Button variant="contained">
      <span role="img" aria-label="Material">
      </span>
      Material
    </Button>
  </a>

  <a
    href="https://penguins-eggs.net/book/italiano9.3.html"
    target="_blank"
    rel="noreferrer"
  >
    <Button variant="contained">
      <span role="img" aria-label="Manual">

      </span>
      Manual
    </Button>
  </a>

  <a
    href="https://t.me/penguins_eggs"
    target="_blank"
    rel="noreferrer"
  >
    <Button variant="contained">
      <span role="img" aria-label="Telegram">

      </span>
      Telegram
    </Button>
  </a>
</>
 )
}
