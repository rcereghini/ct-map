import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import './Map.css'

const AnyReactComponent = ({ text }) => <div>{ text }</div>;

export default class Map extends Component {
  static defaultProps = {
    center: { lat: 33.5154665, lng: -112.0665024 },
    zoom: 11
  }

render() {
    return (
      <div className='google-map' style={{height: '70vh', width: '80%'}} >
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo' }}
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }>
          <AnyReactComponent
            lat={ 40.7473310 }
            lng={ -73.8517440 }
            text={ '' }
          />
        </GoogleMapReact>
      </div>
    )
  }
}
