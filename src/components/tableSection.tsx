import React from "react";

type TableProps = {
  headers: string[];
  rows: Array<Array<string | JSX.Element>>;
};

const Table: React.FC<TableProps> = ({ headers, rows }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
  

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-end">
        <button className="mx-1 px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">
          1
        </button>
        <button className="mx-1 px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">
          2
        </button>
        <button className="mx-1 px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">
          3
        </button>
        <button className="mx-1 px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">
          4
        </button>
        <button className="mx-1 px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">
          5
        </button>
        <button className="mx-1 px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">
          6
        </button>
      </div>
    </div>
  );
};

export default Table;
