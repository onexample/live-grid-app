import React, { FC } from 'react';
import styled from '@emotion/styled';

export const Row: FC<{}> = props => {
    const RowDiv = styled.div`
        display: flex;
        flex-direction: row;
    `;

    return <RowDiv {...props} />;
};
