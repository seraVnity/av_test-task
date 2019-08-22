import React from 'react';

class ImagesGallery extends React.Component {  
  
  renderImages() {
    return this.props.pictures.map((picture) => {
      return (
        <img className="ui image" key={picture.title} src={picture} />
      );
    });
  }
  render() {
    return (
      <div className="ui tiny images">
        {this.renderImages()}
      </div>
    );
  }
}

export default ImagesGallery;


          // {/* <img className="ui medium centered image" src={picture} /> */}
          // {/* <img className="ui image" src={picture} /> */}