import "./App.css";

import { Button, Divider, Input, Popconfirm, Table, message } from "antd";
import React, { useState } from "react";
import { levenshtein, portsList } from "./reqVariables";

import { SearchOutlined } from "@ant-design/icons";

function App() {
  const [data, setData] = useState([]);

  const [inputData, setInputData] = useState("");

  const [isCopied, setIsCopied] = useState(false);
  const [hasMistakes, setHasMistakes] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const correctCols = [
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
  ];

  const errorCols = [
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Add to Copy?",
      key: "action",
      align: "center",
      render: (record) => (
        <Popconfirm
          placement="left"
          title={`Are you sure you want to ${record.copy ? "REMOVE" : "ADD"}?`}
          onConfirm={() => modifyRecord(record)}
          okText="Yes"
          cancelText="No"
        >
          <Button type="primary" danger={record.copy}>
            {record.copy ? "REMOVE" : "ADD"}
          </Button>
        </Popconfirm>
      ),
    },
  ];

  const modifyRecord = (record) => {
    setData(data.map((el) => (el.key === record.key ? { ...el, copy: !el.copy } : el)));
  };

  const searchPorts = () => {
    if (!inputData.trim().length > 0) {
      message.error("You forgot something?");
      return;
    }

    setIsSearching(true);

    let inpArr;

    inpArr = inputData.split(",");

    let tempTableData = [];

    inpArr.forEach((inpItem) => {
      const modInput = inpItem.trim().toLowerCase();

      if (modInput.length > 0) {
        const portObj = portsList.find((el) => el.name.toLowerCase() === modInput);

        if (portObj) {
          tempTableData.push({
            key: portObj.code,
            code: portObj.code,
            name: portObj.name,
            copy: true,
          });
        } else {
          let closeSpells = [];
          const splitPortObj = portsList.find((el) =>
            el.name.toLowerCase().replace(/[()]/g, "").split(" ").includes(modInput)
          );

          if (splitPortObj) {
            tempTableData.push({
              key: splitPortObj.code,
              code: splitPortObj.code,
              name: splitPortObj.name,
              copy: true,
            });
            return;
          }

          let minDist;

          portsList.forEach((pItem) => {
            const spacedNames = pItem.name
              .toLowerCase()
              .replace(/[()/,]/g, "")
              .split(" ");

            spacedNames.forEach((nItem) => {
              const lDist = levenshtein(modInput, nItem);

              if (!minDist || minDist === lDist) {
                minDist = lDist;
                closeSpells.push({ key: pItem.code, code: pItem.code, name: pItem.name, mistake: true, copy: true });
              } else if (lDist < minDist) {
                minDist = lDist;
                closeSpells = [{ key: pItem.code, code: pItem.code, name: pItem.name, copy: true }];
              }
            });
          });

          if (closeSpells.length > 1) {
            closeSpells[0] = { ...closeSpells[0], mistake: true };
            setHasMistakes(true);
          }

          tempTableData.push(...closeSpells);
        }
      }
    });

    setData(tempTableData);

    setIsSearching(false);
  };

  const copyToClipboard = () => {
    if (data.length > 0) {
      let textToCopy = "";
      data.forEach((el) => {
        if (el.copy) {
          if (textToCopy) {
            textToCopy += `, ${el.code}`;
          } else textToCopy = el.code;
        }
      });
      navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1500);
    } else {
      message.error("Nothing to copy!");
    }
  };

  return (
    <div className="App">
      <header className="App-header">Portsplorer</header>
      <div className="searchContainer">
        <Input.Search
          style={{ width: "90%" }}
          placeholder="Enter Port names separated by commas or spaces here..."
          prefix={<SearchOutlined />}
          allowClear
          onSearch={searchPorts}
          loading={isSearching}
          enterButton="Search"
          onChange={(e) => {
            setInputData(e.target.value);
            setHasMistakes(false);
            setIsSearching(false);
            setData([]);
          }}
        />
      </div>

      {data.length > 0 &&
        (hasMistakes ? (
          <>
            {data.filter((el) => !el.mistake).length > 0 && (
              <div className="tableContainer">
                <Divider style={{ color: "whitesmoke", borderColor: "whitesmoke" }} orientation="left">
                  Correct Records
                </Divider>
                <Table columns={correctCols} dataSource={data.filter((el) => !el.mistake)} />
              </div>
            )}
            <div className="tableContainer">
              <Divider style={{ color: "whitesmoke", borderColor: "whitesmoke" }} orientation="left">
                Mispelled Records
              </Divider>
              <Table columns={errorCols} dataSource={data.filter((el) => el.mistake)} />
            </div>
          </>
        ) : (
          <div className="tableContainer">
            <Table columns={correctCols} dataSource={data} />
          </div>
        ))}

      {data.length > 0 && (
        <Button
          type="primary"
          className="copyButton"
          style={isCopied ? { backgroundColor: "green", border: "none" } : null}
          size="large"
          onClick={copyToClipboard}
          danger
        >
          {isCopied ? "Copied!" : "Copy"}
        </Button>
      )}
    </div>
  );
}

export default App;
