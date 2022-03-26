import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { useState } from 'react';
import { CryptoState } from '../CryptopContext';
import axios from 'axios';
import { SingleCoin } from '../config/api';
import { Classnames } from 'react-alice-carousel';
import { LinearProgress, makeStyles, Typography } from '@material-ui/core';
import { CoinInfo } from '../components/CoinInfo';
import parse from "html-react-parser"
import { numberWithCommas } from '../components/Banner/SingleCoin';
export const CoinPage = () => {
   const{id} = useParams();
   const [coin, setCoin] = useState();
   const {currency, symbol} = CryptoState();

   const fetchCoin = async() => {
     const {data} = await axios.get(SingleCoin(id));
     setCoin(data);
   }
   useEffect(() => {
     fetchCoin()
   }, []);
   const useStyles = makeStyles((theme) => ({
      cointainer: {
        display: 'flex',
        [theme.breakpoints.down("md")]: {
          width: '100%',
          flexDirection: "column",
          alignItems: "center",
        }
      },
      heading: {
        fontWeight: "bold",
        marginBottom: 20,
        fontFamily: "Montserrat",
      },
      description: {
        width: "100%",
        fontFamily: "Montserrat",
        padding: 25,
        paddingBottom: 15,
        paddingTop: 0,
        textAlign: "justify",
      }
   }));
   const classes = useStyles();
   if(!coin) return <LinearProgress style = {{ backgroundColor: "gold"}}/>;
    return(
    <div className= {Classnames.container}>
      <div className={classes.sidebar}>
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{marginBottom: 20}}/>
      </div>
      <Typography variant="h3" className={classes.heading}>
        {coin?.name}
      </Typography>
      
      <Typography variant="subtitle1" className={classes.description}>
        {coin?.description.en.split(". ")[0]}
      </Typography>
      <div className={classes.marketData}>
        <span style={{display: "flex"}}>
          <Typography variant="h5" className={classes.heading}>
              Rank
          </Typography>
          &nbsp; &nbsp;
          <Typography
            variant="h5"
            style={{fontFamily: "Montserrat",}}>
              {symbol}{" "}
              {numberWithCommas(coin?.market_data_current_price[currency.toLowerCase()].toString().slice(0,-6))}
            </Typography>
        </span>
      </div>
      <CoinInfo coin = {coin}/>
    </div>
    )
}
