 
const cardList = {
    Numbers : [
        { id:  1 ,symbol: '1', description: '1' },
        { id:  2 ,symbol: '2', description: '2' },
        { id:  3 ,symbol: '3', description: '3' },
        { id:  4 ,symbol: '4', description: '4' },
        { id:  5 ,symbol: '5', description: '5' },
        { id:  6 ,symbol: '6', description: '6' },
        { id:  7 ,symbol: '7', description: '7' },
        { id:  8 ,symbol: '8', description: '8' },
        { id:  9 ,symbol: '9', description: '9' },
        { id:  10 ,symbol: '10', description: '10' },
        { id:  11 ,symbol: '11', description: '11' },
        { id:  12 ,symbol: '12', description: '12' },
        { id:  13 ,symbol: '13', description: '13' },
        { id:  14 ,symbol: '14', description: '14' },
        { id:  15 ,symbol: '15', description: '15' },
        { id:  16 ,symbol: '16', description: '16' },
        { id:  17, symbol: '17', description: '17' },
        { id:  18,symbol: '18', description: '18' },
        { id:  19 ,symbol: '19', description: '19' },
        { id:  20 ,symbol: '20', description: '20' },
        { id:  21 ,symbol: '21', description: '21' },
        { id:  22 ,symbol: '22', description: '22' },
        { id:  23 ,symbol: '23', description: '23' },
        { id:  24,symbol: '24', description: '24' },
        { id:  25,symbol: '25', description: '25' },
        { id:  26 ,symbol: '26', description: '26' },
        { id:  27,symbol: '27', description: '27' },
        { id:  28, symbol: '28', description: '28' },
        { id:  29,symbol: '29', description: '29' },
        { id:  30,symbol: '30', description: '30' },
        { id:  31 ,symbol: '31', description: '31' },
        { id:  32,symbol: '32', description: '32' },
        { id:  33,symbol: '33', description: '33' }
    ], 
        Flags : [
       {id:1,
    symbol: '🇦🇨',
    description: 'Ascension Island flag'
  }, { id:2,
    symbol: '🇦🇩',
    description: 'Andorra flag'
  }, { id:3,
    symbol: '🇦🇪',
    description: 'UAE flag'
  }, { id:4,
    symbol: '🇦🇫',
    description: 'Afghanistan flag'
  }, { id:5,
    symbol: '🇦🇬',
    description: 'Antigua and Berbuda flag'
  }, { id:6,
    symbol: '🇦🇮',
    description: 'Anguila flag'
  }, { id:7,
    symbol: '🇦🇱',
    description: 'Albania flag'
  }, { id:8,
    symbol: '🇦🇲',
    description: 'Armenia flag'
  }, { id:9,
    symbol: '🇦🇴',
    description: 'Angola flag'
  }, { id:10,
    symbol: '🇦🇶',
    description: 'Antarctica flag'
  }, { id:11,
    symbol: '🇦🇷',
    description: 'Argentina flag'
  }, { id:12,
    symbol: '🇦🇸',
    description: 'American Samoa flag'
  }, { id:13,
    symbol: '🇦🇹',
    description: 'Austria flag'
  }, { id:14,
    symbol: '🇦🇺',
    description: 'Australia flag'
  }, { id:15,
    symbol: '🇦🇼',
    description: 'Aruba flag'
  }, { id:16,
    symbol: '🇦🇽',
    description: 'Åland Islands flag'
  }, { id:17,
    symbol: '🇦🇿',
    description: 'Azerbaijan flag'
  }, { id:18,
    symbol: '🇧🇦',
    description: 'Bosnia flag'
  }, { id:19,
    symbol: '🇧🇧',
    description: 'Barbados flag'
  }, { id:20,
    symbol: '🇧🇩',
    description: 'Bangladesh flag'
  }, { id:21,
    symbol: '🇧🇪',
    description: 'Belgium flag'
  }, { id:22,
    symbol: '🇧🇫',
    description: 'Burkina Faso flag'
  }, { id:23,
    symbol: '🇧🇬',
    description: 'Bulgaria flag'
  }, { id:24,
    symbol: '🇧🇭',
    description: 'Bahrain flag'
  }, { id:25,
    symbol: '🇧🇮',
    description: 'Burundi flag'
  }, { id:26,
    symbol: '🇧🇯',
    description: 'Benin Republic flag'
  }, { id:27,
    symbol: '🇧🇱',
    description: 'St. Barthélemy'
  }, { id:28,
    symbol: '🇧🇲',
    description: 'Bermuda flag'
  }, { id:29,
    symbol: '🇧🇳',
    description: 'Brunei flag'
  }, { id:30,
    symbol: '🇧🇴',
    description: 'Bolivia flag'
  }, { id:31,
    symbol: '🇧🇶',
    description: 'Caribbean Netherlands flag'
  }, { id:32,
    symbol: '🇧🇷',
    description: 'Brazil flag'
  }, { id:33,
    symbol: '🇧🇸',
    description: 'Bahamas flag'
  }, { id:34,
    symbol: '🇧🇹',
    description: 'Bhutan flag'
  }, { id:35,
    symbol: '🇧🇻',
    description: 'Bouvet Island flag'
  }, { id:36,
    symbol: '🇧🇼',
    description: 'Botswana flag'
  }, { id:37,
    symbol: '🇧🇾',
    description: 'Belarus flag'
  }, { id:38,
    symbol: '🇧🇿',
    description: 'Belize flag'
  }, { id:39,
    symbol: '🇨🇦',
    description: 'Canada flag'
  }, { id:40,
    symbol: '🇨🇨',
    description: 'Cocos Islands flag'
  }, { id:41,
    symbol: '🇨🇩',
    description: 'Congo DR flag'
  }, { id:42,
    symbol: '🇨🇫',
    description: 'CAR (Central African Republic) flag'
  }, { id:43,
    symbol: '🇨🇬',
    description: 'Congo Brazzaville flag'
  }, { id:44,
    symbol: '🇨🇭',
    description: 'Switzerland flag'
  }, { id:45,
    symbol: '🇨🇮',
    description: 'Côte d’Ivoire flag'
  }, { id:46,
    symbol: '🇨🇰',
    description: 'Cook Islands flag'
  }, { id:47,
    symbol: '🇨🇱',
    description: 'Chile flag'
  }, { id:48,
    symbol: '🇨🇲',
    description: 'Cameroun flag'
  }, { id:49,
    symbol: '🇨🇳',
    description: 'China flag'
  }, { id:50,
    symbol: '🇨🇴',
    description: 'Columbia flag'
  }, { id:51,
    symbol: '🇨🇵',
    description: 'Clipperton Island flag'
  }, { id:52,
    symbol: '🇨🇷',
    description: 'Costa Rica flag'
  }, { id:53,
    symbol: '🇨🇺',
    description: 'Cuba flag'
  }, { id:54,
    symbol: '🇨🇻',
    description: 'Cape Verde Island flag'
  }, { id:55,
    symbol: '🇨🇼',
    description: 'Curaçao flag'
  }, { id:56,
    symbol: '🇨🇽',
    description: 'Christmas Island flag'
  }, { id:57,
    symbol: '🇨🇾',
    description: 'Cyprus flag'
  }, { id:58,
    symbol: '🇩🇪',
    description: 'Germany flag'
  }, { id:59,
    symbol: '🇩🇬',
    description: 'Diego Garcia flag'
  }, { id:60,
    symbol: '🇩🇯',
    description: 'Djibouti flag'
  }, { id:61,
    symbol: '🇩🇰',
    description: 'Denmark flag'
  }, { id:62,
    symbol: '🇩🇲',
    description: 'Dominica flag'
  }, { id:63,
    symbol: '🇩🇴',
    description: 'Dominican Republic flag'
  }, { id:64,
    symbol: '🇩🇿',
    description: 'Algeria flag'
  }, { id:65,
    symbol: '🇪🇦',
    description: 'Ceuta & Melilla flag'
  }, { id:66,
    symbol: '🇪🇨',
    description: 'Ecuador flag'
  }, { id:67,
    symbol: '🇪🇪',
    description: 'Estonia'
  }, { id:68,
    symbol: '🇪🇬',
    description: 'Egypt flag'
  }, { id:69,
    symbol: '🇪🇭',
    description: 'Western Sahara flag'
  }, { id:70,
    symbol: '🇪🇷',
    description: 'Eritrea flag'
  }, { id:71,
    symbol: '🇪🇸',
    description: 'Spain flag'
  }, { id:72,
    symbol: '🇪🇹',
    description: 'Ethiopia flag'
  }, { id:73,
    symbol: '🇪🇺',
    description: 'EU flag'
  }, { id:74,
    symbol: '🇫🇮',
    description: 'Finland flag'
  }, { id:75,
    symbol: '🇫🇯',
    description: 'Fiji flag'
  }, { id:76,
    symbol: '🇫🇰',
    description: 'Falkland Island flag'
  }, { id:77,
    symbol: '🇫🇲',
    description: 'Micronesia flag'
  }, { id:78,
    symbol: '🇫🇴',
    description: 'Faroe Island flag'
  }, { id:79,
    symbol: '🇫🇷',
    description: 'France flag'
  }, { id:80,
    symbol: '🇬🇦',
    description: 'Gabon flag'
  }, { id:81,
    symbol: '🇬🇧',
    description: 'United Kingdom flag'
  }, { id:82,
    symbol: '🇬🇩',
    description: 'Grenada flag'
  }, { id:83,
    symbol: '🇬🇪',
    description: 'Georgia flag'
  }, { id:84,
    symbol: '🇬🇫',
    description: 'French Guiana flag'
  }, { id:85,
    symbol: '🇬🇬',
    description: 'Guernsey flag'
  }, { id:86,
    symbol: '🇬🇭',
    description: 'Ghana flag'
  }, { id:87,
    symbol: '🇬🇮',
    description: 'Gibraltar flag'
  }, { id:88,
    symbol: '🇬🇱',
    description: 'Greenland flag'
  }, { id:89,
    symbol: '🇬🇲',
    description: 'Gambia flag'
  }, { id:90,
    symbol: '🇬🇳',
    description: 'Guinea flag'
  }, { id:91,
    symbol: '🇬🇵',
    description: 'Guadeloupe flag'
  }, { id:92,
    symbol: '🇬🇶',
    description: 'Equitorial Guinea flag'
  }, { id:93,
    symbol: '🇬🇷',
    description: 'Greece flag'
  }, { id:94,
    symbol: '🇬🇸',
    description: 'South Georgia & South Sandwich Islands flag'
  }, { id:95,
    symbol: '🇬🇹',
    description: 'Guatemala flag'
  }, { id:96,
    symbol: '🇬🇺',
    description: 'Guam flag'
  }, { id:97,
    symbol: '🇬🇼',
    description: 'Guinea Bissau flag'
  }, { id:98,
    symbol: '🇬🇾',
    description: 'Guyana flag'
  }, { id:99,
    symbol: '🇭🇰',
    description: 'Hong Kong flag'
  }, { id:100,
    symbol: '🇭🇲',
    description: 'Heard & McDonald Islands flag'
  }, { id:101,
    symbol: '🇭🇳',
    description: 'Honduras flag'
  }, { id:102,
    symbol: '🇭🇷',
    description: 'Croatia flag'
  }, { id:103,
    symbol: '🇭🇹',
    description: 'Haiti flag'
  }, { id:104,
    symbol: '🇭🇺',
    description: 'Hungary flag'
  }, { id:105,
    symbol: '🇮🇨',
    description: 'Canary Islands flag'
  }, { id:106,
    symbol: '🇮🇩',
    description: 'Indonesia flag'
  }, { id:107,
    symbol: '🇮🇪',
    description: 'Island flag'
  }, { id:108,
    symbol: '🇮🇱',
    description: 'Israel flag'
  }, { id:109,
    symbol: '🇮🇲',
    description: 'Isle of Man flag'
  }, { id:110,
    symbol: '🇮🇳',
    description: 'India flag'
  }, { id:111,
    symbol: '🇮🇴',
    description: 'British Indian Ocean Territory flag'
  }, { id:112,
    symbol: '🇮🇶',
    description: 'Iraq flag'
  }, { id:113,
    symbol: '🇮🇷',
    description: 'Iran flag'
  }, { id:114,
    symbol: '🇮🇸',
    description: 'Iceland flag'
  }, { id:115,
    symbol: '🇮🇹',
    description: 'Italy flag'
  }, { id:116,
    symbol: '🇯🇪',
    description: 'Jersey flag'
  }, { id:117,
    symbol: '🇯🇲',
    description: 'Jamaica flag'
  }, { id:118,
    symbol: '🇯🇴',
    description: 'Jordan flag'
  }, { id:119,
    symbol: '🇯🇵',
    description: 'Japan flag'
  }, { id:120,
    symbol: '🇰🇪',
    description: 'Kenya flag'
  }, { id:121,
    symbol: '🇰🇬',
    description: 'Kyrgyzstan flag'
  }, { id:122,
    symbol: '🇰🇭',
    description: 'Cambodia flag'
  }, { id:123,
    symbol: '🇰🇮',
    description: 'Kiribati flag'
  }, { id:124,
    symbol: '🇰🇲',
    description: 'Comoros Island flag'
  }, { id:125,
    symbol: '🇰🇳',
    description: 'St. Kitts & Nevis Flag'
  }, { id:126,
    symbol: '🇰🇵',
    description: 'North Korea flag'
  }, { id:127,
    symbol: '🇰🇷',
    description: 'South Korea flag'
  }, { id:128,
    symbol: '🇰🇼',
    description: 'Kuwait flag'
  }, { id:129,
    symbol: '🇰🇾',
    description: 'Cayman Island flag'
  }, { id:130,
    symbol: '🇰🇿',
    description: 'Kazakhstan flag'
  }, { id:131,
    symbol: '🇱🇦',
    description: 'Laos flag'
  }, { id:132,
    symbol: '🇱🇧',
    description: 'Lebanon flag'
  }, { id:133,
    symbol: '🇱🇨',
    description: 'St. Lucia flag'
  }, { id:134,
    symbol: '🇱🇮',
    description: 'Liechtenstein flag'
  }, { id:135,
    symbol: '🇱🇰',
    description: 'Sri Lanka flag'
  }, { id:136,
    symbol: '🇱🇷',
    description: 'Liberia flag'
  }, { id:137,
    symbol: '🇱🇸',
    description: 'Lesotho flag'
  }, { id:138,
    symbol: '🇱🇹',
    description: 'LIthuania flag'
  }, { id:139,
    symbol: '🇱🇻',
    description: 'Latvia flag'
  }, { id:140,
    symbol: '🇱🇾',
    description: 'Libya flag'
  }, { id:141,
    symbol: '🇲🇦',
    description: 'Morocco flag'
  }, { id:142,
    symbol: '🇲🇨',
    description: 'Monaco flag'
  }, { id:143,
    symbol: '🇲🇩',
    description: 'Moldova flag'
  }, { id:144,
    symbol: '🇲🇪',
    description: 'Montenegro flag'
  }, { id:145,
    symbol: '🇲🇬',
    description: 'Montenegro flag'
  }, { id:146,
    symbol: '🇲🇭',
    description: 'Marshall Islands flag'
  }, { id:147,
    symbol: '🇲🇰',
    description: 'North Macedonia flag'
  }, { id:148,
    symbol: '🇲🇱',
    description: 'Mali flag'
  }, { id:149,
    symbol: '🇲🇲',
    description: 'Myanmar flag'
  }, { id:150,
    symbol: '🇲🇳',
    description: 'Mongolia flag'
  }, { id:151,
    symbol: '🇲🇴',
    description: 'Macao flag'
  }, { id:152,
    symbol: '🇲🇵',
    description: 'Northern Mariana Islands flag'
  }, { id:153,
    symbol: '🇲🇶',
    description: 'Marthinique flag'
  }, { id:154,
    symbol: '🇲🇷',
    description: 'Mauritania flag'
  }, { id:155,
    symbol: '🇲🇸',
    description: 'Montserrat flag'
  }, { id:156,
    symbol: '🇲🇹',
    description: 'Malta flag'
  }, { id:157,
    symbol: '🇲🇺',
    description: 'Mauritius flag'
  }, { id:158,
    symbol: '🇲🇻',
    description: 'Maldives flag'
  }, { id:159,
    symbol: '🇲🇼',
    description: 'Malawi flag'
  }, { id:160,
    symbol: '🇲🇽',
    description: 'Mexico flag'
  }, { id:161,
    symbol: '🇲🇾',
    description: 'Malaysia flag'
  }, { id:162,
    symbol: '🇲🇿',
    description: 'Mozambique flag'
  }, { id:163,
    symbol: '🇳🇦',
    description: 'Namibia flag'
  }, { id:164,
    symbol: '🇳🇨',
    description: 'New Caledonia flag'
  }, { id:165,
    symbol: '🇳🇪',
    description: 'Niger flag'
  }, { id:166,
    symbol: '🇳🇫',
    description: 'Norfolk Island flag'
  }, { id:167,
    symbol: '🇳🇬',
    description: 'Nigeria flag'
  }, { id:168,
    symbol: '🇳🇮',
    description: 'Nicaragua flag'
  }, { id:169,
    symbol: '🇳🇱',
    description: 'Netherlands flag'
  }, { id:170,
    symbol: '🇳🇴',
    description: 'Norway flag'
  }, { id:171,
    symbol: '🇳🇵',
    description: 'Nepal flag'
  }, { id:172,
    symbol: '🇳🇷',
    description: 'Nauru flag'
  }, { id:173,
    symbol: '🇳🇺',
    description: 'Niue flag'
  }, { id:174,
    symbol: '🇳🇿',
    description: 'New Zealand flag'
  }, { id:175,
    symbol: '🇴🇲',
    description: 'Oman flag'
  }, { id:176,
    symbol: '🇵🇦',
    description: 'Panama flag'
  }, { id:177,
    symbol: '🇵🇪',
    description: 'Peru flag'
  }, { id:178,
    symbol: '🇵🇫',
    description: 'French Polynesia flag'
  }, { id:179,
    symbol: '🇵🇬',
    description: 'Papua New Guinea flag'
  }, { id:180,
    symbol: '🇵🇭',
    description: 'Philipines flag'
  }, { id:181,
    symbol: '🇵🇰',
    description: 'Pakistan flag'
  }, { id:182,
    symbol: '🇵🇱',
    description: 'Poland flag'
  }, { id:183,
    symbol: '🇵🇲',
    description: 'St. Pierre & Miquelon'
  }, { id:184,
    symbol: '🇵🇳',
    description: 'Pitcairn Islands flag'
  }, { id:185,
    symbol: '🇵🇷',
    description: 'Puerto Rico flag'
  }, { id:186,
    symbol: '🇵🇸',
    description: 'Palestinian Territories flag'
  }, { id:187,
    symbol: '🇵🇹',
    description: 'Portugal flag'
  }, { id:188,
    symbol: '🇵🇼',
    description: 'Palau flag'
  }, { id:189,
    symbol: '🇵🇾',
    description: 'Paraguay flag'
  }, { id:190,
    symbol: '🇶🇦',
    description: 'Qatar flag'
  }, { id:191,
    symbol: '🇷🇪',
    description: 'Réunion flag'
  }, { id:192,
    symbol: '🇷🇸',
    description: 'Serbia flag'
  }, { id:193,
    symbol: '🇷🇺',
    description: 'Russia flag'
  }, { id:194,
    symbol: '🇷🇼',
    description: 'Rwanda flag'
  }, { id:195,
    symbol: '🇸🇦',
    description: 'Saudi Arabia flag'
  }, { id:196,
    symbol: '🇸🇧',
    description: 'Solomon Islands'
  }, { id:197,
    symbol: '🇸🇨',
    description: 'Seychelles flag'
  }, { id:198,
    symbol: '🇸🇩',
    description: 'Sudan flag'
  }, { id:199,
    symbol: '🇸🇪',
    description: 'Sweeden flag'
  }, { id:200,
    symbol: '🇸🇬',
    description: 'Singapore flag'
  }, { id:201,
    symbol: '🇸🇭',
    description: 'St. Helena flag'
  }, { id:202,
    symbol: '🇸🇮',
    description: 'Slovenia flag'
  }, { id:203,
    symbol: '🇸🇯',
    description: 'Svalbard & Jan Mayen'
  }, { id:204,
    symbol: '🇸🇰',
    description: 'Slovakia flag'
  }, { id:205,
    symbol: '🇸🇱',
    description: 'Sierra Leone flag'
  }, { id:206,
    symbol: '🇸🇲',
    description: 'San Marino flag'
  }, { id:207,
    symbol: '🇸🇳',
    description: 'Senegal flag'
  }, { id:208,
    symbol: '🇸🇴',
    description: 'Somalia flag'
  }, { id:209,
    symbol: '🇸🇷',
    description: 'Suriname flag'
  }, { id:210,
    symbol: '🇸🇸',
    description: 'South Sudan flag'
  }, { id:211,
    symbol: '🇸🇹',
    description: 'São Tomé & Príncipe flag'
  }, { id:212,
    symbol: '🇸🇻',
    description: 'El Salvador flag'
  }, { id:213,
    symbol: '🇸🇽',
    description: 'Saint Maarten flag'
  }, { id:214,
    symbol: '🇸🇾',
    description: 'Syria flag'
  }, { id:215,
    symbol: '🇸🇿',
    description: 'Eswatini (Swaziland) flag'
  }, { id:216,
    symbol: '🇹🇦',
    description: 'Tristan da Cunha flag'
  }, { id:217,
    symbol: '🇹🇨',
    description: 'Turks & Caicos Islands flag'
  }, { id:218,
    symbol: '🇹🇩',
    description: 'Chad flag'
  }, { id:219,
    symbol: '🇹🇫',
    description: 'French Southern Territories flag'
  }, { id:220,
    symbol: '🇹🇬',
    description: 'Togo flag'
  }, { id:221,
    symbol: '🇹🇭',
    description: 'Thailand flag'
  }, { id:222,
    symbol: '🇹🇯',
    description: 'Tajikistan flag'
  }, { id:223,
    symbol: '🇹🇰',
    description: 'Tokelau flag'
  }, { id:224,
    symbol: '🇹🇱',
    description: 'Timor-Leste flag'
  }, { id:225,
    symbol: '🇹🇲',
    description: 'Turkmenistan flag'
  }, { id:226,
    symbol: '🇹🇳',
    description: 'Tunisia flag'
  }, { id:227,
    symbol: '🇹🇴',
    description: 'Tonga flag'
  }, { id:228,
    symbol: '🇹🇷',
    description: 'Turkey flag'
  }, { id:229,
    symbol: '🇹🇹',
    description: 'Trinidad and Tobago flag'
  }, { id:230,
    symbol: '🇹🇻',
    description: 'Tuvalu flag'
  }, { id:231,
    symbol: '🇹🇼',
    description: 'Taiwan flag'
  }, { id:232,
    symbol: '🇹🇿',
    description: 'Tanzania flag'
  }, { id:233,
    symbol: '🇺🇦',
    description: 'Ukraine flag'
  }, { id:234,
    symbol: '🇺🇬',
    description: 'Uganda flag'
  }, { id:235,
    symbol: '🇺🇲',
    description: 'US Outlying Islands flag'
  }, { id:236,
    symbol: '🇺🇳',
    description: 'United Nations (UN) flag'
  }, { id:237,
    symbol: '🇺🇸',
    description: 'United State flag'
  }, { id:238,
    symbol: '🇺🇾',
    description: 'Uruguay flag'
  }, { id:239,
    symbol: '🇺🇿',
    description: 'Uzbekistan flag'
  }, { id:240,
    symbol: '🇻🇦',
    description: 'Vatical City flag'
  }, { id:241,
    symbol: '🇻🇨',
    description: 'St. Vincent & Grenadines flag'
  }, { id:242,
    symbol: '🇻🇪',
    description: 'Venezuela flag'
  }, { id:243,
    symbol: '🇻🇬',
    description: 'British Virgin Islands flag'
  }, { id:244,
    symbol: '🇻🇮',
    description: 'U.S. Virgin Islands'
  }, { id:245,
    symbol: '🇻🇮',
    description: 'Vietnam flag'
  }, { id:246,
    symbol: '🇻🇺',
    description: 'Vanuatu flag'
  }, { id:247,
    symbol: '🇼🇫',
    description: 'Wallis & Futuna flag'
  }, { id:248,
    symbol: '🇼🇸',
    description: 'Samoa flag'
  }, { id:249,
    symbol: '🇽🇰',
    description: 'Kosovo flag'
  }, { id:250,
    symbol: '🇾🇪',
    description: 'Yemen flag'
  }, { id:251,
    symbol: '🇾🇹',
    description: 'Mayotte flag'
  }, { id:252,
    symbol: '🇿🇦',
    description: 'South Africa flag'
  }, { id:253,
    symbol: '🇿🇲',
    description: 'Zambia flag'
  }, { id:254,
    symbol: '🇿🇼',
    description: 'Zimbabwe flag'
  }, { id:255,
    symbol: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    description: 'England flag'
  }, { id:256,
    symbol: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    description: 'Scotland flag'
  }, { id:257,
    symbol: '🏴󠁧󠁢󠁷󠁬󠁳󠁿',
    description: 'Wales flag'
  }],
  Foodanddrinks : [
    {id:1,
    symbol: '🍇',
    description: 'grapes'
  }, { id:2,
    symbol: '🍈',
    description: 'melon'
  }, { id:3,
    symbol: '🍉',
    description: 'watermelon'
  }, { id:4,
    symbol: '🍊',
    description: 'tangerine'
  }, { id:5,
    symbol: '🍋',
    description: 'lemon'
  }, { id:6,
    symbol: '🍌',
    description: 'banana'
  }, { id:7,
    symbol: '🍍',
    description: 'pineapple'
  }, { id:8,
    symbol: '🥭',
    description: 'mango'
  }, { id:9,
    symbol: '🍎',
    description: 'red apple'
  }, { id:10,
    symbol: '🍏',
    description: 'green apple'
  }, { id:11,
    symbol: '🍐',
    description: 'pear'
  }, { id:12,
    symbol: '🍑',
    description: 'peach'
  }, { id:13,
    symbol: '🍒',
    description: 'cherries'
  }, { id:14,
    symbol: '🍓',
    description: 'strawberry'
  }, { id:15,
    symbol: '🫐',
    description: 'blueberries'
  }, { id:16,
    symbol: '🥝',
    description: 'kiwi fruit'
  }, { id:17,
    symbol: '🍅',
    description: 'tomato'
  }, { id:18,
    symbol: '🫒',
    description: 'olive'
  }, { id:19,
    symbol: '🥥',
    description: 'coconut'
  }, { id:20,
    symbol: '🥑',
    description: 'avocado'
  }, { id:21,
    symbol: '🍆',
    description: 'eggplant'
  }, { id:22,
    symbol: '🥔',
    description: 'potato'
  }, { id:23,
    symbol: '🥕',
    description: 'carrot'
  }, { id:24,
    symbol: '🌽',
    description: 'ear of corn'
  }, { id:25,
    symbol: '🌶',
    description: 'hot pepper'
  }, { id:26,
    symbol: '🫑',
    description: 'bell pepper'
  }, { id:27,
    symbol: '🥒',
    description: 'cucumber'
  }, { id:28,
    symbol: '🥬',
    description: 'leafy green'
  }, { id:29,
    symbol: '🥦',
    description: 'broccoli'
  }, { id:30,
    symbol: '🧄',
    description: 'garlic'
  }, { id:31,
    symbol: '🧅',
    description: 'onion'
  }, { id:32,
    symbol: '🥜',
    description: 'peanuts'
  }, { id:33,
    symbol: '🌰',
    description: 'chestnut'
  }, { id:34,
    symbol: '🍞',
    description: 'bread'
  }, { id:35,
    symbol: '🥐',
    description: 'croissant'
  }, { id:36,
    symbol: '🥖',
    description: 'baguette bread'
  }, { id:37,
    symbol: '🫓',
    description: 'flatbread'
  }, { id:38,
    symbol: '🥨',
    description: 'pretzel'
  }, { id:39,
    symbol: '🥯',
    description: 'bagel'
  }, { id:40,
    symbol: '🥞',
    description: 'pancakes'
  }, { id:41,
    symbol: '🧇',
    description: 'waffle'
  }, { id:42,
    symbol: '🧀',
    description: 'cheese wedge'
  }, { id:43,
    symbol: '🍖',
    description: 'meat on bone'
  }, { id:44,
    symbol: '🍗',
    description: 'poultry leg'
  }, { id:45,
    symbol: '🥩',
    description: 'cut of meat'
  }, { id:46,
    symbol: '🥓',
    description: 'bacon'
  }, { id:47,
    symbol: '🍔',
    description: 'hamburger'
  }, { id:48,
    symbol: '🍟',
    description: 'french fries'
  }, { id:49,
    symbol: '🍕',
    description: 'pizza'
  }, { id:50,
    symbol: '🌭',
    description: 'hot dog'
  }, { id:51,
    symbol: '🥪',
    description: 'sandwich'
  }, { id:52,
    symbol: '🌮',
    description: 'taco'
  }, { id:53,
    symbol: '🌯',
    description: 'burrito'
  }, { id:54,
    symbol: '🫔',
    description: 'tamale'
  }, { id:55,
    symbol: '🥙',
    description: 'stuffed flatbread'
  }, { id:56,
    symbol: '🧆',
    description: 'falafel'
  }, { id:57,
    symbol: '🥚',
    description: 'egg'
  }, { id:58,
    symbol: '🍳',
    description: 'cooking'
  }, { id:59,
    symbol: '🥘',
    description: 'shallow pan of food'
  }, { id:60,
    symbol: '🍲',
    description: 'pot of food'
  }, { id:61,
    symbol: '🫕',
    description: 'fondue'
  }, { id:62,
    symbol: '🥣',
    description: 'bowl with spoon'
  }, { id:63,
    symbol: '🥗',
    description: 'green salad'
  }, { id:64,
    symbol: '🍿',
    description: 'popcorn'
  }, { id:65,
    symbol: '🧈',
    description: 'butter'
  }, { id:66,
    symbol: '🧂',
    description: 'salt'
  }, { id:67,
    symbol: '🥫',
    description: 'canned food'
  }, { id:68,
    symbol: '🍱',
    description: 'bento box'
  }, { id:69,
    symbol: '🍘',
    description: 'rice cracker'
  }, { id:70,
    symbol: '🍙',
    description: 'rice ball'
  }, { id:71,
    symbol: '🍚',
    description: 'cooked rice'
  }, { id:72,
    symbol: '🍛',
    description: 'curry rice'
  }, { id:73,
    symbol: '🍜',
    description: 'steaming bowl'
  }, { id:74,
    symbol: '🍝',
    description: 'spaghetti'
  }, { id:75,
    symbol: '🍠',
    description: 'roasted sweet potato'
  }, { id:76,
    symbol: '🍢',
    description: 'oden'
  }, { id:77,
    symbol: '🍣',
    description: 'sushi'
  }, { id:78,
    symbol: '🍤',
    description: 'fried shrimp'
  }, { id:79,
    symbol: '🍥',
    description: 'fish cake with swirl'
  }, { id:80,
    symbol: '🥮',
    description: 'moon cake'
  }, { id:81,
    symbol: '🍡',
    description: 'dango'
  }, { id:82,
    symbol: '🥟',
    description: 'dumpling'
  }, { id:83,
    symbol: '🥠',
    description: 'fortune cookie'
  }, { id:84,
    symbol: '🥡',
    description: 'takeout box'
  }, { id:85,
    symbol: '🦀',
    description: 'crab'
  }, { id:86,
    symbol: '🦞',
    description: 'lobster'
  }, { id:87,
    symbol: '🦐',
    description: 'shrimp'
  }, { id:88,
    symbol: '🦑',
    description: 'squid'
  }, { id:89,
    symbol: '🦪',
    description: 'oyster'
  }, { id:90,
    symbol: '🍦',
    description: 'soft ice cream'
  }, { id:91,
    symbol: '🍧',
    description: 'shaved ice'
  }, { id:92,
    symbol: '🍨',
    description: 'ice cream'
  }, { id:93,
    symbol: '🍩',
    description: 'doughnut'
  }, { id:94,
    symbol: '🍪',
    description: 'cookie'
  }, { id:95,
    symbol: '🎂',
    description: 'birthday cake'
  }, { id:96,
    symbol: '🍰',
    description: 'shortcake'
  }, { id:97,
    symbol: '🧁',
    description: 'cupcake'
  }, { id:98,
    symbol: '🥧',
    description: 'pie'
  }, { id:99,
    symbol: '🍫',
    description: 'chocolate bar'
  }, { id:100,
    symbol: '🍬',
    description: 'candy'
  }, { id:101,
    symbol: '🍭',
    description: 'lollipop'
  }, { id:102,
    symbol: '🍮',
    description: 'custard'
  }, { id:103,
    symbol: '🍯',
    description: 'honey pot'
  }, { id:104,
    symbol: '🍼',
    description: 'baby bottle'
  }, { id:105,
    symbol: '🥛',
    description: 'glass of milk'
  }, { id:106,
    symbol: '☕',
    description: 'hot beverage'
  }, { id:107,
    symbol: '🫖',
    description: 'teapot'
  }, { id:108,
    symbol: '🍵',
    description: 'teacup without handle'
  }, { id:109,
    symbol: '🍶',
    description: 'sake'
  }, { id:110,
    symbol: '🍾',
    description: 'bottle with popping cork'
  }, { id:111,
    symbol: '🍷',
    description: 'wine glass'
  }, { id:112,
    symbol: '🍸',
    description: 'cocktail glass'
  }, { id:113,
    symbol: '🍹',
    description: 'tropical drink'
  }, { id:114,
    symbol: '🍺',
    description: 'beer mug'
  }, { id:115,
    symbol: '🍻',
    description: 'clinking beer mugs'
  }, { id:116,
    symbol: '🥂',
    description: 'clinking glasses'
  }, { id:117,
    symbol: '🥃',
    description: 'tumbler glass'
  }, { id:118,
    symbol: '🥤',
    description: 'cup with straw'
  }, { id:119,
    symbol: '🧋',
    description: 'bubble tea'
  }, { id:120,
    symbol: '🧃',
    description: 'beverage box'
  }, { id:121,
    symbol: '🧉',
    description: 'mate'
  }, { id:122,
    symbol: '🧊',
    description: 'ice'
  }, { id:123,
    symbol: '🥢',
    description: 'chopsticks'
  }, { id:124,
    symbol: '🍽',
    description: 'fork and knife with plate'
  }, { id:125,
    symbol: '🍴',
    description: 'fork and knife'
  }, { id:126,
    symbol: '🥄',
    description: 'spoon'
  }, { id:127,
    symbol: '🔪',
    description: 'kitchen knife'
  }, { id:128,
    symbol: '🏺',
    description: 'amphora'
  }],
  Animals : [{id:1,
    symbol: '🐵',
    description: 'monkey face'
  }, { id:2,
    symbol: '🐒',
    description: 'monkey'
  }, { id:3,
    symbol: '🦍',
    description: 'gorilla'
  }, { id:4,
    symbol: '🦧',
    description: 'orangutan'
  }, { id:5,
    symbol: '🐶',
    description: 'dog face'
  }, { id:6,
    symbol: '🐕',
    description: 'dog'
  }, { id:7,
    symbol: '🦮',
    description: 'guide dog'
  }, { id:8,
    symbol: '🐕‍🦺',
    description: 'service dog'
  }, { id:9,
    symbol: '🐩',
    description: 'poodle'
  }, { id:10,
    symbol: '🐺',
    description: 'wolf'
  }, { id:11,
    symbol: '🦊',
    description: 'fox'
  }, { id:12,
    symbol: '🦝',
    description: 'raccoon'
  }, { id:13,
    symbol: '🐱',
    description: 'cat face'
  }, { id:14,
    symbol: '🐈',
    description: 'cat'
  }, { id:15,
    symbol: '🐈‍⬛',
    description: 'black cat'
  }, { id:16,
    symbol: '🦁',
    description: 'lion'
  }, { id:17,
    symbol: '🐯',
    description: 'tiger face'
  }, { id:18,
    symbol: '🐅',
    description: 'tiger'
  }, { id:19,
    symbol: '🐆',
    description: 'leopard'
  }, { id:20,
    symbol: '🐴',
    description: 'horse face'
  }, { id:21,
    symbol: '🐎',
    description: 'horse'
  }, { id:22,
    symbol: '🦄',
    description: 'unicorn'
  }, { id:23,
    symbol: '🦓',
    description: 'zebra'
  }, { id:24,
    symbol: '🦌',
    description: 'deer'
  }, { id:25,
    symbol: '🦬',
    description: 'bison'
  }, { id:26,
    symbol: '🐮',
    description: 'cow face'
  }, { id:27,
    symbol: '🐂',
    description: 'ox'
  }, { id:28,
    symbol: '🐃',
    description: 'water buffalo'
  }, { id:29,
    symbol: '🐄',
    description: 'cow'
  }, { id:30,
    symbol: '🐷',
    description: 'pig face'
  }, { id:31,
    symbol: '🐖',
    description: 'pig'
  }, { id:32,
    symbol: '🐗',
    description: 'boar'
  }, { id:33,
    symbol: '🐽',
    description: 'pig nose'
  }, { id:34,
    symbol: '🐏',
    description: 'ram'
  }, { id:35,
    symbol: '🐑',
    description: 'ewe'
  }, { id:36,
    symbol: '🐐',
    description: 'goat'
  }, { id:37,
    symbol: '🐪',
    description: 'camel'
  }, { id:38,
    symbol: '🐫',
    description: 'two-hump camel'
  }, { id:39,
    symbol: '🦙',
    description: 'llama'
  }, { id:40,
    symbol: '🦒',
    description: 'giraffe'
  }, { id:41,
    symbol: '🐘',
    description: 'elephant'
  }, { id:42,
    symbol: '🦣',
    description: 'mammoth'
  }, { id:43,
    symbol: '🦏',
    description: 'rhinoceros'
  }, { id:44,
    symbol: '🦛',
    description: 'hippopotamus'
  }, { id:45,
    symbol: '🐭',
    description: 'mouse face'
  }, { id:46,
    symbol: '🐁',
    description: 'mouse'
  }, { id:47,
    symbol: '🐀',
    description: 'rat'
  }, { id:48,
    symbol: '🐹',
    description: 'hamster'
  }, { id:49,
    symbol: '🐰',
    description: 'rabbit face'
  }, { id:50,
    symbol: '🐇',
    description: 'rabbit'
  }, { id:51,
    symbol: '🐿',
    description: 'chipmunk'
  }, { id:52,
    symbol: '🦫',
    description: 'beaver'
  }, { id:53,
    symbol: '🦔',
    description: 'hedgehog'
  }, { id:54,
    symbol: '🦇',
    description: 'bat'
  }, { id:55,
    symbol: '🐻',
    description: 'bear'
  }, { id:56,
    symbol: '🐻‍❄️',
    description: 'polar bear'
  }, { id:57,
    symbol: '🐨',
    description: 'koala'
  }, { id:58,
    symbol: '🐼',
    description: 'panda'
  }, { id:59,
    symbol: '🦥',
    description: 'sloth'
  }, { id:60,
    symbol: '🦦',
    description: 'otter'
  }, { id:61,
    symbol: '🦨',
    description: 'skunk'
  }, { id:62,
    symbol: '🦘',
    description: 'kangaroo'
  }, { id:63,
    symbol: '🦡',
    description: 'badger'
  }, { id:64,
    symbol: '🐾',
    description: 'paw prints'
  }, { id:65,
    symbol: '🦃',
    description: 'turkey'
  }, { id:66,
    symbol: '🐔',
    description: 'chicken'
  }, { id:67,
    symbol: '🐓',
    description: 'rooster'
  }, { id:68,
    symbol: '🐣',
    description: 'hatching chick'
  }, { id:69,
    symbol: '🐤',
    description: 'baby chick'
  }, { id:70,
    symbol: '🐥',
    description: 'front-facing baby chick'
  }, { id:71,
    symbol: '🐦',
    description: 'bird'
  }, { id:72,
    symbol: '🐧',
    description: 'penguin'
  }, { id:73,
    symbol: '🕊',
    description: 'dove'
  }, { id:74,
    symbol: '🦅',
    description: 'eagle'
  }, { id:75,
    symbol: '🦆',
    description: 'duck'
  }, { id:76,
    symbol: '🦢',
    description: 'swan'
  }, { id:77,
    symbol: '🦉',
    description: 'owl'
  }, { id:78,
    symbol: '🦤',
    description: 'dodo'
  }, { id:79,
    symbol: '🪶',
    description: 'feather'
  }, { id:80,
    symbol: '🦩',
    description: 'flamingo'
  }, { id:81,
    symbol: '🦚',
    description: 'peacock'
  }, { id:82,
    symbol: '🦜',
    description: 'parrot'
  }, { id:83,
    symbol: '🐦‍',
    description: 'bird'
  }, { id:84,
    symbol: '🐸',
    description: 'frog'
  }, { id:85,
    symbol: '🐊',
    description: 'crocodile'
  }, { id:86,
    symbol: '🐢',
    description: 'turtle'
  }, { id:87,
    symbol: '🦎',
    description: 'lizard'
  }, { id:88,
    symbol: '🐍',
    description: 'snake'
  }, { id:89,
    symbol: '🐲',
    description: 'dragon face'
  }, { id:90,
    symbol: '🐉',
    description: 'dragon'
  }, { id:91,
    symbol: '🦕',
    description: 'sauropod'
  }, { id:92,
    symbol: '🦖',
    description: 'T-Rex'
  }, { id:93,
    symbol: '🐳',
    description: 'spouting whale'
  }, { id:94,
    symbol: '🐋',
    description: 'whale'
  }, { id:95,
    symbol: '🐬',
    description: 'dolphin'
  }, { id:96,
    symbol: '🦭',
    description: 'seal'
  }, { id:97,
    symbol: '🐟',
    description: 'fish'
  }, { id:98,
    symbol: '🐠',
    description: 'tropical fish'
  }, { id:99,
    symbol: '🐡',
    description: 'blowfish'
  }, { id:100,
    symbol: '🦈',
    description: 'shark'
  }, { id:101,
    symbol: '🐙',
    description: 'octopus'
  }, { id:102,
    symbol: '🐚',
    description: 'spiral shell'
  }, { id:103,
    symbol: '🐌',
    description: 'snail'
  }, { id:104,
    symbol: '🦋',
    description: 'butterfly'
  }, { id:105,
    symbol: '🐛',
    description: 'bug'
  }, { id:106,
    symbol: '🐜',
    description: 'ant'
  }, { id:107,
    symbol: '🐝',
    description: 'honeybee'
  }, { id:108,
    symbol: '🪲',
    description: 'beetle'
  }, { id:109,
    symbol: '🐞',
    description: 'lady beetle'
  }, { id:110,
    symbol: '🦗',
    description: 'cricket'
  }, { id:111,
    symbol: '🪳',
    description: 'cockroach'
  }, { id:112,
    symbol: '🕷',
    description: 'spider'
  }, { id:113,
    symbol: '🕸',
    description: 'spider web'
  }, { id:114,
    symbol: '🦂',
    description: 'scorpion'
  }, { id:115,
    symbol: '🦟',
    description: 'mosquito'
  }, { id:116,
    symbol: '🪰',
    description: 'fly'
  }, { id:117,
    symbol: '🪱',
    description: 'worm'
  }, { id:118,
    symbol: '🦠',
    description: 'microbe'
  }],
  Shapes : [{ id:  1 ,symbol: '🔴', description: 'red circle' },
    { id:  2 ,symbol: '🟠', description: 'orange circle' },
    { id:  3 ,symbol: '🟡', description: 'yellow circle' },
    { id:  4 ,symbol: '🟢', description: 'green circle' },
    { id:  5 ,symbol: '🔵', description: 'blue circle' },
    { id:  6 ,symbol: '🟣', description: 'purple circle' },
    { id:  7 ,symbol: '🟤', description: 'brown circle' },
    { id:  8 ,symbol: '⚫', description: 'black circle' },
    { id:  9 ,symbol: '⚪', description: 'white circle' },
    { id:  10 ,symbol: '🟥', description: 'red square' },
    { id:  11 ,symbol: '🟧', description: 'orange square' },
    { id:  12 ,symbol: '🟨', description: 'yellow square' },
    { id:  13 ,symbol: '🟩', description: 'green square' },
    { id:  14 ,symbol: '🟦', description: 'blue square' },
    { id:  15 ,symbol: '🟪', description: 'purple square' },
    { id:  16 ,symbol: '🟫', description: 'brown square' },
    { id:  17 ,symbol: '⬛', description: 'black large square' },
    { id:  18 ,symbol: '⬜', description: 'white large square' },
    { id:  19 ,symbol: '◼', description: 'black medium square' },
    { id:  20 ,symbol: '◻', description: 'white medium square' },
    { id:  21 ,symbol: '◾', description: 'black medium-small square' },
    { id:  22 ,symbol: '◽', description: 'white medium-small square' },
    { id:  23 ,symbol: '▪', description: 'black small square' },
    { id:  24 ,symbol: '▫', description: 'white small square' },
    { id:  25 ,symbol: '🔶', description: 'large orange diamond' },
    { id:  26 ,symbol: '🔷', description: 'large blue diamond' },
    { id:  27 ,symbol: '🔸', description: 'small orange diamond' },
    { id:  28 ,symbol: '🔹', description: 'small blue diamond' },
    { id:  29 ,symbol: '🔺', description: 'red triangle pointed up' },
    { id:  30 ,symbol: '🔻', description: 'red triangle pointed down' },
    { id:  31 ,symbol: '💠', description: 'diamond with a dot' },
    { id:  32 ,symbol: '🔘', description: 'radio button' },
    { id:  33 ,symbol: '🔳', description: 'white square button' },
    ], 
    Letters : [
    { id:  1 ,symbol: 'a', description: 'a' },
    { id:  2 ,symbol: 'b', description: 'b' },
    { id:  3 ,symbol: 'c', description: 'c' },
    { id:  4 ,symbol: 'd', description: 'd' },
    { id:  5 ,symbol: 'e', description: 'e' },
    { id:  6 ,symbol: 'f', description: 'f' },
    { id:  7 ,symbol: 'g', description: 'g' },
    { id:  8 ,symbol: 'h', description: 'h' },
    { id:  9 ,symbol: 'i', description: 'i' },
    { id:  10 ,symbol: 'j', description: 'j' },
    { id:  11 ,symbol: 'k', description: 'k' },
    { id:  12 ,symbol: 'l', description: 'l' },
    { id:  13 ,symbol: 'm', description: 'm' },
    { id:  14 ,symbol: 'n', description: 'n' },
    { id:  15 ,symbol: 'o', description: 'o' },
    { id:  16 ,symbol: 'p', description: 'p' },
    { id:  17 ,symbol: 'q', description: 'q' },
    { id:  18 ,symbol: 'r', description: 'r' },
    { id:  19 ,symbol: 's', description: 's' },
    { id:  20 ,symbol: 't', description: 't' },
    { id:  21 ,symbol: 'u', description: 'u' },
    { id:  22 ,symbol: 'v', description: 'v' },
    { id:  23 ,symbol: 'w', description: 'w' },
    { id:  24 ,symbol: 'x', description: 'x' },
    { id:  25 ,symbol: 'y', description: 'y' },
    { id:  26 ,symbol: 'z', description: 'z' }
],
Fruitsandvegetables : [
    { id:  1 ,symbol: '🍇', description: 'grapes' },
    { id:  2 ,symbol: '🍈', description: 'melon' },
    { id:  3 ,symbol: '🍉', description: 'watermelon' },
    { id:  4 ,symbol: '🍊', description: 'tangerine' },
    { id:  5 ,symbol: '🍋', description: 'lemon' },
    { id:  6 ,symbol: '🍌', description: 'banana' },
    { id:  7 ,symbol: '🍍', description: 'pineapple' },
    { id:  8 ,symbol: '🥭', description: 'mango' },
    { id:  9 ,symbol: '🍎', description: 'red apple' },
    { id:  10 ,symbol: '🍏', description: 'green apple' },
    { id:  11 ,symbol: '🍐', description: 'pear' },
    { id:  12 ,symbol: '🍑', description: 'peach' },
    { id:  13 ,symbol: '🍒', description: 'cherries' },
    { id:  14 ,symbol: '🍓', description: 'strawberry' },
    { id:  15 ,symbol: '🫐', description: 'blueberries' },
    { id:  16 ,symbol: '🥝', description: 'kiwi fruit' },
    { id:  17 ,symbol: '🍅', description: 'tomato' },
    { id:  18 ,symbol: '🫒', description: 'olive' },
    { id:  19 ,symbol: '🥥', description: 'coconut' },
    { id:  20 ,symbol: '🥑', description: 'avocado' },
    { id:  21 ,symbol: '🍆', description: 'eggplant' },
    { id:  22 ,symbol: '🥔', description: 'potato' },
    { id:  23 ,symbol: '🥕', description: 'carrot' },
    { id:  24 ,symbol: '🌽', description: 'ear of corn' },
    { id:  25 ,symbol: '🌶', description: 'hot pepper' },
    { id:  26 ,symbol: '🫑', description: 'bell pepper' },
    { id:  27 ,symbol: '🥒', description: 'cucumber' },
    { id:  28 ,symbol: '🥬', description: 'leafy green' },
    { id:  29 ,symbol: '🥦', description: 'broccoli' },
    { id:  30 ,symbol: '🧄', description: 'garlic' },
    { id:  31 ,symbol: '🧅', description: 'onion' },
    { id:  32 ,symbol: '🥜', description: 'peanuts' },
    { id:  33 ,symbol: '🌰', description: 'chestnut' }
],

Clothing : [
    { id:  1 ,symbol: '👓', description: 'glasses' },
    { id:  2 ,symbol: '🕶', description: 'sunglasses' },
    { id:  3 ,symbol: '🥽', description: 'goggles' },
    { id:  4 ,symbol: '🥼', description: 'lab coat' },
    { id:  5 ,symbol: '🦺', description: 'safety vest' },
    { id:  6 ,symbol: '👔', description: 'necktie' },
    { id:  7 ,symbol: '👕', description: 't-shirt' },
    { id:  8 ,symbol: '👖', description: 'jeans' },
    { id:  9 ,symbol: '🧣', description: 'scarf' },
    { id:  10 ,symbol: '🧤', description: 'gloves' },
    { id:  11 ,symbol: '🧥', description: 'coat' },
    { id:  12 ,symbol: '🧦', description: 'socks' },
    { id:  13 ,symbol: '👗', description: 'dress' },
    { id:  14 ,symbol: '👘', description: 'kimono' },
    { id:  15 ,symbol: '🥻', description: 'sari' },
    { id:  16 ,symbol: '🩱', description: 'one-piece swimsuit' },
    { id:  17 ,symbol: '🩲', description: 'briefs' },
    { id:  18 ,symbol: '🩳', description: 'shorts' },
    { id:  19 ,symbol: '👙', description: 'bikini' },
    { id:  20 ,symbol: '👚', description: 'woman’s clothes' },
    { id:  21 ,symbol: '👛', description: 'purse' },
    { id:  22 ,symbol: '👜', description: 'handbag' },
    { id:  23 ,symbol: '👝', description: 'clutch bag' },
    { id:  24 ,symbol: '🛍', description: 'shopping bags' },
    { id:  25 ,symbol: '🎒', description: 'backpack' },
    { id:  26 ,symbol: '🩴', description: 'thong sandal' },
    { id:  27 ,symbol: '👞', description: 'man’s shoe' },
    { id:  28 ,symbol: '👟', description: 'running shoe' },
    { id:  29 ,symbol: '🥾', description: 'hiking boot' },
    { id:  30 ,symbol: '🥿', description: 'flat shoe' },
    { id:  31 ,symbol: '👠', description: 'high-heeled shoe' },
    { id:  32 ,symbol: '👡', description: 'woman’s sandal' },
    { id:  33 ,symbol: '🩰', description: 'ballet shoes' },
    { id:  34 ,symbol: '👢', description: 'woman’s boot' },
    { id:  35 ,symbol: '👑', description: 'crown' },
    { id:  36 ,symbol: '👒', description: 'woman’s hat' },
    { id:  37 ,symbol: '🎩', description: 'top hat' },
    { id:  38 ,symbol: '🎓', description: 'graduation cap' },
    { id:  39 ,symbol: '🧢', description: 'billed cap' },
    { id:  40 ,symbol: '🪖', description: 'military helmet' },
    { id:  41 ,symbol: '⛑', description: 'rescue worker’s helmet' },
    { id:  42 ,symbol: '📿', description: 'prayer beads' },
    { id:  43 ,symbol: '💄', description: 'lipstick' },
    { id:  44 ,symbol: '💍', description: 'ring' },
    { id:  45 ,symbol: '💎', description: 'gem stone' }
],
Handsigns : [
    { id:  1 ,symbol: '👋', description: 'waving hand' },
    { id:  2 ,symbol: '🤚', description: 'raised back of hand' },
    { id:  3 ,symbol: '🖐', description: 'hand with fingers splayed' },
    { id:  4 ,symbol: '✋', description: 'raised hand' },
    { id:  5 ,symbol: '🖖', description: 'vulcan salute' },
    { id:  6 ,symbol: '👌', description: 'OK hand' },
    { id:  7 ,symbol: '🤌', description: 'pinched fingers' },
    { id:  8 ,symbol: '🤏', description: 'pinching hand' },
    { id:  9 ,symbol: '🤞', description: 'crossed fingers' },
    { id:  10 ,symbol: '🤟', description: 'love-you gesture' },
    { id:  11 ,symbol: '🤘', description: 'sign of the horns' },
    { id:  12 ,symbol: '🤙', description: 'call me hand' },
    { id:  13 ,symbol: '👈', description: 'backhand index pointing left' },
    { id:  14 ,symbol: '👉', description: 'backhand index pointing right' },
    { id:  15 ,symbol: '👆', description: 'backhand index pointing up' },
    { id:  16 ,symbol: '🖕', description: 'middle finger' },
    { id:  17 ,symbol: '👇', description: 'backhand index pointing down' },
    { id:  18 ,symbol: '👍', description: 'thumbs up' },
    { id:  19 ,symbol: '👎', description: 'thumbs down' },
    { id:  20 ,symbol: '✊', description: 'raised fist' },
    { id:  21 ,symbol: '👊', description: 'oncoming fist' },
    { id:  22 ,symbol: '🤛', description: 'left-facing fist' },
    { id:  23 ,symbol: '🤜', description: 'right-facing fist' },
    { id:  24 ,symbol: '👏', description: 'clapping hands' },
    { id:  25 ,symbol: '🙌', description: 'raising hands' },
    { id:  26 ,symbol: '👐', description: 'open hands' },
    { id:  27 ,symbol: '🤲', description: 'palms up together' },
    { id:  28 ,symbol: '🤝', description: 'handshake' },
    { id:  29 ,symbol: '🙏', description: 'folded hands' },
    { id:  30 ,symbol: '✍', description: 'writing hand' },
    { id:  31 ,symbol: '💅', description: 'nail polish' },
    { id:  32 ,symbol: '🤳', description: 'selfie' },
    { id:  33 ,symbol: '💪', description: 'flexed biceps' }
],
Sport : [
    { id:  1 ,symbol: '⚽', description: 'soccer ball' },
    { id:  2 ,symbol: '⚾', description: 'baseball' },
    { id:  3 ,symbol: '🥎', description: 'softball' },
    { id:  4 ,symbol: '🏀', description: 'basketball' },
    { id:  5 ,symbol: '🏐', description: 'volleyball' },
    { id:  6 ,symbol: '🏈', description: 'american football' },
    { id:  7 ,symbol: '🏉', description: 'rugby football' },
    { id:  8 ,symbol: '🎾', description: 'tennis' },
    { id:  9 ,symbol: '🥏', description: 'flying disc' },
    { id:  10 ,symbol: '🎳', description: 'bowling' },
    { id:  11 ,symbol: '🏏', description: 'cricket game' },
    { id:  12 ,symbol: '🏑', description: 'field hockey' },
    { id:  13 ,symbol: '🏒', description: 'ice hockey' },
    { id:  14 ,symbol: '🥍', description: 'lacrosse' },
    { id:  15 ,symbol: '🏓', description: 'ping pong' },
    { id:  16 ,symbol: '🏸', description: 'badminton' },
    { id:  17 ,symbol: '🥊', description: 'boxing glove' },
    { id:  18 ,symbol: '🥋', description: 'martial arts uniform' },
    { id:  19 ,symbol: '🥅', description: 'goal net' },
    { id:  20 ,symbol: '⛳', description: 'flag in hole' },
    { id:  21 ,symbol: '⛸', description: 'ice skate' },
    { id:  22 ,symbol: '🎣', description: 'fishing pole' },
    { id:  23 ,symbol: '🤿', description: 'diving mask' },
    { id:  24 ,symbol: '🎽', description: 'running shirt' },
    { id:  25 ,symbol: '🎿', description: 'skis' },
    { id:  26 ,symbol: '🛷', description: 'sled' },
    { id:  27 ,symbol: '🥌', description: 'curling stone' },
    { id:  28 ,symbol: '🎯', description: 'bullseye' },
    { id:  29 ,symbol: '🪀', description: 'yo-yo' },
    { id:  30 ,symbol: '🪁', description: 'kite' },
    { id:  31 ,symbol: '🔫', description: 'water pistol' },
    { id:  32 ,symbol: '🎱', description: 'pool 33 ball' },
    { id:  34 ,symbol: '🔮', description: 'crystal ball' },
    { id:  35 ,symbol: '🪄', description: 'magic wand' },
    { id:  36 ,symbol: '🎮', description: 'video game' },
    { id:  37 ,symbol: '🕹', description: 'joystick' },
    { id:  38 ,symbol: '🎰', description: 'slot machine' },
    { id:  39 ,symbol: '🎲', description: 'game die' },
    { id:  40 ,symbol: '🧩', description: 'puzzle piece' },
    { id:  41 ,symbol: '🧸', description: 'teddy bear' },
    { id:  42 ,symbol: '🪅', description: 'piñata' },
    { id:  43 ,symbol: '🪆', description: 'nesting dolls' },
    { id:  44 ,symbol: '♠', description: 'spade suit' },
    { id:  45 ,symbol: '♥', description: 'heart suit' },
    { id:  46 ,symbol: '♦', description: 'diamond suit' },
    { id:  47 ,symbol: '♣', description: 'club suit' },
    { id:  48 ,symbol: '♟', description: 'chess pawn' },
    { id:  49 ,symbol: '🃏', description: 'joker' },
    { id:  50 ,symbol: '🀄', description: 'mahjong red dragon' },
    { id:  51 ,symbol: '🎴', description: 'flower playing cards' }
],
Skyandweather : [
    { id:  1 ,symbol: '🌑', description: 'new moon' },
    { id:  2 ,symbol: '🌒', description: 'waxing crescent moon' },
    { id:  3 ,symbol: '🌓', description: 'first quarter moon' },
    { id:  4 ,symbol: '🌔', description: 'waxing gibbous moon' },
    { id:  5 ,symbol: '🌕', description: 'full moon' },
    { id:  6 ,symbol: '🌖', description: 'waning gibbous moon' },
    { id:  7 ,symbol: '🌗', description: 'last quarter moon' },
    { id:  8 ,symbol: '🌘', description: 'waning crescent moon' },
    { id:  9 ,symbol: '🌙', description: 'crescent moon' },
    { id:  10 ,symbol: '🌚', description: 'new moon face' },
    { id:  11 ,symbol: '🌛', description: 'first quarter moon face' },
    { id:  12 ,symbol: '🌜', description: 'last quarter moon face' },
    { id:  13 ,symbol: '🌡', description: 'thermometer' },
    { id:  14 ,symbol: '☀', description: 'sun' },
    { id:  15 ,symbol: '🌝', description: 'full moon face' },
    { id:  16 ,symbol: '🌞', description: 'sun with face' },
    { id:  17 ,symbol: '🪐', description: 'ringed planet' },
    { id:  18 ,symbol: '⭐', description: 'star' },
    { id:  19 ,symbol: '🌟', description: 'glowing star' },
    { id:  20 ,symbol: '🌠', description: 'shooting star' },
    { id:  21 ,symbol: '🌌', description: 'milky way' },
    { id:  22 ,symbol: '☁', description: 'cloud' },
    { id:  23 ,symbol: '⛅', description: 'sun behind cloud' },
    { id:  24 ,symbol: '⛈', description: 'cloud with lightning and rain' },
    { id:  25 ,symbol: '🌤', description: 'sun behind small cloud' },
    { id:  26 ,symbol: '🌥', description: 'sun behind large cloud' },
    { id:  27 ,symbol: '🌦', description: 'sun behind rain cloud' },
    { id:  28 ,symbol: '🌧', description: 'cloud with rain' },
    { id:  29 ,symbol: '🌨', description: 'cloud with snow' },
    { id:  30 ,symbol: '🌩', description: 'cloud with lightning' },
    { id:  31 ,symbol: '🌪', description: 'tornado' },
    { id:  32 ,symbol: '🌫', description: 'fog' },
    { id:  33 ,symbol: '🌬', description: 'wind face' },
    { id:  34 ,symbol: '🌀', description: 'cyclone' },
    { id:  35 ,symbol: '🌈', description: 'rainbow' },
    { id:  36 ,symbol: '🌂', description: 'closed umbrella' },
    { id:  37 ,symbol: '☂', description: 'umbrella' },
    { id:  38 ,symbol: '☔', description: 'umbrella with rain drops' },
    { id:  39 ,symbol: '⛱', description: 'umbrella on ground' },
    { id:  40 ,symbol: '⚡', description: 'high voltage' },
    { id:  41 ,symbol: '❄', description: 'snowflake' },
    { id:  42 ,symbol: '☃', description: 'snowman' },
    { id:  43 ,symbol: '⛄', description: 'snowman without snow' },
    { id:  44 ,symbol: '☄', description: 'comet' },
    { id:  45 ,symbol: '🔥', description: 'fire' },
    { id:  46 ,symbol: '💧', description: 'droplet' },
    { id:  47 ,symbol: '🌊', description: 'water wave' }
],
Time : [
    { id:  1 ,symbol: '⌛', description: 'hourglass done' },
    { id:  2 ,symbol: '⏳', description: 'hourglass not done' },
    { id:  3 ,symbol: '⌚', description: 'watch' },
    { id:  4 ,symbol: '⏰', description: 'alarm clock' },
    { id:  5 ,symbol: '⏱', description: 'stopwatch' },
    { id:  6 ,symbol: '⏲', description: 'timer clock' },
    { id:  7 ,symbol: '🕰', description: 'mantelpiece clock' },
    { id:  8 ,symbol: '🕛', description: 'twelve o’clock' },
    { id:  9 ,symbol: '🕧', description: 'twelve-thirty' },
    { id:  10 ,symbol: '🕐', description: 'one o’clock' },
    { id:  11 ,symbol: '🕜', description: 'one-thirty' },
    { id:  12 ,symbol: '🕑', description: 'two o’clock' },
    { id:  13 ,symbol: '🕝', description: 'two-thirty' },
    { id:  14 ,symbol: '🕒', description: 'three o’clock' },
    { id:  15 ,symbol: '🕞', description: 'three-thirty' },
    { id:  16 ,symbol: '🕓', description: 'four o’clock' },
    { id:  17 ,symbol: '🕟', description: 'four-thirty' },
    { id:  18 ,symbol: '🕔', description: 'five o’clock' },
    { id:  19 ,symbol: '🕠', description: 'five-thirty' },
    { id:  20 ,symbol: '🕕', description: 'six o’clock' },
    { id:  21 ,symbol: '🕡', description: 'six-thirty' },
    { id:  22 ,symbol: '🕖', description: 'seven o’clock' },
    { id:  23 ,symbol: '🕢', description: 'seven-thirty' },
    { id:  24 ,symbol: '🕗', description: 'eight o’clock' },
    { id:  25 ,symbol: '🕣', description: 'eight-thirty' },
    { id:  26 ,symbol: '🕘', description: 'nine o’clock' },
    { id:  27 ,symbol: '🕤', description: 'nine-thirty' },
    { id:  28 ,symbol: '🕙', description: 'ten o’clock' },
    { id:  29 ,symbol: '🕥', description: 'ten-thirty' },
    { id:  30 ,symbol: '🕚', description: 'eleven o’clock' },
    { id:  31 ,symbol: '🕦', description: 'eleven-thirty' }
],
Transport : [
    { id:  1 ,symbol: '🚂', description: 'locomotive' },
    { id:  2 ,symbol: '🚃', description: 'railway car' },
    { id:  3 ,symbol: '🚄', description: 'high-speed train' },
    { id:  4 ,symbol: '🚅', description: 'bullet train' },
    { id:  5 ,symbol: '🚆', description: 'train' },
    { id:  6 ,symbol: '🚇', description: 'metro' },
    { id:  7 ,symbol: '🚈', description: 'light rail' },
    { id:  8 ,symbol: '🚉', description: 'station' },
    { id:  9 ,symbol: '🚊', description: 'tram' },
    { id:  10 ,symbol: '🚝', description: 'monorail' },
    { id:  11 ,symbol: '🚞', description: 'mountain railway' },
    { id:  12 ,symbol: '🚋', description: 'tram car' },
    { id:  13 ,symbol: '🚌', description: 'bus' },
    { id:  14 ,symbol: '🚍', description: 'oncoming bus' },
    { id:  15 ,symbol: '🚎', description: 'trolleybus' },
    { id:  16 ,symbol: '🚐', description: 'minibus' },
    { id:  17 ,symbol: '🚑', description: 'ambulance' },
    { id:  18 ,symbol: '🚒', description: 'fire engine' },
    { id:  19 ,symbol: '🚓', description: 'police car' },
    { id:  20 ,symbol: '🚔', description: 'oncoming police car' },
    { id:  21 ,symbol: '🚕', description: 'taxi' },
    { id:  22 ,symbol: '🚖', description: 'oncoming taxi' },
    { id:  23 ,symbol: '🚗', description: 'automobile' },
    { id:  24 ,symbol: '🚘', description: 'oncoming automobile' },
    { id:  25 ,symbol: '🚙', description: 'sport utility vehicle' },
    { id:  26 ,symbol: '🛻', description: 'pickup truck' },
    { id:  27 ,symbol: '🚚', description: 'delivery truck' },
    { id:  28 ,symbol: '🚛', description: 'articulated lorry' },
    { id:  29 ,symbol: '🚜', description: 'tractor' },
    { id:  30 ,symbol: '🏎', description: 'racing car' },
    { id:  31 ,symbol: '🏍', description: 'motorcycle' },
    { id:  32 ,symbol: '🛵', description: 'motor scooter' },
    { id:  33 ,symbol: '🦽', description: 'manual wheelchair' },
    { id:  34 ,symbol: '🦼', description: 'motorized wheelchair' },
    { id:  35 ,symbol: '🛺', description: 'auto rickshaw' },
    { id:  36 ,symbol: '🚲', description: 'bicycle' },
    { id:  37 ,symbol: '🛴', description: 'kick scooter' },
    { id:  38 ,symbol: '🛹', description: 'skateboard' },
    { id:  39 ,symbol: '🛼', description: 'roller skate' },
    { id:  40 ,symbol: '🚏', description: 'bus stop' },
    { id:  41 ,symbol: '🛣', description: 'motorway' },
    { id:  42 ,symbol: '🛤', description: 'railway track' },
    { id:  43 ,symbol: '🛢', description: 'oil drum' },
    { id:  44 ,symbol: '⛽', description: 'fuel pump' },
    { id:  45 ,symbol: '🚨', description: 'police car light' },
    { id:  46 ,symbol: '🚥', description: 'horizontal traffic light' },
    { id:  47 ,symbol: '🚦', description: 'vertical traffic light' },
    { id:  48 ,symbol: '🛑', description: 'stop sign' },
    { id:  49 ,symbol: '🚧', description: 'construction' },
    { id:  50 ,symbol: '⚓', description: 'anchor' },
    { id:  51 ,symbol: '⛵', description: 'sailboat' },
    { id:  52 ,symbol: '🛶', description: 'canoe' },
    { id:  53 ,symbol: '🚤', description: 'speedboat' },
    { id:  54 ,symbol: '🛳', description: 'passenger ship' },
    { id:  55 ,symbol: '⛴', description: 'ferry' },
    { id:  56 ,symbol: '🛥', description: 'motor boat' },
    { id:  57 ,symbol: '🚢', description: 'ship' },
    { id:  58 ,symbol: '✈', description: 'airplane' },
    { id:  59 ,symbol: '🛩', description: 'small airplane' },
    { id:  60 ,symbol: '🛫', description: 'airplane departure' },
    { id:  61 ,symbol: '🛬', description: 'airplane arrival' },
    { id:  62 ,symbol: '🪂', description: 'parachute' },
    { id:  63 ,symbol: '💺', description: 'seat' },
    { id:  64 ,symbol: '🚁', description: 'helicopter' },
    { id:  65 ,symbol: '🚟', description: 'suspension railway' },
    { id:  66 ,symbol: '🚠', description: 'mountain cableway' },
    { id:  67 ,symbol: '🚡', description: 'aerial tramway' },
    { id:  68 ,symbol: '🛰', description: 'satellite' },
    { id:  69 ,symbol: '🚀', description: 'rocket' },
    { id:  70 ,symbol: '🛸', description: 'flying saucer' }
],
Travelandplaces : [
    { id:  1 ,symbol: '🌍', description: 'globe showing Europe-Africa' },
    { id:  2 ,symbol: '🌎', description: 'globe showing Americas' },
    { id:  3 ,symbol: '🌏', description: 'globe showing Asia-Australia' },
    { id:  4 ,symbol: '🌐', description: 'globe with meridians' },
    { id:  5 ,symbol: '🗺', description: 'world map' },
    { id:  6 ,symbol: '🗾', description: 'map of Japan' },
    { id:  7 ,symbol: '🧭', description: 'compass' },
    { id:  8 ,symbol: '🏔', description: 'snow-capped mountain' },
    { id:  9 ,symbol: '⛰', description: 'mountain' },
    { id:  10 ,symbol: '🌋', description: 'volcano' },
    { id:  11 ,symbol: '🗻', description: 'mount fuji' },
    { id:  12 ,symbol: '🏕', description: 'camping' },
    { id:  13 ,symbol: '🏖', description: 'beach with umbrella' },
    { id:  14 ,symbol: '🏜', description: 'desert' },
    { id:  15 ,symbol: '🏝', description: 'desert island' },
    { id:  16 ,symbol: '🏞', description: 'national park' },
    { id:  17 ,symbol: '🏟', description: 'stadium' },
    { id:  18 ,symbol: '🏛', description: 'classical building' },
    { id:  19 ,symbol: '🏗', description: 'building construction' },
    { id:  20 ,symbol: '🧱', description: 'brick' },
    { id:  21 ,symbol: '🪨', description: 'rock' },
    { id:  22 ,symbol: '🪵', description: 'wood' },
    { id:  23 ,symbol: '🛖', description: 'hut' },
    { id:  24 ,symbol: '🏘', description: 'houses' },
    { id:  25 ,symbol: '🏚', description: 'derelict house' },
    { id:  26 ,symbol: '🏠', description: 'house' },
    { id:  27 ,symbol: '🏡', description: 'house with garden' },
    { id:  28 ,symbol: '🏢', description: 'office building' },
    { id:  29 ,symbol: '🏣', description: 'Japanese post office' },
    { id:  30 ,symbol: '🏤', description: 'post office' },
    { id:  31 ,symbol: '🏥', description: 'hospital' },
    { id:  32 ,symbol: '🏦', description: 'bank' },
    { id:  33 ,symbol: '🏨', description: 'hotel' },
    { id:  34 ,symbol: '🏩', description: 'love hotel' },
    { id:  35 ,symbol: '🏪', description: 'convenience store' },
    { id:  36 ,symbol: '🏫', description: 'school' },
    { id:  37 ,symbol: '🏬', description: 'department store' },
    { id:  38 ,symbol: '🏭', description: 'factory' },
    { id:  39 ,symbol: '🏯', description: 'Japanese castle' },
    { id:  40 ,symbol: '🏰', description: 'castle' },
    { id:  41 ,symbol: '💒', description: 'wedding' },
    { id:  42 ,symbol: '🗼', description: 'Tokyo tower' },
    { id:  43 ,symbol: '🗽', description: 'Statue of Liberty' },
    { id:  44 ,symbol: '⛪', description: 'church' },
    { id:  45 ,symbol: '🕌', description: 'mosque' },
    { id:  46 ,symbol: '🛕', description: 'hindu temple' },
    { id:  47 ,symbol: '🕍', description: 'synagogue' },
    { id:  48 ,symbol: '⛩', description: 'shinto shrine' },
    { id:  49 ,symbol: '🕋', description: 'kaaba' },
    { id:  50 ,symbol: '⛲', description: 'fountain' },
    { id:  51 ,symbol: '⛺', description: 'tent' },
    { id:  52 ,symbol: '🌁', description: 'foggy' },
    { id:  53 ,symbol: '🌃', description: 'night with stars' },
    { id:  54 ,symbol: '🏙', description: 'cityscape' },
    { id:  55 ,symbol: '🌄', description: 'sunrise over mountains' },
    { id:  56 ,symbol: '🌅', description: 'sunrise' },
    { id:  57 ,symbol: '🌆', description: 'cityscape at dusk' },
    { id:  58 ,symbol: '🌇', description: 'sunset' },
    { id:  59 ,symbol: '🌉', description: 'bridge at night' },
    { id:  60 ,symbol: '♨', description: 'hot springs' },
    { id:  61 ,symbol: '🎠', description: 'carousel horse' },
    { id:  62 ,symbol: '🎡', description: 'ferris wheel' },
    { id:  63 ,symbol: '🎢', description: 'roller coaster' },
    { id:  64 ,symbol: '💈', description: 'barber pole' },
    { id:  65 ,symbol: '🎪', description: 'circus tent' }
],
People : [
    { id:  1 ,symbol: '👶', description: 'baby' },
    { id:  2 ,symbol: '🧒', description: 'child' },
    { id:  3 ,symbol: '👦', description: 'boy' },
    { id:  4 ,symbol: '👧', description: 'girl' },
    { id:  5 ,symbol: '🧑', description: 'person' },
    { id:  6 ,symbol: '👱', description: 'person: blond hair' },
    { id:  7 ,symbol: '👨', description: 'man' },
    { id:  8 ,symbol: '🧔', description: 'person: beard' },
    { id:  9 ,symbol: '🧔‍♂️', description: 'man: beard' },
    { id:  10 ,symbol: '🧔‍♀️', description: 'woman: beard' },
    { id:  11 ,symbol: '👨‍🦰', description: 'man: red hair' },
    { id:  12 ,symbol: '👨‍🦱', description: 'man: curly hair' },
    { id:  13 ,symbol: '👨‍🦳', description: 'man: white hair' },
    { id:  14 ,symbol: '👨‍🦲', description: 'man: bald' },
    { id:  15 ,symbol: '👩', description: 'woman' },
    { id:  16 ,symbol: '👩‍🦰', description: 'woman: red hair' },
    { id:  17 ,symbol: '🧑‍🦰', description: 'person: red hair' },
    { id:  18 ,symbol: '👩‍🦱', description: 'woman: curly hair' },
    { id:  19 ,symbol: '🧑‍🦱', description: 'person: curly hair' },
    { id:  20 ,symbol: '👩‍🦳', description: 'woman: white hair' },
    { id:  21 ,symbol: '🧑‍🦳', description: 'person: white hair' },
    { id:  22 ,symbol: '👩‍🦲', description: 'woman: bald' },
    { id:  23 ,symbol: '🧑‍🦲', description: 'person: bald' },
    { id:  24 ,symbol: '👱‍♀️', description: 'woman: blond hair' },
    { id:  25 ,symbol: '👱‍♂️', description: 'man: blond hair' },
    { id:  26 ,symbol: '🧓', description: 'older person' },
    { id:  27 ,symbol: '👴', description: 'old man' },
    { id:  28 ,symbol: '👵', description: 'old woman' },
    { id:  29 ,symbol: '🙍', description: 'person frowning' },
    { id:  30 ,symbol: '🙍‍♂️', description: 'man frowning' },
    { id:  31 ,symbol: '🙍‍♀️', description: 'woman frowning' },
    { id:  32 ,symbol: '🙎', description: 'person pouting' },
    { id:  33 ,symbol: '🙎‍♂️', description: 'man pouting' },
    { id:  34 ,symbol: '🙎‍♀️', description: 'woman pouting' },
    { id:  35 ,symbol: '🙅', description: 'person gesturing NO' },
    { id:  36 ,symbol: '🙅‍♂️', description: 'man gesturing NO' },
    { id:  37 ,symbol: '🙅‍♀️', description: 'woman gesturing NO' },
    { id:  38 ,symbol: '🙆', description: 'person gesturing OK' },
    { id:  39 ,symbol: '🙆‍♂️', description: 'man gesturing OK' },
    { id:  40 ,symbol: '🙆‍♀️', description: 'woman gesturing OK' },
    { id:  41 ,symbol: '💁', description: 'person tipping hand' },
    { id:  42 ,symbol: '💁‍♂️', description: 'man tipping hand' },
    { id:  43 ,symbol: '💁‍♀️', description: 'woman tipping hand' },
    { id:  44 ,symbol: '🙋', description: 'person raising hand' },
    { id:  45 ,symbol: '🙋‍♂️', description: 'man raising hand' },
    { id:  46 ,symbol: '🙋‍♀️', description: 'woman raising hand' },
    { id:  47 ,symbol: '🧏', description: 'deaf person' },
    { id:  48 ,symbol: '🧏‍♂️', description: 'deaf man' },
    { id:  49 ,symbol: '🧏‍♀️', description: 'deaf woman' },
    { id:  50 ,symbol: '🙇', description: 'person bowing' },
    { id:  51 ,symbol: '🙇‍♂️', description: 'man bowing' },
    { id:  52 ,symbol: '🙇‍♀️', description: 'woman bowing' },
    { id:  53 ,symbol: '🤦', description: 'person facepalming' },
    { id:  54 ,symbol: '🤦‍♂️', description: 'man facepalming' },
    { id:  55 ,symbol: '🤦‍♀️', description: 'woman facepalming' },
    { id:  56 ,symbol: '🤷', description: 'person shrugging' },
    { id:  57 ,symbol: '🤷‍♂️', description: 'man shrugging' },
    { id:  58 ,symbol: '🤷‍♀️', description: 'woman shrugging' },
    { id:  59 ,symbol: '🧑‍⚕️', description: 'health worker' },
    { id:  60 ,symbol: '👨‍⚕️', description: 'man health worker' },
    { id:  61 ,symbol: '👩‍⚕️', description: 'woman health worker' },
    { id:  62 ,symbol: '🧑‍🎓', description: 'student' },
    { id:  63 ,symbol: '👨‍🎓', description: 'man student' },
    { id:  64 ,symbol: '👩‍🎓', description: 'woman student' },
    { id:  65 ,symbol: '🧑‍🏫', description: 'teacher' },
    { id:  66 ,symbol: '👨‍🏫', description: 'man teacher' },
    { id:  67 ,symbol: '👩‍🏫', description: 'woman teacher' },
    { id:  68 ,symbol: '🧑‍⚖️', description: 'judge' },
    { id:  69 ,symbol: '👨‍⚖️', description: 'man judge' },
    { id:  70 ,symbol: '👩‍⚖️', description: 'woman judge' },
    { id:  71 ,symbol: '🧑‍🌾', description: 'farmer' },
    { id:  72 ,symbol: '👨‍🌾', description: 'man farmer' },
    { id:  73 ,symbol: '👩‍🌾', description: 'woman farmer' },
    { id:  74 ,symbol: '🧑‍🍳', description: 'cook' },
    { id:  75 ,symbol: '👨‍🍳', description: 'man cook' },
    { id:  76 ,symbol: '👩‍🍳', description: 'woman cook' },
    { id:  77 ,symbol: '🧑‍🔧', description: 'mechanic' },
    { id:  78 ,symbol: '👨‍🔧', description: 'man mechanic' },
    { id:  79 ,symbol: '👩‍🔧', description: 'woman mechanic' },
    { id:  80 ,symbol: '🧑‍🏭', description: 'factory worker' },
    { id:  81 ,symbol: '👨‍🏭', description: 'man factory worker' },
    { id:  82 ,symbol: '👩‍🏭', description: 'woman factory worker' },
    { id:  83 ,symbol: '🧑‍💼', description: 'office worker' },
    { id:  84 ,symbol: '👨‍💼', description: 'man office worker' },
    { id:  85 ,symbol: '👩‍💼', description: 'woman office worker' },
    { id:  86 ,symbol: '🧑‍🔬', description: 'scientist' },
    { id:  87 ,symbol: '👨‍🔬', description: 'man scientist' },
    { id:  88 ,symbol: '👩‍🔬', description: 'woman scientist' },
    { id:  89 ,symbol: '🧑‍💻', description: 'technologist' },
    { id:  90 ,symbol: '👨‍💻', description: 'man technologist' },
    { id:  91 ,symbol: '👩‍💻', description: 'woman technologist' },
    { id:  92 ,symbol: '🧑‍🎤', description: 'singer' },
    { id:  93 ,symbol: '👨‍🎤', description: 'man singer' },
    { id:  94 ,symbol: '👩‍🎤', description: 'woman singer' },
    { id:  95 ,symbol: '🧑‍🎨', description: 'artist' },
    { id:  96 ,symbol: '👨‍🎨', description: 'man artist' },
    { id:  97 ,symbol: '👩‍🎨', description: 'woman artist' },
    { id:  98 ,symbol: '🧑‍✈️', description: 'pilot' },
    { id:  99 ,symbol: '👨‍✈️', description: 'man pilot' },
    { id:  100 ,symbol: '👩‍✈️', description: 'woman pilot' },
    { id:  101 ,symbol: '🧑‍🚀', description: 'astronaut' },
    { id:  102 ,symbol: '👨‍🚀', description: 'man astronaut' },
    { id:  103 ,symbol: '👩‍🚀', description: 'woman astronaut' },
    { id:  104 ,symbol: '🧑‍🚒', description: 'firefighter' },
    { id:  105 ,symbol: '👨‍🚒', description: 'man firefighter' },
    { id:  106 ,symbol: '👩‍🚒', description: 'woman firefighter' },
    { id:  107 ,symbol: '👮', description: 'police officer' },
    { id:  108 ,symbol: '👮‍♂️', description: 'man police officer' },
    { id:  109 ,symbol: '👮‍♀️', description: 'woman police officer' },
    { id:  110 ,symbol: '🕵', description: 'detective' },
    { id:  111 ,symbol: '🕵️‍♂️', description: 'man detective' },
    { id:  112 ,symbol: '🕵️‍♀️', description: 'woman detective' },
    { id:  113 ,symbol: '💂', description: 'guard' },
    { id:  114 ,symbol: '💂‍♂️', description: 'man guard' },
    { id:  115 ,symbol: '💂‍♀️', description: 'woman guard' },
    { id:  116 ,symbol: '🥷', description: 'ninja' },
    { id:  117 ,symbol: '👷', description: 'construction worker' },
    { id:  118 ,symbol: '👷‍♂️', description: 'man construction worker' },
    { id:  119 ,symbol: '👷‍♀️', description: 'woman construction worker' },
    { id:  120 ,symbol: '🤴', description: 'prince' },
    { id:  121 ,symbol: '👸', description: 'princess' },
    { id:  122 ,symbol: '👳', description: 'person wearing turban' },
    { id:  123 ,symbol: '👳‍♂️', description: 'man wearing turban' },
    { id:  124 ,symbol: '👳‍♀️', description: 'woman wearing turban' },
    { id:  125 ,symbol: '👲', description: 'person with skullcap' },
    { id:  126 ,symbol: '🧕', description: 'woman with headscarf' },
    { id:  127 ,symbol: '🤵', description: 'person in tuxedo' },
    { id:  128 ,symbol: '🤵‍♂️', description: 'man in tuxedo' },
    { id:  129 ,symbol: '🤵‍♀️', description: 'woman in tuxedo' },
    { id:  130 ,symbol: '👰', description: 'person with veil' },
    { id:  131 ,symbol: '👰‍♂️', description: 'man with veil' },
    { id:  132 ,symbol: '👰‍♀️', description: 'woman with veil' }
],
Tools : [
    { id:  1 ,symbol: '✏', description: 'pencil' },
    { id:  2 ,symbol: '✒', description: 'black nib' },
    { id:  3 ,symbol: '🖋', description: 'fountain pen' },
    { id:  4 ,symbol: '🖊', description: 'pen' },
    { id:  5 ,symbol: '🖌', description: 'paintbrush' },
    { id:  6 ,symbol: '🖍', description: 'crayon' },
    { id:  7 ,symbol: '📝', description: 'memo' },
    { id:  8 ,symbol: '💼', description: 'briefcase' },
    { id:  9 ,symbol: '📁', description: 'file folder' },
    { id:  10 ,symbol: '📂', description: 'open file folder' },
    { id:  11 ,symbol: '🗂', description: 'card index dividers' },
    { id:  12 ,symbol: '📅', description: 'calendar' },
    { id:  13 ,symbol: '📆', description: 'tear-off calendar' },
    { id:  14 ,symbol: '🗒', description: 'spiral notepad' },
    { id:  15 ,symbol: '🗓', description: 'spiral calendar' },
    { id:  16 ,symbol: '📇', description: 'card index' },
    { id:  17 ,symbol: '📈', description: 'chart increasing' },
    { id:  18 ,symbol: '📉', description: 'chart decreasing' },
    { id:  19 ,symbol: '📊', description: 'bar chart' },
    { id:  20 ,symbol: '📋', description: 'clipboard' },
    { id:  21 ,symbol: '📌', description: 'pushpin' },
    { id:  22 ,symbol: '📍', description: 'round pushpin' },
    { id:  23 ,symbol: '📎', description: 'paperclip' },
    { id:  24 ,symbol: '🖇', description: 'linked paperclips' },
    { id:  25 ,symbol: '📏', description: 'straight ruler' },
    { id:  26 ,symbol: '📐', description: 'triangular ruler' },
    { id:  27 ,symbol: '✂', description: 'scissors' },
    { id:  28 ,symbol: '🗃', description: 'card file box' },
    { id:  29 ,symbol: '🗄', description: 'file cabinet' },
    { id:  30 ,symbol: '🗑', description: 'wastebasket' },
    { id:  31 ,symbol: '🔒', description: 'locked' },
    { id:  32 ,symbol: '🔓', description: 'unlocked' },
    { id:  33 ,symbol: '🔏', description: 'locked with pen' },
    { id:  34 ,symbol: '🔐', description: 'locked with key' },
    { id:  35 ,symbol: '🔑', description: 'key' },
    { id:  36 ,symbol: '🗝', description: 'old key' },
    { id:  37 ,symbol: '🔨', description: 'hammer' },
    { id:  38 ,symbol: '🪓', description: 'axe' },
    { id:  39 ,symbol: '⛏', description: 'pick' },
    { id:  40 ,symbol: '⚒', description: 'hammer and pick' },
    { id:  41 ,symbol: '🛠', description: 'hammer and wrench' },
    { id:  42 ,symbol: '🗡', description: 'dagger' },
    { id:  43 ,symbol: '⚔', description: 'crossed swords' },
    { id:  44 ,symbol: '💣', description: 'bomb' },
    { id:  45 ,symbol: '🪃', description: 'boomerang' },
    { id:  46 ,symbol: '🏹', description: 'bow and arrow' },
    { id:  47 ,symbol: '🛡', description: 'shield' },
    { id:  48 ,symbol: '🪚', description: 'carpentry saw' },
    { id:  49 ,symbol: '🔧', description: 'wrench' },
    { id:  50 ,symbol: '🪛', description: 'screwdriver' },
    { id:  51 ,symbol: '🔩', description: 'nut and bolt' },
    { id:  52 ,symbol: '⚙', description: 'gear' },
    { id:  53 ,symbol: '🗜', description: 'clamp' },
    { id:  54 ,symbol: '⚖', description: 'balance scale' },
    { id:  55 ,symbol: '🦯', description: 'white cane' },
    { id:  56 ,symbol: '🔗', description: 'link' },
    { id:  57 ,symbol: '⛓', description: 'chains' },
    { id:  58 ,symbol: '🪝', description: 'hook' },
    { id:  59 ,symbol: '🧰', description: 'toolbox' },
    { id:  60 ,symbol: '🧲', description: 'magnet' },
    { id:  61 ,symbol: '🪜', description: 'ladder' },
    { id:  62 ,symbol: '⚗', description: 'alembic' },
    { id:  63 ,symbol: '🧪', description: 'test tube' },
    { id:  64 ,symbol: '🧫', description: 'petri dish' },
    { id:  65 ,symbol: '🧬', description: 'dna' },
    { id:  66 ,symbol: '🔬', description: 'microscope' },
    { id:  67 ,symbol: '🔭', description: 'telescope' },
    { id:  68 ,symbol: '📡', description: 'satellite antenna' }
]
}

 
export default cardList;