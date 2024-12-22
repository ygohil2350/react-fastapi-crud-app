import { Box, Tab, Tabs } from '@mui/material';
import React from 'react';
import CrudDataTable from './components/CrudDataTable';

function App() {
  const tabs = [
    {
      label: 'Item One',
      index: 0,
      children: <CrudDataTable />,
    },
    {
      label: 'Item Two',
      index: 1,
      children: 'Item Two',
    },
    {
      label: 'Item Three',
      index: 2,
      children: 'Item Three',
    },
  ];
  const [value, setValue] = React.useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: 'background.paper',
        display: 'flex',
        height: 224,
      }}
    >
      <Box sx={{ borderRight: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} orientation="vertical">
          {tabs.map((item) => (
            <Tab
              label={item.label}
              id={`simple-tab-${item.index}`}
              key={`simple-tab-${item.index}`}
              aria-controls={`simple-tabpanel-${item.index}`}
            />
          ))}
        </Tabs>
      </Box>
      {tabs.map((item) => (
        <div
          role="tabpanel"
          hidden={value !== item.index}
          id={`simple-tabpanel-${item.index}`}
          aria-labelledby={`simple-tab-${item.index}`}
          key={`simple-tabpanel-${item.index}`}
        >
          {value === item.index && <Box sx={{ p: 3 }}>{item.children}</Box>}
        </div>
      ))}
    </Box>
  );
}

export default App;
