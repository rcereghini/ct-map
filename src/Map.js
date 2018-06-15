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
      <div className='google-map' style={{height: '70vh', width: '70%'}} >
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo' }}
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }>
          <AnyReactComponent
            lat={ 33.5154665 }
            lng={ -112.0665024 }
            text={ <img width="20px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Map_marker.svg/390px-Map_marker.svg.png"/> }
          />
          <AnyReactComponent
            lat={ 33.4502168 }
            lng={ -111.9248709 }
            text={ <img width="20px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Map_marker.svg/390px-Map_marker.svg.png"/> }
          />
          <AnyReactComponent
            lat={ 33.473703 }
            lng={ -111.9494185 }
            text={ <img width="20px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Map_marker.svg/390px-Map_marker.svg.png"/> }
          />
          <AnyReactComponent
            lat={ 33.4739894 }
            lng={ -111.8596396 }
            text={ <img width="20px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Map_marker.svg/390px-Map_marker.svg.png"/> }
          />
          <AnyReactComponent
            lat={ 33.4407632 }
            lng={ -111.8661627 }
            text={ <img width="20px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Map_marker.svg/390px-Map_marker.svg.png"/> }
          />
          <AnyReactComponent
            lat={ 33.4295894 }
            lng={ -111.9044432 }
            text={ <img width="20px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Map_marker.svg/390px-Map_marker.svg.png"/> }
          />
        </GoogleMapReact>
      </div>
    )
  }
}
