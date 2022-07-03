const data = [
  {
    "engine_size": 130,
    "horsepower": 111,
    "peak_rpm": 5000,
    "city_mpg": 21,
    "highway_mpg": 27,
    "price": 13495
  },
  {
    "engine_size": 130,
    "horsepower": 111,
    "peak_rpm": 5000,
    "city_mpg": 21,
    "highway_mpg": 27,
    "price": 16500
  },
  {
    "engine_size": 152,
    "horsepower": 154,
    "peak_rpm": 5000,
    "city_mpg": 19,
    "highway_mpg": 26,
    "price": 16500
  },
  {
    "engine_size": 109,
    "horsepower": 102,
    "peak_rpm": 5500,
    "city_mpg": 24,
    "highway_mpg": 30,
    "price": 13950
  },
  {
    "engine_size": 136,
    "horsepower": 115,
    "peak_rpm": 5500,
    "city_mpg": 18,
    "highway_mpg": 22,
    "price": 17450
  },
  {
    "engine_size": 136,
    "horsepower": 110,
    "peak_rpm": 5500,
    "city_mpg": 19,
    "highway_mpg": 25,
    "price": 15250
  },
  {
    "engine_size": 136,
    "horsepower": 110,
    "peak_rpm": 5500,
    "city_mpg": 19,
    "highway_mpg": 25,
    "price": 17710
  },
  {
    "engine_size": 136,
    "horsepower": 110,
    "peak_rpm": 5500,
    "city_mpg": 19,
    "highway_mpg": 25,
    "price": 18920
  },
  {
    "engine_size": 131,
    "horsepower": 140,
    "peak_rpm": 5500,
    "city_mpg": 17,
    "highway_mpg": 20,
    "price": 23875
  },
  {
    "engine_size": 108,
    "horsepower": 101,
    "peak_rpm": 5800,
    "city_mpg": 23,
    "highway_mpg": 29,
    "price": 16430
  },
  {
    "engine_size": 108,
    "horsepower": 101,
    "peak_rpm": 5800,
    "city_mpg": 23,
    "highway_mpg": 29,
    "price": 16925
  },
  {
    "engine_size": 164,
    "horsepower": 121,
    "peak_rpm": 4250,
    "city_mpg": 21,
    "highway_mpg": 28,
    "price": 20970
  },
  {
    "engine_size": 164,
    "horsepower": 121,
    "peak_rpm": 4250,
    "city_mpg": 21,
    "highway_mpg": 28,
    "price": 21105
  },
  {
    "engine_size": 164,
    "horsepower": 121,
    "peak_rpm": 4250,
    "city_mpg": 20,
    "highway_mpg": 25,
    "price": 24565
  },
  {
    "engine_size": 209,
    "horsepower": 182,
    "peak_rpm": 5400,
    "city_mpg": 16,
    "highway_mpg": 22,
    "price": 30760
  },
  {
    "engine_size": 209,
    "horsepower": 182,
    "peak_rpm": 5400,
    "city_mpg": 16,
    "highway_mpg": 22,
    "price": 41315
  },
  {
    "engine_size": 209,
    "horsepower": 182,
    "peak_rpm": 5400,
    "city_mpg": 15,
    "highway_mpg": 20,
    "price": 36880
  },
  {
    "engine_size": 61,
    "horsepower": 48,
    "peak_rpm": 5100,
    "city_mpg": 47,
    "highway_mpg": 53,
    "price": 5151
  },
  {
    "engine_size": 90,
    "horsepower": 70,
    "peak_rpm": 5400,
    "city_mpg": 38,
    "highway_mpg": 43,
    "price": 6295
  },
  {
    "engine_size": 90,
    "horsepower": 70,
    "peak_rpm": 5400,
    "city_mpg": 38,
    "highway_mpg": 43,
    "price": 6575
  },
  {
    "engine_size": 90,
    "horsepower": 68,
    "peak_rpm": 5500,
    "city_mpg": 37,
    "highway_mpg": 41,
    "price": 5572
  },
  {
    "engine_size": 90,
    "horsepower": 68,
    "peak_rpm": 5500,
    "city_mpg": 31,
    "highway_mpg": 38,
    "price": 6377
  },
  {
    "engine_size": 98,
    "horsepower": 102,
    "peak_rpm": 5500,
    "city_mpg": 24,
    "highway_mpg": 30,
    "price": 7957
  },
  {
    "engine_size": 90,
    "horsepower": 68,
    "peak_rpm": 5500,
    "city_mpg": 31,
    "highway_mpg": 38,
    "price": 6229
  },
  {
    "engine_size": 90,
    "horsepower": 68,
    "peak_rpm": 5500,
    "city_mpg": 31,
    "highway_mpg": 38,
    "price": 6692
  },
  {
    "engine_size": 90,
    "horsepower": 68,
    "peak_rpm": 5500,
    "city_mpg": 31,
    "highway_mpg": 38,
    "price": 7609
  },
  {
    "engine_size": 98,
    "horsepower": 102,
    "peak_rpm": 5500,
    "city_mpg": 24,
    "highway_mpg": 30,
    "price": 8558
  },
  {
    "engine_size": 122,
    "horsepower": 88,
    "peak_rpm": 5000,
    "city_mpg": 24,
    "highway_mpg": 30,
    "price": 8921
  },
  {
    "engine_size": 156,
    "horsepower": 145,
    "peak_rpm": 5000,
    "city_mpg": 19,
    "highway_mpg": 24,
    "price": 12964
  },
  {
    "engine_size": 92,
    "horsepower": 58,
    "peak_rpm": 4800,
    "city_mpg": 49,
    "highway_mpg": 54,
    "price": 6479
  },
  {
    "engine_size": 92,
    "horsepower": 76,
    "peak_rpm": 6000,
    "city_mpg": 31,
    "highway_mpg": 38,
    "price": 6855
  },
  {
    "engine_size": 79,
    "horsepower": 60,
    "peak_rpm": 5500,
    "city_mpg": 38,
    "highway_mpg": 42,
    "price": 5399
  },
  {
    "engine_size": 92,
    "horsepower": 76,
    "peak_rpm": 6000,
    "city_mpg": 30,
    "highway_mpg": 34,
    "price": 6529
  },
  {
    "engine_size": 92,
    "horsepower": 76,
    "peak_rpm": 6000,
    "city_mpg": 30,
    "highway_mpg": 34,
    "price": 7129
  },
  {
    "engine_size": 92,
    "horsepower": 76,
    "peak_rpm": 6000,
    "city_mpg": 30,
    "highway_mpg": 34,
    "price": 7295
  },
  {
    "engine_size": 92,
    "horsepower": 76,
    "peak_rpm": 6000,
    "city_mpg": 30,
    "highway_mpg": 34,
    "price": 7295
  },
  {
    "engine_size": 110,
    "horsepower": 86,
    "peak_rpm": 5800,
    "city_mpg": 27,
    "highway_mpg": 33,
    "price": 7895
  },
  {
    "engine_size": 110,
    "horsepower": 86,
    "peak_rpm": 5800,
    "city_mpg": 27,
    "highway_mpg": 33,
    "price": 9095
  },
  {
    "engine_size": 110,
    "horsepower": 86,
    "peak_rpm": 5800,
    "city_mpg": 27,
    "highway_mpg": 33,
    "price": 8845
  },
  {
    "engine_size": 110,
    "horsepower": 86,
    "peak_rpm": 5800,
    "city_mpg": 27,
    "highway_mpg": 33,
    "price": 10295
  },
  {
    "engine_size": 110,
    "horsepower": 101,
    "peak_rpm": 5800,
    "city_mpg": 24,
    "highway_mpg": 28,
    "price": 12945
  },
  {
    "engine_size": 110,
    "horsepower": 100,
    "peak_rpm": 5500,
    "city_mpg": 25,
    "highway_mpg": 31,
    "price": 10345
  },
  {
    "engine_size": 111,
    "horsepower": 78,
    "peak_rpm": 4800,
    "city_mpg": 24,
    "highway_mpg": 29,
    "price": 6785
  },
  {
    "engine_size": 119,
    "horsepower": 90,
    "peak_rpm": 5000,
    "city_mpg": 24,
    "highway_mpg": 29,
    "price": 11048
  },
  {
    "engine_size": 258,
    "horsepower": 176,
    "peak_rpm": 4750,
    "city_mpg": 15,
    "highway_mpg": 19,
    "price": 32250
  },
  {
    "engine_size": 258,
    "horsepower": 176,
    "peak_rpm": 4750,
    "city_mpg": 15,
    "highway_mpg": 19,
    "price": 35550
  },
  {
    "engine_size": 326,
    "horsepower": 262,
    "peak_rpm": 5000,
    "city_mpg": 13,
    "highway_mpg": 17,
    "price": 36000
  },
  {
    "engine_size": 91,
    "horsepower": 68,
    "peak_rpm": 5000,
    "city_mpg": 30,
    "highway_mpg": 31,
    "price": 5195
  },
  {
    "engine_size": 91,
    "horsepower": 68,
    "peak_rpm": 5000,
    "city_mpg": 31,
    "highway_mpg": 38,
    "price": 6095
  },
  {
    "engine_size": 91,
    "horsepower": 68,
    "peak_rpm": 5000,
    "city_mpg": 31,
    "highway_mpg": 38,
    "price": 6795
  },
  {
    "engine_size": 91,
    "horsepower": 68,
    "peak_rpm": 5000,
    "city_mpg": 31,
    "highway_mpg": 38,
    "price": 6695
  },
  {
    "engine_size": 91,
    "horsepower": 68,
    "peak_rpm": 5000,
    "city_mpg": 31,
    "highway_mpg": 38,
    "price": 7395
  },
  {
    "engine_size": 70,
    "horsepower": 101,
    "peak_rpm": 6000,
    "city_mpg": 17,
    "highway_mpg": 23,
    "price": 10945
  },
  {
    "engine_size": 70,
    "horsepower": 101,
    "peak_rpm": 6000,
    "city_mpg": 17,
    "highway_mpg": 23,
    "price": 11845
  },
  {
    "engine_size": 70,
    "horsepower": 101,
    "peak_rpm": 6000,
    "city_mpg": 17,
    "highway_mpg": 23,
    "price": 13645
  },
  {
    "engine_size": 80,
    "horsepower": 135,
    "peak_rpm": 6000,
    "city_mpg": 16,
    "highway_mpg": 23,
    "price": 15645
  },
  {
    "engine_size": 122,
    "horsepower": 84,
    "peak_rpm": 4800,
    "city_mpg": 26,
    "highway_mpg": 32,
    "price": 8845
  },
  {
    "engine_size": 122,
    "horsepower": 84,
    "peak_rpm": 4800,
    "city_mpg": 26,
    "highway_mpg": 32,
    "price": 8495
  },
  {
    "engine_size": 122,
    "horsepower": 84,
    "peak_rpm": 4800,
    "city_mpg": 26,
    "highway_mpg": 32,
    "price": 10595
  },
  {
    "engine_size": 122,
    "horsepower": 84,
    "peak_rpm": 4800,
    "city_mpg": 26,
    "highway_mpg": 32,
    "price": 10245
  },
  {
    "engine_size": 122,
    "horsepower": 64,
    "peak_rpm": 4650,
    "city_mpg": 36,
    "highway_mpg": 42,
    "price": 10795
  },
  {
    "engine_size": 122,
    "horsepower": 84,
    "peak_rpm": 4800,
    "city_mpg": 26,
    "highway_mpg": 32,
    "price": 11245
  },
  {
    "engine_size": 140,
    "horsepower": 120,
    "peak_rpm": 5000,
    "city_mpg": 19,
    "highway_mpg": 27,
    "price": 18280
  },
  {
    "engine_size": 134,
    "horsepower": 72,
    "peak_rpm": 4200,
    "city_mpg": 31,
    "highway_mpg": 39,
    "price": 18344
  },
  {
    "engine_size": 183,
    "horsepower": 123,
    "peak_rpm": 4350,
    "city_mpg": 22,
    "highway_mpg": 25,
    "price": 25552
  },
  {
    "engine_size": 183,
    "horsepower": 123,
    "peak_rpm": 4350,
    "city_mpg": 22,
    "highway_mpg": 25,
    "price": 28248
  },
  {
    "engine_size": 183,
    "horsepower": 123,
    "peak_rpm": 4350,
    "city_mpg": 22,
    "highway_mpg": 25,
    "price": 28176
  },
  {
    "engine_size": 183,
    "horsepower": 123,
    "peak_rpm": 4350,
    "city_mpg": 22,
    "highway_mpg": 25,
    "price": 31600
  },
  {
    "engine_size": 234,
    "horsepower": 155,
    "peak_rpm": 4750,
    "city_mpg": 16,
    "highway_mpg": 18,
    "price": 34184
  },
  {
    "engine_size": 234,
    "horsepower": 155,
    "peak_rpm": 4750,
    "city_mpg": 16,
    "highway_mpg": 18,
    "price": 35056
  },
  {
    "engine_size": 308,
    "horsepower": 184,
    "peak_rpm": 4500,
    "city_mpg": 14,
    "highway_mpg": 16,
    "price": 40960
  },
  {
    "engine_size": 304,
    "horsepower": 184,
    "peak_rpm": 4500,
    "city_mpg": 14,
    "highway_mpg": 16,
    "price": 45400
  },
  {
    "engine_size": 140,
    "horsepower": 175,
    "peak_rpm": 5000,
    "city_mpg": 19,
    "highway_mpg": 24,
    "price": 16503
  },
  {
    "engine_size": 92,
    "horsepower": 68,
    "peak_rpm": 5500,
    "city_mpg": 37,
    "highway_mpg": 41,
    "price": 5389
  },
  {
    "engine_size": 92,
    "horsepower": 68,
    "peak_rpm": 5500,
    "city_mpg": 31,
    "highway_mpg": 38,
    "price": 6189
  },
  {
    "engine_size": 92,
    "horsepower": 68,
    "peak_rpm": 5500,
    "city_mpg": 31,
    "highway_mpg": 38,
    "price": 6669
  },
  {
    "engine_size": 98,
    "horsepower": 102,
    "peak_rpm": 5500,
    "city_mpg": 24,
    "highway_mpg": 30,
    "price": 7689
  },
  {
    "engine_size": 110,
    "horsepower": 116,
    "peak_rpm": 5500,
    "city_mpg": 23,
    "highway_mpg": 30,
    "price": 9959
  },
  {
    "engine_size": 122,
    "horsepower": 88,
    "peak_rpm": 5000,
    "city_mpg": 25,
    "highway_mpg": 32,
    "price": 8499
  },
  {
    "engine_size": 156,
    "horsepower": 145,
    "peak_rpm": 5000,
    "city_mpg": 19,
    "highway_mpg": 24,
    "price": 12629
  },
  {
    "engine_size": 156,
    "horsepower": 145,
    "peak_rpm": 5000,
    "city_mpg": 19,
    "highway_mpg": 24,
    "price": 14869
  },
  {
    "engine_size": 156,
    "horsepower": 145,
    "peak_rpm": 5000,
    "city_mpg": 19,
    "highway_mpg": 24,
    "price": 14489
  },
  {
    "engine_size": 122,
    "horsepower": 88,
    "peak_rpm": 5000,
    "city_mpg": 25,
    "highway_mpg": 32,
    "price": 6989
  },
  {
    "engine_size": 122,
    "horsepower": 88,
    "peak_rpm": 5000,
    "city_mpg": 25,
    "highway_mpg": 32,
    "price": 8189
  },
  {
    "engine_size": 110,
    "horsepower": 116,
    "peak_rpm": 5500,
    "city_mpg": 23,
    "highway_mpg": 30,
    "price": 9279
  },
  {
    "engine_size": 110,
    "horsepower": 116,
    "peak_rpm": 5500,
    "city_mpg": 23,
    "highway_mpg": 30,
    "price": 9279
  },
  {
    "engine_size": 97,
    "horsepower": 69,
    "peak_rpm": 5200,
    "city_mpg": 31,
    "highway_mpg": 37,
    "price": 5499
  },
  {
    "engine_size": 103,
    "horsepower": 55,
    "peak_rpm": 4800,
    "city_mpg": 45,
    "highway_mpg": 50,
    "price": 7099
  },
  {
    "engine_size": 97,
    "horsepower": 69,
    "peak_rpm": 5200,
    "city_mpg": 31,
    "highway_mpg": 37,
    "price": 6649
  },
  {
    "engine_size": 97,
    "horsepower": 69,
    "peak_rpm": 5200,
    "city_mpg": 31,
    "highway_mpg": 37,
    "price": 6849
  },
  {
    "engine_size": 97,
    "horsepower": 69,
    "peak_rpm": 5200,
    "city_mpg": 31,
    "highway_mpg": 37,
    "price": 7349
  },
  {
    "engine_size": 97,
    "horsepower": 69,
    "peak_rpm": 5200,
    "city_mpg": 31,
    "highway_mpg": 37,
    "price": 7299
  },
  {
    "engine_size": 97,
    "horsepower": 69,
    "peak_rpm": 5200,
    "city_mpg": 31,
    "highway_mpg": 37,
    "price": 7799
  },
  {
    "engine_size": 97,
    "horsepower": 69,
    "peak_rpm": 5200,
    "city_mpg": 31,
    "highway_mpg": 37,
    "price": 7499
  },
  {
    "engine_size": 97,
    "horsepower": 69,
    "peak_rpm": 5200,
    "city_mpg": 31,
    "highway_mpg": 37,
    "price": 7999
  },
  {
    "engine_size": 97,
    "horsepower": 69,
    "peak_rpm": 5200,
    "city_mpg": 31,
    "highway_mpg": 37,
    "price": 8249
  },
  {
    "engine_size": 120,
    "horsepower": 97,
    "peak_rpm": 5200,
    "city_mpg": 27,
    "highway_mpg": 34,
    "price": 8949
  },
  {
    "engine_size": 120,
    "horsepower": 97,
    "peak_rpm": 5200,
    "city_mpg": 27,
    "highway_mpg": 34,
    "price": 9549
  },
  {
    "engine_size": 181,
    "horsepower": 152,
    "peak_rpm": 5200,
    "city_mpg": 17,
    "highway_mpg": 22,
    "price": 13499
  },
  {
    "engine_size": 181,
    "horsepower": 152,
    "peak_rpm": 5200,
    "city_mpg": 17,
    "highway_mpg": 22,
    "price": 14399
  },
  {
    "engine_size": 181,
    "horsepower": 152,
    "peak_rpm": 5200,
    "city_mpg": 19,
    "highway_mpg": 25,
    "price": 13499
  },
  {
    "engine_size": 181,
    "horsepower": 160,
    "peak_rpm": 5200,
    "city_mpg": 19,
    "highway_mpg": 25,
    "price": 17199
  },
  {
    "engine_size": 181,
    "horsepower": 200,
    "peak_rpm": 5200,
    "city_mpg": 17,
    "highway_mpg": 23,
    "price": 19699
  },
  {
    "engine_size": 181,
    "horsepower": 160,
    "peak_rpm": 5200,
    "city_mpg": 19,
    "highway_mpg": 25,
    "price": 18399
  },
  {
    "engine_size": 120,
    "horsepower": 97,
    "peak_rpm": 5000,
    "city_mpg": 19,
    "highway_mpg": 24,
    "price": 11900
  },
  {
    "engine_size": 152,
    "horsepower": 95,
    "peak_rpm": 4150,
    "city_mpg": 28,
    "highway_mpg": 33,
    "price": 13200
  },
  {
    "engine_size": 120,
    "horsepower": 97,
    "peak_rpm": 5000,
    "city_mpg": 19,
    "highway_mpg": 24,
    "price": 12440
  },
  {
    "engine_size": 152,
    "horsepower": 95,
    "peak_rpm": 4150,
    "city_mpg": 25,
    "highway_mpg": 25,
    "price": 13860
  },
  {
    "engine_size": 120,
    "horsepower": 95,
    "peak_rpm": 5000,
    "city_mpg": 19,
    "highway_mpg": 24,
    "price": 15580
  },
  {
    "engine_size": 152,
    "horsepower": 95,
    "peak_rpm": 4150,
    "city_mpg": 28,
    "highway_mpg": 33,
    "price": 16900
  },
  {
    "engine_size": 120,
    "horsepower": 95,
    "peak_rpm": 5000,
    "city_mpg": 19,
    "highway_mpg": 24,
    "price": 16695
  },
  {
    "engine_size": 152,
    "horsepower": 95,
    "peak_rpm": 4150,
    "city_mpg": 25,
    "highway_mpg": 25,
    "price": 17075
  },
  {
    "engine_size": 120,
    "horsepower": 97,
    "peak_rpm": 5000,
    "city_mpg": 19,
    "highway_mpg": 24,
    "price": 16630
  },
  {
    "engine_size": 152,
    "horsepower": 95,
    "peak_rpm": 4150,
    "city_mpg": 28,
    "highway_mpg": 33,
    "price": 17950
  },
  {
    "engine_size": 134,
    "horsepower": 142,
    "peak_rpm": 5600,
    "city_mpg": 18,
    "highway_mpg": 24,
    "price": 18150
  },
  {
    "engine_size": 90,
    "horsepower": 68,
    "peak_rpm": 5500,
    "city_mpg": 37,
    "highway_mpg": 41,
    "price": 5572
  },
  {
    "engine_size": 98,
    "horsepower": 102,
    "peak_rpm": 5500,
    "city_mpg": 24,
    "highway_mpg": 30,
    "price": 7957
  },
  {
    "engine_size": 90,
    "horsepower": 68,
    "peak_rpm": 5500,
    "city_mpg": 31,
    "highway_mpg": 38,
    "price": 6229
  },
  {
    "engine_size": 90,
    "horsepower": 68,
    "peak_rpm": 5500,
    "city_mpg": 31,
    "highway_mpg": 38,
    "price": 6692
  },
  {
    "engine_size": 98,
    "horsepower": 68,
    "peak_rpm": 5500,
    "city_mpg": 31,
    "highway_mpg": 38,
    "price": 7609
  },
  {
    "engine_size": 122,
    "horsepower": 88,
    "peak_rpm": 5000,
    "city_mpg": 24,
    "highway_mpg": 30,
    "price": 8921
  },
  {
    "engine_size": 156,
    "horsepower": 145,
    "peak_rpm": 5000,
    "city_mpg": 19,
    "highway_mpg": 24,
    "price": 12764
  },
  {
    "engine_size": 151,
    "horsepower": 143,
    "peak_rpm": 5500,
    "city_mpg": 19,
    "highway_mpg": 27,
    "price": 22018
  },
  {
    "engine_size": 194,
    "horsepower": 207,
    "peak_rpm": 5900,
    "city_mpg": 17,
    "highway_mpg": 25,
    "price": 32528
  },
  {
    "engine_size": 194,
    "horsepower": 207,
    "peak_rpm": 5900,
    "city_mpg": 17,
    "highway_mpg": 25,
    "price": 34028
  },
  {
    "engine_size": 194,
    "horsepower": 207,
    "peak_rpm": 5900,
    "city_mpg": 17,
    "highway_mpg": 25,
    "price": 37028
  },
  {
    "engine_size": 121,
    "horsepower": 110,
    "peak_rpm": 5250,
    "city_mpg": 21,
    "highway_mpg": 28,
    "price": 11850
  },
  {
    "engine_size": 121,
    "horsepower": 110,
    "peak_rpm": 5250,
    "city_mpg": 21,
    "highway_mpg": 28,
    "price": 12170
  },
  {
    "engine_size": 121,
    "horsepower": 110,
    "peak_rpm": 5250,
    "city_mpg": 21,
    "highway_mpg": 28,
    "price": 15040
  },
  {
    "engine_size": 121,
    "horsepower": 110,
    "peak_rpm": 5250,
    "city_mpg": 21,
    "highway_mpg": 28,
    "price": 15510
  },
  {
    "engine_size": 121,
    "horsepower": 160,
    "peak_rpm": 5500,
    "city_mpg": 19,
    "highway_mpg": 26,
    "price": 18150
  },
  {
    "engine_size": 121,
    "horsepower": 160,
    "peak_rpm": 5500,
    "city_mpg": 19,
    "highway_mpg": 26,
    "price": 18620
  },
  {
    "engine_size": 97,
    "horsepower": 69,
    "peak_rpm": 4900,
    "city_mpg": 31,
    "highway_mpg": 36,
    "price": 5118
  },
  {
    "engine_size": 108,
    "horsepower": 73,
    "peak_rpm": 4400,
    "city_mpg": 26,
    "highway_mpg": 31,
    "price": 7053
  },
  {
    "engine_size": 108,
    "horsepower": 73,
    "peak_rpm": 4400,
    "city_mpg": 26,
    "highway_mpg": 31,
    "price": 7603
  },
  {
    "engine_size": 108,
    "horsepower": 82,
    "peak_rpm": 4800,
    "city_mpg": 32,
    "highway_mpg": 37,
    "price": 7126
  },
  {
    "engine_size": 108,
    "horsepower": 82,
    "peak_rpm": 4400,
    "city_mpg": 28,
    "highway_mpg": 33,
    "price": 7775
  },
  {
    "engine_size": 108,
    "horsepower": 94,
    "peak_rpm": 5200,
    "city_mpg": 26,
    "highway_mpg": 32,
    "price": 9960
  },
  {
    "engine_size": 108,
    "horsepower": 82,
    "peak_rpm": 4800,
    "city_mpg": 24,
    "highway_mpg": 25,
    "price": 9233
  },
  {
    "engine_size": 108,
    "horsepower": 111,
    "peak_rpm": 4800,
    "city_mpg": 24,
    "highway_mpg": 29,
    "price": 11259
  },
  {
    "engine_size": 108,
    "horsepower": 82,
    "peak_rpm": 4800,
    "city_mpg": 28,
    "highway_mpg": 32,
    "price": 7463
  },
  {
    "engine_size": 108,
    "horsepower": 94,
    "peak_rpm": 5200,
    "city_mpg": 25,
    "highway_mpg": 31,
    "price": 10198
  },
  {
    "engine_size": 108,
    "horsepower": 82,
    "peak_rpm": 4800,
    "city_mpg": 23,
    "highway_mpg": 29,
    "price": 8013
  },
  {
    "engine_size": 108,
    "horsepower": 111,
    "peak_rpm": 4800,
    "city_mpg": 23,
    "highway_mpg": 23,
    "price": 11694
  },
  {
    "engine_size": 92,
    "horsepower": 62,
    "peak_rpm": 4800,
    "city_mpg": 35,
    "highway_mpg": 39,
    "price": 5348
  },
  {
    "engine_size": 92,
    "horsepower": 62,
    "peak_rpm": 4800,
    "city_mpg": 31,
    "highway_mpg": 38,
    "price": 6338
  },
  {
    "engine_size": 92,
    "horsepower": 62,
    "peak_rpm": 4800,
    "city_mpg": 31,
    "highway_mpg": 38,
    "price": 6488
  },
  {
    "engine_size": 92,
    "horsepower": 62,
    "peak_rpm": 4800,
    "city_mpg": 31,
    "highway_mpg": 37,
    "price": 6918
  },
  {
    "engine_size": 92,
    "horsepower": 62,
    "peak_rpm": 4800,
    "city_mpg": 27,
    "highway_mpg": 32,
    "price": 7898
  },
  {
    "engine_size": 92,
    "horsepower": 62,
    "peak_rpm": 4800,
    "city_mpg": 27,
    "highway_mpg": 32,
    "price": 8778
  },
  {
    "engine_size": 98,
    "horsepower": 70,
    "peak_rpm": 4800,
    "city_mpg": 30,
    "highway_mpg": 37,
    "price": 6938
  },
  {
    "engine_size": 98,
    "horsepower": 70,
    "peak_rpm": 4800,
    "city_mpg": 30,
    "highway_mpg": 37,
    "price": 7198
  },
  {
    "engine_size": 110,
    "horsepower": 56,
    "peak_rpm": 4500,
    "city_mpg": 34,
    "highway_mpg": 36,
    "price": 7898
  },
  {
    "engine_size": 110,
    "horsepower": 56,
    "peak_rpm": 4500,
    "city_mpg": 38,
    "highway_mpg": 47,
    "price": 7788
  },
  {
    "engine_size": 98,
    "horsepower": 70,
    "peak_rpm": 4800,
    "city_mpg": 38,
    "highway_mpg": 47,
    "price": 7738
  },
  {
    "engine_size": 98,
    "horsepower": 70,
    "peak_rpm": 4800,
    "city_mpg": 28,
    "highway_mpg": 34,
    "price": 8358
  },
  {
    "engine_size": 98,
    "horsepower": 70,
    "peak_rpm": 4800,
    "city_mpg": 28,
    "highway_mpg": 34,
    "price": 9258
  },
  {
    "engine_size": 98,
    "horsepower": 70,
    "peak_rpm": 4800,
    "city_mpg": 29,
    "highway_mpg": 34,
    "price": 8058
  },
  {
    "engine_size": 98,
    "horsepower": 70,
    "peak_rpm": 4800,
    "city_mpg": 29,
    "highway_mpg": 34,
    "price": 8238
  },
  {
    "engine_size": 98,
    "horsepower": 112,
    "peak_rpm": 6600,
    "city_mpg": 26,
    "highway_mpg": 29,
    "price": 9298
  },
  {
    "engine_size": 98,
    "horsepower": 112,
    "peak_rpm": 6600,
    "city_mpg": 26,
    "highway_mpg": 29,
    "price": 9538
  },
  {
    "engine_size": 146,
    "horsepower": 116,
    "peak_rpm": 4800,
    "city_mpg": 24,
    "highway_mpg": 30,
    "price": 8449
  },
  {
    "engine_size": 146,
    "horsepower": 116,
    "peak_rpm": 4800,
    "city_mpg": 24,
    "highway_mpg": 30,
    "price": 9639
  },
  {
    "engine_size": 146,
    "horsepower": 116,
    "peak_rpm": 4800,
    "city_mpg": 24,
    "highway_mpg": 30,
    "price": 9989
  },
  {
    "engine_size": 146,
    "horsepower": 116,
    "peak_rpm": 4800,
    "city_mpg": 24,
    "highway_mpg": 30,
    "price": 11199
  },
  {
    "engine_size": 146,
    "horsepower": 116,
    "peak_rpm": 4800,
    "city_mpg": 24,
    "highway_mpg": 30,
    "price": 11549
  },
  {
    "engine_size": 146,
    "horsepower": 116,
    "peak_rpm": 4800,
    "city_mpg": 24,
    "highway_mpg": 30,
    "price": 17669
  },
  {
    "engine_size": 122,
    "horsepower": 92,
    "peak_rpm": 4200,
    "city_mpg": 29,
    "highway_mpg": 34,
    "price": 8948
  },
  {
    "engine_size": 110,
    "horsepower": 73,
    "peak_rpm": 4500,
    "city_mpg": 30,
    "highway_mpg": 33,
    "price": 10698
  },
  {
    "engine_size": 122,
    "horsepower": 92,
    "peak_rpm": 4200,
    "city_mpg": 27,
    "highway_mpg": 32,
    "price": 9988
  },
  {
    "engine_size": 122,
    "horsepower": 92,
    "peak_rpm": 4200,
    "city_mpg": 27,
    "highway_mpg": 32,
    "price": 10898
  },
  {
    "engine_size": 122,
    "horsepower": 92,
    "peak_rpm": 4200,
    "city_mpg": 27,
    "highway_mpg": 32,
    "price": 11248
  },
  {
    "engine_size": 171,
    "horsepower": 161,
    "peak_rpm": 5200,
    "city_mpg": 20,
    "highway_mpg": 24,
    "price": 16558
  },
  {
    "engine_size": 171,
    "horsepower": 161,
    "peak_rpm": 5200,
    "city_mpg": 19,
    "highway_mpg": 24,
    "price": 15998
  },
  {
    "engine_size": 171,
    "horsepower": 156,
    "peak_rpm": 5200,
    "city_mpg": 20,
    "highway_mpg": 24,
    "price": 15690
  },
  {
    "engine_size": 161,
    "horsepower": 156,
    "peak_rpm": 5200,
    "city_mpg": 19,
    "highway_mpg": 24,
    "price": 15750
  },
  {
    "engine_size": 97,
    "horsepower": 52,
    "peak_rpm": 4800,
    "city_mpg": 37,
    "highway_mpg": 46,
    "price": 7775
  },
  {
    "engine_size": 109,
    "horsepower": 85,
    "peak_rpm": 5250,
    "city_mpg": 27,
    "highway_mpg": 34,
    "price": 7975
  },
  {
    "engine_size": 97,
    "horsepower": 52,
    "peak_rpm": 4800,
    "city_mpg": 37,
    "highway_mpg": 46,
    "price": 7995
  },
  {
    "engine_size": 109,
    "horsepower": 85,
    "peak_rpm": 5250,
    "city_mpg": 27,
    "highway_mpg": 34,
    "price": 8195
  },
  {
    "engine_size": 109,
    "horsepower": 85,
    "peak_rpm": 5250,
    "city_mpg": 27,
    "highway_mpg": 34,
    "price": 8495
  },
  {
    "engine_size": 97,
    "horsepower": 68,
    "peak_rpm": 4500,
    "city_mpg": 37,
    "highway_mpg": 42,
    "price": 9495
  },
  {
    "engine_size": 109,
    "horsepower": 100,
    "peak_rpm": 5500,
    "city_mpg": 26,
    "highway_mpg": 32,
    "price": 9995
  },
  {
    "engine_size": 109,
    "horsepower": 90,
    "peak_rpm": 5500,
    "city_mpg": 24,
    "highway_mpg": 29,
    "price": 11595
  },
  {
    "engine_size": 109,
    "horsepower": 90,
    "peak_rpm": 5500,
    "city_mpg": 24,
    "highway_mpg": 29,
    "price": 9980
  },
  {
    "engine_size": 136,
    "horsepower": 110,
    "peak_rpm": 5500,
    "city_mpg": 19,
    "highway_mpg": 24,
    "price": 13295
  },
  {
    "engine_size": 97,
    "horsepower": 68,
    "peak_rpm": 4500,
    "city_mpg": 33,
    "highway_mpg": 38,
    "price": 13845
  },
  {
    "engine_size": 109,
    "horsepower": 88,
    "peak_rpm": 5500,
    "city_mpg": 25,
    "highway_mpg": 31,
    "price": 12290
  },
  {
    "engine_size": 141,
    "horsepower": 114,
    "peak_rpm": 5400,
    "city_mpg": 23,
    "highway_mpg": 28,
    "price": 12940
  },
  {
    "engine_size": 141,
    "horsepower": 114,
    "peak_rpm": 5400,
    "city_mpg": 23,
    "highway_mpg": 28,
    "price": 13415
  },
  {
    "engine_size": 141,
    "horsepower": 114,
    "peak_rpm": 5400,
    "city_mpg": 24,
    "highway_mpg": 28,
    "price": 15985
  },
  {
    "engine_size": 141,
    "horsepower": 114,
    "peak_rpm": 5400,
    "city_mpg": 24,
    "highway_mpg": 28,
    "price": 16515
  },
  {
    "engine_size": 130,
    "horsepower": 162,
    "peak_rpm": 5100,
    "city_mpg": 17,
    "highway_mpg": 22,
    "price": 18420
  },
  {
    "engine_size": 130,
    "horsepower": 162,
    "peak_rpm": 5100,
    "city_mpg": 17,
    "highway_mpg": 22,
    "price": 18950
  },
  {
    "engine_size": 141,
    "horsepower": 114,
    "peak_rpm": 5400,
    "city_mpg": 23,
    "highway_mpg": 28,
    "price": 16845
  },
  {
    "engine_size": 141,
    "horsepower": 160,
    "peak_rpm": 5300,
    "city_mpg": 19,
    "highway_mpg": 25,
    "price": 19045
  },
  {
    "engine_size": 173,
    "horsepower": 134,
    "peak_rpm": 5500,
    "city_mpg": 18,
    "highway_mpg": 23,
    "price": 21485
  },
  {
    "engine_size": 145,
    "horsepower": 106,
    "peak_rpm": 4800,
    "city_mpg": 26,
    "highway_mpg": 27,
    "price": 22470
  },
  {
    "engine_size": 141,
    "horsepower": 114,
    "peak_rpm": 5400,
    "city_mpg": 19,
    "highway_mpg": 25,
    "price": 22625
  }
]
