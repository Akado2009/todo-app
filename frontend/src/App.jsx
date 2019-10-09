import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import TODO from './components/TODO';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#336B87",
            contrast: "#FFF",
        },
        secondary: {
            main: "#2A3132",
        },
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
    }
});
const App = () => {
    return (
        <div>
            <MuiThemeProvider theme={theme}>
                <TODO />
            </MuiThemeProvider>
        </div>
    );
};

export default App;
