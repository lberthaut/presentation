import { createGlobalStyle } from "styled-components";

const Proareaslidestyle = createGlobalStyle`

.pro_container{
    animation: 2s ease-in-out forwards areaslide; 
}
@keyframes areaslide {
            from{
                left: -80%;
            }
            to{
                left: 12%;
            }
        }

    .jobs{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 50%;
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
