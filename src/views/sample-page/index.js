import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';

const SamplePage = () => {
  const apakek = useSelector((state) => state.global.user);

  return (
    <MainCard title="Sample Card">
      <Typography variant="body2">
        {JSON.stringify(apakek)}
      </Typography>
    </MainCard>
  );
};

export default SamplePage;
