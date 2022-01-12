import {createGlobalStyle} from "styled-components";


const Indexstyle = createGlobalStyle`

Body{
    margin: 0;
    font-family: sans-serif, system-ui;
}

#root{
    margin: 0;
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