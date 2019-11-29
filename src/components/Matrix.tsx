import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Row } from './Row';
import { Cell } from './Cell';

export interface SquareProps {
    data: Array<Array<number>>;
}

export const Matrix: FC<SquareProps> = ({ data }) => {
    const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
    `;

    return (
        <Wrapper>
            {data.map((row, index) => (
                <Row key={index}>
                    {row.map((val, index) => (
                        <Cell key={index} value={val} />
                    ))}
                </Row>
            ))}
        </Wrapper>
    );
};
