// From Lucas Clorius, used with his permission
const swarmProtocol: SwarmProtocolType = {
  initial: "28915",
  transitions: [
    {
      label: { cmd: "R28910_cmd_7", logType: ["R28910_e_7"], role: "R28910" },
      source: "28915",
      target: "28916",
    },
    {
      label: { cmd: "R28912_cmd_15", logType: ["R28912_e_15"], role: "R28912" },
      source: "28916",
      target: "28917",
    },
    {
      label: { cmd: "R28901_cmd_7", logType: ["R28901_e_7"], role: "R28901" },
      source: "28917",
      target: "28918",
    },
    {
      label: { cmd: "R28899_cmd_0", logType: ["R28899_e_0"], role: "R28899" },
      source: "28918",
      target: "28919",
    },
    {
      label: { cmd: "R28898_cmd_3", logType: ["R28898_e_3"], role: "R28898" },
      source: "28919",
      target: "28920",
    },
    {
      label: { cmd: "R28904_cmd_16", logType: ["R28904_e_16"], role: "R28904" },
      source: "28920",
      target: "28921",
    },
    {
      label: { cmd: "R28899_cmd_12", logType: ["R28899_e_12"], role: "R28899" },
      source: "28921",
      target: "28922",
    },
    {
      label: { cmd: "R28912_cmd_1", logType: ["R28912_e_1"], role: "R28912" },
      source: "28922",
      target: "28923",
    },
    {
      label: { cmd: "R28908_cmd_16", logType: ["R28908_e_16"], role: "R28908" },
      source: "28923",
      target: "28924",
    },
    {
      label: { cmd: "R28903_cmd_1", logType: ["R28903_e_1"], role: "R28903" },
      source: "28924",
      target: "28925",
    },
    {
      label: { cmd: "R28909_cmd_0", logType: ["R28909_e_0"], role: "R28909" },
      source: "28925",
      target: "28922",
    },
    {
      label: { cmd: "R28905_cmd_1", logType: ["R28905_e_1"], role: "R28905" },
      source: "28922",
      target: "28926",
    },
    {
      label: { cmd: "R28908_cmd_5", logType: ["R28908_e_5"], role: "R28908" },
      source: "28926",
      target: "28927",
    },
    {
      label: { cmd: "R28907_cmd_2", logType: ["R28907_e_2"], role: "R28907" },
      source: "28927",
      target: "28928",
    },
    {
      label: { cmd: "R28901_cmd_5", logType: ["R28901_e_5"], role: "R28901" },
      source: "28928",
      target: "28929",
    },
    {
      label: { cmd: "R28910_cmd_4", logType: ["R28910_e_4"], role: "R28910" },
      source: "28921",
      target: "28930",
    },
    {
      label: { cmd: "R28904_cmd_9", logType: ["R28904_e_9"], role: "R28904" },
      source: "28930",
      target: "28926",
    },
    {
      label: { cmd: "R28902_cmd_13", logType: ["R28902_e_13"], role: "R28902" },
      source: "28929",
      target: "28931",
    },
    {
      label: { cmd: "R28913_cmd_2", logType: ["R28913_e_2"], role: "R28913" },
      source: "28920",
      target: "28932",
    },
    {
      label: { cmd: "R28908_cmd_13", logType: ["R28908_e_13"], role: "R28908" },
      source: "28932",
      target: "28933",
    },
    {
      label: { cmd: "R28909_cmd_2", logType: ["R28909_e_2"], role: "R28909" },
      source: "28931",
      target: "28934",
    },
    {
      label: { cmd: "R28906_cmd_3", logType: ["R28906_e_3"], role: "R28906" },
      source: "28933",
      target: "28935",
    },
    {
      label: { cmd: "R28904_cmd_5", logType: ["R28904_e_5"], role: "R28904" },
      source: "28935",
      target: "28936",
    },
    {
      label: { cmd: "R28904_cmd_10", logType: ["R28904_e_10"], role: "R28904" },
      source: "28936",
      target: "28918",
    },
    {
      label: { cmd: "R28909_cmd_7", logType: ["R28909_e_7"], role: "R28909" },
      source: "28934",
      target: "28937",
    },
    {
      label: { cmd: "R28909_cmd_13", logType: ["R28909_e_13"], role: "R28909" },
      source: "28937",
      target: "28938",
    },
    {
      label: { cmd: "R28904_cmd_2", logType: ["R28904_e_2"], role: "R28904" },
      source: "28938",
      target: "28939",
    },
    {
      label: { cmd: "R28909_cmd_11", logType: ["R28909_e_11"], role: "R28909" },
      source: "28939",
      target: "28940",
    },
    {
      label: { cmd: "R28912_cmd_9", logType: ["R28912_e_9"], role: "R28912" },
      source: "28940",
      target: "28941",
    },
    {
      label: { cmd: "R28900_cmd_0", logType: ["R28900_e_0"], role: "R28900" },
      source: "28940",
      target: "28942",
    },
    {
      label: { cmd: "R28910_cmd_9", logType: ["R28910_e_9"], role: "R28910" },
      source: "28942",
      target: "28943",
    },
    {
      label: { cmd: "R28901_cmd_9", logType: ["R28901_e_9"], role: "R28901" },
      source: "28943",
      target: "28944",
    },
    {
      label: { cmd: "R28909_cmd_5", logType: ["R28909_e_5"], role: "R28909" },
      source: "28944",
      target: "28945",
    },
    {
      label: { cmd: "R28908_cmd_8", logType: ["R28908_e_8"], role: "R28908" },
      source: "28941",
      target: "28946",
    },
    {
      label: { cmd: "R28912_cmd_0", logType: ["R28912_e_0"], role: "R28912" },
      source: "28946",
      target: "28947",
    },
    {
      label: { cmd: "R28900_cmd_2", logType: ["R28900_e_2"], role: "R28900" },
      source: "28945",
      target: "28918",
    },
    {
      label: { cmd: "R28908_cmd_4", logType: ["R28908_e_4"], role: "R28908" },
      source: "28947",
      target: "28948",
    },
    {
      label: { cmd: "R28910_cmd_2", logType: ["R28910_e_2"], role: "R28910" },
      source: "28948",
      target: "28949",
    },
    {
      label: { cmd: "R28904_cmd_1", logType: ["R28904_e_1"], role: "R28904" },
      source: "28949",
      target: "28950",
    },
    {
      label: { cmd: "R28903_cmd_0", logType: ["R28903_e_0"], role: "R28903" },
      source: "28950",
      target: "28928",
    },
    {
      label: { cmd: "R28904_cmd_12", logType: ["R28904_e_12"], role: "R28904" },
      source: "28928",
      target: "28951",
    },
    {
      label: { cmd: "R28913_cmd_7", logType: ["R28913_e_7"], role: "R28913" },
      source: "28951",
      target: "28952",
    },
    {
      label: { cmd: "R28906_cmd_1", logType: ["R28906_e_1"], role: "R28906" },
      source: "28952",
      target: "28953",
    },
    {
      label: { cmd: "R28903_cmd_4", logType: ["R28903_e_4"], role: "R28903" },
      source: "28938",
      target: "28954",
    },
    {
      label: { cmd: "R28902_cmd_5", logType: ["R28902_e_5"], role: "R28902" },
      source: "28953",
      target: "28955",
    },
    {
      label: { cmd: "R28902_cmd_18", logType: ["R28902_e_18"], role: "R28902" },
      source: "28955",
      target: "28956",
    },
    {
      label: { cmd: "R28907_cmd_0", logType: ["R28907_e_0"], role: "R28907" },
      source: "28956",
      target: "28957",
    },
    {
      label: { cmd: "R28914_cmd_0", logType: ["R28914_e_0"], role: "R28914" },
      source: "28954",
      target: "28958",
    },
    {
      label: { cmd: "R28910_cmd_8", logType: ["R28910_e_8"], role: "R28910" },
      source: "28923",
      target: "28959",
    },
    {
      label: { cmd: "R28899_cmd_9", logType: ["R28899_e_9"], role: "R28899" },
      source: "28959",
      target: "28960",
    },
    {
      label: { cmd: "R28910_cmd_5", logType: ["R28910_e_5"], role: "R28910" },
      source: "28921",
      target: "28961",
    },
    {
      label: { cmd: "R28912_cmd_2", logType: ["R28912_e_2"], role: "R28912" },
      source: "28957",
      target: "28962",
    },
    {
      label: { cmd: "R28898_cmd_2", logType: ["R28898_e_2"], role: "R28898" },
      source: "28962",
      target: "28963",
    },
    {
      label: { cmd: "R28909_cmd_12", logType: ["R28909_e_12"], role: "R28909" },
      source: "28963",
      target: "28964",
    },
    {
      label: { cmd: "R28900_cmd_3", logType: ["R28900_e_3"], role: "R28900" },
      source: "28958",
      target: "28965",
    },
    {
      label: { cmd: "R28901_cmd_6", logType: ["R28901_e_6"], role: "R28901" },
      source: "28960",
      target: "28966",
    },
    {
      label: { cmd: "R28902_cmd_11", logType: ["R28902_e_11"], role: "R28902" },
      source: "28964",
      target: "28967",
    },
    {
      label: { cmd: "R28900_cmd_5", logType: ["R28900_e_5"], role: "R28900" },
      source: "28966",
      target: "28968",
    },
    {
      label: { cmd: "R28906_cmd_2", logType: ["R28906_e_2"], role: "R28906" },
      source: "28965",
      target: "28947",
    },
    {
      label: { cmd: "R28908_cmd_7", logType: ["R28908_e_7"], role: "R28908" },
      source: "28968",
      target: "28969",
    },
    {
      label: { cmd: "R28912_cmd_8", logType: ["R28912_e_8"], role: "R28912" },
      source: "28967",
      target: "28970",
    },
    {
      label: { cmd: "R28907_cmd_1", logType: ["R28907_e_1"], role: "R28907" },
      source: "28970",
      target: "28971",
    },
    {
      label: { cmd: "R28899_cmd_4", logType: ["R28899_e_4"], role: "R28899" },
      source: "28969",
      target: "28972",
    },
    {
      label: { cmd: "R28912_cmd_4", logType: ["R28912_e_4"], role: "R28912" },
      source: "28961",
      target: "28973",
    },
    {
      label: { cmd: "R28903_cmd_3", logType: ["R28903_e_3"], role: "R28903" },
      source: "28972",
      target: "28974",
    },
    {
      label: { cmd: "R28902_cmd_15", logType: ["R28902_e_15"], role: "R28902" },
      source: "28973",
      target: "28975",
    },
    {
      label: { cmd: "R28913_cmd_3", logType: ["R28913_e_3"], role: "R28913" },
      source: "28940",
      target: "28976",
    },
    {
      label: { cmd: "R28911_cmd_1", logType: ["R28911_e_1"], role: "R28911" },
      source: "28975",
      target: "28977",
    },
    {
      label: { cmd: "R28912_cmd_3", logType: ["R28912_e_3"], role: "R28912" },
      source: "28975",
      target: "28978",
    },
    {
      label: { cmd: "R28908_cmd_6", logType: ["R28908_e_6"], role: "R28908" },
      source: "28974",
      target: "28979",
    },
    {
      label: { cmd: "R28904_cmd_14", logType: ["R28904_e_14"], role: "R28904" },
      source: "28978",
      target: "28980",
    },
    {
      label: { cmd: "R28902_cmd_2", logType: ["R28902_e_2"], role: "R28902" },
      source: "28970",
      target: "28981",
    },
    {
      label: { cmd: "R28904_cmd_3", logType: ["R28904_e_3"], role: "R28904" },
      source: "28979",
      target: "28982",
    },
    {
      label: { cmd: "R28902_cmd_14", logType: ["R28902_e_14"], role: "R28902" },
      source: "28980",
      target: "28983",
    },
    {
      label: { cmd: "R28906_cmd_4", logType: ["R28906_e_4"], role: "R28906" },
      source: "28968",
      target: "28946",
    },
    {
      label: { cmd: "R28908_cmd_2", logType: ["R28908_e_2"], role: "R28908" },
      source: "28977",
      target: "28984",
    },
    {
      label: { cmd: "R28904_cmd_15", logType: ["R28904_e_15"], role: "R28904" },
      source: "28971",
      target: "28985",
    },
    {
      label: { cmd: "R28902_cmd_4", logType: ["R28902_e_4"], role: "R28902" },
      source: "28981",
      target: "28986",
    },
    {
      label: { cmd: "R28912_cmd_13", logType: ["R28912_e_13"], role: "R28912" },
      source: "28985",
      target: "28987",
    },
    {
      label: { cmd: "R28902_cmd_7", logType: ["R28902_e_7"], role: "R28902" },
      source: "28976",
      target: "28988",
    },
    {
      label: { cmd: "R28910_cmd_6", logType: ["R28910_e_6"], role: "R28910" },
      source: "28988",
      target: "28989",
    },
    {
      label: { cmd: "R28906_cmd_0", logType: ["R28906_e_0"], role: "R28906" },
      source: "28971",
      target: "28990",
    },
    {
      label: { cmd: "R28902_cmd_6", logType: ["R28902_e_6"], role: "R28902" },
      source: "28920",
      target: "28991",
    },
    {
      label: { cmd: "R28908_cmd_11", logType: ["R28908_e_11"], role: "R28908" },
      source: "28983",
      target: "28961",
    },
    {
      label: { cmd: "R28902_cmd_1", logType: ["R28902_e_1"], role: "R28902" },
      source: "28987",
      target: "28992",
    },
    {
      label: { cmd: "R28913_cmd_1", logType: ["R28913_e_1"], role: "R28913" },
      source: "28986",
      target: "28993",
    },
    {
      label: { cmd: "R28905_cmd_0", logType: ["R28905_e_0"], role: "R28905" },
      source: "28982",
      target: "28994",
    },
    {
      label: { cmd: "R28899_cmd_8", logType: ["R28899_e_8"], role: "R28899" },
      source: "28991",
      target: "28995",
    },
    {
      label: { cmd: "R28903_cmd_2", logType: ["R28903_e_2"], role: "R28903" },
      source: "28994",
      target: "28996",
    },
    {
      label: { cmd: "R28909_cmd_10", logType: ["R28909_e_10"], role: "R28909" },
      source: "28989",
      target: "28997",
    },
    {
      label: { cmd: "R28913_cmd_8", logType: ["R28913_e_8"], role: "R28913" },
      source: "28993",
      target: "28998",
    },
    {
      label: { cmd: "R28904_cmd_8", logType: ["R28904_e_8"], role: "R28904" },
      source: "28990",
      target: "28999",
    },
    {
      label: { cmd: "R28911_cmd_0", logType: ["R28911_e_0"], role: "R28911" },
      source: "28992",
      target: "29000",
    },
    {
      label: { cmd: "R28900_cmd_1", logType: ["R28900_e_1"], role: "R28900" },
      source: "28996",
      target: "29001",
    },
    {
      label: { cmd: "R28904_cmd_0", logType: ["R28904_e_0"], role: "R28904" },
      source: "28956",
      target: "29002",
    },
    {
      label: { cmd: "R28901_cmd_8", logType: ["R28901_e_8"], role: "R28901" },
      source: "28984",
      target: "28960",
    },
    {
      label: { cmd: "R28899_cmd_10", logType: ["R28899_e_10"], role: "R28899" },
      source: "29002",
      target: "29003",
    },
    {
      label: { cmd: "R28908_cmd_14", logType: ["R28908_e_14"], role: "R28908" },
      source: "28997",
      target: "29001",
    },
    {
      label: { cmd: "R28912_cmd_6", logType: ["R28912_e_6"], role: "R28912" },
      source: "28999",
      target: "29004",
    },
    {
      label: { cmd: "R28910_cmd_1", logType: ["R28910_e_1"], role: "R28910" },
      source: "28995",
      target: "29005",
    },
    {
      label: { cmd: "R28901_cmd_1", logType: ["R28901_e_1"], role: "R28901" },
      source: "29005",
      target: "29006",
    },
    {
      label: { cmd: "R28912_cmd_7", logType: ["R28912_e_7"], role: "R28912" },
      source: "29001",
      target: "29007",
    },
    {
      label: { cmd: "R28913_cmd_0", logType: ["R28913_e_0"], role: "R28913" },
      source: "29003",
      target: "29008",
    },
    {
      label: { cmd: "R28909_cmd_1", logType: ["R28909_e_1"], role: "R28909" },
      source: "29006",
      target: "29009",
    },
    {
      label: { cmd: "R28909_cmd_3", logType: ["R28909_e_3"], role: "R28909" },
      source: "29008",
      target: "29010",
    },
    {
      label: { cmd: "R28902_cmd_12", logType: ["R28902_e_12"], role: "R28902" },
      source: "28967",
      target: "28954",
    },
    {
      label: { cmd: "R28902_cmd_8", logType: ["R28902_e_8"], role: "R28902" },
      source: "29000",
      target: "28951",
    },
    {
      label: { cmd: "R28912_cmd_5", logType: ["R28912_e_5"], role: "R28912" },
      source: "29004",
      target: "29011",
    },
    {
      label: { cmd: "R28907_cmd_4", logType: ["R28907_e_4"], role: "R28907" },
      source: "29011",
      target: "29012",
    },
    {
      label: { cmd: "R28899_cmd_2", logType: ["R28899_e_2"], role: "R28899" },
      source: "29007",
      target: "29013",
    },
    {
      label: { cmd: "R28908_cmd_12", logType: ["R28908_e_12"], role: "R28908" },
      source: "29009",
      target: "29014",
    },
    {
      label: { cmd: "R28909_cmd_14", logType: ["R28909_e_14"], role: "R28909" },
      source: "29010",
      target: "29015",
    },
    {
      label: { cmd: "R28913_cmd_6", logType: ["R28913_e_6"], role: "R28913" },
      source: "29015",
      target: "29016",
    },
    {
      label: { cmd: "R28909_cmd_15", logType: ["R28909_e_15"], role: "R28909" },
      source: "29014",
      target: "29017",
    },
    {
      label: { cmd: "R28904_cmd_17", logType: ["R28904_e_17"], role: "R28904" },
      source: "29013",
      target: "29018",
    },
    {
      label: { cmd: "R28911_cmd_2", logType: ["R28911_e_2"], role: "R28911" },
      source: "29017",
      target: "29019",
    },
    {
      label: { cmd: "R28902_cmd_16", logType: ["R28902_e_16"], role: "R28902" },
      source: "28998",
      target: "29020",
    },
    {
      label: { cmd: "R28900_cmd_6", logType: ["R28900_e_6"], role: "R28900" },
      source: "29019",
      target: "29021",
    },
    {
      label: { cmd: "R28908_cmd_10", logType: ["R28908_e_10"], role: "R28908" },
      source: "29016",
      target: "29022",
    },
    {
      label: { cmd: "R28901_cmd_4", logType: ["R28901_e_4"], role: "R28901" },
      source: "28985",
      target: "29023",
    },
    {
      label: { cmd: "R28899_cmd_5", logType: ["R28899_e_5"], role: "R28899" },
      source: "29018",
      target: "29024",
    },
    {
      label: { cmd: "R28913_cmd_9", logType: ["R28913_e_9"], role: "R28913" },
      source: "29023",
      target: "29025",
    },
    {
      label: { cmd: "R28900_cmd_4", logType: ["R28900_e_4"], role: "R28900" },
      source: "28996",
      target: "29026",
    },
    {
      label: { cmd: "R28908_cmd_3", logType: ["R28908_e_3"], role: "R28908" },
      source: "29008",
      target: "29027",
    },
    {
      label: { cmd: "R28912_cmd_12", logType: ["R28912_e_12"], role: "R28912" },
      source: "29027",
      target: "29028",
    },
    {
      label: { cmd: "R28904_cmd_4", logType: ["R28904_e_4"], role: "R28904" },
      source: "29020",
      target: "29029",
    },
    {
      label: { cmd: "R28899_cmd_1", logType: ["R28899_e_1"], role: "R28899" },
      source: "29024",
      target: "29030",
    },
    {
      label: { cmd: "R28908_cmd_9", logType: ["R28908_e_9"], role: "R28908" },
      source: "29026",
      target: "29031",
    },
    {
      label: { cmd: "R28899_cmd_11", logType: ["R28899_e_11"], role: "R28899" },
      source: "29025",
      target: "29032",
    },
    {
      label: { cmd: "R28902_cmd_17", logType: ["R28902_e_17"], role: "R28902" },
      source: "29029",
      target: "29033",
    },
    {
      label: { cmd: "R28912_cmd_11", logType: ["R28912_e_11"], role: "R28912" },
      source: "29028",
      target: "28935",
    },
    {
      label: { cmd: "R28904_cmd_6", logType: ["R28904_e_6"], role: "R28904" },
      source: "29022",
      target: "29034",
    },
    {
      label: { cmd: "R28901_cmd_2", logType: ["R28901_e_2"], role: "R28901" },
      source: "29033",
      target: "29035",
    },
    {
      label: { cmd: "R28904_cmd_18", logType: ["R28904_e_18"], role: "R28904" },
      source: "29031",
      target: "28973",
    },
    {
      label: { cmd: "R28910_cmd_3", logType: ["R28910_e_3"], role: "R28910" },
      source: "29012",
      target: "29036",
    },
    {
      label: { cmd: "R28909_cmd_9", logType: ["R28909_e_9"], role: "R28909" },
      source: "29030",
      target: "29037",
    },
    {
      label: { cmd: "R28908_cmd_1", logType: ["R28908_e_1"], role: "R28908" },
      source: "29034",
      target: "29038",
    },
    {
      label: { cmd: "R28912_cmd_10", logType: ["R28912_e_10"], role: "R28912" },
      source: "29035",
      target: "29039",
    },
    {
      label: { cmd: "R28910_cmd_0", logType: ["R28910_e_0"], role: "R28910" },
      source: "29021",
      target: "29040",
    },
    {
      label: { cmd: "R28909_cmd_8", logType: ["R28909_e_8"], role: "R28909" },
      source: "28997",
      target: "29041",
    },
    {
      label: { cmd: "R28913_cmd_5", logType: ["R28913_e_5"], role: "R28913" },
      source: "29041",
      target: "29042",
    },
    {
      label: { cmd: "R28901_cmd_0", logType: ["R28901_e_0"], role: "R28901" },
      source: "28947",
      target: "29043",
    },
    {
      label: { cmd: "R28908_cmd_15", logType: ["R28908_e_15"], role: "R28908" },
      source: "29038",
      target: "29044",
    },
    {
      label: { cmd: "R28913_cmd_4", logType: ["R28913_e_4"], role: "R28913" },
      source: "29037",
      target: "29045",
    },
    {
      label: { cmd: "R28909_cmd_6", logType: ["R28909_e_6"], role: "R28909" },
      source: "29044",
      target: "28926",
    },
    {
      label: { cmd: "R28898_cmd_0", logType: ["R28898_e_0"], role: "R28898" },
      source: "29042",
      target: "29046",
    },
    {
      label: { cmd: "R28899_cmd_14", logType: ["R28899_e_14"], role: "R28899" },
      source: "29036",
      target: "29047",
    },
    {
      label: { cmd: "R28912_cmd_14", logType: ["R28912_e_14"], role: "R28912" },
      source: "29040",
      target: "29048",
    },
    {
      label: { cmd: "R28909_cmd_4", logType: ["R28909_e_4"], role: "R28909" },
      source: "29047",
      target: "29049",
    },
    {
      label: { cmd: "R28904_cmd_13", logType: ["R28904_e_13"], role: "R28904" },
      source: "28998",
      target: "29050",
    },
    {
      label: { cmd: "R28902_cmd_10", logType: ["R28902_e_10"], role: "R28902" },
      source: "29048",
      target: "29051",
    },
    {
      label: { cmd: "R28911_cmd_3", logType: ["R28911_e_3"], role: "R28911" },
      source: "29051",
      target: "29052",
    },
    {
      label: { cmd: "R28899_cmd_7", logType: ["R28899_e_7"], role: "R28899" },
      source: "29032",
      target: "28983",
    },
    {
      label: { cmd: "R28899_cmd_6", logType: ["R28899_e_6"], role: "R28899" },
      source: "29039",
      target: "29053",
    },
    {
      label: { cmd: "R28907_cmd_3", logType: ["R28907_e_3"], role: "R28907" },
      source: "29043",
      target: "29054",
    },
    {
      label: { cmd: "R28902_cmd_3", logType: ["R28902_e_3"], role: "R28902" },
      source: "29045",
      target: "29055",
    },
    {
      label: { cmd: "R28904_cmd_11", logType: ["R28904_e_11"], role: "R28904" },
      source: "29054",
      target: "29056",
    },
    {
      label: { cmd: "R28898_cmd_1", logType: ["R28898_e_1"], role: "R28898" },
      source: "29046",
      target: "29057",
    },
    {
      label: { cmd: "R28908_cmd_0", logType: ["R28908_e_0"], role: "R28908" },
      source: "29052",
      target: "29058",
    },
    {
      label: { cmd: "R28902_cmd_9", logType: ["R28902_e_9"], role: "R28902" },
      source: "29056",
      target: "29059",
    },
    {
      label: { cmd: "R28899_cmd_3", logType: ["R28899_e_3"], role: "R28899" },
      source: "29053",
      target: "29060",
    },
    {
      label: { cmd: "R28899_cmd_13", logType: ["R28899_e_13"], role: "R28899" },
      source: "29059",
      target: "29061",
    },
    {
      label: { cmd: "R28904_cmd_7", logType: ["R28904_e_7"], role: "R28904" },
      source: "29055",
      target: "29062",
    },
    {
      label: { cmd: "R28902_cmd_0", logType: ["R28902_e_0"], role: "R28902" },
      source: "29057",
      target: "29050",
    },
    {
      label: { cmd: "R28901_cmd_3", logType: ["R28901_e_3"], role: "R28901" },
      source: "29049",
      target: "29063",
    },
  ],
};
