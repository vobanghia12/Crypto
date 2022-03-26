import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import { SingleCoin } from "./SingleCoin";
const useStyles = makeStyles({
  banner: {
    backgroundImage: "url(./blockchain4k.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: 'center',
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
      display: 'flex',
      height: "40%",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center",
  },
});
export const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              color: "black",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
              fontWeight: "bold",
              textAlign: 'left',
            
            }}
          >
            Crypto Tracker
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkblue",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
              marginBottom: 60,
              textAlign: 'left',
              fontWeight: 'bold'
            }}
          >
            Track all of your favorite CryptoCurrency to find the opportunity
          </Typography>
          <SingleCoin/>
        </div>
      </Container>
    </div>
  );
};
