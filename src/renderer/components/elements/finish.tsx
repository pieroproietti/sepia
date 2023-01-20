/**
 * sepia: a first access system configurator
 * author: Piero Proietti
 * mail: piero.proietti@gmail.com
 */
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';

export default function Finish() {
  return (
    <>
      <Box flexDirection="row">
        <br />
        <br />
        <a
          href="https://#"
          target="_blank"
          rel="noreferrer"
          >
          <Button variant="contained">
            <span role="img" aria-label="Boiler">
            </span>
            Reboot
          </Button>
        </a>
        <br />
        <br />
        <br />
        <br />
      </Box>
    </>
  )
}
