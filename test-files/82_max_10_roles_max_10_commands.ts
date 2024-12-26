// From Lucas Clorius, used with his permission
const swarmProtocol: SwarmProtocolType = {
  initial: "2509",
  transitions: [
    {
      label: { cmd: "R2500_cmd_7", logType: ["R2500_e_7"], role: "R2500" },
      source: "2509",
      target: "2510",
    },
    {
      label: { cmd: "R2504_cmd_7", logType: ["R2504_e_7"], role: "R2504" },
      source: "2510",
      target: "2511",
    },
    {
      label: { cmd: "R2504_cmd_3", logType: ["R2504_e_3"], role: "R2504" },
      source: "2511",
      target: "2512",
    },
    {
      label: { cmd: "R2504_cmd_6", logType: ["R2504_e_6"], role: "R2504" },
      source: "2512",
      target: "2513",
    },
    {
      label: { cmd: "R2505_cmd_0", logType: ["R2505_e_0"], role: "R2505" },
      source: "2513",
      target: "2514",
    },
    {
      label: { cmd: "R2500_cmd_3", logType: ["R2500_e_3"], role: "R2500" },
      source: "2514",
      target: "2515",
    },
    {
      label: { cmd: "R2500_cmd_6", logType: ["R2500_e_6"], role: "R2500" },
      source: "2515",
      target: "2516",
    },
    {
      label: { cmd: "R2503_cmd_4", logType: ["R2503_e_4"], role: "R2503" },
      source: "2516",
      target: "2517",
    },
    {
      label: { cmd: "R2500_cmd_2", logType: ["R2500_e_2"], role: "R2500" },
      source: "2517",
      target: "2518",
    },
    {
      label: { cmd: "R2506_cmd_6", logType: ["R2506_e_6"], role: "R2506" },
      source: "2516",
      target: "2519",
    },
    {
      label: { cmd: "R2504_cmd_0", logType: ["R2504_e_0"], role: "R2504" },
      source: "2519",
      target: "2520",
    },
    {
      label: { cmd: "R2502_cmd_1", logType: ["R2502_e_1"], role: "R2502" },
      source: "2518",
      target: "2520",
    },
    {
      label: { cmd: "R2508_cmd_0", logType: ["R2508_e_0"], role: "R2508" },
      source: "2520",
      target: "2521",
    },
    {
      label: { cmd: "R2506_cmd_3", logType: ["R2506_e_3"], role: "R2506" },
      source: "2521",
      target: "2522",
    },
    {
      label: { cmd: "R2505_cmd_3", logType: ["R2505_e_3"], role: "R2505" },
      source: "2522",
      target: "2523",
    },
    {
      label: { cmd: "R2508_cmd_2", logType: ["R2508_e_2"], role: "R2508" },
      source: "2523",
      target: "2524",
    },
    {
      label: { cmd: "R2506_cmd_2", logType: ["R2506_e_2"], role: "R2506" },
      source: "2524",
      target: "2525",
    },
    {
      label: { cmd: "R2506_cmd_4", logType: ["R2506_e_4"], role: "R2506" },
      source: "2525",
      target: "2526",
    },
    {
      label: { cmd: "R2507_cmd_3", logType: ["R2507_e_3"], role: "R2507" },
      source: "2526",
      target: "2527",
    },
    {
      label: { cmd: "R2508_cmd_1", logType: ["R2508_e_1"], role: "R2508" },
      source: "2527",
      target: "2528",
    },
    {
      label: { cmd: "R2501_cmd_1", logType: ["R2501_e_1"], role: "R2501" },
      source: "2528",
      target: "2523",
    },
    {
      label: { cmd: "R2503_cmd_2", logType: ["R2503_e_2"], role: "R2503" },
      source: "2523",
      target: "2529",
    },
    {
      label: { cmd: "R2505_cmd_5", logType: ["R2505_e_5"], role: "R2505" },
      source: "2529",
      target: "2530",
    },
    {
      label: { cmd: "R2506_cmd_1", logType: ["R2506_e_1"], role: "R2506" },
      source: "2530",
      target: "2531",
    },
    {
      label: { cmd: "R2504_cmd_2", logType: ["R2504_e_2"], role: "R2504" },
      source: "2531",
      target: "2532",
    },
    {
      label: { cmd: "R2508_cmd_4", logType: ["R2508_e_4"], role: "R2508" },
      source: "2532",
      target: "2533",
    },
    {
      label: { cmd: "R2506_cmd_0", logType: ["R2506_e_0"], role: "R2506" },
      source: "2522",
      target: "2534",
    },
    {
      label: { cmd: "R2508_cmd_5", logType: ["R2508_e_5"], role: "R2508" },
      source: "2534",
      target: "2535",
    },
    {
      label: { cmd: "R2504_cmd_1", logType: ["R2504_e_1"], role: "R2504" },
      source: "2533",
      target: "2536",
    },
    {
      label: { cmd: "R2505_cmd_4", logType: ["R2505_e_4"], role: "R2505" },
      source: "2536",
      target: "2527",
    },
    {
      label: { cmd: "R2500_cmd_0", logType: ["R2500_e_0"], role: "R2500" },
      source: "2527",
      target: "2537",
    },
    {
      label: { cmd: "R2503_cmd_8", logType: ["R2503_e_8"], role: "R2503" },
      source: "2535",
      target: "2538",
    },
    {
      label: { cmd: "R2500_cmd_5", logType: ["R2500_e_5"], role: "R2500" },
      source: "2537",
      target: "2539",
    },
    {
      label: { cmd: "R2507_cmd_2", logType: ["R2507_e_2"], role: "R2507" },
      source: "2538",
      target: "2540",
    },
    {
      label: { cmd: "R2504_cmd_4", logType: ["R2504_e_4"], role: "R2504" },
      source: "2539",
      target: "2541",
    },
    {
      label: { cmd: "R2506_cmd_5", logType: ["R2506_e_5"], role: "R2506" },
      source: "2540",
      target: "2542",
    },
    {
      label: { cmd: "R2501_cmd_0", logType: ["R2501_e_0"], role: "R2501" },
      source: "2542",
      target: "2543",
    },
    {
      label: { cmd: "R2504_cmd_5", logType: ["R2504_e_5"], role: "R2504" },
      source: "2543",
      target: "2544",
    },
    {
      label: { cmd: "R2503_cmd_7", logType: ["R2503_e_7"], role: "R2503" },
      source: "2541",
      target: "2545",
    },
    {
      label: { cmd: "R2507_cmd_1", logType: ["R2507_e_1"], role: "R2507" },
      source: "2544",
      target: "2546",
    },
    {
      label: { cmd: "R2503_cmd_1", logType: ["R2503_e_1"], role: "R2503" },
      source: "2546",
      target: "2547",
    },
    {
      label: { cmd: "R2508_cmd_3", logType: ["R2508_e_3"], role: "R2508" },
      source: "2545",
      target: "2548",
    },
    {
      label: { cmd: "R2500_cmd_4", logType: ["R2500_e_4"], role: "R2500" },
      source: "2547",
      target: "2549",
    },
    {
      label: { cmd: "R2503_cmd_0", logType: ["R2503_e_0"], role: "R2503" },
      source: "2523",
      target: "2550",
    },
    {
      label: { cmd: "R2503_cmd_5", logType: ["R2503_e_5"], role: "R2503" },
      source: "2549",
      target: "2551",
    },
    {
      label: { cmd: "R2505_cmd_6", logType: ["R2505_e_6"], role: "R2505" },
      source: "2551",
      target: "2552",
    },
    {
      label: { cmd: "R2505_cmd_1", logType: ["R2505_e_1"], role: "R2505" },
      source: "2550",
      target: "2534",
    },
    {
      label: { cmd: "R2503_cmd_3", logType: ["R2503_e_3"], role: "R2503" },
      source: "2521",
      target: "2551",
    },
    {
      label: { cmd: "R2503_cmd_6", logType: ["R2503_e_6"], role: "R2503" },
      source: "2548",
      target: "2553",
    },
    {
      label: { cmd: "R2507_cmd_0", logType: ["R2507_e_0"], role: "R2507" },
      source: "2517",
      target: "2554",
    },
    {
      label: { cmd: "R2505_cmd_2", logType: ["R2505_e_2"], role: "R2505" },
      source: "2553",
      target: "2555",
    },
    {
      label: { cmd: "R2500_cmd_1", logType: ["R2500_e_1"], role: "R2500" },
      source: "2555",
      target: "2556",
    },
    {
      label: { cmd: "R2502_cmd_0", logType: ["R2502_e_0"], role: "R2502" },
      source: "2554",
      target: "2557",
    },
  ],
};
