import {createGlobalStyle} from "styled-components";


const Layoutstyle = createGlobalStyle`

    .layout{
        position: relative;
        width: 16%;
        position: fixed;
        bottom: 0;
        top: 0;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }

    .userframe{
        width: 13vw;
        height: 13vw;
        border-radius: 50%;
        border: solid 1px black;
        overflow: hidden;
        margin: auto;
        margin-top: 5%;
    }

    .portrait{
        width: 100%;
    }

    .background{
        z-index: -1;
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
    }

`

export default Layoutstyle;