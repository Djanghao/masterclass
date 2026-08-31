# C# | Topological Sort | Explained | Clear Code |

**Author:** DanyloKarachentsev
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/solutions/6136466/](https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/solutions/6136466/)

---

# Intuition
We are given a list of recipes, their required ingredients, and an initial set of supplies. We need to determine which recipes can be made given that a recipe can only be made if all its ingredients are either in our initial supplies or can be produced by making other recipes.

The problem can be viewed as a topological sorting challenge in a directed graph:
- Each recipe is like a node.
- An edge from ingredient A to recipe B means B depends on A being available.
  
We start with a set of supplies that are readily available and use them to reduce the dependency of recipes that require those supplies. Any recipe whose dependencies drop to zero becomes "unlocked" and can act as a new supply for other recipes, continuing this chain reaction until no further recipes can be unlocked.

# Approach
1. **Build Graph and Count Prerequisites**:
   - Create a graph where each node is a recipe.
   - For each recipe, count how many ingredients are needed that are not initially available in `supplies`.
   - For each ingredient that is itself another recipe (exists in the graph), add a directed edge from the ingredient to the recipe that depends on it.

2. **Initialize the Queue**:
   - For all recipes that have zero prerequisites (i.e., can be made immediately from the given supplies), add them to a queue.
   - Mark these recipes as visited and add them to the result list.

3. **Process the Recipes** (Topological Sort):
   - While the queue is not empty, take out a recipe.
   - For each recipe that depends on this taken-out recipe, decrement its prerequisite count.
   - If any dependent recipe's prerequisites count hits zero, it means we can now make that recipe. Add it to the queue, mark as visited, and add to the result.

4. **Output**:
   - The result list contains all recipes that can eventually be made from the initial supplies.

# Complexity
- **Time Complexity**:  
  Let \\(R\\) be the number of recipes and \\(E\\) be the total number of ingredient entries across all recipes.  
  Building the graph and counting prerequisites takes \\(O(R + E)\\).  
  Each edge is processed at most once in the BFS/topological sort step.  
  Hence, the time complexity is \\(O(R + E)\\).

- **Space Complexity**:  
  The graph and auxiliary data structures (like `prerequisites`, `visited`, and `queue`) will use \\(O(R + E)\\) space.

# Code
```csharp []
public class Solution {
    public IList<string> FindAllRecipes(string[] recipes, IList<IList<string>> ingredients, string[] supplies)
    {
        var prerequisites = new Dictionary<string, int>();
        var graph = new Dictionary<string, List<string>>();
        var allSupplies = new HashSet<string>(supplies);

        foreach (var recipe in recipes)
        {
            prerequisites[recipe] = 0;
            graph[recipe] = new List<string>();
        }

        var result = new List<string>();
        var traverse = new Queue<string>();
        var visited = new HashSet<string>();

        for (int i = 0; i < recipes.Length; i++)
        {
            prerequisites[recipes[i]] = ingredients[i].Count;

            foreach (var ingredient in ingredients[i])
            {
                if (allSupplies.Contains(ingredient))
                {
                    prerequisites[recipes[i]]--;
                    continue;
                }

                if (ingredient == recipes[i] || !graph.ContainsKey(ingredient))
                {
                    continue;
                }

                graph[ingredient].Add(recipes[i]);
            }

            if (prerequisites[recipes[i]] is 0)
            {
                result.Add(recipes[i]);
                traverse.Enqueue(recipes[i]);
                visited.Add(recipes[i]);
            }
        }

        while (traverse.Count != 0)
        {
            var currentRecipe = traverse.Dequeue();
            foreach (var connectedRecipe in graph[currentRecipe])
            {
                if (visited.Contains(connectedRecipe))
                {
                    continue;
                }

                prerequisites[connectedRecipe]--;
                if (prerequisites[connectedRecipe] == 0)
                {
                    visited.Add(connectedRecipe);
                    traverse.Enqueue(connectedRecipe);
                    result.Add(connectedRecipe);
                }
            }
        }

        return result;
    }
}
```