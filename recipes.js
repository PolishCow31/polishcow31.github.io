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
  }
];
