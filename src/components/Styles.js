import styled, {theme} from 'styled-components';


export const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 4px 8px 0 rgba(106, 90, 205);
    transition: 0.3s;
    border-radius: 5px;
    color:  ${({ theme }) => theme.colors.base};
    padding: 20px;
    margin-top: 150px;
    margin-left: 50px;
    text-align: center;
    font-weight: bold;
    font-family: "Geneva";
    display: inline-block;
    font-size: 16px;



`;
export const HS2 = styled.h3`

    text-align: center;
    font-family: "Geneva";
    color: ${({ theme }) => theme.colors.third};


    margin-top: 60px;
    transition: 0.3s;
    border-radius: 5px;
`



export const DivSC = styled.div`
    background-color: ${props => props.theme.secondary || "purple"};
    width: 400px;
    height: 300px;
    color: white;
    `;

const Div1 = styled.div`
    color: ${props => props.theme.colors.primary};

    color: ${({ theme }) => theme.colors.primary};

    background-color: ${props => props.bgc || "orange"};

`;

export const HS1 = styled.h1`

    text-align: center;
    font-family: "Geneva";
    color: ${({ theme }) => theme.colors.accent};
    `;

export const Paper = styled.div`
    
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    font-family: "Geneva";
    border-radius: 5px; /* 5px rounded corners */
    background-image: linear-gradient(to bottom right, #2e294e, #820263);
    height: ${props => props.height || "700px"};
    width: ${props => props.width || "500px"};
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
    `;


//scpt//
export const Nav = styled.div`
    color:'#FCCD04';
    background-color: transparent;
    

`;

