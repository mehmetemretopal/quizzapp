import { Box, Button, Modal, Typography } from "@mui/material";

interface BasicModalProps {
  open: boolean;
  onClose: () => void;
  message: string;
}

const BasicModal: React.FC<BasicModalProps> = ({ open, onClose, message }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: 2
      }}>
        <Typography id="modal-title" variant="h4" component="h2" sx={{ mb: 2, textAlign: 'center' }}>
          {message}
        </Typography>
        <Button 
          variant="contained" 
          fullWidth 
          onClick={onClose}
        >
          Kapat
        </Button>
      </Box>
    </Modal>
  );
};

export default BasicModal;