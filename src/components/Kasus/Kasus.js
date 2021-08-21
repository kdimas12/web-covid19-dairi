import './Kasus.css';
import { FaSadCry, FaSadTear, FaSmile, FaClinicMedical } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';

const Kasus = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetchDatas();
  }, []);

  async function fetchDatas() {
    const req = await fetch('https://api.kawalcorona.com/indonesia');
    const res = await req.json();
    console.log(res);
    setDatas(res);
  }
  return (
    <div className="container px-6 py-4 mx-auto">
      <div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
          <div className="p-3 mr-4 bg-blue-500 text-white rounded-full">
            <FaSadTear />
          </div>
          <div className="text-left">
            <p className="text-sm font-normal text-gray-900">Total Positif</p>
            <p className="text-md font-medium text-gray-800">{datas.positif}</p>
          </div>
        </div>

        <div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
          <div className="p-3 mr-4 bg-blue-500 text-white rounded-full">
            <FaSmile />
          </div>
          <div className="text-left">
            <p className="text-sm font-normal text-gray-900">Total Sembuh</p>
            <p className="text-md font-medium text-gray-800">{datas.sembuh}</p>
          </div>
        </div>

        <div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
          <div className="p-3 mr-4 bg-blue-500 text-white rounded-full">
            <FaClinicMedical />
          </div>
          <div className="text-left">
            <p className="text-sm font-normal text-gray-900">Dalam Perawatan</p>
            <p className="text-md font-medium text-gray-800">{datas.dirawat}</p>
          </div>
        </div>

        <div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
          <div className="p-3 mr-4 bg-blue-500 text-white rounded-full">
            <FaSadCry />
          </div>
          <div className="text-left">
            <p className="text-sm font-normal text-gray-900">Meninggal</p>
            <p className="text-md font-medium text-gray-800">
              {datas.meninggal}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kasus;
