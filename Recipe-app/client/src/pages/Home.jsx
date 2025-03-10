import RecipeList from "../components/RecipeList";

const Home = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center">Welcome to Recipe Maker</h1>
      <p className="text-center">Explore delicious recipes and share your own!</p>
      <RecipeList />
    </div>
  );
};

export default Home;
