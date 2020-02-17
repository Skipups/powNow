export const style = {
  container: {
    display: 'inline-block',
    position: 'relative',
  },
  button: {
    padding: '0',

    backgroundColor: '#fff',
    color: '#333',
    cursor: 'pointer',
    outline: '0',
    fontSize: '16px',
    border: 'none',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    width: '10rem',
    height: '3rem',
    display: 'block',
  },
  dropdown: {
    position: 'absolute',
    display: 'inline-block',
    left: '0',
    top: '3rem',
    width: '300px',
    right: '0',
    backgroundColor: '#f9f9f9',
    minWidth: '160px',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: '10',
  },

  ul: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  },
  li: {
    padding: '8px, 12px',
    cursor: 'pointer',
  },
  'li:hover': {
    backgroundolor: 'rgba(0, 0, 0, 0.14)',
    cursor: 'pointer',
  },
  modalContent: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
