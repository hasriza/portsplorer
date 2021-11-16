export const levenshtein = (str1, str2) => {
  var m = str1.length,
    n = str2.length,
    d = [],
    i,
    j;
  if (!m) return n;
  if (!n) return m;

  for (i = 0; i <= m; i++) d[i] = [i];
  for (j = 0; j <= n; j++) d[0][j] = j;
  for (j = 1; j <= n; j++) {
    for (i = 1; i <= m; i++) {
      if (str1[i - 1] === str2[j - 1]) {
        d[i][j] = d[i - 1][j - 1];
      } else {
        d[i][j] = Math.min(d[i - 1][j], d[i][j - 1], d[i - 1][j - 1]) + 1;
      }
    }
  }
  return d[m][n];
};

export const portsList = [
  {
    code: "KEMBA",
    name: "Mombasa",
  },
  {
    code: "TZDAR",
    name: "Dar es Salaam",
  },
  {
    code: "SOMGQ",
    name: "Mogadishu",
  },
  {
    code: "TZTGT",
    name: "Tanga",
  },
  {
    code: "TZZNZ",
    name: "Zanzibar",
  },
  {
    code: "KMMUT",
    name: "Mutsamudu, Anjouan",
  },
  {
    code: "KMYVA",
    name: "Moroni",
  },
  {
    code: "SCPOV",
    name: "Port Victoria",
  },
  {
    code: "MGDIE",
    name: "Antsiranana",
  },
  {
    code: "MGEHL",
    name: "Ehoala",
  },
  {
    code: "MGMJN",
    name: "Majunga (Mahajanga)",
  },
  {
    code: "MGTMM",
    name: "Tamatave (Toamasina)",
  },
  {
    code: "MUPLU",
    name: "Port Louis",
  },
  {
    code: "YTLON",
    name: "Longoni",
  },
  {
    code: "REPDG",
    name: "Port de Pointe des Galets",
  },
  {
    code: "REREU",
    name: "Réunion",
  },
  {
    code: "DZAAE",
    name: "Annaba (ex Bone)",
  },
  {
    code: "DZALG",
    name: "Alger (Algiers)",
  },
  {
    code: "DZBJA",
    name: "Bejaia (ex Bougie)",
  },
  {
    code: "DZGHZ",
    name: "Ghazaouet",
  },
  {
    code: "DZORN",
    name: "Oran",
  },
  {
    code: "DZSKI",
    name: "Skikda (ex Philippeville)",
  },
  {
    code: "LYBEN",
    name: "Bingazi (Benghazi)",
  },
  {
    code: "LYKHO",
    name: "Al Khums",
  },
  {
    code: "LYMRA",
    name: "Misurata",
  },
  {
    code: "LYTIP",
    name: "Tripoli",
  },
  {
    code: "MAAGA",
    name: "Agadir",
  },
  {
    code: "MACAS",
    name: "Casablanca",
  },
  {
    code: "MAPTM",
    name: "Tanger Med",
  },
  {
    code: "TNSFA",
    name: "Sfax",
  },
  {
    code: "TNSUS",
    name: "Sousse",
  },
  {
    code: "TNBIZ",
    name: "Bizerte",
  },
  {
    code: "TNTUN",
    name: "Tunis",
  },
  {
    code: "ZAELS",
    name: "East London",
  },
  {
    code: "ZAJNB",
    name: "Johannesburg",
  },
  {
    code: "MZBEW",
    name: "Beira",
  },
  {
    code: "MZMNC",
    name: "Nacala",
  },
  {
    code: "MZMPM",
    name: "Maputo",
  },
  {
    code: "MZPOL",
    name: "Pemba",
  },
  {
    code: "NALUD",
    name: "Lüderitz",
  },
  {
    code: "NAWVB",
    name: "Walvis Bay",
  },
  {
    code: "ZACPT",
    name: "Cape Town",
  },
  {
    code: "ZADUR",
    name: "Durban",
  },
  {
    code: "ZAPLZ",
    name: "Port Elizabeth",
  },
  {
    code: "ZAZBA",
    name: "Coega / Port Ngqura",
  },
  {
    code: "GMBJL",
    name: "Banjul",
  },
  {
    code: "GWOXB",
    name: "Bissau",
  },
  {
    code: "CVMIN",
    name: "Mindelo",
  },
  {
    code: "CVRAI",
    name: "Praia",
  },
  {
    code: "NGONN",
    name: "Onne",
  },
  {
    code: "NGPHC",
    name: "Port Harcourt",
  },
  {
    code: "AOLAD",
    name: "Luanda",
  },
  {
    code: "AOLOB",
    name: "Lobito",
  },
  {
    code: "AOMSZ",
    name: "Namibe",
  },
  {
    code: "CGPNR",
    name: "Pointe Noire",
  },
  {
    code: "GALBV",
    name: "Libreville",
  },
  {
    code: "AOCAB",
    name: "Cabinda",
  },
  {
    code: "AOSZA",
    name: "Soyo",
  },
  {
    code: "CDBOA",
    name: "Boma",
  },
  {
    code: "CDMAT",
    name: "Matadi",
  },
  {
    code: "GAPOG",
    name: "Port Gentil",
  },
  {
    code: "GQBSG",
    name: "Bata",
  },
  {
    code: "BJCOO",
    name: "Cotonou",
  },
  {
    code: "CIABJ",
    name: "Abidjan",
  },
  {
    code: "GHTEM",
    name: "Tema",
  },
  {
    code: "SNDKR",
    name: "Dakar",
  },
  {
    code: "TGLFW",
    name: "Lome",
  },
  {
    code: "CISPY",
    name: "San-Pédro",
  },
  {
    code: "CMDLA",
    name: "Douala",
  },
  {
    code: "CMKBI",
    name: "Kribi",
  },
  {
    code: "GHTKD",
    name: "Takoradi",
  },
  {
    code: "LRMLW",
    name: "Monrovia",
  },
  {
    code: "NGAPP",
    name: "Apapa",
  },
  {
    code: "NGTIN",
    name: "Tincan/Lagos",
  },
  {
    code: "GNCKY",
    name: "Conakry",
  },
  {
    code: "MRNDB",
    name: "Nouadhibou",
  },
  {
    code: "MRNKC",
    name: "Nouakchott",
  },
  {
    code: "SLFNA",
    name: "Freetown",
  },
  {
    code: "CNNBO",
    name: "Ningbo",
  },
  {
    code: "CNQIN",
    name: "Qingdao",
  },
  {
    code: "CNSGH",
    name: "Shanghai",
  },
  {
    code: "CNXAM",
    name: "Xiamen",
  },
  {
    code: "CNDAL",
    name: "Dalian",
  },
  {
    code: "CNTXG",
    name: "Xingang (Tianjin New Pt)",
  },
  {
    code: "CNCWN",
    name: "Chiwan",
  },
  {
    code: "CNNSA",
    name: "Nansha",
  },
  {
    code: "CNSHK",
    name: "Shekou",
  },
  {
    code: "CNSNZ",
    name: "Shenzhen",
  },
  {
    code: "CNYTN",
    name: "Yantian",
  },
  {
    code: "HKHKG",
    name: "Hong Kong",
  },
  {
    code: "JPHKT",
    name: "Hakata/Fukuoka",
  },
  {
    code: "JPNGO",
    name: "Nagoya, Aichi",
  },
  {
    code: "JPOSA",
    name: "Osaka",
  },
  {
    code: "JPTYO",
    name: "Tokyo",
  },
  {
    code: "JPUKB",
    name: "Kobe",
  },
  {
    code: "JPYOK",
    name: "Yokohama",
  },
  {
    code: "KRINC",
    name: "Incheon",
  },
  {
    code: "KRKAN",
    name: "Gwangyang",
  },
  {
    code: "KRPUS",
    name: "Busan",
  },
  {
    code: "TWKEL",
    name: "Keelung (Chilung)",
  },
  {
    code: "TWKHH",
    name: "Kaohsiung",
  },
  {
    code: "TWTXG",
    name: "Taichung",
  },
  {
    code: "CNSXJ",
    name: "Shanshan",
  },
  {
    code: "MOMFM",
    name: "Macau",
  },
  {
    code: "CNAQG",
    name: "Anqing",
  },
  {
    code: "CNCGS",
    name: "Changshu",
  },
  {
    code: "CNCHI",
    name: "Chizhou",
  },
  {
    code: "CNCZX",
    name: "Changzhou",
  },
  {
    code: "CNDFG",
    name: "Dafeng",
  },
  {
    code: "CNDMY",
    name: "Damaiyu",
  },
  {
    code: "CNFQX",
    name: "Fuqing (Xialong)",
  },
  {
    code: "CNFZH",
    name: "Fuzhou",
  },
  {
    code: "CNHHT",
    name: "Haitian Terminal/ Xiamen",
  },
  {
    code: "CNHME",
    name: "Haimen",
  },
  {
    code: "CNHZH",
    name: "Huzhou",
  },
  {
    code: "CNHZU",
    name: "Houzhu",
  },
  {
    code: "CNJAX",
    name: "Jiaxing",
  },
  {
    code: "CNJGY",
    name: "Jiangyin, Fujian (35)",
  },
  {
    code: "CNJIA",
    name: "Jiangyin, Jiangsu (32)",
  },
  {
    code: "CNJIU",
    name: "Jiujiang, Jiangxi (36)",
  },
  {
    code: "CNLKU",
    name: "Longkou",
  },
  {
    code: "CNLXI",
    name: "Lanxi",
  },
  {
    code: "CNLYG",
    name: "Lianyungang",
  },
  {
    code: "CNMAA",
    name: "Maanshan",
  },
  {
    code: "CNMAW",
    name: "Mawei",
  },
  {
    code: "CNNJI",
    name: "Nanjing",
  },
  {
    code: "CNNTG",
    name: "Nantong",
  },
  {
    code: "CNPUT",
    name: "Putian",
  },
  {
    code: "CNQZL",
    name: "Quanzhou",
  },
  {
    code: "CNRUG",
    name: "Rugao Pt",
  },
  {
    code: "CNRZH",
    name: "Rizhao",
  },
  {
    code: "CNSGU",
    name: "Shangyu",
  },
  {
    code: "CNSHD",
    name: "Shidao",
  },
  {
    code: "CNSZH",
    name: "Suzhou",
  },
  {
    code: "CNTAC",
    name: "Taicang",
  },
  {
    code: "CNTOL",
    name: "Tongling",
  },
  {
    code: "CNTZO",
    name: "Taizhou (Jiangsu, 32)",
  },
  {
    code: "CNWEF",
    name: "Weifang",
  },
  {
    code: "CNWEI",
    name: "Weihai",
  },
  {
    code: "CNWGQ",
    name: "Waigaoqiao",
  },
  {
    code: "CNWHI",
    name: "Wuhu",
  },
  {
    code: "CNWIT",
    name: "Weitou",
  },
  {
    code: "CNWUX",
    name: "Wuxi",
  },
  {
    code: "CNWZO",
    name: "Wenzhou",
  },
  {
    code: "CNXIP",
    name: "Xingang",
  },
  {
    code: "CNXMH",
    name: "Xiamen Haicang",
  },
  {
    code: "CNYAT",
    name: "Yantai",
  },
  {
    code: "CNYGS",
    name: "Yangshan, Shanghai (31)",
  },
  {
    code: "CNYSA",
    name: "Yangshan, Zhejiang (33)",
  },
  {
    code: "CNYZH",
    name: "Yangzhou",
  },
  {
    code: "CNZHE",
    name: "Zhenjiang",
  },
  {
    code: "CNZJG",
    name: "Zhangjiagang",
  },
  {
    code: "CNZOS",
    name: "Zhoushan Pt",
  },
  {
    code: "CNZPU",
    name: "Zhapu",
  },
  {
    code: "CNZZU",
    name: "Zhangzhou",
  },
  {
    code: "CNCQI",
    name: "Chongqing",
  },
  {
    code: "CNFLG",
    name: "Fuling",
  },
  {
    code: "CNLUZ",
    name: "Luzhou",
  },
  {
    code: "CNWZH",
    name: "Wanzhou",
  },
  {
    code: "CNXIA",
    name: "Xian",
  },
  {
    code: "CNYCG",
    name: "Yichang Pt",
  },
  {
    code: "CNYIB",
    name: "Yibin",
  },
  {
    code: "CNBJX",
    name: "Beijingxizhan/Beijing",
  },
  {
    code: "CNBYQ",
    name: "Bayuquan",
  },
  {
    code: "CNCFD",
    name: "Caofeidian",
  },
  {
    code: "CNDDG",
    name: "Dandong Pt",
  },
  {
    code: "CNHRN",
    name: "Harbin",
  },
  {
    code: "CNHUD",
    name: "Huludao",
  },
  {
    code: "CNHUH",
    name: "Huanghua Pt",
  },
  {
    code: "CNJNZ",
    name: "Jinzhou",
  },
  {
    code: "CNSHP",
    name: "Qinhuangdao",
  },
  {
    code: "CNTGS",
    name: "Tangshan Pt",
  },
  {
    code: "CNYIK",
    name: "Yingkou",
  },
  {
    code: "CNBIH",
    name: "Beihai",
  },
  {
    code: "CNBIJ",
    name: "Beijiao",
  },
  {
    code: "CNCIV",
    name: "Civet / Guandong",
  },
  {
    code: "CNCLJ",
    name: "Chenglingji",
  },
  {
    code: "CNCOZ",
    name: "Chaozhou",
  },
  {
    code: "CNCPI",
    name: "Changping",
  },
  {
    code: "CNCSH",
    name: "Changsha (Xianing)",
  },
  {
    code: "CNDCB",
    name: "Dachenbei",
  },
  {
    code: "CNDGG",
    name: "Dongguan",
  },
  {
    code: "CNDHU",
    name: "Danzhou",
  },
  {
    code: "CNDOU",
    name: "Doumen",
  },
  {
    code: "CNFAN",
    name: "Fangcheng",
  },
  {
    code: "CNFOS",
    name: "Foshanzhan/Foshan",
  },
  {
    code: "CNFRT",
    name: "Foshan New Pt",
  },
  {
    code: "CNGBT",
    name: "Guangbaotong",
  },
  {
    code: "CNGGZ",
    name: "Guangzhou",
  },
  {
    code: "CNGOM",
    name: "Gaoming",
  },
  {
    code: "CNGON",
    name: "Gaolan (Guangdong, 44)",
  },
  {
    code: "CNGSH",
    name: "Gaosha",
  },
  {
    code: "CNGUG",
    name: "Guigang",
  },
  {
    code: "CNGYN",
    name: "Gaoyao (Nanan)",
  },
  {
    code: "CNHAS",
    name: "Heshan, Guangxi (45)",
  },
  {
    code: "CNHDG",
    name: "Huadu Pt",
  },
  {
    code: "CNHKO",
    name: "Haikou",
  },
  {
    code: "CNHMN",
    name: "Humen",
  },
  {
    code: "CNHSI",
    name: "Huangshi",
  },
  {
    code: "CNHSN",
    name: "Heshan, Guangdong (44)",
  },
  {
    code: "CNHUA",
    name: "Huangpu",
  },
  {
    code: "CNHUI",
    name: "Huizhou",
  },
  {
    code: "CNJMN",
    name: "Jiangmen",
  },
  {
    code: "CNJTG",
    name: "Jingtang Pt",
  },
  {
    code: "CNJUJ",
    name: "Jiujiang, Guangdong (44)",
  },
  {
    code: "CNJXN",
    name: "Jiao Xin",
  },
  {
    code: "CNJZK",
    name: "Jingzhou",
  },
  {
    code: "CNJZU",
    name: "Jiuzhou",
  },
  {
    code: "CNLIH",
    name: "Lianhuashan",
  },
  {
    code: "CNLNS",
    name: "Lanshi",
  },
  {
    code: "CNLUD",
    name: "Liudu",
  },
  {
    code: "CNLUU",
    name: "Leliu",
  },
  {
    code: "CNLZH",
    name: "Liuzhou",
  },
  {
    code: "CNMWN",
    name: "Mawan",
  },
  {
    code: "CNNAH",
    name: "Nanhai",
  },
  {
    code: "CNNGG",
    name: "Nangang",
  },
  {
    code: "CNNHN",
    name: "Wuhan",
  },
  {
    code: "CNNHS",
    name: "Sanshan",
  },
  {
    code: "CNPGZ",
    name: "Pingzhou",
  },
  {
    code: "CNPNY",
    name: "Panyu (Shiqiao)",
  },
  {
    code: "CNQGY",
    name: "Qingyuan",
  },
  {
    code: "CNQZH",
    name: "Qinzhou",
  },
  {
    code: "CNROQ",
    name: "Rongqi",
  },
  {
    code: "CNSBU",
    name: "Sanbu",
  },
  {
    code: "CNSDG",
    name: "Shuidong",
  },
  {
    code: "CNSHM",
    name: "Mafang",
  },
  {
    code: "CNSJQ",
    name: "Sanshui",
  },
  {
    code: "CNSNW",
    name: "Shenwan",
  },
  {
    code: "CNSRG",
    name: "Sanrong",
  },
  {
    code: "CNSTG",
    name: "Shantou Pt",
  },
  {
    code: "CNSTI",
    name: "Shatian",
  },
  {
    code: "CNSUD",
    name: "Shunde",
  },
  {
    code: "CNTAP",
    name: "Taiping",
  },
  {
    code: "CNTIS",
    name: "Taishan",
  },
  {
    code: "CNTSG",
    name: "Gongyi",
  },
  {
    code: "CNWAZ",
    name: "Wanzai",
  },
  {
    code: "CNWIH",
    name: "Waihai",
  },
  {
    code: "CNWUZ",
    name: "Wuzhou",
  },
  {
    code: "CNXAO",
    name: "Xiaolan",
  },
  {
    code: "CNXAS",
    name: "Xiashan",
  },
  {
    code: "CNXGZ",
    name: "Xiangzhou (Guangdong, 44)",
  },
  {
    code: "CNXIN",
    name: "Xinhui",
  },
  {
    code: "CNXIT",
    name: "Xintang",
  },
  {
    code: "CNXNA",
    name: "Xinsha",
  },
  {
    code: "CNYJI",
    name: "Yangjiang",
  },
  {
    code: "CNYPG",
    name: "Yangpu",
  },
  {
    code: "CNYYA",
    name: "Yueyang",
  },
  {
    code: "CNZNG",
    name: "Zhanjiang Pt",
  },
  {
    code: "CNZQG",
    name: "Zhaoqing Pt",
  },
  {
    code: "CNZSN",
    name: "Zhongshan",
  },
  {
    code: "CNZUH",
    name: "Zhuhai",
  },
  {
    code: "JPABU",
    name: "Aburatsu",
  },
  {
    code: "JPAXT",
    name: "Akita",
  },
  {
    code: "JPCHB",
    name: "Chiba",
  },
  {
    code: "JPFKY",
    name: "Fukuyama, Hiroshima",
  },
  {
    code: "JPHHE",
    name: "Hachinohe",
  },
  {
    code: "JPHIC",
    name: "Hitachinaka",
  },
  {
    code: "JPHIJ",
    name: "Hiroshima",
  },
  {
    code: "JPHKD",
    name: "Hakodate",
  },
  {
    code: "JPHMD",
    name: "Hamada",
  },
  {
    code: "JPHSM",
    name: "Hososhima",
  },
  {
    code: "JPIMB",
    name: "Imabari",
  },
  {
    code: "JPIMI",
    name: "Imari",
  },
  {
    code: "JPISI",
    name: "Ishikari",
  },
  {
    code: "JPIWK",
    name: "Iwakuni",
  },
  {
    code: "JPIYM",
    name: "Iyomishima",
  },
  {
    code: "JPKCZ",
    name: "Kochi",
  },
  {
    code: "JPKIJ",
    name: "Niigata",
  },
  {
    code: "JPKMJ",
    name: "Kumamoto",
  },
  {
    code: "JPKNZ",
    name: "Kanazawa",
  },
  {
    code: "JPKOJ",
    name: "Kagoshima",
  },
  {
    code: "JPKUH",
    name: "Kushiro",
  },
  {
    code: "JPKWS",
    name: "Kawasaki",
  },
  {
    code: "JPMAI",
    name: "Maizuru",
  },
  {
    code: "JPMIZ",
    name: "Mizushima",
  },
  {
    code: "JPMOJ",
    name: "Moji/Kitakyushu",
  },
  {
    code: "JPMYJ",
    name: "Matsuyama",
  },
  {
    code: "JPNAH",
    name: "Naha, Okinawa",
  },
  {
    code: "JPNAN",
    name: "Nakanoseki",
  },
  {
    code: "JPNAO",
    name: "Naoetsu",
  },
  {
    code: "JPNGS",
    name: "Nagasaki",
  },
  {
    code: "JPNKO",
    name: "Nanko",
  },
  {
    code: "JPOIT",
    name: "Oita",
  },
  {
    code: "JPOMZ",
    name: "Omaezaki",
  },
  {
    code: "JPONA",
    name: "Onahama",
  },
  {
    code: "JPSBS",
    name: "Shibushi",
  },
  {
    code: "JPSDJ",
    name: "Sendai, Miyagi",
  },
  {
    code: "JPSEB",
    name: "Seibu",
  },
  {
    code: "JPSEN",
    name: "Satsumasendai, Kagoshima",
  },
  {
    code: "JPSHK",
    name: "Shinkiba",
  },
  {
    code: "JPSHS",
    name: "Shimonoseki",
  },
  {
    code: "JPSKT",
    name: "Sakata",
  },
  {
    code: "JPSMN",
    name: "Sakaiminato",
  },
  {
    code: "JPSMZ",
    name: "Shimizu",
  },
  {
    code: "JPTAK",
    name: "Takamatsu",
  },
  {
    code: "JPTHS",
    name: "Toyohashi",
  },
  {
    code: "JPTKS",
    name: "Tokushima",
  },
  {
    code: "JPTKY",
    name: "Tokuyama",
  },
  {
    code: "JPTMK",
    name: "Tomakomai",
  },
  {
    code: "JPTOS",
    name: "Toyamashinko",
  },
  {
    code: "JPTOY",
    name: "Toyama",
  },
  {
    code: "JPTRG",
    name: "Tsuruga",
  },
  {
    code: "JPUBJ",
    name: "Ube",
  },
  {
    code: "JPYAT",
    name: "Yatsushiro",
  },
  {
    code: "JPYKK",
    name: "Yokkaichi",
  },
  {
    code: "KRKPO",
    name: "Pohang",
  },
  {
    code: "KRKUV",
    name: "Gunsan",
  },
  {
    code: "KRKWA",
    name: "Kwangyang",
  },
  {
    code: "KRPTK",
    name: "Pyeongtaek",
  },
  {
    code: "KRUSN",
    name: "Ulsan",
  },
  {
    code: "TWTPE",
    name: "Taipei",
  },
  {
    code: "TWTYN",
    name: "Taoyuan",
  },
  {
    code: "BDCGP",
    name: "Chittagong",
  },
  {
    code: "BDMGL",
    name: "Mongla",
  },
  {
    code: "MVMLE",
    name: "Male",
  },
  {
    code: "INVTZ",
    name: "Visakhapatnam (ex Vizag)",
  },
  {
    code: "INCCU",
    name: "Kolkata (ex Calcutta)",
  },
  {
    code: "INHAL",
    name: "Haldia",
  },
  {
    code: "INDHA",
    name: "Dhannad/Indore",
  },
  {
    code: "INMNP",
    name: "Mandideep",
  },
  {
    code: "INNAG",
    name: "Nagpur",
  },
  {
    code: "INPIR",
    name: "Pithampur",
  },
  {
    code: "INRTM",
    name: "Ratlam",
  },
  {
    code: "INDCT",
    name: "Dadri Container Terminal",
  },
  {
    code: "INDRA",
    name: "Dashrath Puri",
  },
  {
    code: "INFBE",
    name: "Faridabad",
  },
  {
    code: "INGHR",
    name: "Garhi Harsaru",
  },
  {
    code: "INICD",
    name: "New Delhi",
  },
  {
    code: "INLON",
    name: "Loni",
  },
  {
    code: "INPPG",
    name: "Patparganj",
  },
  {
    code: "INPTL",
    name: "Patli",
  },
  {
    code: "INREA",
    name: "Rewari",
  },
  {
    code: "INSON",
    name: "DICT-Sonipat",
  },
  {
    code: "INTKD",
    name: "Tughlakabad",
  },
  {
    code: "INAGR",
    name: "Agra",
  },
  {
    code: "INJAI",
    name: "Jaipur",
  },
  {
    code: "INJDH",
    name: "Jodhpur",
  },
  {
    code: "INKNU",
    name: "Kanpur",
  },
  {
    code: "INLUH",
    name: "Ludhiana",
  },
  {
    code: "INMOR",
    name: "Moradabad",
  },
  {
    code: "INMPR",
    name: "Malanpur",
  },
  {
    code: "INBLR",
    name: "Bangalore",
  },
  {
    code: "INHYD",
    name: "Hyderabad",
  },
  {
    code: "INTMX",
    name: "Thimmapur (CMTL ICD)",
  },
  {
    code: "INTVT",
    name: "Tondiarpet",
  },
  {
    code: "INAKV",
    name: "Ankleshwar",
  },
  {
    code: "INAMD",
    name: "Ahmedabad",
  },
  {
    code: "INBRC",
    name: "Dashrath-Vadodara (ex Baroda)",
  },
  {
    code: "INMUU",
    name: "Mulund",
  },
  {
    code: "INPNQ",
    name: "Pune",
  },
  {
    code: "LKCMB",
    name: "Colombo",
  },
  {
    code: "INCOK",
    name: "Kochi (ex Cochin)",
  },
  {
    code: "INKRI",
    name: "Krishnapatnam",
  },
  {
    code: "INTUT",
    name: "Thoothukudi (ex Tuticorin)",
  },
  {
    code: "INENR",
    name: "Ennore Port",
  },
  {
    code: "INKAT",
    name: "Kattupalli",
  },
  {
    code: "INMAA",
    name: "Chennai (ex Madras)",
  },
  {
    code: "INIXE",
    name: "Mangalore",
  },
  {
    code: "INMRM",
    name: "Marmagao (Marmugao)",
  },
  {
    code: "INHZA",
    name: "Hazira Port/Surat",
  },
  {
    code: "INIXY",
    name: "Kandla",
  },
  {
    code: "INMUN",
    name: "Mundra",
  },
  {
    code: "INPAV",
    name: "Pipavav (Victor) Port",
  },
  {
    code: "INBOM",
    name: "Mumbai (ex Bombay)",
  },
  {
    code: "INNSA",
    name: "Jawaharlal Nehru (Nhava Sheva)",
  },
  {
    code: "PKKHI",
    name: "Karachi",
  },
  {
    code: "PKQCT",
    name: "Qasim International Container Terminal/Karachi",
  },
  {
    code: "RUFPT",
    name: "Fish Port Terminal",
  },
  {
    code: "RUKOR",
    name: "Korsakov",
  },
  {
    code: "RUMAG",
    name: "Magadansky, Port",
  },
  {
    code: "RUPKC",
    name: "Petropavlovsk-Kamchatskiy",
  },
  {
    code: "RUVVO",
    name: "Vladivostok",
  },
  {
    code: "RUVYP",
    name: "Vostochnyy Port",
  },
  {
    code: "SGSIN",
    name: "Singapore",
  },
  {
    code: "IDBLW",
    name: "Belawan, Sumatra",
  },
  {
    code: "IDJKT",
    name: "Jakarta, Java",
  },
  {
    code: "IDSRG",
    name: "Semarang",
  },
  {
    code: "IDSUB",
    name: "Surabaya",
  },
  {
    code: "MYPEN",
    name: "Penang (Georgetown)",
  },
  {
    code: "MYPGU",
    name: "Pasir Gudang, Johor",
  },
  {
    code: "MYPKG",
    name: "Port Klang (Pelabuhan Klang)",
  },
  {
    code: "MYTPP",
    name: "Tanjung Pelepas",
  },
  {
    code: "PHCEB",
    name: "Cebu",
  },
  {
    code: "PHMNL",
    name: "Manila",
  },
  {
    code: "PHMNN",
    name: "Manila North Harbour",
  },
  {
    code: "PHMNS",
    name: "Manila South Harbour",
  },
  {
    code: "THBKK",
    name: "Bangkok",
  },
  {
    code: "THLCH",
    name: "Laem Chabang",
  },
  {
    code: "VNCMT",
    name: "Cai Mep International Terminal",
  },
  {
    code: "VNDAD",
    name: "Da Nang",
  },
  {
    code: "VNHPH",
    name: "Haiphong",
  },
  {
    code: "VNSGN",
    name: "Ho Chi Minh City",
  },
  {
    code: "VNVUT",
    name: "Vung Tau",
  },
  {
    code: "BNMUA",
    name: "Muara",
  },
  {
    code: "TLDIL",
    name: "Dili",
  },
  {
    code: "KHKOS",
    name: "Sihanoukville (Kâmpóng Saôm)",
  },
  {
    code: "KHPNH",
    name: "Phnom Penh",
  },
  {
    code: "IDBDJ",
    name: "Banjarmasin",
  },
  {
    code: "IDBIT",
    name: "Bitung, Sulawesi",
  },
  {
    code: "IDBOA",
    name: "Benoa, Bali",
  },
  {
    code: "IDBPN",
    name: "Balikpapan, Kalimantan",
  },
  {
    code: "IDBTM",
    name: "Batam",
  },
  {
    code: "IDDJB",
    name: "Jambi, Sumatra",
  },
  {
    code: "IDMAK",
    name: "Makassar",
  },
  {
    code: "IDMRK",
    name: "Merak, Java",
  },
  {
    code: "IDPDG",
    name: "Padang",
  },
  {
    code: "IDPLM",
    name: "Palembang, Sumatra",
  },
  {
    code: "IDPNJ",
    name: "Panjang",
  },
  {
    code: "IDPNK",
    name: "Pontianak, Kalimantan",
  },
  {
    code: "IDPWG",
    name: "Perawang, Sumatra",
  },
  {
    code: "IDSRI",
    name: "Samarinda, Kalimantan",
  },
  {
    code: "MYBKI",
    name: "Kota Kinabalu, Sabah",
  },
  {
    code: "MYBTU",
    name: "Bintulu, Sarawak",
  },
  {
    code: "MYKCH",
    name: "Kuching, Sarawak",
  },
  {
    code: "MYKUA",
    name: "Kuantan (Tanjong Gelang)",
  },
  {
    code: "MYLBU",
    name: "Labuan, Sabah",
  },
  {
    code: "MYMYY",
    name: "Miri, Sarawak",
  },
  {
    code: "MYSBW",
    name: "Sibu, Sarawak",
  },
  {
    code: "MYSDK",
    name: "Sandakan, Sabah",
  },
  {
    code: "MYTWU",
    name: "Tawau, Sabah",
  },
  {
    code: "MMRGN",
    name: "Yangon",
  },
  {
    code: "MMTLA",
    name: "Thilawa",
  },
  {
    code: "PHBTG",
    name: "Batangas, Luzon",
  },
  {
    code: "PHCGY",
    name: "Cagayan de Oro, Mindanao",
  },
  {
    code: "PHDVO",
    name: "Davao, Mindanao",
  },
  {
    code: "PHGES",
    name: "General Santos",
  },
  {
    code: "PHSFS",
    name: "Subic Bay",
  },
  {
    code: "THLKR",
    name: "Lat Krabang",
  },
  {
    code: "THSCS",
    name: "Sahathai Coastal Seaport",
  },
  {
    code: "THSGZ",
    name: "Songkhla",
  },
  {
    code: "THUCT",
    name: "Unithai Container Terminal",
  },
  {
    code: "VNCLI",
    name: "Cát Lái",
  },
  {
    code: "VNCLN",
    name: "Cai Lan",
  },
  {
    code: "VNNHA",
    name: "Nha Trang",
  },
  {
    code: "VNPHG",
    name: "Phuóc Long",
  },
  {
    code: "VNUIH",
    name: "Qui Nhon",
  },
  {
    code: "VNVCA",
    name: "Can Tho",
  },
  {
    code: "VNVIC",
    name: "Ho Chi Minh, VICT",
  },
  {
    code: "ESMPG",
    name: "Marin, Pontevedra",
  },
  {
    code: "ESACE",
    name: "Lanzarote",
  },
  {
    code: "ESFUE",
    name: "Puerto del Rosario-Fuerteventura",
  },
  {
    code: "ESLPA",
    name: "Las Palmas de Gran Canaria",
  },
  {
    code: "ESSCT",
    name: "Santa Cruz de Tenerife",
  },
  {
    code: "ESSPC",
    name: "Santa Cruz de La Palma",
  },
  {
    code: "ESBIO",
    name: "Bilbao",
  },
  {
    code: "ESCAD",
    name: "Cadiz",
  },
  {
    code: "ESGIJ",
    name: "Gijón",
  },
  {
    code: "ESSVQ",
    name: "Sevilla",
  },
  {
    code: "ESVGO",
    name: "Vigo",
  },
  {
    code: "FRBOD",
    name: "Bordeaux",
  },
  {
    code: "FRMTX",
    name: "Montoir-de-Bretagne",
  },
  {
    code: "PTLEI",
    name: "Leixões",
  },
  {
    code: "PTLIS",
    name: "Lisboa",
  },
  {
    code: "FRBES",
    name: "Brest",
  },
  {
    code: "FRLRH",
    name: "La Rochelle",
  },
  {
    code: "PTSET",
    name: "Setúbal",
  },
  {
    code: "PTSIE",
    name: "Sines",
  },
  {
    code: "ESMLN",
    name: "Melilla",
  },
  {
    code: "ESPMI",
    name: "Palma de Mallorca",
  },
  {
    code: "MTDIS",
    name: "Malta",
  },
  {
    code: "BGBOJ",
    name: "Burgas",
  },
  {
    code: "BGVAR",
    name: "Varna",
  },
  {
    code: "GEBUS",
    name: "Batumi",
  },
  {
    code: "GEPTI",
    name: "Poti",
  },
  {
    code: "ROCND",
    name: "Constanta",
  },
  {
    code: "RUAZO",
    name: "Azov",
  },
  {
    code: "RUNVS",
    name: "Novorossiysk",
  },
  {
    code: "TRSSX",
    name: "Samsun",
  },
  {
    code: "TRTZX",
    name: "Trabzon",
  },
  {
    code: "MDGIU",
    name: "Giurgiulesti",
  },
  {
    code: "UAILK",
    name: "Chornomorsk (Illichivs'k)",
  },
  {
    code: "UAODS",
    name: "Odessa",
  },
  {
    code: "UAYUZ",
    name: "Yuzhnyy",
  },
  {
    code: "CYLMS",
    name: "Limassol",
  },
  {
    code: "GRHER",
    name: "Heraklion (Iraklion)",
  },
  {
    code: "GRVOL",
    name: "Vólos",
  },
  {
    code: "LBBEY",
    name: "Beirut",
  },
  {
    code: "TRAYT",
    name: "Antalya",
  },
  {
    code: "TRISK",
    name: "Iskenderun",
  },
  {
    code: "EGALY",
    name: "El Iskandariya (Alexandria)",
  },
  {
    code: "EGDAM",
    name: "Dumyat (Damietta)",
  },
  {
    code: "EGEDK",
    name: "El Dekheila",
  },
  {
    code: "EGPSD",
    name: "Port Said",
  },
  {
    code: "EGPSE",
    name: "Port Said East",
  },
  {
    code: "ILASH",
    name: "Ashdod",
  },
  {
    code: "ILHFA",
    name: "Haifa",
  },
  {
    code: "SYLTK",
    name: "Latakia",
  },
  {
    code: "SYTTS",
    name: "Tartus",
  },
  {
    code: "TRGEB",
    name: "Gebze",
  },
  {
    code: "TRGEM",
    name: "Gemlik",
  },
  {
    code: "TRHAY",
    name: "Haydarpasa",
  },
  {
    code: "TRIZM",
    name: "Izmir",
  },
  {
    code: "TRMER",
    name: "Mersin",
  },
  {
    code: "ESALG",
    name: "Algeciras",
  },
  {
    code: "ESBCN",
    name: "Barcelona",
  },
  {
    code: "ESVLC",
    name: "Valencia",
  },
  {
    code: "FRFOS",
    name: "Fos-sur-Mer",
  },
  {
    code: "HRRJK",
    name: "Rijeka",
  },
  {
    code: "ITAOI",
    name: "Ancona",
  },
  {
    code: "ITBRI",
    name: "Bari",
  },
  {
    code: "ITCVV",
    name: "Civitavecchia",
  },
  {
    code: "ITGIT",
    name: "Gioia Tauro",
  },
  {
    code: "ITGOA",
    name: "Genova",
  },
  {
    code: "ITLIV",
    name: "Livorno",
  },
  {
    code: "ITNAP",
    name: "Napoli",
  },
  {
    code: "ITRAN",
    name: "Ravenna",
  },
  {
    code: "ITSAL",
    name: "Salerno",
  },
  {
    code: "ITSPE",
    name: "La Spezia",
  },
  {
    code: "ITTRS",
    name: "Trieste",
  },
  {
    code: "ITVCE",
    name: "Venezia",
  },
  {
    code: "SIKOP",
    name: "Koper",
  },
  {
    code: "GRPIR",
    name: "Piraeus",
  },
  {
    code: "GRSKG",
    name: "Thessaloníki",
  },
  {
    code: "TRALI",
    name: "Aliaga",
  },
  {
    code: "TRAMR",
    name: "Ambarli",
  },
  {
    code: "TREYP",
    name: "Evyap Pt",
  },
  {
    code: "TRIST",
    name: "Istanbul",
  },
  {
    code: "TRIZT",
    name: "Izmit",
  },
  {
    code: "TRKMX",
    name: "Kumport",
  },
  {
    code: "TRTEK",
    name: "Tekirdag",
  },
  {
    code: "TRYPO",
    name: "Yilport",
  },
  {
    code: "ALDRZ",
    name: "Durrës",
  },
  {
    code: "ESAGP",
    name: "Málaga",
  },
  {
    code: "ESALC",
    name: "Alicante",
  },
  {
    code: "ESCAR",
    name: "Cartagena, ES",
  },
  {
    code: "ESCAS",
    name: "Castellón de la Plana",
  },
  {
    code: "ESLEI",
    name: "Almería",
  },
  {
    code: "ESTAR",
    name: "Tarragona",
  },
  {
    code: "FRMRS",
    name: "Marseille",
  },
  {
    code: "HRPLE",
    name: "Ploce",
  },
  {
    code: "HRSPU",
    name: "Split",
  },
  {
    code: "ITCAG",
    name: "Cagliari",
  },
  {
    code: "ITCTA",
    name: "Catania",
  },
  {
    code: "ITPMA",
    name: "Marghera",
  },
  {
    code: "ITPMO",
    name: "Palermo",
  },
  {
    code: "ITPZL",
    name: "Pozzallo",
  },
  {
    code: "ITTAR",
    name: "Taranto",
  },
  {
    code: "ITTPS",
    name: "Trapani",
  },
  {
    code: "ITVDL",
    name: "Vado Ligure",
  },
  {
    code: "MEBAR",
    name: "Bar",
  },
  {
    code: "FOTHO",
    name: "Thorshavn",
  },
  {
    code: "NOTOS",
    name: "Tromsø",
  },
  {
    code: "BEANR",
    name: "Antwerpen",
  },
  {
    code: "BEZEE",
    name: "Zeebrugge",
  },
  {
    code: "DEBRV",
    name: "Bremerhaven",
  },
  {
    code: "DEHAM",
    name: "Hamburg",
  },
  {
    code: "DEWVN",
    name: "Wilhelmshaven",
  },
  {
    code: "FRLEH",
    name: "Le Havre",
  },
  {
    code: "NLRTM",
    name: "Rotterdam",
  },
  {
    code: "DEBRE",
    name: "Bremen",
  },
  {
    code: "FRDKK",
    name: "Dunkerque",
  },
  {
    code: "FRURO",
    name: "Rouen",
  },
  {
    code: "NLAMS",
    name: "Amsterdam",
  },
  {
    code: "NLMOE",
    name: "Moerdijk",
  },
  {
    code: "IEDUB",
    name: "Dublin",
  },
  {
    code: "IEORK",
    name: "Cork",
  },
  {
    code: "EEMUG",
    name: "Muuga",
  },
  {
    code: "EESLM",
    name: "Sillamäe",
  },
  {
    code: "PLSZZ",
    name: "Szczecin",
  },
  {
    code: "RUKGD",
    name: "Kaliningrad",
  },
  {
    code: "EETLL",
    name: "Tallinn",
  },
  {
    code: "LTKLJ",
    name: "Klaipeda",
  },
  {
    code: "LVRIX",
    name: "Riga",
  },
  {
    code: "FIHEL",
    name: "Helsingfors (Helsinki)",
  },
  {
    code: "FIKTK",
    name: "Kotka",
  },
  {
    code: "FIRAU",
    name: "Rauma (Raumo)",
  },
  {
    code: "FIHMN",
    name: "Fredrikshamn (Hamina)",
  },
  {
    code: "FIKEM",
    name: "Kemi/Torneå (Kemi/Tornio)",
  },
  {
    code: "FIKOK",
    name: "Karleby (Kokkola)",
  },
  {
    code: "FIMTY",
    name: "Mantyluoto",
  },
  {
    code: "FIOUL",
    name: "Uleåborg (Oulu)",
  },
  {
    code: "FIRAA",
    name: "Brahestad (Raahe)",
  },
  {
    code: "FITKU",
    name: "Åbo (Turku)",
  },
  {
    code: "PLGDN",
    name: "Gdansk",
  },
  {
    code: "PLGDY",
    name: "Gdynia",
  },
  {
    code: "RULED",
    name: "Saint Petersburg (ex Leningrad)",
  },
  {
    code: "RUULU",
    name: "Ust'-Luga",
  },
  {
    code: "DKAAL",
    name: "Aalborg",
  },
  {
    code: "NOFRO",
    name: "Florø",
  },
  {
    code: "NOFUS",
    name: "Fusa",
  },
  {
    code: "NOGJM",
    name: "Gjemnes",
  },
  {
    code: "NOIKR",
    name: "Ikornnes",
  },
  {
    code: "NOMAY",
    name: "Måløy",
  },
  {
    code: "NOTAE",
    name: "Tananger",
  },
  {
    code: "SEAHU",
    name: "Åhus",
  },
  {
    code: "SEKAN",
    name: "Karlshamn",
  },
  {
    code: "SEPIT",
    name: "Piteå",
  },
  {
    code: "SESDL",
    name: "Sundsvall",
  },
  {
    code: "SEUME",
    name: "Umeå",
  },
  {
    code: "ISGRT",
    name: "Grundartangi",
  },
  {
    code: "ISREY",
    name: "Reykjavík",
  },
  {
    code: "DKAAR",
    name: "Århus",
  },
  {
    code: "DKCPH",
    name: "Copenhagen (København)",
  },
  {
    code: "DKFRC",
    name: "Fredericia",
  },
  {
    code: "DKKAL",
    name: "Kalundborg",
  },
  {
    code: "SEGOT",
    name: "Gothenburg (Göteborg)",
  },
  {
    code: "SEHAD",
    name: "Halmstad",
  },
  {
    code: "SEHEL",
    name: "Helsingborg",
  },
  {
    code: "SEMMA",
    name: "Malmö",
  },
  {
    code: "NOAES",
    name: "Ålesund",
  },
  {
    code: "NOKSU",
    name: "Kristiansund",
  },
  {
    code: "NOORK",
    name: "Orkanger",
  },
  {
    code: "NOSVE",
    name: "Svelgen",
  },
  {
    code: "NOTRD",
    name: "Trondheim",
  },
  {
    code: "NOBVK",
    name: "Brevik",
  },
  {
    code: "NODRM",
    name: "Drammen",
  },
  {
    code: "NOFRK",
    name: "Fredrikstad",
  },
  {
    code: "NOKRS",
    name: "Kristiansand",
  },
  {
    code: "NOLAR",
    name: "Larvik",
  },
  {
    code: "NOMSS",
    name: "Moss",
  },
  {
    code: "NOOSL",
    name: "Oslo",
  },
  {
    code: "NOBGO",
    name: "Bergen",
  },
  {
    code: "NOHAU",
    name: "Haugesund",
  },
  {
    code: "NOSVG",
    name: "Stavanger",
  },
  {
    code: "NOUME",
    name: "Straume Industriområde",
  },
  {
    code: "SEGVX",
    name: "Gävle",
  },
  {
    code: "SENRK",
    name: "Norrköping",
  },
  {
    code: "SEOXE",
    name: "Oxelösund",
  },
  {
    code: "SESOE",
    name: "Södertälje",
  },
  {
    code: "SESTO",
    name: "Stockholm",
  },
  {
    code: "SEVST",
    name: "Västerås",
  },
  {
    code: "GBFXT",
    name: "Felixstowe",
  },
  {
    code: "GBLGP",
    name: "London Gateway Port",
  },
  {
    code: "GBSOU",
    name: "Southampton",
  },
  {
    code: "GBHUL",
    name: "Hull",
  },
  {
    code: "GBIMM",
    name: "Immingham",
  },
  {
    code: "GBLIV",
    name: "Liverpool",
  },
  {
    code: "GBPRU",
    name: "Portbury",
  },
  {
    code: "GBSSH",
    name: "South Shields",
  },
  {
    code: "GBTEE",
    name: "Teesport",
  },
  {
    code: "GBTHP",
    name: "Thamesport",
  },
  {
    code: "GBTIL",
    name: "Tilbury",
  },
  {
    code: "GBBEL",
    name: "Belfast",
  },
  {
    code: "GBGRG",
    name: "Grangemouth",
  },
  {
    code: "GBGRK",
    name: "Greenock",
  },
  {
    code: "AGSJO",
    name: "Saint John's",
  },
  {
    code: "AWORJ",
    name: "Oranjestad",
  },
  {
    code: "BBBGI",
    name: "Bridgetown",
  },
  {
    code: "CWWIL",
    name: "Willemstad",
  },
  {
    code: "DMRSU",
    name: "Roseau",
  },
  {
    code: "GDSTG",
    name: "Saint George's",
  },
  {
    code: "HNPCR",
    name: "Puerto Cortés",
  },
  {
    code: "KYGEC",
    name: "Georgetown, Grand Cayman",
  },
  {
    code: "MQFDF",
    name: "Fort-de-France",
  },
  {
    code: "PRSJU",
    name: "San Juan",
  },
  {
    code: "SXPHI",
    name: "Philipsburg",
  },
  {
    code: "VGRAD",
    name: "Road Town, Tortola",
  },
  {
    code: "BSFPO",
    name: "Freeport, Grand Bahama",
  },
  {
    code: "BSNAS",
    name: "Nassau",
  },
  {
    code: "BMBDA",
    name: "Hamilton",
  },
  {
    code: "BQKRA",
    name: "Kralendijk",
  },
  {
    code: "COBAQ",
    name: "Barranquilla",
  },
  {
    code: "COCTG",
    name: "Cartagena, CO",
  },
  {
    code: "COSMR",
    name: "Santa Marta",
  },
  {
    code: "COTRB",
    name: "Turbo",
  },
  {
    code: "CUHAV",
    name: "La Habana",
  },
  {
    code: "CUMAR",
    name: "Mariel",
  },
  {
    code: "CUSCU",
    name: "Santiago de Cuba",
  },
  {
    code: "DOCAU",
    name: "Caucedo",
  },
  {
    code: "DOHAI",
    name: "Rio Haina",
  },
  {
    code: "DOPOP",
    name: "Puerto Plata",
  },
  {
    code: "DOSDQ",
    name: "Santo Domingo",
  },
  {
    code: "GPPTP",
    name: "Pointe-à-Pitre",
  },
  {
    code: "GFDDC",
    name: "Dégrad des Cannes",
  },
  {
    code: "GYGEO",
    name: "Georgetown, GY",
  },
  {
    code: "SRPBM",
    name: "Paramaribo",
  },
  {
    code: "HTCAP",
    name: "Cap-Haïtien",
  },
  {
    code: "HTPAP",
    name: "Port-au-Prince",
  },
  {
    code: "JMKIN",
    name: "Kingston",
  },
  {
    code: "JMMBJ",
    name: "Montego Bay",
  },
  {
    code: "KNBAS",
    name: "Basseterre, Saint Kitts",
  },
  {
    code: "KNNEV",
    name: "Charlestown, Nevis",
  },
  {
    code: "LCCAS",
    name: "Castries",
  },
  {
    code: "LCVIF",
    name: "Vieux Fort",
  },
  {
    code: "VCKTN",
    name: "Kingstown",
  },
  {
    code: "TTPOS",
    name: "Port-of-Spain",
  },
  {
    code: "TTPTS",
    name: "Point Lisas",
  },
  {
    code: "TCGDT",
    name: "Grand Turk Island",
  },
  {
    code: "TCPLS",
    name: "Providenciales",
  },
  {
    code: "VEEGU",
    name: "El Guamache",
  },
  {
    code: "VEGUA",
    name: "Guaranao",
  },
  {
    code: "VEGUT",
    name: "Guanta",
  },
  {
    code: "VELAG",
    name: "La Guaira",
  },
  {
    code: "VEMAR",
    name: "Maracaibo",
  },
  {
    code: "VEPBL",
    name: "Puerto Cabello",
  },
  {
    code: "VICTD",
    name: "Christiansted, Saint Croix",
  },
  {
    code: "VICZB",
    name: "Cruz Bay, Saint John",
  },
  {
    code: "VISTT",
    name: "Saint Thomas",
  },
  {
    code: "BZBZE",
    name: "Belize City",
  },
  {
    code: "MXPGO",
    name: "Progreso",
  },
  {
    code: "CRLIO",
    name: "Puerto Limón",
  },
  {
    code: "CRMOB",
    name: "Moín",
  },
  {
    code: "GTPBR",
    name: "Puerto Barrios",
  },
  {
    code: "GTSTC",
    name: "Puerto Santo Tomás de Castilla",
  },
  {
    code: "MXATM",
    name: "Altamira",
  },
  {
    code: "MXVER",
    name: "Veracruz",
  },
  {
    code: "PACTB",
    name: "Cristóbal",
  },
  {
    code: "PAMIT",
    name: "Manzanillo, PA",
  },
  {
    code: "PAONX",
    name: "Colon",
  },
  {
    code: "MXGYM",
    name: "Guaymas",
  },
  {
    code: "MXMZT",
    name: "Mazatlan",
  },
  {
    code: "NICIO",
    name: "Corinto",
  },
  {
    code: "SVAQJ",
    name: "Acajutla",
  },
  {
    code: "SVSAL",
    name: "San Salvador",
  },
  {
    code: "CRCAL",
    name: "Caldera",
  },
  {
    code: "CRPTC",
    name: "Puerto Caldera",
  },
  {
    code: "CRSJO",
    name: "San José",
  },
  {
    code: "GTPRQ",
    name: "Puerto Quetzal",
  },
  {
    code: "MXESE",
    name: "Ensenada",
  },
  {
    code: "MXLZC",
    name: "Lázaro Cárdenas",
  },
  {
    code: "MXZLO",
    name: "Manzanillo, MX",
  },
  {
    code: "PABLB",
    name: "Balboa",
  },
  {
    code: "PAPTY",
    name: "Panamá, Ciudad de",
  },
  {
    code: "ARUSH",
    name: "Ushuaia",
  },
  {
    code: "CLPUQ",
    name: "Punta Arenas",
  },
  {
    code: "ARBUE",
    name: "Buenos Aires",
  },
  {
    code: "BRSSZ",
    name: "Santos",
  },
  {
    code: "UYMVD",
    name: "Montevideo",
  },
  {
    code: "BRSSA",
    name: "Salvador",
  },
  {
    code: "BRSUA",
    name: "Suape",
  },
  {
    code: "BRIOA",
    name: "Itapoa",
  },
  {
    code: "BRNVT",
    name: "Navegantes",
  },
  {
    code: "BRPNG",
    name: "Paranaguá",
  },
  {
    code: "BRRIG",
    name: "Rio Grande",
  },
  {
    code: "ARBHI",
    name: "Bahía Blanca",
  },
  {
    code: "ARCOU",
    name: "Concepción del Uruguay",
  },
  {
    code: "ARMDQ",
    name: "Mar del Plata",
  },
  {
    code: "ARPMY",
    name: "Puerto Madryn",
  },
  {
    code: "ARPUD",
    name: "Puerto Deseado",
  },
  {
    code: "ARROS",
    name: "Rosario",
  },
  {
    code: "ARZAE",
    name: "Zárate",
  },
  {
    code: "BRFOR",
    name: "Fortaleza",
  },
  {
    code: "BRIQI",
    name: "Porto do Itaqui (São Luís)",
  },
  {
    code: "BRNAT",
    name: "Natal",
  },
  {
    code: "BRPEC",
    name: "Pecém",
  },
  {
    code: "BRVIX",
    name: "Vitoria",
  },
  {
    code: "BRVLC",
    name: "Vila do Conde",
  },
  {
    code: "BRIBB",
    name: "Imbituba",
  },
  {
    code: "BRITJ",
    name: "Itajai",
  },
  {
    code: "BRRIO",
    name: "Rio de Janeiro",
  },
  {
    code: "BRSPB",
    name: "Port of Itaguai",
  },
  {
    code: "BRMAO",
    name: "Manaus",
  },
  {
    code: "BRPVH",
    name: "Pôrto Velho",
  },
  {
    code: "PYASU",
    name: "Asunción",
  },
  {
    code: "PYCAA",
    name: "Caacupé",
  },
  {
    code: "PYTER",
    name: "Terport (San Antonio)",
  },
  {
    code: "CLSAI",
    name: "San Antonio",
  },
  {
    code: "CLVAP",
    name: "Valparaiso",
  },
  {
    code: "COBUN",
    name: "Buenaventura",
  },
  {
    code: "ECGYE",
    name: "Guayaquil",
  },
  {
    code: "PECLL",
    name: "Callao",
  },
  {
    code: "CLCNL",
    name: "Coronel",
  },
  {
    code: "CLLQN",
    name: "Lirquén",
  },
  {
    code: "CLSVE",
    name: "San Vicente",
  },
  {
    code: "CLANF",
    name: "Antofagasta",
  },
  {
    code: "CLARI",
    name: "Arica",
  },
  {
    code: "CLIQQ",
    name: "Iquique",
  },
  {
    code: "CLMJS",
    name: "Mejillones",
  },
  {
    code: "CLPAG",
    name: "Puerto Angamos",
  },
  {
    code: "ECESM",
    name: "Esmeraldas",
  },
  {
    code: "PEILQ",
    name: "Ilo",
  },
  {
    code: "PEMRI",
    name: "Matarani",
  },
  {
    code: "PEPAI",
    name: "Paita",
  },
  {
    code: "PEPIO",
    name: "Pisco",
  },
  {
    code: "OMMCT",
    name: "Muscat/Qaboos",
  },
  {
    code: "OMSLL",
    name: "Salalah",
  },
  {
    code: "OMSOH",
    name: "Sohar",
  },
  {
    code: "BHKBS",
    name: "Khalifa Bin Salman Port",
  },
  {
    code: "IQUQR",
    name: "Umm Qasr Port",
  },
  {
    code: "KWSAA",
    name: "Shuaiba",
  },
  {
    code: "KWSWK",
    name: "Shuwaikh",
  },
  {
    code: "QADOH",
    name: "Doha",
  },
  {
    code: "QAHMD",
    name: "Hamad",
  },
  {
    code: "SADMM",
    name: "Ad Dammam",
  },
  {
    code: "SAJUB",
    name: "Jubail",
  },
  {
    code: "BHMIN",
    name: "Mina Sulman Port",
  },
  {
    code: "IQKAZ",
    name: "Khor al Zubair",
  },
  {
    code: "IRBND",
    name: "Bandar Abbas",
  },
  {
    code: "KWKWI",
    name: "Kuwait",
  },
  {
    code: "QAUMS",
    name: "Umm Sa'id (Mesaieed)",
  },
  {
    code: "AEKLF",
    name: "Khor al Fakkan",
  },
  {
    code: "AEQIW",
    name: "Umm al Qaiwain",
  },
  {
    code: "AEAUH",
    name: "Abu Dhabi",
  },
  {
    code: "AEDXB",
    name: "Dubai",
  },
  {
    code: "AEJEA",
    name: "Jebel Ali",
  },
  {
    code: "AEKHL",
    name: "Mina Khalifa/Abu Dhabi",
  },
  {
    code: "AEAJM",
    name: "Ajman",
  },
  {
    code: "AEFJR",
    name: "Al Fujayrah",
  },
  {
    code: "AESHJ",
    name: "Sharjah",
  },
  {
    code: "ERMSW",
    name: "Massawa (Mitsiwa)",
  },
  {
    code: "SAYNB",
    name: "Yanbu al-Bahr",
  },
  {
    code: "SDPZU",
    name: "Port Sudan",
  },
  {
    code: "SOBBO",
    name: "Berbera",
  },
  {
    code: "DJJIB",
    name: "Djibouti",
  },
  {
    code: "EGSOK",
    name: "Sokhna Port",
  },
  {
    code: "JOAQB",
    name: "'Aqaba",
  },
  {
    code: "SAJED",
    name: "Jeddah",
  },
  {
    code: "SAKAC",
    name: "King Abdullah City",
  },
  {
    code: "YEADE",
    name: "Aden",
  },
  {
    code: "YEHOD",
    name: "Hodeidah",
  },
  {
    code: "SARYP",
    name: "Riyadh Dry Port",
  },
  {
    code: "USANC",
    name: "Anchorage, AK",
  },
  {
    code: "USHNL",
    name: "Honolulu, HI",
  },
  {
    code: "USPDX",
    name: "Portland, OR",
  },
  {
    code: "CAHAL",
    name: "Halifax, NS",
  },
  {
    code: "CAMTR",
    name: "Montreal, QC",
  },
  {
    code: "CATOR",
    name: "Toronto, ON",
  },
  {
    code: "CASJB",
    name: "Saint-John, NB",
  },
  {
    code: "CASJF",
    name: "Saint-John's, NL",
  },
  {
    code: "CAQUE",
    name: "Quebec, QC",
  },
  {
    code: "CACAL",
    name: "Calgary, AB",
  },
  {
    code: "CAEDM",
    name: "Edmonton, AB",
  },
  {
    code: "CASAK",
    name: "Saskatoon, SK",
  },
  {
    code: "CAWNP",
    name: "Winnipeg, MB",
  },
  {
    code: "CAPRR",
    name: "Prince Rupert, BC",
  },
  {
    code: "CAVAN",
    name: "Vancouver, BC",
  },
  {
    code: "USJAX",
    name: "Jacksonville, FL",
  },
  {
    code: "USMIA",
    name: "Miami, FL",
  },
  {
    code: "USPEF",
    name: "Port Everglades, FL",
  },
  {
    code: "USCHS",
    name: "Charleston, SC",
  },
  {
    code: "USILM",
    name: "Wilmington, NC",
  },
  {
    code: "USNYC",
    name: "New York City/Newark, NY&NJ",
  },
  {
    code: "USORF",
    name: "Norfolk, VA",
  },
  {
    code: "USSAV",
    name: "Savannah, GA",
  },
  {
    code: "USBAL",
    name: "Baltimore, MD",
  },
  {
    code: "USBOS",
    name: "Boston, MA",
  },
  {
    code: "USCHT",
    name: "Chester, PA",
  },
  {
    code: "USPHL",
    name: "Philadelphia, PA",
  },
  {
    code: "USHOU",
    name: "Houston, TX",
  },
  {
    code: "USMOB",
    name: "Mobile, AL",
  },
  {
    code: "USMSY",
    name: "New Orleans, LA",
  },
  {
    code: "USTPA",
    name: "Tampa, FL",
  },
  {
    code: "USBNV",
    name: "Bensenville, IL",
  },
  {
    code: "USCHI",
    name: "Chicago, IL",
  },
  {
    code: "USJOT",
    name: "Joliet, IL",
  },
  {
    code: "USNTI",
    name: "Northlake, IL",
  },
  {
    code: "USRCX",
    name: "Rochelle, IL",
  },
  {
    code: "USCLE",
    name: "Cleveland, OH",
  },
  {
    code: "USCMH",
    name: "Columbus, OH",
  },
  {
    code: "USCVG",
    name: "Cincinnati, OH",
  },
  {
    code: "USDET",
    name: "Detroit, MI",
  },
  {
    code: "USCBF",
    name: "Council Bluffs, IA",
  },
  {
    code: "USCPF",
    name: "Chippewa Falls, WI",
  },
  {
    code: "USESL",
    name: "East Saint Louis, IL",
  },
  {
    code: "USEVV",
    name: "Evansville, IN",
  },
  {
    code: "USIND",
    name: "Indianapolis, IN",
  },
  {
    code: "USKCK",
    name: "Kansas City, KS",
  },
  {
    code: "USMES",
    name: "Minneapolis, MN",
  },
  {
    code: "USOMA",
    name: "Omaha, NE",
  },
  {
    code: "USSTL",
    name: "Saint Louis, MO",
  },
  {
    code: "USSTP",
    name: "Saint Paul, MN",
  },
  {
    code: "USBUF",
    name: "Buffalo, NY",
  },
  {
    code: "USFRR",
    name: "Front Royal, VA",
  },
  {
    code: "USORH",
    name: "Worcester, MA",
  },
  {
    code: "USPIT",
    name: "Pittsburgh, PA",
  },
  {
    code: "USBHM",
    name: "Birmingham, AL",
  },
  {
    code: "USHSV",
    name: "Huntsville, AL",
  },
  {
    code: "USATL",
    name: "Atlanta, GA",
  },
  {
    code: "USCLT",
    name: "Charlotte, NC",
  },
  {
    code: "USGBO",
    name: "Greensboro, NC",
  },
  {
    code: "USGXX",
    name: "Greer, SC",
  },
  {
    code: "USBNA",
    name: "Nashville, TN",
  },
  {
    code: "USGEO",
    name: "Georgetown, KY",
  },
  {
    code: "USLUI",
    name: "Louisville, KY",
  },
  {
    code: "USMEM",
    name: "Memphis, TN",
  },
  {
    code: "USMQM",
    name: "Marion, AR",
  },
  {
    code: "USDEN",
    name: "Denver, CO",
  },
  {
    code: "USSLC",
    name: "Salt Lake City, UT",
  },
  {
    code: "USELP",
    name: "El Paso, TX",
  },
  {
    code: "USPHX",
    name: "Phoenix, AZ",
  },
  {
    code: "USSXT",
    name: "Santa Teresa, NM",
  },
  {
    code: "USDAL",
    name: "Dallas, TX",
  },
  {
    code: "USFWT",
    name: "Fort Worth, TX",
  },
  {
    code: "USHXC",
    name: "Haslet, TX",
  },
  {
    code: "USLRD",
    name: "Laredo, TX",
  },
  {
    code: "USSAT",
    name: "San Antonio, TX",
  },
  {
    code: "USOAK",
    name: "Oakland, CA",
  },
  {
    code: "USLAX",
    name: "Los Angeles, CA",
  },
  {
    code: "USLGB",
    name: "Long Beach, CA",
  },
  {
    code: "USSEA",
    name: "Seattle, WA",
  },
  {
    code: "USTIW",
    name: "Tacoma, WA",
  },
  {
    code: "AUDRW",
    name: "Darwin",
  },
  {
    code: "AUTSV",
    name: "Townsville",
  },
  {
    code: "NZBLU",
    name: "Bluff",
  },
  {
    code: "NZNPL",
    name: "New Plymouth",
  },
  {
    code: "AUADL",
    name: "Adelaide",
  },
  {
    code: "AUBNE",
    name: "Brisbane",
  },
  {
    code: "AUFRE",
    name: "Fremantle",
  },
  {
    code: "AUMEL",
    name: "Melbourne",
  },
  {
    code: "AUSYD",
    name: "Sydney",
  },
  {
    code: "NZAKL",
    name: "Auckland",
  },
  {
    code: "NZLYT",
    name: "Lyttelton",
  },
  {
    code: "NZNPE",
    name: "Napier",
  },
  {
    code: "NZTRG",
    name: "Tauranga",
  },
  {
    code: "NZNSN",
    name: "Nelson",
  },
  {
    code: "NZPOE",
    name: "Port Chalmers",
  },
  {
    code: "NZTIU",
    name: "Timaru",
  },
  {
    code: "NZWLG",
    name: "Wellington",
  },
  {
    code: "AUBEL",
    name: "Bell Bay",
  },
  {
    code: "AUBWT",
    name: "Burnie",
  },
  {
    code: "AUDPO",
    name: "Devonport",
  },
  {
    code: "AUHBA",
    name: "Hobart",
  },
  {
    code: "AULST",
    name: "Launceston",
  },
  {
    code: "ASPPG",
    name: "Pago Pago",
  },
  {
    code: "CKAIT",
    name: "Aitutaki",
  },
  {
    code: "CKRAR",
    name: "Rarotonga",
  },
  {
    code: "FJLTK",
    name: "Lautoka",
  },
  {
    code: "FJSUV",
    name: "Suva",
  },
  {
    code: "FMKSA",
    name: "Kosrae (ex Kusaie)",
  },
  {
    code: "FMTKK",
    name: "Chuuk (ex Truk)",
  },
  {
    code: "GUGUM",
    name: "Guam",
  },
  {
    code: "KITRW",
    name: "Tarawa",
  },
  {
    code: "MHMAJ",
    name: "Majuro",
  },
  {
    code: "NCNOU",
    name: "Nouméa",
  },
  {
    code: "NUIUE",
    name: "Niue Island",
  },
  {
    code: "PFPPT",
    name: "Papeete",
  },
  {
    code: "PWROR",
    name: "Koror",
  },
  {
    code: "SBHIR",
    name: "Honiara, Guadalcanal Is",
  },
  {
    code: "SBNOR",
    name: "Noro, New Georgia",
  },
  {
    code: "TOTBU",
    name: "Nuku'alofa",
  },
  {
    code: "TVFUN",
    name: "Funafuti",
  },
  {
    code: "VUVLI",
    name: "Port Vila",
  },
  {
    code: "WFMAU",
    name: "Matâ'utu",
  },
  {
    code: "WFSIG",
    name: "Sigavé",
  },
  {
    code: "WSAPW",
    name: "Apia",
  },
  {
    code: "PGKIM",
    name: "Kimbe",
  },
  {
    code: "PGLAE",
    name: "Lae",
  },
  {
    code: "PGMAG",
    name: "Madang",
  },
  {
    code: "PGPOM",
    name: "Port Moresby",
  },
  {
    code: "PGRAB",
    name: "Rabaul",
  },
  {
    code: "PGWWK",
    name: "Wewak",
  },
];
