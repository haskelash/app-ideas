import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import FileTree from './components/FileTree';

function App() {
  const sx = {
    backgroundColor: 'red',
    // position: 'absolute',
    // position: 'relative',
    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50%, -50%)',
    // justifyContent: 'space-between',
    display: 'flex',
    alignItems: 'baseline',
  }

  return (
    <Box sx={sx}>
      <FileTree/>
      <Outlet sx={{position: 'absolute',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }}/>
    </Box>
  );
}

export default App;
