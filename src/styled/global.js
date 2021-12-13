import styled from "styled-components";

export const Wrapper = styled.section`
    padding: 0.2rem calc((100vw - 1000px) / 2);
    margin: 5px;

`;

export const FlexContainer = styled.section`
    display: flex;
    flex-direction: column;
    
`;

export const Block = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0.5rem calc((100vw - 100%) / 2);
    @media screen and (max-width: 768px) {
        flex-direction: column;
        height: 200px;
    }
`;

export const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: (100%)/3; // 33.33% each
    background-color: #FFFFFF;
  `

export const CircleBox = styled.div`
cursor: pointer;
padding: 10px;
margin: 0 auto;
width: 150px;
height: 150px;
border-radius: 15px;
@media screen and (max-width: 768px) {
    font-size: 35px; 
}
img {
    width: 100%;
    height: 100%;
}

`;

export const CircleContent = styled.span`
font-size: 3em;
text-align: center;
@media screen and (max-width: 768px) {
    font-size: 50px; 
}
`;

export const CircleSnippet = styled.p`
font-size: 16px;
text-align: center;
`;

export const Title = styled.h1`
    text-align: center;
    text-transform: uppercase;
    /* color: #111; */
    font-size: 225px; 
    font-weight: bold; 
    letter-spacing: -1px; 
    line-height: 1; 
    @media screen and (max-width: 768px) {
        font-size: 125px; 
    }
`;

export const Description = styled.p`
    text-transform: lowercase;
    font-size: 2.9em;
    text-align: center;
    margin-top: -80px;
    @media screen and (max-width: 768px) {
        font-size: 35px; 
        margin-top: -40px;
    }
`;