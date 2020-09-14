import React from 'react';
import styled from 'styled-components';

const CloseIconWrapper = styled.svg`
    width: 100%;
    height: 100%;
`;

export const CloseIcon = () => {
    return (
     <CloseIconWrapper aria-hidden="true">
            <line x1="0.880745" y1="0.673653" x2="23.8263" y2="23.6192" stroke="black"/>
            <line x1="0.646447" y1="23.592" x2="23.592" y2="0.646446" stroke="black"/>
    </CloseIconWrapper>
    )
}
