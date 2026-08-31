# Official Solution

**Link:** [https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/solution/](https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/solution/)

---

[TOC]

## Solution

---

### Overview

Let's first try to equate our problem to a real-world cooking scenario. Imagine you have a kitchen stocked with basic ingredients and a cookbook filled with recipes. Each recipe specifies the exact ingredients needed to prepare it. Some recipes are simple, requiring only basic ingredients, while others are more complex, needing not just raw ingredients but also other prepared dishes as part of their recipe. Our goal is to determine which recipes can be made using the given set of available ingredients.  

At first glance, this might seem straightforward. If we have all the ingredients listed for a recipe, we can make it. However, the problem becomes more complex when recipes depend on other recipes. Suppose Recipe A requires Recipe B, but Recipe B itself needs Recipe C, and Recipe C, in turn, depends on Recipe A. This creates a circular dependency, making it unclear where to begin. If we do not account for these dependencies properly, we could end up in an infinite loop, never determining which recipes can actually be made. Our approach needs to handle these interdependencies properly.
    
---

### Approach 1: Breadth-First Search (BFS)

#### Intuition

One straightforward way to solve this problem is to make new recipes in rounds using our available ingredients. During each round, we check every recipe and ask, "Can we make this recipe with what we have?" If we can, we make it; if we can't, we'll try again later.

Let's break down how to write code for this approach. First, we need to track all our available ingredients. Since we'll frequently check if we have specific ingredients, we should use a data structure that allows quick lookups. A hash set is perfect for this because it lets us check and add ingredients almost instantly.

Next, we need a way to manage the recipes we want to attempt. We can use a queue to keep track of the recipes that we still need to process. Initially, the queue contains all the recipes since none have been prepared yet.

Now, we start processing the recipes. For each recipe in the queue, we check if all its required ingredients are available. If they are, we mark the recipe as completed and add it to our list of available ingredients, making it usable for other recipes. If we can't make a recipe yet, we put it back in the queue and try again in the next round.

But how do we know when to stop? Before each round, we note how many ingredients we have. If, after processing all recipes in the queue, the ingredient count has increased, it means we’ve made progress and should continue. However, if the ingredient count remains unchanged, it means no more recipes can be made, and we return the list of completed recipes.

Notice how this approach handles dependencies. If Recipe A depends on Recipe B, but we haven't made Recipe B yet, Recipe A remains in the queue. Later, once we successfully prepare Recipe B, Recipe A will have all the required ingredients and can be processed. This natural progression handles even complex dependency chains.

#### Algorithm

- Create a hash set `available` to track all available items.
- Add each supply from the `supplies` array into the `available` set.
- Create a Queue `recipeQueue` to store recipe indices.
- Add indices from `0` to `recipes.length-1` into the `recipeQueue`.
- Initialize:
  - a list `createdRecipes` to store the final result.
  - a variable `lastSize` to `-1`.
- While the size of `available` is greater than `lastSize`:
    - Set `lastSize` to the current size of `available`.
    - Set a variable `queueSize` to the size of `recipeQueue`.
    - While `queueSize` is greater than `0`:
      - Decrement `queueSize`.
      - Remove the front element from `recipeQueue` and put it in a variable `recipeIdx`.
      - Set a boolean `canCreate` to `true`.
      - For each `ingredient` in `ingredients[recipeIdx]`:
        - If `ingredient` is not present in the `available` set:
          - Set `canCreate` to `false` and break out of the loop.
        - If `canCreate` is `false`:
          - Add `recipeIdx` back to `recipeQueue`.
        - Else:
          - Add `recipes[recipeIdx]` to the `available` set and the `createdRecipes` list.
        - Decrease `count` by `1`.
- Return `createdRecipes` as the answer.

#### Implementation

<iframe src="https://leetcode.com/playground/hHVZHDUF/shared" frameBorder="0" width="100%" height="500" name="hHVZHDUF"></iframe>

#### Complexity Analysis

Let $n$ be the number of recipes, $m$ be the total number of ingredients across all recipes, and $s$ be the number of supplies.  

- Time complexity: $O(n^2 \cdot m + s)$

    Initially, all supplies are inserted into a set in $O(s)$ time.

    In the worst case, a recipe may be reprocessed up to $O(n)$ times—each time it’s checked, it might still be uncreatable and gets added back to the queue. Since there are $n$ recipes, and checking whether a recipe is creatable involves scanning all its ingredients (which takes up to $O(m)$ per recipe), this leads to a worst-case bound of $O(n^2 \cdot m)$ for repeatedly checking recipe feasibility.

    Additionally, set insertion and membership checks are $O(1)$ on average and do not significantly impact the total complexity.

    Therefore, the total time complexity is $O(n^2 \cdot m + s)$.

- Space complexity: $O(n + s)$  

    The algorithm maintains a set to store available ingredients, which can grow up to $O(n + s)$. The queue holds up to $O(n)$ elements, and we use no additional structures beyond these. Thus, the overall space complexity is $O(n + s)$. We do not consider the output space as part of our analysis.

---

### Approach 2: Depth-First Search (DFS)

#### Intuition

In our previous approach, we gathered as many recipes as we could make with the current set of ingredients in each iteration and then proceeded to find further recipes in the next iteration, mimicking a BFS approach. Let's try a different way.

Think about how you would actually make a recipe in real life. When you check your ingredients, you might find that one of them is actually another recipe you need to make first. Naturally, you'd pause your main recipe to figure out how to make this sub-recipe. This thought process matches perfectly with a depth-first search (DFS) solution.

Since our task is to find the number of recipes we can make from the given list, let's create a function `checkRecipe` which returns `true` if we can make the recipe. To check if we can, we go over the list of ingredients. Let's say we come across an ingredient that is itself another recipe. We can now use the `checkRecipe` function recursively to check if the recipe can be made, and then in turn, used as an ingredient to make the parent recipe.

However, there's a challenging aspect to this problem: circular dependencies. Here's a simple example:
- Recipe A requires Recipe B to make it.
- Recipe B requires Recipe C to make it.
- Recipe C requires Recipe A to make it.

Without proper safeguards, our code could get stuck in an endless loop. To prevent this, we keep track of which recipes we're currently checking in a `visited` set. As we explore each recipe's dependencies, we mark it as visited. If we encounter a recipe that's already in our `visited` set, we know we've found a cycle and can immediately determine that the recipe isn't possible to make. 

#### Algorithm

- Initialize:
  - a list `possibleRecipes` to store the recipes that can be made.
  - a hash map `canMake` to track if an ingredient/recipe can be made, mapping from the name to a boolean value.
  - a hash map `recipeToIndex` to store the mapping from a recipe name to its index in the ingredients list.
- Loop through all the initial `supplies` and mark each one as available (`true`) in the `canMake` map.
- Loop through all the `recipes` and create a mapping from each recipe name to its index in the `recipeToIndex` map.
- For each `recipe` in the `recipes` array:
  - Call the `checkRecipe` function with the current `recipe`.
  - If the `recipe` can be made (`true` in `canMake`), add it to the `possibleRecipes` list.
- Return the list of possible recipes.

Helper method `checkRecipe(recipe, ingredients, visited, canMake, recipeToIndex)`:
- If the recipe is already marked as makeable (`true`) in `canMake`, return immediately.
- If the recipe doesn't exist in the `recipeToIndex` map or is already in the `visited` set (indicating a cycle), mark it as unmakeable (`false`) and return.
- Add the current `recipe` to the `visited` set.
- Get the list of required ingredients for the current recipe using its index.
- For each `ingredient` in the required ingredients:
  - Recursively call `checkRecipe` on the `ingredient`.
  - If the ingredient cannot be made (`false` in `canMake`), mark the current `recipe` as unmakeable (`false`) and return.
- After checking all ingredients successfully, mark the current `recipe` as makeable (`true`).

#### Implementation

<iframe src="https://leetcode.com/playground/WjdwJagJ/shared" frameBorder="0" width="100%" height="500" name="WjdwJagJ"></iframe>

#### Complexity Analysis

Let $n$ be the number of recipes, $m$ be the total number of ingredients across all recipes, and $s$ be the number of supplies.

- Time complexity: $O(n + m + s)$

    The algorithm uses DFS to check each recipe's ingredients. Initially, we process supplies and create recipe mappings in $O(s)$ and $O(n)$ time, respectively. For each recipe, we perform DFS through its ingredients, visiting each ingredient exactly once due to the `visited` set preventing cycles. Since we memoize results in the `canMake` map, each ingredient and recipe is processed at most once across all DFS calls. Therefore, the total number of operations is proportional to the number of recipes plus the total number of ingredients, giving us $O(n + m + s)$ time complexity.

- Space complexity: $O(n + s)$  

    The solution utilizes several key data structures that contribute to its space requirements. The hash map `canMake` initially stores supply information, requiring $O(s)$ space. The dictionary `recipeToIndex` maps recipes to indices, using $O(n)$ space. For cycle detection, the `visited` set and the result list `possibleRecipes` each take $O(n)$ space. The recursion stack depth in the worst case is bounded by the number of recipes rather than all ingredients, contributing at most $O(n)$ space. Since all operations and structures operate primarily on recipes, the total auxiliary space complexity is **$O(n + s)$**.

---

### Approach 3: Topological Sort (Kahn's Algorithm)

#### Intuition

Our previous solutions had some drawbacks. The BFS approach kept trying recipes repeatedly until we couldn't make any more, which could be slow when recipes had complex dependencies. While the DFS solution handled dependencies well, it needed careful tracking to avoid infinite loops. Let's explore a more organized approach using something called topological sorting.

Making recipes is really about the order we make them, since some recipes must be created before others. We can think of this like a map where arrows point from one recipe to another, showing what needs to be made first. Topological sorting is perfect for solving this kind of problem because it's designed to handle these "what comes first" relationships.

Instead of constantly checking which ingredients a recipe needs, we can reverse our perspective. Instead of focusing on what each recipe depends on, we track which recipes depend on a given ingredient. This shift in thinking allows us to process recipes in an optimal order i.e., whenever a new recipe is made, we immediately know which other recipes can now be completed.  

The most important component of the topological sorting algorithm is the `inDegree` array. For each recipe, this array counts how many ingredients we still need to find. Here's what that means:
1. If a recipe has an in-degree of zero, it means all of its required ingredients are already available, and we can make it immediately.  
2. Each time we complete a recipe, it becomes available as an ingredient for other recipes, so we decrease the in-degree of all recipes that depend on it.  
3. When a recipe’s in-degree reaches zero, it becomes the next recipe we can make.  

Here's how the `inDegree` array would look for Example 3 of the problem description:

![indegree array](../Figures/2115/indegree.png)

To implement the algorithm, we first create the dependency graph and populate the `inDegree` array. For each recipe, we iterate over its ingredients and add a directed edge from each ingredient to the recipe, but only if the ingredient is not already available in the initial supplies. This ensures that the in-degree of a recipe reflects only the number of unavailable ingredients it depends on.

Then, we iterate over each recipe using a queue and try to resolve the dependencies. Initially, we add to the queue all recipes that have an in-degree of zero, meaning they only require ingredients from our supplies and don't depend on any other recipes. As we complete each recipe, it becomes available as an ingredient for other recipes, so decrease the in-degree of all its dependent recipes by one. When all required ingredients for a recipe become available (its in-degree reaches zero), we can make that recipe too. It also becomes an ingredient by itself, so we add it to the queue.

We keep track of each recipe we make in a list called `createdRecipes`. When the queue is empty and all dependencies have been resolved, we return this list as our answer.

> For a more comprehensive understanding of Topological Sorting, check out the [Topological Sort Explore Card](https://leetcode.com/explore/learn/card/graph/623/kahns-algorithm-for-topological-sorting/3886/). This resource provides an in-depth look at topological sorting, explaining its key concepts and applications with a variety of problems to solidify understanding of the pattern.

#### Algorithm

- Initialize:
  - a hash set `availableSupplies` to store the initial supplies.
  - a hash map `recipeToIndex` to store the mapping from recipe names to their indices.
  - a hash map `dependencyGraph` to store which recipes depend on each ingredient.
- Loop through all the supplies and add each one to the `availableSupplies` set.
- Loop through all the recipes and create a mapping from each recipe to its corresponding index.
- Initialize an array `inDegree` to track the count of remaining ingredients needed for each recipe.

To build the dependency graph:
- For each recipe:
  - For each `ingredient` in the current recipe:
    - If the `ingredient` is not in the available supplies, add it to the `dependencyGraph` if not present.
    - Add the current recipe to the list of recipes that need this ingredient.
    - Increment the `inDegree` count for the current recipe.

For finding makeable recipes:
- Initialize a `queue` to store the indices of recipes that can be made immediately.
- Loop through all the `recipes`:
  - If a recipe's `inDegree` is zero (only needs available supplies), add it to the `queue`.
- Initialize a list `createdRecipes` to store the result
- While the `queue` is not empty:
  - Get the next recipe index from the `queue`.
  - Get the recipe name using the index.
  - Add the recipe to the `createdRecipes` list.
  - If no other recipes depend on this recipe, continue to the next iteration.
  - For each recipe that depends on the current recipe:
    - Decrease its `inDegree` count by one.
    - If the `inDegree` becomes zero, add it to the queue.
- Return the list of created recipes.

#### Implementation

<iframe src="https://leetcode.com/playground/dUEVdEvN/shared" frameBorder="0" width="100%" height="500" name="dUEVdEvN"></iframe>

#### Complexity Analysis

Let $n$ be the number of recipes, $m$ be the total number of ingredients across all recipes, and $s$ be the number of supplies.

- Time complexity: $O(n + m + s)$

    Initially, we process all supplies to mark them as available, taking $O(s)$ time. Then we create recipe mappings in $O(n)$ time. Building the dependency graph requires examining each ingredient for each recipe once, taking $O(m)$ time. When processing recipes in topological order, we visit each recipe once and process its dependencies. Since each ingredient-to-recipe edge in the dependency graph is processed exactly once, and the total number of such edges is bounded by $m$, the queue processing takes $O(n + m)$ time. Therefore, the total time complexity is $O(n + m + s)$.

- Space complexity: $O(n + m + s)$

    The algorithm uses several auxiliary data structures to track the recipe creation process. We use a hash set to store available supplies and a hash map to maintain recipe indices taking $O(s)$ and $O(n)$ space respectively. The core of our space usage comes from the dependency graph, which stores ingredient-to-recipe relationships and could grow up to $O(m)$ size. Additional structures include an array for tracking ingredient counts per recipe ($O(n)$), a queue for our topological sort ($O(n)$), and a list for storing our final results ($O(n)$). When we combine all these components, our total auxiliary space requirement becomes $O(n + m + s)$.

---