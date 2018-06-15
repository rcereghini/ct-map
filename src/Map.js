import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import './Map.css'

const justClosed = [
  {
    lat: 33.5154665,
    lng: -112.0665024,
  },
  {
    lat: 33.5319053,
    lng: -111.9270854,
  },
  {
    lat: 33.5141599,
    lng: -112.0381503,
  },
  {
    lat: 33.4820945,
    lng: -112.0827823,
  },
  {
    lat: 33.4397042,
    lng: -112.0951419,
  },
  {
    lat: 33.4222265,
    lng: -112.0505099,
  }
]

const AnyReactComponent = ({ text }) => <div>{ text }</div>;

export default class Map extends Component {
  static defaultProps = {
    center: { lat: 33.5154665, lng: -112.0665024 },
    zoom: 11
  }

render() {
    return (
      <div className='google-map' style={{height: '100%', width: '70%'}} >
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo' }}
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }>
          <div className="whiteBox">Recently Closed Deals</div>
          <AnyReactComponent
            lat={ justClosed[0].lat }
            lng={ justClosed[0].lng }
            text={ <img width="30px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Map_marker.svg/390px-Map_marker.svg.png"/> }
          />
          <AnyReactComponent
            lat={ justClosed[1].lat }
            lng={ justClosed[1].lng }
            text={ <img width="30px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Map_marker.svg/390px-Map_marker.svg.png"/> }
          />
          <AnyReactComponent
            lat={ justClosed[2].lat }
            lng={ justClosed[2].lng }
            text={ <img width="30px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Map_marker.svg/390px-Map_marker.svg.png"/> }
          />
          <AnyReactComponent
            lat={ justClosed[3].lat }
            lng={ justClosed[3].lng }
            text={ <img width="30px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Map_marker.svg/390px-Map_marker.svg.png"/> }
          />
          <AnyReactComponent
            lat={ justClosed[4].lat }
            lng={ justClosed[4].lng }
            text={ <img width="30px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Map_marker.svg/390px-Map_marker.svg.png"/> }
          />
          <AnyReactComponent
            lat={ justClosed[5].lat }
            lng={ justClosed[5].lng }
            text={ <img width="30px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Map_marker.svg/390px-Map_marker.svg.png"/> }
          />
        </GoogleMapReact>
      </div>
    )
  }
}
