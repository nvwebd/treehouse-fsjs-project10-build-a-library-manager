"use strict";

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      "books",
      [
        {
          id: 1,
          title: "Twelve Tasks of Asterix, The",
          author: "Suki Simmens",
          genre: "Action",
          first_published: 1944
        },
        {
          id: 2,
          title: "You, Me and Dupree",
          author: "Danita Longstaff",
          genre: "Comedy",
          first_published: 1933
        },
        {
          id: 3,
          title: "Dream Machine",
          author: "Melesa Carlucci",
          genre: "Action",
          first_published: 1836
        },
        {
          id: 4,
          title: "Walk in the Sun, A",
          author: "Gustie Crystal",
          genre: "War",
          first_published: 1997
        },
        {
          id: 5,
          title: "Hen, his wife",
          author: "Peyton Bolletti",
          genre: "(no genres listed)",
          first_published: 2015
        },
        {
          id: 6,
          title: "Moon Is Blue, The",
          author: "Aretha Cotman",
          genre: "Comedy|Romance",
          first_published: 1832
        },
        {
          id: 7,
          title: "OSS 117 - Lost in Rio",
          author: "Delphine Petrik",
          genre: "Adventure",
          first_published: 1882
        },
        {
          id: 8,
          title: "Raanjhanaa",
          author: "Marni Domenicone",
          genre: "Drama",
          first_published: 1879
        },
        {
          id: 9,
          title: "Equinox",
          author: "Kimmi Stookes",
          genre: "Drama",
          first_published: 2014
        },
        {
          id: 10,
          title: "Thing: Terror Takes Shape, The",
          author: "Reginauld Tomczykiewicz",
          genre: "Documentary",
          first_published: 1963
        },
        {
          id: 11,
          title: "Ladybugs",
          author: "Chandler Demoge",
          genre: "Comedy",
          first_published: 1917
        },
        {
          id: 12,
          title: "Return of Swamp Thing, The",
          author: "Joya Sawbridge",
          genre: "Comedy",
          first_published: 1848
        },
        {
          id: 13,
          title: "Henry & June",
          author: "Rubie Lippini",
          genre: "Drama",
          first_published: 1806
        },
        {
          id: 14,
          title: "Gilded Lily, The",
          author: "Albert Kantor",
          genre: "Comedy",
          first_published: 1867
        },
        {
          id: 15,
          title: "Blue Caprice",
          author: "Cleon Longhi",
          genre: "Crime",
          first_published: 1959
        },
        {
          id: 16,
          title: "13Hrs",
          author: "Bianca Hodge",
          genre: "Adventure",
          first_published: 1878
        },
        {
          id: 17,
          title: "Withnail & I",
          author: "Leanora Kitchenside",
          genre: "Comedy",
          first_published: 1882
        },
        {
          id: 18,
          title: "Snow White",
          author: "Nina Inns",
          genre: "Fantasy",
          first_published: 2008
        },
        {
          id: 19,
          title: "Sucker, The (Corniaud, Le)",
          author: "Whitney MacMychem",
          genre: "Comedy",
          first_published: 1960
        },
        {
          id: 20,
          title: "Love and Basketball",
          author: "Arron McKeaveney",
          genre: "Drama",
          first_published: 1821
        },
        {
          id: 21,
          title: "Roula",
          author: "Trescha Klimus",
          genre: "Drama",
          first_published: 1974
        },
        {
          id: 22,
          title: "Man Called Gannon, A",
          author: "Fulton Bauser",
          genre: "Western",
          first_published: 1825
        },
        {
          id: 23,
          title: "Stretch",
          author: "Andris Angelo",
          genre: "Action",
          first_published: 2011
        },
        {
          id: 24,
          title: "South Park: Bigger, Longer and Uncut",
          author: "Chrotoem Papps",
          genre: "Animation",
          first_published: 1954
        },
        {
          id: 25,
          title: "That Kiljunen Family",
          author: "Johnna Stannett",
          genre: "Children",
          first_published: 1910
        },
        {
          id: 26,
          title:
            "Lovers of the Arctic Circle",
          author: "Retha Busk",
          genre: "Drama",
          first_published: 1802
        },
        {
          id: 27,
          title: "Road Kill",
          author: "Irwin Palatini",
          genre: "Horror",
          first_published: 1993
        },
        {
          id: 28,
          title: "Career",
          author: "Lorene Klauer",
          genre: "Drama",
          first_published: 1874
        },
        {
          id: 29,
          title: "Down Argentine Way",
          author: "Addie Lown",
          genre: "Comedy",
          first_published: 1916
        },
        {
          id: 30,
          title: "No",
          author: "Cher Broggio",
          genre: "Drama",
          first_published: 1811
        },
        {
          id: 31,
          title: "Lusty Men, The",
          author: "Floyd Handslip",
          genre: "Action",
          first_published: 1935
        },
        {
          id: 32,
          title: "Perfectly Normal",
          author: "Dotty Lindback",
          genre: "Comedy",
          first_published: 1839
        },
        {
          id: 33,
          title: "Izo",
          author: "Ardith Vahey",
          genre: "Action",
          first_published: 1829
        },
        {
          id: 34,
          title: "Unknown Soldier, The",
          author: "Adriana Vain",
          genre: "Documentary",
          first_published: 1878
        },
        {
          id: 35,
          title: "Cherry Blossoms",
          author: "Korrie Christou",
          genre: "Drama|Romance",
          first_published: 1881
        },
        {
          id: 36,
          title: "Scorpio Rising",
          author: "Hattie Bucher",
          genre: "(no genres listed)",
          first_published: 1999
        },
        {
          id: 37,
          title: "Papusza",
          author: "Farra Wreath",
          genre: "Drama",
          first_published: 2006
        },
        {
          id: 38,
          title: "Dinosaur Project, The",
          author: "Ingra Giblin",
          genre: "Adventure",
          first_published: 1948
        },
        {
          id: 39,
          title: "Silence, The",
          author: "Verina Mee",
          genre: "Drama",
          first_published: 1923
        },
        {
          id: 40,
          title: "Still Mine",
          author: "Matthus McGiff",
          genre: "Drama",
          first_published: 1914
        },
        {
          id: 41,
          title: "Emitai",
          author: "Adella Gobel",
          genre: "Drama",
          first_published: 1811
        },
        {
          id: 42,
          title: "Captain's Paradise, The",
          author: "Brok Stanfield",
          genre: "Comedy",
          first_published: 1936
        },
        {
          id: 43,
          title: "Southern Yankee, A",
          author: "Sadye Beldon",
          genre: "Comedy",
          first_published: 1907
        },
        {
          id: 44,
          title: "American Nightmare, The",
          author: "Brandi Phelips",
          genre: "Documentary",
          first_published: 1984
        },
        {
          id: 45,
          title: "Harvey Girls, The",
          author: "Vittoria Bulgen",
          genre: "Comedy",
          first_published: 1917
        },
        {
          id: 46,
          title: "Dog Day (Canicule)",
          author: "Meier Melson",
          genre: "Action",
          first_published: 1857
        },
        {
          id: 47,
          title: "Across the Sea of Time",
          author: "Phaidra Brennand",
          genre: "Documentary",
          first_published: 1840
        },
        {
          id: 48,
          title: "Dogfight",
          author: "Codee Roblin",
          genre: "Drama",
          first_published: 1871
        },
        {
          id: 49,
          title: "Nothing Like the Holidays",
          author: "Ilaire Krolle",
          genre: "Comedy",
          first_published: 1856
        },
        {
          id: 50,
          title: "Islander",
          author: "Colly Marshalleck",
          genre: "Drama",
          first_published: 1882
        },
        {
          id: 51,
          title: "Black Scorpion, The",
          author: "Lauryn Edge",
          genre: "Sci-Fi",
          first_published: 1828
        },
        {
          id: 52,
          title: "Magic Sword, The",
          author: "Sibella Juppe",
          genre: "Drama",
          first_published: 1946
        },
        {
          id: 53,
          title: "Creature",
          author: "Merrily Hedden",
          genre: "Horror",
          first_published: 1817
        },
        {
          id: 54,
          title: "Chemical Brothers: Don't Think, The",
          author: "Cthrine Luciano",
          genre: "Musical",
          first_published: 1998
        },
        {
          id: 55,
          title: "Rumor Has It...",
          author: "Nessie MacCarrane",
          genre: "Comedy",
          first_published: 1934
        },
        {
          id: 56,
          title: "Madison",
          author: "Agustin Lyne",
          genre: "Drama",
          first_published: 1890
        },
        {
          id: 57,
          title: "One Million B.C.",
          author: "Issi Cater",
          genre: "Adventure",
          first_published: 1935
        },
        {
          id: 58,
          title: "Dirt",
          author: "Beatrix Tyght",
          genre: "Comedy",
          first_published: 1868
        },
        {
          id: 59,
          title: "It! The Terror from Beyond Space",
          author: "Trudy Benedidick",
          genre: "Horror",
          first_published: 1959
        },
        {
          id: 60,
          title: "Monster Walks, The",
          author: "Marty Trodden",
          genre: "Horror",
          first_published: 1928
        },
        {
          id: 61,
          title: "Teacher's Pet",
          author: "Trina Janoschek",
          genre: "Comedy",
          first_published: 1802
        },
        {
          id: 62,
          title: "Dancing Hawk, The",
          author: "Roseann Clemmitt",
          genre: "(no genres listed)",
          first_published: 1958
        },
        {
          id: 63,
          title: "Palo Alto",
          author: "Keenan Renol",
          genre: "Drama",
          first_published: 1928
        },
        {
          id: 64,
          title: "All Over Me",
          author: "Bobbye Trippitt",
          genre: "Drama",
          first_published: 1936
        },
        {
          id: 65,
          title: "Kippur",
          author: "Kass Burrow",
          genre: "Drama",
          first_published: 1975
        },
        {
          id: 66,
          title: "Return of the Living Dead",
          author: "Hinda Worsell",
          genre: "Comedy",
          first_published: 1804
        },
        {
          id: 67,
          title: "Monster Club, The",
          author: "Taddeo Mungin",
          genre: "Comedy",
          first_published: 1959
        },
        {
          id: 68,
          title: "Stranger, The",
          author: "Kerry Rastrick",
          genre: "Drama",
          first_published: 2005
        },
        {
          id: 69,
          title: "Ice Age Columbus",
          author: "Linzy MacFaell",
          genre: "Documentary",
          first_published: 1823
        },
        {
          id: 70,
          title: "Late Night Shopping",
          author: "Allan Harry",
          genre: "Comedy",
          first_published: 1971
        },
        {
          id: 71,
          title: "Outrageous Class",
          author: "Emmaline Gillfillan",
          genre: "Comedy",
          first_published: 1808
        },
        {
          id: 72,
          title: "Amen.",
          author: "Jami Gascoyne",
          genre: "Drama",
          first_published: 1932
        },
        {
          id: 73,
          title: "Return of the Living Dead 3",
          author: "Esme Crosswaite",
          genre: "Horror",
          first_published: 1885
        },
        {
          id: 74,
          title: "American Ninja 2: The Confrontation",
          author: "Elena Harker",
          genre: "Action",
          first_published: 1863
        },
        {
          id: 75,
          title: "Christmas Story",
          author: "Enos Baily",
          genre: "Children",
          first_published: 1911
        },
        {
          id: 76,
          title: "Pancho, the Millionaire Dog",
          author: "Edythe Kasper",
          genre: "Children",
          first_published: 1805
        },
        {
          id: 77,
          title: "Violent Years, The",
          author: "Belita Spawton",
          genre: "Drama",
          first_published: 1973
        },
        {
          id: 78,
          title: "Niagara, Niagara",
          author: "Pebrook Carvilla",
          genre: "Drama",
          first_published: 1845
        },
        {
          id: 79,
          title: "Melinda and Melinda",
          author: "Hyacinthie Guido",
          genre: "Comedy",
          first_published: 1828
        },
        {
          id: 80,
          title: "Babylon 5",
          author: "Vonny Doddemeede",
          genre: "Sci-Fi",
          first_published: 1808
        },
        {
          id: 81,
          title: "Journey of Hope",
          author: "Giacobo Haacker",
          genre: "Drama",
          first_published: 1892
        },
        {
          id: 82,
          title: "Enter the Ninja",
          author: "Dickie Pawelski",
          genre: "Action",
          first_published: 1869
        },
        {
          id: 83,
          title: "Ben X",
          author: "Kirsten Picard",
          genre: "Drama",
          first_published: 1980
        },
        {
          id: 84,
          title: "King Kong Lives",
          author: "Sosanna Dyka",
          genre: "Adventure",
          first_published: 1943
        },
        {
          id: 85,
          title: "His Brother",
          author: "Laird Worssam",
          genre: "Drama",
          first_published: 1938
        },
        {
          id: 86,
          title: "Scaramouche",
          author: "Thatcher Dansey",
          genre: "Adventure",
          first_published: 1929
        },
        {
          id: 87,
          title: "Roads to Koktebel",
          author: "Marshall Liddard",
          genre: "Drama",
          first_published: 1957
        },
        {
          id: 88,
          title: "Purgatory",
          author: "Florrie Eadington",
          genre: "Fantasy",
          first_published: 1848
        },
        {
          id: 89,
          title: "It Happened One Night",
          author: "Oswell MacDuffie",
          genre: "Comedy",
          first_published: 1815
        },
        {
          id: 90,
          title: "Armstrong Lie, The",
          author: "Glenden Welbourn",
          genre: "Documentary",
          first_published: 2015
        },
        {
          id: 91,
          title:
            "This Night",
          author: "Jill Wrist",
          genre: "Horror",
          first_published: 1987
        },
        {
          id: 92,
          title: "Congo",
          author: "Lief Copin",
          genre: "Action",
          first_published: 1988
        },
        {
          id: 93,
          title: "The Cave of the Golden Rose",
          author: "Brier Poacher",
          genre: "Adventure",
          first_published: 1969
        },
        {
          id: 94,
          title: "Pete Kelly's Blues",
          author: "Ethan Perris",
          genre: "Crime",
          first_published: 1806
        },
        {
          id: 95,
          title: "Pilgrimage",
          author: "Antonella Vizor",
          genre: "Drama",
          first_published: 2017
        },
        {
          id: 96,
          title: "Legally Blondes",
          author: "Harold Cogdon",
          genre: "Children",
          first_published: 1910
        },
        {
          id: 97,
          title: "Parenthood",
          author: "Ker Theurer",
          genre: "Comedy",
          first_published: 2011
        },
        {
          id: 98,
          title: "Tales of Terror",
          author: "Isidoro Bagwell",
          genre: "Horror",
          first_published: 1977
        },
        {
          id: 99,
          title: "Katyn",
          author: "Broddie Juris",
          genre: "Drama",
          first_published: 1835
        },
        {
          id: 100,
          title: "Black Moon",
          author: "Harley Wyard",
          genre: "Fantasy",
          first_published: 1865
        },
        {
          id: 101,
          title: "Innocent, The",
          author: "Orlando Eliyahu",
          genre: "Drama",
          first_published: 1854
        },
        {
          id: 102,
          title: "Guys, The",
          author: "Garrot Royall",
          genre: "Drama",
          first_published: 1884
        },
        {
          id: 103,
          title: "My Favorite Blonde",
          author: "Robb Grono",
          genre: "Comedy",
          first_published: 1911
        },
        {
          id: 104,
          title: "Reform School Girls",
          author: "Nettle Varley",
          genre: "Action",
          first_published: 1803
        },
        {
          id: 105,
          title: "Thunder Rock",
          author: "Alli Brunt",
          genre: "Drama",
          first_published: 1949
        },
        {
          id: 106,
          title: "Last Seduction II, The",
          author: "Dane Machel",
          genre: "Crime",
          first_published: 1932
        },
        {
          id: 107,
          title: "Storm Rider",
          author: "Brittne Keeney",
          genre: "Drama",
          first_published: 1917
        },
        {
          id: 108,
          title: "Prodigal, The",
          author: "Hayley Jerosch",
          genre: "Drama",
          first_published: 1857
        },
        {
          id: 109,
          title: "Alone in the Dark",
          author: "Adrian Rhubottom",
          genre: "Horror",
          first_published: 1827
        },
        {
          id: 110,
          title: "Nas: Time Is Illmatic",
          author: "Chad Woltman",
          genre: "Documentary",
          first_published: 2017
        },
        {
          id: 111,
          title: "Spirit, The",
          author: "Stephan MacWilliam",
          genre: "Action",
          first_published: 2003
        },
        {
          id: 112,
          title: "What Price Glory",
          author: "Celia De Ruel",
          genre: "Comedy",
          first_published: 2011
        },
        {
          id: 113,
          title: "Convent, The (O Convento)",
          author: "Lurlene Brearton",
          genre: "Drama",
          first_published: 1824
        },
        {
          id: 114,
          title: "Designated Mourner, The",
          author: "Moina Westall",
          genre: "Drama",
          first_published: 1806
        }
      ],
      {}
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete("books", null, {});
  }
};
