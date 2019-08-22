import React from 'react';
import ProductList from './ProductList';

class SortOptions extends React.Component {

  //as returned from the server
  //ascending
  //favourites

  handleChange = e => {
    this.props.onSort(e.target.value);
  }

//   sortFunc = (products) =>{
//   let sort = this.props.onSort;
//   if(sort === "ascending") {
//     products.sort((p1, p2) => p1-p2);
//   }
// }



  render () {
    return (
      <div className="ui segment">
        <div className="ui field">
            <select
              name="categories"
              className="ui fluid dropdown"
              onChange={this.handleChange}
            >
              <option value="server">По популярности</option>
              <option value="ascending">По возрастанию</option>
              <option value="favourites">Избранное</option>
            </select>
          </div>

      </div>

    )
  }
}

export default SortOptions;