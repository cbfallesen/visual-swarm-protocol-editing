// From Lucas Clorius, used with his permission
const swarmProtocol: SwarmProtocolType = {
  initial: "4765",
  transitions: [
    {
      label: { cmd: "R4764_cmd_2", logType: ["R4764_e_2"], role: "R4764" },
      source: "4765",
      target: "4766",
    },
    {
      label: { cmd: "R4764_cmd_0", logType: ["R4764_e_0"], role: "R4764" },
      source: "4766",
      target: "4767",
    },
    {
      label: { cmd: "R4764_cmd_1", logType: ["R4764_e_1"], role: "R4764" },
      source: "4767",
      target: "4768",
    },
    {
      label: { cmd: "R4764_cmd_3", logType: ["R4764_e_3"], role: "R4764" },
      source: "4768",
      target: "4769",
    },
  ],
};
