import React from 'react'
import styled from 'styled-components'
import { VscSettingsGear } from "react-icons/vsc"


const GearBg = () => {
  return (
    <Container>
        <div className="icon">
            <VscSettingsGear />
        </div>
        <div className="icon_">
            <VscSettingsGear />
        </div>
    </Container>
  )
}

export default GearBg

const Container = styled.div`

    .icon{
        position: fixed;
        top: 10%;
        right: 22%;
        font-size: 25rem;
        color: #777777ab;
        opacity: 0.1;
    }
    .icon_{
        position: absolute;
        top: 85%;
        left: 22%;
        font-size: 20rem;
        opacity: 0.3;
        color: #0000002f;

        @media screen and (max-width: 985px) {
            top: 95;
            left: 15%;
        }
    }
`