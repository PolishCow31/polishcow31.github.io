const RECIPES = [
  // ——— Italian & Pasta ———
  {
    cuisine: "italian", name: "Short Rib Ragu with Pappardelle",
    servings: "Serves 4", tags: ["beef", "short ribs", "ragu", "pappardelle", "low & slow", "italian", "sunday dinner", "braised"],
    ingredients: [
      "2 pounds beef short ribs",
      "2 tablespoons olive oil",
      "1 onion, chopped",
      "3 cloves garlic, minced",
      "1 cup red wine",
      "1 cup beef broth",
      "1 can (28 oz) crushed tomatoes",
      "1 tablespoon tomato paste",
      "1 teaspoon dried thyme",
      "Salt and pepper, to taste",
      "1 pound pappardelle noodles",
      "Grated Parmesan cheese, for serving (optional)"
    ],
    steps: [
      "Preheat oven to 300°F (150°C).",
      "Brown the short ribs in olive oil, then set aside.",
      "Cook the onion and garlic until softened.",
      "Add the red wine, beef broth, crushed tomatoes, tomato paste, and thyme. Stir to combine.",
      "Return the short ribs to the pot, cover, and transfer to the oven.",
      "Braise for 2½ hours, or until the short ribs are tender.",
      "Cook the pappardelle noodles al dente, then toss with the ragu.",
      "Serve with grated Parmesan cheese, if desired."
    ]
  },
  {
    cuisine: "italian", name: "Spicy Garlic Beef Fettuccine in Creamy Provolone Sauce",
    servings: "Serves 6", tags: ["pasta", "beef", "creamy", "provolone", "spicy", "cajun", "garlic", "indulgent", "italian-american"],
    ingredientGroups: [
      { title: "For the pasta and beef", items: [
        "18 oz fettuccine pasta",
        "1½ lbs lean ground beef",
        "3 tbsp olive oil",
        "3 tbsp butter",
        "1½ small onions, finely diced",
        "4½ cloves garlic, minced",
        "1½ tsp oregano",
        "1½ tsp Cajun seasoning",
        "1½ tsp garlic powder",
        "Salt and black pepper, to taste"
      ]},
      { title: "For the Creamy Provolone Sauce", items: [
        "3 tbsp all-purpose flour",
        "1½ cups broth (chicken or beef)",
        "3 cups heavy cream",
        "1½ cups grated Provolone cheese",
        "¾ cup grated Parmesan cheese",
        "Chopped fresh parsley, for garnish"
      ]}
    ],
    steps: [
      "Bring a large pot of well-salted water to a boil and cook the fettuccine until tender but still slightly firm. Drain and set aside.",
      "Heat the olive oil in a large skillet over medium-high heat. Add the ground beef and cook, breaking it apart, until browned and cooked through. Season lightly with salt and pepper, then transfer the beef to a plate.",
      "In the same skillet, melt the butter and add the diced onion. Cook until soft and lightly golden, then stir in the garlic and cook just until fragrant.",
      "Sprinkle in the oregano, Cajun seasoning, and garlic powder. Stir briefly so the spices bloom in the butter and onion mixture.",
      "Sprinkle the flour over the pan and stir until everything is evenly coated. Slowly pour in the broth, whisking to keep the sauce smooth, then add the heavy cream.",
      "Let the sauce simmer gently, stirring often, until it thickens into a creamy base.",
      "Reduce the heat and stir in the Provolone and Parmesan until melted and smooth. Taste and adjust with salt and black pepper as needed.",
      "Return the cooked ground beef to the skillet and stir it into the sauce. Let everything warm together for a minute or two.",
      "Add the cooked fettuccine and gently toss until every strand is coated in the spicy garlic cream sauce.",
      "Remove from heat and serve hot, finished with chopped parsley on top."
    ]
  },
  {
    cuisine: "italian", name: "Spinach Fettuccine with Chicken & Artichoke Hearts",
    servings: "Serves 4", tags: ["pasta", "fast & easy"],
    ingredients: [
      "4 skinless boneless chicken breast halves, chopped into bite-sized pieces",
      "8 oz dried spinach or plain fettuccine",
      "6½ oz jar marinated artichoke hearts, chopped (reserve marinade)",
      "Red pepper flakes, to taste",
      "1 clove garlic, minced",
      "1 cup coarsely chopped walnuts",
      "1 medium onion, chopped",
      "1 tsp dried basil",
      "½ tsp dried tarragon",
      "Grated or shredded Parmesan cheese"
    ],
    steps: [
      "Cook pasta according to directions. Drain and keep warm.",
      "Drain artichoke hearts, reserving marinade. Pour 2 tbs of marinade into a large skillet. Heat over medium-high. Add garlic, walnuts, onion, basil and tarragon and stir-fry for 2 minutes. Remove mixture from skillet.",
      "Add chicken to skillet along with remaining marinade. Stir-fry 2–3 minutes or until no pink remains. Return walnut mixture to skillet. Add artichoke hearts. Cook and stir for 1 minute or until heated through.",
      "Arrange pasta on plates, top with chicken mixture and sprinkle with Parmesan."
    ]
  },
  {
    cuisine: "italian", name: "Lasagna Rolls",
    servings: "Serves 8", tags: ["baked", "make-ahead"],
    ingredients: [
      "1 medium onion, chopped",
      "2 cloves garlic, minced",
      "1 cup sliced fresh mushrooms",
      "1 cup water",
      "7½ oz can diced tomatoes with peppers and onions, undrained",
      "1½ tsp dried oregano",
      "1 tsp dried basil",
      "8 dried lasagna noodles",
      "1 beaten egg",
      "15 oz carton ricotta cheese",
      "10 oz package frozen chopped spinach, thawed and well drained",
      "1½ cups shredded mozzarella cheese",
      "1 cup grated Parmesan cheese"
    ],
    steps: [
      "Preheat oven to 375°.",
      "For sauce, in a large skillet cook onion and garlic. Stir in mushrooms, undrained tomatoes, oregano, basil and water. Bring to a boil, reduce heat, cover, and simmer for 25 minutes.",
      "Cook lasagna noodles AL DENTE according to package directions. Drain and rinse with cold water.",
      "For filling, stir together egg, ricotta, spinach, 1 cup mozzarella, and ¼ cup Parmesan.",
      "Spread about ½ cup filling on each noodle. Starting from a narrow end, roll up each noodle. Place rolls seam-side down in a 2-quart rectangular baking dish. Pour sauce over and cover with foil.",
      "Bake 25 minutes. Remove foil, sprinkle with remaining mozzarella, and bake 5 minutes more or until heated through. Let stand 5 minutes before serving.",
      "Sprinkle with remaining Parmesan."
    ]
  },
  {
    cuisine: "italian", name: "Sausage Lasagna",
    servings: "Family-sized", tags: ["baked", "crowd-pleaser"],
    ingredients: [
      "12 uncooked lasagna noodles",
      "1 lb ground Italian sausage",
      "15 oz container ricotta cheese",
      "½ cup grated/shredded Parmesan",
      "2 eggs, beaten",
      "4 cups (1 lb) shredded mozzarella",
      "Two 28 oz jars pasta sauce"
    ],
    steps: [
      "Preheat oven to 350°.",
      "In a skillet, cook sausage over medium heat until no longer pink. Drain. Add 1 jar pasta sauce, reduce heat to low and simmer 5 minutes.",
      "Cook lasagna noodles according to package instructions. Drain.",
      "Combine ricotta, Parmesan, eggs and 1 cup mozzarella in a medium bowl.",
      "Spread 1 cup pasta sauce in the bottom of a 9×13 baking dish.",
      "Layer 4 noodles lengthwise. Spread half the ricotta mixture, half the sausage/sauce mixture, and 1 cup mozzarella. Repeat layers.",
      "Top with remaining 4 noodles, remaining pasta sauce, and remaining mozzarella.",
      "Cover with foil and bake 30 minutes. Remove foil and bake 5–10 minutes more until heated through. Let stand 15 minutes before serving."
    ]
  },
  {
    cuisine: "italian", name: "Chicken Fettuccine",
    servings: "Family-sized", tags: ["pasta", "creamy"],
    ingredients: [
      "1 lb dried fettuccine",
      "¼ stick butter",
      "¼ cup olive oil",
      "1½ lbs chicken, cubed",
      "½ cup green onions, chopped",
      "2 cloves garlic, minced",
      "1 cup heavy cream",
      "1 packet McCormick Alfredo mix",
      "12 oz sliced mushrooms",
      "15 oz can petite diced tomatoes, drained",
      "1 tsp salt",
      "½ tsp pepper",
      "2 tbs basil",
      "½ cup Parmesan cheese"
    ],
    steps: [
      "Cook fettuccine according to package instructions.",
      "Heat butter and oil in a large skillet over medium-high heat. Add chicken, onion and garlic. Cook chicken until no longer pink.",
      "Add remaining ingredients. Serve over cooked fettuccine."
    ]
  },
  {
    cuisine: "italian", name: "Chicken Piccata",
    servings: "Serves 4", tags: ["lemon", "elegant"],
    ingredients: [
      "3 tbs flour",
      "½ tsp salt",
      "¼ tsp pepper",
      "4 boneless skinless chicken breasts (about 16 oz)",
      "1 tbs olive oil",
      "1 tbs butter",
      "2 cloves garlic, minced",
      "¾ cup chicken broth",
      "1 tbs lemon juice",
      "2 tbs parsley",
      "2 tbs drained capers"
    ],
    steps: [
      "Combine flour, salt and pepper in a shallow pie plate. Reserve 1 tbs of the flour mixture.",
      "Place chicken between sheets of plastic wrap. Pound to ½-inch thickness. Dip both sides in flour mixture, shaking off excess.",
      "Heat oil and butter in a large skillet over medium heat until butter is melted. Cook chicken 4–5 minutes per side until no longer pink. Transfer to a serving platter and cover with foil.",
      "Add garlic to skillet, cook and stir 1 minute. Add reserved flour mixture and cook 1 minute. Add broth and lemon juice. Cook 2 minutes, stirring frequently, until sauce thickens. Stir in parsley and capers.",
      "Spoon sauce over chicken and serve."
    ]
  },
  {
    cuisine: "italian", name: "Swiss Chicken Bundles",
    servings: "Serves 8", tags: ["baked", "rich"],
    ingredients: [
      "8 dried lasagna noodles",
      "1 beaten egg",
      "2 cups ricotta cheese",
      "1½ cups chopped cooked chicken (8 oz)",
      "¼ tsp dried tarragon",
      "4 tbs butter",
      "4 tbs flour",
      "1 tsp dry mustard",
      "½ tsp salt",
      "½ tsp pepper",
      "3 cups milk",
      "3 cups shredded Swiss cheese",
      "Paprika"
    ],
    steps: [
      "Preheat oven to 375°.",
      "Cook lasagna noodles according to directions. Drain and rinse with cold water.",
      "For filling, stir together egg, ricotta, chicken and tarragon.",
      "Spread about ⅓ cup filling over each noodle. Roll up starting from narrow end. Place seam-side down in a 3-quart rectangular baking dish.",
      "For sauce, melt butter in a medium saucepan. Stir in flour, mustard, salt and pepper. Add milk. Cook and stir until thickened and bubbly. Gradually add cheese, stirring until melted. Pour sauce over bundles and cover with foil.",
      "Bake 30 minutes or until heated through. Let stand 5 minutes. Transfer bundles to plates, spoon sauce over each, and sprinkle with paprika."
    ]
  },
  {
    cuisine: "italian", name: "Spaghetti and Drop Meatballs With Tomato Sauce",
    servings: "Serves 4", tags: ["pasta", "beef", "meatballs", "spaghetti", "tomato sauce", "weeknight", "fast & easy", "italian-american"],
    ingredients: [
      "Salt",
      "2 tablespoons olive oil",
      "12 ounces ground beef",
      "6 ounces Parmesan, grated (about 1½ cups)",
      "1 bunch fresh parsley",
      "¼ cup bread crumbs",
      "1 egg",
      "Black pepper",
      "1 large onion",
      "3 garlic cloves",
      "6 cups canned crushed tomatoes (a little less than two 28-ounce cans)",
      "3 bay leaves",
      "1 pound spaghetti"
    ],
    steps: [
      "Bring a stockpot of water to a boil and salt it. Put the olive oil in a large skillet over medium heat.",
      "Put the ground beef in a medium bowl. Grate the cheese; put 1 cup over the meat and reserve the rest, about ½ cup. Chop ½ cup of parsley and add all but 2 tablespoons to the meat mixture. Add the bread crumbs, crack in the egg, and sprinkle with salt and pepper. Gently mix until everything is just combined.",
      "Raise the heat to medium-high; use 2 teaspoons to drop rounds of the meatball mixture into the skillet without touching one another if you can. Adjust the heat so the meatballs sizzle but don't burn, and cook undisturbed until lightly browned on the bottom, 5 to 6 minutes.",
      "Meanwhile, trim, peel and chop the onion; scatter it around the meatballs. Peel and mince the garlic and put it on top of the onions.",
      "When the meatballs are browned on the bottom and the aromatics begin to soften, add the tomatoes, bay leaves, and a sprinkle of salt and pepper. Adjust the heat so the mixture bubbles gently but steadily, then cover and cook until the meat cooks through, about 8 minutes. Remove the lid and let the sauce bubble vigorously to thicken for another 5 to 10 minutes, essentially while the pasta cooks. Stir only as needed, and carefully.",
      "Add the pasta to the boiling water and stir. Start tasting after 5 minutes. When the pasta is tender but not mushy, drain it, reserving some cooking water, and return it to the pot.",
      "Move the meatballs to one side of the skillet and stir the sauce; taste and adjust the seasoning. Discard the bay leaves and spoon about half the sauce into the pasta pot. Toss the pasta over low heat, adding a splash of cooking water to make it saucier if you like.",
      "To serve, divide the pasta among 4 bowls; top with the meatballs and remaining sauce, and sprinkle the reserved Parmesan and parsley over the top."
    ]
  },
  {
    cuisine: "italian", name: "Spicy, Creamy Weeknight Bolognese",
    servings: "Serves 4 to 6", tags: ["pasta", "beef", "bolognese", "creamy", "spicy", "weeknight", "fast & easy", "red curry"],
    ingredients: [
      "Salt and black pepper",
      "1 pound ground beef (at least 20 percent fat)",
      "1 large onion, finely chopped",
      "2 carrots, peeled and finely chopped",
      "2 to 3 tablespoons red curry paste",
      "1 (15-ounce) can tomato sauce",
      "1 pound short, curled pasta, such as pipettes",
      "1 cup heavy cream"
    ],
    steps: [
      "Bring a large pot of salted water to a boil.",
      "Meanwhile, heat a large Dutch oven or heavy pot over high until very hot. Add the beef, and smush and spread it in a single layer. Sprinkle with salt and pepper, then cook, stirring, to break into tiny bits and cook through, 4 to 5 minutes.",
      "Push the meat to one side, and add the onion and carrots to the beef fat on the other side. Sprinkle with salt and pepper, and cook, stirring occasionally with the beef, until the onion is translucent, about 5 minutes.",
      "Add the curry paste — 2 tablespoons for mild, 3 for more heat — and stir until darkened in color, 2 to 3 minutes. Pour in the tomato sauce, then fill the can a third of the way with water to swish out the rest and add it to the pot. Stir, bring to a simmer, then reduce the heat to low and simmer while the pasta cooks.",
      "Cook the pasta in the boiling water until al dente. Save ½ cup pasta cooking water, then drain the pasta and add it to the simmering sauce.",
      "Stir the cream into the sauced pasta, taste and season with salt and pepper. For a thinner sauce, stir in a bit of the pasta water. Serve hot."
    ]
  },
  {
    cuisine: "italian", name: "Spaghetti Carbonara",
    servings: "Serves 4", tags: ["pasta", "carbonara", "guanciale", "eggs", "pecorino", "roman", "fast & easy", "classic"],
    ingredients: [
      "Salt",
      "2 large eggs and 2 large yolks, room temperature",
      "1 ounce (about ⅓ packed cup) grated pecorino Romano, plus more for serving",
      "1 ounce (about ⅓ packed cup) grated Parmesan",
      "Coarsely ground black pepper",
      "1 tablespoon olive oil",
      "3½ ounces slab guanciale, pancetta or bacon, sliced into pieces about ¼ inch thick by 1⅓ inch square",
      "12 ounces spaghetti (about ¾ box)"
    ],
    steps: [
      "Place a large pot of lightly salted water (no more than 1 tablespoon salt) over high heat and bring to a boil. Fill a large bowl with hot water to warm it for serving, and set aside.",
      "In a mixing bowl, whisk together the eggs, yolks, pecorino and Parmesan. Season with a pinch of salt and generous black pepper.",
      "Heat the oil in a large skillet over medium heat, add the pork, and sauté until the fat just renders — on the edge of crispness but not hard. Remove from the heat and set aside.",
      "Add the pasta to the water and boil until a bit firmer than al dente. Just before it's ready, reheat the guanciale in the skillet if needed. Reserve 1 cup pasta water, then drain the pasta and add it to the skillet over low heat. Stir for a minute or so.",
      "Empty the serving bowl of hot water and dry it. Add the hot pasta mixture, then stir in the cheese mixture, adding some reserved pasta water if needed for creaminess. Serve immediately, dressed with a bit more grated pecorino and pepper."
    ]
  },
  {
    cuisine: "italian", name: "Rao's Meatballs With Marinara Sauce",
    servings: "Serves 4 to 6", tags: ["meatballs", "marinara", "italian-american", "beef", "veal", "pork", "red sauce", "classic"],
    ingredientGroups: [
      { title: "For the Sauce", items: [
        "¼ cup extra-virgin olive oil",
        "2 ounces salt pork, thinly sliced",
        "3 tablespoons minced onion",
        "2 garlic cloves, minced",
        "2 (28-ounce) cans imported Italian crushed tomatoes",
        "6 leaves fresh basil, torn into small pieces",
        "Pinch of dried oregano",
        "Salt and ground black pepper"
      ]},
      { title: "For the Meatballs", items: [
        "1 pound ground lean beef",
        "½ pound ground veal",
        "½ pound ground pork",
        "2 large eggs",
        "1 cup freshly grated Pecorino Romano cheese",
        "1½ tablespoons finely chopped flat-leaf parsley",
        "1 small garlic clove, minced",
        "Salt and ground black pepper",
        "2 cups fine dry bread crumbs",
        "1 cup extra-virgin olive oil, for frying",
        "1 clove garlic, lightly smashed"
      ]}
    ],
    steps: [
      "Make the sauce: Heat the oil in a large saucepan over medium-low heat, then add the salt pork. Sauté until the fat has rendered, about 5 minutes. Remove and discard the salt pork. Add the onion and sauté until translucent, about 3 minutes. Add the garlic and sauté just until softened. Add the tomatoes with their juice and bring to a boil. Reduce the heat to low and simmer until slightly thickened, about 45 minutes. Add the basil, oregano and salt and pepper to taste. Cook 1 minute more.",
      "Make the meatballs: In a mixing bowl, combine the beef, veal and pork. Add the eggs, cheese, parsley and minced garlic, then salt and pepper. Add the bread crumbs and mix well. Slowly add up to 2 cups water, ½ cup at a time, until the mixture is moist (all the water may not be needed). Shape into 1½-inch meatballs.",
      "Heat the oil in a large sauté pan over medium heat. Add the smashed garlic and sauté until lightly browned, 1 to 2 minutes, then discard. Working in batches and not crowding the pan, add the meatballs and fry until the undersides are brown and slightly crisp, 5 to 6 minutes. Turn and brown the other sides, about 5 minutes more. Drain on paper towels, then add to the marinara sauce. Mix gently and serve."
    ]
  },

  // ——— Mexican ———
  {
    cuisine: "mexican", name: "Mexican Street Corn Chicken Skillet",
    servings: "Serves 4", tags: ["chicken", "skillet", "corn", "creamy", "tex-mex", "fast & easy"],
    ingredients: [
      "1/2 cup (60 g.) all-purpose flour",
      "Kosher salt",
      "Freshly ground black pepper",
      "4 (6-oz.) boneless, skinless chicken breasts",
      "2 Tbsp. neutral or extra-virgin olive oil, divided",
      "1 shallot, finely chopped",
      "1 ear of corn, shucked, kernels removed",
      "1/2 red bell pepper, seeds and ribs removed, finely chopped",
      "1 Tbsp. tomato paste",
      "2 cloves garlic, finely chopped",
      "1/2 tsp. chili powder, plus more for serving",
      "1/2 tsp. ground cumin",
      "1/4 tsp. dried oregano",
      "1/4 tsp. smoked paprika",
      "1/4 cup tequila or dry white wine",
      "1 cup low-sodium chicken broth",
      "1/2 cup sour cream or crème fraîche",
      "3/4 cup crumbled queso fresco",
      "1/2 lime",
      "1/4 cup fresh cilantro leaves"
    ],
    steps: [
      "Preheat oven to 375°. On a shallow plate, season flour with salt and pepper. Pat chicken dry and coat on all sides with the seasoned flour; shake off excess.",
      "In a large cast-iron or heatproof skillet over medium-high heat, heat 1 Tbsp. oil. Cook chicken, turning occasionally, until golden brown, 2 to 3 minutes per side. Transfer to a plate.",
      "In the same skillet over medium heat, heat the remaining 1 Tbsp. oil. Cook shallots, stirring occasionally, until just softened, about 3 minutes. Add corn kernels, bell peppers, and tomato paste and cook, stirring, until the paste is brick red, 2 to 3 minutes. Add garlic, chili powder, cumin, oregano, and paprika and cook, stirring, until fragrant, about 1 minute more.",
      "Pour in the tequila, scraping off any browned bits from the bottom of the pan. Add broth and bring to a simmer. Stir in the sour cream or crème fraîche; season with salt and pepper. Simmer, stirring occasionally, until liquid is slightly reduced and thickened, about 5 minutes.",
      "Return the chicken and any accumulated juices to the skillet. Spoon the sauce over.",
      "Transfer to the oven and bake, turning the chicken halfway through, until the internal temperature reaches 165°F, 10 to 12 minutes.",
      "Crumble the queso fresco over. Squeeze in the juice from the lime. Top with cilantro and sprinkle with chili powder."
    ]
  },
  {
    cuisine: "mexican", name: "Mexican Pizza (Taco Bell Copycat)",
    servings: "Serves 4", tags: ["copycat", "fun"],
    ingredients: [
      "1 lb ground beef",
      "¾ cup water",
      "1 packet taco seasoning",
      "8 flour tortillas, taco size",
      "1 tbs vegetable oil",
      "15 oz can refried beans",
      "10 oz can enchilada sauce",
      "10 oz can diced tomatoes, Mexican style, drained",
      "1½ cups shredded Colby Jack cheese",
      "Toppings: guacamole, sour cream, green onions, jalapeños, salsa, taco sauce"
    ],
    steps: [
      "Preheat oven to 400°.",
      "Brown ground beef in a large skillet. Drain fat, then add water and taco seasoning. Bring to boil, reduce heat, and simmer until most liquid is absorbed.",
      "In a large skillet, heat oil over medium-high. Fry tortillas one at a time, flipping, until they start to brown and crisp.",
      "Heat beans then spread evenly over the bottom of 4 tortillas. Add taco meat and top with the other 4 tortillas.",
      "Spread enchilada sauce evenly over the 4 top tortillas. Spread drained tomatoes evenly. Sprinkle cheese on top.",
      "Place each pizza on a baking sheet and bake about 5 minutes or until cheese is melted. Add toppings."
    ]
  },
  {
    cuisine: "mexican", name: "Mexican Lasagna",
    servings: "Family-sized", tags: ["baked", "layered"],
    ingredients: [
      "1 lb lean ground beef",
      "1 tbs olive oil",
      "½ small onion, chopped",
      "1 tbs chili powder",
      "1 tsp salt",
      "½ tsp pepper",
      "14.5 oz can diced tomatoes, drained",
      "15 oz can black beans, rinsed and drained",
      "4 oz can diced green chiles",
      "Two 10 oz cans green enchilada sauce",
      "12 8\" flour tortillas",
      "8 oz shredded pepper jack cheese",
      "4 oz shredded colby jack cheese",
      "2 scallions, chopped",
      "Toppings: chopped cilantro, guacamole, sour cream"
    ],
    steps: [
      "Preheat oven to 425°.",
      "Drizzle olive oil into a large skillet over medium heat. Add beef, onion, chili powder, salt and pepper. Brown beef until no longer pink. Drain, then add drained tomatoes and beans. Stir to combine. Reduce heat and simmer 10 minutes.",
      "Smooth ⅓ enchilada sauce over the bottom of a 9×13 baking dish. Lay tortillas on the bottom, slightly overlapping (about 4 tortillas).",
      "Spoon ½ of beef mixture over tortillas. Layer 4 more tortillas. Smooth ⅓ enchilada sauce on top. Sprinkle ½ of each cheese. Scatter green chiles over cheese. Add remaining beef mixture. Top with remaining tortillas, remaining sauce, and remaining cheese.",
      "Bake 10 minutes or until cheese is melted and lasagna is warmed through. Sprinkle with toppings."
    ]
  },
  {
    cuisine: "mexican", name: "Albondigas Soup (Mexican Meatball Soup)",
    servings: "Serves 6–8", tags: ["meatball", "low & slow"],
    ingredientGroups: [
      { title: "Soup", items: [
        "1 cup long grain white rice, uncooked",
        "2 tbs olive oil",
        "½ small yellow onion, chopped",
        "1 jalapeño pepper, minced",
        "2 medium carrots — sliced ½ inch thick",
        "2 stalks celery — sliced ½ inch thick",
        "2 small Yukon gold potatoes — chopped into 1-inch chunks",
        "4 garlic cloves, minced",
        "2 tsp chili powder",
        "1½ tsp ground cumin",
        "1 tsp each: oregano, coriander",
        "½ tsp each: paprika, salt, pepper",
        "2 15 oz cans diced petite tomatoes, undrained",
        "4 oz can mild diced green chiles",
        "8 cups low sodium beef broth"
      ]},
      { title: "Meatballs", items: [
        "1 lb ground beef",
        "Cooked rice (from above)",
        "½ small onion, minced",
        "1 large egg",
        "3 garlic cloves, minced",
        "3 tbs minced fresh cilantro",
        "2 tsp parsley",
        "½ tsp oregano",
        "½ tsp each: chili powder, ground cumin, salt, pepper"
      ]},
      { title: "Toppings", items: [
        "Chopped avocado", "Sour cream", "Lime juice", "Hot sauce"
      ]}
    ],
    steps: [
      "Bring 4 cups water to boil in a Dutch oven or large pot. Add rice and ½ tsp salt and cook, stirring occasionally, for 6 minutes. Drain rice and rinse thoroughly in cold water. Set aside.",
      "Heat 2 tbs olive oil in the Dutch oven over medium-high heat. Add chopped onions and jalapeños and cook 3 minutes. Add carrots, celery, potatoes and all seasonings and cook 3 minutes. Add garlic and sauté 30 seconds. Add tomatoes, green chilies and broth.",
      "Cover pot and bring to boil. Reduce heat to simmer and cook uncovered for 20–25 minutes.",
      "For meatballs: whisk eggs in a large bowl. Add 1 cup cooked rice and all remaining meatball ingredients and mix well. Shape 1-tablespoon meatballs and place on a parchment-lined baking sheet.",
      "Add meatballs and remaining cooked rice to soup. Add 1–2 cups water if desired. Bring to boil, reduce to simmer for 12–15 minutes or until meatballs are cooked through and rice is tender.",
      "Ladle into bowls and top with desired toppings."
    ]
  },
  {
    cuisine: "mexican", name: "Beef Enchiladas",
    servings: "Serves 4–6", tags: ["beef", "enchiladas", "cheesy", "chili con carne", "baked", "tex-mex", "comfort"],
    ingredientGroups: [
      { title: "For the chili con carne", items: [
        "½ cup all-purpose flour",
        "2 tablespoons neutral oil, like canola",
        "1 pound ground chuck beef, ideally 20 percent fat",
        "Kosher salt and ground black pepper, to taste",
        "1 medium white onion, peeled and chopped",
        "2 cloves garlic, peeled and minced",
        "1 jalapeño pepper or more to taste, seeds removed if you want it less spicy, stemmed and chopped",
        "1 cup chopped or canned crushed tomatoes",
        "3 tablespoons chile powder",
        "½ teaspoon ground cumin",
        "½ teaspoon dried oregano, ideally Mexican",
        "2 cups chicken stock, ideally homemade or low-sodium if store-bought"
      ]},
      { title: "For the enchiladas", items: [
        "½ cup neutral oil, like canola",
        "12 yellow corn tortillas",
        "3 cups shredded Cheddar cheese, or a mixture of 1½ cups Cheddar and 1½ cups American cheese, like Velveeta",
        "1 medium-size white onion, peeled and chopped (optional)"
      ]}
    ],
    steps: [
      "Prepare the chili con carne: Put flour in a large sauté pan set over medium-high heat. Cook, stirring frequently, until it begins to turn golden brown and smell nutty, then pour it onto a plate to cool.",
      "Wipe out sauté pan and return it to high heat with 2 tablespoons oil. When oil is hot and shimmery, add ground beef to pan, and cook, breaking it up with a fork and stirring, until it is well browned, about 12 to 15 minutes. Season with salt and pepper, then use a slotted spoon to remove meat to a bowl, leaving drippings behind.",
      "Add onion, garlic and jalapeño to pan and cook, stirring to scrape up any browned bits of meat, for 10 to 12 minutes, or until vegetables are soft. Stir in tomatoes and cook until their liquid has evaporated, then add chile powder, cumin and oregano and stir to combine. After a minute or so, when mixture begins to turn fragrant, return browned meat to pan, along with toasted flour, and stir well to combine.",
      "Lower heat to medium-high and slowly stir in chicken stock, ½ cup at a time, until mixture has thickened and started to simmer. Lower heat again and allow chili to cook slowly for 45 minutes to 1 hour, until meat is tender. Add more stock or water if needed. Use immediately, or let cool, cover and refrigerate for up to a few days.",
      "When you are ready to cook the enchiladas, heat oven to 425 degrees. In a medium sauté pan set over medium-high heat, heat ½ cup neutral oil until it begins to shimmer. Using tongs or a wide spatula, place a tortilla in the hot fat; it should start to bubble immediately. Heat tortilla for about 10 seconds a side, until soft and lightly browned. Remove tortilla and set on a rack set over a baking pan, or just on a baking pan if you don't have a rack. Repeat with remaining tortillas, working quickly.",
      "Assemble the enchiladas: Using a ladle, put about ½ cup chili in the bottom of a 9-by-13-inch baking pan and spread it out a little. Roll a few tablespoons of cheese into each tortilla, along with a tablespoon or so of chili, then place it seam-side down in the pan, nestling each one against the last. Ladle remaining chili over top of rolled tortillas and sprinkle with remaining cheese.",
      "Transfer to oven and bake until sauce bubbles and cheese is melted, about 10 to 15 minutes. Sprinkle chopped onions over the top, if using, and serve immediately."
    ]
  },
  {
    cuisine: "mexican", name: "Easy Burritos",
    servings: "Serves 6", tags: ["beef", "burritos", "make-ahead", "freezer-friendly", "weeknight", "cheesy"],
    ingredients: [
      "1 pound ground beef",
      "1 medium yellow or white onion, finely chopped",
      "1½ teaspoons ground cumin",
      "½ teaspoon smoked paprika, or chipotle or ancho chile powder",
      "½ teaspoon dried oregano",
      "1 (15-ounce) can black or pinto beans",
      "1 large tomato, coarsely chopped",
      "2 teaspoons lime juice, or apple cider vinegar",
      "Hot sauce, for drizzling (optional)",
      "6 burrito-size (about 10-inch) flour tortillas",
      "2 cups (8 ounces) shredded Monterey Jack or Mexican blend cheese"
    ],
    steps: [
      "In a large skillet, press the beef into an even layer to fill the skillet. Sprinkle with the onion. Cook over medium-high, undisturbed, until the meat is deeply browned underneath, 6 to 8 minutes.",
      "Sprinkle with the cumin, smoked paprika and oregano, and season with salt and pepper. Break up the beef into small pieces, then cook, stirring occasionally, until the onion is softened and the spices are fragrant, 2 to 4 minutes.",
      "Add the beans, including the liquid, and the tomato and simmer, stirring and scraping up browned bits, until the liquid has evaporated and the mixture starts to sizzle, 8 to 10 minutes. Turn off the heat, stir in the lime juice and season with salt and pepper.",
      "Arrange the tortillas on a clean work surface. Sprinkle half the cheese across the center of the tortillas, left to right, leaving a 1-inch border. Top each with ⅔ cup of the beef-bean mixture, followed by the remaining cheese. Drizzle on hot sauce, if using.",
      "Fold the tortilla's short sides over the filling, then fold the bottom of the tortilla snugly over the filling. Tightly roll away from you until the burrito is sealed. Repeat with the other tortillas.",
      "When ready to eat, in a nonstick skillet over medium, place the burritos seam side down. Cook, turning occasionally, until golden all over, 3 to 5 minutes. Serve with desired toppings."
    ]
  },
  {
    cuisine: "mexican", name: "Bean and Cheese Burritos",
    servings: "Makes 6 burritos", tags: ["burritos", "beans", "cheese", "vegetarian", "refried beans", "weeknight", "kid-friendly", "pan-fried"],
    ingredients: [
      "4 tablespoons safflower or canola oil, divided",
      "½ cup finely chopped yellow onion (from ½ medium onion)",
      "½ cup finely chopped green bell pepper (from ½ pepper)",
      "Salt and black pepper",
      "2 garlic cloves, minced",
      "2 (15-ounce) cans pinto beans, ½ cup of bean liquid reserved and the rest drained",
      "½ cup store-bought or homemade pico de gallo or salsa",
      "¼ teaspoon smoked paprika",
      "6 (9- to 10-inch) flour tortillas",
      "2 cups shredded sharp Cheddar (8 ounces)",
      "Sour cream and hot sauce, for serving"
    ],
    steps: [
      "In a large nonstick skillet, heat 2 tablespoons of the oil over medium. Add the onion and bell pepper, season with salt and pepper, and cook, stirring occasionally, until light golden and tender, about 8 minutes. Stir in the garlic until fragrant, 1 minute. Add the pinto beans, pico de gallo, smoked paprika, reserved bean liquid and ½ cup of water, and bring to a simmer. Cook, stirring and mashing occasionally with a potato masher or the back of a spoon, until the liquid is absorbed and the mixture is thick, about 8 minutes. Season with salt and pepper. Transfer the refried beans to a bowl, and wipe out the skillet.",
      "Spread ½ cup of the refried beans in the center of each tortilla and top each with ⅓ cup of the cheese. Fold the short sides of the tortilla over the filling; fold the bottom of the tortilla up and over the filling and tightly roll.",
      "In the skillet, heat 1 tablespoon of the oil over medium. Add 3 burritos seam side down and cook until golden, turning occasionally, 3 to 5 minutes. Transfer to serving plates and repeat with the remaining 1 tablespoon oil and 3 burritos. Serve warm with sour cream and hot sauce on the side."
    ]
  },
  {
    cuisine: "mexican", name: "Crunchy Queso Wrap",
    servings: "Serves 4", tags: ["beef", "crunchwrap", "wrap", "queso", "copycat", "party", "tex-mex", "crispy"],
    ingredientGroups: [
      { title: "For the Filling", items: [
        "1 tablespoon canola or vegetable oil",
        "1 pound ground beef",
        "¼ cup coarsely grated yellow onion",
        "Salt and pepper",
        "2 tablespoons tomato paste",
        "1 teaspoon ground cumin",
        "1 teaspoon smoked paprika",
        "1 teaspoon ancho chile powder",
        "½ teaspoon garlic powder"
      ]},
      { title: "For the Spicy Sour Cream", items: [
        "⅔ cup sour cream",
        "4 teaspoons adobo sauce (from 1 small can chipotles in adobo), or hot sauce, to taste"
      ]},
      { title: "For Assembly", items: [
        "4 extra-large, burrito-size (10-inch) flour tortillas",
        "¾ cup jarred or homemade queso",
        "1 heaping cup very thinly sliced iceberg lettuce",
        "¾ cup homemade or store-bought pico de gallo, drained",
        "4 tostada shells",
        "Canola or vegetable oil, for frying",
        "Hot sauce, for serving"
      ]}
    ],
    steps: [
      "Prepare the filling: In a large nonstick skillet, heat the oil over medium-high. Add the beef and onion, season aggressively with salt and pepper, and cook, breaking into tiny pieces, until the beef starts to brown, about 5 minutes. Stir in the tomato paste, then the cumin, paprika, ancho chile powder and garlic powder, and cook, stirring occasionally, until fragrant and any excess liquid evaporates, about 3 minutes. Transfer to a medium bowl. Using a paper towel, wipe out the skillet.",
      "Prepare the spicy sour cream: In a small bowl, mix together the sour cream and adobo sauce; season to taste with salt and pepper.",
      "Prepare the assembly line: Set out the flour tortillas (warm them in the skillet to soften if needed so they're pliable). Add ½ cup filling to the center of one tortilla, flattening it into an even 4-inch circle just smaller than the width of your tostadas. Spread 3 tablespoons queso over the filling. Top with a tostada, pressing slightly. Spread 2 scant tablespoons of the spicy sour cream on the tostada. Top with a heaping ¼ cup lettuce, then 3 tablespoons drained pico de gallo.",
      "Enclose the filling by folding one flap of the tortilla 'border' over to cover it, repeating the pleat every inch or two. The tortilla should fully enclose the filling, but an opening smaller than 1 inch at the center is fine.",
      "Heat 1 tablespoon oil in the skillet over medium, then carefully add the wrap seam side down. Cook until golden and crisp, 2 to 3 minutes per side.",
      "Serve immediately, with hot sauce and the remaining spicy sour cream for dipping. Repeat with the remaining wraps, adding oil as needed to the pan before searing."
    ]
  },
  {
    cuisine: "mexican", name: "Elotes (Grilled Corn With Cheese, Lime and Chile)",
    servings: "Serves 6", tags: ["corn", "grilled", "street food", "cotija", "lime", "side", "summer", "vegetarian"],
    ingredients: [
      "6 ears fresh corn, shucked",
      "3 tablespoons mayonnaise",
      "2 limes",
      "¼ teaspoon ancho chile powder, more as needed",
      "Fine sea salt, as needed",
      "Black pepper, as needed",
      "½ cup crumbled cotija cheese (or substitute feta or ricotta salata)",
      "¼ cup chopped fresh cilantro"
    ],
    steps: [
      "Heat your grill to medium-high. Grill the corn, turning occasionally, until cooked through and lightly charred, 7 to 10 minutes. (No grill? The broiler works too — just watch the ears carefully so they don't burn.)",
      "Meanwhile, in a small bowl, mix together the mayonnaise, zest of 1 lime, chile powder, salt and pepper.",
      "Slather the hot corn with the mayonnaise mixture and sprinkle with the cheese and cilantro. Cut the limes into wedges and serve alongside the corn."
    ]
  },
  {
    cuisine: "mexican", name: "Vegetarian Bean and Cheese Enchiladas",
    servings: "Serves 4", tags: ["enchiladas", "vegetarian", "black beans", "cheese", "weeknight", "meatless", "baked", "make-ahead"],
    ingredients: [
      "2 tablespoons olive oil",
      "2 medium yellow onions, finely chopped",
      "1 red bell pepper or poblano chile, stemmed, seeded and cut into ¼-inch pieces",
      "4 garlic cloves, peeled and thinly sliced",
      "Kosher salt and black pepper",
      "1½ teaspoons ground cumin",
      "1 (15-ounce) can fire-roasted tomatoes, preferably crushed",
      "2 teaspoons chili powder",
      "½ teaspoon hot sauce, or 1 chipotle chile in adobo, chopped (optional)",
      "¼ cup sour cream, plus more for serving (optional)",
      "2 (15-ounce) cans black beans, rinsed",
      "5 ounces mild Cheddar or Monterey Jack cheese, grated (about 1¼ cups)",
      "10 to 12 (6-inch) soft corn or flour tortillas",
      "Fresh cilantro leaves and stems, for serving"
    ],
    steps: [
      "Heat the oven to 425 degrees. In a large skillet, heat the oil over medium-high. Add the onions, bell pepper and garlic; season with salt and pepper. Cook, stirring occasionally, until softened and charred in spots, 6 to 8 minutes. Stir in the cumin and cook until fragrant, about 1 minute. Remove from the heat.",
      "Transfer half the vegetable mixture to a blender; add the tomatoes, chili powder and hot sauce. Blend until very smooth and season to taste. (If the sauce is chunky, add ¼ cup sour cream and blend again.)",
      "Add the black beans and ½ cup cheese to the remaining vegetables in the skillet and stir to combine. Taste and adjust the seasoning.",
      "Spread the tortillas on the oven rack and heat until warm and pliable, 1 to 2 minutes, then wrap in a kitchen towel. Pour half the enchilada sauce (about 1½ cups) into a 9-by-13-inch baking dish and spread to cover the bottom.",
      "Place a little more than ¼ cup of the bean mixture in the center of one tortilla. Roll up and place in the dish, seam side down. Repeat with the remaining tortillas.",
      "Pour the remaining sauce over the enchiladas and sprinkle with the remaining ¾ cup cheese. Bake until the cheese has melted, about 10 minutes. Top with sour cream and cilantro and serve immediately."
    ]
  },

  // ——— Asian-Inspired ———
  {
    cuisine: "asian", name: "Pepper Steak",
    servings: "Serves 4", tags: ["beef", "stir-fry", "asian", "soy", "bell peppers", "fast & easy", "weeknight"],
    ingredients: [
      "1/2 cup reduced-sodium soy sauce",
      "1/4 cup rice wine vinegar",
      "3 Tbsp. packed light brown sugar",
      "2 Tbsp. cornstarch",
      "2 Tbsp. vegetable oil, divided",
      "Kosher salt",
      "Freshly ground black pepper",
      "1 lb. flank steak, thinly sliced against the grain",
      "1 green bell pepper, seeds and ribs removed, thinly sliced",
      "1 red bell pepper, seeds and ribs removed, thinly sliced",
      "3 cloves garlic, finely chopped",
      "1 Tbsp. finely chopped peeled ginger",
      "Cooked white rice, for serving"
    ],
    steps: [
      "In a medium bowl, whisk soy sauce, vinegar, brown sugar, and cornstarch until combined.",
      "In a large skillet over high heat, heat 1 tablespoon oil. Working in batches, add the steak; season with salt and pepper. Cook, turning occasionally, until browned on all sides, about 8 minutes total. Transfer steak to a plate.",
      "In the same skillet over medium heat, heat the remaining 1 tablespoon oil. Cook the bell peppers, stirring occasionally, until softened, about 5 minutes. Add the garlic and ginger and cook, stirring, until fragrant, about 1 minute more. Return the beef to the skillet and add the sauce; season with salt and pepper, if needed. Cook, stirring, until the sauce is glossy, about 2 minutes more.",
      "Divide rice among plates. Spoon steak mixture over."
    ]
  },
  {
    cuisine: "asian", name: "Pineapple Bowls",
    servings: "Serves 2", tags: ["pineapple", "fun", "fast & easy", "stir-fry", "tropical", "kid-friendly"],
    ingredients: [
      "1 small pineapple",
      "1/3 c. low-sodium soy sauce",
      "3 tbsp. packed brown sugar",
      "1 tbsp. pineapple juice",
      "3 cloves garlic, minced",
      "2 tsp. minced fresh ginger",
      "1 tsp. sesame oil",
      "1 tbsp. vegetable oil",
      "3/4 lb. boneless skinless chicken breast, chopped",
      "2 tsp. cornstarch",
      "2 tsp. water",
      "2 c. cooked rice, for serving",
      "Sesame seeds, for garnish (optional)",
      "Thinly sliced green onions, for garnish (optional)"
    ],
    steps: [
      "Make bowls: slice pineapple in half lengthwise, leaving the stem intact. Slice the fruit around the perimeters, angling your knife towards the middle, then make a few cuts across. Scoop chunks out with a spoon and reserve about 1 tablespoon of pineapple juice for the sauce. Chop the pineapple into smaller pieces to garnish (or snack on) later.",
      "Make sauce: in a small bowl, whisk together soy sauce, brown sugar, pineapple juice, garlic, ginger, and sesame oil.",
      "Season chicken all over with salt. In a large skillet over medium-high heat, heat vegetable oil. Add chicken in an even layer and cook until golden, about 3 minutes. Flip and cook until golden on the second side, about 3 minutes more. Pour sauce over chicken and bring mixture to a simmer.",
      "Make slurry: whisk together cornstarch and water, then stir into the sauce. Simmer until sauce is thickened and chicken is cooked through, 8 to 10 minutes more.",
      "Divide rice and chicken between the pineapple bowls and garnish with chopped pineapple, sesame seeds, and green onions, if using."
    ]
  },
  {
    cuisine: "asian", name: "Chicken Fried Rice",
    servings: "Serves 4", tags: ["stir-fry", "fast & easy"],
    ingredients: [
      "1½ cups brown or white rice",
      "3 cups water",
      "2 eggs, beaten",
      "2 tbs peanut oil",
      "2 chicken breasts, chopped into bite-sized pieces",
      "1 small yellow onion, chopped",
      "1 tsp minced garlic",
      "¼ tsp red pepper flakes",
      "3 green onions, chopped",
      "3 tbs soy sauce",
      "1 cup frozen petite peas",
      "1 cup carrots, chopped"
    ],
    steps: [
      "In a saucepan, bring water to boil. Stir in rice. Reduce heat, cover, and simmer for 20 minutes.",
      "In a large skillet, scramble eggs over medium-low heat until cooked through. Set aside.",
      "Heat peanut oil in skillet over medium heat. Add chicken and cook until no longer pink. Add onions, garlic and pepper flakes. Cook 3 minutes, stirring occasionally.",
      "Increase heat to medium-high and stir in cooked rice, green onions, carrots, peas and soy sauce. Add cooked eggs. Stir-fry 2 minutes or until heated through."
    ]
  },
  {
    cuisine: "asian", name: "Thai Noodles",
    servings: "Serves 4", tags: ["peanut", "fast & easy"],
    ingredients: [
      "1 lb package brown pasta",
      "2 tbs sesame oil",
      "½ tsp red pepper flakes",
      "½ tsp chili powder",
      "¼ cup creamy peanut butter",
      "4 cloves garlic, minced",
      "2 tbs soy sauce",
      "1 tsp vinegar",
      "2 scallions, chopped"
    ],
    steps: [
      "Cook pasta according to package instructions.",
      "In a skillet over medium heat, cook sesame oil, red pepper flakes and chili powder for 1 minute.",
      "Add remaining ingredients and stir until smooth.",
      "Pour over cooked pasta, toss and serve."
    ]
  },
  {
    cuisine: "asian", name: "Chicken Curry with Broccoli & Cashews",
    servings: "Family-sized", tags: ["curry", "stir-fry"],
    ingredients: [
      "2 tbs vegetable oil",
      "2 tsp Thai green curry paste",
      "12 oz skinless boneless chicken breasts, bite-sized pieces",
      "¼ tsp salt",
      "2 tbs sugar",
      "2 tbs soy sauce",
      "Béchamel: 2 tbs butter, 2 tbs flour, ¼ tsp salt, dash pepper, 1 cup milk",
      "1 cup broccoli florets",
      "½ cup roasted salted cashews"
    ],
    steps: [
      "In a wok or large skillet, heat oil. Add curry paste and cook 1 minute over low heat. Turn heat to medium-high and stir in chicken, salt, sugar and soy sauce. Stir-fry until no longer pink. Set aside.",
      "To make the béchamel: in a separate skillet, melt butter. Blend in flour, salt and pepper. Cook over low heat. Add 1 cup milk and cook until thickened.",
      "In a separate saucepan, heat enough water to cover broccoli to a boil. Add broccoli and blanch 1 minute. Drain.",
      "Add béchamel to chicken mixture and stir. Add broccoli and cashews. Heat through."
    ]
  },
  {
    cuisine: "asian", name: "Korean BBQ-Style Meatballs",
    servings: "Serves 4", tags: ["korean", "meatballs", "beef", "baked", "weeknight", "fast & easy"],
    ingredients: [
      "1 pound ground beef (round or chuck)",
      "½ cup finely crushed Ritz crackers (12 crackers)",
      "½ cup chopped scallions",
      "2 tablespoons low-sodium soy sauce",
      "2 tablespoons minced garlic",
      "1 teaspoon kosher salt (such as Diamond Crystal)",
      "1 teaspoon freshly ground black pepper"
    ],
    steps: [
      "Heat oven to 425 degrees. In a large bowl, combine all of the ingredients and use your hands to gently mix.",
      "Shape the meat into 12 golf-ball-size rounds (about 2 inches in diameter), and arrange on a greased rimmed baking sheet.",
      "Bake until golden and cooked through, about 15 minutes. Serve warm."
    ]
  },
  {
    cuisine: "asian", name: "Butter Chicken",
    servings: "Serves 6", tags: ["chicken", "indian", "curry", "butter chicken", "creamy", "marinated", "garam masala", "weekend"],
    ingredients: [
      "1½ cups full-fat Greek yogurt",
      "2 tablespoons lemon juice",
      "1½ tablespoons ground turmeric",
      "2 tablespoons ground cumin",
      "1 tablespoon garam masala",
      "3 pounds chicken thighs, on the bone",
      "¼ pound unsalted butter",
      "4 teaspoons neutral oil, like vegetable or canola",
      "2 medium yellow onions, peeled and diced",
      "4 cloves garlic, peeled and minced",
      "3 tablespoons fresh ginger, peeled and grated or finely diced",
      "1 tablespoon cumin seeds",
      "1 cinnamon stick",
      "2 medium tomatoes, diced",
      "2 red chiles (like Anaheim), or 1 jalapeño, seeded and diced",
      "Kosher salt, to taste",
      "⅔ cup chicken stock, low-sodium or homemade",
      "1½ cups cream",
      "1½ teaspoons tomato paste",
      "3 tablespoons ground almonds, or finely chopped almonds (optional)",
      "½ bunch cilantro leaves, stems removed"
    ],
    steps: [
      "Whisk together the yogurt, lemon juice, turmeric, cumin and garam masala in a large bowl. Put the chicken in and coat with the marinade. Cover and refrigerate (for up to a day).",
      "In a large pan over medium heat, melt the butter in the oil until it starts to foam. Add the onions and cook, stirring frequently, until translucent. Add the garlic, ginger and cumin seeds, and cook until the onions start to brown.",
      "Add the cinnamon stick, tomatoes, chiles and salt, and cook until the chiles are soft, about 10 minutes.",
      "Add the chicken and marinade to the pan and cook for 5 minutes, then add the chicken stock. Bring to a boil, then lower the heat and simmer, uncovered, for approximately 30 minutes.",
      "Stir in the cream and tomato paste, and simmer until the chicken is cooked through, approximately 10 to 15 minutes.",
      "Add the almonds, if using, cook for an additional 5 minutes, and remove from the heat. Garnish with the cilantro leaves. Serve with basmati rice and naan."
    ]
  },
  {
    cuisine: "asian", name: "Microwave-Steamed Eggs",
    servings: "Serves 2", tags: ["eggs", "steamed", "korean", "gyeran jjim", "fast & easy", "microwave", "light", "savory"],
    ingredients: [
      "2 large eggs",
      "1 cup instant or kombu dashi, vegetable or chicken broth, or water",
      "Pinch of salt",
      "1 teaspoon soy sauce",
      "1 teaspoon maple syrup",
      "1 tablespoon finely snipped chives or scallion greens, for garnish (optional)"
    ],
    steps: [
      "In a medium, microwave-safe shallow cereal bowl, whisk together the eggs, dashi and salt until very well combined, at least 30 seconds. Skim off any bubbles with a spoon or pop them by blowing on them.",
      "Cover the bowl with a microwave-safe plate and microwave at 500 watts (50 percent power on a 1,000-watt microwave) until the eggs have just set and are no longer liquid in the middle, 5 to 7 minutes. (Every machine differs, so check at 5 minutes, then in 30-second intervals after that if needed.)",
      "Let sit in the microwave to cool slightly, then carefully remove, uncover, and drizzle with the soy sauce and maple syrup. Garnish with the chives, if using. Serve immediately."
    ]
  },
  {
    cuisine: "asian", name: "Three-Cup Chicken",
    servings: "Serves 4", tags: ["chicken", "taiwanese", "san bei ji", "wok", "basil", "ginger", "weeknight", "braised"],
    ingredients: [
      "3 tablespoons sesame oil, divided",
      "1 (2-to-3-inch) piece of ginger, peeled and sliced into coins (approximately 12)",
      "12 cloves of garlic, peeled",
      "4 whole scallions, trimmed and cut into 1-inch pieces",
      "3 dried red peppers, or 1 teaspoon red-pepper flakes",
      "2 pounds chicken thighs, boneless or bone-in, cut into bite-size pieces",
      "1 tablespoon unrefined or light brown sugar",
      "½ cup rice wine",
      "¼ cup light soy sauce",
      "2 cups fresh Thai basil leaves or regular basil leaves"
    ],
    steps: [
      "Heat a wok over high heat and add 2 tablespoons of the sesame oil. When the oil shimmers, add the ginger, garlic, scallions and peppers, and cook until fragrant, approximately 2 minutes.",
      "Scrape the aromatics to the sides of the wok, add the remaining oil and allow to heat through. Add the chicken and cook, stirring occasionally, until browned and crisping at the edges, approximately 5 to 7 minutes.",
      "Add the sugar and stir to combine, then add the rice wine and soy sauce and bring just to a boil. Lower the heat, then simmer until the sauce has reduced and started to thicken, approximately 15 minutes.",
      "Turn off the heat, add the basil and stir to combine. Serve with white rice."
    ]
  },
  {
    cuisine: "asian", name: "Black Pepper Beef and Cabbage Stir-Fry",
    servings: "Serves 2 to 4", tags: ["beef", "stir-fry", "cabbage", "black pepper", "weeknight", "fast & easy", "wok", "pantry"],
    ingredients: [
      "1 tablespoon whole black peppercorns, coarsely crushed",
      "3 garlic cloves, grated",
      "2 teaspoons light brown sugar",
      "1 teaspoon cornstarch",
      "Kosher salt",
      "¾ pound sirloin steak, thinly sliced crosswise",
      "3 tablespoons sunflower or other neutral oil",
      "2 tablespoons soy sauce",
      "½ head small green cabbage (about 8 ounces), thinly sliced",
      "1 tablespoon sherry vinegar",
      "1 tablespoon toasted sesame seeds, crushed",
      "2 scallions, thinly sliced",
      "Cooked rice, for serving"
    ],
    steps: [
      "Add the peppercorns, garlic, brown sugar, cornstarch and 1 teaspoon salt to a medium bowl and stir to combine. Add the sliced steak and toss to coat.",
      "Heat the oil in a large cast-iron skillet over medium-high. Add the steak and cook, stirring frequently, until some edges are lightly browned, 3 to 4 minutes. Add the soy sauce and toss to coat, about 1 minute. Using a slotted spoon, transfer the beef to a plate.",
      "Add the cabbage to the skillet, spread in an even layer and let cook, undisturbed, 1 minute so some pieces caramelize. Toss and cook, stirring occasionally, until crisp-tender, 4 to 6 minutes. Stir in the vinegar and season with salt.",
      "Add the steak and any juices back to the skillet and stir until well combined and warmed through, about 1 minute. Top with the sesame seeds and scallions; serve with rice."
    ]
  },
  {
    cuisine: "asian", name: "Coconut Chicken Curry With Cashews",
    servings: "Serves 4 to 6", tags: ["chicken", "curry", "coconut", "cashews", "sri lankan", "spiced", "weekend", "from scratch"],
    ingredients: [
      "2 pounds skinless boneless chicken thighs, cut in 3-inch chunks",
      "Salt and pepper",
      "1 tablespoon grated ginger",
      "2 teaspoons grated garlic",
      "¼ teaspoon cloves",
      "¼ teaspoon fennel seeds",
      "¼ teaspoon cardamom seeds",
      "¼ teaspoon allspice berries",
      "¼ teaspoon cumin seeds",
      "¼ teaspoon coriander seeds",
      "¼ teaspoon turmeric",
      "¼ teaspoon cayenne, or more to taste",
      "3 tablespoons lemon juice",
      "¾ cup raw cashews, divided",
      "¼ cup shredded dried unsweetened coconut",
      "1 pound small parsnips, peeled and cut in 2-inch batons (optional)",
      "2 tablespoons ghee, coconut oil or vegetable oil",
      "1½ cups finely diced onion",
      "1 tablespoon tomato paste",
      "1 (2-inch) piece cinnamon stick",
      "3 cups chicken broth or water",
      "1 cup thick coconut milk",
      "A few sprigs mint and cilantro, for garnish (optional)"
    ],
    steps: [
      "Season the chicken generously with salt and pepper in a mixing bowl. Add the ginger and garlic and massage into the meat. In a dry skillet over medium heat, toast the cloves, fennel, cardamom, allspice, cumin and coriander until fragrant, about 2 minutes. Grind to a fine powder in a spice mill and add to the chicken. Add the turmeric, cayenne and lemon juice and mix well. Marinate at room temperature at least 15 minutes (or refrigerate up to 1 hour).",
      "Heat the oven to 375 degrees. Roast the cashews on a baking sheet until lightly browned, 8 to 10 minutes; set aside. Toast the shredded coconut on the sheet until lightly browned, about 5 minutes; let cool. Grind the coconut with ¼ cup of the cashews to a rough powder. Reserve ½ cup roasted cashews for garnish.",
      "Bring a small saucepan of lightly salted water to a simmer, add the parsnips (if using) and cook until tender, about 10 minutes. Drain and cool.",
      "In a wide heavy-bottomed pot, heat the ghee over medium-high. Sauté the parsnips until lightly browned; remove and reserve. Add the chicken and cook, stirring, until lightly browned, about 5 minutes; remove and set aside. Add the onion and cook until softened, about 5 minutes. Add the tomato paste and let it sizzle a minute or two. Add the broth and bring to a brisk simmer, scraping up any caramelized bits. Add the cinnamon stick, chicken and the ground coconut-cashew mixture. Lower to a gentle simmer, cover and cook about 30 minutes, until the chicken is tender.",
      "Stir in the coconut milk and add the reserved parsnips. Cook 3 to 4 minutes, until heated through and slightly thickened. Transfer to a serving bowl and sprinkle with the reserved cashews. Garnish with mint and cilantro, if using."
    ]
  },
  {
    cuisine: "asian", name: "Sesame Chicken With Cashews and Dates",
    servings: "Serves 4 to 6", tags: ["chicken", "stir-fry", "sesame", "cashews", "dates", "wok", "fast & easy", "weeknight"],
    ingredients: [
      "4 tablespoons toasted (Asian) sesame oil, divided",
      "1 (2-inch) piece fresh ginger, peeled and cut into about 12 coins",
      "6 to 8 garlic cloves, peeled and smashed",
      "1 bunch scallions (white and green parts), cut into 2-inch lengths",
      "3 to 4 dried red chiles, or ½ teaspoon chile flakes",
      "2 pounds boneless chicken thighs (skin on preferred), cut into 2-inch chunks",
      "Salt and pepper",
      "½ cup toasted cashews",
      "⅓ cup rice wine or dry sherry",
      "3 tablespoons dark soy sauce or tamari",
      "4 pitted dates, thinly sliced",
      "3 cups fresh basil or cilantro leaves (or a combination)",
      "Rice vinegar or lime juice, to taste",
      "Cooked rice, for serving"
    ],
    steps: [
      "Season the chicken with salt and pepper while you heat a 12-inch skillet or wok over high heat until very hot, at least 2 minutes. Add 2 tablespoons of the sesame oil and swirl. When hot, add the ginger, garlic, scallions and chile. Stir-fry until the garlic is golden at the edges, 2 to 3 minutes.",
      "Add the remaining 2 tablespoons oil, the chicken and cashews, and stir-fry until it starts to brown, 4 to 5 minutes (lower the heat if the cashews brown too fast). Add the rice wine, soy sauce and dates; simmer until the sauce reduces to a syrupy consistency and the chicken is cooked through, 5 to 7 minutes.",
      "Stir in the basil or cilantro, sprinkle with rice vinegar or lime juice, and serve over rice."
    ]
  },
  {
    cuisine: "asian", name: "Sticky Coconut Chicken and Rice",
    servings: "Serves 4", tags: ["chicken", "rice", "coconut", "one-pot", "cashews", "weeknight", "comfort", "baked"],
    ingredients: [
      "1½ pounds boneless, skinless chicken thighs, each cut into 2 equal pieces",
      "¼ cup neutral oil, such as safflower or canola, divided",
      "2 teaspoons kosher salt, divided",
      "½ teaspoon black pepper, divided",
      "2 tablespoons minced fresh ginger",
      "1 tablespoon minced garlic",
      "1½ cups short-grain white rice, rinsed until the water runs clear",
      "1¾ cups low-sodium chicken broth",
      "1 (13.5-ounce) can full-fat coconut milk",
      "1 yellow bell pepper, cored, seeded and chopped (½-inch pieces)",
      "½ cup roasted cashews, coarsely chopped",
      "3 scallions, green and white parts, thinly sliced (½ packed cup)",
      "2 tablespoons coarsely chopped cilantro",
      "Hot sauce, for serving"
    ],
    steps: [
      "Heat the oven to 375 degrees. Rub the chicken with 1 tablespoon of the oil and season with 1 teaspoon salt and ¼ teaspoon pepper.",
      "In a large Dutch oven, heat 2 tablespoons of the oil over medium. Working in two batches, brown the chicken, turning halfway, until no longer pink, about 5 minutes per batch. Transfer to a plate.",
      "Add the remaining 1 tablespoon oil, the ginger and garlic to the empty pot and stir until fragrant, 30 seconds. Add the rice and stir until coated. Add the broth, coconut milk, bell pepper, cashews, scallions and the remaining 1 teaspoon salt and ¼ teaspoon pepper. Stir to lift up any browned bits. Arrange the chicken on top, add any accumulated juices, and bring to a boil over high.",
      "Cover and bake until all the liquid is absorbed, the rice is tender and the chicken is cooked through, 25 minutes. Scatter the cilantro over the top, divide among bowls, and serve with hot sauce."
    ]
  },
  {
    cuisine: "asian", name: "Turmeric-Black Pepper Chicken With Asparagus",
    servings: "Serves 4", tags: ["chicken", "stir-fry", "turmeric", "black pepper", "asparagus", "fast & easy", "weeknight", "15-minute"],
    ingredients: [
      "3 tablespoons honey",
      "¾ teaspoon black pepper, plus more to taste",
      "Kosher salt",
      "2 tablespoons all-purpose flour",
      "1½ teaspoons ground turmeric",
      "1 pound boneless, skinless chicken thighs, cut into 1-inch pieces",
      "1 tablespoon coconut or canola oil",
      "12 ounces asparagus, trimmed and thinly sliced on an angle",
      "1 teaspoon unseasoned rice vinegar or soy sauce",
      "1 lime, cut into wedges (optional)"
    ],
    steps: [
      "In a small bowl or measuring cup, stir together ¼ cup water with the honey, pepper and ½ teaspoon salt; set the honey mixture aside.",
      "In a medium bowl, stir together the flour, turmeric and 1 teaspoon salt. Add the chicken and toss until coated.",
      "In a medium (10-inch) nonstick skillet, heat the oil over medium-high. Add the chicken and cook until the turmeric is fragrant and the chicken is golden brown on both sides, 2 to 3 minutes per side.",
      "Add the asparagus, season with salt, stir to combine and cook until crisp-tender, 1 to 2 minutes.",
      "Add the honey mixture and cook, stirring, until the chicken is cooked through and the sauce has thickened, 2 to 3 minutes.",
      "Remove from the heat and stir in the vinegar. Season to taste with salt and pepper. Serve with lime squeezed over the top, if you like."
    ]
  },

  // ——— Comfort Classics ———
  {
    cuisine: "comfort", name: "Sloppy Joes",
    servings: "Serves 4–6", tags: ["beef", "slow-cooker", "sandwich", "make-ahead", "heirloom", "kid-friendly", "tailgate", "game-day"],
    ingredients: [
      "1½ lbs. lean ground beef",
      "1 small onion, minced",
      "2 stalks celery, minced",
      "1 (12-oz.) bottle chili sauce*",
      "2 tbs. brown sugar",
      "1 tbs. Worcestershire sauce",
      "1 tsp. salt",
      "2 tbs. sweet pickle relish",
      "1/8 tsp. pepper",
      "Toasted hamburger buns or French rolls, for serving"
    ],
    steps: [
      "In a large skillet or slow-cooking pot with browning unit, cook the beef with the onion and celery until the meat loses its red color. Pour off excess fat.",
      "In a slow-cooking pot, combine the meat, onion, and celery with the remaining ingredients. Cover and cook on low for 3 to 4 hours.",
      "Spoon over toasted hamburger buns or French rolls. (Recipe may be doubled and the mixture kept warm in the slow-cooking pot for an after-the-game party.)",
      "*Bottled tomato sauce similar to catsup may be substituted for chili sauce."
    ]
  },
  {
    cuisine: "comfort", name: "Crock-Pot Cube Steak",
    servings: "Serves 4", tags: ["beef", "slow-cooker", "low & slow", "gravy", "egg noodles", "comfort"],
    ingredients: [
      "2 lb. cube steak (about 4 pieces)",
      "2 tsp. kosher salt",
      "1 1/2 tsp. freshly ground black pepper",
      "2 tsp. garlic powder",
      "2 large yellow onion, sliced into 1/4\" rings",
      "1 (2-oz.) packet onion soup mix",
      "1 cup low-sodium beef broth",
      "1/4 cup cold water",
      "2 Tbsp. cornstarch",
      "Buttered egg noodles, for serving"
    ],
    steps: [
      "Season the steaks with salt and pepper. Add to the slow cooker along with the garlic powder, onion, onion soup mix, and beef broth.",
      "Set the slow cooker to LOW for 8 hours.",
      "1 hour before you're ready to serve, mix the cold water and cornstarch in a small bowl and stir into the slow cooker. Cook on HIGH until the gravy has thickened, stirring periodically.",
      "Serve over buttered egg noodles, and garnish with more pepper."
    ]
  },
  {
    cuisine: "comfort", name: "Stuffed Pepper Casserole",
    servings: "Serves 6–8", tags: ["beef", "stuffed peppers", "baked", "one-pan", "cheesy", "tex-mex"],
    ingredients: [
      "2 Tbsp. extra-virgin olive oil",
      "1 lb. (80%) lean ground beef",
      "2 bell peppers, any color, chopped into 1\" pieces",
      "1 large yellow onion, chopped into 1\" pieces",
      "3 cloves garlic, thinly sliced",
      "2 tsp. kosher salt",
      "1 tsp. freshly ground black pepper",
      "1 tsp. ground cumin",
      "1 tsp. smoked paprika",
      "1/2 tsp. dried oregano",
      "1 (6-oz.) can tomato paste",
      "1 (14.5-oz.) can fire-roasted diced tomatoes",
      "1 1/2 cups beef broth",
      "1 cup basmati rice",
      "2 cups shredded pepper Jack cheese (about 8 oz.)",
      "1 Tbsp. finely chopped fresh cilantro"
    ],
    steps: [
      "Preheat oven to 350°. In a large Dutch oven over medium heat, heat oil. When the oil is shimmering, add the ground beef and cook, breaking it apart with a wooden spoon and stirring occasionally, until cooked through, 4 to 6 minutes.",
      "Stir in the peppers, onion, garlic, salt, pepper, cumin, paprika, and oregano. Cook, stirring occasionally, until the spices are fragrant, about 1 minute. Stir in the tomato paste and cook, stirring, until fragrant, about 2 minutes.",
      "Add the tomatoes, broth, and rice. Stir until incorporated, scraping up any browned bits from the bottom of the pot. Increase heat to high and bring to a boil. Immediately cover and transfer to the oven. Bake until the rice is tender, 20 to 24 minutes. Remove from oven and set the broiler to high.",
      "Stir once more, then top with the cheese. Return to the oven, uncovered, and broil until the cheese is golden brown and bubbly, 3 to 4 minutes. Top with cilantro."
    ]
  },
  {
    cuisine: "comfort", name: "Pot Roast with Carrots & Potatoes",
    servings: "Serves 4–8", tags: ["sunday dinner", "low & slow"],
    ingredients: [
      "3–5 lb chuck roast, trimmed of excess fat",
      "3 tbs olive oil",
      "6 garlic cloves, peeled",
      "3 cups beef consommé/broth",
      "2 tbs Worcestershire sauce",
      "3 tbs dry minced onions",
      "2 tbs beef bouillon powder",
      "1 tsp onion powder",
      "1 tsp garlic powder",
      "1 tsp salt",
      "½ tsp pepper",
      "1 bay leaf",
      "Carrots",
      "Whole or halved new or baby potatoes",
      "4 tbs butter",
      "¼ cup flour"
    ],
    steps: [
      "Preheat oven to 425°.",
      "Heat olive oil over high in a large heavy-bottom skillet. Sear meat on all sides until lightly browned. Transfer to a shallow roasting pan. Add whole garlic cloves into crevices. Add carrots and potatoes around the roast.",
      "In a medium bowl, whisk together remaining roast ingredients (not butter or flour) and pour over roast and vegetables.",
      "Cover tightly with foil and roast 30 minutes at 425°.",
      "Turn roast over, re-cover, and TURN DOWN OVEN to 300°. Continue to roast 3–5 hours more, until fall-apart tender.",
      "In a small saucepan, melt butter over medium heat. Sprinkle in flour and whisk to create a roux. Slowly stir in 2 cups roast juices and bring gravy to a simmer until thickened."
    ]
  },
  {
    cuisine: "comfort", name: "Shepherd's Pie",
    servings: "Serves 4", tags: ["baked", "cozy"],
    ingredients: [
      "2 lbs potatoes (about 3 large) peeled and quartered",
      "8 tbs butter",
      "1 medium onion, chopped",
      "2 cups diced carrots and frozen petite peas",
      "1½ lbs ground round beef",
      "½ cup beef broth",
      "1 tsp Worcestershire sauce",
      "Salt and pepper to taste",
      "2 tbs milk"
    ],
    steps: [
      "Preheat oven to 400°.",
      "Place peeled and quartered potatoes in a medium pot. Bring to boil, reduce to simmer, and cook until tender, about 20 minutes.",
      "In a large skillet melt 4 tbs butter over medium heat. Add onions, carrots and peas. Cook until tender, about 5 minutes.",
      "Add ground beef to vegetables and cook until no longer pink. Drain.",
      "Add salt and pepper to taste. Stir in Worcestershire sauce and beef broth. Simmer uncovered for 10 minutes.",
      "Mash cooked potatoes with the remaining 4 tbs butter and 2 tbs milk.",
      "Layer meat mixture in an 8×13 casserole dish. Spread mashed potatoes over top and rough up the surface to create peaks.",
      "Bake 30 minutes, or until browned and bubbly. Broil for the last few minutes to brown the potatoes."
    ]
  },
  {
    cuisine: "comfort", name: "Shepherd's Pie (Beef & Lamb)",
    servings: "Serves 6", tags: ["lamb", "beef", "mashed potatoes", "baked", "british", "cozy", "sunday dinner"],
    ingredientGroups: [
      { title: "For the mashed potatoes", items: [
        "2 tablespoons kosher salt, plus more for seasoning",
        "2½ pounds (about 3 to 4 large) russet potatoes, peeled and quartered",
        "8 tablespoons unsalted butter",
        "½ cup whole milk",
        "1 cup shredded aged white Cheddar",
        "Freshly ground black pepper"
      ]},
      { title: "For the filling", items: [
        "1 small yellow onion, diced small (about 1¼ cups)",
        "2 medium carrots, peeled and diced small (about 1¼ cups)",
        "4 cloves garlic, minced",
        "4 sprigs fresh thyme",
        "2 4-inch sprigs fresh rosemary",
        "¾ pound lean ground beef",
        "¾ pound ground lamb (or use all ground beef)",
        "⅓ cup tomato paste",
        "1 tablespoon all-purpose flour",
        "¾ cup beef stock",
        "1 cup fresh parsley, chopped"
      ]}
    ],
    steps: [
      "In a large pot, bring a gallon of water and 2 tablespoons salt to a boil over high heat. Add potatoes to boiling water and boil for about 15 to 20 minutes, until soft; a knife should go in with almost no resistance.",
      "In a small saucepan or a microwave oven, heat 6 tablespoons of the butter and milk together until butter melts. Drain potatoes well and return to pot. Using a masher or a ricer, mash hot potatoes until smooth. Mix in the hot butter mixture, just until blended. Stir in the Cheddar. Season to taste with salt and pepper. Cover and set aside.",
      "Heat the oven to 375 degrees. Melt the remaining 2 tablespoons of the butter in a large oven-safe skillet with high sides or an enameled cast-iron braiser (at least 2½-quart capacity) over medium heat. Add the onion, carrot, garlic, thyme and rosemary and cook, stirring often with a wooden spoon, until the onions are translucent and the carrots are just tender, about 10 minutes. Add the beef and the lamb and cook, breaking the meat up with a spoon, until it is no longer pink. (At this point, you can drain off some of the excess fat if you like.) Season the mixture to taste with salt and pepper.",
      "Add the tomato paste and stir, cooking until it is well combined, another 2 to 3 minutes. Sprinkle the flour over the mixture and cook for 1 minute. Add the beef stock and cook, stirring, until the liquid has thickened slightly. Stir in the parsley and remove the thyme and rosemary stems. Season to taste with salt and pepper.",
      "Top the meat mixture with dollops of the mashed potatoes then spread them out over the top. (Or transfer the meat mixture to a 3-quart casserole dish and spread into an even layer, and top with potatoes.) Transfer to the oven and, if the mixture is at the top edges of your pan, set a foil-lined baking sheet underneath the pan to catch any drips. Bake the pie until the potatoes have begun to brown and the edges are bubbling, about 30 minutes. Let stand at room temperature for 15 minutes before serving."
    ]
  },
  {
    cuisine: "comfort", name: "Goulash",
    servings: "Serves 6", tags: ["one-pan", "fast & easy"],
    ingredients: [
      "½ onion, chopped",
      "½ green pepper, chopped",
      "1 lb ground beef",
      "1 tsp garlic",
      "8 oz can tomato sauce",
      "14.5 oz can petite diced tomatoes",
      "14.5 oz can beef broth",
      "1 tbs Worcestershire sauce",
      "1 tsp salt",
      "1 tbs Italian seasoning",
      "1 bay leaf",
      "1½ cups dried macaroni noodles"
    ],
    steps: [
      "Over medium heat, cook onion and pepper. Add ground beef and cook until no longer pink. Drain. Add garlic.",
      "Pour in tomato sauce, diced tomatoes, beef broth, Worcestershire sauce, salt, Italian seasoning, bay leaf and macaroni. Bring to boil, reduce heat and simmer 20 minutes or until pasta is tender.",
      "Remove bay leaf and serve."
    ]
  },
  {
    cuisine: "comfort", name: "Chicken Pot Pie",
    servings: "Serves 8", tags: ["pie", "homestyle"],
    ingredients: [
      "1 lb skinless, boneless chicken breast halves",
      "1 cup sliced carrots",
      "1 cup frozen green peas",
      "½ cup chopped celery",
      "⅓ cup butter",
      "⅓ cup chopped onion",
      "⅓ cup flour",
      "½ tsp salt",
      "¼ tsp pepper",
      "¼ tsp celery seed",
      "1¾ cups chicken broth",
      "⅔ cup milk",
      "2 (9-inch) deep-dish unbaked pie crusts, frozen"
    ],
    steps: [
      "Preheat oven to 425°.",
      "In a saucepan, combine chicken, carrots, peas and celery. Add water to cover and boil 15 minutes. Remove from heat, drain, shred chicken, and set aside.",
      "In a saucepan over medium heat, cook onions in butter until soft. Stir in flour, salt, pepper and celery seed. Slowly stir in chicken broth and milk. Simmer over medium-low until thick. Remove from heat.",
      "Place chicken mixture in the bottom of pie crust. Pour hot liquid mixture over. Cover with top crust, seal edges, and cut away excess dough. Make several small slits in top.",
      "Bake 30–35 minutes or until pastry is golden brown and filling is bubbly. Cool 10 minutes before serving."
    ]
  },
  {
    cuisine: "comfort", name: "Grandma's Meatloaf",
    servings: "Family-sized", tags: ["heirloom", "comforting"],
    ingredients: [
      "2 lbs ground chuck",
      "1 medium white onion, finely chopped",
      "1 green pepper, finely chopped",
      "3 carrots, finely chopped",
      "2 eggs",
      "⅓ cup milk",
      "Italian bread crumbs",
      "Salt and pepper to taste",
      "2 cans tomato soup"
    ],
    steps: [
      "Preheat oven to 350°.",
      "In a large bowl, combine chopped onion, green pepper and carrots with the meat. Add salt and pepper.",
      "In a small bowl, beat eggs and add to meat mixture. Add milk.",
      "Add enough bread crumbs so that the mixture is moldable but not firm. Shape into a long loaf.",
      "In a saucepan, heat soup with 1 can of water.",
      "Place loaf in roasting pan and pour soup over top. Cover with foil and bake 45 minutes.",
      "Divide loaf in half, recover, and cook an additional 30 minutes."
    ]
  },
  {
    cuisine: "comfort", name: "Beef Stroganoff",
    servings: "Family-sized", tags: ["creamy", "classic"],
    ingredients: [
      "1 lb beef tips",
      "4 oz butter",
      "1 onion, chopped",
      "10.5 oz can condensed beef broth",
      "2 tsp mustard",
      "⅓ cup heavy whipping cream or sour cream",
      "2 tbs flour",
      "Sliced mushrooms",
      "Pepper to taste",
      "Egg noodles"
    ],
    steps: [
      "Cut beef into strips. Melt butter and brown beef, then drain. Add onions and cook 3 minutes.",
      "Add broth and bring to boil. Add mustard. Reduce heat, cover and simmer 30 minutes.",
      "Add cream, flour, mushrooms, and pepper to taste. Serve over cooked egg noodles."
    ]
  },
  {
    cuisine: "comfort", name: "Baked Chicken with Potatoes",
    servings: "Family-sized", tags: ["one-pan", "rustic"],
    ingredients: [
      "3–3½ lbs chicken breasts",
      "1 lb white new potatoes, cut into quarters or halves",
      "1 large red onion, cut into eighths",
      "1 head garlic, peeled and cloves separated",
      "6 sprigs fresh thyme",
      "1 lemon, cut into quarters",
      "¼ cup olive oil",
      "2 tbs balsamic vinegar",
      "Salt and pepper to taste"
    ],
    steps: [
      "Preheat oven to 450°.",
      "In a 12×16 roasting pan, arrange chicken, potatoes, onion, garlic, thyme and lemon.",
      "In a separate bowl, whisk together oil, vinegar, salt and pepper. Drizzle over chicken and vegetables.",
      "Roast 30 minutes or until chicken is browned and cooked through.",
      "Before serving, remove garlic and thyme sprigs. Remove lemons but drizzle their juice over the chicken."
    ]
  },
  {
    cuisine: "comfort", name: "BBQ Baby Back Ribs",
    servings: "Serves 4", tags: ["baked", "saucy"],
    ingredients: [
      "4 lbs pork back ribs (1 lb per person)",
      "1 cup orange juice",
      "1½ cups BBQ sauce",
      "1 clove garlic"
    ],
    steps: [
      "Preheat oven to 300°.",
      "Whisk together BBQ sauce, orange juice and garlic. Pour over ribs, turning to coat both sides.",
      "Cover and bake 3 hours.",
      "Uncover, increase heat to 350° and bake an additional hour, turning once after 30 minutes.",
      "Let stand 15 minutes before serving."
    ]
  },
  {
    cuisine: "comfort", name: "Breakfast Soufflé",
    servings: "Brunch crowd", tags: ["make-ahead", "brunch"],
    ingredients: [
      "1 package bacon",
      "6 slices bread, with crust removed, buttered and cut into cubes",
      "1 cup mushrooms, sliced and diced",
      "1 cup chopped onion",
      "3 cups cheddar cheese",
      "6 eggs, beaten",
      "2 cups milk",
      "1 tsp salt"
    ],
    steps: [
      "Preheat oven to 325°. Grease a 9×13 pan.",
      "Cook bacon according to package directions. Set aside to cool.",
      "Line the bottom of the pan with buttered bread cubes.",
      "Sprinkle mushrooms, onion and cheddar over bread. Crumble bacon and sprinkle over cheese.",
      "In a large bowl, beat eggs. Add milk and salt; stir well.",
      "Pour egg mixture over bread, vegetables and cheese. Cover with foil and refrigerate overnight.",
      "Bake covered 1 hour to 1 hour 10 minutes (top should be lightly browned)."
    ]
  },
  {
    cuisine: "comfort", name: "Pierogi and Meatball Skillet",
    servings: "Serves 4", tags: ["pierogi", "meatballs", "beef", "pork", "skillet", "polish", "comfort", "gravy", "cozy"],
    ingredients: [
      "½ cup plus ⅓ cup whole milk, divided",
      "⅔ cup panko breadcrumbs",
      "1 large egg",
      "2 garlic cloves, grated",
      "1½ teaspoons kosher salt, divided",
      "¾ teaspoon ground black pepper, divided",
      "¼ teaspoon ground nutmeg",
      "¼ teaspoon ground allspice",
      "½ pound lean ground beef",
      "½ pound ground pork",
      "3 tablespoons salted butter, divided",
      "1 (16-ounce) box frozen pierogies",
      "2 tablespoons olive oil",
      "½ yellow onion, chopped",
      "2 tablespoons all-purpose flour",
      "1½ cups beef broth",
      "1 teaspoon Worcestershire sauce",
      "1 teaspoon Dijon mustard",
      "2 tablespoons chopped fresh parsley or dill, to serve"
    ],
    steps: [
      "In a large bowl, combine ⅓ cup of the milk and the panko breadcrumbs. Let them sit until the milk is absorbed, about 5 minutes.",
      "To the breadcrumb mixture, add the egg, garlic, 1 teaspoon of the salt, ½ teaspoon of the pepper, the nutmeg, and the allspice; mix well. Add the ground beef and ground pork and mix until thoroughly combined. Form into about 20 meatballs (a 1½-tablespoon scoop works well).",
      "In a large skillet, melt 1 tablespoon of the butter over medium heat. Add the pierogies and 2 tablespoons of water; cover and steam until the pierogies are softened, 2 to 3 minutes. Remove the lid and let the pierogies pan-fry until lightly golden, 1 to 2 minutes. Remove them to a plate.",
      "In the same skillet over medium heat, add the olive oil and heat until shimmering. Add the meatballs in a single layer and fry, turning to cook evenly, until deeply golden and fully cooked, 7 to 9 minutes. Transfer to a plate and pour off any excess grease.",
      "In the same skillet, melt the remaining 2 tablespoons of butter over medium heat. Add the onion and cook until soft and golden, 4 to 6 minutes. Sprinkle in the flour and cook, stirring frequently, until the raw flour smell disappears, 1 to 2 minutes. Whisking constantly, slowly add the beef broth and the remaining ½ cup of milk. Whisk in the remaining ½ teaspoon of salt and ¼ teaspoon of pepper. Simmer until the sauce thickens slightly, 2 to 3 minutes. Reduce the heat to low and whisk in the Worcestershire and Dijon mustard.",
      "Add the pierogies and meatballs back to the skillet, along with any juices, stirring gently to coat them in the sauce and heat through. Sprinkle with parsley or dill to serve."
    ]
  },
  {
    cuisine: "comfort", name: "Twice-Cooked Pork Tenderloin",
    servings: "Serves 4", tags: ["pork", "tenderloin", "pan sauce", "30-minute", "weeknight", "fast & easy"],
    ingredients: [
      "1 boneless pork tenderloin, about 1 pound",
      "Salt and freshly ground black pepper",
      "4 tablespoons butter, extra virgin olive oil, or a combination",
      "¼ cup cream",
      "1 tablespoon Dijon mustard, lemon juice or Calvados, optional",
      "Chopped fresh parsley leaves for garnish, optional"
    ],
    steps: [
      "Sprinkle meat with salt and pepper. Put a large skillet over medium-high heat; a minute later add 2 tablespoons butter and/or oil. When butter foam subsides or oil dimples, add meat (curve it into skillet if necessary). Brown it well on all sides, for a total of 4 to 6 minutes. Turn off heat, remove meat from pan, and let it sit on a board. When skillet has cooled a bit, proceed.",
      "Cut meat into inch-thick slices. Once again turn heat to medium-high, add remaining butter and/or oil and, when it's hot, add pork slices to pan. Brown on each side, about 2 or 3 minutes each. Turn heat to low and remove meat to a warm platter.",
      "Add ½ cup water to pan, turn heat to high, and cook, stirring and scraping, for a minute. Lower heat slightly, add cream and cook until slightly thickened. Stir in mustard, lemon juice or Calvados, if you're using them, then taste and adjust seasoning. Serve meat with sauce spooned on top, garnished, if you like, with parsley."
    ]
  },
  {
    cuisine: "comfort", name: "Cottage Pie",
    servings: "Serves 6–8", tags: ["beef", "cottage pie", "mashed potatoes", "baked", "british", "cozy", "sunday dinner"],
    ingredientGroups: [
      { title: "For the filling", items: [
        "2 pounds ground beef",
        "Salt and pepper",
        "2 tablespoons salted butter",
        "1 medium white or yellow onion, diced, about 1 cup",
        "2 celery stalks, finely chopped, about ½ cup",
        "1 medium carrot, peeled and finely chopped, about ½ cup",
        "3 garlic cloves, minced",
        "2 tablespoons tomato paste",
        "¼ cup all-purpose flour",
        "2 cups beef broth",
        "½ cup dry red wine (or water)",
        "½ cup frozen peas",
        "2 tablespoons Worcestershire sauce",
        "4 thyme sprigs",
        "2 dried bay leaves"
      ]},
      { title: "For the topping", items: [
        "Salt",
        "2½ pounds russet potatoes, peeled and cut into 1-inch cubes",
        "½ cup whole milk",
        "5 tablespoons salted butter, melted",
        "¾ cup grated Parmesan (about 1½ ounces)"
      ]}
    ],
    steps: [
      "Heat the oven to 350 degrees.",
      "Prepare the filling: Heat an ovenproof 12-inch skillet over medium. Add ground beef and a large pinch of salt and cook, breaking up the meat as you go, until slightly pink and just cooked through, 5 to 7 minutes. Using a slotted spoon, transfer the ground beef to a bowl and set aside. Leave about a teaspoon of fat in the pan and discard the rest.",
      "To the same skillet, add butter, onion, celery and carrot and a pinch of salt. Cook, stirring occasionally, until the onion is translucent and the carrot is just tender, about 5 minutes. Add the garlic and tomato paste, stirring to coat, about 1 minute. Add flour and stir to incorporate.",
      "Add broth, red wine, peas, Worcestershire sauce, thyme sprigs, bay leaves and 1 teaspoon each salt and pepper. Stir to combine, then bring to a simmer and cook, stirring occasionally, until the consistency of thick gravy, 7 to 10 minutes. Taste and add extra seasoning, if needed. Remove the bay leaves and thyme sprigs and stir in the ground beef. Remove from heat and set aside to cool slightly.",
      "Make the topping: To a large saucepan, add 4 quarts of water and 2 tablespoons of salt and bring to a boil. Add potatoes and cook until knife-tender, about 15 minutes. Drain the potatoes and put back into the saucepan. Add the milk, 4 tablespoons butter and ½ cup grated Parmesan. Mash with a potato masher until just creamy, avoiding over-mashing. Taste and add salt if needed.",
      "Dollop the mashed potatoes on top of the beef mixture in the skillet, carefully smoothing the mashed potatoes until it fully covers the beef mixture and reaches the edge of the pan. Drizzle the remaining 1 tablespoon of butter over the top, sprinkle with remaining ¼ cup grated Parmesan and bake in the oven until golden and bubbly, about 30 minutes. Let stand for 10 minutes before serving."
    ]
  },
  {
    cuisine: "comfort", name: "Stuffed Peppers",
    servings: "Serves 6–8", tags: ["stuffed peppers", "beef", "baked", "cheesy", "peppers", "italian"],
    ingredients: [
      "4 large red, orange or yellow bell peppers",
      "2 tablespoons olive oil",
      "1 cup finely chopped fennel bulb (about ½ a small bulb) or celery",
      "1 cup finely chopped yellow onion (about 1 small)",
      "3 garlic cloves, minced",
      "1 teaspoon dried oregano",
      "½ teaspoon red-pepper flakes",
      "1 pound ground beef (at least 15 percent fat), turkey, chicken or pork",
      "¾ cup dry white wine, chicken broth or vegetable broth",
      "1 (14-ounce) can diced fire-roasted tomatoes",
      "1½ teaspoons kosher salt, plus more to taste",
      "½ teaspoon black pepper, plus more to taste",
      "1 cup cooked white or brown rice",
      "¼ cup grated Parmesan",
      "2 tablespoons minced fresh parsley, plus more for serving (optional)",
      "1 cup shredded mozzarella, provolone or other semifirm cheese"
    ],
    steps: [
      "Heat the oven to 400 degrees. Cut the peppers in half lengthwise and carefully remove core, seeds and ribs using a paring knife. Arrange the peppers, cut-sides up, in a 9-by-13-inch pan or other baking dish in which they fit snugly.",
      "In a large (12-inch) skillet, heat the olive oil over medium. Add the fennel and onions and cook, stirring occasionally, until tender, 6 to 8 minutes. Stir in the garlic, oregano and red-pepper flakes, and cook until the garlic is fragrant, about 1 minute.",
      "Add the beef and cook, breaking up the meat with a wooden spoon, for 3 to 5 minutes, until no longer pink.",
      "Add ½ cup wine, increase the heat to medium-high and cook, scraping the bottom of the pan, until the liquid in the pan is reduced by about half.",
      "Add the tomatoes and their juices, salt and pepper, and bring to a boil. Remove from the heat and stir in the rice, Parmesan and parsley, if using. Taste and adjust seasonings.",
      "Divide the mixture among the peppers. Pour the remaining ¼ cup wine into the bottom of the dish.",
      "Wrap tightly with foil and bake for 35 to 40 minutes, until a paring knife easily pierces the peppers.",
      "Remove the foil and spoon any juices that have accumulated in the bottom of the pan onto the peppers.",
      "Sprinkle the mozzarella evenly onto the peppers and bake another 10 to 15 minutes, until the mozzarella is melted and beginning to brown. Allow the peppers to cool for 5 minutes, sprinkle with parsley, if using, and serve hot."
    ]
  },
  {
    cuisine: "comfort", name: "Smashed Beef Kebab With Cucumber Yogurt",
    servings: "Serves 4", tags: ["beef kebab", "yogurt", "skillet", "crispy", "weeknight", "middle eastern"],
    ingredients: [
      "2 cups full-fat or low-fat Greek yogurt (about 16 ounces)",
      "2 mini cucumbers (about ½ pound), grated on the large holes of a box grater",
      "3 tablespoons finely chopped mint, plus mint leaves for serving",
      "1 large garlic clove, finely grated",
      "1 pound ground beef (preferably 80 percent lean) or ground lamb",
      "1 small yellow onion, grated on the large holes of a box grater",
      "½ teaspoon ground turmeric",
      "2 teaspoons kosher salt (such as Diamond Crystal)",
      "Freshly ground black pepper",
      "¼ cup walnut halves or pieces, or both",
      "2 tablespoons raisins or dried cranberries",
      "Pomegranate molasses, optional, for serving",
      "Warmed pita or white rice, for serving"
    ],
    steps: [
      "Add the yogurt, cucumbers, chopped mint and garlic to a medium bowl. Mix well to combine. Chill until ready to serve.",
      "Add the beef, onion, turmeric, 1 teaspoon of salt and lots of black pepper to a second medium bowl and mix well to combine.",
      "Heat a large well-seasoned cast-iron skillet (or other large heavy-bottomed pan) over medium-high. Once the skillet is very hot, divide beef into large, irregular chunks by using two spoons or your hands and drop into the skillet. Cook, undisturbed, until charred and crisp on the underside and browned at least halfway up the sides, 6 to 8 minutes.",
      "Using a wooden spoon, toss the meat, breaking up any very large pieces. Add the walnuts and raisins and continue to cook, stirring often, until the meat is cooked to desired doneness and the walnuts are toasted, 2 to 3 minutes more.",
      "Remove the yogurt from the fridge and season with the remaining 1 teaspoon of salt. Spread the yogurt on the bottom of a serving platter and top with the crispy meat. Finish with a drizzle of pomegranate molasses, if using, and garnish with mint leaves. Serve with warmed pita or rice."
    ]
  },
  {
    cuisine: "comfort", name: "Swedish Meatballs",
    servings: "Makes about 4 dozen meatballs", tags: ["swedish", "meatballs", "beef", "pork", "gravy", "cozy", "party"],
    ingredients: [
      "1 cup panko bread crumbs",
      "½ cup warm milk",
      "4 tablespoons unsalted butter",
      "1 large onion, diced",
      "2 teaspoons kosher salt, more as needed",
      "1 tablespoon brandy",
      "1½ tablespoons all-purpose flour",
      "1 cup beef or chicken broth, low sodium or homemade",
      "½ cup heavy cream",
      "1 teaspoon Dijon mustard, optional",
      "1 pound ground beef",
      "1 pound ground pork",
      "2 large eggs",
      "2 garlic cloves, grated on a Microplane or minced",
      "½ teaspoon freshly ground black pepper",
      "½ teaspoon allspice",
      "¼ teaspoon ground ginger",
      "¼ teaspoon nutmeg",
      "Pinch cloves",
      "Extra-virgin olive oil, as needed for drizzling",
      "Chopped fresh parsley or dill, for garnish"
    ],
    steps: [
      "In a medium bowl, soak bread crumbs in warm milk while you prepare the onions.",
      "In a large skillet over medium heat, melt 1 tablespoon of butter. Stir in onions and a pinch of salt and cook until pale golden, about 3 to 4 minutes. Transfer half the onions to a large bowl and set aside.",
      "Prepare sauce: Add brandy to skillet with onions and ignite with a long match or igniter (or if you're using a gas stove, just swirl pan, brandy should catch fire). Let flame die down, then add the remaining butter, letting it melt. Sprinkle in flour. Sauté until flour browns, about 3 minutes. Whisk in broth, cream and ¼ teaspoon salt. Simmer, whisking, until reduced to a sauce, about 5 minutes. Add mustard, if you like, and season with more salt, if needed.",
      "To large bowl with onion, add remaining 1¾ teaspoons salt, soaked bread crumbs, beef, pork, eggs, garlic, pepper, allspice, ginger, nutmeg and cloves. Roll into 1-inch balls (about 2 tablespoons each), placing them on one or two rimmed baking sheets as you go.",
      "Heat broiler. Drizzle meatballs with oil. Broil meatballs, switching pans' positions if using more than one so they both get close to the broiler, until well browned all over, 5 to 10 minutes. Serve with gravy, garnished with herbs."
    ]
  },
  {
    cuisine: "comfort", name: "Sloppy Joes (Classic Stovetop)",
    servings: "Serves 6", tags: ["beef", "sandwich", "weeknight", "fast & easy", "stovetop", "kid-friendly", "freezer-friendly"],
    ingredientGroups: [
      { title: "For the Sauce", items: [
        "1 (8-ounce) can tomato sauce",
        "½ cup ketchup",
        "1½ tablespoons Worcestershire sauce",
        "1 teaspoon prepared yellow mustard",
        "½ teaspoon dry mustard",
        "1 teaspoon molasses",
        "1 garlic clove, finely minced",
        "¼ teaspoon orange zest",
        "Pinch of ground cloves",
        "Hot sauce, to taste"
      ]},
      { title: "For the Meat", items: [
        "1 pound ground beef",
        "½ small onion, finely chopped",
        "6 whole-wheat hamburger buns, toasted if desired"
      ]}
    ],
    steps: [
      "In a saucepan over low heat, combine the sauce ingredients. Season to taste with salt and pepper. Mix well and simmer while preparing the meat.",
      "Heat a heavy nonstick or cast-iron skillet, at least 10 inches in diameter, over medium-high heat. Add the ground beef and sauté, stirring occasionally, for 4 to 5 minutes, or until the meat is no longer pink. Turn the meat into a strainer or colander lined with paper towels, allowing the fat to drain off.",
      "Add the onion to the pan and sauté, stirring frequently, for about 5 minutes, or until translucent. Return the meat to the pan and add the sauce. Heat for 3 minutes, stirring occasionally. Taste and season with salt, pepper or more hot sauce. Spoon ½ cup of the mixture over each bun. Serve immediately. (This dish freezes well.)"
    ]
  },
  {
    cuisine: "comfort", name: "Honey-Garlic Chicken",
    servings: "Serves 4", tags: ["chicken", "skillet", "honey", "garlic", "pan sauce", "weeknight", "fast & easy", "30-minute"],
    ingredients: [
      "2 chicken breasts, halved lengthwise, or 4 chicken cutlets (about 1 pound)",
      "Salt and black pepper",
      "2 tablespoons olive oil",
      "2 tablespoons honey",
      "2 tablespoons soy sauce",
      "2 tablespoons apple cider, rice wine or white wine vinegar",
      "3 to 4 large garlic cloves, minced or grated",
      "2 tablespoons unsalted butter",
      "Chopped fresh parsley, for garnish (optional)"
    ],
    steps: [
      "Pat the chicken dry. Season all over with salt and pepper.",
      "Heat the oil in a large (12-inch) skillet over medium-high for 1 to 2 minutes until hot and shimmering. Add the chicken and cook without moving until golden brown on the bottom, about 5 minutes.",
      "Use tongs to flip the chicken and cook until just cooked through, about 4 minutes.",
      "While the chicken cooks on the second side, mix together 3 tablespoons of water, the honey and the soy sauce in a measuring cup.",
      "Transfer the cooked chicken to a plate and set aside.",
      "Pour in the soy sauce mixture and let cook until the liquid reduces, about 1 minute. Add the vinegar, garlic and butter, stirring to melt and incorporate until thick and glossy, about 2 minutes more.",
      "Return the chicken to the pan, leaving behind any accumulated juices on the plate, and turn to coat in the sauce. If the sauce is too thick, add the accumulated juices. Serve immediately, garnishing with parsley, if desired."
    ]
  },
  {
    cuisine: "comfort", name: "Honey-Habanero Pork Chops With Carrots",
    servings: "Serves 4", tags: ["pork", "pork chops", "skillet", "honey", "habanero", "spicy", "weeknight", "30-minute"],
    ingredients: [
      "4 thin (½-inch) boneless pork chops (about 1½ pounds total)",
      "1½ teaspoons paprika",
      "Salt",
      "¼ cup neutral oil, such as grapeseed, divided",
      "4 medium carrots, thinly sliced",
      "1 lime",
      "2 habanero chiles, halved and seeded",
      "¼ cup honey",
      "Chopped cilantro, for serving"
    ],
    steps: [
      "Pat the pork dry and season all over with the paprika and a big pinch of salt. Set aside.",
      "Heat 2 tablespoons oil in a large cast-iron skillet over medium-high. Add the carrots, season with salt, and stir occasionally until crisp-tender and charred in spots, 3 to 5 minutes. Turn off the heat. Scrape the carrots onto a plate and zest the lime over the top. Cut the lime in half.",
      "Heat the remaining 2 tablespoons oil in the skillet over medium-high. Add the pork and the chiles. Cook, pressing the meat with tongs to prevent buckling, until browned, 3 to 4 minutes. Flip and cook until firm to the touch, 1 to 3 minutes. Transfer the pork to the plate (leave the chiles in the skillet).",
      "Reduce the heat to medium-low and add the honey and juice from half the lime. Stir constantly until thickened and dark like maple syrup, 1 to 3 minutes. Turn off the heat, add the pork, carrots and any resting juices back to the skillet. Turn to coat in the glaze. Serve sprinkled with cilantro."
    ]
  },
  {
    cuisine: "comfort", name: "Jalapeño-Orange Pork Tenderloin With Snap Peas",
    servings: "Serves 4 to 6", tags: ["pork", "pork tenderloin", "sheet-pan", "jalapeño", "orange", "snap peas", "weeknight", "citrus"],
    ingredients: [
      "3 tablespoons brown sugar",
      "5 garlic cloves, finely chopped",
      "3 jalapeños, finely chopped (seeds removed, if desired)",
      "1 large orange",
      "Kosher salt and black pepper",
      "2 pork tenderloins (2 to 2½ pounds total), silver skin removed, patted dry",
      "1 lime",
      "2 tablespoons extra-virgin olive oil, divided",
      "½ cup chopped cilantro leaves and stems",
      "1 pound snap peas"
    ],
    steps: [
      "Arrange a rack in the bottom third of the oven and heat to 400 degrees. In a medium bowl, stir together the brown sugar, garlic, jalapeño and the zest of the orange. Season with salt and pepper.",
      "Place the pork tenderloins on a parchment-lined sheet pan and season generously with salt (about 2½ teaspoons) and pepper. Rub the pork all over with about three-quarters of the jalapeño mixture; reserve the rest. Roast until a thermometer inserted into the thickest part registers 140 degrees, 20 to 25 minutes. (The pork will continue to cook as it rests.)",
      "Meanwhile, cut off the top and bottom of the orange and set it on a cut side. Follow the curve of the fruit to cut away the peel and pith, then thinly slice into bite-size pieces. Squeeze the peels into the reserved jalapeño mixture for any juice, then add the orange pieces and any juice. Zest and juice the lime into the mixture, stir in the cilantro and 1 tablespoon olive oil, and season to taste with salt and pepper.",
      "Transfer the pork to a cutting board to rest for at least 5 minutes. Add the snap peas and remaining 1 tablespoon oil to the sheet pan, season with salt and toss to coat. Roast until bright green and plump, 5 to 7 minutes.",
      "Thinly slice the pork and serve with the snap peas, topped with the oranges and plenty of the sauce from the bowl."
    ]
  },
  {
    cuisine: "comfort", name: "One-Pot Chicken and Rice With Caramelized Lemon",
    servings: "Serves 4", tags: ["chicken", "rice", "one-pot", "lemon", "olives", "weeknight", "dutch oven", "mediterranean"],
    ingredients: [
      "4 bone-in, skin-on chicken thighs (about 1½ pounds)",
      "Salt and black pepper",
      "2 teaspoons dried oregano, divided",
      "Crushed red pepper",
      "2 tablespoons extra-virgin olive oil",
      "2 lemons",
      "1 cup pitted Castelvetrano or kalamata olives, smashed and roughly chopped",
      "6 garlic cloves, minced",
      "1 medium shallot or ½ medium onion, minced",
      "2 cups long-grain white rice, rinsed",
      "4 cups (32 ounces) chicken broth",
      "¼ cup roughly chopped fresh parsley, for serving"
    ],
    steps: [
      "Heat the oven to 400 degrees. Use paper towels to pat the chicken thighs dry on all sides. Season the chicken with 1 teaspoon each salt, pepper and dried oregano and a pinch of crushed red pepper.",
      "Place a large Dutch oven or other heavy-bottomed pot over medium-high heat and add the oil. Let the oil heat up for a few minutes. Add the thighs skin side down and let cook undisturbed until they self-release from the bottom of the pot, about 5 minutes. Remove from the pot and set aside.",
      "Cut 1 lemon into ¼-inch-thick slices. Add to the pot and cook until caramelized and softened, about 2 minutes. Remove from the pot and set aside.",
      "Add the olives, garlic, shallot and 1 teaspoon each salt, pepper and dried oregano to the pot. Cook over medium-low heat, scraping up browned bits, until the garlic is fragrant, 2 to 3 minutes. Turn the heat up to high, add the rice and broth, stir to combine, and cover until it comes to a boil, about 5 minutes.",
      "Remove the pot from heat, add the browned chicken thighs on top of the rice, skin side up, then cover the chicken with the lemon slices. Place the pot, covered, into the oven and bake until the rice and chicken are fully cooked, 25 to 30 minutes. Serve topped with fresh parsley and a squeeze of lemon juice from the second lemon."
    ]
  },
  {
    cuisine: "comfort", name: "Creamy Macaroni and Cheese",
    servings: "Serves 6 to 8", tags: ["macaroni and cheese", "cheddar", "baked", "no-boil", "kid-friendly", "comfort", "casserole", "classic"],
    ingredients: [
      "2 tablespoons unsalted butter, divided",
      "1 cup cottage cheese (not low-fat)",
      "2 cups milk (not skim)",
      "1 teaspoon dry mustard",
      "Pinch of ground cayenne",
      "Pinch of ground nutmeg",
      "½ teaspoon kosher salt",
      "¼ teaspoon black pepper",
      "1 pound sharp or extra-sharp Cheddar, grated",
      "½ pound elbow pasta, uncooked"
    ],
    steps: [
      "Heat the oven to 375 degrees and position a rack in the upper third. Use 1 tablespoon butter to grease a 9-inch round or square baking pan.",
      "In a blender, purée the cottage cheese, milk, mustard, cayenne, nutmeg, salt and pepper. Reserve ¼ cup grated Cheddar for topping. In a large bowl, combine the remaining Cheddar, the milk mixture and the uncooked pasta. Pour into the prepared pan, cover tightly with foil and bake 30 minutes.",
      "Uncover the pan, stir gently, sprinkle with the reserved cheese and dot with the remaining tablespoon butter. Bake, uncovered, 30 minutes more, until browned. Let cool at least 15 minutes before serving."
    ]
  },
  {
    cuisine: "comfort", name: "Garlic Braised Short Ribs With Red Wine",
    servings: "Serves 6", tags: ["beef", "short ribs", "braised", "red wine", "do-ahead", "low & slow", "dutch oven", "dinner party"],
    ingredients: [
      "2 tablespoons vegetable oil",
      "5 pounds bone-in short ribs, at least 1½ inches thick",
      "Kosher salt and freshly ground pepper",
      "2 large heads garlic, halved crosswise",
      "1 medium onion (about 10 ounces), chopped",
      "4 ribs celery (about 8 ounces), chopped",
      "2 medium carrots (about 6 ounces), chopped",
      "3 tablespoons tomato paste",
      "2 cups dry red wine (about half a bottle)",
      "2 cups beef stock or bone broth, plus more as needed",
      "4 sprigs thyme",
      "1 cup parsley, coarsely chopped",
      "½ cup finely chopped chives",
      "1 tablespoon finely grated lemon zest"
    ],
    steps: [
      "Heat the oven to 275 degrees. Heat the oil in a large Dutch oven over medium-high heat. Season the short ribs on all sides with salt and pepper. Working in batches, sear until deeply and evenly browned, 6 to 8 minutes per batch. Transfer to a large plate.",
      "Pour off all but 2 tablespoons of fat, leaving the browned bits behind. Reduce the heat to medium and add the garlic, cut side down; cook undisturbed until golden brown, 1 to 2 minutes. Add the onion, celery and carrots, season with salt and pepper, and cook until softened but not browned, 5 to 10 minutes. Add the tomato paste and stir to coat. Cook, stirring occasionally, until the tomato paste starts to caramelize on the bottom and edges, 2 to 3 minutes.",
      "Add the red wine and scrape up any browned bits with a wooden spoon. Simmer 2 to 3 minutes to take the edge off and reduce a bit. Stir in the beef stock and thyme. Return the short ribs to the pot along with any juices, nestling them in so they're submerged (add more stock or water if needed to cover). Bring to a simmer, then cover and transfer to the oven.",
      "Cook, undisturbed, until the short ribs are meltingly tender and falling off the bone, 3½ to 4 hours.",
      "Remove the ribs to a large plate. (You can strain the sauce for easier eating — the vegetables have given up their flavor.) Scatter the parsley, chives and lemon zest over the ribs. Separate the fat from the sauce, season with salt and pepper, and serve alongside."
    ]
  },
  {
    cuisine: "comfort", name: "Lemon and Garlic Chicken With Cherry Tomatoes",
    servings: "Serves 4", tags: ["chicken", "skillet", "lemon", "garlic", "cherry tomatoes", "pounded", "weeknight", "summery"],
    ingredients: [
      "2 tablespoons extra-virgin olive oil",
      "3 tablespoons lemon juice",
      "2 garlic cloves, minced or puréed",
      "1 teaspoon chopped fresh rosemary",
      "Salt and black pepper, to taste",
      "2 boneless skinless chicken breasts",
      "¼ cup dry white wine",
      "2 heaped cups cherry tomatoes (about ¾ pound)",
      "Pinch of sugar",
      "2 tablespoons all-purpose flour (or a gluten-free flour such as rice flour)",
      "2 tablespoons grapeseed, sunflower or canola oil",
      "1 tablespoon chopped flat-leaf parsley",
      "¼ cup grated Parmesan (optional)"
    ],
    steps: [
      "Stir together the olive oil, lemon juice, garlic, rosemary, and salt and pepper in a large bowl. Cut each chicken breast into 2 equal pieces (3 if they weigh 12 ounces or more) and add to the bowl. Stir and refrigerate 15 to 30 minutes.",
      "Remove the chicken from the marinade and pat dry (discard the marinade). Between two sheets of lightly oiled plastic wrap, pound each piece with a meat tenderizer or rolling pin, working from the center outward, until about ¼ inch thick.",
      "Season the pounded chicken with salt and pepper on one side only. Dredge lightly in the flour on all sides and tap off the excess.",
      "Turn the oven on low. Heat a wide, heavy skillet over high and add the oil. When hot, add one or two pieces of chicken (however many fit without crowding) and cook 1½ minutes, until browned in spots. Turn and brown the other side, about 1½ minutes (don't overcook). Transfer to a sheet pan and keep warm in the oven. If there's more than a tablespoon of fat in the pan, pour some off.",
      "Turn the heat down to medium-high. Add the wine and stir to deglaze. Add the cherry tomatoes and cook, stirring or tossing often, until they begin to shrivel and burst. Add the sugar and salt and pepper, and continue cooking 5 to 10 minutes, until the tomatoes have collapsed but are still intact. Top the chicken with the tomatoes, sprinkle with parsley and Parmesan if using, and serve."
    ]
  },
  {
    cuisine: "comfort", name: "Roast Chicken",
    servings: "Serves 4", tags: ["chicken", "roast chicken", "whole chicken", "cast-iron", "minimalist", "weeknight", "classic", "4-ingredient"],
    ingredients: [
      "1 whole chicken, 3 to 4 pounds, trimmed of excess fat",
      "3 tablespoons extra-virgin olive oil",
      "Salt and freshly ground black pepper"
    ],
    steps: [
      "Put a cast-iron skillet on a low rack in the oven and heat the oven to 500 degrees. Rub the chicken all over with the oil and sprinkle generously with salt and pepper.",
      "When the oven and skillet are hot, carefully put the chicken in the skillet, breast side up. Roast for 15 minutes, then turn the oven down to 350 degrees. Continue to roast until the bird is golden brown and an instant-read thermometer inserted into the meaty part of the thigh reads 155 to 165 degrees.",
      "Tip the pan to let the juices flow from the cavity into the pan. Transfer the chicken to a platter and let it rest at least 5 minutes. Carve and serve."
    ]
  },
  {
    cuisine: "comfort", name: "Rosemary Rack of Lamb With Crushed Potatoes",
    servings: "Serves 4", tags: ["lamb", "rack of lamb", "roast", "rosemary", "potatoes", "special occasion", "elegant", "dijon"],
    ingredients: [
      "2 lamb racks, about 1½ pounds each, preferably frenched",
      "Salt and pepper",
      "2 tablespoons Dijon mustard",
      "3 cloves garlic, minced",
      "4 anchovy fillets, minced",
      "Extra-virgin olive oil",
      "1½ to 2 pounds small, round potatoes, scrubbed and left whole",
      "2 tablespoons roughly chopped rosemary",
      "2 tablespoons roughly chopped parsley, for garnish"
    ],
    steps: [
      "Bring a large pot of salted water to a boil. Season the lamb generously with salt and pepper. In a small bowl, mix together the Dijon, garlic and anchovy (or pound in a mortar for a smoother texture). Stir in 3 tablespoons olive oil. Smear the lamb all over with the marinade and set aside.",
      "Meanwhile, boil the potatoes until the tip of a paring knife meets no resistance, 10 to 15 minutes depending on size. Drain, transfer to a roasting pan large enough to hold them in a single layer, and set aside to cool.",
      "Heat the oven to 400 degrees. With your palms or the back of a wooden spoon, crush the potatoes gently to crack them open and slightly flatten. Sprinkle with salt, drizzle with about 2 tablespoons olive oil, and turn to coat.",
      "Lay the lamb racks on top of the potatoes, bones curving downward. Scatter the rosemary over the meat and potatoes. Roast, uncovered, until a meat thermometer registers 125 degrees for medium-rare, about 20 minutes (135 for medium).",
      "Remove the lamb to a cutting board and let rest, tented with foil. Return the potatoes to the oven 10 to 15 minutes more, until nicely crisped.",
      "Slice the racks by cutting between the bones (one rack yields 4 thick chops or 8 thin). Transfer the chops and potatoes to a warm platter, sprinkle with parsley and serve."
    ]
  },
  {
    cuisine: "comfort", name: "Quiche Lorraine",
    servings: "Serves 6 to 10", tags: ["quiche", "bacon", "gruyère", "brunch", "egg", "french", "classic", "make-ahead"],
    ingredients: [
      "Pastry for a one-crust 9-inch pie",
      "4 strips bacon",
      "1 onion, thinly sliced",
      "1 cup Gruyère or Swiss cheese, cubed",
      "¼ cup grated Parmesan",
      "4 eggs, lightly beaten",
      "2 cups heavy cream (or 1 cup each milk and cream)",
      "¼ teaspoon nutmeg",
      "½ teaspoon salt",
      "¼ teaspoon freshly ground pepper",
      "Tabasco sauce, to taste"
    ],
    steps: [
      "Heat the oven to 400 degrees.",
      "Line a 9-inch pie plate with the pastry. Build a rim and flute it — this is essential for the amount of custard.",
      "Cover the bottom of the pastry with a round of parchment and add enough dried beans or peas to partly fill the shell. Bake 10 minutes.",
      "Reduce the oven to 375 degrees. Remove and discard the beans and parchment and set the pastry-lined plate aside.",
      "Cook the bacon until crisp and remove it from the skillet. Pour off all but 1 tablespoon of the fat. Cook the onion in the remaining fat until transparent.",
      "Combine the eggs, cream, nutmeg, salt, pepper and Tabasco. Crumble the bacon and sprinkle the bacon, onion and cheeses over the inside of the partly baked pastry.",
      "Strain the cream mixture over the onion-cheese mixture. Slide the pie onto a baking sheet.",
      "Bake until a knife inserted 1 inch from the pastry edge comes out clean, about 50 minutes. Remove to a wire rack and let stand 5 to 10 minutes before serving."
    ]
  },
  {
    cuisine: "comfort", name: "Smothered Pork Chops",
    servings: "Serves 8", tags: ["pork", "pork chops", "smothered", "onion gravy", "southern", "braised", "do-ahead", "low & slow"],
    ingredients: [
      "8 thick, bone-in pork chops (more if using smaller chops)",
      "Anise brine (see note), for soaking",
      "4 tablespoons neutral oil (like peanut or safflower), or lard",
      "1 cup all-purpose flour",
      "8 medium yellow onions, peeled and thinly sliced",
      "1 bay leaf",
      "Kosher salt and freshly ground pepper, to taste",
      "2 quarts pork stock or chicken stock",
      "1 tablespoon finely chopped parsley (optional)"
    ],
    steps: [
      "Submerge the pork in the anise brine in a large nonreactive container and refrigerate at least 12 hours or overnight, then remove the chops and dry well with paper towels. (No brine? Add flavor to the dredging flour instead — chili powder or smoked paprika.)",
      "Heat the oven to 325 degrees. Heat the oil or lard in a large ovenproof pot or Dutch oven over medium heat. Dredge the chops in the flour, shaking off the excess; reserve the leftover flour.",
      "Cook the chops in the fat, about 4 minutes per side, until brown and crisp, then transfer to a plate. Reduce the heat to medium-low. Add the onions and bay leaf and cook, stirring often, until softened, about 15 minutes. Season well with salt and pepper.",
      "Add 6 tablespoons of the reserved flour to the onions, stir well and cook 3 or 4 minutes. Slowly add the stock, stirring and scraping the pan, until incorporated and slightly thickened.",
      "Return the chops to the pot and bring to a simmer, then cover tightly and cook in the oven until very tender, 2 or more hours. Transfer the chops to a plate and place the pot over medium heat. Reduce the sauce until thick enough to resemble gravy, skimming excess oil and foam. Return the chops to reheat, then serve with the gravy over rice or mashed potatoes. Garnish with parsley if you like."
    ]
  },
  {
    cuisine: "comfort", name: "Beef Stroganoff (Sirloin & Mushroom)",
    servings: "Serves 4", tags: ["beef", "stroganoff", "mushrooms", "egg noodles", "creamy", "classic", "weeknight", "crème fraîche"],
    ingredients: [
      "Kosher salt and freshly ground black pepper",
      "1½ pounds sirloin roast, or beef tenderloin if you're feeling fancy",
      "2 tablespoons all-purpose flour",
      "1½ teaspoons hot paprika",
      "1 tablespoon neutral oil, such as canola or grapeseed",
      "4 tablespoons unsalted butter, divided",
      "½ pound button mushrooms, cleaned and quartered",
      "2 small shallots, thinly sliced",
      "12 ounces wide egg noodles",
      "¼ cup dry white wine",
      "1 cup heavy cream or crème fraîche",
      "1½ teaspoons Worcestershire sauce",
      "1½ teaspoons Dijon mustard",
      "Chopped fresh parsley, for garnish"
    ],
    steps: [
      "Bring a large pot of salted water to a boil.",
      "Cut the beef against the grain into ½-inch slices, pound lightly, then cut into 1-inch-wide strips.",
      "Add the flour, paprika, 1½ teaspoons salt and 1½ teaspoons pepper to a large shallow bowl and toss to combine. Dredge the meat in the flour, shake off the excess, and transfer to a rimmed baking sheet.",
      "Place a large skillet over high heat and swirl in the oil. When it shimmers, sauté the beef in two batches until well browned on both sides but rare inside, 3 to 4 minutes per batch. Transfer the seared meat to the baking sheet. Turn the heat down slightly.",
      "Add 1 tablespoon of the butter to the pan. When it foams, add the mushrooms, toss to coat, and season with salt and pepper. Cook, stirring frequently, until the mushrooms release their moisture and are deep brown, 12 to 15 minutes. About halfway through, add the shallots and 1 more tablespoon butter.",
      "While the mushrooms cook, add the noodles to the boiling water and cook until just done, about 10 minutes. Drain and toss with the remaining 2 tablespoons butter. Set aside.",
      "When the mushrooms and shallots are caramelized, deglaze the pan with the wine, scraping up the stuck-on bits. When the wine has reduced by half, slowly stir in the cream, then the Worcestershire and mustard. Add the meat and any accumulated juices and stir. Cook, stirring occasionally, until hot and the beef is medium-rare, 2 to 3 minutes. Taste and adjust the seasoning.",
      "Serve the noodles under or alongside the stroganoff; sprinkle with parsley."
    ]
  },
  {
    cuisine: "comfort", name: "Chicken Breasts With Lemon",
    servings: "Serves 4", tags: ["chicken", "lemon", "skillet", "pan sauce", "weeknight", "fast & easy", "elegant", "30-minute"],
    ingredients: [
      "½ cup flour, for dredging",
      "Salt and freshly ground pepper, to taste",
      "4 skinless boneless chicken breasts, about 6 ounces each",
      "2 tablespoons olive oil",
      "4 sprigs fresh thyme, or 1 teaspoon dried",
      "2 tablespoons finely chopped shallots",
      "2 teaspoons finely chopped garlic",
      "2 teaspoons grated lemon zest",
      "3 tablespoons lemon juice",
      "½ cup chicken broth",
      "2 tablespoons butter"
    ],
    steps: [
      "Season the flour with salt and pepper and dredge the chicken all over. Remove the excess flour.",
      "Heat the oil in a heavy skillet large enough to hold the chicken in one layer. Add the chicken and cook, uncovered, over medium heat for 5 minutes, or until lightly browned.",
      "Flip the chicken and cook 5 minutes more, or until cooked through. Carefully pour off and discard the oil, leaving the chicken.",
      "Add the thyme, shallots and garlic and cook about a minute (don't burn the garlic). Add the lemon zest, lemon juice and broth.",
      "Scrape the skillet to dissolve the brown bits. Add the butter and cook 3 minutes longer. Serve immediately."
    ]
  },
  {
    cuisine: "comfort", name: "Chicken and Dumplings",
    servings: "Serves 6", tags: ["chicken", "dumplings", "stew", "comfort", "from scratch", "low & slow", "biscuit", "cozy"],
    ingredientGroups: [
      { title: "For the Chicken", items: [
        "2 pounds bone-in, skin-on chicken thighs",
        "Kosher salt and freshly ground black pepper",
        "2 tablespoons vegetable oil",
        "1 large yellow onion, diced",
        "4 stalks celery, chopped",
        "6 medium carrots (about 1½ pounds), peeled and sliced ¼-inch thick, divided",
        "4 sprigs thyme",
        "1 tablespoon unsalted butter, plus more as needed",
        "¼ cup all-purpose flour",
        "2 large leeks, white and light green parts thinly sliced"
      ]},
      { title: "For the Dumplings", items: [
        "1½ cups all-purpose flour",
        "1½ teaspoons baking powder",
        "¾ teaspoon kosher salt",
        "¼ teaspoon freshly ground pepper",
        "¾ cup buttermilk",
        "1 large egg",
        "2 tablespoons unsalted butter, melted",
        "½ cup parsley, finely chopped (optional)",
        "¼ cup chives, finely chopped (optional)"
      ]}
    ],
    steps: [
      "Season the chicken on both sides with salt and pepper. Heat the oil in a large Dutch oven over medium-high. Working in batches if needed, sear the chicken skin-side down until deeply golden, 8 to 10 minutes. Flip and cook until browned on the other side, another 5 to 8 minutes. Transfer to a plate and pour off all the fat into a measuring cup (about 5 tablespoons).",
      "Leaving the browned bits in the pot, return 2 tablespoons of fat to it. Add the onion, celery and half the carrots. Season with salt and pepper and cook over medium, scraping up the bits, until the vegetables start to soften, about 4 minutes. Return the chicken to the pot with the thyme and 8 cups water. Simmer, uncovered, until the chicken is tender and the liquid has reduced by about ¼, 30 to 40 minutes.",
      "Transfer the chicken to a plate to cool. Strain the stock (about 5 cups; add water if you have less) and wipe out the pot.",
      "Heat the remaining 3 tablespoons chicken fat with 1 tablespoon butter (use butter to make up 4 tablespoons of fat if needed) over medium. Sprinkle in the flour and stir constantly until pale golden brown, 2 to 3 minutes.",
      "Slowly whisk in the reserved stock until no lumps remain and bring to a boil. Add the leeks and remaining carrots, season with salt and pepper, and lower to a simmer.",
      "Discard the chicken skin and bones. Shred the meat and add to the pot. Cook, stirring occasionally, until the liquid is thickened and the carrots and leeks are tender, 10 to 12 minutes.",
      "Make the dumplings: Whisk together the flour, baking powder, salt and pepper. In a small bowl, whisk the buttermilk and egg, then add to the dry ingredients, followed by the melted butter. Stir just to combine (don't overmix).",
      "Drop generous quarter-size dollops of dough onto the stew, spacing them apart (it's OK if they touch). Cover the pot and reduce the heat to low. Cook, undisturbed, until the dumplings are puffed and cooked through, 18 to 22 minutes.",
      "Divide among bowls and sprinkle with parsley and chives, if using."
    ]
  },
  {
    cuisine: "comfort", name: "Grilled Za'atar Chicken With Garlic Yogurt and Cilantro",
    servings: "Serves 4 to 6", tags: ["chicken", "grilled", "za'atar", "yogurt", "middle eastern", "marinated", "summer", "herby"],
    ingredients: [
      "6 garlic cloves, finely grated, pressed or minced, divided",
      "2 lemons, zested",
      "1 cup plain whole-milk yogurt, divided",
      "¼ cup chopped fresh cilantro, plus more sprigs for garnish",
      "3 tablespoons extra-virgin olive oil, plus more for serving",
      "1½ tablespoons za'atar, plus more for serving",
      "1 tablespoon chopped fresh oregano or marjoram, plus more for garnish",
      "1¾ teaspoons salt",
      "¼ teaspoon freshly ground black pepper",
      "2¼ pounds boneless, skinless chicken thighs"
    ],
    steps: [
      "In a large bowl or container, stir together 5 of the grated garlic cloves, half the lemon zest, ⅓ cup yogurt, the cilantro, oil, za'atar, oregano, salt and black pepper. Add the chicken and toss until well coated. Cover and refrigerate at least 2 hours or overnight.",
      "When ready to cook, light the grill to medium or heat the broiler with the rack 3 inches from the heat. Remove the chicken, shaking off excess marinade, and grill or broil on one side until charred in spots, 5 to 8 minutes. Flip and cook another 5 to 8 minutes, until just cooked through.",
      "While the chicken cooks, place the remaining ⅔ cup yogurt in a small bowl. Stir in the reserved grated garlic and lemon zest, and season to taste with salt and pepper. Cut one zested lemon in half for serving.",
      "To serve, place the chicken on a platter and drizzle with olive oil and a large squeeze of lemon. Top with cilantro and oregano sprigs and serve with the yogurt sauce."
    ]
  },
  {
    cuisine: "comfort", name: "Skillet Chicken With Mushrooms and Caramelized Onions",
    servings: "Serves 4", tags: ["chicken", "skillet", "mushrooms", "caramelized onions", "one-pot", "weeknight", "french-inspired", "30-minute"],
    ingredients: [
      "5 tablespoons olive oil, divided",
      "2 tablespoons plus 2 teaspoons sherry vinegar, divided",
      "2 teaspoons honey",
      "1 teaspoon Dijon mustard",
      "¼ teaspoon red-pepper flakes",
      "Kosher salt and black pepper",
      "1½ pounds boneless, skinless chicken thighs, cut into 3-inch pieces",
      "2 medium yellow onions, thinly sliced (about 4 cups)",
      "¾ pound cremini mushrooms, stems removed and thinly sliced (about 4 cups)",
      "½ cup fresh flat-leaf parsley or dill, roughly chopped",
      "¼ cup grated Parmesan or pecorino (optional)",
      "Bread or cooked pasta, for serving"
    ],
    steps: [
      "In a large bowl, whisk together 2 tablespoons oil, 2 tablespoons vinegar, the honey, mustard, red-pepper flakes and 1 teaspoon salt until smooth. Pat the chicken dry, season with salt and pepper, then add to the mixture and coat well. Set aside at room temperature, stirring once while you make the onions.",
      "Heat a 12-inch cast-iron or heavy skillet over medium-high until very hot, 1½ to 2 minutes, then add the onions in an even layer. Season with salt and cook, mostly undisturbed, 4 minutes, stirring every minute or so. Add the mushrooms, season with salt, and stir. (It will look crowded — that's OK.) Cook, mostly undisturbed, until the mushrooms shrink and start to brown, about 4 minutes, stirring every minute or so.",
      "Stir in the remaining 3 tablespoons olive oil and cook until the onions start to color, stirring and lowering the heat as needed to avoid burning, about 2 minutes. Push the onions and mushrooms to the edges and add the chicken to the center. Pour any remaining marinade over the vegetables. Cook undisturbed 4 to 5 minutes, then combine everything and cook, stirring occasionally, until the chicken is cooked through, about 10 minutes more.",
      "Add the remaining 2 teaspoons sherry vinegar, scraping up anything on the bottom. Season to taste with salt.",
      "Remove from the heat and top with the parsley and cheese, if using. Serve with bread or pasta."
    ]
  },
  {
    cuisine: "comfort", name: "Spiced Roast Chicken With Tangy Yogurt Sauce",
    servings: "Serves 4", tags: ["chicken", "roasted", "halal-cart-style", "yogurt sauce", "weeknight", "sheet-pan", "spiced", "30-minute"],
    ingredientGroups: [
      { title: "For the Roasted Chicken", items: [
        "¼ cup neutral oil, such as safflower or canola",
        "5 garlic cloves, minced",
        "1 tablespoon ground coriander",
        "1½ teaspoons ground sweet paprika",
        "1 teaspoon ground cumin",
        "1 teaspoon dried oregano",
        "½ teaspoon granulated onion",
        "¼ cup chopped cilantro, divided",
        "2 tablespoons lemon juice, plus wedges for serving, divided",
        "2 pounds boneless, skinless chicken thighs, cut into 1-inch cubes",
        "Salt and black pepper"
      ]},
      { title: "For the White Sauce", items: [
        "½ cup plain Greek yogurt (2 percent or whole-milk)",
        "¼ cup plus 2 tablespoons mayonnaise",
        "1 tablespoon distilled white vinegar",
        "¾ teaspoon granulated sugar",
        "A big pinch of granulated garlic",
        "A big pinch of granulated onion",
        "Salt and black pepper"
      ]},
      { title: "To Serve", items: [
        "1 small head iceberg lettuce, shredded",
        "2 medium tomatoes, diced",
        "Warm pita bread and hot sauce (optional)"
      ]}
    ],
    steps: [
      "Prepare the chicken: Heat the oven to 450 degrees. In a medium bowl, combine the oil, fresh garlic, coriander, paprika, cumin, oregano and granulated onion with half the cilantro and half the lemon juice; mix well. Add the chicken, season with salt and pepper, and toss to coat.",
      "Spread the chicken in a single layer on a large sheet pan and roast until golden and caramelized, about 20 minutes.",
      "While the chicken roasts, make the white sauce: In a small bowl, combine the yogurt, mayonnaise, vinegar, sugar, granulated garlic and granulated onion; season with salt and pepper and mix well. Set aside.",
      "Add the remaining cilantro and lemon juice to the roasted chicken and mix well, scraping up the browned bits. Divide the chicken, lettuce and tomatoes among 4 plates and drizzle with the white sauce. Serve with lemon wedges, plus pita and hot sauce, if using."
    ]
  },

  // ——— Soups & Stews ———
  {
    cuisine: "soup", name: "Creamy Tomato Soup",
    servings: "Serves 8 (1 cup each)", tags: ["tomato", "creamy", "fast & easy", "comfort", "kid-friendly", "30-minute"],
    ingredients: [
      "4 Tbsp unsalted butter",
      "2 yellow onions, (3 cups finely chopped)",
      "3 garlic cloves, (1 Tbsp minced)",
      "56 oz crushed tomatoes, (two 28-oz cans) with their juice, preferably San Marzano",
      "2 cups chicken stock",
      "1/4 cup chopped fresh basil, plus more to serve",
      "1 Tbsp sugar, or added to taste",
      "1/2 tsp black pepper, or to taste",
      "1/2 cup heavy whipping cream, or to taste to combat acidity",
      "1/3 cup parmesan cheese, freshly grated, plus more to serve"
    ],
    steps: [
      "Heat a nonreactive pot or enameled Dutch oven over medium heat. Add butter, then add chopped onions. Sauté 10–12 minutes, stirring occasionally, until softened and golden. Add minced garlic and sauté 1 minute until fragrant.",
      "Add crushed tomatoes with their juice, chicken stock, chopped basil, sugar (or add sugar to taste), and black pepper. Stir together and bring to a boil, then reduce heat, partially cover with the lid, and simmer for 10 minutes.",
      "You can leave your soup with a chunky consistency, but if you like a blended/creamy soup, use an immersion blender to blend the soup in the pot to desired consistency, or transfer to a blender in batches and blend until smooth (being careful not to over-fill the blender with hot liquid; pulse a few times initially to get it started). Return blended soup to the pot over medium heat.",
      "Add 1/2 cup heavy cream and 1/3 cup freshly grated parmesan cheese and return to a simmer. Season to taste with salt and pepper if needed and turn off the heat.",
      "Ladle into warm bowls and top with more parmesan and chopped fresh basil."
    ]
  },
  {
    cuisine: "soup", name: "Butternut Squash Soup",
    servings: "Serves 8", tags: ["butternut squash", "coconut", "curry", "make-ahead", "fall", "vegetarian"],
    ingredientGroups: [
      { title: "For the soup", items: [
        "1 large butternut squash (about 1½ pounds)",
        "2 tablespoons olive oil or other vegetable oil",
        "1 large yellow or sweet white onion, chopped",
        "1 medium apple, any variety, peeled and diced",
        "2 cups prepared vegetable broth, or 2 cups water with 1 vegetable bouillon cube",
        "2 teaspoons good-quality curry powder",
        "2 teaspoons grated fresh or jarred ginger, or more, to taste",
        "Pinch of ground nutmeg or allspice",
        "1 (14-ounce) can light coconut milk",
        "Salt and freshly ground pepper to taste"
      ]},
      { title: "Garnish", items: [
        "2 medium red onions, quartered and thinly sliced",
        "1 good-size bunch kale (about 10 to 12 ounces)"
      ]}
    ],
    steps: [
      "Preheat oven to 375°. Cut the squash in half and place halves cut-side up in a foil-lined, shallow baking dish and cover tightly with more foil. Bake for 30 to 50 minutes, until you can easily pierce the flesh with a knife. Scoop out and set aside.",
      "Heat about half the oil in a soup pot. Add the onion and sauté over medium-low heat until golden, about 8 to 10 minutes.",
      "Add the apple, squash, broth, and spices. Bring to a steady simmer, then cover and simmer gently until the apples are tender, about 10 minutes.",
      "Transfer the solids to a food processor with a slotted spoon, in batches if need be, and process until smoothly puréed, then transfer back to the soup pot. Or better yet, simply insert an immersion blender into the pot and process until smoothly puréed.",
      "Stir in the coconut milk and return the soup to a gentle simmer. Cook over low heat for 5 to 10 minutes, until well heated through. Season with salt and pepper. If time allows, let the soup stand off the heat for an hour or two, then heat through as needed before serving.",
      "Just before serving, heat the remaining oil in a large skillet. Add the red onions and sauté over low heat until golden and soft.",
      "Meanwhile, strip the kale leaves off the stems and cut into thin shreds. Stir together with the onions in the skillet, adding just enough water to moisten the surface. Cover and cook over medium heat, stirring occasionally, until the kale is bright green and just tender, about 5 minutes.",
      "To serve, ladle soup into each bowl, then place a small mound of the kale and onion mixture in the center."
    ]
  },
  {
    cuisine: "soup", name: "Creamy Chicken & Wild Rice Soup",
    servings: "Serves 6", tags: ["creamy", "fast & easy"],
    ingredients: [
      "4 cups chicken broth",
      "2 boneless chicken breasts",
      "6 oz package quick-cooking long grain and wild rice",
      "½ cup carrots cut into bite size",
      "5 stalks celery cut into bite size",
      "½ yellow onion cut into bite size",
      "Salt to taste",
      "Pepper to taste",
      "½ cup and 1 tbs flour",
      "¼ cup and 2 tbs butter",
      "1½ cups milk"
    ],
    steps: [
      "In a large pot over medium-low heat, cook chicken breasts in broth for about 20 minutes. Shred and return to pot.",
      "Cook rice according to directions. Add to broth.",
      "Sauté carrots, celery and onion 5 minutes or until softened. Add to broth.",
      "In a small bowl, combine salt, pepper, flour. In a medium saucepan over medium heat, melt butter. Stir in flour mixture by tablespoons. Whisk in milk a little at a time until smooth. Cook until thickened, stirring continuously, about 5 minutes.",
      "Stir cream mixture into broth; cook over medium heat 10–15 minutes."
    ]
  },
  {
    cuisine: "soup", name: "Chicken Green Enchilada Soup",
    servings: "Serves 4", tags: ["fast & easy", "spicy"],
    ingredientGroups: [
      { title: "Soup", items: [
        "2 tsp olive oil",
        "1 yellow onion, chopped",
        "4 cloves garlic, minced",
        "3 cups cooked shredded chicken (rotisserie)",
        "Two 12 oz cans green enchilada sauce",
        "1 4 oz can diced green chiles",
        "Two 15.5 oz cans Great Northern white beans, drained and rinsed",
        "4 cups chicken stock",
        "1 tbs ground cumin",
        "1 tsp salt",
        "½ tsp ground pepper"
      ]},
      { title: "Toppings", items: [
        "Avocado, diced", "Green onions, diced", "Fresh cilantro, minced",
        "Cheese, shredded", "Corn chips", "Sour cream", "Salsa Verde"
      ]}
    ],
    steps: [
      "Heat olive oil in a medium pot over medium heat. Add onion and garlic, sauté 5 minutes.",
      "Add all remaining ingredients and bring to a simmer. Cook for 20–30 minutes until vegetables are soft."
    ]
  },
  {
    cuisine: "soup", name: "Beef Mushroom Barley Soup",
    servings: "Serves 6", tags: ["hearty", "low & slow"],
    ingredients: [
      "2 lbs beef stew meat, cut into small pieces",
      "1 tbs vegetable oil",
      "1 onion, chopped",
      "4 stalks celery, chopped",
      "4 carrots, chopped",
      "8 cups beef stock",
      "8 oz pearl barley (quick cooking)",
      "1 lb mushrooms, sliced"
    ],
    steps: [
      "Cook beef stew meat in a large soup pot over medium heat until browned, 5–7 minutes.",
      "In a skillet, heat oil over medium. Add onions, celery and carrots and cook 5 minutes. Add to beef in pot.",
      "Pour beef stock into pot.",
      "Place soup over medium-low heat, bring to simmer and cook, stirring occasionally, for 2 hours.",
      "Add barley and mushrooms and cook an additional hour."
    ]
  },
  {
    cuisine: "soup", name: "White Bean Chicken Chili",
    servings: "Family-sized", tags: ["chili", "tex-mex"],
    ingredients: [
      "2½ cups water",
      "1 tsp lemon pepper",
      "1 tsp cumin",
      "1½ lbs chicken breasts",
      "1 tsp olive oil",
      "1 clove garlic, minced",
      "1 onion, chopped",
      "Two 9 oz packages frozen corn, thawed",
      "Two 4.5 oz cans chopped green chilies",
      "3 tbs lime juice",
      "1 jar Salsa Verde",
      "Two 15 oz cans Great Northern beans",
      "Tortilla chips, crumbled",
      "Shredded Monterey Jack cheese"
    ],
    steps: [
      "In a saucepan combine water, lemon pepper and cumin. Bring to boil, add chicken breasts, reduce heat to simmer, cover and cook 20–30 minutes. Remove chicken, shred, and return to pan.",
      "In a skillet, heat olive oil and sauté garlic and onion 2–3 minutes. Add to chicken mixture.",
      "Add corn, chilies, lime juice and Salsa Verde. Bring to boil, reduce to simmer. Add beans and cook until heated through.",
      "Serve in bowls over crumbled corn chips, topped with shredded cheese."
    ]
  },
  {
    cuisine: "soup", name: "Lasagna Soup",
    servings: "Serves 6", tags: ["lasagna soup", "italian", "beef", "sausage", "cozy", "comfort", "one-pot"],
    ingredients: [
      "3 tablespoons extra-virgin olive oil",
      "1 large yellow onion, chopped",
      "2 tablespoons minced garlic (from about 6 cloves)",
      "½ pound ground beef",
      "½ pound bulk sweet Italian sausage (or sausages, with casings removed)",
      "1 teaspoon dried oregano",
      "½ teaspoon ground nutmeg",
      "¼ teaspoon crushed red pepper, plus more to taste",
      "Kosher salt and freshly ground black pepper",
      "3 tablespoons tomato paste",
      "6 cups low-sodium chicken broth",
      "1 (24-ounce) jar marinara sauce",
      "8 ounces dried lasagna noodles, broken crosswise into 1-inch pieces",
      "1½ cups/12 ounces whole-milk ricotta",
      "⅓ cup grated Parmesan",
      "¼ cup heavy cream",
      "½ cup fresh basil leaves, torn, plus more for serving"
    ],
    steps: [
      "In a large Dutch oven or other heavy-bottomed pot, heat the olive oil over medium. Add the onion and cook, stirring occasionally, until translucent but not browned, 4 to 6 minutes. Add the garlic and stir for 30 seconds to 1 minute, until fragrant.",
      "Add the beef, sausage, oregano, nutmeg, crushed red pepper, 1½ teaspoons salt and ½ teaspoon black pepper. Cook, breaking up the meat with a spoon, until starting to brown, 3 to 5 minutes. Add the tomato paste and cook for 1 minute, stirring often.",
      "Add the chicken broth and marinara sauce and bring to a boil over medium-high heat. Stir in the lasagna noodles, reduce the heat to medium-low and simmer, uncovered, for 15 to 20 minutes, stirring occasionally, until the noodles are tender and the broth has reduced slightly.",
      "While the soup simmers, combine the ricotta and Parmesan in a medium bowl. Add ¼ teaspoon salt and a few grinds of black pepper and mix well; set aside.",
      "Off the heat, stir the cream and basil into the soup, then taste and add more salt and crushed red pepper, if desired.",
      "Serve the soup in shallow bowls, topped with a large dollop of the ricotta mixture and a few torn basil leaves."
    ]
  },
  {
    cuisine: "soup", name: "Basic Corn Chowder",
    servings: "Serves 4", tags: ["corn", "chowder", "soup", "potatoes", "summer", "vegetarian", "quick", "bittman"],
    ingredients: [
      "4 to 6 ears of corn",
      "1 tablespoon butter or neutral oil, like canola or grapeseed",
      "1 medium onion, chopped",
      "2 medium potatoes, peeled and diced",
      "Salt and freshly ground black pepper",
      "2 tomatoes, cored, seeded and chopped (optional)",
      "1 cup whole or low-fat milk",
      "½ cup chopped parsley (optional)"
    ],
    steps: [
      "Shuck the corn and use a paring knife to strip the kernels into a bowl. Put the cobs in a pot with 4 cups water; bring to a boil, cover and simmer while you continue.",
      "Put the butter or oil in a saucepan and turn the heat to medium-high. When the butter melts or the oil is hot, add the onion and potatoes along with a sprinkling of salt and pepper. Cook, stirring occasionally, until the onion softens, about 5 minutes; add the tomatoes and cook, stirring, for another minute or two.",
      "After the corncobs have cooked at least 10 minutes, strain the liquid into the onion-potato mixture; bring to a boil, then lower the heat to a simmer. When the potatoes are tender, add the corn kernels and milk, and heat through. Taste and adjust the seasonings. Garnish with the parsley and serve."
    ]
  },
  {
    cuisine: "soup", name: "Old-Fashioned Beef Stew",
    servings: "Serves 4", tags: ["beef", "stew", "red wine", "carrots", "potatoes", "low & slow", "comfort", "weekend"],
    ingredients: [
      "¼ cup all-purpose flour",
      "¼ teaspoon freshly ground pepper",
      "1 pound beef stewing meat, trimmed and cut into 1-inch cubes",
      "5 teaspoons vegetable oil, divided",
      "2 tablespoons red wine vinegar",
      "1 cup red wine",
      "3½ cups beef broth, homemade or low-sodium canned",
      "2 bay leaves",
      "1 medium onion, peeled and chopped",
      "5 medium carrots, peeled and cut into ¼-inch rounds",
      "2 large baking potatoes, peeled and cut into ¾-inch cubes",
      "2 teaspoons salt"
    ],
    steps: [
      "Combine the flour and pepper in a bowl, add the beef and toss to coat well. Heat 3 teaspoons of the oil in a large pot. Add the beef a few pieces at a time; do not overcrowd. Cook, turning the pieces until browned on all sides, about 5 minutes per batch; add more oil as needed between batches.",
      "Remove the beef from the pot and add the vinegar and wine. Cook over medium-high heat, scraping the pan with a wooden spoon to loosen any browned bits. Add the beef, beef broth and bay leaves. Bring to a boil, then reduce to a slow simmer.",
      "Cover and cook, skimming the broth from time to time, until the beef is tender, about 1½ hours. Add the onion and carrots and simmer, covered, for 10 minutes. Add the potatoes and simmer until the vegetables are tender, about 30 minutes more. Add broth or water if the stew is dry. Season with salt and pepper to taste. Ladle among 4 bowls and serve."
    ]
  },
  {
    cuisine: "soup", name: "Chicken Tortilla Soup",
    servings: "Serves 4 to 6", tags: ["chicken", "soup", "tex-mex", "tortilla", "chipotle", "avocado", "shredded chicken", "from scratch"],
    ingredients: [
      "2½ pounds bone-in chicken thighs or legs",
      "1 pound beef bones, or a cut of beef with a lot of bone like short ribs (optional)",
      "1 medium onion, quartered (leave the skin on)",
      "1 head garlic, halved across the equator (leave the skin on)",
      "¼ cup vegetable oil, or more as needed",
      "6 corn tortillas",
      "Salt",
      "2 tablespoons canned chipotle chiles in adobo, or to taste",
      "½ cup chopped fresh cilantro, divided",
      "2 avocados, pitted, peeled and cubed",
      "4 to 8 ounces plain melting cheese (mozzarella, Oaxaca or Jack), shredded or cubed",
      "Lime wedges, for serving (optional)"
    ],
    steps: [
      "Put the chicken, the beef bones if using, 3 of the onion quarters and the garlic in a large pot. Add water just to cover (about 10 cups) and bring to a boil. Reduce the heat so the liquid bubbles gently. Cook, skimming the foam off the surface now and then, until the chicken is very tender, 45 minutes to 1 hour.",
      "Meanwhile, put the vegetable oil in a large skillet over medium heat. When hot but not smoking, fry 2 of the tortillas (one at a time if necessary), turning once, until crisp and golden, 2 to 3 minutes per tortilla. Drain on paper towels. Cut the 4 remaining tortillas into strips, add to the skillet and fry, stirring to separate, until crisp and golden, another 2 to 3 minutes. Drain and sprinkle with salt while warm.",
      "When the chicken is tender, transfer it to a cutting board. When cool enough to handle, shred the meat, discarding the bones and skin.",
      "While the chicken cools, strain the stock and discard the solids. Peel the remaining onion quarter and put it in a blender with the chipotle, ¼ cup of the cilantro and a sprinkle of salt. Crumble in the two whole fried tortillas and add enough stock to fill the blender a little more than halfway. Purée until as smooth as possible.",
      "Pour the purée and remaining stock back into the pot and bring to a boil. Reduce the heat so it bubbles gently and cook for 5 to 10 minutes. Stir in the shredded chicken, taste and add salt if needed. Divide the avocado, cheese and remaining ¼ cup cilantro among 4 to 6 bowls. Ladle in the soup and garnish with the fried tortilla strips. Serve with lime wedges if you like."
    ]
  },
  {
    cuisine: "soup", name: "French Onion Soup",
    servings: "Serves 4 to 6", tags: ["soup", "french", "caramelized onions", "gruyère", "beef stock", "cozy", "low & slow", "classic"],
    ingredients: [
      "3 tablespoons unsalted butter",
      "3 to 4 large red or yellow onions (about 3 pounds), peeled and thinly sliced",
      "¾ teaspoon kosher salt, plus more to taste",
      "2 quarts (8 cups) beef stock",
      "1 cup dry white wine",
      "1 tablespoon dry sherry",
      "1 tablespoon all-purpose flour",
      "½ teaspoon black pepper, plus more to taste",
      "8 to 12 (½-inch) slices French bread (from 1 loaf)",
      "1½ cups grated Gruyère cheese"
    ],
    steps: [
      "Melt the butter in a heavy Dutch oven over medium heat. Add the onions and ½ teaspoon salt, stir and cover, letting the onions soften for 5 minutes. Remove the lid and let the onions caramelize until golden brown over medium heat, stirring occasionally. Adjust the heat if they brown too quickly. The caramelization may take 45 to 60 minutes.",
      "Meanwhile, warm the broth in a saucepan over low heat.",
      "Once the onions are caramelized, add the wine and sherry and bring to a boil. Stir in the flour and let thicken for a minute or two.",
      "Slowly add the warm broth, ¼ teaspoon salt and the pepper, and boil uncovered for 10 minutes. Add more salt and pepper to taste.",
      "Heat the broiler and arrange individual ovenproof casseroles on a baking sheet. Ladle the soup into the casseroles and cover the tops with bread slices. Sprinkle each generously with Gruyère.",
      "Broil for a minute or two, watching carefully, until the cheese melts and browns. Serve immediately."
    ]
  },
  {
    cuisine: "soup", name: "Thomas Keller's Butternut Squash Soup With Brown Butter",
    servings: "Serves 6", tags: ["soup", "butternut squash", "brown butter", "roasted", "fall", "elegant", "puréed", "labor of love"],
    ingredients: [
      "1 (3-to-3½-pound) butternut squash",
      "2 tablespoons canola oil, divided",
      "Kosher salt and freshly ground black pepper",
      "2 sprigs sage",
      "1 cup thinly sliced leeks",
      "½ cup thinly sliced carrots",
      "½ cup thinly sliced shallots",
      "½ cup thinly sliced onions",
      "6 garlic cloves, smashed",
      "2 tablespoons honey",
      "6 cups vegetable stock, more if needed",
      "Bouquet garni (8 sprigs thyme, 2 sprigs Italian parsley, 2 bay leaves and ½ teaspoon black peppercorns, wrapped in 2 green leek leaves)",
      "¼ cup crème fraîche",
      "Freshly grated nutmeg",
      "4 tablespoons unsalted butter",
      "1 tablespoon minced chives",
      "Extra-virgin olive oil"
    ],
    steps: [
      "Preheat the oven to 350 degrees. Line a small baking sheet with foil. Cut the neck off the squash and set aside. Cut the bulb in half and scoop out the seeds. Brush each half inside and out with about 1½ teaspoons of the canola oil. Sprinkle the cavities with salt and pepper and tuck a sprig of sage into each. Place cut-side down on the sheet and roast until completely tender, about 1 hour. Let cool, then scoop out and reserve the flesh (discard the sage).",
      "Meanwhile, peel the skin from the neck of the squash and cut the flesh into ½-inch pieces (you should have about 4 cups).",
      "Put the remaining canola oil in a stockpot over medium-high heat, add the leeks, carrots, shallots and onions and cook, stirring often, about 6 minutes. Add the diced squash, garlic, 1½ teaspoons salt and ½ teaspoon pepper and cook gently for 3 minutes, reducing the heat as needed to keep the garlic and squash from coloring. Stir in the honey and cook, stirring, 2 to 3 minutes. Add the stock and bouquet garni, bring to a simmer and cook 10 to 15 minutes, until the squash is tender.",
      "Add the roasted squash and simmer gently about 30 minutes for the flavors to blend. Discard the bouquet garni. Purée the soup in batches in a blender, then strain through a fine sieve into a bowl. Taste and adjust the seasoning. Let cool, then refrigerate until ready to serve.",
      "Place the crème fraîche in a small chilled bowl and stir in nutmeg to taste. Whisk until it holds a shape. Cover and refrigerate.",
      "Gently reheat the soup until just hot; if too thick, add a little more stock. Heat a medium skillet over high heat. When very hot, add the butter and rotate the skillet to brown it evenly, scraping up any bits. As soon as the butter is hazelnut brown, pour it into the soup (keep a safe distance — it may sputter), then stir.",
      "Ladle the soup into six bowls. Top each with a dollop of crème fraîche, grind black pepper over the top, sprinkle with chives, and drizzle with a little olive oil."
    ]
  },
  {
    cuisine: "soup", name: "Beef Bourguignon",
    servings: "Serves 4 to 6", tags: ["beef", "stew", "french", "red wine", "burgundy", "do-ahead", "low & slow", "classic"],
    ingredients: [
      "3 pounds beef chuck or other boneless stewing beef, cut into 2-inch cubes and patted dry",
      "2¼ teaspoons kosher salt, more to taste",
      "½ teaspoon freshly ground black pepper",
      "5 ounces lardons, pancetta or bacon, diced (about 1¼ cups)",
      "1 onion, finely chopped",
      "1 large carrot, sliced",
      "2 garlic cloves, minced",
      "1 teaspoon tomato paste",
      "2 tablespoons all-purpose flour",
      "1 (750-milliliter) bottle of red wine",
      "1 large bay leaf",
      "1 large sprig of thyme",
      "8 ounces pearl onions, peeled (about 12 to 15)",
      "8 ounces cremini mushrooms, halved if large (about 4 cups)",
      "1 tablespoon extra-virgin olive oil",
      "Pinch of sugar",
      "Chopped flat-leaf parsley, for garnish"
    ],
    steps: [
      "Season the beef with 2 teaspoons salt and ½ teaspoon pepper. Set aside at least 30 minutes at room temperature, or chill up to 24 hours.",
      "In a large Dutch oven with a tightfitting lid, cook the lardons over medium-low heat until the fat is rendered and the lardons are browned and crisp, 10 to 15 minutes. Transfer with a slotted spoon to a paper-towel-lined plate. Reserve the fat in the pot.",
      "Heat the oven to 350 degrees. Raise the heat under the pot to medium-high and cook until the fat is starting to smoke. Lay half the beef in a single layer, leaving space between pieces. Cook until well browned on all sides, 10 to 15 minutes, transferring pieces to a plate as they brown. Repeat with the remaining beef.",
      "Reduce the heat if needed to prevent burning. Stir in the onion, carrot and remaining ¼ teaspoon salt and cook until soft, about 10 minutes, stirring occasionally.",
      "Stir in the garlic and tomato paste and cook 1 minute. Stir in the flour, cook 1 minute, then add the wine, bay leaf and thyme, scraping up the brown bits. Add the browned beef and half the cooked lardons back to the pot, cover, and transfer to the oven. Cook until the beef is very tender, about 1½ hours, turning the meat halfway through.",
      "Meanwhile, in a large skillet over high heat, combine the pearl onions, mushrooms, ¼ cup water, the olive oil and a pinch each of salt, pepper and sugar. Bring to a simmer, then cover, reduce the heat to medium and cook 15 minutes. Uncover, raise the heat to high, and cook, tossing frequently, until well browned, 5 to 7 minutes.",
      "To serve, scatter the onions, mushrooms and remaining lardons over the stew, then top with parsley."
    ]
  },
  {
    cuisine: "soup", name: "Dijon and Cognac Beef Stew",
    servings: "Serves 4 to 6", tags: ["beef", "stew", "dijon", "cognac", "mushrooms", "french", "low & slow", "do-ahead"],
    ingredients: [
      "¼ pound salt pork, diced",
      "1 large onion, finely diced",
      "3 shallots, chopped",
      "2 to 4 tablespoons unsalted butter, divided",
      "2 pounds beef chuck, in 1-inch cubes",
      "2 tablespoons all-purpose flour",
      "Kosher salt and black pepper",
      "½ cup Cognac",
      "2 cups beef stock",
      "½ cup Dijon mustard",
      "4 tablespoons Pommery (whole-grain) mustard, divided",
      "4 large carrots, peeled and cut into half-moon slices",
      "½ pound mushrooms, stemmed, cleaned and quartered",
      "¼ cup red wine"
    ],
    steps: [
      "Place the salt pork in a Dutch oven over low heat and cook until the fat is rendered. Remove and discard the solid pieces. Raise the heat and add the onion and shallots. Cook until softened but not browned, 10 to 15 minutes. Transfer with a slotted spoon to a large bowl.",
      "If needed, add 2 tablespoons butter to the pot. Dust the beef cubes with flour and season with salt and pepper. Shake off the excess and place half the cubes in the pot. Cook over medium-high until well browned, almost crusty, on all sides, then transfer to the bowl with the onions. Repeat with the remaining beef.",
      "Add the Cognac to the empty pot and cook, stirring, until the bottom is deglazed and the crust comes loose. Add the stock, Dijon mustard and 1 tablespoon Pommery mustard. Whisk to blend, then return the meat and onion mixture to the pot. Lower the heat, partly cover, and simmer gently until the meat is very tender, about 1½ hours.",
      "Add the carrots and continue simmering 30 minutes, or until tender. As they cook, heat 2 tablespoons butter in a medium skillet over medium-high and sauté the mushrooms until browned.",
      "Stir the mushrooms into the stew along with the remaining mustard and the red wine. Simmer 5 minutes, then taste, adjust the seasoning and serve hot."
    ]
  },
  {
    cuisine: "soup", name: "Spicy Corn and Coconut Soup",
    servings: "Serves 4", tags: ["soup", "corn", "coconut", "vegan", "spicy", "summer", "ginger", "thai-inspired"],
    ingredients: [
      "5 ears yellow or bicolor corn (or 5 cups frozen corn kernels)",
      "2 tablespoons olive oil",
      "2 shallots, thinly sliced into rings",
      "3 garlic cloves, minced",
      "1 (1-inch) piece ginger, peeled and minced",
      "1 serrano chile (or other chile), minced",
      "2 small red potatoes (6 to 8 ounces total), cut into ½-inch cubes",
      "2½ cups vegetable broth",
      "1 (15-ounce) can full-fat coconut milk",
      "1 tablespoon lime juice (from ½ lime)",
      "Kosher salt, to season",
      "Torn cilantro, toasted coconut flakes, chopped roasted peanuts, crispy fried shallots and lime wedges, to serve (optional)"
    ],
    steps: [
      "Cut the corn kernels off the cobs into a bowl. Using the back of a butter knife, scrape the cobs so the milky juices collect in the bowl and the cobs look dry. Set aside. (Skip if using frozen kernels.)",
      "In a large stockpot over medium heat, heat the olive oil. Add the shallots, garlic, ginger and chile and sauté, stirring occasionally, until soft and fragrant, 3 to 5 minutes. Add the corn kernels and juices and sauté until the corn is softer and brighter, about 3 minutes more.",
      "Add the potato pieces and stir to coat, 1 to 2 minutes.",
      "Pour in the vegetable broth and coconut milk. Bring to a boil, reduce to a simmer, cover, and cook 8 to 10 minutes, until the potatoes are tender.",
      "Use an immersion blender to roughly purée the soup so it's creamy with some corn kernels, potato chunks and chile flecks remaining (or blend about half in a blender and return to the pot). Season with the lime juice and salt. Ladle into bowls and garnish as you like."
    ]
  },
  {
    cuisine: "soup", name: "Chicken and Rice Soup",
    servings: "Serves 4 to 6", tags: ["soup", "chicken", "rice", "lemon", "cozy", "sick-day", "weeknight", "comfort"],
    ingredients: [
      "8 cups chicken broth",
      "1 pound boneless, skinless chicken thighs",
      "4 celery stalks, leaves reserved and stalks thinly sliced",
      "¾ cup jasmine rice (unrinsed)",
      "Salt",
      "½ cup fresh parsley leaves",
      "1 teaspoon fresh lemon zest, plus up to ½ cup lemon juice (from 2 to 3 lemons)",
      "1 small garlic clove",
      "1 tablespoon unsalted butter (optional)"
    ],
    steps: [
      "In a large Dutch oven or pot, combine the broth, chicken, celery and rice. Season lightly with salt. Bring to a simmer over medium-high heat, then reduce the heat and simmer until the chicken is cooked through and the rice starts to break down, 20 to 30 minutes.",
      "Meanwhile, finely chop together the parsley, lemon zest and up to ½ cup of the celery leaves. Transfer to a small bowl, grate in the garlic clove, season with salt and stir.",
      "Using tongs, remove the chicken to a bowl and shred with two forks, then stir it back into the soup. Off the heat, stir in the butter (if using) and season with salt. Stir in the lemon juice a little at a time until the soup is bright but still tastes like chicken.",
      "Divide among bowls and top with the parsley-lemon mixture. (The soup, minus the lemon and parsley, keeps refrigerated up to 3 days; add more broth when reheating since the rice absorbs liquid.)"
    ]
  },

  // ——— Lighter Fare ———
  {
    cuisine: "light", name: "Waldorf Salad",
    servings: "Serves 4", tags: ["apple", "celery", "walnut", "grapes", "creamy", "no-cook", "fresh", "classic", "fast & easy"],
    ingredients: [
      "2 Tbsp. mayonnaise",
      "2 Tbsp. plain yogurt (Greek or regular)",
      "1 Tbsp. lemon juice",
      "1 cup halved red grapes",
      "1 cup chopped apples",
      "1 cup sliced celery",
      "1/4 cup chopped parsley",
      "Kosher salt",
      "Freshly ground black pepper",
      "1 cup walnuts, toasted",
      "Bibb lettuce, for serving"
    ],
    steps: [
      "In a large bowl, whisk together the mayonnaise, yogurt, and lemon juice.",
      "Add the grapes, apple, celery, and parsley and fold until just combined. Season with salt and pepper. Top with walnuts and serve over lettuce."
    ]
  },
  {
    cuisine: "light", name: "Italian Antipasto Pasta Salad",
    servings: "Serves 8 (potluck)", tags: ["pasta", "potluck", "summer", "antipasto", "italian", "make-ahead", "no-cook-sauce"],
    ingredientGroups: [
      { title: "For the antipasto salad", items: [
        "8 oz. dry rotini pasta (or your favorite short pasta)",
        "9 oz. hard salami, chopped (or ¾ cup presliced)",
        "6.5 oz. pepperoni, chopped (or ½ cup presliced)",
        "1 cup canned artichoke hearts, drained & quartered",
        "2 cups cherry tomatoes, halved",
        "1 cup olives, pitted & halved (kalamata, green or a mixture of the two)",
        "½ cup pepperoncini, sliced",
        "8 oz. mozzarella pearls",
        "¼ cup red onion, sliced thin",
        "⅓ cup fresh basil, sliced thin"
      ]},
      { title: "For the Italian vinaigrette", items: [
        "½ cup olive oil",
        "¼ cup red wine vinegar",
        "2 garlic cloves, minced",
        "1 Tbsp Italian seasoning",
        "¼ tsp red pepper flakes",
        "Salt & black pepper, to taste"
      ]}
    ],
    steps: [
      "Cook the pasta. Cook the pasta according to the package's directions, then drain it and set the pasta aside to cool completely.",
      "Make the vinaigrette. Whisk the vinaigrette ingredients together in a small bowl or jar, then keep it chilled in the refrigerator while you prepare the rest of the salad.",
      "Prepare your salad ingredients. Cut the salami, pepperoni, and tomatoes; slice the olives and red onion; thinly slice the fresh basil.",
      "Mix & chill. Once the pasta is cool, add it to a large bowl with the rest of your ingredients and pour your desired amount of dressing over the top. Toss the salad until it is fully coated. (At this point you can serve it immediately or keep it chilled in the refrigerator for 30 minutes – 1 hour before serving.)",
      "Serve. Sprinkle shredded parmesan (if desired) and extra fresh basil over each individual portion and serve."
    ]
  },
  {
    cuisine: "light", name: "Mediterranean Farro Salad with Pepperoncini & Feta",
    servings: "Serves 6", tags: ["mediterranean", "farro", "feta", "pepperoncini", "make-ahead", "vegetarian", "potluck", "salad"],
    ingredientGroups: [
      { title: "For the dressing (yields about ¾ cup)", items: [
        "2 to 3 cloves garlic",
        "¼ cup red wine vinegar",
        "1 tablespoon dried oregano",
        "1 teaspoon kosher salt",
        "½ teaspoon Dijon mustard",
        "Freshly ground black pepper",
        "½ cup extra-virgin olive oil"
      ]},
      { title: "For the salad (yields about 7 cups)", items: [
        "½ cup farro (semi-pearled or pearled is fine; cooking time will differ)",
        "1 teaspoon kosher salt, plus more as needed",
        "2 medium bell peppers",
        "2 large or 4 small stalks celery",
        "½ medium English cucumber",
        "½ small red onion",
        "8 small pickled pepperoncinis",
        "6 ounces feta cheese, cut into ½-inch cubes (about 1½ cups)",
        "1 (about 15-ounce) can chickpeas"
      ]},
      { title: "For serving", items: [
        "½ head iceberg lettuce",
        "1 head radicchio"
      ]}
    ],
    steps: [
      "Make the vinaigrette: mince 2 large or 3 small cloves garlic and place in a large bowl. Add ¼ cup red wine vinegar, 1 tablespoon dried oregano, 1 teaspoon kosher salt, ½ teaspoon Dijon mustard, and several grinds of black pepper, and whisk to combine. While whisking constantly, slowly drizzle in ½ cup extra-virgin olive oil and continue whisking until emulsified. Pour half into an airtight container and transfer to the refrigerator. Set aside the bowl with the remaining vinaigrette.",
      "Make the salad: place ½ cup farro in a fine-mesh strainer, rinse under cool running water, and set aside to drain. Bring 6 cups of water to a boil in a medium saucepan over medium-high heat. Stir in the farro and 1 teaspoon kosher salt. Boil until the farro is tender but has a slight chew in the center — 10 to 15 minutes for pearled and 25 to 30 minutes for semi-pearled. Drain and return to the saucepan to cool.",
      "Prep the following ingredients, adding each one to the bowl of vinaigrette as you complete it: core, seed, and dice 2 bell peppers (about 2 cups). Dice 2 large or 4 small celery stalks (about 1 cup). Dice ½ English cucumber (about 1 cup). Thinly slice ½ small red onion into half-moons. Slice 8 small pepperoncinis (about ¼ cup). If needed, cut 6 ounces feta cheese into ½-inch cubes. Drain and rinse the can of chickpeas.",
      "Add the farro to the vinaigrette bowl and toss to combine. Taste and season with more salt as needed (likely about ½ teaspoon). If the salad is at all dry, drizzle with a bit of the reserved vinaigrette. Cover and store in the refrigerator.",
      "Core and chop ½ head of iceberg lettuce into thin strips (4 packed cups). Core and chop 1 head radicchio into thin strips (3 packed cups). Transfer both to a large airtight container, toss to combine, and refrigerate.",
      "When ready to eat, toss together equal amounts of the chickpea mixture and the lettuce mixture (heaping 1 cup of each). Drizzle with the reserved dressing, if desired."
    ]
  },
  {
    cuisine: "light", name: "Mediterranean Grain Bowl with Olives & Arugula",
    servings: "Serves 1", tags: ["mediterranean", "grain bowl", "farro", "arugula", "olives", "feta", "20-minute", "meal prep"],
    ingredientGroups: [
      { title: "Dressing (cut in ½ if not making chicken)", items: [
        "3 Tablespoons olive oil",
        "2 Tablespoons red wine vinegar",
        "1 teaspoon dried oregano",
        "1 teaspoon pepperoncini juice (optional)",
        "¼ teaspoon kosher salt",
        "¼ teaspoon Dijon"
      ]},
      { title: "Salad", items: [
        "⅓ cup water",
        "pinch kosher salt",
        "¼ cup farro, uncooked",
        "1 cup sliced cucumber, English or Persian",
        "2-3 ounces chicken (optional)",
        "½ cup chickpeas, drained, rinsed",
        "large handful arugula",
        "⅓ cup cherry or grape tomatoes, sliced",
        "2 Tablespoons Kalamata olives, sliced",
        "2 Tablespoons feta, large crumbles",
        "1 Tablespoon pepperoncini, sliced",
        "lemon wedge (optional)"
      ]}
    ],
    steps: [
      "Farro: bring ⅓ cup water to a boil, add ¼ cup farro and a pinch of salt. Cover, simmer for 15–20+ minutes, or until tender. Check water level while cooking — add more if needed; you can easily drain extra after cooking.",
      "Make the dressing: add 3 tablespoons olive oil, 2 tablespoons red wine vinegar, 1 teaspoon oregano, 1 teaspoon pepperoncini juice (optional), ¼ teaspoon kosher salt, and ¼ teaspoon Dijon to a jar. Screw on lid; shake vigorously. (You can also whisk in a bowl, but a jar lets you store leftover dressing.)",
      "Chicken (optional): add about 1 tablespoon of dressing to the chicken. Cook in a skillet over medium heat for about 5 minutes per side, until the center is 160–165°F. Set aside.",
      "Assemble the grain bowl: add a large handful of arugula, the cooked farro, ½ cup drained chickpeas, sliced cucumber, tomatoes, 2 tablespoons Kalamata olives, 2 tablespoons crumbled feta, and 1 tablespoon sliced pepperoncini. Add desired amount of dressing. Squeeze lemon over the salad, if desired."
    ]
  },
  {
    cuisine: "light", name: "Egg Salad",
    servings: "Sandwich-sized (about 4)", tags: ["eggs", "lunch", "picnic", "make-ahead", "creamy", "no-cook", "kid-friendly"],
    ingredients: [
      "8 eggs, hard boiled and cooled",
      "½ cup mayonnaise",
      "1½ teaspoons yellow mustard",
      "1 green onion, thinly sliced",
      "1 rib celery, finely diced",
      "2 teaspoons fresh dill, chopped"
    ],
    steps: [
      "Cut the eggs in half. Remove yolks and chop the whites.",
      "Mash the yolks with the mayonnaise, mustard, and salt & pepper to taste until smooth and creamy.",
      "Add the remaining ingredients and stir well.",
      "Serve on bread or over lettuce.",
      "To hard-boil the eggs: place eggs in a saucepan and cover with water ½″ above the eggs. Bring to a rolling boil over high heat. Cover and remove from heat. Let stand covered for 15–17 minutes (for large eggs). Remove from hot water and place in a bowl of ice water for 5 minutes."
    ]
  },
  {
    cuisine: "light", name: "Grilled Corn Salad with Cilantro Vinaigrette",
    servings: "Serves 6", tags: ["corn", "summer", "grilled", "cilantro", "fresh", "potluck", "vegetarian"],
    ingredients: [
      "6 ears of corn, shucked",
      "1 large sweet onion, cut into 1/2-inch-thick rings",
      "1/2 cup olive oil, plus more for brushing",
      "Kosher salt and black pepper, to taste",
      "1/3 cup fresh lime juice (from 2 to 3 limes)",
      "1 1/2 cups fresh cilantro",
      "2 avocados, chopped",
      "2 yellow tomatoes, chopped",
      "1 (15-ounce) can pinto beans, drained and rinsed",
      "1/4 cup pimientos, finely chopped"
    ],
    steps: [
      "Preheat a grill to medium-high. Brush the corn and onion rings with olive oil and season with salt and pepper. Grill, turning occasionally, until lightly charred and tender, about 8 minutes for the onion rings and about 10 minutes for the corn. Set aside to cool.",
      "Combine the lime juice and 3/4 cup cilantro in a blender and pulse until chunky. With the blender running, pour in the olive oil in a slow, steady stream to make a thick dressing. Season with salt and pepper.",
      "Cut the corn off the cobs and roughly chop the onion. Combine in a large bowl with the avocados, tomatoes, beans, and pimientos. Roughly chop the remaining 3/4 cup cilantro and add to the bowl. Drizzle with the dressing and toss well. Season with salt and pepper, if needed."
    ]
  },
  {
    cuisine: "light", name: "Cucumber Onion Salad",
    servings: "Serves 5", tags: ["cucumber", "no-cook", "summer", "make-ahead", "fresh", "vegetarian", "side"],
    ingredients: [
      "6 mini cucumbers, or 1 English cucumber",
      "¼ of a large sweet onion (or red onion)",
      "3 tablespoons white vinegar",
      "1 teaspoon granulated sugar",
      "1 teaspoon red wine vinegar",
      "Salt and freshly ground black pepper, to taste"
    ],
    steps: [
      "Slice the cucumbers into thin slices. Slice the onion into very thin slices. Place both in a large bowl.",
      "In a small bowl, combine the white vinegar, sugar, red wine vinegar, and a pinch of salt and pepper. Taste the dressing and adjust — add a little more sugar for sweeter, or a splash more vinegar for tangier.",
      "Pour the dressing over the vegetables and toss to combine. For the best flavor, let the salad marinate in the fridge for at least an hour before serving."
    ]
  },
  {
    cuisine: "light", name: "Mediterranean Quinoa Salad",
    servings: "Serves 10", tags: ["meal prep", "fresh"],
    ingredients: [
      "1 cup dried quinoa",
      "15 oz can chickpeas, rinsed and drained",
      "1¼ cups pitted Kalamata olives, drained",
      "1 large English cucumber, bite-sized chunks",
      "1 pint grape tomatoes, halved",
      "1 large bell pepper, seeded and chopped",
      "½ cup crumbled feta cheese",
      "¼ cup chopped red onion",
      "⅓ cup olive oil",
      "3 tbs red wine vinegar",
      "1 tsp dried oregano",
      "1 tsp garlic powder",
      "1 tsp salt",
      "¼ tsp pepper"
    ],
    steps: [
      "Add quinoa and 2 cups water to a medium saucepan. Cover tightly and bring to boil. Reduce heat and simmer 20 minutes or until water is absorbed. Fluff with a fork and set aside to cool completely.",
      "Chop all veggies.",
      "For vinaigrette, whisk olive oil, red wine vinegar, oregano, garlic powder, salt and pepper.",
      "In a large salad bowl, add quinoa, chopped veggies and feta.",
      "Pour dressing over top and serve."
    ]
  },
  {
    cuisine: "light", name: "Warm Grain Bowl (Panera Copycat)",
    servings: "Serves 2", tags: ["bowl", "balanced"],
    ingredients: [
      "Lemon/garlic marinade",
      "2 chicken breasts",
      "2 cups cooked quinoa",
      "2 cups arugula or spinach",
      "10 grape tomatoes, sliced in half",
      "⅓ cup kalamata olives",
      "½ cucumber, diced",
      "½ cup hummus",
      "½ cup plain Greek yogurt",
      "½ cup feta crumbles",
      "½ lemon"
    ],
    steps: [
      "Marinate chicken breasts overnight.",
      "Preheat oven to 350°. Bake chicken breasts for 20 minutes, or until no longer pink inside.",
      "Cook quinoa according to package instructions.",
      "In 2 serving bowls, layer arugula/spinach, then quinoa, then sliced veggies. Slice chicken and place on top. Add a heaping spoonful of hummus and yogurt to each side. Top with feta. Squeeze lemon over top. Serve warm."
    ]
  },
  {
    cuisine: "light", name: "Curry Chicken Salad",
    servings: "Family-sized", tags: ["chilled", "lunch"],
    ingredientGroups: [
      { title: "Salad", items: [
        "1 roasted chicken, cooled and cut into bite-sized pieces",
        "1 small onion, chopped",
        "2 celery stalks, chopped",
        "½ cup raisins",
        "½ cup cashews (optional)"
      ]},
      { title: "Dressing", items: [
        "½ cup mayo", "1 tbs curry powder", "½ cup plain yogurt",
        "2 tbs milk", "1 tbs lemon juice", "1 tsp honey", "2 tbs mango chutney"
      ]}
    ],
    steps: [
      "Mix all salad ingredients together in a bowl.",
      "Mix all dressing ingredients in a separate bowl.",
      "Pour dressing over salad and serve alone or on sandwich bread."
    ]
  },
  {
    cuisine: "light", name: "Cheese & Fruit Pasta Salad",
    servings: "Serves 4", tags: ["summer", "potluck"],
    ingredients: [
      "1 cup dried rope, corkscrew or bowtie pasta",
      "1 cup cubed cheddar cheese, bite-sized",
      "2 green onions, chopped",
      "2 medium nectarines",
      "1 cup halved strawberries",
      "⅓ cup lime juice",
      "¼ cup salad oil",
      "1 tbs honey",
      "½ tsp dried thyme"
    ],
    steps: [
      "Cook pasta according to package directions. Drain and rinse in cold water.",
      "In a large bowl, combine pasta, cheese, onions, nectarines and strawberries.",
      "For dressing, in a small bowl combine lime juice, oil, honey and thyme. Pour over pasta mixture and stir to coat."
    ]
  },
  {
    cuisine: "light", name: "Curry Apple & Celery Pasta Salad",
    servings: "Serves 4", tags: ["chilled", "crunchy"],
    ingredients: [
      "3 oz dried elbow macaroni",
      "1 cup chopped apple",
      "⅓ cup chopped celery",
      "⅓ cup mayo",
      "½ tsp curry powder",
      "⅓ cup plain yogurt",
      "⅛ tsp salt",
      "¼ cup cashews"
    ],
    steps: [
      "Cook pasta according to directions. Drain and rinse with cold water.",
      "In a large bowl, combine pasta, apple and celery.",
      "For dressing, whisk mayo, yogurt, curry powder and salt. Pour over pasta mixture and toss. Cover and chill.",
      "Before serving, add cashews."
    ]
  },
  {
    cuisine: "light", name: "Overnight Oats",
    servings: "Single serving", tags: ["no-cook", "make-ahead"],
    ingredients: [
      "⅓ to ½ cup milk",
      "⅓ to ½ cup old-fashioned rolled oats",
      "Fresh fruit for topping (bananas, blueberries, strawberries)",
      "Optional toppings: honey, granola, shredded coconut"
    ],
    steps: [
      "Add desired amounts of milk and oats to a small individual serving bowl and stir well.",
      "Refrigerate overnight.",
      "Before serving, add additional milk if necessary. Add toppings."
    ]
  },
  {
    cuisine: "light", name: "Arugula Salad With Peaches, Goat Cheese and Basil",
    servings: "Serves 4", tags: ["salad", "arugula", "peaches", "goat cheese", "summer", "no-cook", "fast & easy", "vegetarian"],
    ingredients: [
      "¼ cup pine nuts",
      "¼ cup extra-virgin olive oil",
      "2 tablespoons champagne vinegar or white wine vinegar",
      "½ teaspoon kosher salt",
      "¼ teaspoon black pepper",
      "4 to 5 ounces baby arugula",
      "2 ripe peaches, pitted and cut into ¼-inch slices (about 10 ounces)",
      "½ cup julienned fresh basil leaves",
      "2 ounces creamy goat cheese, crumbled (about ½ cup), plus more to taste"
    ],
    steps: [
      "In a small sauté pan, toast the pine nuts over medium heat, tossing often, until golden brown, about 3 minutes. Remove from the heat.",
      "In a small measuring cup or bowl, whisk together the olive oil, vinegar, salt and pepper.",
      "Place the arugula in a large salad bowl. Pour just enough dressing over the greens to moisten and toss to coat. Add the peaches, basil, goat cheese and toasted pine nuts and toss. Add more goat cheese and dressing if desired. Toss gently and serve immediately."
    ]
  },
  {
    cuisine: "light", name: "Cucumber Salad With Roasted Peanuts and Chile",
    servings: "Serves 2 to 4", tags: ["salad", "cucumber", "peanut", "chile", "no-cook", "asian", "fast & easy", "vegetarian"],
    ingredients: [
      "6 Persian cucumbers (about 1 pound), cut lengthwise into thin spears, then crosswise into 2-inch pieces",
      "Kosher salt",
      "¼ cup salted, roasted peanuts",
      "¼ cup cilantro leaves",
      "1 teaspoon red-pepper flakes",
      "3 tablespoons natural unsalted peanut butter",
      "2 tablespoons soy sauce",
      "2 tablespoons unseasoned rice vinegar",
      "1 teaspoon granulated sugar",
      "1 small garlic clove, grated",
      "Chile oil, store-bought or homemade, for serving (optional)"
    ],
    steps: [
      "Toss the cucumbers with ½ teaspoon kosher salt in a colander. Set aside to drain.",
      "Chop the peanuts, cilantro and red-pepper flakes together until very fine. Set aside.",
      "In a large bowl, whisk together the peanut butter, soy sauce, rice vinegar, sugar, garlic and ½ teaspoon kosher salt. Add up to 1 tablespoon water if needed to thin. Transfer the salted cucumbers to the bowl and toss to coat.",
      "To serve, place half the cucumber salad on a plate and sprinkle with half the peanut mixture. Repeat with the remaining salad and peanut mixture. Drizzle with chile oil, if using, and serve immediately."
    ]
  },
  {
    cuisine: "light", name: "Fennel-Apple Salad With Walnuts",
    servings: "Serves 10", tags: ["salad", "fennel", "apple", "walnuts", "thanksgiving", "crunchy", "no-cook", "make-ahead"],
    ingredients: [
      "3 tablespoons lemon juice, plus more to taste",
      "½ teaspoon fine sea salt, plus more to taste",
      "Freshly ground black pepper",
      "¼ cup extra-virgin olive oil",
      "3 large fennel bulbs, thinly sliced on a mandoline",
      "2 Granny Smith apples, halved, cored and thinly sliced on a mandoline",
      "3 celery stalks, thinly sliced on a mandoline",
      "⅓ cup fennel fronds or roughly chopped parsley leaves",
      "½ cup toasted walnuts",
      "2½ ounces Parmesan, shaved with a vegetable peeler (about ⅔ cup)"
    ],
    steps: [
      "In a small bowl, whisk together the lemon juice, salt and pepper. Slowly drizzle in the oil, whisking continuously, until the dressing is emulsified. Taste and add more lemon juice and/or salt if needed.",
      "In a large bowl, toss the dressing with the fennel, apple and celery. Fold in the fennel fronds or parsley and the walnuts. Top with the Parmesan just before serving. (The dressing can be made a day ahead; dress the salad within an hour of serving.)"
    ]
  },
  {
    cuisine: "light", name: "Sheet-Pan Feta With Chickpeas and Tomatoes",
    servings: "Serves 4", tags: ["vegetarian", "sheet-pan", "feta", "chickpeas", "tomatoes", "mediterranean", "weeknight", "meatless"],
    ingredients: [
      "3 cups cooked chickpeas (homemade or two 15-ounce cans), drained, rinsed and shaken dry",
      "2 pints (16 to 20 ounces) cherry or Sungold tomatoes",
      "1 shallot, thinly sliced",
      "¼ cup extra-virgin olive oil",
      "2 tablespoons honey",
      "1 teaspoon mild chile flakes (like gochugaru) or ½ teaspoon red-pepper flakes",
      "Salt",
      "2 (6- to 8-ounce) blocks of feta, sliced 1-inch thick"
    ],
    steps: [
      "Heat the oven to 400 degrees. On a sheet pan, stir together the chickpeas, tomatoes, shallot, olive oil, honey and chile flakes. Season with salt, then spread in an even layer. Arrange the feta among the chickpeas.",
      "Roast until the feta and tomatoes are soft and the chickpeas are golden brown, 30 to 35 minutes (no need to stir). Eat right away with pita, grains or salad greens. (The feta will harden as it cools; reheat leftovers.)"
    ]
  },
  {
    cuisine: "light", name: "Spiced Chickpea Salad With Tahini and Pita Chips",
    servings: "Serves 4 (main course)", tags: ["salad", "chickpeas", "tahini", "vegetarian", "falafel-inspired", "pita", "main-course salad", "mediterranean"],
    ingredientGroups: [
      { title: "For the Chickpeas", items: [
        "2 (15-ounce) cans chickpeas, well drained, or 4 cups cooked chickpeas",
        "¾ to 1 cup extra-virgin olive oil",
        "2 garlic cloves, minced",
        "2 teaspoons ground cumin (or 1 teaspoon each ground cumin and ground coriander)",
        "1 teaspoon sweet paprika",
        "Salt and pepper"
      ]},
      { title: "For the Tahini Sauce", items: [
        "⅓ cup tahini",
        "Freshly squeezed juice of 1 lemon, plus more to taste",
        "1 garlic clove, minced",
        "Warm water, as needed"
      ]},
      { title: "To Finish", items: [
        "Olive oil, for cooking",
        "About 10 ounces kale, chard or spinach, washed and thick stems removed",
        "3 cups store-bought or homemade pita chips",
        "Handful of roughly chopped flat-leaf parsley",
        "Handful of roughly chopped mint",
        "1 large or 2 small cucumbers, peeled and thinly sliced",
        "Lemon, cut into wedges"
      ]}
    ],
    steps: [
      "Make the chickpeas: Heat the oven to 425 degrees. Pour the chickpeas into a small baking dish, about 6 by 8 inches, crowded together in a thick layer. Pour in olive oil just until the chickpeas are covered. (It will look like a lot, but it forms part of the dressing.)",
      "Add the garlic, cumin, paprika and 2 big pinches each of salt and pepper. Stir gently. Bake until the oil is bubbling and the chickpeas are turning reddish-brown, 35 to 40 minutes. Set aside to cool.",
      "Meanwhile, make the tahini sauce: Whisk the lemon juice and garlic into the tahini (it will thicken and clump). Slowly whisk in warm water, 1 tablespoon at a time, until smooth, creamy and pourable. Season with salt, pepper and more lemon juice to taste.",
      "Cook the greens: Place a large frying pan over medium heat and drizzle lightly with olive oil. When hot, add the greens in batches with a big pinch of salt. Stir until wilted and tender; set aside.",
      "To serve, gently mix the chickpeas and their oil with the cooked greens, half the pita chips, and the chopped herbs. Mound in 4 shallow bowls. Arrange cucumber slices around the chickpeas, drizzle thickly with half the tahini sauce, and scatter the remaining pita chips on top. Serve with lemon wedges and extra tahini sauce."
    ]
  },

  // ——— Sides & Extras ———
  {
    cuisine: "side", name: "Guacamole",
    servings: "Serves 4–6 as a dip", tags: ["dip", "avocado", "mexican", "fresh", "no-cook", "appetizer", "party", "fast & easy"],
    ingredients: [
      "3 avocados — peeled, pitted, and mashed",
      "1 lime, juiced",
      "1 teaspoon salt",
      "1/2 cup diced onion",
      "3 tablespoons chopped fresh cilantro",
      "2 roma (plum) tomatoes, diced",
      "1 teaspoon minced garlic",
      "1 pinch ground cayenne pepper (optional)"
    ],
    steps: [
      "In a medium bowl, mash together the avocados, lime juice, and salt. Mix in the onion, cilantro, tomatoes, and garlic. Stir in cayenne pepper. Refrigerate 1 hour for best flavor, or serve immediately."
    ]
  },
  {
    cuisine: "side", name: "Cilantro-Lime Black Bean Rice",
    servings: "Side dish (about 4)", tags: ["rice", "black beans", "cilantro", "lime", "gluten-free", "vegetarian", "side"],
    ingredients: [
      "2 cups chicken broth or vegetable broth",
      "1 cup Jasmine rice, uncooked, or use any rice that says on the package that it takes 15 minutes to cook",
      "¼ teaspoon salt",
      "4 garlic cloves, minced",
      "2 tablespoons lime juice, freshly squeezed (use one 1 tablespoon first, before adding another)",
      "15 oz black beans, rinsed, drained, from the can",
      "½ cup fresh cilantro, chopped"
    ],
    steps: [
      "Use a large, deep skillet or a large sauce pan.",
      "Add the broth, uncooked rice, ¼ teaspoon salt, and minced garlic to the skillet (or pan). Bring to a boil. Mix everything well. Reduce the heat to a low simmer. Cover the skillet with the lid. Simmer for 15–20 minutes, covered, until the rice is cooked through.",
      "Remove the skillet from heat. Mix in 1 tablespoon of freshly squeezed lime juice, the black beans (rinsed and drained), and fresh cilantro into the cooked rice. Taste, and add more salt and/or another small amount of lime juice (at most 1 extra tablespoon — try adding half of the extra tablespoon first).",
      "Note: 2 tablespoons of lime juice (freshly squeezed only!) are about perfect, but the lime flavor might be too strong for some — start with 1 to 1.5 tablespoons and adjust to taste."
    ]
  },
  {
    cuisine: "side", name: "Cocktail Meatballs",
    servings: "Party-sized", tags: ["appetizer", "party", "slow-cooker", "meatball", "make-ahead", "crowd-pleaser", "3-ingredient"],
    ingredients: [
      "1 (32 ounce) bag frozen fully-cooked meatballs",
      "12 ounces chili sauce",
      "10 ounces grape jelly"
    ],
    steps: [
      "Add the frozen meatballs to a crockpot. Add the chili sauce and grape jelly. Cover and cook for 2 to 3 hours on HIGH or 4 to 6 hours on LOW, until the sauce is hot.",
      "Serve directly from the crockpot with a serving spoon or toothpicks, or transfer to a serving dish."
    ]
  },
  {
    cuisine: "side", name: "Grandma's Stuffing",
    servings: "For one bird", tags: ["heirloom", "holiday"],
    ingredients: [
      "1 loaf white bread (left out overnight to dry out)",
      "2 cups chopped celery",
      "1 large onion, chopped",
      "3–4 eggs",
      "Salt to taste",
      "2 tsp poultry seasoning",
      "1 lb butter"
    ],
    steps: [
      "Break dried bread into small pieces and place in a large bowl. Chop onion and celery and add to bread.",
      "Add eggs, salt and poultry seasoning.",
      "Melt butter and add to bread mixture.",
      "Stir together. Add more poultry seasoning as needed.",
      "Stuff the turkey!"
    ]
  },
  {
    cuisine: "side", name: "Couscous Side Dish",
    servings: "Serves 4–6", tags: ["fast & easy", "fresh"],
    ingredients: [
      "10 oz box couscous",
      "2 tbs olive oil",
      "2 cloves garlic",
      "2 cups fresh baby spinach",
      "¼ cup crumbled feta",
      "2 tbs lemon juice",
      "Salt and pepper to taste"
    ],
    steps: [
      "Cook couscous as directed on box.",
      "In a separate pan, sauté garlic in oil, then add to fully cooked couscous.",
      "Fold in spinach, feta, lemon juice, salt and pepper.",
      "Serve hot."
    ]
  },
  {
    cuisine: "side", name: "Potato Casserole",
    servings: "Crowd-sized", tags: ["baked", "cheesy"],
    ingredients: [
      "2 lb bag frozen southern hashbrowns — thawed",
      "1 diced onion",
      "1 can cream of chicken soup",
      "16 oz sour cream",
      "½ stick butter, melted",
      "8 oz sharp cheddar cheese, shredded",
      "Salt and pepper to taste",
      "Topping: ½ stick butter, melted; ¾ cup cornflakes, crushed"
    ],
    steps: [
      "Preheat oven to 350°.",
      "In a large bowl, combine hashbrowns, onion, soup, sour cream, butter, cheese, salt and pepper. Mix well.",
      "Spoon potato mixture into a 9×13 pan.",
      "In a small bowl, combine melted butter with crushed cornflakes. Place evenly over top of potatoes.",
      "Cover with foil and bake 1 hour. Remove foil and bake an additional ½ hour."
    ]
  },
  {
    cuisine: "side", name: "Marinade for Grilled Steak & Chicken",
    servings: "Marinade", tags: ["grill", "go-to"],
    ingredients: [
      "1 cup oil",
      "¾ cup soy sauce",
      "½ cup lemon juice",
      "¼ cup Worcestershire sauce",
      "¼ cup mustard",
      "1½ tsp pepper",
      "2 cloves garlic, minced"
    ],
    steps: [
      "Mix all ingredients together, then marinate for 4 to 24 hours."
    ]
  },
  {
    cuisine: "side", name: "Sweet & Spicy Marinade for Chicken",
    servings: "Marinade", tags: ["citrus", "grill"],
    ingredients: [
      "2 lbs chicken",
      "1 tsp salt",
      "Grated peel from 2 small unwaxed oranges",
      "1–2 jalapeños, finely chopped",
      "3 cloves garlic, peeled and finely chopped",
      "2 tsp honey",
      "2 tbs olive oil",
      "Juice from 1 lime",
      "1 pinch ground black pepper"
    ],
    steps: [
      "Combine all ingredients to form the marinade.",
      "Coat chicken thoroughly and refrigerate for several hours, then grill or roast as desired."
    ]
  },
  {
    cuisine: "side", name: "Roasted Carrots",
    servings: "Serves 6", tags: ["carrots", "roasted", "side", "thyme", "vegetarian", "easy", "make-ahead", "healthy"],
    ingredients: [
      "2 pounds carrots",
      "1 teaspoon fresh thyme leaves",
      "3 tablespoons extra-virgin olive oil",
      "Salt",
      "Freshly ground pepper",
      "½ teaspoon dried oregano",
      "3 tablespoons finely chopped flat-leaf parsley"
    ],
    steps: [
      "Heat the oven to 400 degrees. Peel the carrots and cut into 2-inch segments, then quarter or cut into sixths lengthwise depending on size. Chop the thyme.",
      "Oil a sheet pan or baking dish large enough to fit the carrots in a single layer. In a large bowl, toss the carrots with the olive oil, salt, pepper, thyme and oregano. Spread in an even layer. Cover with foil and roast 20 to 30 minutes. Uncover, and if not yet tender, turn the heat down to 375 degrees and return for 5 to 10 minutes more. (For caramelized edges, roast uncovered for all or part of the time.)",
      "Add the parsley, stir gently, and taste and adjust the salt and pepper. Serve hot, warm or at room temperature."
    ]
  },

  // ——— Sweet Endings ———
  {
    cuisine: "sweet", name: "Rice Krispie Chocolate Chip Cookies",
    servings: "About 24 cookies", tags: ["cookies", "chocolate chip", "crispy", "rice krispies", "kid-friendly", "baked", "make-ahead", "snack"],
    ingredients: [
      "1 cup unsalted butter, softened",
      "¾ cup brown sugar, packed",
      "½ cup granulated sugar",
      "2 large eggs",
      "1 teaspoon vanilla extract",
      "2¼ cups all-purpose flour",
      "1 teaspoon baking soda",
      "½ teaspoon salt",
      "1½ cups semi-sweet chocolate chips",
      "2 cups Rice Krispies cereal"
    ],
    steps: [
      "Preheat your oven to 350°F (175°C) and line a baking sheet with parchment paper.",
      "In a large mixing bowl, beat the softened butter, brown sugar, and granulated sugar together until light and fluffy (about 2 minutes). Add the eggs, one at a time, beating well after each addition. Mix in the vanilla extract.",
      "In a separate bowl, whisk together the flour, baking soda, and salt. Gradually add the dry ingredients to the wet ingredients, mixing until just combined.",
      "Gently stir in the chocolate chips until evenly distributed. Carefully fold in the Rice Krispies cereal, being gentle so they stay crispy.",
      "Scoop tablespoon-sized dough balls onto the prepared baking sheet, spacing them 2 inches apart. Bake for 10–12 minutes, or until the edges are lightly golden. Let the cookies cool on the baking sheet for 5 minutes before transferring them to a wire rack."
    ]
  },
  {
    cuisine: "sweet", name: "Apple Crisp",
    servings: "Serves 6", tags: ["apple", "baked", "fall", "fruit", "make-ahead", "kid-friendly"],
    ingredients: [
      "2½ cups apples — peeled, cored, and sliced",
      "1 cup sifted all-purpose flour",
      "1 cup white sugar",
      "½ teaspoon ground cinnamon",
      "¼ teaspoon salt",
      "½ cup butter, softened"
    ],
    steps: [
      "Preheat the oven to 375°F (190°C). Lightly grease an 8-inch square baking dish.",
      "Arrange the apple slices evenly in the prepared baking dish.",
      "Sift the flour, sugar, cinnamon, and salt into a bowl.",
      "Cut in the butter using a pastry blender or 2 knives until the mixture resembles coarse cornmeal; sprinkle over the apples.",
      "Bake in the preheated oven until the topping is golden, 40 to 45 minutes.",
      "Cool slightly before serving."
    ]
  },
  {
    cuisine: "sweet", name: "5 Ingredient No Bake Chocolate Cheesecake",
    servings: "For an 8–9 inch springform pan", tags: ["no-bake", "make-ahead"],
    ingredientGroups: [
      { title: "For the cheesecake base", items: [
        "85g (3 oz) Oreo cookies with the insides removed",
        "30g (2½ tbsp) Melted butter"
      ]},
      { title: "For the filling", items: [
        "600 g (22 oz) Philadelphia cream cheese",
        "500 g (18 oz) Nutella",
        "100 g (¾ cup) Powdered sugar"
      ]},
      { title: "For the rich chocolate glaze (optional)", items: [
        "200 g (7 oz) Dark chocolate — 50% cocoa",
        "200 g (7 oz) Heavy cream",
        "3 tbsp Glucose syrup (or honey)",
        "3 tbsp Butter",
        "Pinch of salt"
      ]}
    ],
    steps: [
      "Make the base: in a bowl, mix the crushed cookies with the melted butter to form a sand-like texture.",
      "Spoon the mixture into your prepared springform pan, lined with parchment paper, and press it down. Set aside.",
      "Make the filling: in a bowl, add the cream cheese and powdered sugar and mix to combine.",
      "Add the softened, room-temperature (not hot) Nutella and mix well to combine. For a lighter mousse texture, fold in some whipped cream.",
      "Transfer the filling into your pan and smooth off the surface.",
      "Cover well and refrigerate for at least 8 hours, or for best results overnight.",
      "Make the glaze (optional): cut the chocolate into small pieces and add the butter. In a pan over low-medium heat, combine the heavy cream with glucose or honey. Pour over the chocolate and mix until the chocolate is fully melted and combined. Allow to cool, then pour over the chilled cheesecake.",
      "Serve with whipped cream, or with the chocolate ganache glaze."
    ]
  },
  {
    cuisine: "sweet", name: "Death by Chocolate",
    servings: "Trifle for a crowd", tags: ["showstopper", "chocolate"],
    ingredients: [
      "1 package brownie mix",
      "Two 3.9 oz packages instant chocolate pudding mix",
      "16 oz package Cool Whip, thawed",
      "Three 1.4 oz candy bars (e.g., Kit Kat, Heath, Butterfinger)"
    ],
    steps: [
      "Prepare brownies according to package directions. Cool completely, then crumble into small pieces.",
      "Mix pudding according to package directions. Let set completely.",
      "In a large glass trifle bowl, layer in this order: ½ brownie crumbles, ½ pudding, 1 candy bar (crushed), ½ Cool Whip.",
      "Repeat layers in the same order. Save the last candy bar to crumble and sprinkle on top.",
      "Refrigerate. Best if made the day before serving."
    ]
  },
  {
    cuisine: "sweet", name: "Banana Bread",
    servings: "1 loaf", tags: ["quick bread", "ripe bananas"],
    ingredients: [
      "3 ripe bananas",
      "⅓ cup butter, melted",
      "½ cup sugar",
      "1 egg, beaten",
      "1 tsp vanilla extract",
      "1 tsp baking soda",
      "Salt to taste",
      "1½ cups flour",
      "½ cup mini chocolate chips"
    ],
    steps: [
      "Preheat oven to 350°.",
      "In a bowl, mash bananas until smooth. Stir in melted butter until well combined.",
      "Add sugar, egg, vanilla, baking soda, salt and flour. Stir until smooth.",
      "Fold in chocolate chips and pour batter into a greased loaf pan. Top with additional chocolate chips.",
      "Bake 45 minutes or until a toothpick comes out clean.",
      "Cool completely before serving."
    ]
  },
  {
    cuisine: "sweet", name: "Easy Pumpkin Pie",
    servings: "2 pies", tags: ["holiday", "fall"],
    ingredients: [
      "1 package of 2 frozen 9\" pie crusts, deep dish",
      "2 eggs",
      "¼ cup sugar",
      "2½ tsp pumpkin pie spice",
      "½ tsp salt",
      "16 oz can pumpkin",
      "12 oz can evaporated milk"
    ],
    steps: [
      "Preheat oven to 425°.",
      "Prepare packaged pie crusts according to directions for filled one-crust pies.",
      "In a large bowl, beat eggs slightly. Add remaining ingredients and blend well.",
      "Pour into crust-lined pans.",
      "Bake 15 minutes. Reduce heat to 350° and continue baking 45 minutes or until a knife inserted into center comes out clean.",
      "Cool and store in refrigerator."
    ]
  },
  {
    cuisine: "sweet", name: "Hugh's Thick Chocolate Chip Cookies",
    servings: "8–10 cookies", tags: ["bakery-style", "thick"],
    ingredients: [
      "½ cup unsalted butter, room temp",
      "¾ cup light brown sugar",
      "¼ cup white sugar",
      "1 large egg",
      "1 tsp vanilla extract",
      "2 cups flour",
      "½ tsp salt",
      "½ tsp baking powder",
      "¾ cup semi-sweet chocolate chips"
    ],
    steps: [
      "In a mixing bowl add butter and sugars. Cream together until fluffy.",
      "Add egg and vanilla and mix well.",
      "Add flour, baking powder and salt. Mix well. Dough may seem to be in crumbles.",
      "Pour in chocolate chips and use hands to mix them in. This will bring the dough together. Do not compact dough — keep it airy.",
      "Divide dough into 8 or 10 pieces. Gently form into uneven balls (do not form into tight balls). Place on baking sheet.",
      "Chill cookie dough for at least 30 minutes.",
      "Heat oven to 375°.",
      "Bake cookies for about 10–15 minutes, or until the outside is golden brown.",
      "Let cookies cool. Best served at room temp."
    ]
  },
  {
    cuisine: "sweet", name: "Chocolate Chip Pie",
    servings: "Serves 8", tags: ["pie", "warm"],
    ingredients: [
      "2 large eggs",
      "½ cup flour",
      "½ cup sugar",
      "½ cup packed light brown sugar",
      "1½ sticks butter, softened",
      "1 cup semi-sweet chocolate chips",
      "1 frozen unbaked 9-inch deep dish pie shell, thawed",
      "Toppings: vanilla ice cream or whipped cream"
    ],
    steps: [
      "Preheat oven to 325°.",
      "Beat eggs in a large mixing bowl on high speed until foamy. Beat in flour, sugar and brown sugar. Beat in butter. Stir in chocolate chips. Spoon into pie shell.",
      "Place pie onto a baking sheet. Bake 55–60 minutes or until a knife inserted in middle comes out clean. Cool on wire rack. Serve warm."
    ]
  },
  {
    cuisine: "sweet", name: "Nana's Shortbread Cookies",
    servings: "1 pan", tags: ["heirloom", "buttery"],
    ingredients: [
      "½ cup powdered sugar",
      "½ lb butter, softened",
      "2½ cups flour",
      "¼ tsp baking powder",
      "¼ tsp salt",
      "3 tbs milk"
    ],
    steps: [
      "Preheat oven to 350°. Grease an 8×8 pan.",
      "In a bowl, with a wooden spoon, mix powdered sugar and butter.",
      "In a separate bowl, mix flour, baking powder and salt.",
      "Add dry mix to butter-sugar mixture and mix well with wooden spoon.",
      "Add milk and mix well.",
      "Roll onto a floured board. Press into pan. Prick with a fork and bake 20–25 minutes."
    ]
  },
  {
    cuisine: "sweet", name: "Holiday Cookie Packages",
    servings: "64 cookies", tags: ["holiday", "decorated"],
    ingredients: [
      "1 cup butter, softened",
      "½ cup packed brown sugar",
      "¼ tsp ground cinnamon",
      "1 tsp vanilla extract",
      "2¼ cups flour",
      "Frosting: 2 cups powdered sugar",
      "⅓ cup butter, softened",
      "½ tsp vanilla extract",
      "1 to 2 tsps milk",
      "Red food coloring"
    ],
    steps: [
      "Line an 8-inch square pan with parchment paper.",
      "In a large bowl beat with electric mixer at medium speed all cookie ingredients except flour until creamy. Reduce speed to low, beat in flour. Press dough firmly and evenly in pan. Refrigerate 30 minutes.",
      "Preheat oven to 350°. Using parchment edges lift dough from pan. Cut into 8 rows in each direction to make 64 squares. Carefully place 1 inch apart on cookie sheets.",
      "Bake 13–17 minutes or until edges are lightly browned. Cool 5 minutes. Remove from cookie sheets. Cool completely, about 10 minutes.",
      "In a medium bowl, mix all frosting ingredients except food coloring until smooth, adding enough milk for desired consistency. Mix ⅓ cup of frosting with red food coloring. Place in a sandwich bag and partially seal.",
      "Spread uncolored frosting over cookies. Cut a small hole in the corner of the bag and pipe red frosting onto each cookie in the shape of bows."
    ]
  },
  {
    cuisine: "sweet", name: "Milk Chocolate Florentine Cookies",
    servings: "About 42 cookies", tags: ["sandwich", "delicate"],
    ingredients: [
      "⅔ cup butter",
      "2 cups quick oats",
      "1 cup sugar",
      "⅔ cup flour",
      "¼ cup corn syrup",
      "¼ cup milk",
      "1 tsp vanilla extract",
      "¼ tsp salt",
      "1¾ cups milk chocolate chips"
    ],
    steps: [
      "Preheat oven to 375°. Line baking sheets with foil.",
      "Melt butter in medium saucepan. Remove from heat. Stir in oats, sugar, flour, corn syrup, milk, vanilla and salt. Mix well.",
      "Drop by level teaspoonfuls about 3 inches apart onto prepared sheets. Spread thinly with rubber spatula.",
      "Bake 6–8 minutes or until golden brown. Cool completely on baking sheets on wire racks. Peel foil from cookies.",
      "Microwave chocolate chips until melted, stirring often.",
      "Spread melted chocolate onto flat side of half the cookies. Top with remaining cookies to create sandwich cookies."
    ]
  },
  {
    cuisine: "sweet", name: "Ozog Christmas Cookies",
    servings: "96 cookies", tags: ["holiday", "tradition"],
    ingredients: [
      "7½ cups flour",
      "2 tsp baking powder",
      "1 tsp salt",
      "2 cups butter, softened",
      "3 cups white sugar",
      "4 eggs",
      "4 tsp vanilla",
      "Frosting: powdered sugar, milk, vanilla"
    ],
    steps: [
      "Sift flour, baking powder and salt together; set aside.",
      "In a large bowl, cream butter and sugar until light and fluffy. Beat in eggs one at a time. Stir in vanilla.",
      "Gradually blend in flour mixture.",
      "Cover dough and chill 2 hours.",
      "Preheat oven to 400°. Grease cookie sheets.",
      "Roll out small portions of chilled dough to ¼-inch thickness. Cut shapes using cookie cutters.",
      "Bake 6–8 minutes. Remove from cookie sheets to cool on wire racks.",
      "To frost cooled cookies, mix powdered sugar and milk to desired consistency. Add a drop of vanilla. Add desired food coloring."
    ]
  },
  {
    cuisine: "sweet", name: "Dawn's Cake Pops",
    servings: "Many", tags: ["signature", "crowd favorite"],
    ingredients: [
      "1 boxed cake mix (chocolate, vanilla, red velvet, etc.)",
      "Frosting: 3½ tbs butter, softened; ¾ cup plus 2 tbs powdered sugar; 2–3 tsp milk; 1 tsp vanilla extract",
      "Coating: candy melts (Ghirardelli white or milk chocolate); sprinkles"
    ],
    steps: [
      "Cook boxed cake mix according to package directions.",
      "Once cooled, crumble cake in a medium mixing bowl.",
      "In a separate bowl, combine butter, powdered sugar, milk and vanilla until well mixed.",
      "Add frosting to crumbled cake and mix well.",
      "Form small balls and place on a cookie sheet. Freeze for 1 hour.",
      "Melt candy according to package directions. Dip frozen cake balls into melted candy, top with sprinkles, and place on wax paper to dry.",
      "Keep refrigerated in a sealed container."
    ]
  },
  {
    cuisine: "sweet", name: "Chewy Chocolate Chip Oatmeal Breakfast Cookies",
    servings: "16 cookies", tags: ["3-ingredient", "breakfast"],
    ingredients: [
      "2 medium ripe bananas, mashed",
      "1 cup uncooked quick oats",
      "¼ cup chocolate chips"
    ],
    steps: [
      "Preheat oven to 350°. Spray cookie sheet with cooking spray.",
      "Combine mashed bananas and oats in a bowl.",
      "Fold in chocolate chips and place a tablespoon of each on cookie sheet.",
      "Bake 15 minutes."
    ]
  },
  {
    cuisine: "sweet", name: "Orange Scones with Glaze",
    servings: "12 scones", tags: ["brunch", "citrus"],
    ingredients: [
      "3 cups flour",
      "3 tbs sugar",
      "2½ tsp baking powder",
      "½ tsp baking soda",
      "½ tsp salt",
      "Grated zest of 1 orange or 1 tsp orange oil",
      "10 tbs cold unsalted butter cut into pieces",
      "1 cup cold buttermilk",
      "Icing: ¾ cup confectioner's sugar; 1 tbs fresh orange juice (or as needed)"
    ],
    steps: [
      "Preheat oven to 425°. Line a baking sheet with parchment.",
      "In a bowl, stir together flour, sugar, baking powder, baking soda, salt and orange zest. Add cold butter. With a pastry cutter or 2 knives, cut the butter until the mixture resembles coarse crumbs.",
      "Add buttermilk all at once and stir until a sticky dough forms.",
      "Scrape the bowl and turn dough out onto a lightly floured board. With floured hands, gently knead 8–10 strokes. The dough will be very soft.",
      "Press dough into a loose triangle about 1½ inches thick. Fold like a letter, overlapping the 2 short sides in the middle to make 3 layers.",
      "Pat into a thick rectangle. Divide in half. Pat each portion into a round ¾ inch thick and 8 inches in diameter. Cut each round into 6 wedges.",
      "Arrange wedges 2 inches apart on prepared sheet. Bake until golden brown, about 14–18 minutes.",
      "Combine powdered sugar and orange juice until smooth, adding juice as needed for a thick but pourable glaze. Brush glaze over hot scones with a pastry brush. Let stand 10 minutes to set."
    ]
  },
  {
    cuisine: "sweet", name: "Dawn's Grandma's Scones",
    servings: "About 12", tags: ["heirloom", "currant"],
    ingredients: [
      "2½ cups flour",
      "¼ cup sugar",
      "2 tsp baking powder",
      "¼ tsp salt",
      "1 stick butter",
      "⅔ cup milk",
      "1 tsp vinegar",
      "1 egg",
      "½ cup currants"
    ],
    steps: [
      "Preheat oven to 425°.",
      "In a mixing bowl, mix (by hand) flour, sugar, baking powder and salt. Add butter and cut to combine. Set aside.",
      "In a separate bowl, mix milk and vinegar. Add egg and beat together.",
      "Gradually add egg/milk mixture to flour mixture and mix by hand until combined. Mix in currants.",
      "Knead dough 8 times. Spread on a floured board to ¾ inch thickness and cut into circles.",
      "Bake 20 minutes."
    ]
  },
  {
    cuisine: "sweet", name: "Doughnuts",
    servings: "Makes about 1 dozen", tags: ["doughnuts", "fried", "yeast", "from scratch", "weekend project", "treat"],
    ingredients: [
      "1¼ cups milk",
      "2¼ teaspoons (one package) active dry yeast",
      "2 eggs",
      "8 tablespoons (1 stick) butter, melted and cooled",
      "¼ cup granulated sugar",
      "1 teaspoon salt",
      "4¼ cups all-purpose flour, plus more for rolling out the dough",
      "2 quarts neutral oil, for frying, plus more for the bowl"
    ],
    steps: [
      "Heat the milk until it is warm but not hot, about 90 degrees. In a large bowl, combine it with the yeast. Stir lightly, and let sit until the mixture is foamy, about 5 minutes.",
      "Using an electric mixer or a stand mixer fitted with a dough hook, beat the eggs, butter, sugar and salt into the yeast mixture. Add half of the flour (2 cups plus 2 tablespoons), and mix until combined, then mix in the rest of the flour until the dough pulls away from the sides of the bowl. Add more flour, about 2 tablespoons at a time, if the dough is too wet. If you're using an electric mixer, the dough will probably become too thick to beat; when it does, transfer it to a floured surface, and gently knead it until smooth. Grease a large bowl with a little oil. Transfer the dough to the bowl, and cover. Let rise at room temperature until it doubles in size, about 1 hour.",
      "Turn the dough out onto a well-floured surface, and roll it to ½-inch thickness. Cut out the doughnuts with a doughnut cutter, concentric cookie cutters or a drinking glass and a shot glass (the larger one should be about 3 inches in diameter), flouring the cutters as you go. Reserve the doughnut holes. If you're making filled doughnuts, don't cut out the middle. Knead any scraps together, being careful not to overwork, and let rest for a few minutes before repeating the process.",
      "Put the doughnuts on two floured baking sheets so that there is plenty of room between each one. Cover with a kitchen towel, and let rise in a warm place until they are slightly puffed up and delicate, about 45 minutes. If your kitchen isn't warm, heat the oven to 200 at the beginning of this step, then turn off the heat, put the baking sheets in the oven and leave the door ajar.",
      "About 15 minutes before the doughnuts are done rising, put the oil in a heavy-bottomed pot or Dutch oven over medium heat, and heat it to 375. Meanwhile, line cooling racks, baking sheets or plates with paper towels.",
      "Carefully add the doughnuts to the oil, a few at a time. If they're too delicate to pick up with your fingers, use a metal spatula to pick them up and slide them into the oil. It's O.K. if they deflate a bit; they'll puff back up as they fry. When the bottoms are deep golden, after 45 seconds to a minute, use a slotted spoon to flip; cook until they're deep golden all over. Doughnut holes cook faster. Transfer the doughnuts to the prepared plates or racks, and repeat with the rest of the dough, adjusting the heat as needed to keep the oil at 375. Glaze or fill as you like, and serve as soon as possible."
    ]
  },
  {
    cuisine: "sweet", name: "Chocolate Shell Ice-Cream Topping",
    servings: "Makes ¾ cup (4–6 scoops)", tags: ["chocolate", "ice cream", "topping", "2-ingredient", "fast & easy", "magic shell"],
    ingredients: [
      "7 ounces bittersweet chocolate, chopped",
      "2 tablespoons virgin coconut oil"
    ],
    steps: [
      "Melt the chocolate in a small metal bowl set over a pan of simmering water. Stir in the coconut oil and heat until dissolved, about 1 minute. Keep the liquid lukewarm until ready to pour over the ice cream. Chocolate will harden into a shell within a few seconds when spooned over ice cream."
    ]
  },
  {
    cuisine: "sweet", name: "Sticky Toffee Pudding",
    servings: "Serves 6–8", tags: ["sticky toffee", "british", "dates", "caramel", "baked", "indulgent", "holiday"],
    ingredientGroups: [
      { title: "For the pudding", items: [
        "1 cup dates, pitted and chopped",
        "1 cup boiling water",
        "3 tablespoons butter; cold, unsalted, cubed (plus more for greasing)",
        "1 teaspoon baking soda",
        "¼ teaspoon fine sea salt",
        "⅓ cup plus 1 teaspoon Demerara sugar",
        "⅓ cup plus 1 teaspoon dark brown sugar",
        "2 eggs",
        "¾ cup plus 2 tablespoons flour",
        "1 teaspoon vanilla extract"
      ]},
      { title: "For the sticky toffee topping", items: [
        "5 tablespoons butter",
        "1 cup cream",
        "6 tablespoons dark brown sugar",
        "⅛ teaspoon fine sea salt"
      ]},
      { title: "For the extra sauce", items: [
        "3 tablespoons butter",
        "1¼ cups cream, plus more for serving, if you like",
        "3 tablespoons dark brown sugar",
        "⅛ teaspoon fine sea salt"
      ]}
    ],
    steps: [
      "Put the dates in a bowl and cover with the 1 cup boiling water to soften, at least 5 minutes. Heat the oven to 350 and grease a deep 9-by-13-inch baking dish.",
      "Combine the 3 tablespoons butter, baking soda, a pinch of salt, Demerara sugar, ⅓ cup plus 1 teaspoon dark brown sugar, eggs, flour and vanilla extract in a food processor and pulse until just combined. Add the dates and ½ cup of the water to the mixture; pulse until nearly smooth (specks of dates should remain visible).",
      "Pour the mixture into the baking dish and bake for about 30 minutes, until just firm to the touch. (When the pudding has finished baking, remove from the oven and heat the broiler. Put the rack about 4 inches from the heat source.)",
      "Meanwhile, make the topping. Melt 5 tablespoons butter in a small saucepan over medium heat, then slowly add 1 cup cream and 6 tablespoons dark brown sugar and ⅛ teaspoon salt, whisking continuously until the mixture bubbles gently and comes together to form a smooth mixture; turn off heat.",
      "In another small saucepan over medium heat, make the extra sauce. Melt 3 tablespoons butter, then slowly add 1¼ cups cream and 3 tablespoons dark brown sugar and ⅛ teaspoon salt. Repeat the process above.",
      "Pour the topping (careful not to use the extra sauce) over the cooked pudding and place the whole thing in the broiler until it bubbles and looks sticky, 1 or 2 minutes (watch it closely). To serve, spoon into bowls and cover with the extra sauce. If you like, add a dollop of whipped cream."
    ]
  },
  {
    cuisine: "sweet", name: "Frosted Sugar Cookies",
    servings: "Makes about 15 cookies", tags: ["sugar cookies", "frosted", "raspberry", "sprinkles", "baked", "treat"],
    ingredientGroups: [
      { title: "For the cookies", items: [
        "½ cup/115 grams unsalted butter (1 stick), at room temperature",
        "3 ounces/85 grams cream cheese, at room temperature",
        "1 cup/200 grams granulated sugar",
        "½ teaspoon kosher salt",
        "2 large eggs, at room temperature",
        "1 tablespoon vanilla extract",
        "2¼ cups/285 grams cake flour",
        "2 teaspoons baking powder",
        "Sprinkles, for garnish"
      ]},
      { title: "For the frosting", items: [
        "1 cup/30 grams freeze-dried raspberries, finely ground in a food processor or spice grinder",
        "1 cup/225 grams unsalted butter (2 sticks), at room temperature",
        "2 cups/245 grams confectioners' sugar",
        "1 teaspoon vanilla extract",
        "Pinch of kosher salt"
      ]}
    ],
    steps: [
      "Make the cookies: In a large bowl, using a spoon, cream the butter, cream cheese, sugar and salt until smooth and fluffy. Add the eggs and vanilla extract, and whisk to incorporate some air and to dissolve the sugar crystals, about 1 minute. Stir in the flour and baking powder until just incorporated.",
      "Heat oven to 350 degrees and line two rimmed sheet pans with parchment paper. Using two spoons or a cookie scooper, plop out 2-tablespoon/50-gram rounds spaced a couple of inches apart. (You should get about 7 to 8 cookies per sheet pan.) Place the sheet pans in the freezer for 15 to 20 minutes until the dough is no longer sticky and easier to handle.",
      "While the dough chills, make the frosting: In a fine-mesh sieve set over a medium bowl, sift the ground raspberries, using a spoon to help pass them through, until most of the ruby-red powder is in the bowl and most of the seeds are left behind in the sieve. (Discard the seeds.)",
      "To the bowl, add the 1 cup butter, confectioners' sugar, vanilla extract and salt and, with an electric hand mixer, mix on low speed until the butter absorbs the sugar. Then, turn the speed up to high and beat until the frosting doubles in size, about 2 minutes, scraping down the sides of the bowl with a rubber spatula to ensure all the ingredients are incorporated. Transfer the frosting to a small container, cover tightly, and set aside. (You should have about 2 cups of frosting.)",
      "Remove the sheet pans from the freezer. Roll the chilled dough into even balls and flatten them slightly with your fingers so they're about 2 inches wide and 1 inch high. Bake the cookies for 13 to 15 minutes, rotating the pans and switching racks halfway through, or until they no longer look wet on top, are still light in color and spring back to the touch. They will puff up and crack slightly. Let cool completely on the sheet pan. (They will continue to cook as they sit.)",
      "Using a butter knife or offset spatula, frost each cooled cookie with the raspberry frosting and adorn with the sprinkles."
    ]
  },
  {
    cuisine: "sweet", name: "Chocolate Babka",
    servings: "Makes 2 loaves", tags: ["chocolate", "babka", "brioche", "yeast", "baking", "make-ahead", "eastern european", "showstopper", "dessert"],
    ingredientGroups: [
      { title: "For the Dough", items: [
        "½ cup whole milk",
        "1 package (¼ ounce) active dry yeast",
        "⅓ cup granulated sugar, plus a pinch",
        "4¼ cups all-purpose flour, more as needed",
        "1½ teaspoons fine sea salt",
        "1 teaspoon vanilla extract",
        "1 teaspoon grated lemon zest (optional)",
        "½ teaspoon freshly grated nutmeg",
        "4 large eggs, at room temperature, lightly beaten",
        "10 tablespoons unsalted butter, at room temperature, plus more for greasing"
      ]},
      { title: "For the Fudge Filling", items: [
        "½ cup granulated sugar",
        "¾ cup heavy cream or half-and-half",
        "Pinch kosher salt",
        "6 ounces extra-bittersweet chocolate (66–74% cocoa), coarsely chopped",
        "8 tablespoons (1 stick) unsalted butter, diced, at room temperature",
        "2 teaspoons vanilla extract"
      ]},
      { title: "For the Chocolate Streusel", items: [
        "½ cup all-purpose flour",
        "3 tablespoons granulated sugar",
        "1½ tablespoons cocoa powder",
        "½ teaspoon kosher salt",
        "4½ tablespoons unsalted butter, melted",
        "⅓ cup mini semisweet chocolate chips"
      ]},
      { title: "For the Syrup", items: [
        "⅔ cup granulated sugar",
        "⅔ cup water"
      ]}
    ],
    steps: [
      "Prepare the dough: In a small saucepan or in the microwave, warm the milk until lukewarm but not hot (about 110°F). Add the yeast and a pinch of sugar and let sit for 5 to 10 minutes, until slightly foamy.",
      "In an electric mixer fitted with the dough hook (or a food processor), mix together the flour, ⅓ cup sugar, the salt, vanilla, lemon zest if using, and nutmeg. Beat in the yeast mixture and eggs until the dough comes together in a soft mass, about 2 minutes. If it sticks to the side of the bowl and won't come together, add a tablespoon more flour at a time until it does, beating well between additions.",
      "Add half the butter and beat until the dough is smooth and elastic, 3 to 5 minutes, scraping down the bowl as needed. Beat in the rest of the butter and continue until the dough is smooth and stretchy, another 5 to 7 minutes. Again, if it sticks, add flour 1 tablespoon at a time.",
      "Butter a clean bowl, form the dough into a ball, and roll it around so all sides are buttered. Cover with a towel and let rise in a warm, draft-free place (a turned-off oven with the light on is ideal) until puffed and risen, about 1 to 2 hours. It may not double, but it should rise.",
      "Press the dough down, re-cover, and refrigerate overnight (or, in a pinch, at least 4 hours — but the flavor won't be as developed).",
      "Prepare the filling: In a medium saucepan over medium heat, combine the sugar, cream, and salt. Simmer, stirring occasionally, until the sugar completely dissolves, about 5 minutes. Scrape into a bowl and stir in the chocolate, butter, and vanilla until smooth. Let cool to room temperature. (The filling can be made up to a week ahead and refrigerated; bring to room temperature before using.)",
      "Prepare the streusel: Stir together the flour, sugar, cocoa powder, and salt. Stir in the melted butter until it forms large, moist crumbs, then stir in the chocolate chips. (Can be made up to 3 days ahead and refrigerated.)",
      "Prepare the syrup: In a small saucepan, combine the sugar and ⅔ cup water. Bring to a simmer over medium heat and simmer for 2 minutes, stirring occasionally, until the sugar dissolves.",
      "Butter two 9-inch loaf pans, then line with parchment, leaving 2 inches hanging over the sides as handles.",
      "Remove the dough from the refrigerator and divide in half. On a floured surface, roll one piece into a 9-by-17-inch rectangle. Spread with half the filling (no need to leave a border). Starting from a long side, roll into a tight coil. Transfer to a towel or plastic wrap and freeze for 10 minutes. Repeat with the other piece.",
      "Slice one dough coil in half lengthwise to expose the filling. Twist the halves together as if braiding, then fold the braid in half so it's about 9 inches long. Place in a prepared pan, letting it curl around itself if it's a little long. Cover loosely with a towel and let rise in a warm place 1 to 1½ hours, until puffy (it won't quite double). Repeat with the second loaf.",
      "When ready to bake, heat the oven to 350°F. Clump the streusel together with your fingers and scatter all over the tops. Bake until a tester goes in without rubbery resistance and comes out clean, 40 to 50 minutes (an instant-read thermometer will read 185–210°F).",
      "As soon as the cakes come out of the oven, use a skewer or paring knife to pierce them all over, all the way to the bottom, then pour the syrup over the tops — half the syrup per cake.",
      "Transfer to a wire rack to cool completely before serving. (Babka freezes well for up to 3 months.)"
    ]
  },
  {
    cuisine: "sweet", name: "Magnolia Bakery's Cupcakes",
    servings: "Makes 24 cupcakes", tags: ["cupcakes", "vanilla", "baked", "celebration", "kid-friendly", "classic", "make-ahead", "dessert"],
    ingredients: [
      "1 cup (2 sticks) unsalted butter, softened, plus extra for greasing pans",
      "1¼ cups all-purpose flour, plus extra for dusting pans",
      "1½ cups self-rising flour",
      "1 cup milk",
      "1 teaspoon vanilla extract",
      "2 cups sugar",
      "4 large eggs, at room temperature"
    ],
    steps: [
      "Preheat the oven to 350 degrees. Line two 12-cup muffin tins with cupcake papers. Mix the flours together in a bowl. In a glass measure, mix the milk and vanilla.",
      "In a large bowl, cream the butter with an electric mixer at medium speed until smooth. Add the sugar gradually and beat until fluffy (about 3 minutes). Add the eggs one at a time, beating well after each addition. Gradually add the flour mixture, alternating with the milk-and-vanilla, beating well after each addition. Spoon the batter into the muffin cups about ¾ full.",
      "Bake until the tops of the cupcakes spring back when lightly touched, 20 to 22 minutes. Remove the cupcakes from the pans and cool on a rack before icing."
    ]
  },
  {
    cuisine: "sweet", name: "Mexican Wedding Cookies",
    servings: "Makes 2 dozen", tags: ["cookies", "pecan", "shortbread", "snowballs", "holiday", "food processor", "make-ahead", "buttery"],
    ingredients: [
      "½ cup pecan halves",
      "2½ cups confectioners' sugar, divided",
      "Pinch of salt",
      "1 cup unsalted butter",
      "½ teaspoon vanilla extract",
      "1¾ cups all-purpose flour"
    ],
    steps: [
      "Put the pecans, 1 cup of the sugar and the salt in a food processor and blend until the nuts are ground fine. Cut the butter into tablespoon-size pieces and add it to the nut mixture with the processor running. Process until smooth. Add the vanilla extract. Add the flour and continue blending, using the pulse mechanism.",
      "Scrape the dough into a bowl. Cover tightly and refrigerate one hour. Preheat the oven to 350 degrees.",
      "Scoop the dough with a tablespoon and form 1-inch balls by rolling between your palms (lightly flour your hands if necessary). Place the balls 1½ inches apart on ungreased cookie sheets.",
      "Bake 15 minutes, or until the cookies barely begin to brown. Cool for 2 minutes. Use a small spatula to lift the cookies from the sheets. Roll the cookies in the remaining sugar."
    ]
  },
  {
    cuisine: "sweet", name: "S'mores Brownies",
    servings: "Makes 16 brownies", tags: ["brownies", "s'mores", "chocolate", "graham cracker", "marshmallow", "baked", "make-ahead", "crowd-pleaser"],
    ingredients: [
      "½ cup (113 grams) unsalted butter, at room temperature, divided",
      "5 ounces whole graham crackers, preferably honey (about 9 whole crackers)",
      "1 tablespoon granulated sugar",
      "4 ounces bittersweet or semisweet chocolate, broken into pieces",
      "½ cup packed dark brown sugar",
      "½ teaspoon coarse kosher salt, or fine salt",
      "2 large eggs",
      "1 tablespoon vanilla extract",
      "½ cup all-purpose flour",
      "6 ounces marshmallows"
    ],
    steps: [
      "Position a rack in the center of the oven and heat to 400 degrees.",
      "Grease a 9-inch square metal baking pan with ½ tablespoon of the butter. Line the pan with a long piece of parchment that overhangs two sides (to make it easy to pull out the finished brownies). Grease the parchment with another ½ tablespoon butter.",
      "Line the bottom of the pan with a single layer of graham crackers, breaking them as needed to fit, then crush the rest of the crackers over the top and sprinkle with the granulated sugar.",
      "Heat an inch of water in a small saucepan over low until simmering. Set a medium heatproof bowl over the saucepan (the bowl should not touch the water), then add the remaining 7 tablespoons butter and the chocolate. Stirring constantly with a flexible spatula, melt until smooth. Remove the bowl and dry off the bottom.",
      "Stir in the brown sugar and salt, then let the mixture cool slightly until the bowl is no longer hot to the touch. Whisk in the eggs and vanilla, then continue whisking until smooth and shiny, about 1 minute. Whisk in the flour until no white streaks remain. Pour the batter over the graham crackers in the pan.",
      "Top the brownie batter with the marshmallows in a single layer and bake until the top is toasted and a toothpick inserted into the center comes out smudged with a little chocolate, 15 to 20 minutes. Cool completely, then refrigerate in the pan until ready to serve.",
      "To serve, lift the brownie out of the pan and slice into squares. Enjoy chilled, at room temperature, or warmed slightly. Stored in a resealable container in the refrigerator, these keep for up to 1 week."
    ]
  },
  {
    cuisine: "sweet", name: "Carrot Cake",
    servings: "Serves 8 to 12", tags: ["cake", "carrot cake", "cream cheese frosting", "walnuts", "coconut", "celebration", "layer cake", "classic"],
    ingredientGroups: [
      { title: "For the Cake", items: [
        "2 cups all-purpose flour",
        "2 teaspoons baking powder",
        "2 teaspoons baking soda",
        "2 teaspoons ground cinnamon",
        "¾ teaspoon salt",
        "3 cups grated carrots",
        "1 cup coarsely chopped walnuts or pecans",
        "1 cup shredded coconut, sweetened or unsweetened",
        "½ cup moist, plump raisins (dark or golden) or dried cranberries",
        "2 cups sugar",
        "1 cup canola or safflower oil",
        "4 large eggs"
      ]},
      { title: "For the Frosting", items: [
        "8 ounces cream cheese, at room temperature",
        "1 stick (8 tablespoons) unsalted butter, at room temperature",
        "1 pound (3¾ cups) confectioners' sugar",
        "1 tablespoon fresh lemon juice, or ½ teaspoon pure lemon extract",
        "½ cup shredded coconut (optional)",
        "Toasted finely chopped nuts and/or toasted coconut, for topping (optional)"
      ]}
    ],
    steps: [
      "For the cake: Position the racks to divide the oven into thirds and preheat to 325 degrees. Butter and flour three 9-inch round, 2-inch-deep cake pans and tap out the excess.",
      "Whisk together the flour, cinnamon, baking powder, baking soda and salt; set aside. In another bowl, stir together the carrots, chopped nuts, coconut and raisins.",
      "Working in a mixer fitted with the paddle attachment, or in a large bowl with a whisk, beat the sugar and oil together until smooth. Add the eggs one by one and beat until smoother. Reduce the speed to low (or switch to a spatula by hand) and gently stir in the flour mixture, mixing only until the dry ingredients disappear. Just as gently, stir in the chunky ingredients.",
      "Divide the batter among the pans and bake 40 to 50 minutes, rotating top to bottom and front to back at the midway point, until a knife inserted into the centers comes out clean and the cakes just start to come away from the edges. Cool in the pans 5 minutes, then turn out onto racks to cool to room temperature.",
      "For the frosting: Beat the cream cheese and butter together until smooth and creamy. Gradually add the confectioners' sugar and beat until velvety smooth. Beat in the lemon juice or extract. (If you'd like coconut in the filling, scoop out about half the frosting and stir the coconut into that portion.)",
      "To frost: Place one layer right-side up on a cake plate and cover generously with frosting, smoothing to the edges. Top with the second layer top-side down and frost. Top with the last layer right-side up and use the plain frosting to cover the top and, if you like, the sides. Finish with swirls and any toasted nuts or coconut. Refrigerate 15 minutes to set the frosting before serving."
    ]
  },
  {
    cuisine: "sweet", name: "Classic French Toast",
    servings: "Serves 4", tags: ["french toast", "breakfast", "brunch", "custardy", "weekend", "kid-friendly", "griddle", "classic"],
    ingredients: [
      "2 whole eggs",
      "2 egg yolks",
      "2 cups whole milk (or 1¾ cups milk plus 2 to 4 tablespoons cream)",
      "1 teaspoon vanilla extract (optional)",
      "Pinch of salt",
      "Unsalted butter, for cooking",
      "8 slices white bread (Pullman, brioche or challah), sliced ½- to ¾-inch thick",
      "Cinnamon sugar or granulated sugar"
    ],
    steps: [
      "Heat the oven to 200 degrees and place a wire rack on a sheet pan inside.",
      "In a shallow bowl, whisk the eggs, yolks, milk, vanilla (if using) and salt until foamy and smooth. Set aside. Place a small lump of butter (enough to coat the bottom when melted) in a large, heavy nonstick skillet over low heat.",
      "When the butter is just melted and bubbling, raise the heat to a sizzle. Place 2 slices of bread in the egg mixture, turning until evenly saturated, about 5 seconds per side. Do not soak.",
      "Lift a slice out, gently shake off excess, and place in the pan. Repeat until the skillet is full, and let the slices cook at a sizzle about 2 minutes, until just golden brown on the bottom.",
      "Add another small lump of butter and flip the slices, swirling the pan so the fresh butter coats the bottom.",
      "Continue cooking over low heat until the second side is golden brown. Dust with cinnamon sugar, flip, and dust the other side. Test by pressing the center: the dent should slowly spring back. Serve immediately, or keep warm in the oven while cooking the rest. Top with maple syrup, berries, jam or sliced bananas."
    ]
  },
  {
    cuisine: "sweet", name: "Perfect Buttermilk Pancakes",
    servings: "Serves 4", tags: ["pancakes", "buttermilk", "breakfast", "brunch", "fluffy", "weekend", "kid-friendly", "griddle"],
    ingredients: [
      "2 cups all-purpose flour",
      "3 tablespoons sugar",
      "1½ teaspoons baking powder",
      "1½ teaspoons baking soda",
      "1¼ teaspoons kosher salt",
      "2½ cups buttermilk",
      "2 large eggs",
      "3 tablespoons unsalted butter, melted",
      "Vegetable, canola or coconut oil, for the pan"
    ],
    steps: [
      "Heat the oven to 325 degrees. Whisk the flour, sugar, baking powder, baking soda and salt together in a bowl. Make a well in the center. Pour in the buttermilk, crack in the eggs, and add the melted butter. Starting in the center, whisk everything together, moving outward, until just incorporated. Do not overbeat (lumps are fine). The batter can be refrigerated up to one hour.",
      "Heat a large nonstick griddle or skillet, preferably cast-iron, over low heat for about 5 minutes. Add 1 tablespoon oil. Turn the heat up to medium-low and, using a measuring cup, ladle ⅓ cup batter into the skillet. Repeat once or twice, taking care not to crowd the surface.",
      "Flip the pancakes after bubbles rise to the surface and the bottoms brown, about 2 to 4 minutes. Cook until the other sides are lightly browned. Move to a wire rack set inside a rimmed baking sheet and keep in the oven until all the batter is cooked and you're ready to serve."
    ]
  },
  {
    cuisine: "sweet", name: "Snickerdoodles",
    servings: "About 1½ dozen cookies", tags: ["cookies", "cinnamon", "snickerdoodles", "soft", "classic", "kid-friendly", "baked", "make-ahead"],
    ingredients: [
      "1½ cups all-purpose flour",
      "1 teaspoon cream of tartar",
      "½ teaspoon baking soda",
      "½ teaspoon kosher salt",
      "10 tablespoons (1¼ sticks) unsalted butter, at room temperature",
      "¾ cup granulated sugar, plus 2 tablespoons",
      "1 large egg",
      "½ teaspoon vanilla extract",
      "1 tablespoon ground cinnamon"
    ],
    steps: [
      "Heat the oven to 375 degrees. In a medium bowl, whisk together the flour, cream of tartar, baking soda and salt.",
      "In the bowl of an electric mixer, beat the butter and ¾ cup sugar until fluffy, about 2 minutes, scraping down the sides as needed. Beat in the egg until creamy, then add the vanilla, again scraping down. Add the flour mixture and beat on low until just combined.",
      "In a small bowl, combine the remaining 2 tablespoons sugar and the cinnamon. Roll the dough into golf-ball-size balls, then roll each in the cinnamon-sugar.",
      "Transfer to parchment-lined rimmed baking sheets, at least 3 inches apart. Bake until just set and dry in the center, 10 to 12 minutes. Do not overbake. Cool on the sheet a few minutes, then transfer the cookies to racks to cool completely."
    ]
  },
  {
    cuisine: "sweet", name: "Strawberry Layer Cake",
    servings: "Serves 12 (one 9-inch layer cake)", tags: ["cake", "strawberry", "layer cake", "cream cheese frosting", "celebration", "southern", "showstopper", "make-ahead"],
    ingredientGroups: [
      { title: "For the Cake", items: [
        "Baking spray, or softened butter and flour, for the pans",
        "3¾ cups cake flour or all-purpose flour",
        "2 teaspoons baking powder",
        "1 teaspoon coarse kosher salt",
        "¾ teaspoon baking soda",
        "2½ cups strawberry preserves",
        "¾ cup buttermilk",
        "2 teaspoons vanilla paste",
        "1 cup plus 2 tablespoons salted butter, room temperature",
        "2¼ cups granulated sugar",
        "6 medium or large eggs",
        "1 to 2 teaspoons red food coloring gel (optional)"
      ]},
      { title: "For the Frosting", items: [
        "1½ cups salted butter, softened but slightly chilled",
        "1 cup (8 ounces) cream cheese, room temperature",
        "4 cups powdered sugar, sifted",
        "2 teaspoons vanilla paste",
        "1 cup strawberry preserves",
        "½ to ¾ teaspoon red food coloring gel (optional)"
      ]},
      { title: "For the Layers", items: [
        "1 cup strawberry preserves"
      ]}
    ],
    steps: [
      "Heat the oven to 350 degrees. Lightly coat the bottom and sides of 3 (9-inch) cake pans with baking spray or butter and flour. Line the bottoms with parchment rounds, then spray or butter and flour the parchment.",
      "Prepare the cakes: In a medium bowl, whisk together the flour, baking powder, salt and baking soda. In a large measuring cup, combine the strawberry preserves, buttermilk and vanilla paste; set aside.",
      "In the bowl of a stand mixer fitted with the paddle attachment, cream the butter and granulated sugar on medium-high until well combined and incredibly fluffy, 3 to 4 minutes, scraping the bowl.",
      "Add the eggs one at a time, beating well and scraping after each. After the last egg, scrape the bowl, turn the speed to medium-high and beat until fluffy, 3 to 4 minutes more.",
      "Add one-third of the dry ingredients and mix on low to medium until incorporated; scrape the bowl, then add one-third of the wet ingredients, scraping well. Repeat twice more, ending with the wet mixture. Add food coloring if using. Beat on medium-high 30 to 45 seconds more.",
      "Divide the batter evenly among the three pans. Bake until a tester inserted into the centers comes out clean and the layers are lightly colored, 35 to 40 minutes, rotating the pans midway. Cool on wire racks completely, about 1 hour.",
      "Make the frosting: In a stand mixer with the paddle, cream the butter and cream cheese on medium-high until well combined and slightly fluffy. Gradually add the powdered sugar, 1 cup at a time, scraping as needed. Switch to the whisk attachment, add the vanilla paste and strawberry preserves, and whisk until fluffy, 2 to 3 minutes. Add food coloring if using.",
      "To assemble: Trim the domed tops off the cooled layers. Place 1 tablespoon frosting on a platter and top with 1 layer, cut side up. Spread ½ cup strawberry preserves over it, then a generous cup of frosting. Chill 10 minutes if the frosting is soft. Repeat with the second layer. Chill 10 minutes, then top with the final layer, cut side down.",
      "Spread a thin crumb coat over the whole cake. Chill 10 to 15 minutes, then cover with the remaining frosting and decorate as you like. The assembled cake keeps at room temperature, covered, overnight, or refrigerated up to 5 days."
    ]
  },
  {
    cuisine: "sweet", name: "Chocolate Lava Cake for Two",
    servings: "Serves 2", tags: ["chocolate", "lava cake", "molten", "dessert for two", "make-ahead", "romantic", "baked", "quick"],
    ingredients: [
      "3 ounces bittersweet chocolate, 70 to 74 percent cacao (not chips), chopped (about ½ cup)",
      "3 tablespoons unsalted butter, cut into cubes, plus more for the ramekin",
      "3 tablespoons granulated sugar, plus more for the ramekin",
      "1 large egg",
      "1 large egg yolk",
      "½ teaspoon vanilla extract",
      "⅛ teaspoon kosher salt",
      "2 tablespoons all-purpose flour",
      "Confectioners' sugar, to serve (optional)"
    ],
    steps: [
      "Heat the oven to 425 degrees and butter a 10-ounce ramekin. Dust the buttered ramekin with granulated sugar.",
      "Combine the chocolate and 3 tablespoons butter in a heatproof bowl set over a pan of simmering water. Cook, stirring occasionally, until melted and smooth. (Or microwave in 30-second blasts, stirring between, until smooth, about 1 minute.) Remove from the heat and set aside.",
      "In a medium bowl, combine the 3 tablespoons sugar, egg, egg yolk, vanilla and salt. Whisk vigorously until thick, foamy and pale, about 2 minutes. Whisk in the flour until smooth.",
      "Using a spatula, add the chocolate to the egg mixture and stir gently until combined.",
      "Pour into the ramekin and bake 12 to 14 minutes, until the edges are set and puffed but the center is still soft when lightly pressed. (You can refrigerate the batter up to a day ahead; add a minute or two to the baking time from cold.)",
      "Loosen the edges with an offset spatula or small knife. Place a plate over the ramekin and carefully invert the warm cake. Remove the ramekin, dust with confectioners' sugar and serve with ice cream or whipped cream."
    ]
  },
  {
    cuisine: "sweet", name: "Color-Field Cookies",
    servings: "Makes 2 dozen cookies", tags: ["cookies", "decorated", "glaze", "sugar cookies", "project", "colorful", "make-ahead", "kids"],
    ingredientGroups: [
      { title: "For the Glaze", items: [
        "1 (1-pound) box confectioners' sugar (3¾ cups), plus more if needed",
        "3 tablespoons light corn syrup",
        "2 teaspoons fresh lemon juice",
        "3 to 4 tablespoons warm water, plus more if needed"
      ]},
      { title: "For the Cookies and Decorating", items: [
        "Gel food coloring (red, orange, yellow, green, blue, purple, brown and white)",
        "1 recipe sugar cookies, cut into 3-inch circles, baked and cooled"
      ]}
    ],
    steps: [
      "Prepare the glaze: Combine the confectioners' sugar, corn syrup, lemon juice and 3 tablespoons warm water in a medium bowl. Stir with a fork, slowly adding water as needed to reach the right consistency (about 2 cups total). Test on a cookie: if the glaze doesn't smooth itself out within 10 seconds it's too thick (add water); if it runs off the edge it's too thin (add sugar).",
      "Let the glaze sit, tightly covered, until ready to use, stirring occasionally. It keeps at least a week in an airtight jar.",
      "Decorate: Pour about ⅓ cup glaze into a small, wide bowl. Starting with a light gel color, mix in color until the desired shade. Holding a cookie by the edges, top-side down, dip into the glaze, moving it to coat the whole surface. Gently shake side to side to let the excess drip off.",
      "Use a small offset spatula to stop the flow of icing, scrape the cookie against the edge of the bowl, and flip it over. Spread the icing to pop any air bubbles and reach the edges; it should smooth out on its own. Wipe away any icing on the outside edges with your fingers.",
      "Continue until you've mixed nine different colors and coated 2 or 3 cookies in each. Let dry completely, a few hours. They keep in an airtight container up to 3 days."
    ]
  },
  {
    cuisine: "sweet", name: "Salted Chocolate Chunk Shortbread Cookies",
    servings: "Makes 24 cookies", tags: ["cookies", "shortbread", "chocolate", "salted", "slice-and-bake", "make-ahead", "buttery", "iconic"],
    ingredients: [
      "1 cup plus 2 tablespoons (2¼ sticks) salted butter, cold, cut into ½-inch pieces",
      "½ cup granulated sugar",
      "¼ cup light brown sugar",
      "1 teaspoon vanilla extract",
      "2½ cups all-purpose flour",
      "6 ounces semisweet or bittersweet dark chocolate, chopped into chunks",
      "1 large egg, beaten",
      "Demerara sugar, for rolling",
      "Flaky sea salt, for sprinkling"
    ],
    steps: [
      "Line two rimmed baking sheets with parchment. Using a stand mixer with the paddle attachment (or an electric hand mixer), beat the butter, both sugars and vanilla on medium-high until super light and fluffy (3 to 5 minutes for a stand mixer; 6 to 8 for a hand mixer). Scrape down the bowl and, with the mixer on low, slowly add the flour, then the chocolate chunks, mixing just to blend. Knead by hand if needed so no pockets of flour remain; the dough should be smooth, like Play-Doh.",
      "Divide the dough in half on two large pieces of plastic wrap. Fold the plastic over and form each half into a 6-inch log, 2 to 2¼ inches in diameter (compact is good — shortbread is dense). Chill until totally firm, about 2 hours.",
      "Heat the oven to 350 degrees. Brush the outside of the logs with the beaten egg and roll in the demerara sugar (for crisp edges).",
      "Using a serrated knife, slice each log into ½-inch-thick rounds (saw slowly through any chocolate chunks; press back together if they crumble). Place about 1 inch apart on the sheets. Sprinkle with flaky salt. Bake until the edges are just beginning to brown, 12 to 15 minutes. Let cool slightly before eating."
    ]
  },
  {
    cuisine: "sweet", name: "Baked Apple Cider Doughnuts",
    servings: "Makes 12 doughnuts or muffins", tags: ["doughnuts", "apple cider", "baked", "fall", "cinnamon sugar", "breakfast", "kid-friendly", "make-ahead"],
    ingredients: [
      "Nonstick cooking spray",
      "1¾ cups all-purpose flour",
      "1¼ teaspoons baking powder",
      "¾ teaspoon fine sea salt",
      "2 teaspoons ground cinnamon, divided",
      "½ teaspoon freshly grated nutmeg",
      "1 cup (2 sticks) unsalted butter, at room temperature, divided",
      "¾ cup light brown sugar",
      "¾ cup granulated sugar, divided",
      "2 large eggs, at room temperature",
      "1 teaspoon vanilla extract",
      "½ cup apple cider"
    ],
    steps: [
      "Heat the oven to 350 degrees. Lightly grease 2 (6-cavity) doughnut pans (or a 12-cup muffin tin) with nonstick spray. In a medium bowl, whisk together the flour, baking powder, salt, 1 teaspoon cinnamon and the nutmeg. Set aside.",
      "In the bowl of a stand mixer fitted with the paddle attachment, cream 10 tablespoons of the butter, the brown sugar and ¼ cup granulated sugar on medium until light and fluffy, 3 to 4 minutes. Add the eggs one at a time, mixing well after each and scraping the bowl. Beat in the vanilla.",
      "Add the flour mixture and mix on low until incorporated. With the mixer running, add the apple cider in a slow, steady stream and mix to combine. Scrape the bowl well.",
      "Spoon the batter into the prepared pans, filling about ⅔ of the way (a piping bag or corner-snipped resealable bag helps). Bake until golden brown and a toothpick inserted into the thickest part comes out clean, 12 to 15 minutes, rotating the pans halfway. (For muffins, bake 15 to 20 minutes.)",
      "While the doughnuts bake, whisk the remaining ½ cup granulated sugar and 1 teaspoon cinnamon together in a small bowl. Melt the remaining 6 tablespoons butter. Let the doughnuts cool 5 minutes, then unmold, brush with the melted butter and dredge in the cinnamon sugar while still warm. Serve immediately or at room temperature."
    ]
  },
  {
    cuisine: "sweet", name: "Best Sugar Cookies",
    servings: "Makes 2 dozen cookies", tags: ["cookies", "sugar cookies", "cut-out", "rolled", "frosting-ready", "make-ahead", "kid-friendly", "classic"],
    ingredients: [
      "2½ cups all-purpose flour",
      "½ teaspoon baking powder",
      "½ teaspoon kosher salt",
      "1 cup (2 sticks) unsalted butter, softened",
      "¾ cup granulated sugar",
      "1 large egg, at room temperature",
      "1 teaspoon vanilla extract"
    ],
    steps: [
      "Combine the flour, baking powder and salt in a medium bowl and whisk together. Set aside.",
      "In the bowl of a stand mixer fitted with the paddle attachment, cream the butter and granulated sugar on medium-high until light and fluffy, 2 to 3 minutes. Add the egg and vanilla and beat on medium until well combined, scraping the bowl as needed.",
      "Add the flour mixture and beat on low just until combined. Scrape the bowl and fold a few times. Wrap the dough in plastic, flatten into a disk, and chill until firm, at least 1 hour.",
      "Heat the oven to 350 degrees. Roll out the dough ¼-inch thick. Use 3-inch floured cutters to cut out cookies and transfer to two parchment-lined baking sheets, spacing about 1½ inches apart. Reroll scraps as needed, chilling if the dough softens. Freeze the cut cookies until very firm, about 10 minutes.",
      "Bake until golden brown at the edges, 12 to 14 minutes.",
      "Let cool a few minutes on the sheets, then transfer to wire racks to cool completely. They keep in an airtight container up to 2 weeks, or frozen up to 3 months."
    ]
  },
  {
    cuisine: "sweet", name: "Simple Bread Pudding",
    servings: "Serves 6 to 8", tags: ["bread pudding", "custard", "dessert", "brunch", "leftover bread", "easy", "make-ahead", "classic"],
    ingredients: [
      "2 cups milk",
      "2 tablespoons unsalted butter, plus more for greasing the pan",
      "1 teaspoon vanilla extract",
      "⅓ cup granulated sugar",
      "Pinch of salt",
      "½ loaf sweet egg bread like challah or brioche, cut into 2-inch cubes (5 to 6 cups)",
      "2 eggs, beaten"
    ],
    steps: [
      "Heat the oven to 350 degrees. In a small saucepan over low heat, warm the milk, butter, vanilla, sugar and salt just until the butter melts; cool. Meanwhile, butter a 4-to-6-cup baking dish and fill it with the cubed bread.",
      "Add the eggs to the cooled milk mixture and whisk; pour over the bread.",
      "Bake for 30 to 45 minutes, until the custard is set but still a little wobbly and the edges of the bread have browned. Serve warm or at room temperature."
    ]
  },
  {
    cuisine: "sweet", name: "Chewy Pumpkin Chocolate Chip Cookie Bars",
    servings: "Makes 24 squares (one 9-by-13-inch pan)", tags: ["cookie bars", "pumpkin", "chocolate chip", "chewy", "fall", "brown butter", "egg-free", "make-ahead"],
    ingredients: [
      "¾ cup (1½ sticks) unsalted butter",
      "Nonstick cooking spray or neutral oil",
      "1¾ cups packed light brown sugar",
      "¾ cup canned pumpkin purée (not pumpkin pie filling)",
      "2 teaspoons vanilla extract",
      "2½ cups all-purpose flour",
      "2 teaspoons ground cinnamon",
      "1 teaspoon baking powder",
      "1 teaspoon baking soda",
      "1 teaspoon kosher salt",
      "1 teaspoon ground ginger",
      "¼ teaspoon ground cloves",
      "¼ teaspoon ground nutmeg",
      "1½ cups (9 ounces) bittersweet or semisweet chocolate chips, divided"
    ],
    steps: [
      "In a small, light-colored saucepan, melt the butter over medium heat. Continue cooking, stirring constantly, until the butter foams, darkens to light amber and smells nutty, 3 to 4 minutes more (watch closely so it doesn't burn). Immediately pour the butter and any browned milk solids into a large heatproof bowl. Let cool 20 minutes, until warm but no longer hot.",
      "While the butter cools, heat the oven to 325 degrees. Grease a 9-by-13-inch baking pan and line with a parchment sling that overhangs the two long sides.",
      "Add the brown sugar, pumpkin purée and vanilla to the cooled butter and whisk until smooth and glossy. Add the flour, cinnamon, baking powder, baking soda, salt, ginger, cloves and nutmeg and stir with a spatula just until a soft dough forms (don't overmix). Stir in 1¼ cups of the chocolate chips.",
      "Press the dough into the prepared pan in an even layer using a spatula or oiled hands. Sprinkle the top with the remaining chocolate chips, pressing them in. Bake until puffed, lightly browned and a knife inserted in the center comes out with just a few moist crumbs or smudges of melted chocolate, 30 to 45 minutes.",
      "Cool in the pan on a wire rack at least 1 hour. Using the parchment, lift out and cut into 24 squares. They keep in an airtight container up to 5 days."
    ]
  },
  {
    cuisine: "sweet", name: "Chocolate-Chip Banana Bread",
    servings: "Makes one 9-inch loaf", tags: ["banana bread", "chocolate chip", "quick bread", "breakfast", "make-ahead", "kid-friendly", "moist", "classic"],
    ingredients: [
      "Nonstick spray, as needed",
      "4 very ripe medium bananas, peeled",
      "6 tablespoons unsalted butter, melted",
      "⅓ cup plain Greek yogurt",
      "1 cup light or dark brown sugar",
      "2 large eggs",
      "2 teaspoons vanilla extract",
      "2 cups all-purpose flour",
      "1½ teaspoons baking soda",
      "½ teaspoon fine sea salt",
      "1 cup finely chopped chocolate or mini chocolate chips",
      "¾ cup coarsely chopped toasted nuts (almonds, walnuts or pecans), optional",
      "Coarse sanding or turbinado sugar, for finishing (optional)"
    ],
    steps: [
      "Heat the oven to 350 degrees. Lightly grease a 9-by-5-inch loaf pan with nonstick spray.",
      "In a large bowl, mash the bananas coarsely with a fork (broken apart, but a few lumps are fine). Whisk in the melted butter, yogurt, brown sugar, eggs and vanilla until well combined.",
      "In a medium bowl, whisk the flour, baking soda and salt to combine. Add to the banana mixture and stir with a spatula or wooden spoon, scraping the bowl well, until uniform.",
      "Gently stir in the chocolate (and nuts, if using), then pour the batter into the pan and spread evenly. If using, sprinkle the surface generously with coarse sugar.",
      "Bake until the edges start to pull away from the pan and a tester inserted into the center comes out with just a few moist crumbs, 60 to 75 minutes. If the top darkens too fast, loosely cover with foil.",
      "Transfer to a cooling rack and run a thin knife around the edge. Let cool in the pan 10 minutes before unmolding and cooling completely."
    ]
  },
  {
    cuisine: "sweet", name: "Gochujang Caramel Cookies",
    servings: "Makes about 8 large cookies", tags: ["cookies", "gochujang", "caramel", "chewy", "korean", "sweet-and-spicy", "crinkle", "by hand"],
    ingredients: [
      "½ cup (8 tablespoons) unsalted butter, very soft, divided",
      "2 packed tablespoons dark brown sugar",
      "1 heaping tablespoon gochujang",
      "1 cup granulated sugar",
      "1 large egg, at room temperature",
      "½ teaspoon coarse kosher salt (or ¾ teaspoon Diamond Crystal)",
      "¼ teaspoon ground cinnamon",
      "1 teaspoon vanilla extract",
      "½ teaspoon baking soda",
      "1½ cups all-purpose flour"
    ],
    steps: [
      "In a small bowl, stir together 1 tablespoon of the butter, the brown sugar and the gochujang until smooth. Set aside at room temperature.",
      "In a large bowl, by hand, whisk together the remaining 7 tablespoons butter, the granulated sugar, egg, salt, cinnamon and vanilla until smooth, about 1 minute. Switch to a flexible spatula and stir in the baking soda. Add the flour and gently stir to combine. Refrigerate until the dough is less sticky but still soft, 15 to 20 minutes.",
      "While the dough chills, heat the oven to 350 degrees and line 2 large sheet pans with parchment.",
      "In 3 to 4 spaced-out blobs, spoon the gochujang mixture over the dough. Using long circular strokes, swirl it in so you have wide, distinct streaks of orange-red rippled through the beige. Don't overmix.",
      "Use an ice cream scoop to plop out ¼-cup rounds at least 3 inches apart (4 to 5 per pan). Bake until lightly golden at the edges and set in the center, 11 to 13 minutes, rotating halfway. Let cool completely on the pan (they flatten and continue cooking as they cool). They keep up to 2 days."
    ]
  },
  {
    cuisine: "sweet", name: "Skillet Caramel-Apple Crisp",
    servings: "Serves 8 to 10", tags: ["apple crisp", "caramel", "skillet", "fall", "oats", "make-ahead", "comfort dessert", "à la mode"],
    ingredientGroups: [
      { title: "For the Caramel Sauce", items: [
        "2 cups granulated sugar",
        "¾ cup (1½ sticks) unsalted butter, diced",
        "1 cup heavy cream",
        "1 teaspoon vanilla bean paste or extract",
        "1 teaspoon kosher salt"
      ]},
      { title: "For the Filling", items: [
        "3 pounds tart, firm apples (Mutsu, Jonathan or Honeycrisp), about 6 medium",
        "1 tablespoon fresh lemon juice",
        "1 teaspoon ground cinnamon",
        "½ teaspoon ground cardamom",
        "⅛ teaspoon ground cloves",
        "Pinch of kosher salt"
      ]},
      { title: "For the Topping", items: [
        "1 cup all-purpose flour",
        "1 cup old-fashioned oats",
        "⅓ cup chopped pecans (optional)",
        "⅓ cup light brown sugar",
        "½ teaspoon kosher salt",
        "½ cup (1 stick) unsalted butter, softened"
      ]}
    ],
    steps: [
      "Make the caramel sauce: Add the granulated sugar and ¼ cup water to a 3-quart saucepan and stir to combine. Add the butter and set over medium-high heat, but do not stir. Cook, without stirring, until the butter and sugar have melted and started to bubble, 4 to 5 minutes.",
      "After the mixture begins to brown at the edges, use a heatproof spatula to carefully stir occasionally until deep golden brown and just beginning to smoke, 4 to 5 minutes. Do not walk away — caramel goes from golden to burned in moments.",
      "Off the heat, carefully whisk in the heavy cream (it will expand and sputter, then smooth out). Add the vanilla and salt. If lumpy, return to low heat and whisk until smooth. You should have about 2 cups. Pour into a heatproof container to cool.",
      "Make the filling: Heat the oven to 350 degrees with a rack in the center. Peel, core and slice the apples into ½-inch slices. In a large bowl, combine the apples, lemon juice, spices and salt. Drizzle ½ cup caramel sauce over the top and stir again. Scrape the apples and all their juices into a 9- or 10-inch oven-safe skillet.",
      "Make the topping: In the same bowl, combine the flour, oats, pecans, sugar and salt. Stir, then add the butter and mash it in with your fingers until crumbs form. Scatter the topping evenly over the apples. Bake until the topping is golden and the juices are bubbling, 40 to 50 minutes. Serve warm with more warm caramel sauce and ice cream."
    ]
  },
  {
    cuisine: "sweet", name: "Strawberry Spoon Cake",
    servings: "Serves 4", tags: ["cake", "strawberry", "spoon cake", "gooey", "quick", "summer", "à la mode", "easy"],
    ingredients: [
      "½ cup (1 stick) unsalted butter, melted, plus more for greasing",
      "5 ounces fresh or frozen-and-thawed hulled strawberries (about 1 cup)",
      "⅔ cup packed light brown sugar, divided",
      "½ cup whole milk, at room temperature",
      "½ teaspoon kosher salt",
      "1 cup all-purpose flour",
      "1 teaspoon baking powder",
      "Vanilla ice cream, for serving"
    ],
    steps: [
      "Heat the oven to 350 degrees and grease an 8-inch (square or round) baking dish with butter. Set aside.",
      "Using your hands or the back of a fork, mash the berries to release their juices, then stir in ⅓ cup of the brown sugar. Set aside.",
      "In a medium bowl, whisk together the melted butter, remaining ⅓ cup brown sugar, milk and salt, then add the flour and baking powder and whisk just until the batter is smooth. Transfer the batter (it's not much) to the dish and spread evenly into the corners.",
      "Spoon the strawberries and all their juices over the top of the batter. Bake 20 to 25 minutes, just until a toothpick comes out clean in the center. Cool 3 to 5 minutes before spooning into bowls. Serve warm with ice cream."
    ]
  }
];
