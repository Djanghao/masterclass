# Simulation with recursion, caching and tracking

**Author:** lynnlu
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/solutions/4336995/](https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/solutions/4336995/)

---

# Intuition
We can simulate it.

# Approach
We can consider a recipe to be `craftable` iff:
a. its name didn't appear before in our ongoing/tracking list/chain of recipes (i.e. no cycles)
b. the recipe itself is craftable (i.e. name is present in provided list of recipes)
c. each of its ingredients is either present in the `supplies` or it is `craftable` itself (recursion applied here)
    c.1. before we dive into the recursion, append the current recipeName to the tracker
    c.2. after we're done with the recursion, remove the recipeName from the ongoing tracker.

And before any of these steps, short circuit if the answer has been computed (and thus cached) before.

# Complexity
- Time complexity:
O(numberOfRecipes * ingredientsPerRecipe)

- Space complexity:
O(numberOfRecipes * ingredientsPerRecipe)

# Code
```
import scala.collection.mutable.HashMap
import scala.collection.mutable.Set as MutableSet

object Solution {
    def findAllRecipes(recipes: Array[String], ingredients: List[List[String]], supplies: Array[String]): List[String] =
        new RecipeCreator(
            recipes.zip(ingredients.map(_.toSet)).toMap,
            supplies.toSet
        ).craftableRecipes.toList
}

object RecipeCreator {
    type Index = Int
    type Ingredient = String
    type Ingredients = Set[Ingredient]

    def memo[I, O](f: I => O): I => O = new HashMap[I, O]() {
        override def apply(k: I): O = getOrElseUpdate(k, f(k))
    }
}

import RecipeCreator._

class RecipeCreator(recipes: Map[Ingredient, Ingredients], supplies: Ingredients) {
    lazy val craftableRecipes = recipes.keys.filter(isIngredientCraftable)

    private val recipeChain = MutableSet[Ingredient]()

    private val isIngredientCraftable: Ingredient => Boolean = memo { desiredIngredient => 
        supplies.contains(desiredIngredient) || (

            !recipeChain.contains(desiredIngredient) && // no cycle

                recipes.contains(desiredIngredient) &&
                recipes(desiredIngredient).forall { ingredient =>
                    recipeChain += desiredIngredient
                    
                    val res = isIngredientCraftable(ingredient)
                    
                    recipeChain -= desiredIngredient
                    res
                }
            )
    }
}

```