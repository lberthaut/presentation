import { createGlobalStyle } from "styled-components";

const Scolarareaslidestyle = createGlobalStyle`

.scolar_container{
    animation: 1s ease-in-out forwards areaslide; 
}
@keyframes areaslide {
            from{
                left: -80%;
            }
            to{
                left: 12%;
            }
        }

.obtention{
    display: inline-block;
    margin: 0;
}
`

export default Scolarareaslidestyle