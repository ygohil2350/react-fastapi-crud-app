import { Add, Delete, Edit } from '@mui/icons-material';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import {
  GridColDef,
  DataGrid,
  GridToolbar,
  GridActionsCellItem,
  GridRowId,
  GridFooterContainer,
  GridFooter,
} from '@mui/x-data-grid';
import { useEffect, useState } from 'react';

function CrudDataTable() {
  const columns: GridColDef<(typeof rows)[number]>[] = [
    {
      field: 'name',
      headerName: 'Item Name',
    },
    {
      field: 'price',
      headerName: 'Price',
      type: 'number',
    },
    {
      field: 'description',
      headerName: 'Description',
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<Edit />}
            label="Edit"
            key="Edit"
            onClick={() => handleEditClick(id)}
          />,
          <GridActionsCellItem
            icon={<Delete />}
            label="Delete"
            key="Delete"
            onClick={() => handleDeleteClick(id)}
          />,
        ];
      },
    },
  ];
  const [rows, setRows] = useState<
    { id: string; name: string; price: number; description: string }[]
  >([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const formInitialState = {
    name: '',
    price: '',
    description: '',
  };
  const [formData, setFormData] = useState<{
    name: string;
    price: string;
    description: string;
    id?: GridRowId;
  }>(formInitialState);
  const CustomFooter = () => {
    return (
      <GridFooterContainer>
        <Box>
          <Button onClick={handleDialogOpen} startIcon={<Add />}>
            Add Item
          </Button>
        </Box>
        <GridFooter />
      </GridFooterContainer>
    );
  };
  const handleEditClick = (id: GridRowId) => {
    // setFormData({ id });
    console.debug(id);
    setIsEdit(true);
    setOpenDialog(true);
  };
  const handleDeleteClick = (id: GridRowId) => {
    console.debug(id);
  };
  const handleDialogOpen = () => {
    setFormData(formInitialState);
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setFormData(formInitialState);
    setOpenDialog(false);
  };
  const handleSubmit = () => {
    console.debug(formData);
  };
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/items');
      const result = await response.json();
      setRows(result);
    } catch (error) {
      console.error(error);
    }
  };
  const handleChange = (event: any) => {
    setFormData((pre) => ({ ...pre, [event.target.name]: event.target.value }));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Box sx={{ height: 400, width: '100vh' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        slots={{ toolbar: GridToolbar, footer: CustomFooter }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Add Item</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1 } }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              variant="standard"
              label="Name"
              name="name"
              onChange={handleChange}
            />
            <TextField
              id="standard-basic"
              variant="standard"
              label="Price"
              name="price"
              onChange={handleChange}
            />
            <TextField
              id="standard-basic"
              variant="standard"
              label="Description"
              name="description"
              fullWidth
              onChange={handleChange}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSubmit}>{isEdit ? 'Update' : 'Save'}</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default CrudDataTable;