const RecipeCard = ({ recipe }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={recipe.image} className="card-img-top" alt={recipe.name} />
        <div className="card-body">
          <h5 className="card-title">{recipe.name}</h5>
          <p className="card-text">
            <strong>Ingredients:</strong> {recipe.ingredients.join(", ")}
          </p>
          <p className="card-text">
            <strong>Price:</strong> {recipe.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;