import { createGlobalStyle } from "styled-components";

const Proareaslidestyle = createGlobalStyle`

.pro_container{
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

    .company{
        margin: 0;
        padding-top: 1%;
    }

    .job, .duration, .location, .skills{
        margin: 0;
    }

    .duration{
        font-size: 13px;
        margin-bottom: 0.6%;
    }

    .location{
        margin-top: 0.3%;
        margin-bottom: 1%;
    }

    .jobs{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 50%;
    }

    .job{
        background: #d9edf7;
        border-radius: 5px;
        border: 2px solid #bde8f1;
        padding: 0.3% 1% 0.3% 1%;
        color: #377390;
        margin: 0.5% 1% 0.5% 0%;
    }

    .skills{
        background: #d9edf7;
        border-radius: 5px;
        display: inline-block;
        border: 2px solid #bde8f1;
        padding: 0.5% 1% 0.5% 1%;
        line-height: 130%;
    }

    .skill{
        color: #377390;
        margin: 0 auto;
    }
`;
export default Proareaslidestyle;
