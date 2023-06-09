/* eslint-disable object-curly-newline */
import React, { useEffect, useMemo, useState } from 'react';
import cn from 'classnames';
import { DataGrid } from '@mui/x-data-grid';
import { Avatar } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../app/hooks';
import { actions as productsActions } from '../../../features/products';
import { loadProducts, removeProduct } from '../../../api/products';
import './ProductsTable.scss';
import { Loader } from '../../Loader';

type Props = {
  query: string;
};

export const ProductsTable: React.FC<Props> = React.memo(({ query }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [productToRemove, setProductToRemove] = useState<number | null>(null);
  const [itemsLoaded, setItemsLoaded] = useState<number | null>(null);
  const [productsTotal, setProductTotal] = useState(0);
  const dispatch = useDispatch();
  const products = useAppSelector((state) => state.products);

  const handleLoad = (limit = 30, skip = 0) => {
    loadProducts(limit, skip)
      .then((res) => {
        dispatch(productsActions.addMultiple(res.products));
        setItemsLoaded((current) => Number(current) + res.limit);
        setProductTotal(res.total);
      })
      .catch(() => {
        setErrorMessage('Oooops, something went wrong...');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (!products.length) {
      handleLoad();
    } else {
      setIsLoading(false);
      setItemsLoaded(products.length);
    }
  }, []);

  const handleRemove = (productId: number) => {
    setProductToRemove(productId);

    removeProduct(productId)
      .then((res) => {
        dispatch(productsActions.remove(res.id));
      })
      .catch(() => {
        // eslint-disable-next-line no-alert
        alert('Something went wrong. Try to delete again !');
      })
      .finally(() => {
        setProductToRemove(null);
      });
  };

  const handleLoadMore = () => {
    setIsLoading(true);

    handleLoad(30, Number(itemsLoaded));
  };

  const columns = useMemo(
    () => [
      {
        field: 'id',
        headerName: 'ID',
        width: 85,
        headerClassName: 'products-table__table-head',
      },
      {
        field: 'title',
        headerName: 'Title',
        width: 150,
        headerClassName: 'products-table__table-head',
      },
      {
        field: 'description',
        headerName: 'Description',
        width: 350,
        headerClassName: 'products-table__table-head',
      },
      {
        field: 'price',
        headerName: 'Price',
        width: 105,
        headerClassName: 'products-table__table-head',
      },
      {
        field: 'thumbnail',
        headerName: 'Photo',
        width: 80,
        headerClassName: 'products-table__table-head',
        renderCell: (params: { row: { thumbnail: string | undefined } }) => (
          <Avatar src={params.row.thumbnail} />
        ),
        sortable: false,
        filterable: false,
      },
      {
        field: 'rating',
        headerName: 'Rating',
        width: 110,
        headerClassName: 'products-table__table-head',
      },
      {
        field: 'stock',
        headerName: 'Stock',
        width: 110,
        headerClassName: 'products-table__table-head',
      },
      {
        field: 'category',
        headerName: 'Category',
        width: 130,
        headerClassName: 'products-table__table-head',
      },
      {
        field: 'remove',
        headerName: '',
        width: 80,
        headerClassName: 'products-table__table-head',
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        renderCell: (params: { row: { id: number } }) => (
          <input
            type="button"
            className={cn('products-table__delete', {
              'products-table__delete--active':
                params.row.id === productToRemove,
            })}
            onClick={() => handleRemove(params.row.id)}
          />
        ),
      },
    ],
    [productToRemove],
  );

  const productsToShow = useMemo(() => {
    return products.filter((product) => {
      const normTitle = product.title.toLowerCase();
      const normCategory = product.category.toLowerCase();
      const normQuery = query.toLowerCase();

      return normTitle.includes(normQuery) || normCategory.includes(normQuery);
    });
  }, [products, query, itemsLoaded]);

  return (
    <>
      {errorMessage && (
        <div className="products-table__error-message">{errorMessage}</div>
      )}
      {itemsLoaded && !errorMessage && (
        <div className="products-table">
          <DataGrid
            autoHeight
            sx={{
              color: '#fff',
              border: 'none',
              '.MuiDataGrid-columnSeparator': {
                display: 'none',
              },
            }}
            rows={productsToShow}
            columns={columns}
            hideFooterPagination
            hideFooterSelectedRowCount
          />
        </div>
      )}
      {isLoading && <Loader />}
      {itemsLoaded !== productsTotal && (
        <button
          type="button"
          className={cn('btn products-table__load-more', {
            'products-table__load-more--loading': isLoading,
          })}
          onClick={() => handleLoadMore()}
        >
          {errorMessage ? 'Try again' : 'Load more'}
        </button>
      )}
    </>
  );
});
