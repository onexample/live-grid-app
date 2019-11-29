import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Row } from './Row';
import { Cell } from './Cell';
import { getRandomMatrix } from '../services/matrix-service';

export interface SquareProps {
    dimension?: number;
}

export const Matrix: FC<SquareProps> = ({ dimension = 10 }) => {
    const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
    `;

    const matrix = getRandomMatrix(dimension);

    return (
        <Wrapper>
            {matrix.map((row, index) => (
                <Row key={index}>
                    {row.map((val, index) => (
                        <Cell key={index} value={val} />
                    ))}
                </Row>
            ))}
        </Wrapper>
    );
};
