import {createGlobalStyle} from "styled-components";


const Indexstyle = createGlobalStyle`

Body{
    margin: 0;
    font-family: sans-serif, system-ui;
}

#root{
    margin: 0;
}

.main_container{
    position: absolute;
        z-index: 10;
        width: 90%;
        margin-left: 0.5%;
}

.background{
    transform: rotate(270deg);
    width: 50%;
    margin-left: 60%;
    margin-top: 5%;
    z-index: 0;
    position: fixed;
}
`

export default Indexstyle;