# [Java/Python 3] Toplogical Sort w/ brief explanation.

**Author:** rock
**Votes:** 120
**Link:** [https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/solutions/1646584/](https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/solutions/1646584/)

---

**Method 1: Bruteforce**
Repeated BFS till no any more finding

1. Put all supplies into a HashSet, `seen`, for checking the availability in `O(1)` time;
2. Put into a Queue all indexes of the recipes;
3. BFS and put into `seen` all recipes that we currently can create; put back into the Queue if a recipe we currently can not create;
4. After any round of breadth search, if no any more recipe we can create, return the recipes we found so far.

```java
    public List<String> findAllRecipes(String[] recipes, List<List<String>> ingredients, String[] supplies) {
        Set<String> seen = new HashSet<>();
        for (String sup : supplies) {
            seen.add(sup);
        }
        Queue<Integer> q = new LinkedList<>();
        for (int i = 0; i < recipes.length; ++i) {
            q.offer(i);
        }
        List<String> ans = new ArrayList<>();
        int prevSize = seen.size() - 1;
        while (seen.size() > prevSize) {
            prevSize = seen.size();
            mid:
            for (int sz = q.size(); sz > 0; --sz) {
                int i = q.poll();
                for (String ing : ingredients.get(i)) {
                    if (!seen.contains(ing)) {
                        q.offer(i);
                        continue mid;
                    }
                }
                seen.add(recipes[i]);
                ans.add(recipes[i]);
            }
        }
        return ans;
    }
```
```python
    def findAllRecipes(self, recipes: List[str], ingredients: List[List[str]], supplies: List[str]) -> List[str]:
        
        ans = []
        seen = set(supplies)
        dq = deque([(r, ing) for r, ing in zip(recipes, ingredients)])
        
        # dummy value for prev_size, just to make sure 
        # the initial value of prev_size < len(seen) 
        prev_size = len(seen) - 1 
        
        # Keep searching if we have any new finding(s).
        while len(seen) > prev_size:
            prev_size = len(seen)
            for _ in range(len(dq)):
                r, ing = dq.popleft()
                if all(i in seen for i in ing):
                    ans.append(r)
                    seen.add(r)
                else:
                    dq.append((r, ing))
        return ans
```

----

**Method 2: Topological sort**
1. For each recipe, count its non-available ingredients as in degree; Store (non-available ingredient, dependent recipes) as HashMap; 
2. Store all 0-in-degree recipes into a list as the starting points of topological sort;
3. Use topogical sort to decrease the in degree of recipes, whenever the in-degree reaches `0`, add it to return list.

```java
    public List<String> findAllRecipes(String[] recipes, List<List<String>> ingredients, String[] supplies) {
        List<String> ans = new ArrayList<>();
        // Put all supplies into HashSet.
        Set<String> available = Stream.of(supplies).collect(Collectors.toCollection(HashSet::new));
        Map<String, Set<String>> ingredientToRecipes = new HashMap<>();
        Map<String, Integer> inDegree = new HashMap<>();
        for (int i = 0; i < recipes.length; ++i) {
            int nonAvailable = 0;
            for (String ing : ingredients.get(i)) {
                if (!available.contains(ing)) {
                    ingredientToRecipes.computeIfAbsent(ing, s -> new HashSet<>()).add(recipes[i]);
                    ++nonAvailable;
                }
            }
            if (nonAvailable == 0) {
                ans.add(recipes[i]);
            }else {
                inDegree.put(recipes[i], nonAvailable);
            }
        }
        // Toplogical Sort.
        for (int i = 0; i < ans.size(); ++i) {
            String recipe = ans.get(i);
            if (ingredientToRecipes.containsKey(recipe)) {
                for (String rcp : ingredientToRecipes.remove(recipe)) {
                    if (inDegree.merge(rcp, -1, Integer::sum) == 0) {
                        ans.add(rcp);
                    }
                }
            }
        }
        return ans;
    }
```
```python
    def findAllRecipes(self, recipes: List[str], ingredients: List[List[str]], supplies: List[str]) -> List[str]:
        available = set(supplies)
        ans, ingredient_to_recipe, in_degree = [], defaultdict(set), Counter()
        for rcp, ingredient in zip(recipes, ingredients):
            non_available = 0
            for ing in ingredient:
                if ing not in available:
                    non_available += 1
                    ingredient_to_recipe[ing].add(rcp)
            if non_available == 0:
                ans.append(rcp)
            else:
                in_degree[rcp] = non_available
        for rcp in ans:
            for recipe in ingredient_to_recipe.pop(rcp, set()):
                in_degree[recipe] -= 1
                if in_degree[recipe] == 0:
                    ans.append(recipe)
        return ans
```

Simpler version is as follows:

Assumption: `ingredients do not contain any recipe`.
1. For each recipe, count its dependent ingredients as in degree; Store (ingredient, recipes that dependent on it) as HashMap; 
2. Use the `supplies` as the starting points of topological sort;
3. Use topogical sort to decrease the in degree of recipes, whenever the in-degree reaches `0`, add it to return list.
```java
    public List<String> findAllRecipes(String[] recipes, List<List<String>> ingredients, String[] supplies) {
        // Construct directed graph and count in-degrees.
        Map<String, Set<String>> ingredientToRecipes = new HashMap<>();
        Map<String, Integer> inDegree = new HashMap<>();
        for (int i = 0; i < recipes.length; ++i) {
            for (String ing : ingredients.get(i)) {
                ingredientToRecipes.computeIfAbsent(ing, s -> new HashSet<>()).add(recipes[i]);
            }
            inDegree.put(recipes[i], ingredients.get(i).size());
        }
        // Toplogical Sort.
        List<String> ans = new ArrayList<>();
        Queue<String> available = Stream.of(supplies).collect(Collectors.toCollection(LinkedList::new));
        while (!available.isEmpty()) {
            String ing = available.poll();
            if (ingredientToRecipes.containsKey(ing)) {
                for (String rcp : ingredientToRecipes.remove(ing)) {
                    if (inDegree.merge(rcp, -1, Integer::sum) == 0) {
                        available.offer(rcp);
                        ans.add(rcp);
                    }
                }
            }
        }
        return ans;
    }
```

```python
    def findAllRecipes(self, recipes: List[str], ingredients: List[List[str]], supplies: List[str]) -> List[str]:
        # Construct directed graph and count the in-degrees
        ingredient_to_recipe, in_degree = defaultdict(set), Counter()
        for rcp, ingredient in zip(recipes, ingredients):
            for ing in ingredient:
                ingredient_to_recipe[ing].add(rcp)
            in_degree[rcp] = len(ingredient)
        # Topological sort.    
        available, ans = deque(supplies), []
        while available:
            ing = available.popleft()
            for rcp in ingredient_to_recipe.pop(ing, set()):
                in_degree[rcp] -= 1
                if in_degree[rcp] == 0:
                    available.append(rcp)
                    ans.append(rcp)
        return ans
```

We can further simplify a bit the above Python 3 code, if you do NOT mind modifying the input `supplies`: get rid of the deque `available` and use `supplies` instead.

```python
    def findAllRecipes(self, recipes: List[str], ingredients: List[List[str]], supplies: List[str]) -> List[str]:
        # Construct directed graph and count the in-degrees
        ingredient_to_recipe, in_degree = defaultdict(set), Counter()
        for rcp, ingredient in zip(recipes, ingredients):
            for ing in ingredient:
                ingredient_to_recipe[ing].add(rcp)
            in_degree[rcp] = len(ingredient)
        # Topological sort.    
        ans = []
        for ing in supplies:
            for rcp in ingredient_to_recipe.pop(ing, set()):
                in_degree[rcp] -= 1
                if in_degree[rcp] == 0:
                    supplies.append(rcp)
                    ans.append(rcp)
        return ans
```

----

**Q & A**
Q1: Please explain the below statement(particularly how these set() funtion here).

```python
    for rcp in ingredient_to_recipe.pop(ing, set()):
```
A1: `ingredient_to_recipe.pop(ing, set())`: If existing, the dict will remove the  entry (key, value) and return the value corresponding to the key; if not, the dict will return the default value, a empty set.

Therefore, if the key `ing` is in the dict, `ingredient_to_recipe`, the statement will one by one traverse the value, the set corresponding to `ing`; if not, it will NOT iterate into a empty set.

Q2: Can you explain the intuition behind mapping ingredients to recipes instead of recipes to ingredients?
A2: Mapping ingredients to recipes is an iterative way, and from recipes to ingredients is a recursive way. Topological Sort I used is an iterative algorithm to handle the problem.

Since the problem ask us to find all of the possible recipes, and it says that "Ingredients to a recipe may need to be created from other recipes", we build nonavailable ingredient to its dependent recipe mapping to implement the Topological Sort algorithm. You may need to learn the algorithm if you are not familiar with it. 

**End of Q & A**
