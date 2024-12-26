// From Lucas Clorius, used with his permission
const swarmProtocol: SwarmProtocolType = {
  initial: "770",
  transitions: [
    {
      label: { cmd: "R766_cmd_0", logType: ["R766_e_0"], role: "R766" },
      source: "770",
      target: "771",
    },
    {
      label: { cmd: "R766_cmd_3", logType: ["R766_e_3"], role: "R766" },
      source: "770",
      target: "772",
    },
    {
      label: { cmd: "R768_cmd_2", logType: ["R768_e_2"], role: "R768" },
      source: "772",
      target: "770",
    },
    {
      label: { cmd: "R767_cmd_0", logType: ["R767_e_0"], role: "R767" },
      source: "772",
      target: "773",
    },
    {
      label: { cmd: "R768_cmd_1", logType: ["R768_e_1"], role: "R768" },
      source: "771",
      target: "774",
    },
    {
      label: { cmd: "R766_cmd_1", logType: ["R766_e_1"], role: "R766" },
      source: "773",
      target: "775",
    },
    {
      label: { cmd: "R769_cmd_0", logType: ["R769_e_0"], role: "R769" },
      source: "774",
      target: "776",
    },
    {
      label: { cmd: "R767_cmd_1", logType: ["R767_e_1"], role: "R767" },
      source: "775",
      target: "777",
    },
    {
      label: { cmd: "R766_cmd_2", logType: ["R766_e_2"], role: "R766" },
      source: "776",
      target: "778",
    },
    {
      label: { cmd: "R768_cmd_0", logType: ["R768_e_0"], role: "R768" },
      source: "777",
      target: "779",
    },
  ],
};
