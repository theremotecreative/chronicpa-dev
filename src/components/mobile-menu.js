import React, { Component } from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import { FaChevronDown } from 'react-icons/fa'

class MobileMenu extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            aboutOpen: false,
            conditionsOpen: false,
            resourcesOpen: false,
            servicesOpen: false
        };
    }
    
    toggleAboutMenu() {
        this.setState({ aboutOpen: !this.state.aboutOpen });
        this.setState({ conditionsOpen: false });
        this.setState({ resourcesOpen: false });
        this.setState({ servicesOpen: false });
    }

    toggleConditionsMenu() {
        this.setState({ aboutOpen: false });
        this.setState({ conditionsOpen: !this.state.conditionsOpen });
        this.setState({ resourcesOpen: false });
        this.setState({ servicesOpen: false });
    }

    toggleResourcesMenu() {
        this.setState({ aboutOpen: false });
        this.setState({ conditionsOpen: false });
        this.setState({ resourcesOpen: !this.state.resourcesOpen });
        this.setState({ servicesOpen: false });
    }

    toggleServicesMenu() {
        this.setState({ aboutOpen: false });
        this.setState({ conditionsOpen: false });
        this.setState({ resourcesOpen: false });
        this.setState({ servicesOpen: !this.state.servicesOpen });
    }

    render() {
        let aboutMenu = "aboutMenu";
        if (this.state.aboutOpen) {
          aboutMenu += ' subMenuOpen';
        }
        let conditionsMenu = "conditionsMenu";
        if (this.state.conditionsOpen) {
          conditionsMenu += ' subMenuOpen';
        }
        let resourcesMenu = "resourcesMenu";
        if (this.state.resourcesOpen) {
          resourcesMenu += ' subMenuOpen';
        }
        let servicesMenu = "servicesMenu";
        if (this.state.servicesOpen) {
          servicesMenu += ' subMenuOpen';
        }
        return (
            <MobileMenuFull id={"mobileMenu"}>      
                <MainMobileMenu id={"mainMobileMenu"}>
                    <ul>
                        <li><Link to={"/history/"}>About Us</Link></li>
                        {/* <li className={aboutMenu} onClick={() => this.toggleAboutMenu()} >
                            <span>About Us</span>
                            <FaChevronDown size={14}/>
                            <ul class="subMenu">
                                <li><Link to={"/history/"}>History</Link></li>
                                <li><Link to={"/team/"}>Team</Link></li>
                            </ul>
                        </li> */}
                        <li className={conditionsMenu} onClick={() => this.toggleConditionsMenu()} >
                            <span>Conditions </span>
                            <FaChevronDown size={14}/>
                            <ul class="subMenu">
                                <li><Link to={"/back-pain/"}>Back Pain</Link></li>
                                <li><Link to={"/neck-pain/"}>Neck Pain</Link></li>
                                <li><Link to={"/knee-pain-v2/"}>Knee Pain</Link></li>
                                <li><Link to={"/peripheral-neuropathy/"}>Peripheral Neuropathy</Link></li>
                                {/* <li><Link to={"/spinal-pain/"}>Spinal Pain</Link></li> */}
                                <li><Link to={"/thyroid-problems/"}>Thyroid Problems</Link></li>
                            </ul>
                        </li>
                        <li className={servicesMenu} onClick={() => this.toggleServicesMenu()} >
                            <span>Services </span>
                            <FaChevronDown size={14}/>
                            <ul class="subMenu">
                                {/* <li><Link to={"/viscosupplementation/"}>Viscosupplementation</Link></li> */}
                                {/* <li><Link to={"/platelet-rich-plasma/"}>Platelet Rich Plasma</Link></li> */}
                                {/* <li><Link to={"/electroanalgesia/"}>Electroanalgesia</Link></li> */}
                                <li><Link to={"/chiropractic/"}>Chiropractic</Link></li>
                                <li><Link to={"/weight-loss/"}>Weight Loss</Link></li>
                                <li><Link to={"/thyroid-restoration/"}>Thyroid Restoration</Link></li>
                                <li><Link to={"/laser/"}>Laser</Link></li>
                                <li><Link to={"/spinal-decompression/"}>Decompression</Link></li>
                                <li><Link to={"/pulsewave-therapy/"}>Pulsewave</Link></li>
                                {/* <li><Link to={"/cord-tissue-matrix/"}>Cord Tissue Matrix</Link></li> */}
                            </ul>
                        </li>
                        <li className={resourcesMenu} onClick={() => this.toggleResourcesMenu()} >
                            <span>Patient Resources </span>
                            <FaChevronDown size={14}/>
                            <ul class="subMenu">
                                <li><Link to={"/new-patients/"}>New Patients</Link></li>
                                <li><Link to={"/tour-of-the-office/"}>Tour of the Office</Link></li>
                                {/* <li><Link to={"/research/"}>Research</Link></li> */}
                            </ul>
                        </li>
                        <li><Link to="/testimonials/"><span>Testimonials</span></Link></li>
                        <li><Link to="/contact/"><span>Contact</span></Link></li>
                    </ul>
                </MainMobileMenu>
            </MobileMenuFull>
        );
    }
}


const MobileMenuFull = styled.div`
    transition: all .5s cubic-bezier(.77,0,.175,1);
    visibility: hidden;
    z-index: 1004;
    padding: 0px;
    @media(max-width:1100px) {
        visibility: visible !important;
        display: block !important;
    }
`

const MainMobileMenu = styled.nav`
    position: relative;
    width: 100%;
    height: 100%;
    > ul {
        list-style: none;
        margin: 0;
        > li {
            font-family: "Roboto Slab";
            font-size: 20px;
            font-weight: bold;
            padding: 0 20px;
            text-align: center;
            color: #4c5166;
            > a {
                color: #4c5166;
                text-decoration: none;
            }
            svg {
                margin-left: 10px;
            }
            &:hover {
                cursor: pointer;
            }
        }
        .subMenu {
            list-style: none;
            margin: 0;
            padding: 0;
            opacity: 0;
            visibility: hidden;
            height: auto;
            max-height: 0;
            overflow: hidden;
            transition: all 0s cubic-bezier(.25,.46,.45,.94);
            transition-duration: .5s;
            li {
                font-family: "Roboto Slab";
                font-size: 16px;
                font-weight: 400;
                letter-spacing: 1px;
                padding: 0 20px;
                text-align: center;
                > a {
                    color: #4c5166;
                    text-decoration: none;
                }
            }
        }
        .aboutMenu,
        .conditionsMenu,
        .resourcesMenu,
        .servicesMenu {
            button {
                position: absolute;
                margin-left: 10px;
                background-color: transparent;
                border: none;
                outline: 0;
                color: #fff;
                margin-top: 5px;
                transition: all 0s cubic-bezier(.25,.46,.45,.94);
                transition-duration: .5s;
                &:hover {
                    cursor: pointer;
                }
            }
            &.subMenuOpen {
                button {
                    transform: rotate(-180deg);
                }
                .subMenu {
                    opacity: 1;
                    visibility: visible;
                    padding: 10px 0;
                    max-height: 260px;
                }
            }
        }
    }
`

export default MobileMenu