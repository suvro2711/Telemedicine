import React from 'react';
import { makeStyles } from '@material-ui/styles';

// Custom styles
const useCommonStyles = makeStyles((theme) => ({
  customContainer: {
    // Apply your custom sizing styles here
    maxWidth: "1200px", // Example: Set the maximum width to 800px
    width:"100vw"
  },
}));

export {useCommonStyles}
