import { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import bin2dec from './bin2dec';
import styles from './interface.module.css';

export default () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState(null);
  const [error, setError] = useState(null);
  const process = (n) => {
    setInput(n);
    if (n.length === 0) {
      setOutput(null);
      setError(null);
      return;
    }
    try {
      setOutput(bin2dec(n));
      setError(null);
    } catch (error) {
      setOutput(null);
      setError(error);
    }
  };

  return (
    <Box sx={{backgroundColor: 'green',
    position: 'absolute',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'}}>
      <TextField
        value={input}
        onChange={(t) => { process(t.target.value); }}
      />
      {error === null && output === null &&
        <h1>Enter a binary number</h1>
      }
      {error !== null &&
        <h1>{error}</h1>
      }
      {output !== null && details(input, output)}
    </Box>
  );
};

const details = (bitString, decimalValue) => {
  let detailJSX = []
  for (let index in bitString) {
    let bit = ['0', '1'].indexOf(bitString[index]);
    detailJSX.push({ bit, index: bitString.length-index-1 });
  }
  detailJSX = detailJSX.map(detail => {
    let elements =[]
    elements.push(
      <Box key={detail.index}>
        <h3>{detail.bit}</h3>
        <h3>{detail.index}</h3>
        <h3>{detail.bit}&nbsp;*&nbsp;2<sup>{detail.index}</sup></h3>
      </Box>
    );
    if (detail.index !== 0) {
      elements.push(
        <Box key={`${detail.index}+`}>
          <h3>&nbsp;</h3>
          <h3>&nbsp;</h3>
          <h3>&nbsp;+&nbsp;</h3>
        </Box>
      );
    }
    return elements;
  })

  return (
    <Box>
      <h3>Decimal&nbsp;representation: {decimalValue}</h3>
      <h3>Explanation:</h3>
      <Box sx={{display: 'flex'}}>
        <Box>
          <h3>bit&nbsp;value</h3>
          <h3>index&nbsp;from&nbsp;right</h3>
          <h3>term</h3>
        </Box>
        <Box className={styles.details} sx={{display: 'flex', maxWidth: '80vw', overflowX: 'scroll'}}>
          {detailJSX}
        </Box>
      </Box>
    </Box>
  )
};
