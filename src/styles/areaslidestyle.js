import { createGlobalStyle } from "styled-components";

const Areaslidestyle = createGlobalStyle`
    .container{
        width: 70%;
        box-shadow: 5px -4px 17px 3px rgba(0,0,0,0.9);
        border-radius: 3px;
        position: absolute;
        animation: 2s ease-in-out forwards areaslide; 
        z-index: -2;
        margin-top: 3%;
        background-color: white;

        @keyframes areaslide {
            from{
                left: -680px;
            }
            to{
                left: 360px;
            }
        }
    }

    .expprotitle{
        margin-left: 3%;
    }
`;
export default Areaslidestyle;
