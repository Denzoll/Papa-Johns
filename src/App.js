import React from "react";

import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
import Skeleton from "./components/PizzaBlock/skeleton";
// import Skeleton from "./components/PizzaBlock/skeleton";


function App() {

  const [items, setItems] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {


    fetch('https://6421879286992901b2b5ca52.mockapi.io/items').then((res) => {
      return res.json();
    }).then((arr) => {
      setItems(arr)
      setIsLoading(false)
    })
  }, [])
  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
          {
            isLoading 
            ? [...new Array (8)].map((_, index) => <Skeleton  key={index} />) :
            items.map((obj) => (
              <PizzaBlock {...obj} key={obj.id}
                // title={obj.title}
                // price={obj.price + "₽"}
                // size={obj.sizes}
                // imageUrl={obj.imageUrl}
                // sizes={obj.sizes}
                // types={obj.types}
              />
            ))
          }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
