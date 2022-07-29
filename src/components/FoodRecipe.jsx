import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMealById } from "../api";
import Loader from "./Loader";

const FoodRecipe = () => {
  const [recipe, setRecipe] = useState([]);
  const [showRecipe, setShowRecipe] = useState(true);
  const { id } = useParams();
  const handleRecipeShow = () => {
    setShowRecipe(!showRecipe);
  };

  useEffect(() => {
    getMealById(id).then((data) => setRecipe(data.meals[0]));
  }, []);

  const {
    idMeal,
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strMealThumb,
    strYoutube,
  } = recipe;

  return (
    <div key={idMeal} className="content">
      <div className="container">
        <div className="mb-5 text-center">
          <h1 className="my-5">{strMeal}</h1>
          <img
            src={strMealThumb}
            className="img-thumbnail"
            alt={strCategory}
          ></img>
        </div>
        <div className="text-center div-iframe">
          <iframe
            width="711"
            height="533"
            src={
              "https://www.youtube.com/embed/" + String(strYoutube).slice(-11)
            }
            title="Melaka shahriga sayohat"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="container my-5">
        <h6>
          <b>Category:</b> {strCategory}
        </h6>
        {strArea ? (
          <h6>
            <b>Area:</b> {strArea}
          </h6>
        ) : (
          ""
        )}
        <button onClick={handleRecipeShow} className="mt-4 mb-2 btn btn-success">
          {showRecipe ? 'Close Recipe' : 'Show Recipe'}
        </button>
        {showRecipe ? (
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(recipe).map((key) => {
                if (key.includes("strIngredient") && recipe[key]) {
                  return (
                    <tr key={recipe[key]}>
                      <td>{key.slice(13)}. </td>
                      <td>{recipe[key]}</td>
                      <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        ) : (
          ""
        )}
        <p>{strInstructions}</p>
      </div>
    </div>
  );
};

export default FoodRecipe;
