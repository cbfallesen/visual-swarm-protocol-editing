// From Lucas Clorius, used with his permission
const swarmProtocol: SwarmProtocolType = {
  initial: "1103",
  transitions: [
    {
      label: { cmd: "R1102_cmd_0", logType: ["R1102_e_0"], role: "R1102" },
      source: "1103",
      target: "1104",
    },
    {
      label: { cmd: "R1100_cmd_6", logType: ["R1100_e_6"], role: "R1100" },
      source: "1104",
      target: "1105",
    },
    {
      label: { cmd: "R1100_cmd_3", logType: ["R1100_e_3"], role: "R1100" },
      source: "1105",
      target: "1106",
    },
    {
      label: { cmd: "R1102_cmd_5", logType: ["R1102_e_5"], role: "R1102" },
      source: "1106",
      target: "1105",
    },
    {
      label: { cmd: "R1102_cmd_3", logType: ["R1102_e_3"], role: "R1102" },
      source: "1105",
      target: "1107",
    },
    {
      label: { cmd: "R1102_cmd_1", logType: ["R1102_e_1"], role: "R1102" },
      source: "1107",
      target: "1108",
    },
    {
      label: { cmd: "R1102_cmd_4", logType: ["R1102_e_4"], role: "R1102" },
      source: "1108",
      target: "1109",
    },
    {
      label: { cmd: "R1101_cmd_0", logType: ["R1101_e_0"], role: "R1101" },
      source: "1109",
      target: "1110",
    },
    {
      label: { cmd: "R1102_cmd_2", logType: ["R1102_e_2"], role: "R1102" },
      source: "1110",
      target: "1111",
    },
    {
      label: { cmd: "R1101_cmd_1", logType: ["R1101_e_1"], role: "R1101" },
      source: "1111",
      target: "1112",
    },
    {
      label: { cmd: "R1100_cmd_1", logType: ["R1100_e_1"], role: "R1100" },
      source: "1112",
      target: "1113",
    },
    {
      label: { cmd: "R1102_cmd_6", logType: ["R1102_e_6"], role: "R1102" },
      source: "1113",
      target: "1114",
    },
    {
      label: { cmd: "R1100_cmd_2", logType: ["R1100_e_2"], role: "R1100" },
      source: "1114",
      target: "1115",
    },
    {
      label: { cmd: "R1100_cmd_4", logType: ["R1100_e_4"], role: "R1100" },
      source: "1115",
      target: "1107",
    },
    {
      label: { cmd: "R1100_cmd_5", logType: ["R1100_e_5"], role: "R1100" },
      source: "1107",
      target: "1116",
    },
    {
      label: { cmd: "R1100_cmd_0", logType: ["R1100_e_0"], role: "R1100" },
      source: "1116",
      target: "1117",
    },
    {
      label: { cmd: "R1101_cmd_2", logType: ["R1101_e_2"], role: "R1101" },
      source: "1104",
      target: "1118",
    },
    {
      label: { cmd: "R1100_cmd_8", logType: ["R1100_e_8"], role: "R1100" },
      source: "1116",
      target: "1119",
    },
    {
      label: { cmd: "R1100_cmd_7", logType: ["R1100_e_7"], role: "R1100" },
      source: "1118",
      target: "1120",
    },
  ],
};
