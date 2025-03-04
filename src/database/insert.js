import { db } from "./firebase"
import { collection, addDoc } from "firebase/firestore"
import { searchStats, getStatsCount } from "./fetch"

// const insertAnalytics = () => {



// }
// const jsonData = {
//     "topped": [
//       { "ing": "Monkey Brains", "attr": "Curdled" },
//       { "ing": "Narwhal Bacon", "attr": "Blubbery" },
//       { "ing": "90's Neon Condiments", "attr": "Unctuous" },
//       { "ing": "Grill Scrapings", "attr": "Coagulated" },
//       { "ing": "Claw Meat", "attr": "Spongey" },
//       { "ing": "Unpasteurized Milk", "attr": "Lumpy" },
//       { "ing": "Yellow Snow", "attr": "Acidic" },
//       { "ing": "Wasabi", "attr": "With 2.3 Million Scoville Units" },
//       { "ing": "Salt & Pepper", "attr": "Served by Salt N' Peppa™" },
//       { "ing": "Cheez-Its™", "attr": "Addictive" }
//     ],
//     "stuffed": [
//       { "ing": "School Lunch Mystery Meat", "attr": "Slithering" },
//       { "ing": "Pre-Cooked Dino Nuggets", "attr": "Nutritionally Fortified" },
//       { "ing": "Foreskins", "attr": "Stretchy" },
//       { "ing": "Bangers", "attr": "Hissing" },
//       { "ing": "Rocky Mountain Oysters", "attr": "Bumpy" },
//       { "ing": "Turkey Neck", "attr": "Dancing" },
//       { "ing": "Chicken Feet", "attr": "Pitter-Pattering" },
//       { "ing": "Elk Penis", "attr": "Veiny" },
//       { "ing": "Placenta", "attr": "Gurgling" },
//       { "ing": "Human Flesh", "attr": "Seared" }
//     ],
//     "sides": [
//       { "ing": "A Handful of Silver Dragees", "attr": "Mechanical" },
//       { "ing": "Jellyfish", "attr": "Gurgling" },
//       { "ing": "Sea Cucumber", "attr": "Singing" },
//       { "ing": "Baked Beans", "attr": "Undercooked" },
//       { "ing": "Poutine", "attr": "Canadian" },
//       { "ing": "Hamburger Meat", "attr": "RAW" },
//       { "ing": "Cucumber", "attr": "Nearly Expired" },
//       { "ing": "Mixed Veggies", "attr": "From the Clearance Section" },
//       { "ing": "Peas", "attr": "Canned" },
//       { "ing": "Corn", "attr": "Creamed" }
//     ],
//     "drinks": [
//       { "ing": "96.9% Isopropyl Alcohol", "attr": "Fuming" },
//       { "ing": "Bong Water", "attr": "Resinous" },
//       { "ing": "A Shot of Jack Daniel's™", "attr": "In a Trailer Park Boys™ Whiskey Glass" },
//       { "ing": "Old Mop Bucket Water", "attr": "Dubiously Smelling" },
//       { "ing": "Nautical Themed Craft Beer", "attr": "Pretentious" },
//       { "ing": "Slurpee™", "attr": "Multi-Flavored" },
//       { "ing": "Heroin", "attr": "From a Syringe 7 Other People Just Shared" },
//       { "ing": "Dihydrogen Monoxide", "attr": "Deadly" },
//       { "ing": "Soda", "attr": "Carbonated" }
//     ],
//     "extras": [
//       { "ing": "A Random Illogical Non-Repeating Number", "attr": "In Alphabetical Order" },
//       { "ing": "The Literal Blood of Jesus", "attr": "Full of Holes" },
//       { "ing": "The Literal Flesh of Jesus", "attr": "Aged" },
//       { "ing": "A Used Condom", "attr": "That's Been Lying on Hot Blacktop For 5 Weeks" },
//       { "ing": "Arnold Schwarzenegger's Sweat", "attr": "Invigorating" },
//       { "ing": "Grandma's Ashes", "attr": "Burnt" },
//       { "ing": "A Quarter Teaspoon of Bleach", "attr": "Non-Lethal" },
//       { "ing": "Mealworm-Infested Granola", "attr": "Cursed With Eternal Life" },
//       { "ing": "System of a Down's Worst Album", "attr": "Mysterious" },
//       { "ing": "Gunpowder", "attr": "Explosive" }
//     ]
//   }

// export const addIng = async () => {
//     console.log(jsonData);
//     for (const category in jsonData) {
//         const key = category;
//         console.log(jsonData[key])
//         jsonData[key].forEach(async (item) => {
//             const data = await addDoc(collection(db, "ingredients", 'categories', key), {
//                 ing: item.ing,
//                 attr: item.attr
//             })
//         })
//     };
// }

const meals = {
  "stuffed": [
    "Stuffed Shells",
    "Wellington",
    "Ravioli",
    "Dumplings",
    "Hot Dog",
    "Calzone",
    "Empanadas",
    "Spanikopita",
    "Enchiladas",
    "Spring Rolls",
    "Gyro",
    "Souvlaki",
    "Croquettes",
    "Burrito",
    "Falafel",
    "Haggis"
  ],
  "not_stuffed": [
    "Top Ramen",
    "Rotisserie",
    "Salad",
    "Shepard's Pie",
    "Souffle",
    "Soup",
    "Steak",
    "Stew",
    "Stir Fry",
    "Stuffing",
    "Sushi",
    "Tacos",
    "Curry",
    "Pho",
    "Pizza",
    "Pudding",
    "Quiche",
    "Filet",
    "Ice Cream",
    "Lasagne",
    "Parfait",
    "Pie",
    "Aspic",
    "Burger",
    "Cake",
    "Casserole",
    "Chili",
    "Club Sandwich",
    "Goulash",
    "Shish Kebab",
    "Century Egg",
    "Peking Duck",
    "Gelato",
    "Pad Thai",
    "Tres Leches",
    "Fajitas",
    "Couscous",
    "Matzoh Ball Soup",
    "Poutine",
    "Beaver Tail",
    "Borscht",
    "Laverbread",
    "Waffles",
    "Frikadeller",
    "Sausages",
    "Bibimbap",
    "Fermented Shark",
    "Bread",
    "Nachos",
    "Croissants",
    "Escargot",
    "Frog's Legs",
    "Paella"
  ]
}

export const addMeals = async () => {
  for (const category in meals) {
    const key = category;
    meals[key].forEach(async (item) => {
      const data = await addDoc(collection(db, "base_meals", 'categories', key), {
        name: item,
      })
    })
  };
}

export const addStats = async (meal) => {
  Object.keys(meal).forEach(key => {
    meal[key] = meal[key].hasOwnProperty('id') ? meal[key].id : meal[key];
  });
  await addDoc(collection(db, 'stats'), meal);
  const mealCount = await searchStats(meal);
  const totalCount = await getStatsCount();
  return mealCount / totalCount * 100;
}