import { Button, IconButton } from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';

export interface PaginationProps {
    page: number;
    paginationCallback: (page: number) => void;
}

const Pagination = ({
    page,
    paginationCallback,
}: PaginationProps): JSX.Element => {
    return (
        <div style={{ marginTop: '1rem' }}>
            <IconButton
                data-testid="pagination-prev-button"
                colorScheme="pink"
                aria-label="Prev Page"
                size="lg"
                roundedLeft={16}
                roundedRight={0}
                icon={<ArrowLeftIcon />}
                disabled={page === 0}
                onClick={() => {
                    setTimeout(() => {
                        paginationCallback(page - 1);
                    }, 0);
                }}
            />
            <Button
                data-testid="pagination-value-button"
                width={20}
                colorScheme="gray"
                size="lg"
                disabled={true}
            >
                {page + 1}
            </Button>
            <IconButton
                data-testid="pagination-next-button"
                colorScheme="pink"
                aria-label="Next Page"
                size="lg"
                roundedLeft={0}
                roundedRight={16}
                icon={<ArrowRightIcon />}
                onClick={() => {
                    setTimeout(() => {
                        paginationCallback(page + 1);
                    }, 0);
                }}
            />
        </div>
    );
};

export default Pagination;
