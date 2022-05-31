import React from 'react';
import styled from "styled-components";

const RedesContainer = styled.div `
    display: flex;
    position: fixed;
    bottom: 0;
    z-index: 3;

    flex-direction: row;
    background-color:${props =>{if(props.mobile){if (props.show){return "rgb(0,0,0)"}else{return "#088199"}}else{return "rgb(0,0,0)"}}};
    justify-content: space-between;
    border-radius: 0 25px  0 0;
    width: 45%;
    transition: all 0.5s;
    transform: translateX(${props =>{if(props.mobile){if (props.show){return "0px"}else{return "-40px"}}else{return "0px"}}});
    @media screen and (max-width: 1020px) {
        flex-direction: column;
        width: max-content;
        z-index: 3;
        padding-top: 12px;
        border-radius: ${props =>{if (props.show){return "0 25px 0 0"}else{return "0 20px 20px 20px "}}};
    }

`

const RedesIcon = styled.img `
    justify-content: baseline;
    z-index: 1;
    width: 40px;
    margin-right: 1px;
    padding-right: 10px;
    height: auto;
    transition: all 0.2s;
    @media screen and (min-width: 1020px) { 
   &:hover{
    cursor: pointer;
    z-index: 1;
    border-collapse: collapse;
    transform: rotate(30deg);
    transform:translate(-10px,-10px)
   }}
`



class NavRedes extends React.Component {
    constructor(props){
        super(props)
        this.state={visible:false,matches1020: window.matchMedia("(max-width: 1020px)").matches}
    }

    componentDidMount() {
        const handler = e => this.setState({matches1020: e.matches,visible:false});
        window.matchMedia("(max-width: 1020px)").addEventListener('change', handler);
      }

    componentDidUpdate(prevProps,prevState){
        if (!prevState.visible && this.state.visible){
            setTimeout(() => {
                this.setState({visible:false})
            }, 2500);
        }
    }

    render() { 
        return (
            <RedesContainer mobile={this.state.matches1020} show={this.state.visible} onClick={()=>{this.setState({visible:!this.state.visible})}}> 
                    <RedesIcon alt="facebookIcon" src={process.env.PUBLIC_URL+'/icons/facebookicon.png'}    onClick={()=>{if (this.state.visible){window.open("https://www.facebook.com/BOCADESAPO-113630765327065/?fref=ts", "_blank")}}}/>
                    <RedesIcon alt="instagramIcon"  src={process.env.PUBLIC_URL+'/icons/instagramicon.png'} onClick={()=>{if (this.state.visible){window.open("http://instagram.com/boca_de_sapo/", "_blank")}}}/>
                    <RedesIcon alt="pinterestIcon"  src={process.env.PUBLIC_URL+'/icons/pinteresticon.png'} onClick={()=>{if (this.state.visible){window.open("http://www.pinterest.com/bocadesapo/", "_blank")}}}/>
                    <RedesIcon alt="twitterIcon" src={process.env.PUBLIC_URL+'/icons/twittericon.png'}      onClick={()=>{if (this.state.visible){window.open("https://twitter.com/BocadSapo", "_blank")}}}/>
                    <RedesIcon alt="spotifyIcon"  src={process.env.PUBLIC_URL+'/icons/spotifyicon.png'}     onClick={()=>{if (this.state.visible){window.open("https://open.spotify.com/show/3cGpRjVYLKGsQOVcy84snX?si=e5a4852b0898414d", "_blank")}}}/>
                    <RedesIcon alt="youtubeIcon"  src={process.env.PUBLIC_URL+'/icons/youtubeicon.png'}     onClick={()=>{if (this.state.visible){window.open("https://www.youtube.com/channel/UCTg_A-oBBP6hSlYoGgGPXdw", "_blank")}}}/>
            </RedesContainer>);
    }
}
 
export default NavRedes;