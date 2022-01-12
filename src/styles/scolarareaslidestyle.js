import { createGlobalStyle } from "styled-components";

const Scolarareaslidestyle = createGlobalStyle`

.scolar_container{
    animation: 2s ease-in-out forwards areaslide; 
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

.obtention{
    display: inline-block;
    margin: 0;
}
`

export default Scolarareaslidestyle