 const data =  [
      { 
          "id": 1,
          "name": "Jimi Hendrix",
          "cover":"jimi_hendrix",
          "bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          "albums": [
              {"albumId":"a1","title":"Electric Ladyland","year":1968,"cover":"electric-ladyland","price":20},
              {"albumId":"a2","title":"Experience","year":1971,"cover":"experienced","price":25},
              {"albumId":"a3","title":"Isle of Wright","year":1971,"cover":"isle_of_wright","price":15},
              {"albumId":"a4","title":"Band of Gypsys","year":1970,"cover":"band_of_gypsys","price":10}
          ],
          "genre":"rock, blues"
      },
      { 
          "id": 2,
          "name": "Madonna",
          "cover":"madonna", 
          "bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          "albums": [
              {"albumId":"b1","title":"Like a Virgin","year":1984,"cover":"like_a_virgin","price":20},
              {"albumId":"b2","title":"True Blue","year":1986,"cover":"true_blue","price":25},
              {"albumId":"b3","title":"Erotica","year":1994,"cover":"erotica","price":15},
              {"albumId":"b4","title":"Ray of Light","year":1998,"cover":"ray_of_light","price":10}
          ],
          "genre":"pop"
      },
      { 
          "id": 3,
          "name": "Johnny Cash", 
          "cover":"johnny_cash",
          "bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", 
          "albums": [
              {"albumId":"c1","title":"Ain't No Grave","year":2010,"cover":"no_grave","price":20},
              {"albumId":"c2","title":"Out Among the Stars","year":2014,"cover":"among_stars","price":25},
              {"albumId":"c3","title":"Solitary Man","year":2000,"cover":"solitary_man","price":15},
              {"albumId":"c4","title":"The Man Comes Around","year":2002,"cover":"man_comes_around","price":10}
          ],
          "genre":"pop"
      },
      { 
          "id": 4,
          "name": "Pink Floyd", 
          "cover":"pink_floyd", 
          "bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          "albums": [
              {"albumId":"d1","title":"The Wall","year":1979,"cover":"the_wall","price":20},
              {"albumId":"d2","title":"The Dark Side of the Moon","year":1973,"cover":"dark_side","price":25},
              {"albumId":"d3","title":"Animals","year":1977,"cover":"animals","price":15}
          ],
          "genre":"Rock"
      },
      { 
          "id": 5,
          "name": "Kirk_fletcher", 
          "cover":"kirk-fletcher", 
          "bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          "albums": [
              {"albumId":"d1","title":"The Wall","year":1979,"cover":"the_wall","price":20},
              {"albumId":"d2","title":"The Dark Side of the Moon","year":1973,"cover":"dark_side","price":25},
              {"albumId":"d3","title":"Animals","year":1977,"cover":"animals","price":15}
          ],
          "genre":"Rock"
      },
      { 
          "id": 6,
          "name": "Nirvana", 
          "cover":"nirvana", 
          "bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          "albums": [
              {"albumId":"d1","title":"The Wall","year":1979,"cover":"the_wall","price":20},
              {"albumId":"d2","title":"The Dark Side of the Moon","year":1973,"cover":"dark_side","price":25},
              {"albumId":"d3","title":"Animals","year":1977,"cover":"animals","price":15}
          ],
          "genre":"Rock"
      },
      { 
          "id": 7,
          "name": "Red hot", 
          "cover":"red_hot", 
          "bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          "albums": [
              {"albumId":"d1","title":"The Wall","year":1979,"cover":"the_wall","price":20},
              {"albumId":"d2","title":"The Dark Side of the Moon","year":1973,"cover":"dark_side","price":25},
              {"albumId":"d3","title":"Animals","year":1977,"cover":"animals","price":15}
          ],
          "genre":"Rock"
      },
      { 
          "id": 8,
          "name": "Gorillaz", 
          "cover":"gorilaz", 
          "bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          "albums": [
              {"albumId":"d1","title":"The Wall","year":1979,"cover":"the_wall","price":20},
              {"albumId":"d2","title":"The Dark Side of the Moon","year":1973,"cover":"dark_side","price":25},
              {"albumId":"d3","title":"Animals","year":1977,"cover":"animals","price":15}
          ],
          "genre":"Rock"
      }
    ]
  





  







  export default data;