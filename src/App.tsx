import React, { FC } from 'react';
import styled from '@emotion/styled';
import { TickContainer } from './components/TickContainer';

export const App: FC = () => {
    const AppContainer = styled.div`
        height: 100%;
        display: flex;
        flex-direction: column;
    `;
    return (
        <AppContainer>
            <TickContainer />
        </AppContainer>
    );
};
