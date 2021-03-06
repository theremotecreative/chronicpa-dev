import React from "react"
import styled from 'styled-components'

import { FaPhone } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaPinterestP } from 'react-icons/fa';

const Footer = () => {

    return(
        <FooterMain>

            <div class="flex-row">
                <div class="flex-col">
                    <p class="footer-title">About Us</p>
                    <p>Chronic Conditions Center is the premier leader in integrated neurometabolic healthcare. We use FDA approved medical procedures for the treatment of peripheral neuropathy, joint pain and metabolic disorders.</p>
                </div>
                <div class="flex-col">
                    <p class="footer-title">Contact Info</p>
                    <p><FaPhone size={24}/>412-595-7332<br/>
                    <FaRegEnvelope size={24}/>info@chronicpa.com<br/>
                    <FaMapMarkerAlt/>1699 Washington Rd.<br/>
                    Suite 401<br/>
                    Pittsburgh, PA 15228</p>
                </div>
                <div class="flex-col">
                    <p class="footer-title">Hours</p>
                    <p>Monday through Thursday<br/>
                    8:00 a.m. to 5:00 p.m.<br/>
                    by appointment only.</p>
                    <p class="footer-title">Follow Us</p>
                    <div class="footer-socials">
                        <a href="https://www.facebook.com/cccpa1" target="_blank"><FaFacebookF size={24}/></a>
                        <a href="https://www.instagram.com/kevinsmithdc" target="_blank"><FaInstagram size={24}/></a>
                        <a href="https://www.youtube.com/c/KevinSmithdc" target="_blank"><FaYoutube size={24}/></a>
                        <a href="https://www.linkedin.com/in/ksmithdc/" target="_blank"><FaLinkedin size={24}/></a>
                        <a href="https://www.pinterest.com/ksmithdc/_saved/" target="_blank"><FaPinterestP size={24}/></a>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <p>?? Copyright 2012 - 2021   |   CHRONIC PA   |   ALL RIGHTS RESERVED</p>
            </div>

        </FooterMain>
    )

}

const FooterMain = styled.footer`
    position: relative;
    padding: 60px 10px 25px;
    border-top: 20px solid #222222;
    background-color: #000000;
    .flex-row {
        max-width: 1180px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        .flex-col {
            width: 33.33%;
            padding-right: 35px;
            p {
                font-family: Roboto;
                font-size: 20px;
                font-weight: 500;
                letter-spacing: 0px;
                font-style: normal;
                color: #fff;
            }
            p.footer-title {
                font-family: "Roboto Slab";
                font-weight: 400;
                line-height: 1.4;
                letter-spacing: 0px;
                font-style: normal;
                color: #fff;
                margin-bottom: 30px;
            }
            svg {
                margin-right: 20px;
                color: #25afb4;
                fill: #25afb4;
            }
        }
    }
    .footer-bottom {
        max-width: 1180px;
        width: 100%;
        margin: 0 auto;
        margin-top: 30px;
        p {
            font-family: Roboto;
            color: #aaaaaa;
            font-size: 14px;
            font-weight: 500;
            text-align: center;
        }
    }
    @media(max-width:1100px) {
        .flex-row {
            max-width: 700px;
            flex-wrap: wrap;
            justify-content: flex-start;
            .flex-col {
                width: 50%;
            }
        }
    }
    @media(max-width:767px) {
        .flex-row {
            justify-content: center;
            .flex-col {
                width: 100%;
                padding-right: 0;
                text-align: center;
            }
        }
    }
`

export default Footer