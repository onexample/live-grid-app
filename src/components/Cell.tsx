import React, { FC } from 'react';
import styled from '@emotion/styled';

export interface CellProps {
    width?: number;
    height?: number;
    value: number;
}

export const Cell: FC<CellProps> = ({ height = 16, width = 16, value }) => {
    const Element = styled.div(() => ({
        width,
        height,
        borderTop: 1,
        borderLeft: 1,
        borderWidth: 1,
        borderColor: '#B9B9B9',
        borderStyle: 'solid',
        background: value ? '#000000' : '#FFFFFF',
    }));

    return <Element />;
};
