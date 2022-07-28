import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Gothic+A1&family=Roboto&family=Rubik+Mono+One&family=Ubuntu&display=swap");
    * {
        margin: 0px;
        padding: 0px;
        list-style: none;
        box-sizing: border-box;
    }

    :root {
        --black : #000;
        --grey-0: #0B0D0D;
        --grey-1: #212529;
        --grey-2: #495057;
        --grey-3: #868E96;
        --grey-4: #ADB5BD;
        --grey-5: #CED4D4;
        --grey-6: #DEE2E6;
        --grey-7: #E9ECEF;
        --grey-8: #F1F3F5;
        --grey-9: #F8F9FA;
        --grey-10: #FDFDFD;
        --white: #fff;
        
        --error: #CD2B31;

        --success:#18794E;
    }
`;
