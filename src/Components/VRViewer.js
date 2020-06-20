import React from 'react';
import 'aframe'
import { Segment } from 'semantic-ui-react'



class VRViewer extends React.Component {

    constructor(props)
    {
      super(props);
      this.state = {
        loaded:false
      };
      
      this.assets = this.props.data.map((value,index) => 
      {
        // console.log("Loading "+value.name)
        return(
          <img crossOrigin="anonymous" id={value.name} src={value.url} alt={value.name} key={index}/>
        );
     })
    }

    componentDidMount(){
      document.querySelector("a-image").setAttribute("look-at", "[camera]")
    }
    
    render()
    {
    return (
      <Segment>
        <a-scene>
            <a-assets>
              {this.assets}
              <img id="hotspot" 
                crossOrigin="anonymous"
                src="https://cdn.glitch.com/a04a26d3-92af-4a88-9d49-8fcc2c5344a5%2Fhotspots.png?v=1562761623319"
                alt="Hotspot"/>
            </a-assets>
            
            <a-sky src= {'#'+this.props.image} />
            <a-image 
                src="#hotspot"
                position="0.8826060510846503 -0.08739164477592737 -0.48291200668298667"
            >
            </a-image>
            {/* <a-image 
              src="#hotspot"  
              scale="10 10" 
              look-at="[camera]" 
              // visible="false" 
              class="boxes" 
              position="105.91272613015803 -10.486997373111285 -57.9494408019584" 
              material="transparent:true;opacity:0.7;" 
              hotspot-listener="" 
            geometry="">

            </a-image>
 */}
        </a-scene>
      </Segment>
    );
    }
}
  
  export default VRViewer;
