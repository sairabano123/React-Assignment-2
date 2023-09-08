
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Button, TextField } from '@mui/material';

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

export default function EditBlog(props) {

  const submitHandler = (e) => {
    e.preventDefault();
    const blog = {
      id: props.blogInfo.id,
      title: e.target.title.value,
      subtitle: e.target.subtitle.value,
      author: e.target.author.value,
    }
    props.editRow(blog);
  }

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
            timeout: 500,
          },
        }}
      >
        <Fade in={props.show}>
          <Box sx={style}>
            <form onSubmit={submitHandler}>
              <TextField
                label="Blog title"
                defaultValue={props.blogInfo.title}
                variant="outlined"
                color="primary"
                sx={{ mb: 3 }}
                fullWidth
                name='title'
              />
              <TextField
                label="Blog sub-title"
                defaultValue={props.blogInfo.subtitle}
                variant="outlined"
                color="primary"
                sx={{ mb: 3 }}
                fullWidth
                name='subtitle'
              />
              <TextField
                label="Blog author"
                defaultValue={props.blogInfo.author}
                variant="outlined"
                color="primary"
                sx={{ mb: 3 }}
                fullWidth
                name='author'
              />

              <Button sx={{ color: 'black' }} type="submit">Edit Blog</Button>
            </form>
          </Box>

        </Fade>

      </Modal>
    </>
  );
}
