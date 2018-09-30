import React from 'react'
import styled from 'styled-components'

const BoxContent = styled.div`
    background-color: ${props => props.color};
    min-height: 100vh;
    padding-top: 40vh;
    text-align: center;
`
const ContentTeam = () => (
    <div>
        <BoxContent id='frontend' color="white">
                <h1>Front-End</h1>
                <p>#HelloWorld #Beaver #HelloBeaver #HelloFrontEnd</p>
        </BoxContent>
        <BoxContent id='design' >
            <h1>Design</h1>
            <p>#HelloWorld #Beaver #HelloBeaver #HelloDesign</p>
        </BoxContent>
        <BoxContent id='game' color="white">
            <h1>Game</h1>
            <p>#HelloWorld #Beaver #HelloBeaver #HelloGame</p>
        </BoxContent>
        <BoxContent id='infra'>
            <h1>Infra</h1>
            <p>#HelloWorld #Beaver #HelloBeaver #HelloInfra</p>
        </BoxContent>
    </div>
);

export default ContentTeam