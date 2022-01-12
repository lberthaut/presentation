import { createGlobalStyle } from "styled-components";

const Areasslidestyle = createGlobalStyle`

    .container{
        width: 70%;
        box-shadow: -4px 0px 9px 1px rgba(0,0,0,0.75);
        border-radius: 5px;
        position: absolute;
        z-index: 10;
        padding-left: 3%;
        padding-bottom: 1%;
        padding-right: 1%;
        opacity: 0.86;
    }

    .title{
        margin-left: 3%;
        font-size: 16px;
    }

    .lil_title{
        margin: 0;
        padding-top: 1%;
    }

    .line_areas{
        margin: 0;
    }

    .lil_years{
        font-size: 13px;
        margin-bottom: 0.6%;
    }
    
    .location{
        margin-top: 0.3%;
        margin-bottom: 1%;
    }

    .blue_background{
        background: #d9edf7;
        border-radius: 5px;
        border: 2px solid #bde8f1;
        padding: 0.3% 1% 0.3% 1%;
        color: #377390;
        margin: 0.5% 1% 0.5% 0%;
    }
    `

    export default Areasslidestyle;