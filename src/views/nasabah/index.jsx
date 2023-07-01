/* eslint-disable */
import React, { useState, useEffect } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { Table } from 'antd';
import { getDataNasabah } from 'global/api';
import Loader from 'ui-component/Loader';
import '../style.scss'

const FormNasabah = () => {
  const [nasabah, setNasabah] = useState()
  const [page, setPage] = useState(1)
  const [keyword, setKeyword] = useState(null)
  const [loader, setLoader] = useState(false)

  const getData = async () => {
    setLoader(true)
    const response = await getDataNasabah('', page, keyword)
    setNasabah(response.data)
    setLoader(false)
  }
  
  const autoNumbering = (text, record, index) => {
    return (
      <>{ index + 1 }</>
    )
  }

  const columns = [
    {
      title: 'No',
      dataIndex: 'no',
      key: 'no',
      align: 'center',
      render: autoNumbering
    },
    {
      title: 'Nomor Induk Nasabah',
      dataIndex: 'nomor_induk_nasabah',
      key: 'nomor_induk_nasabah',
      align: 'center'
    },
    {
      title: 'Nama',
      dataIndex: 'nama',
      key: 'nama',
      align: 'center'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      align: 'center'
    },
    {
      title: 'Nomor Telepon',
      dataIndex: 'telepon',
      key: 'telepon',
      align: 'center'
    },
    {
      title: 'Alamat',
      dataIndex: 'alamat',
      key: 'alamat',
      align: 'center'
    },
  ];

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      {loader ? (
        <Loader />
      ) : null}

      <MainCard title="Sample Card">
        <Table bordered dataSource={nasabah?.data ? nasabah?.data : []} columns={columns} />
      </MainCard>
    </>
  );
};

export default FormNasabah;
