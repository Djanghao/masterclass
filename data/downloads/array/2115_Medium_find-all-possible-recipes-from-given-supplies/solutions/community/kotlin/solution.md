# Kotlin | Topological Sort | DFS | Time: O(V + E) | Space O(V) | Short + Easy Understanding

**Author:** null925
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/solutions/1984408/](https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/solutions/1984408/)

---

```
fun findAllRecipes(recipes: Array<String>, ingredients: List<List<String>>, supplies: Array<String>): List<String> {
		// Groups the receipes with the ingredients at the matching index
        val recipeMap = recipes.zip(ingredients).toMap()
        val supplies = supplies.toMutableSet()
        val output = mutableSetOf<String>()
        
        fun canCook(visiting: MutableSet<String>, recipe: String): Boolean {
            if(recipe in supplies) return true
            if(recipe !in recipeMap) return false
            for(ingredient in recipeMap[recipe] ?: emptyList()) { 
                if(ingredient in supplies) continue
                if(ingredient in visiting) return false
                visiting.add(ingredient)
                if(!canCook(visiting, ingredient)) return false
                visiting.remove(ingredient)
            }
            supplies.add(recipe)
            return true
        }
        
        for(recipe in recipes) {
            if(recipe in supplies) output.add(recipe)
            if(canCook(mutableSetOf(), recipe)) output.add(recipe)
        }
        
        return output.toList()
    }