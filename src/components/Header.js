import React from 'react'
import { AppBar, Toolbar, Typography,Container, Select, MenuItem, makeStyles, createTheme, ThemeProvider } from '@material-ui/core'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { CryptoState } from '../CryptopContext';
const Header = () => {
    const {currency, setCurrency} = CryptoState();
    console.log(currency);
    const useStyle = makeStyles({
        title: {
            flex: 1,
            color: '#1ed14b',
            fontFamily: 'Montserrat',
            fontWeight: 'bold',
            cursor: 'pointer',
            textTransform: 'uppercase',
            fontSize: 20,
        }
    })
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#fff',
            },
            type: 'dark',
    },
    })
    const classes = useStyle();
    const history = useHistory();
    
  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color = "transparent" position='static'>
        <Container>
            <Toolbar>
                <Typography onClick={() => history.push("/")} value = {currency} className={classes.title} variant='h6'>Crypto Tracker</Typography>
                <Select onChange={(e) => setCurrency(e.target.value)}  variant="outlined"  style={{width: 100, height: 40, marginRight: 15}}>
                    <MenuItem value ={"USD"}>USD</MenuItem>
                    <MenuItem value={"VND"}>VND</MenuItem>
                </Select>
            </Toolbar>
        </Container>
    </AppBar>
    </ThemeProvider>
  )
}

export default Header