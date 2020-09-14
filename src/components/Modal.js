import React from 'react';
import styled from 'styled-components';
import { typeScale } from '../utils';
import { PrimaryButton } from './Buttons';
import { CloseIcon } from '../assets';
import { useSpring, animated, config } from 'react-spring';

const ModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    text-align: center;
`;

const GridWrapper = styled.div`
    box-shadow: 0px 5px 16px rgba(0,0,0,0.2);
    background-color: ${props => props.theme.primaryColorInverted};
    width: 550px;
    height: 350px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
    border-radius: 2px;


`;

const CloseModalButton = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    position: absolute;
    right: 20px;
    top: 20px;
    height: 24px;
    width: 24px;
    padding: 0;
    transition: 300ms ease-in-out;
    &:focus {
    outline: 1px solid ${props => props.theme.primaryHoverColor};
    outline-offset: 2px;
    transform: rotate(0.25turn);
    }
    line {
        stroke: ${props => props.theme.primaryColor};
    }
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    padding: 10px 0px 10px 10px;
`;

const Header = styled.h2`
    font-size: ${typeScale.header};
    color: ${props => props.theme.textColorInverted};
`;

const Text = styled.p`
    font-size: ${typeScale.paragraph};
    color: ${props => props.theme.textColorInverted};
`;
 
export const SignupModal = ({ showModal, setShowModal }) => {
    const animation = useSpring({
        opacity: showModal ? 1 : 0,
        transform: showModal ? 'translateY(-50%)' : 'translateY(-200%)',
    })
    return(
        <animated.div style={animation}>
            <GridWrapper>
                <Image src="https://images.unsplash.com/photo-1568547751506-a36973481aad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" alt="" />
                <ModalWrapper>
                    <Header>Sign Up</Header>
                    <Text>Sign up for an account today!</Text>
                    <PrimaryButton onClick={() => setShowModal(!showModal)}>Sign Up</PrimaryButton>
                    <CloseModalButton aria-label="Close modal" onClick={() => setShowModal(!showModal)}>
                        <CloseIcon />
                    </CloseModalButton>
                </ModalWrapper>
            </GridWrapper>
        </animated.div>
    )
}