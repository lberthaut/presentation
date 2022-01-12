import { createGlobalStyle } from "styled-components";

const Areasslidestyle = createGlobalStyle`
    .container{
        width: 70%;
        box-shadow: -10px -7px 76px rgba(0, 0, 0, 0.3)  ; 
        border-radius: 5px;
        position: absolute;
        animation: 2s ease-in-out forwards areaslide; 
        z-index: -2;
        margin-top: 3%;
        background-color: white;

        @keyframes areaslide {
            from{
                left: -80%;
            }
            to{
                left: 11%;
            }
        }
    }
    `

    export default Areasslidestyle;