import { createGlobalStyle } from "styled-components";

const ProAreaslidestyle = createGlobalStyle`
    .container{
        width: 70%;
        box-shadow: 3px 1px 19px -6px rgba(0,0,0,1);;
        border-radius: 5px;
        position: absolute;
        animation: 2s ease-in-out forwards areaslide; 
        z-index: -2;
        margin-top: 3%;
        background-color: white;

        @keyframes areaslide {
            from{
                left: -50%;
            }
            to{
                left: 15%;
            }
        }
    }

    .expprotitle{
        margin-left: 3%;
        font-size: 16px;
    }

    .container{
        padding-left: 3%;
        padding-bottom: 1%;
        padding-right: 1%;
    }

    .company{
        margin: 0;
        padding-bottom: 0.5%;
        padding-top: 1%;
    }

    .job, .duration, .location, .skills{
        margin: 0;
    }

    .duration{
        font-size: 13px;
    }

    .skills{
        background: linear-gradient(90deg, hsla(0, 0%, 65%, 1) 0%, hsla(0, 1%, 81%, 1) 100%);
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
    }
`;
export default ProAreaslidestyle;
