import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Table from "../components/Table";
import axios from "axios";
import request from "../utils/request";

interface data {
  _id: string;
  accessToken: string;
  ip: string;
  userAgent: string;
  isBlock: boolean;
  date: string;
}
interface meta_data {
  total_record: string;
  page: 1;
  limit: 20;
  total_page: 2;
}
interface Props {
  userAgentDatas: data[];
  userAgentMetaDatas: meta_data;
}
const Home = ({ userAgentDatas, userAgentMetaDatas }: Props) => {
  // console.log(userAgentMetaDatas);
  return (
    <div className="bg-clr-gray100 text-clr-gray500 text-[0.9rem] grid justify-center items-center h-[100vh]">
      <Table
        userAgentDatas={userAgentDatas}
        userAgentMetaDatas={userAgentMetaDatas}
      />
    </div>
  );
};

export default Home;
export const getServerSideProps = async () => {
  const res = await fetch(request.fetchUserAgent, {
    method: "GET",
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjU5ZTY0MTVkZjFjOTdmMTEwMTAxYSIsImlhdCI6MTY2Mzc4MDY2NywiZXhwIjoxNjY2MzcyNjY3fQ.C8txQirJJw9gpdBUX4uoN-gAKUYH_UeBGiKwPtOtesQ`,
    },
  });
  const { data } = await res.json();
  const userAgentDatas = data.data;
  const userAgentMetaDatas = data.meta_data;

  return {
    props: {
      userAgentDatas,
      userAgentMetaDatas,
    },
  };
};
