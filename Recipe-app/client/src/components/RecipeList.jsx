import RecipeCard from "../components/RecipeCard"; 

const recipes = [
  { id: 1, name: "Dosa", image: "/images/dosa.jpg", ingredients: ["Rice", "Urad Dal", "Salt"], price: "₹50" },
  { id: 2, name: "Vada", image: "/images/vada.jpg", ingredients: ["Urad Dal", "Curry Leaves", "Chilies"], price: "₹40" },
  { id: 3, name: "Paneer Tikka", image: "/images/paneer_tikka.jpg", ingredients: ["Paneer", "Spices", "Yogurt"], price: "₹180" },
  { id: 4, name: "Dal Makhani", image: "/images/dal_makhani.jpg", ingredients: ["Black Lentils", "Butter", "Cream"], price: "₹150" },
  { id: 5, name: "Pasta", image: "/images/pasta.jpg", ingredients: ["Pasta", "Olive Oil", "Tomato Sauce"], price: "₹200" },
  { id: 6, name: "Burger", image: "/images/burger.jpg", ingredients: ["Bun", "Patty", "Cheese", "Lettuce", "Tomato"], price: "₹150" },
  { id: 7, name: "Chowmein", image: "/images/chowmein.jpg", ingredients: ["Noodles", "Vegetables", "Soy Sauce"], price: "₹120" },
  { id: 8, name: "Manchurian", image: "/images/manchurian.jpg", ingredients: ["Cauliflower", "Garlic", "Soy Sauce", "Chilli Sauce"], price: "₹160" },
  { id: 9, name: "Sushi", image: "/images/sushi.jpg", ingredients: ["Rice", "Nori", "Fish"], price: "₹300" },
  { id: 10, name: "Ramen", image: "/images/ramen.jpg", ingredients: ["Noodles", "Broth", "Egg","Fish Cake"], price: "₹250" },
];

const RecipeList = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Our Recipes</h2>
      <div className="row">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeList; 
