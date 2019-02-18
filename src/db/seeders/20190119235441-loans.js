"use strict";

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      "loans",
      [
        {
          id: 1,
          book_id: 7,
          patron_id: 69,
          loaned_on: "2016-12-12",
          return_by: "2018-07-23",
          returned_on: "2018-05-02"
        },
        {
          id: 2,
          book_id: 10,
          patron_id: 54,
          loaned_on: "2018-10-14",
          return_by: "2018-12-30",
          returned_on: null
        },
        {
          id: 3,
          book_id: 50,
          patron_id: 56,
          loaned_on: "2018-04-07",
          return_by: "2018-12-14",
          returned_on: "2018-08-13"
        },
        {
          id: 4,
          book_id: 12,
          patron_id: 7,
          loaned_on: "2016-04-01",
          return_by: "2018-06-19",
          returned_on: "2018-05-28"
        },
        {
          id: 5,
          book_id: 17,
          patron_id: 26,
          loaned_on: "2017-12-02",
          return_by: "2018-09-03",
          returned_on: null
        },
        {
          id: 6,
          book_id: 27,
          patron_id: 20,
          loaned_on: "2017-03-27",
          return_by: "2018-04-21",
          returned_on: "2018-06-04"
        },
        {
          id: 7,
          book_id: 69,
          patron_id: 56,
          loaned_on: "2016-10-04",
          return_by: "2018-09-05",
          returned_on: "2018-08-02"
        },
        {
          id: 8,
          book_id: 63,
          patron_id: 58,
          loaned_on: "2018-10-30",
          return_by: "2018-11-05",
          returned_on: null
        },
        {
          id: 9,
          book_id: 12,
          patron_id: 1,
          loaned_on: "2016-09-11",
          return_by: "2018-09-06",
          returned_on: "2018-04-18"
        },
        {
          id: 10,
          book_id: 68,
          patron_id: 23,
          loaned_on: "2016-06-25",
          return_by: "2018-10-17",
          returned_on: "2018-11-09"
        },
        {
          id: 11,
          book_id: 58,
          patron_id: 31,
          loaned_on: "2016-07-19",
          return_by: "2018-08-24",
          returned_on: null
        },
        {
          id: 12,
          book_id: 67,
          patron_id: 41,
          loaned_on: "2017-01-12",
          return_by: "2018-09-18",
          returned_on: null
        },
        {
          id: 13,
          book_id: 25,
          patron_id: 2,
          loaned_on: "2016-09-26",
          return_by: "2018-06-24",
          returned_on: null
        },
        {
          id: 14,
          book_id: 44,
          patron_id: 39,
          loaned_on: "2016-10-30",
          return_by: "2018-01-18",
          returned_on: "2018-04-04"
        },
        {
          id: 15,
          book_id: 1,
          patron_id: 64,
          loaned_on: "2016-09-01",
          return_by: "2018-09-14",
          returned_on: null
        },
        {
          id: 16,
          book_id: 10,
          patron_id: 14,
          loaned_on: "2018-04-08",
          return_by: "2018-01-12",
          returned_on: null
        },
        {
          id: 17,
          book_id: 17,
          patron_id: 60,
          loaned_on: "2018-04-29",
          return_by: "2018-12-10",
          returned_on: "2018-12-30"
        },
        {
          id: 18,
          book_id: 61,
          patron_id: 57,
          loaned_on: "2017-08-11",
          return_by: "2018-05-14",
          returned_on: "2018-01-21"
        },
        {
          id: 19,
          book_id: 17,
          patron_id: 55,
          loaned_on: "2017-03-30",
          return_by: "2018-12-10",
          returned_on: null
        },
        {
          id: 20,
          book_id: 47,
          patron_id: 61,
          loaned_on: "2017-09-03",
          return_by: "2018-04-13",
          returned_on: "2018-05-08"
        },
        {
          id: 21,
          book_id: 14,
          patron_id: 29,
          loaned_on: "2018-04-22",
          return_by: "2018-01-14",
          returned_on: null
        },
        {
          id: 22,
          book_id: 42,
          patron_id: 50,
          loaned_on: "2018-12-05",
          return_by: "2018-12-15",
          returned_on: null
        },
        {
          id: 23,
          book_id: 4,
          patron_id: 66,
          loaned_on: "2018-05-16",
          return_by: "2018-08-15",
          returned_on: null
        },
        {
          id: 24,
          book_id: 12,
          patron_id: 50,
          loaned_on: "2018-12-01",
          return_by: "2018-07-27",
          returned_on: null
        },
        {
          id: 25,
          book_id: 48,
          patron_id: 6,
          loaned_on: "2016-03-09",
          return_by: "2018-01-07",
          returned_on: "2018-07-01"
        },
        {
          id: 26,
          book_id: 24,
          patron_id: 49,
          loaned_on: "2016-06-13",
          return_by: "2018-10-15",
          returned_on: "2018-05-24"
        },
        {
          id: 27,
          book_id: 62,
          patron_id: 72,
          loaned_on: "2018-02-04",
          return_by: "2018-02-09",
          returned_on: "2018-08-30"
        },
        {
          id: 28,
          book_id: 66,
          patron_id: 48,
          loaned_on: "2018-02-16",
          return_by: "2018-05-04",
          returned_on: null
        },
        {
          id: 29,
          book_id: 32,
          patron_id: 45,
          loaned_on: "2018-07-02",
          return_by: "2018-08-27",
          returned_on: "2018-10-16"
        },
        {
          id: 30,
          book_id: 5,
          patron_id: 21,
          loaned_on: "2016-10-01",
          return_by: "2018-07-07",
          returned_on: "2018-08-22"
        },
        {
          id: 31,
          book_id: 41,
          patron_id: 61,
          loaned_on: "2016-02-18",
          return_by: "2018-04-10",
          returned_on: null
        },
        {
          id: 32,
          book_id: 16,
          patron_id: 35,
          loaned_on: "2017-11-25",
          return_by: "2018-08-25",
          returned_on: null
        },
        {
          id: 33,
          book_id: 12,
          patron_id: 62,
          loaned_on: "2018-08-18",
          return_by: "2018-06-27",
          returned_on: "2018-09-01"
        },
        {
          id: 34,
          book_id: 6,
          patron_id: 51,
          loaned_on: "2017-01-01",
          return_by: "2018-04-27",
          returned_on: "2018-07-12"
        },
        {
          id: 35,
          book_id: 3,
          patron_id: 31,
          loaned_on: "2017-05-25",
          return_by: "2018-03-15",
          returned_on: null
        },
        {
          id: 36,
          book_id: 55,
          patron_id: 33,
          loaned_on: "2018-01-13",
          return_by: "2018-12-20",
          returned_on: null
        },
        {
          id: 37,
          book_id: 6,
          patron_id: 20,
          loaned_on: "2016-06-08",
          return_by: "2018-09-17",
          returned_on: "2018-03-20"
        },
        {
          id: 38,
          book_id: 70,
          patron_id: 45,
          loaned_on: "2017-08-27",
          return_by: "2018-08-04",
          returned_on: null
        },
        {
          id: 39,
          book_id: 24,
          patron_id: 43,
          loaned_on: "2018-10-02",
          return_by: "2018-06-04",
          returned_on: null
        },
        {
          id: 40,
          book_id: 5,
          patron_id: 77,
          loaned_on: "2016-12-24",
          return_by: "2018-08-19",
          returned_on: "2018-11-01"
        },
        {
          id: 41,
          book_id: 19,
          patron_id: 40,
          loaned_on: "2017-04-19",
          return_by: "2018-12-20",
          returned_on: "2018-09-25"
        },
        {
          id: 42,
          book_id: 43,
          patron_id: 2,
          loaned_on: "2018-02-21",
          return_by: "2018-11-07",
          returned_on: "2018-12-19"
        },
        {
          id: 43,
          book_id: 55,
          patron_id: 56,
          loaned_on: "2016-07-05",
          return_by: "2018-01-23",
          returned_on: "2018-01-06"
        },
        {
          id: 44,
          book_id: 56,
          patron_id: 72,
          loaned_on: "2016-11-26",
          return_by: "2018-03-22",
          returned_on: "2018-05-30"
        },
        {
          id: 45,
          book_id: 43,
          patron_id: 34,
          loaned_on: "2018-02-18",
          return_by: "2018-06-24",
          returned_on: null
        },
        {
          id: 46,
          book_id: 58,
          patron_id: 63,
          loaned_on: "2018-11-02",
          return_by: "2018-12-28",
          returned_on: "2018-04-02"
        },
        {
          id: 47,
          book_id: 63,
          patron_id: 41,
          loaned_on: "2018-09-14",
          return_by: "2018-03-05",
          returned_on: null
        },
        {
          id: 48,
          book_id: 47,
          patron_id: 10,
          loaned_on: "2016-07-05",
          return_by: "2018-03-18",
          returned_on: "2018-01-17"
        },
        {
          id: 49,
          book_id: 59,
          patron_id: 7,
          loaned_on: "2017-10-16",
          return_by: "2018-07-02",
          returned_on: null
        },
        {
          id: 50,
          book_id: 65,
          patron_id: 35,
          loaned_on: "2017-05-09",
          return_by: "2018-05-09",
          returned_on: null
        },
        {
          id: 51,
          book_id: 3,
          patron_id: 41,
          loaned_on: "2018-03-19",
          return_by: "2018-09-21",
          returned_on: null
        },
        {
          id: 52,
          book_id: 16,
          patron_id: 24,
          loaned_on: "2016-05-30",
          return_by: "2018-08-27",
          returned_on: "2018-09-02"
        },
        {
          id: 53,
          book_id: 59,
          patron_id: 10,
          loaned_on: "2017-10-02",
          return_by: "2018-05-13",
          returned_on: "2018-01-30"
        },
        {
          id: 54,
          book_id: 21,
          patron_id: 63,
          loaned_on: "2016-05-15",
          return_by: "2018-08-03",
          returned_on: "2018-09-07"
        },
        {
          id: 55,
          book_id: 28,
          patron_id: 8,
          loaned_on: "2017-08-01",
          return_by: "2018-12-28",
          returned_on: "2018-02-11"
        },
        {
          id: 56,
          book_id: 39,
          patron_id: 77,
          loaned_on: "2017-08-29",
          return_by: "2018-02-03",
          returned_on: "2018-05-29"
        },
        {
          id: 57,
          book_id: 51,
          patron_id: 49,
          loaned_on: "2017-07-19",
          return_by: "2018-04-05",
          returned_on: "2018-12-06"
        },
        {
          id: 58,
          book_id: 46,
          patron_id: 44,
          loaned_on: "2018-11-28",
          return_by: "2018-06-15",
          returned_on: "2018-10-27"
        },
        {
          id: 59,
          book_id: 28,
          patron_id: 58,
          loaned_on: "2016-10-31",
          return_by: "2018-03-07",
          returned_on: "2018-03-05"
        },
        {
          id: 60,
          book_id: 65,
          patron_id: 37,
          loaned_on: "2016-04-29",
          return_by: "2018-02-11",
          returned_on: "2018-04-05"
        },
        {
          id: 61,
          book_id: 28,
          patron_id: 77,
          loaned_on: "2016-07-13",
          return_by: "2018-09-05",
          returned_on: null
        },
        {
          id: 62,
          book_id: 48,
          patron_id: 24,
          loaned_on: "2017-02-06",
          return_by: "2018-09-15",
          returned_on: "2018-10-14"
        },
        {
          id: 63,
          book_id: 30,
          patron_id: 4,
          loaned_on: "2018-11-14",
          return_by: "2018-11-09",
          returned_on: null
        },
        {
          id: 64,
          book_id: 38,
          patron_id: 42,
          loaned_on: "2017-08-23",
          return_by: "2018-12-02",
          returned_on: null
        },
        {
          id: 65,
          book_id: 46,
          patron_id: 29,
          loaned_on: "2016-06-29",
          return_by: "2018-12-08",
          returned_on: "2018-10-26"
        },
        {
          id: 66,
          book_id: 63,
          patron_id: 65,
          loaned_on: "2016-06-19",
          return_by: "2018-05-08",
          returned_on: "2018-07-20"
        },
        {
          id: 67,
          book_id: 14,
          patron_id: 44,
          loaned_on: "2018-05-18",
          return_by: "2018-10-20",
          returned_on: "2018-04-18"
        },
        {
          id: 68,
          book_id: 61,
          patron_id: 49,
          loaned_on: "2017-06-27",
          return_by: "2018-05-02",
          returned_on: null
        },
        {
          id: 69,
          book_id: 24,
          patron_id: 68,
          loaned_on: "2018-02-15",
          return_by: "2018-11-01",
          returned_on: null
        },
        {
          id: 70,
          book_id: 49,
          patron_id: 67,
          loaned_on: "2017-06-26",
          return_by: "2018-02-27",
          returned_on: "2018-01-24"
        },
        {
          id: 71,
          book_id: 9,
          patron_id: 30,
          loaned_on: "2017-05-05",
          return_by: "2018-07-15",
          returned_on: null
        },
        {
          id: 72,
          book_id: 48,
          patron_id: 78,
          loaned_on: "2016-10-07",
          return_by: "2018-08-14",
          returned_on: "2018-03-20"
        },
        {
          id: 73,
          book_id: 24,
          patron_id: 4,
          loaned_on: "2017-06-27",
          return_by: "2018-10-30",
          returned_on: "2018-08-14"
        },
        {
          id: 74,
          book_id: 8,
          patron_id: 67,
          loaned_on: "2017-08-24",
          return_by: "2018-03-01",
          returned_on: null
        },
        {
          id: 75,
          book_id: 70,
          patron_id: 8,
          loaned_on: "2018-02-22",
          return_by: "2019-01-07",
          returned_on: "2018-08-28"
        },
        {
          id: 76,
          book_id: 37,
          patron_id: 37,
          loaned_on: "2018-11-01",
          return_by: "2018-04-03",
          returned_on: "2018-04-13"
        },
        {
          id: 77,
          book_id: 63,
          patron_id: 65,
          loaned_on: "2016-09-07",
          return_by: "2018-10-05",
          returned_on: "2018-12-11"
        },
        {
          id: 78,
          book_id: 47,
          patron_id: 59,
          loaned_on: "2016-02-15",
          return_by: "2018-10-31",
          returned_on: null
        },
        {
          id: 79,
          book_id: 55,
          patron_id: 37,
          loaned_on: "2018-05-06",
          return_by: "2018-01-29",
          returned_on: "2018-08-25"
        },
        {
          id: 80,
          book_id: 66,
          patron_id: 20,
          loaned_on: "2018-01-23",
          return_by: "2018-05-22",
          returned_on: null
        },
        {
          id: 81,
          book_id: 2,
          patron_id: 3,
          loaned_on: "2018-11-01",
          return_by: "2018-02-05",
          returned_on: "2018-07-04"
        },
        {
          id: 82,
          book_id: 31,
          patron_id: 57,
          loaned_on: "2018-12-26",
          return_by: "2018-03-04",
          returned_on: "2018-07-11"
        },
        {
          id: 83,
          book_id: 13,
          patron_id: 22,
          loaned_on: "2016-08-01",
          return_by: "2018-12-20",
          returned_on: "2018-04-18"
        },
        {
          id: 84,
          book_id: 12,
          patron_id: 75,
          loaned_on: "2018-10-16",
          return_by: "2018-10-13",
          returned_on: "2018-12-02"
        },
        {
          id: 85,
          book_id: 5,
          patron_id: 8,
          loaned_on: "2018-02-06",
          return_by: "2018-01-13",
          returned_on: null
        },
        {
          id: 86,
          book_id: 35,
          patron_id: 57,
          loaned_on: "2017-11-21",
          return_by: "2018-01-18",
          returned_on: "2018-08-24"
        },
        {
          id: 87,
          book_id: 23,
          patron_id: 56,
          loaned_on: "2018-03-16",
          return_by: "2018-03-15",
          returned_on: "2018-02-10"
        },
        {
          id: 88,
          book_id: 21,
          patron_id: 62,
          loaned_on: "2017-05-09",
          return_by: "2018-03-26",
          returned_on: "2018-08-22"
        },
        {
          id: 89,
          book_id: 33,
          patron_id: 76,
          loaned_on: "2016-11-08",
          return_by: "2018-11-29",
          returned_on: null
        },
        {
          id: 90,
          book_id: 28,
          patron_id: 9,
          loaned_on: "2017-01-10",
          return_by: "2018-03-05",
          returned_on: "2018-06-29"
        },
        {
          id: 91,
          book_id: 57,
          patron_id: 45,
          loaned_on: "2017-02-14",
          return_by: "2018-01-29",
          returned_on: "2018-01-07"
        },
        {
          id: 92,
          book_id: 34,
          patron_id: 16,
          loaned_on: "2016-12-28",
          return_by: "2018-08-05",
          returned_on: "2018-07-31"
        },
        {
          id: 93,
          book_id: 30,
          patron_id: 57,
          loaned_on: "2018-03-19",
          return_by: "2018-06-18",
          returned_on: null
        },
        {
          id: 94,
          book_id: 25,
          patron_id: 22,
          loaned_on: "2018-04-11",
          return_by: "2018-03-12",
          returned_on: "2018-01-07"
        },
        {
          id: 95,
          book_id: 56,
          patron_id: 25,
          loaned_on: "2018-07-19",
          return_by: "2018-09-14",
          returned_on: "2018-08-20"
        },
        {
          id: 96,
          book_id: 29,
          patron_id: 2,
          loaned_on: "2017-07-31",
          return_by: "2018-04-03",
          returned_on: null
        },
        {
          id: 97,
          book_id: 45,
          patron_id: 24,
          loaned_on: "2018-05-28",
          return_by: "2018-05-13",
          returned_on: "2018-04-16"
        },
        {
          id: 98,
          book_id: 69,
          patron_id: 32,
          loaned_on: "2018-05-23",
          return_by: "2018-12-13",
          returned_on: "2018-08-18"
        },
        {
          id: 99,
          book_id: 40,
          patron_id: 30,
          loaned_on: "2017-11-21",
          return_by: "2018-09-19",
          returned_on: "2018-06-05"
        },
        {
          id: 100,
          book_id: 33,
          patron_id: 54,
          loaned_on: "2016-11-25",
          return_by: "2018-05-17",
          returned_on: "2018-12-11"
        },
        {
          id: 101,
          book_id: 9,
          patron_id: 6,
          loaned_on: "2017-12-11",
          return_by: "2018-12-09",
          returned_on: "2018-06-21"
        },
        {
          id: 102,
          book_id: 44,
          patron_id: 5,
          loaned_on: "2016-10-24",
          return_by: "2018-07-17",
          returned_on: "2018-10-11"
        },
        {
          id: 103,
          book_id: 33,
          patron_id: 56,
          loaned_on: "2018-03-30",
          return_by: "2018-04-09",
          returned_on: "2018-04-15"
        },
        {
          id: 104,
          book_id: 19,
          patron_id: 18,
          loaned_on: "2017-11-13",
          return_by: "2018-08-29",
          returned_on: "2018-06-30"
        },
        {
          id: 105,
          book_id: 32,
          patron_id: 6,
          loaned_on: "2016-03-26",
          return_by: "2018-01-18",
          returned_on: null
        },
        {
          id: 106,
          book_id: 12,
          patron_id: 23,
          loaned_on: "2018-07-07",
          return_by: "2018-08-20",
          returned_on: "2018-11-08"
        },
        {
          id: 107,
          book_id: 25,
          patron_id: 65,
          loaned_on: "2016-09-19",
          return_by: "2018-09-05",
          returned_on: null
        },
        {
          id: 108,
          book_id: 18,
          patron_id: 73,
          loaned_on: "2016-05-03",
          return_by: "2018-01-17",
          returned_on: null
        },
        {
          id: 109,
          book_id: 11,
          patron_id: 62,
          loaned_on: "2017-01-18",
          return_by: "2018-04-20",
          returned_on: "2018-10-15"
        },
        {
          id: 110,
          book_id: 43,
          patron_id: 51,
          loaned_on: "2017-03-02",
          return_by: "2018-10-03",
          returned_on: "2018-07-02"
        },
        {
          id: 111,
          book_id: 65,
          patron_id: 52,
          loaned_on: "2018-10-04",
          return_by: "2018-04-11",
          returned_on: "2018-04-17"
        },
        {
          id: 112,
          book_id: 61,
          patron_id: 61,
          loaned_on: "2017-05-10",
          return_by: "2018-10-16",
          returned_on: null
        },
        {
          id: 113,
          book_id: 53,
          patron_id: 64,
          loaned_on: "2018-07-14",
          return_by: "2018-11-12",
          returned_on: "2018-12-14"
        },
        {
          id: 114,
          book_id: 11,
          patron_id: 4,
          loaned_on: "2016-04-13",
          return_by: "2018-06-02",
          returned_on: "2018-07-24"
        },
        {
          id: 115,
          book_id: 24,
          patron_id: 49,
          loaned_on: "2017-09-23",
          return_by: "2018-02-23",
          returned_on: null
        },
        {
          id: 116,
          book_id: 40,
          patron_id: 71,
          loaned_on: "2017-06-01",
          return_by: "2018-01-23",
          returned_on: "2018-09-16"
        },
        {
          id: 117,
          book_id: 30,
          patron_id: 8,
          loaned_on: "2017-03-12",
          return_by: "2018-07-03",
          returned_on: null
        },
        {
          id: 118,
          book_id: 37,
          patron_id: 74,
          loaned_on: "2016-06-03",
          return_by: "2018-04-13",
          returned_on: null
        },
        {
          id: 119,
          book_id: 17,
          patron_id: 49,
          loaned_on: "2016-12-16",
          return_by: "2018-09-21",
          returned_on: "2018-01-26"
        },
        {
          id: 120,
          book_id: 14,
          patron_id: 75,
          loaned_on: "2016-10-12",
          return_by: "2018-04-13",
          returned_on: "2018-10-15"
        },
        {
          id: 121,
          book_id: 14,
          patron_id: 11,
          loaned_on: "2016-10-04",
          return_by: "2018-09-20",
          returned_on: null
        },
        {
          id: 122,
          book_id: 43,
          patron_id: 45,
          loaned_on: "2017-06-02",
          return_by: "2018-12-13",
          returned_on: "2018-04-19"
        },
        {
          id: 123,
          book_id: 61,
          patron_id: 36,
          loaned_on: "2016-04-04",
          return_by: "2018-02-26",
          returned_on: "2018-07-30"
        },
        {
          id: 124,
          book_id: 62,
          patron_id: 53,
          loaned_on: "2018-05-22",
          return_by: "2018-12-05",
          returned_on: "2018-05-10"
        },
        {
          id: 125,
          book_id: 54,
          patron_id: 29,
          loaned_on: "2017-12-16",
          return_by: "2018-10-03",
          returned_on: "2018-04-16"
        },
        {
          id: 126,
          book_id: 40,
          patron_id: 16,
          loaned_on: "2018-07-31",
          return_by: "2018-06-03",
          returned_on: null
        },
        {
          id: 127,
          book_id: 1,
          patron_id: 65,
          loaned_on: "2016-03-14",
          return_by: "2018-02-03",
          returned_on: "2018-04-26"
        },
        {
          id: 128,
          book_id: 14,
          patron_id: 37,
          loaned_on: "2018-02-04",
          return_by: "2018-06-25",
          returned_on: null
        },
        {
          id: 129,
          book_id: 47,
          patron_id: 58,
          loaned_on: "2017-08-16",
          return_by: "2018-10-17",
          returned_on: "2018-10-24"
        },
        {
          id: 130,
          book_id: 8,
          patron_id: 69,
          loaned_on: "2016-10-08",
          return_by: "2018-07-25",
          returned_on: "2018-09-10"
        },
        {
          id: 131,
          book_id: 26,
          patron_id: 53,
          loaned_on: "2018-01-13",
          return_by: "2018-11-22",
          returned_on: "2018-01-17"
        },
        {
          id: 132,
          book_id: 26,
          patron_id: 5,
          loaned_on: "2017-10-18",
          return_by: "2018-12-04",
          returned_on: "2018-05-18"
        },
        {
          id: 133,
          book_id: 65,
          patron_id: 37,
          loaned_on: "2017-07-10",
          return_by: "2018-01-22",
          returned_on: "2018-12-29"
        },
        {
          id: 134,
          book_id: 64,
          patron_id: 78,
          loaned_on: "2017-03-29",
          return_by: "2018-06-23",
          returned_on: "2018-02-20"
        },
        {
          id: 135,
          book_id: 61,
          patron_id: 55,
          loaned_on: "2018-12-19",
          return_by: "2018-07-01",
          returned_on: null
        },
        {
          id: 136,
          book_id: 11,
          patron_id: 57,
          loaned_on: "2018-09-02",
          return_by: "2018-12-22",
          returned_on: "2018-01-31"
        },
        {
          id: 137,
          book_id: 51,
          patron_id: 57,
          loaned_on: "2018-09-21",
          return_by: "2018-01-31",
          returned_on: "2018-05-20"
        },
        {
          id: 138,
          book_id: 48,
          patron_id: 52,
          loaned_on: "2017-12-05",
          return_by: "2018-05-17",
          returned_on: "2018-09-16"
        },
        {
          id: 139,
          book_id: 18,
          patron_id: 4,
          loaned_on: "2017-06-09",
          return_by: "2018-05-06",
          returned_on: "2018-02-17"
        },
        {
          id: 140,
          book_id: 43,
          patron_id: 15,
          loaned_on: "2016-08-17",
          return_by: "2018-10-26",
          returned_on: "2018-03-28"
        },
        {
          id: 141,
          book_id: 31,
          patron_id: 66,
          loaned_on: "2018-08-05",
          return_by: "2018-09-07",
          returned_on: null
        },
        {
          id: 142,
          book_id: 53,
          patron_id: 52,
          loaned_on: "2017-01-15",
          return_by: "2018-09-23",
          returned_on: null
        },
        {
          id: 143,
          book_id: 40,
          patron_id: 31,
          loaned_on: "2018-09-28",
          return_by: "2018-05-29",
          returned_on: null
        },
        {
          id: 144,
          book_id: 66,
          patron_id: 76,
          loaned_on: "2017-10-24",
          return_by: "2018-06-14",
          returned_on: "2018-03-05"
        },
        {
          id: 145,
          book_id: 3,
          patron_id: 49,
          loaned_on: "2017-12-16",
          return_by: "2018-09-27",
          returned_on: "2018-03-02"
        },
        {
          id: 146,
          book_id: 13,
          patron_id: 54,
          loaned_on: "2016-09-25",
          return_by: "2018-02-22",
          returned_on: "2018-07-27"
        },
        {
          id: 147,
          book_id: 51,
          patron_id: 69,
          loaned_on: "2017-04-15",
          return_by: "2018-06-04",
          returned_on: "2018-01-20"
        },
        {
          id: 148,
          book_id: 50,
          patron_id: 61,
          loaned_on: "2018-06-18",
          return_by: "2018-12-03",
          returned_on: null
        },
        {
          id: 149,
          book_id: 51,
          patron_id: 37,
          loaned_on: "2017-12-14",
          return_by: "2018-01-17",
          returned_on: null
        },
        {
          id: 150,
          book_id: 32,
          patron_id: 78,
          loaned_on: "2018-06-18",
          return_by: "2018-10-28",
          returned_on: "2018-07-17"
        },
        {
          id: 151,
          book_id: 68,
          patron_id: 67,
          loaned_on: "2016-02-22",
          return_by: "2018-04-14",
          returned_on: null
        },
        {
          id: 152,
          book_id: 15,
          patron_id: 53,
          loaned_on: "2018-10-08",
          return_by: "2018-07-04",
          returned_on: "2018-04-20"
        },
        {
          id: 153,
          book_id: 27,
          patron_id: 55,
          loaned_on: "2018-01-07",
          return_by: "2018-11-01",
          returned_on: null
        },
        {
          id: 154,
          book_id: 59,
          patron_id: 1,
          loaned_on: "2018-11-01",
          return_by: "2018-12-07",
          returned_on: "2018-08-03"
        },
        {
          id: 155,
          book_id: 47,
          patron_id: 52,
          loaned_on: "2017-02-05",
          return_by: "2018-09-16",
          returned_on: null
        },
        {
          id: 156,
          book_id: 32,
          patron_id: 78,
          loaned_on: "2016-03-19",
          return_by: "2018-06-19",
          returned_on: "2018-04-16"
        },
        {
          id: 157,
          book_id: 65,
          patron_id: 3,
          loaned_on: "2018-10-26",
          return_by: "2018-07-17",
          returned_on: null
        },
        {
          id: 158,
          book_id: 7,
          patron_id: 60,
          loaned_on: "2016-09-24",
          return_by: "2018-05-02",
          returned_on: null
        },
        {
          id: 159,
          book_id: 32,
          patron_id: 24,
          loaned_on: "2018-08-11",
          return_by: "2018-10-22",
          returned_on: "2018-04-29"
        },
        {
          id: 160,
          book_id: 8,
          patron_id: 25,
          loaned_on: "2017-02-01",
          return_by: "2018-01-12",
          returned_on: "2018-12-22"
        },
        {
          id: 161,
          book_id: 38,
          patron_id: 43,
          loaned_on: "2017-05-05",
          return_by: "2018-02-15",
          returned_on: "2018-12-19"
        },
        {
          id: 162,
          book_id: 8,
          patron_id: 17,
          loaned_on: "2016-10-31",
          return_by: "2018-01-16",
          returned_on: null
        },
        {
          id: 163,
          book_id: 37,
          patron_id: 77,
          loaned_on: "2017-06-29",
          return_by: "2018-03-27",
          returned_on: null
        },
        {
          id: 164,
          book_id: 53,
          patron_id: 59,
          loaned_on: "2017-11-13",
          return_by: "2018-11-06",
          returned_on: null
        },
        {
          id: 165,
          book_id: 34,
          patron_id: 11,
          loaned_on: "2018-06-05",
          return_by: "2018-06-02",
          returned_on: "2018-11-11"
        },
        {
          id: 166,
          book_id: 32,
          patron_id: 76,
          loaned_on: "2018-06-27",
          return_by: "2018-04-18",
          returned_on: "2018-02-12"
        },
        {
          id: 167,
          book_id: 68,
          patron_id: 15,
          loaned_on: "2016-11-28",
          return_by: "2018-05-13",
          returned_on: "2018-09-08"
        },
        {
          id: 168,
          book_id: 62,
          patron_id: 49,
          loaned_on: "2018-02-08",
          return_by: "2018-09-01",
          returned_on: null
        },
        {
          id: 169,
          book_id: 50,
          patron_id: 28,
          loaned_on: "2017-08-12",
          return_by: "2018-03-11",
          returned_on: "2018-02-26"
        },
        {
          id: 170,
          book_id: 24,
          patron_id: 46,
          loaned_on: "2016-11-22",
          return_by: "2018-07-28",
          returned_on: "2018-01-30"
        },
        {
          id: 171,
          book_id: 48,
          patron_id: 42,
          loaned_on: "2016-11-10",
          return_by: "2018-03-25",
          returned_on: null
        },
        {
          id: 172,
          book_id: 19,
          patron_id: 30,
          loaned_on: "2018-04-17",
          return_by: "2018-06-06",
          returned_on: "2018-02-08"
        },
        {
          id: 173,
          book_id: 60,
          patron_id: 12,
          loaned_on: "2018-07-10",
          return_by: "2018-05-06",
          returned_on: "2018-04-28"
        },
        {
          id: 174,
          book_id: 1,
          patron_id: 14,
          loaned_on: "2018-10-26",
          return_by: "2018-10-15",
          returned_on: "2018-05-12"
        },
        {
          id: 175,
          book_id: 64,
          patron_id: 5,
          loaned_on: "2018-07-21",
          return_by: "2018-01-29",
          returned_on: "2018-12-26"
        },
        {
          id: 176,
          book_id: 37,
          patron_id: 3,
          loaned_on: "2017-09-21",
          return_by: "2018-11-30",
          returned_on: "2018-03-15"
        },
        {
          id: 177,
          book_id: 14,
          patron_id: 19,
          loaned_on: "2018-06-24",
          return_by: "2018-06-02",
          returned_on: "2018-08-31"
        },
        {
          id: 178,
          book_id: 47,
          patron_id: 76,
          loaned_on: "2017-01-07",
          return_by: "2018-06-05",
          returned_on: null
        },
        {
          id: 179,
          book_id: 42,
          patron_id: 10,
          loaned_on: "2017-09-09",
          return_by: "2018-08-11",
          returned_on: "2018-11-06"
        },
        {
          id: 180,
          book_id: 61,
          patron_id: 6,
          loaned_on: "2017-06-14",
          return_by: "2018-11-08",
          returned_on: "2018-06-15"
        },
        {
          id: 181,
          book_id: 24,
          patron_id: 30,
          loaned_on: "2017-06-05",
          return_by: "2018-12-08",
          returned_on: null
        },
        {
          id: 182,
          book_id: 46,
          patron_id: 75,
          loaned_on: "2017-09-27",
          return_by: "2018-01-13",
          returned_on: "2018-05-01"
        },
        {
          id: 183,
          book_id: 70,
          patron_id: 50,
          loaned_on: "2017-10-25",
          return_by: "2018-01-20",
          returned_on: null
        },
        {
          id: 184,
          book_id: 42,
          patron_id: 77,
          loaned_on: "2017-07-23",
          return_by: "2018-12-16",
          returned_on: "2018-11-29"
        },
        {
          id: 185,
          book_id: 12,
          patron_id: 16,
          loaned_on: "2017-07-21",
          return_by: "2018-07-18",
          returned_on: null
        },
        {
          id: 186,
          book_id: 28,
          patron_id: 69,
          loaned_on: "2018-07-29",
          return_by: "2018-07-06",
          returned_on: null
        },
        {
          id: 187,
          book_id: 36,
          patron_id: 40,
          loaned_on: "2018-11-28",
          return_by: "2018-10-02",
          returned_on: "2018-07-21"
        },
        {
          id: 188,
          book_id: 36,
          patron_id: 44,
          loaned_on: "2016-03-26",
          return_by: "2018-02-04",
          returned_on: "2018-10-25"
        },
        {
          id: 189,
          book_id: 20,
          patron_id: 45,
          loaned_on: "2016-10-18",
          return_by: "2018-05-23",
          returned_on: "2018-05-07"
        },
        {
          id: 190,
          book_id: 27,
          patron_id: 22,
          loaned_on: "2016-07-09",
          return_by: "2018-02-28",
          returned_on: "2018-09-26"
        },
        {
          id: 191,
          book_id: 31,
          patron_id: 44,
          loaned_on: "2017-07-06",
          return_by: "2018-10-19",
          returned_on: "2018-04-21"
        },
        {
          id: 192,
          book_id: 37,
          patron_id: 53,
          loaned_on: "2017-04-20",
          return_by: "2018-03-26",
          returned_on: "2018-08-21"
        },
        {
          id: 193,
          book_id: 6,
          patron_id: 41,
          loaned_on: "2018-02-28",
          return_by: "2018-07-18",
          returned_on: "2018-08-09"
        },
        {
          id: 194,
          book_id: 29,
          patron_id: 3,
          loaned_on: "2016-03-04",
          return_by: "2018-04-18",
          returned_on: null
        },
        {
          id: 195,
          book_id: 23,
          patron_id: 75,
          loaned_on: "2017-05-20",
          return_by: "2018-02-10",
          returned_on: "2018-02-22"
        },
        {
          id: 196,
          book_id: 63,
          patron_id: 11,
          loaned_on: "2018-11-23",
          return_by: "2018-02-05",
          returned_on: null
        },
        {
          id: 197,
          book_id: 48,
          patron_id: 71,
          loaned_on: "2016-08-04",
          return_by: "2018-11-29",
          returned_on: null
        },
        {
          id: 198,
          book_id: 2,
          patron_id: 41,
          loaned_on: "2016-03-09",
          return_by: "2018-07-25",
          returned_on: "2018-06-10"
        },
        {
          id: 199,
          book_id: 9,
          patron_id: 19,
          loaned_on: "2016-10-09",
          return_by: "2018-04-02",
          returned_on: null
        },
        {
          id: 200,
          book_id: 15,
          patron_id: 2,
          loaned_on: "2015-12-10",
          return_by: "2020-10-20",
          returned_on: null
        },
        {
          id: 201,
          book_id: 4,
          patron_id: 1,
          loaned_on: "2015-12-11",
          return_by: "2015-12-18",
          returned_on: null
        },
        {
          id: 202,
          book_id: 8,
          patron_id: 1,
          loaned_on: "2015-12-12",
          return_by: "2015-12-19",
          returned_on: null
        },
        {
          id: 203,
          book_id: 9,
          patron_id: 3,
          loaned_on: "2015-12-13",
          return_by: "2015-12-20",
          returned_on: null
        },
        {
          id: 204,
          book_id: 11,
          patron_id: 4,
          loaned_on: "2015-12-13",
          return_by: "2015-12-20",
          returned_on: "2015-12-17"
        }
      ],
      {}
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete("loans", null, {});
  }
};
