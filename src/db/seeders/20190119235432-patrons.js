"use strict";

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      "patrons",
      [
        {
          id: 1,
          first_name: "Corry",
          last_name: "Kirkness",
          address: "74 Mandrake Point",
          email: "ckirkness0@wired.com",
          library_id: "MCL9294",
          zip_code: 85421
        },
        {
          id: 2,
          first_name: "Audie",
          last_name: "Aronoff",
          address: "86 Summerview Street",
          email: "aaronoff1@usda.gov",
          library_id: "MCL7131",
          zip_code: 34002
        },
        {
          id: 3,
          first_name: "Rona",
          last_name: "Neeves",
          address: "83 Pennsylvania Street",
          email: "rneeves2@deliciousdays.com",
          library_id: "MCL4602",
          zip_code: 16595
        },
        {
          id: 4,
          first_name: "Aindrea",
          last_name: "Gergolet",
          address: "8 Dayton Court",
          email: "agergolet3@ask.com",
          library_id: "MCL5484",
          zip_code: 67656
        },
        {
          id: 5,
          first_name: "Bobina",
          last_name: "Spacey",
          address: "65 Clarendon Park",
          email: "bspacey4@unc.edu",
          library_id: "MCL3296",
          zip_code: 21356
        },
        {
          id: 6,
          first_name: "Cy",
          last_name: "Flicker",
          address: "3782 6th Center",
          email: "cflicker5@miibeian.gov.cn",
          library_id: "MCL7016",
          zip_code: 61127
        },
        {
          id: 7,
          first_name: "Saba",
          last_name: "Laughnan",
          address: "68 Hansons Way",
          email: "slaughnan6@pagesperso-orange.fr",
          library_id: "MCL0600",
          zip_code: 95130
        },
        {
          id: 8,
          first_name: "Jackie",
          last_name: "Martt",
          address: "54051 Independence Road",
          email: "jmartt7@epa.gov",
          library_id: "MCL5729",
          zip_code: 98523
        },
        {
          id: 9,
          first_name: "Victor",
          last_name: "Drennan",
          address: "38697 Golf Plaza",
          email: "vdrennan8@fema.gov",
          library_id: "MCL1371",
          zip_code: 20003
        },
        {
          id: 10,
          first_name: "Anne",
          last_name: "Jodkowski",
          address: "78243 Buell Plaza",
          email: "ajodkowski9@google.it",
          library_id: "MCL6796",
          zip_code: 12397
        },
        {
          id: 11,
          first_name: "Miguel",
          last_name: "Jentin",
          address: "3 Erie Street",
          email: "mjentina@hao123.com",
          library_id: "MCL1105",
          zip_code: 13501
        },
        {
          id: 12,
          first_name: "Damian",
          last_name: "Adcocks",
          address: "70 International Park",
          email: "dadcocksb@unesco.org",
          library_id: "MCL6786",
          zip_code: 90959
        },
        {
          id: 13,
          first_name: "Micheal",
          last_name: "Pietroni",
          address: "311 Everett Street",
          email: "mpietronic@ox.ac.uk",
          library_id: "MCL9232",
          zip_code: 98269
        },
        {
          id: 14,
          first_name: "Kerstin",
          last_name: "McMichael",
          address: "98464 Autumn Leaf Junction",
          email: "kmcmichaeld@t.co",
          library_id: "MCL6323",
          zip_code: 59746
        },
        {
          id: 15,
          first_name: "Claudell",
          last_name: "Heistermann",
          address: "5 Saint Paul Avenue",
          email: "cheistermanne@apple.com",
          library_id: "MCL3534",
          zip_code: 76244
        },
        {
          id: 16,
          first_name: "Giustina",
          last_name: "Mainland",
          address: "09 Spenser Hill",
          email: "gmainlandf@pinterest.com",
          library_id: "MCL0974",
          zip_code: 19969
        },
        {
          id: 17,
          first_name: "Fax",
          last_name: "Ovendon",
          address: "3297 Brown Parkway",
          email: "fovendong@shutterfly.com",
          library_id: "MCL3036",
          zip_code: 49904
        },
        {
          id: 18,
          first_name: "Rabbi",
          last_name: "Worgen",
          address: "8665 Lighthouse Bay Hill",
          email: "rworgenh@alexa.com",
          library_id: "MCL2039",
          zip_code: 48387
        },
        {
          id: 19,
          first_name: "Arlyn",
          last_name: "Lehrahan",
          address: "9 Maple Wood Alley",
          email: "alehrahani@redcross.org",
          library_id: "MCL1733",
          zip_code: 28402
        },
        {
          id: 20,
          first_name: "Brannon",
          last_name: "Verdey",
          address: "005 Transport Center",
          email: "bverdeyj@unesco.org",
          library_id: "MCL3182",
          zip_code: 97436
        },
        {
          id: 21,
          first_name: "Ervin",
          last_name: "Chadney",
          address: "9541 Everett Junction",
          email: "echadneyk@deliciousdays.com",
          library_id: "MCL5682",
          zip_code: 17591
        },
        {
          id: 22,
          first_name: "Bernie",
          last_name: "Chanders",
          address: "9846 Gulseth Drive",
          email: "bchandersl@squarespace.com",
          library_id: "MCL5282",
          zip_code: 33018
        },
        {
          id: 23,
          first_name: "Codi",
          last_name: "Pratley",
          address: "891 Pawling Junction",
          email: "cpratleym@blogspot.com",
          library_id: "MCL0879",
          zip_code: 95517
        },
        {
          id: 24,
          first_name: "Rainer",
          last_name: "Fairholm",
          address: "5 Old Gate Junction",
          email: "rfairholmn@homestead.com",
          library_id: "MCL1375",
          zip_code: 15680
        },
        {
          id: 25,
          first_name: "Arvie",
          last_name: "Fansy",
          address: "97 Sachs Lane",
          email: "afansyo@narod.ru",
          library_id: "MCL1273",
          zip_code: 78187
        },
        {
          id: 26,
          first_name: "Avril",
          last_name: "Rubke",
          address: "2950 Oxford Circle",
          email: "arubkep@networkadvertising.org",
          library_id: "MCL5466",
          zip_code: 46003
        },
        {
          id: 27,
          first_name: "Lindsay",
          last_name: "Blodgetts",
          address: "5779 Monica Road",
          email: "lblodgettsq@ocn.ne.jp",
          library_id: "MCL5449",
          zip_code: 85320
        },
        {
          id: 28,
          first_name: "Cassandry",
          last_name: "Galletly",
          address: "0937 Ramsey Way",
          email: "cgalletlyr@histats.com",
          library_id: "MCL0273",
          zip_code: 66818
        },
        {
          id: 29,
          first_name: "Garrard",
          last_name: "Genner",
          address: "7 Garrison Place",
          email: "ggenners@geocities.jp",
          library_id: "MCL3699",
          zip_code: 52855
        },
        {
          id: 30,
          first_name: "Chas",
          last_name: "Starkings",
          address: "8629 Burning Wood Terrace",
          email: "cstarkingst@miibeian.gov.cn",
          library_id: "MCL8909",
          zip_code: 39139
        },
        {
          id: 31,
          first_name: "Kerwinn",
          last_name: "Gianelli",
          address: "49 Birchwood Park",
          email: "kgianelliu@nymag.com",
          library_id: "MCL1518",
          zip_code: 70966
        },
        {
          id: 32,
          first_name: "Sharia",
          last_name: "Cummins",
          address: "50133 Hanover Lane",
          email: "scumminsv@about.com",
          library_id: "MCL3068",
          zip_code: 77508
        },
        {
          id: 33,
          first_name: "Nannie",
          last_name: "de Quesne",
          address: "33170 Steensland Place",
          email: "ndequesnew@fema.gov",
          library_id: "MCL0234",
          zip_code: 49687
        },
        {
          id: 34,
          first_name: "Ruthi",
          last_name: "Burhouse",
          address: "21216 Harbort Terrace",
          email: "rburhousex@seattletimes.com",
          library_id: "MCL0142",
          zip_code: 32496
        },
        {
          id: 35,
          first_name: "Leland",
          last_name: "Hause",
          address: "986 International Avenue",
          email: "lhausey@myspace.com",
          library_id: "MCL0140",
          zip_code: 72394
        },
        {
          id: 36,
          first_name: "Marta",
          last_name: "Lardnar",
          address: "3686 Sachtjen Avenue",
          email: "mlardnarz@free.fr",
          library_id: "MCL9813",
          zip_code: 71867
        },
        {
          id: 37,
          first_name: "Alexander",
          last_name: "Pflieger",
          address: "8798 Darwin Street",
          email: "apflieger10@senate.gov",
          library_id: "MCL0185",
          zip_code: 39109
        },
        {
          id: 38,
          first_name: "Deloris",
          last_name: "Hutcheon",
          address: "7 Blue Bill Park Plaza",
          email: "dhutcheon11@desdev.cn",
          library_id: "MCL1685",
          zip_code: 53998
        },
        {
          id: 39,
          first_name: "Sal",
          last_name: "Ferroli",
          address: "24 Bartillon Avenue",
          email: "sferroli12@icq.com",
          library_id: "MCL4694",
          zip_code: 81873
        },
        {
          id: 40,
          first_name: "Reginald",
          last_name: "Autrie",
          address: "725 Roxbury Road",
          email: "rautrie13@xinhuanet.com",
          library_id: "MCL4182",
          zip_code: 79463
        },
        {
          id: 41,
          first_name: "Nikolai",
          last_name: "Klas",
          address: "43502 Russell Point",
          email: "nklas14@macromedia.com",
          library_id: "MCL4202",
          zip_code: 10557
        },
        {
          id: 42,
          first_name: "Karalee",
          last_name: "Christal",
          address: "36564 Quincy Hill",
          email: "kchristal15@wix.com",
          library_id: "MCL1946",
          zip_code: 30851
        },
        {
          id: 43,
          first_name: "Henderson",
          last_name: "Cawcutt",
          address: "90151 Loftsgordon Way",
          email: "hcawcutt16@g.co",
          library_id: "MCL7907",
          zip_code: 28598
        },
        {
          id: 44,
          first_name: "Johna",
          last_name: "Gianiello",
          address: "18724 Farragut Lane",
          email: "jgianiello17@trellian.com",
          library_id: "MCL6389",
          zip_code: 29275
        },
        {
          id: 45,
          first_name: "Desiree",
          last_name: "Hurch",
          address: "48 Anniversary Road",
          email: "dhurch18@comsenz.com",
          library_id: "MCL1412",
          zip_code: 60562
        },
        {
          id: 46,
          first_name: "Petrina",
          last_name: "Thewlis",
          address: "96 Daystar Parkway",
          email: "pthewlis19@digg.com",
          library_id: "MCL5865",
          zip_code: 88057
        },
        {
          id: 47,
          first_name: "Abby",
          last_name: "Strelitzer",
          address: "3 Hanover Pass",
          email: "astrelitzer1a@army.mil",
          library_id: "MCL6940",
          zip_code: 90278
        },
        {
          id: 48,
          first_name: "Grove",
          last_name: "Tirrey",
          address: "54523 Marquette Street",
          email: "gtirrey1b@japanpost.jp",
          library_id: "MCL3146",
          zip_code: 92164
        },
        {
          id: 49,
          first_name: "Kitty",
          last_name: "Dimmack",
          address: "492 Muir Alley",
          email: "kdimmack1c@yolasite.com",
          library_id: "MCL2810",
          zip_code: 45813
        },
        {
          id: 50,
          first_name: "Chrissie",
          last_name: "Proppers",
          address: "35019 Milwaukee Avenue",
          email: "cproppers1d@stumbleupon.com",
          library_id: "MCL7237",
          zip_code: 55341
        },
        {
          id: 51,
          first_name: "Ferdinanda",
          last_name: "Clitheroe",
          address: "6227 Mariners Cove Junction",
          email: "fclitheroe1e@hubpages.com",
          library_id: "MCL9876",
          zip_code: 48915
        },
        {
          id: 52,
          first_name: "Gawain",
          last_name: "Druitt",
          address: "146 Lillian Terrace",
          email: "gdruitt1f@bloglines.com",
          library_id: "MCL3713",
          zip_code: 28488
        },
        {
          id: 53,
          first_name: "Michaela",
          last_name: "Filipczak",
          address: "8 Erie Circle",
          email: "mfilipczak1g@dailymail.co.uk",
          library_id: "MCL4607",
          zip_code: 86862
        },
        {
          id: 54,
          first_name: "Charline",
          last_name: "Torbeck",
          address: "73445 Maple Wood Terrace",
          email: "ctorbeck1h@typepad.com",
          library_id: "MCL9866",
          zip_code: 17841
        },
        {
          id: 55,
          first_name: "Skipp",
          last_name: "Guidetti",
          address: "3 Lukken Point",
          email: "sguidetti1i@merriam-webster.com",
          library_id: "MCL2054",
          zip_code: 81758
        },
        {
          id: 56,
          first_name: "Rosie",
          last_name: "Lammenga",
          address: "26 East Drive",
          email: "rlammenga1j@shareasale.com",
          library_id: "MCL4841",
          zip_code: 66061
        },
        {
          id: 57,
          first_name: "Philippa",
          last_name: "Hilldrop",
          address: "7 Golf Course Parkway",
          email: "philldrop1k@washingtonpost.com",
          library_id: "MCL0347",
          zip_code: 15248
        },
        {
          id: 58,
          first_name: "Carmine",
          last_name: "Lassetter",
          address: "42119 Coleman Parkway",
          email: "classetter1l@virginia.edu",
          library_id: "MCL4857",
          zip_code: 77703
        },
        {
          id: 59,
          first_name: "Pebrook",
          last_name: "Sundin",
          address: "1466 Fallview Center",
          email: "psundin1m@example.com",
          library_id: "MCL5355",
          zip_code: 30077
        },
        {
          id: 60,
          first_name: "Decca",
          last_name: "Pley",
          address: "4 Memorial Crossing",
          email: "dpley1n@berkeley.edu",
          library_id: "MCL4948",
          zip_code: 94460
        },
        {
          id: 61,
          first_name: "Clayson",
          last_name: "Sliney",
          address: "38 Pine View Hill",
          email: "csliney1o@a8.net",
          library_id: "MCL9405",
          zip_code: 55949
        },
        {
          id: 62,
          first_name: "Park",
          last_name: "Girardey",
          address: "5 Fordem Place",
          email: "pgirardey1p@msn.com",
          library_id: "MCL5669",
          zip_code: 32065
        },
        {
          id: 63,
          first_name: "Oralla",
          last_name: "Calvie",
          address: "516 Fallview Avenue",
          email: "ocalvie1q@mozilla.com",
          library_id: "MCL0275",
          zip_code: 33807
        },
        {
          id: 64,
          first_name: "Jaine",
          last_name: "Piele",
          address: "26646 Meadow Valley Parkway",
          email: "jpiele1r@cmu.edu",
          library_id: "MCL4340",
          zip_code: 55714
        },
        {
          id: 65,
          first_name: "Daniele",
          last_name: "Leebetter",
          address: "8105 Eastlawn Point",
          email: "dleebetter1s@deviantart.com",
          library_id: "MCL4245",
          zip_code: 50870
        },
        {
          id: 66,
          first_name: "Rowena",
          last_name: "Filipic",
          address: "00 Chive Crossing",
          email: "rfilipic1t@cnn.com",
          library_id: "MCL7423",
          zip_code: 67004
        },
        {
          id: 67,
          first_name: "Loren",
          last_name: "McGee",
          address: "9 Becker Pass",
          email: "lmcgee1u@skyrock.com",
          library_id: "MCL3564",
          zip_code: 75120
        },
        {
          id: 68,
          first_name: "Carney",
          last_name: "Tanguy",
          address: "4170 Arkansas Crossing",
          email: "ctanguy1v@macromedia.com",
          library_id: "MCL6655",
          zip_code: 58754
        },
        {
          id: 69,
          first_name: "Eugene",
          last_name: "Kittiman",
          address: "4 Pennsylvania Street",
          email: "ekittiman1w@mlb.com",
          library_id: "MCL5056",
          zip_code: 90127
        },
        {
          id: 70,
          first_name: "Colleen",
          last_name: "McCullock",
          address: "14765 Gerald Way",
          email: "cmccullock1x@example.com",
          library_id: "MCL6929",
          zip_code: 83235
        },
        {
          id: 71,
          first_name: "Jacquie",
          last_name: "Aicheson",
          address: "045 Saint Paul Circle",
          email: "jaicheson1y@sohu.com",
          library_id: "MCL3990",
          zip_code: 25461
        },
        {
          id: 72,
          first_name: "Carlen",
          last_name: "Robelet",
          address: "60 Garrison Pass",
          email: "crobelet1z@china.com.cn",
          library_id: "MCL2041",
          zip_code: 63926
        },
        {
          id: 73,
          first_name: "Boony",
          last_name: "Heard",
          address: "80321 Lillian Drive",
          email: "bheard20@tumblr.com",
          library_id: "MCL5772",
          zip_code: 84287
        },
        {
          id: 74,
          first_name: "Tony",
          last_name: "Januszewicz",
          address: "64 Laurel Hill",
          email: "tjanuszewicz21@networksolutions.com",
          library_id: "MCL3719",
          zip_code: 22253
        },
        {
          id: 75,
          first_name: "Viva",
          last_name: "Glasspoole",
          address: "0169 Victoria Point",
          email: "vglasspoole22@etsy.com",
          library_id: "MCL9488",
          zip_code: 36769
        },
        {
          id: 76,
          first_name: "Barth",
          last_name: "McCosker",
          address: "2652 Melody Drive",
          email: "bmccosker23@geocities.com",
          library_id: "MCL1118",
          zip_code: 39731
        },
        {
          id: 77,
          first_name: "Berget",
          last_name: "Monck",
          address: "6 Cherokee Alley",
          email: "bmonck24@ocn.ne.jp",
          library_id: "MCL7178",
          zip_code: 35126
        },
        {
          id: 78,
          first_name: "Bessie",
          last_name: "Spaule",
          address: "0080 Dunning Way",
          email: "bspaule25@squarespace.com",
          library_id: "MCL3942",
          zip_code: 91175
        }
      ],
      {}
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete("patrons", null, {});
  }
};
