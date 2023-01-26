import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrencyUSDEURO } from "../../store/currencyUSDEUROSlice";
import { getCurrencyEUROCAD } from "../../store/currencyEUROCADSlice";
import Wedget from "./Wedget";

function CurrencyWedget() {
  const dispatch = useDispatch();
  const currencyUSDEURI = useSelector((state) => state.currencyUSDEURI);
  const currencyEURICAD = useSelector((state) => state.currencyEURICAD);
 

  useEffect(() => {
    dispatch(getCurrencyEUROCAD());
    dispatch(getCurrencyUSDEURO());
  }, [dispatch]);
  try{
  console.log(currencyEURICAD["currencyEUROCAD"]["CAD"]);
  var cad=currencyEURICAD["currencyEUROCAD"]["CAD"]
  var euro=currencyEURICAD["currencyEUROCAD"]["EUR"]
  }
  catch(e){}
  try{
    console.log(currencyUSDEURI["currency"]["EUR"]);
    var eur=currencyUSDEURI["currency"]["EUR"]
    var usd=currencyUSDEURI["currency"]["USD"]
    }
    catch(e){}
  return (
    <div>
      <h2>Wedget</h2>
      <Wedget usd={usd} eur={eur} currencyOne={"Doller"} currencyTwo={"EURO"}/>
      <Wedget eur={cad} currencyOne={"EURO"} currencyTwo={"CAD"} usd={euro}/>
    </div>
  );
}

export default CurrencyWedget;
