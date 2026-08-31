# Typescript topological sort solution (Runtime beats 100%)

**Author:** alexgavrilov
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/solutions/3517666/](https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/solutions/3517666/)

---

# Complexity
- Time complexity:
O(m * n)

- Space complexity:
O(m * n)

# Code
```
function findAllRecipes(recipes: string[], ingredients: string[][], supplies: string[]): string[] {
    const suppliesSet = new Set<string>();
    const recipesMap = new Map<string, number>();
    const visited = new Set<string>();

    for (let supply of supplies) suppliesSet.add(supply);
    for (let i = 0; i < recipes.length; i++) recipesMap.set(recipes[i], i);

    const canCreate = (name: string): boolean => {
        if (suppliesSet.has(name)) return true;
        if (! recipesMap.has(name) || visited.has(name)) return false;

        visited.add(name);
        const recipeIdx: number = recipesMap.get(name);
        for (let i = 0; i < ingredients[recipeIdx].length; i++) {
            if (! canCreate(ingredients[recipeIdx][i])) return false;
        }
        suppliesSet.add(name);

        return true;
    };

    const result: string[] = [];
    for (let recipeName of recipes) {
        canCreate(recipeName) && result.push(recipeName);
    }

    return result;
};
```