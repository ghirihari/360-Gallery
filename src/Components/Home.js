import React from 'react'
import 'aframe'

import { Menu, Segment, Sidebar } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import VRViewer from './VRViewer'
import Slider from './Slider'
import '../Styles/Home.css';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            image: 'Entrance'
        };
        
        this.data = require('../Data/data.json');
        this.images = Object.values(this.data.images);   
        this.sideBarToggle = this.sideBarToggle.bind(this);
        this.hideSideBar = this.hideSideBar.bind(this);
        this.changeImage = this.changeImage.bind(this);
    }


    sideBarToggle() {
        this.setState(state => ({visible: !state.visible}));
        // console.log('Toggled')
    }

    hideSideBar() {
        if(this.state.visible){
            this.setState(state => ({visible: false}));
            // console.log('Hided');
        }
    }

    changeImage(str){
        this.setState({image:str})
        this.sideBarToggle();
    }

    
    
    render()
    {
    return (
        <div style={{height: '100vh'}} >
            
            <Sidebar.Pushable as={Segment}>
                <Sidebar as={Menu} animation='overlay'icon='labeled' inverted direction='right' vertical visible={this.state.visible}> 
                    {/* SLIDER COMPONENT */}
                    <Slider changeImage={this.changeImage.bind(this)} images = {this.images}/>
                </Sidebar>

                <Sidebar.Pusher onClick={this.hideSideBar}>
                    {/* 360 IMAGE COMPONENT */}
                    <VRViewer data={this.images} image={this.state.image} />
                </Sidebar.Pusher>
            </Sidebar.Pushable>

            {/* SIDEBAR TOGGLER */}
            {!this.state.visible &&
            <div className="top-right btn" onClick={this.sideBarToggle}>
                <FontAwesomeIcon icon={faBars} color="white" size="2x"/>
            </div>
            }

            {/* IMAGE LABEL */}
            <div className="top-left label">
                {this.state.image}
            </div>
        </div>
    )
    }
}

export default Home