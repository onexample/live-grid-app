import React, { FC, useState } from 'react';
import styled from '@emotion/styled';
import { Matrix } from '../Matrix';
import { getNextMatrix, getRandomMatrix } from '../../services/matrix-service';
import { useInterval } from './useInterval';

export interface TickContainerProps {
    dimension?: number;
}

export const TickContainer: FC<TickContainerProps> = ({ dimension = 50 }) => {
    const [data, setData] = useState(getRandomMatrix(dimension));

    const nextGen = () => setData(getNextMatrix(data));

    useInterval(nextGen, 200);

    const TickContainerWrapper = styled.div`
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `;

    return (
        <TickContainerWrapper>
            <Matrix data={data} />
        </TickContainerWrapper>
    );
};
