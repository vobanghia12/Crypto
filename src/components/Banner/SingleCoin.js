import { makeStyles } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { TrendingCoins } from "../../config/api";
import { CryptoState } from "../../CryptopContext";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
const useStyles = makeStyles(() => ({
  general: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
  carouselItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      cursor: "pointer",
      textTransform: "uppercase",
      color: "black",
  }
}));
 
export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
export const SingleCoin = () => {
  const [trending, setTrending] = useState([]);
  const classes = useStyles();
  const { currency, symbol } = CryptoState();
    
  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    setTrending(data);
  };
  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);
  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };
  const items = trending.map((coin) => {
    let profit = coin.price_change_percentage_24h >= 0
    return (
      <Link className={classes.carouselItem} to={`/coins/${coin}`}>
        <img
          src={coin?.image}
          alt={coin.name}
          height="80"
          style={{ marginBottom: 10 }}
        />
        <span>
            {coin?.symbol}
                &nbsp;
                    <span style ={{color: profit > 0 ? "rgb(14, 203, 129": "red", fontWeight: 500}}>
                        {profit && '+'} {coin?.price_change_percentage_24h?.toFixed(2)} %
                    </span>
        </span>
        <span style = {{fontSize: 22, fontWeight: 500}}>
            {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
        </span>
      </Link>
    );
  });
  return (
    <div className={classes.general}>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableButtonsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={items}
      />
    </div>
  );
};
