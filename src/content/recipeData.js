import scones from "../img/recipe_imgs/fruit_scones.jpg";
import spaghetti from "../img/recipe_imgs/spaghetti_carbonara.jpg";
import gnocchi from "../img/recipe_imgs/tomato_gnocchi.JPG";

const recipeData = [
  {
    title: "Fruit Scones",
    img: scones,
    ingredients: [
      { ingredient: "Self-Raising Flour", amount: "225g" },
      { ingredient: "Baking Powder", amount: "1/2tsp" },
      { ingredient: "Unsalted Butter (cold)", amount: "75g" },
      { ingredient: "Salt", amount: "A good pinch" },
      { ingredient: "Sugar", amount: "40g" },
      { ingredient: "Dried Fruit", amount: "60g" },
      { ingredient: "Eggs", amount: "One, large" },
      { ingredient: "Milk", amount: "A good splash" },
      { ingredient: "Vanilla Extract", amount: "1tsp" },
    ],
    desc:
      "These are light as anything and great with cream and jam. This recipe makes around 8 scones.",
    method: [
      "Preheat your oven to 200 degrees celcius and place a baking sheet in it to get really hot",
      "Combine the flour, baking powder, sugar and salt in a bowl",
      "Using your fingertips, rub the butter into the dry ingredients to form fine breadcrumbs",
      "Beat together the egg, vanilla and a splash of milk, then add to the bowl of dry ingredients",
      "Bring the dough together using a butter knife, before turning out onto a floured surface. Lightly pat out until the dough is around 3cm thick. Try not to work the dough too much, the less you work it the better the scones will be",
      "Cut scones out with a round cutter, or in my case a dough scraper (it's all I had!), making sure that the sides are cleanly cut. This helps the scones rise. Place the cut out scones on a piece of baking parchment big enough to hold them all.",
      "Brush with a little extra milk (I just throw some in whatever I beat the egg mixture in)",
      "Carefully remove the hot baking sheet from the oven and swiftly move the baking parchment containing your scones onto it. The hot tray on the bottom of the scones ensures crisp bottoms!",
      "Bake for 10-12 mins. They may need a touch longer depending on your oven, make sure to check.",
      "Serve with whatever you like! Jam and clotted cream is a classic, but I've honestly just eaten them dry, or with a little butter and been very happy. Enjoy!",
    ],
  },
  {
    title: "Spaghetti Carbonara",
    img: spaghetti,
    ingredients: [
      {
        ingredient: "Smoked Streaky Bacon",
        amount: "4 rashers, sliced into 1cm strips",
      },
      { ingredient: "Garlic", amount: "2 cloves, sliced" },
      { ingredient: "Butter", amount: "A decent knob" },
      { ingredient: "Egg Yolks", amount: "2 (3 if you're feeling decadent)" },
      { ingredient: "Parmesan Cheese", amount: "50g grated, plus more to top" },
      { ingredient: "Dried Spaghetti", amount: "100g" },
      { ingredient: "Black Pepper", amount: "To taste" },
    ],
    desc:
      "Dead easy to whip up, yet still tastes like something a bit special. Great for a weekday dinner. The amounts here serve one hungry person. While you can easily do a double portion for two, it gets much tricker and messier to do more!",

    method: [
      "Put a saucepan of salted water on to boil for the pasta. Heat a tablespoon of olive oil in a large frying pan and add the bacon.",
      "Get the pasta in the boiling water and set a timer for one minute before the packet recommends to cook it for",
      "Combine the egg yolks and the parmesan cheese in a bowl or mug, add black pepper to the mixture",
      "When the bacon gets a little crispy and starts to give up it's oil, add a knob of butter and the sliced garlic.",
      "When the timer for the pasta goes off, test a bit. It should be quite al-dente. If not, cook for another minute or so",
      "When the pasta is done correctly, use a pasta server or a pair of tongs to transfer directly to the pan with the bacon and the garlic. It will hiss and spit a little, which is fine",
      "Add a couple of tablespoons of the pasta water and cook for a minute or two, tossing the pasta to cover it in the bacon and garlic oil as it finishes cooking. Remove from the heat",
      "This is the crucial step - adding the egg yolks and cheese. If the pasta is too hot, the eggs will scramble which isn't what we want! We want to wait a minute or two until the pan has cooled just a little, and then add the egg and cheese mixture. Mix furiously to coat every strand of spaghetti and cook the eggs through.",
      "If done correctly and at the right time, the mixture will combine with the residual oil and pasta water to form a gorgeous, glossy sauce that coats the pasta",
      "Serve with additional parmesan and black pepper. Delicious!",
    ],
  },
  {
    title: "Sausage and Cherry Tomato Gnocchi",
    img: gnocchi,
    ingredients: [
      { ingredient: "Sausages", amount: "2" },
      { ingredient: "Cherry Tomatoes, halved", amount: "140g" },
      { ingredient: "Garlic", amount: "2 cloves, sliced" },
      { ingredient: "Tomato Paste", amount: "1tbsp" },
      {
        ingredient: "Fresh Chilli, chopped",
        amount: "To taste, I use half a medium chilli",
      },
      { ingredient: "Gnocchi", amount: "175g" },
      {
        ingredient: "Cheese to serve",
        amount:
          "Only you know how much cheese you deserve after the day you've had",
      },
    ],
    desc:
      "Another great quick & easy recipe to get you fed ASAP. Sweet cherry tomatoes, garlic, a little chilli and some pillowy gnocchi. Perfect! Feeds one hungry person.",
    method: [
      "First, split the sausages and discard the skins, then get a pot of salted water on the hob to boil",
      "Heat a tablespoon of olive oil in a large frying pan over high heat and add the sausagemeat, frying and breaking the meat up",
      "As it begins to take on colour, add the tomatoes and let sizzle away, stirring occasionally",
      "Once everything has browned a little and the tomatoes are starting to fall apart a bit, add the garlic and chilli, fry until fragrant (about 30secs) and then add the tomato paste",
      "Now is the time to get the gnocchi in the water while your tomatoes finish off. Cook the gnocci as directed. It's done when it starts to float on the surface of the water. This should only take a couple of minutes, so be ready!",
      "Once done, add the gnocchi along with a couple of tablespoons of the pasta water to your tomato mixture. Simmer away, making sure the thick sauce coats every dumpling",
      "Serve with a good twist of black pepper and any cheese you fancy on top. Excellent!",
    ],
  },
];

export default recipeData;
