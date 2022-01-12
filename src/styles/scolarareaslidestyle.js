import { createGlobalStyle } from "styled-components";

const Scolarareaslidestyle = createGlobalStyle`

.scolar_container{
    animation: 3s ease-in-out forwards areaslide; 
        z-index: -2;
        margin-top: 50%;
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

`

export default Scolarareaslidestyle