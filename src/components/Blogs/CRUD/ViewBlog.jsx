import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ViewBlog(props) {
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.show}
        onClose={props.hide}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 300,
          },
        }}
      >
        <Fade in={props.show}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h4" component="h2">
              {props.blogInfo.title}
            </Typography>
            <Typography id="transition-modal-subtitle" variant="subtitle2" gutterBottom sx={{fontWeight:"700"}}>
              {props.blogInfo.subtitle}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <p>Author: {props.blogInfo.author}</p>
              <p>ID: {props.blogInfo.id}</p>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
