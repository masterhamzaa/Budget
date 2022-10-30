import "./Application.css";
import React, { useState, useEffect } from "react";
import Header from "./compo/Header";
import Footer from "./compo/Footer";
import Animloading from "./compo/Animloading";
import Statistic from "./compo/Statistic";
import Expense from "./compo/Expense";
import ChartStatistic from "./compo/ChartStatistic";
import swal from "sweetalert";
import Chart from 'chart.js/auto';


function App() {
  // states
  const [load, setLoad] = useState(false);
  const [total, setTotal] = useState(0);
  const [foods, setFoods] = useState(0);
  const [clothes, setClothes] = useState(0);
  const [books, setBooks] = useState(0);
  const [cars, setCars] = useState(0);
  const [store, setStore] = useState(0);
  var cat = ["foods", "clothes", "books", "cars", "store"];
  const [expences, setExpences] = useState([
    foods,
    clothes,
    books,
    cars,
    store,
  ]);
  const [data, setData] = useState({
    labels: cat,
    datasets: [
      {
        label: "Expences",
        data: expences,
      },
    ],
  });

  useEffect(() => {
    setExpences([foods, clothes, books, cars, store]);
  }, [foods, clothes, books, cars, store]);

  // did mount - update - unmount
  useEffect(() => {
    setData({
      labels: ["foods", "clothes", "books", "cars", "store"],
      datasets: [
        {
          label: "Expences",
          data: expences,
        },
      ],
    });
  }, [expences]);

  //mount
  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
      swal("Welcome to your Budget App !");
    }, 1500);
  }, []);
  if (!load) return <Animloading />; // load = true

  // handler functions
  const editIncome = () => {
    let inc = parseFloat(prompt("add balnce ")); // changement de total incomes
    if (isNaN(inc) || inc < 0) {
      setTotal(total); // au cas ou l'erreur de str
    } else {
      setTotal(total + inc);
      swal(
        "Operation succesfull !",
        `You're add ${inc} DH to your Account`,
        "success"
      );
    }
  };

  const handelChange = (e) => {
    setTotal(total - e.target.value);

    if (!isNaN(parseFloat(e.target.value))) {
      switch (e.target.name) {
        case "foods":
          setFoods(parseFloat(e.target.value));
          break;
        case "clothes":
          setClothes(parseFloat(e.target.value));
          break;
        case "books":
          setBooks(parseFloat(e.target.value));
          break;
        case "cars":
          setCars(parseFloat(e.target.value));
          break;
        case "store":
          setStore(parseFloat(e.target.value));
          break;
          default :setTotal(0);
      }
    }
    if (isNaN(parseFloat(e.target.value))) {
      switch (e.target.name) {
        case "foods":
          setTotal(total + foods);
          setFoods(0);
          break;
        case "clothes":
          setTotal(total + clothes);
          setClothes(0);
          break;
        case "books":
          setTotal(total + books);
          setBooks(0);
          break;
        case "cars":
          setTotal(total + cars);
          setCars(0);
          break;
        case "store":
          setTotal(total + store);
          setStore(0);
          break;
        default :setTotal(0);
      }
    }
  };

  return (
    <>
      <Header editIncome={editIncome} />
      <button
        type="button"
        style={{ float: "right" }}
        className="btn btn-danger mr-3"
      >
        &nbsp;
        {total < 0 && total}
        {total > 0 && -(foods + clothes + books + cars + store)}
        {total === 0 && total}
        &nbsp;DH
      </button>
      <section className="features">
        <section>
          <Statistic total={total} value={total} />
        </section>
        <div className="row">
          <div style={{ width: "80%", margin: "0 auto" }} className="col-lg-6">
            <Expense e={expences} cat={cat} change={handelChange} />
          </div>
          <div style={{ width: "80%", margin: "0 auto" }} className="col-lg-6 ">
            <ChartStatistic chartdata={data} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function Application() {
  return <App />;
}

export default Application;
