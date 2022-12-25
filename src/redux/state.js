const state = {
   loggedIn: false, 
   users: [
    { 
      "id": 1,
      "name": "Jerry12", 
      "password": "Seinfeld"
    }
   ], 
   business: [
      {
        "id": 1, 
        "name": "Pizza Hut",
        "address": "1700 MO-84, Hayti, MO 63851", 
        "hours": "8AM to 10PM",
        "description": "Best Pizza Place in Town"
      },
      {
        "id": 2, 
        "name": "Dominoes",
        "address": "2520 Bardstown Rd Ste 208, Louisville, KY 40205", 
        "hours": "7AM to 9PM",
        "description": "We sell pizza, I guess"
      }
   ]
}

export default state