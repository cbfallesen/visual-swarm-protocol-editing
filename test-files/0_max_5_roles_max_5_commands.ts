// From Lucas Clorius, used with his permission
const swarmProtocol: SwarmProtocolType = {
  initial: "3",
  transitions: [
    {
      label: { cmd: "R1_cmd_2", logType: ["R1_e_2"], role: "R1" },
      source: "3",
      target: "3",
    },
    {
      label: { cmd: "R0_cmd_0", logType: ["R0_e_0"], role: "R0" },
      source: "3",
      target: "4",
    },
    {
      label: { cmd: "R1_cmd_0", logType: ["R1_e_0"], role: "R1" },
      source: "4",
      target: "5",
    },
    {
      label: { cmd: "R1_cmd_1", logType: ["R1_e_1"], role: "R1" },
      source: "5",
      target: "3",
    },
    {
      label: { cmd: "R2_cmd_0", logType: ["R2_e_0"], role: "R2" },
      source: "3",
      target: "6",
    },
    {
      label: { cmd: "R2_cmd_1", logType: ["R2_e_1"], role: "R2" },
      source: "6",
      target: "7",
    },
  ],
};
