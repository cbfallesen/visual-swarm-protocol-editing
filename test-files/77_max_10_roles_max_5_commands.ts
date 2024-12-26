// From Lucas Clorius, used with his permission
const swarmProtocol: SwarmProtocolType = {
  initial: "1374",
  transitions: [
    {
      label: { cmd: "R1369_cmd_0", logType: ["R1369_e_0"], role: "R1369" },
      source: "1374",
      target: "1375",
    },
    {
      label: { cmd: "R1372_cmd_0", logType: ["R1372_e_0"], role: "R1372" },
      source: "1374",
      target: "1376",
    },
    {
      label: { cmd: "R1373_cmd_0", logType: ["R1373_e_0"], role: "R1373" },
      source: "1375",
      target: "1377",
    },
    {
      label: { cmd: "R1371_cmd_1", logType: ["R1371_e_1"], role: "R1371" },
      source: "1376",
      target: "1378",
    },
    {
      label: { cmd: "R1365_cmd_1", logType: ["R1365_e_1"], role: "R1365" },
      source: "1378",
      target: "1376",
    },
    {
      label: { cmd: "R1365_cmd_0", logType: ["R1365_e_0"], role: "R1365" },
      source: "1376",
      target: "1379",
    },
    {
      label: { cmd: "R1372_cmd_1", logType: ["R1372_e_1"], role: "R1372" },
      source: "1379",
      target: "1380",
    },
    {
      label: { cmd: "R1365_cmd_3", logType: ["R1365_e_3"], role: "R1365" },
      source: "1377",
      target: "1381",
    },
    {
      label: { cmd: "R1366_cmd_1", logType: ["R1366_e_1"], role: "R1366" },
      source: "1380",
      target: "1382",
    },
    {
      label: { cmd: "R1365_cmd_2", logType: ["R1365_e_2"], role: "R1365" },
      source: "1382",
      target: "1383",
    },
    {
      label: { cmd: "R1366_cmd_0", logType: ["R1366_e_0"], role: "R1366" },
      source: "1383",
      target: "1384",
    },
    {
      label: { cmd: "R1371_cmd_0", logType: ["R1371_e_0"], role: "R1371" },
      source: "1381",
      target: "1385",
    },
    {
      label: { cmd: "R1368_cmd_0", logType: ["R1368_e_0"], role: "R1368" },
      source: "1385",
      target: "1386",
    },
    {
      label: { cmd: "R1373_cmd_1", logType: ["R1373_e_1"], role: "R1373" },
      source: "1384",
      target: "1387",
    },
    {
      label: { cmd: "R1370_cmd_0", logType: ["R1370_e_0"], role: "R1370" },
      source: "1386",
      target: "1388",
    },
    {
      label: { cmd: "R1367_cmd_0", logType: ["R1367_e_0"], role: "R1367" },
      source: "1388",
      target: "1389",
    },
  ],
};
