import React from 'react';
import styled from 'styled-components';

const CafecitoContainer = styled.div`
        position: fixed;
        bottom: 0;
        right: 0;
        z-index: 4;
        margin-right: 10px;
`

function Cafecito() {
    return <CafecitoContainer className='cafecito'>
            <a href='https://cafecito.app/bocadesapo' rel="noreferrer" target='_blank'><img srcset='https://cdn.cafecito.app/imgs/buttons/button_5.png 1x, https://cdn.cafecito.app/imgs/buttons/button_5_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_5_3.75x.png 3.75x' src='https://cdn.cafecito.app/imgs/buttons/button_5.png' alt='Invitame un café en cafecito.app' /></a>
        </CafecitoContainer> 
        
}

export default Cafecito;