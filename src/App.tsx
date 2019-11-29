import React, { FC } from 'react';
import { Matrix } from './components/Matrix';
import styled from '@emotion/styled';

export const App: FC = () => {
    const AppContainer = styled.div`
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    return (
        <AppContainer>
            <Matrix />
        </AppContainer>
    );
};
