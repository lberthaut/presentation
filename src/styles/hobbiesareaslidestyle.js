import { createGlobalStyle } from "styled-components";

const Hobbiesareaslidestyle = createGlobalStyle`

.hobbies_container{
    animation: 3s ease-in-out forwards areaslide; 
}
@keyframes areaslide {
            from{
                left: -80%;
            }
            to{
                left: 12%;
            }
        }
`

export default Hobbiesareaslidestyle;