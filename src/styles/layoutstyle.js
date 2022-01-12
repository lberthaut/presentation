import { createGlobalStyle } from "styled-components";

const Layoutstyle = createGlobalStyle`

    .layout{
        position: relative;
        width: 13%;
        position: fixed;
        bottom: 0;
        top: 0;
        background: #d9edf7;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        display: flex;
        flex-direction: column;
        align-items: center;

    }

    .userframe{
        width: 8vw;
        height: 8vw;
        border-radius: 50%;
        border: solid 1px #a2a2a2;
        overflow: hidden;
        margin-top: 10%;
    }

    .portrait{
        width: 100%;
    }

    .informations{
        margin-top: 10%;
    }

    .infos{
        font-size: 1.1vw;
        text-align: center;
        margin: 5% 0% 0% 0%
    }

    .mail{
        margin-top: 320%;
        display:inline-block;
        padding:0.6em 1.2em;
        border-radius:2em;
        border: none;
        text-decoration:none;
        color:#00000;
        background-color:#bde3f7;
        text-align:center;
        animation:bouncy 5s infinite linear;
        position: relative;
        cursor: pointer;
    }
    @keyframes bouncy {
        0%{
            top:0em;
            background-color:#bde3f7;
            }
        40%{
            top:0em;
            background-color:#bde3f7;
            }
        43%{
            top:-0.9em;
            background-color: #a8dbf4;
            }
        46%{
            top:0em;
            background-color:#bde3f7;
            }
        48%{
            top:-0.4em;
            background-color: #b1def5;
            }
        50%{
            top:0em;
            background-color:#bde3f7;
            }
        100%{
            top:0em;
            background-color:#bde3f7;
            }
}

.octopus{
    width: 95%;
    height: 12%;
    position: absolute;
    bottom: 0;
}
    
`;

export default Layoutstyle;
