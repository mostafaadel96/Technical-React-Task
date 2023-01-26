import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrencyHistory } from "../../store/historySlice";
import LineChart from "./LineChart";
import { Container, Grid } from "@material-ui/core";
import CurrencyWedget from "../wedget/CurrencyWedget";

const Currency = () => {
  const dispatch = useDispatch();
  const { isLoading, currencyHistory } = useSelector(
    (state) => state.currencyHistory
  );

  useEffect(() => {
    dispatch(getCurrencyHistory());
  }, [dispatch]);
  const days = [];
  const cad = [];
  const eur = [];
  const usd = [];
  const Days = [];
  for (const k in currencyHistory) {
    Days.push(k);
    days.push(k.split("-")[2]);
    cad.push(currencyHistory[k]["CAD"]);
    eur.push(currencyHistory[k]["EUR"]);
    usd.push(currencyHistory[k]["USD"]);
  }

  return (
    <div>
    <Container>
      {isLoading ? "loading..." : <ul></ul>}
      <Grid container >
        <Grid item xs={12} sm={8} md={6}>
         <CurrencyWedget />
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
         <LineChart days={days} cad={cad} eur={eur} usd={usd} />
        </Grid>
      </Grid>
    </Container>
    </div>
    

  );
};

export default Currency;
