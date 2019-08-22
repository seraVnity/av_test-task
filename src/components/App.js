import React from "react";
import ProductList from "./ProductList";
import FiltersLeftColumn from "./FiltersLeftColumn";
import SortOptions from "./SortOptions";

class App extends React.Component {
  state = {
    value: "",
    min: 0,
    max: null,
    sortValue: null
  };

  handleFilter = value => {
    this.setState({ value });
  };

  priceFilter = minPrice => {
    this.setState({
      min: minPrice
    });
  };

  priceFilterMax = maxPrice => {
    this.setState({
      max: maxPrice
    });
  };

  handleSort = sortValue => {
    this.setState({
      sortValue
    });
  };

  render() {
    return (
      <div
        style={{
          background: "#808080",
          background: "-webkit-linear-gradient(to right, #3fada8, #808080)",
          background: "linear-gradient(to right, #3fada8, #808080)"
        }}
      >
        <h1 className="ui center aligned huge header">Доска объявлений</h1>
        <div className="ui container">
          <SortOptions onSort={this.handleSort} />
          <div className="ui horizontal segments">
            <FiltersLeftColumn
              onFilters={this.handleFilter}
              priceFilterMin={this.priceFilter}
              priceFilterMax={this.priceFilterMax}
            />
            <ProductList
              productsListFilter={this.state.value}
              priceFilter={this.state.min}
              priceFilterMax={this.state.max}
              productsSort={this.state.sortValue}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
