import React from "react";

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
const Table = ({ userAgentDatas, userAgentMetaDatas }: Props) => {
  console.log(userAgentDatas);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ip</th>
            <th>userAgent</th>
            <th>isBlock</th>
            <th>date</th>
          </tr>
        </thead>
        <tbody>
          {userAgentDatas.map((d) => (
            <>
              <tr>
                <td>{d.ip}</td>
                <td>{d.userAgent}</td>
                <td>
                  <p
                    className={`status ${
                      d.isBlock ? "status-true" : "status-false"
                    }`}
                  >
                    {d.isBlock ? "true" : "false"}
                  </p>
                </td>
                <td>{d?.date}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
