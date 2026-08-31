# Javascript Three Solutions, DFS, iterative and Topological sort

**Author:** leon86ka
**Votes:** 8
**Link:** [https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/solutions/1826723/](https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/solutions/1826723/)

---

Since we don't need to care of the order these recipes come in, we don't need to use toposort.
Thanks to @votrubac for this idea. https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/discuss/1646903/DFS
Before solving this problem I didn't know what topological sort is, and I solved it in brute forse, which I add below. But then the more I learned about toposort, it became apparent to me that we don't need to use it.

Idea - if we have all of the ingredients we add recipe in the result list. The problem arises when we have two recipes as a prerequisits of one another. So all we have to check if we have started this prereq as a recipe before, that's why I use progress to mark each ingredient. If we have started this prereq before, then we got a problem, we return false, otherwise we continue, placing the rest of the recipes to the result.
Toposort last solution, like many of users used a queue to go through all of the recipes.

```
var findAllRecipes = function(recipes, ingredients, supplies) {
    const setOfIngredients = new Set(supplies);
    const recipesWithIngredients = new Map();
    const progress = new Map();
	//map recipes to it's ingredients and set each recipe to false in another map called progress
    for(let i = 0; i < recipes.length; i++) {
        recipesWithIngredients.set(recipes[i], ingredients[i]);
        progress.set(recipes[i], false)
    }
    
    const result = [];
    
    for(const rec of recipes) {
        if(recurse(rec, recipesWithIngredients, setOfIngredients, progress)) {
            result.push(rec);
            setOfIngredients.add(rec);
        }
    }
    
    return result;
};

function recurse(rec, recipesWithIngredients, setOfIngredients, progress) {
    const currentIngredients = recipesWithIngredients.get(rec);
    for(const ingredient of currentIngredients) {
        if(setOfIngredients.has(rec)) continue;
        if(setOfIngredients.has(ingredient)) continue;
        
        else if(recipesWithIngredients.has(ingredient)) {
            if(progress.get(ingredient)) return false;
            progress.set(ingredient, true); 
            let hasCycle = recurse(ingredient, recipesWithIngredients, setOfIngredients, progress);
            if(!hasCycle) return false;
            setOfIngredients.add(ingredient);
        } else {
            return false;
        } 
    }
    return true;
}
```

brute force

```
var findAllRecipes = function(recipes, ingredients, supplies) {
    const setOfIngredients = new Set();
    for(const ingredient of supplies) setOfIngredients.add(ingredient);
    const result = [];
    let track = true;
    while(track) {
        track = false;
        for(let i = 0; i < recipes.length; i++) {
            let recipe = recipes[i];
            let ingred = ingredients[i];
            if(result.indexOf(recipe) >= 0) continue;
            let hasAllIngredients = true;
            for(const ing of ingred) { 
                if(!setOfIngredients.has(ing)) {
                    hasAllIngredients = false;
                    break;
                }
            }
            if(hasAllIngredients) {
                setOfIngredients.add(recipe);
                result.push(recipe);
                track = true;
            }
        }
    }
    return result;
};
```
Topological sort

```
var findAllRecipes = function(recipes, ingredients, supplies) {
    const listOfSupplies = new Set(supplies);
    const indexes = new Map();
    const map = new Map();
    for(let i = 0; i < recipes.length; i++) {
        indexes.set(recipes[i], i);
    }
    
    const indegree = new Array(recipes.length).fill(0);
    
    for(let i = 0; i < recipes.length; i++) {
        let ingr = ingredients[i];
        for(let ing of ingr) {
            if(listOfSupplies.has(ing)) continue;
            
            if(!map.has(ing)) map.set(ing, []);
            map.get(ing).push(recipes[i]);
            indegree[i]++;
        }
    }
    
    const queue = [];
    const result = [];
    for(let i = 0; i < indegree.length; i++) {
        if(indegree[i] === 0) queue.push(i);
    }
    while(queue.length > 0) {
        let idx = queue.shift();
        result.push(recipes[idx]);
        if(!map.has(recipes[idx])) continue;
        const listOfDeps = map.get(recipes[idx]);
        removeDeps(listOfDeps, queue, indexes, indegree)

    }
    return result;
};

function removeDeps(listOfDeps, queue, indexes, indegree) {
    for(const dep of listOfDeps) {
        let depsIdx = indexes.get(dep)
        indegree[depsIdx]--;
        if(indegree[depsIdx] === 0) queue.push(depsIdx)
    }
}

```