import React from "react";

class FiltersLeftColumn extends React.Component {
  state = { priceFilterMin: null, priceFilterMax: null };

  handleChange = event => {
    this.props.onFilters(event.target.value);
  };

  onPriceChange = e => {
    this.setState({
      priceFilterMin: e.target.value
    });
    this.props.priceFilterMin(e.target.value);
  };

  onPriceChangeMax = e => {
    this.setState({
      priceFilterMax: e.target.value
    });
    this.props.priceFilterMax(e.target.value);
    console.log(this.props.priceFilterMax);
  };

  render() {
    return (
      <div className="ui segment">
        <div style={{position:'fixed'}}>
          <div className="ui field">
            <select
              name="categories"
              className="ui fluid dropdown"
              onChange={this.handleChange}
            >
              <option value="">По категории</option>
              <option value="immovable">Недвижимость</option>y
              <option value="cameras">Фотоаппараты</option>
              <option value="auto">Автомобили</option>
              <option value="laptops">Ноутбуки</option>
            </select>
          </div>
          <div className="ui form">
            <p
              className="ui grey small header field"
              style={{ marginBottom: "0", marginTop: "1.5em" }}
            >
              Цена:
            </p>
            <div className="two fields">
              <div className="field">
                <div className="ui mini input">
                  <input
                    type="text"
                    name="price"
                    data-min="true"
                    className=""
                    placeholder="от 0"
                    value={this.state.priceFilterMin}
                    onChange={this.onPriceChange}
                  />
                </div>
              </div>
              <span> - </span>
              <div className="field">
                <div className="ui mini input">
                  <input
                    type="text"
                    name="price"
                    data-max="true"
                    className=""
                    placeholder="до 100 тыс. млн."
                    value={this.state.priceFilterMax}
                    onChange={this.onPriceChangeMax}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FiltersLeftColumn;
