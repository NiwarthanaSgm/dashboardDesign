import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ScheduleData from './ScheduleData';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Meetings() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '80%'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Schedules" {...a11yProps(0)} />
          <Tab label="Reschedules" {...a11yProps(1)} />
          <Tab label="Completed" {...a11yProps(2)} />
          <Tab label="Cancelled" {...a11yProps(3)} />
          <Tab label="Stared" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ScheduleData/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ScheduleData/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <ScheduleData/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <ScheduleData/>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <ScheduleData/>
      </TabPanel>
    </Box>
  );
}