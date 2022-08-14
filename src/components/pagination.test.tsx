import React, { useState } from 'react';
import { render } from '@testing-library/react';
import Pagination from './pagination';

test('Clicking pagination next should change the page value to 2', async () => {
    const TestPaginationComponent = () => {
        const [page, setPage] = useState(0);

        return <Pagination page={page} paginationCallback={setPage} />;
    };

    const { getByTestId } = render(<TestPaginationComponent />);
    expect(getByTestId('pagination-value-button').textContent).toEqual('1');

    // Not Complete
});
