import React from "react";
import { connect } from "react-redux";
import { fetchProducts, fetchProductsAndSellers } from "../actions";
import SellerHeader from "./SellerHeader";
import ImagesGallery from "./ImagesGallery";
import AddToFavorites from './AddToFavorites';
import {add} from "../util/localStoradge";

class ProductList extends React.Component {

  componentDidMount() {
    this.props.fetchProducts();
  }

  favoriteProduct = (product) => {
    add(product);
  }

  renderList() {
    const filter = this.props.productsListFilter;
    const priceFilter = this.props.priceFilter;
    const priceFilterMax = this.props.priceFilterMax;
    const productsSort = this.props.productsSort;
    return this.props.products
      .filter(product => (!filter ? true : product.category === filter))
      .filter(p => !priceFilter ? true : p.price >= priceFilter)
      .filter(p => !priceFilterMax ? true: p.price <= priceFilterMax)
      .filter(p => {
        if(!productsSort) {
          return true;
        }
        if(productsSort === 'server') {
          return true;
        }
      })
        //filter only favourites
      .map(product => {
        let price;
        if (!product.price) {
          price = "по договоренности";
        } else {
          price = new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB"
          }).format(product.price);
        }
        return (
          <div className="item" style={{position: "relative"}} key={product.id}>
            <div className="content">
              <div className="description">
                <p className="ui black large header">{product.title.toUpperCase()}</p><br />
                <p className="ui grey tiny header">Цена: {price}</p>
                <ImagesGallery pictures={product.pictures} />
              </div>
              <SellerHeader sellerId={product.relationships.seller} />
            </div>
            <AddToFavorites favoriteProduct={this.props.product} />
          </div>
        );
      });
  }

  render() {
    return (
      <div className="ui segment relaxed divided list">{this.renderList()}</div>
    );
  }
}

const mapStateToProps = state => {
  return { products: state.products };
};

export default connect(
  mapStateToProps,
  { fetchProducts }
)(ProductList);
