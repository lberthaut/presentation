import { createGlobalStyle } from "styled-components";

const ProAreaslidestyle = createGlobalStyle`

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
export default ProAreaslidestyle;
