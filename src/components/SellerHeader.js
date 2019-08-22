import React from "react";
import { connect } from "react-redux";
import { fetchSeller } from "../actions";

class SellerHeader extends React.Component {
  
  componentDidMount() {
    this.props.fetchSeller(this.props.sellerId);
  }

  render() {
    const { seller } = this.props;
    if (!seller) {
      return null;
    }
    return (
      <div className="header">
        <div className="ui grey small header">
          {seller.name}
        </div>
        <div className="ui grey tiny header">
          Рейтинг: {seller.rating}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state.sellers);
  return {
    seller: state.sellers.find(seller => seller.id === ownProps.sellerId)
  };
};

export default connect(
  mapStateToProps,
  { fetchSeller }
)(SellerHeader);
