# [2115. Find All Possible Recipes from Given Supplies](https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 2631 | 141 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`graph`](https://leetcode.com/tag/graph), [`topological-sort`](https://leetcode.com/tag/topological-sort)

**Companies:** `uber`, `tiktok`, `amazon`, `google`, `microsoft`

## Description

You have information about `n` different recipes. You are given a string array `recipes` and a 2D string array `ingredients`. The `i^th` recipe has the name `recipes[i]`, and you can **create** it if you have **all** the needed ingredients from `ingredients[i]`. A recipe can also be an ingredient for **other **recipes, i.e., `ingredients[i]` may contain a string that is in `recipes`.

You are also given a string array `supplies` containing all the ingredients that you initially have, and you have an infinite supply of all of them.

Return *a list of all the recipes that you can create. *You may return the answer in **any order**.

Note that two recipes may contain each other in their ingredients.

 

**Example 1:**

```

Input: recipes = [&quot;bread&quot;], ingredients = [[&quot;yeast&quot;,&quot;flour&quot;]], supplies = [&quot;yeast&quot;,&quot;flour&quot;,&quot;corn&quot;]
Output: [&quot;bread&quot;]
Explanation:
We can create &quot;bread&quot; since we have the ingredients &quot;yeast&quot; and &quot;flour&quot;.

```

**Example 2:**

```

Input: recipes = [&quot;bread&quot;,&quot;sandwich&quot;], ingredients = [[&quot;yeast&quot;,&quot;flour&quot;],[&quot;bread&quot;,&quot;meat&quot;]], supplies = [&quot;yeast&quot;,&quot;flour&quot;,&quot;meat&quot;]
Output: [&quot;bread&quot;,&quot;sandwich&quot;]
Explanation:
We can create &quot;bread&quot; since we have the ingredients &quot;yeast&quot; and &quot;flour&quot;.
We can create &quot;sandwich&quot; since we have the ingredient &quot;meat&quot; and can create the ingredient &quot;bread&quot;.

```

**Example 3:**

```

Input: recipes = [&quot;bread&quot;,&quot;sandwich&quot;,&quot;burger&quot;], ingredients = [[&quot;yeast&quot;,&quot;flour&quot;],[&quot;bread&quot;,&quot;meat&quot;],[&quot;sandwich&quot;,&quot;meat&quot;,&quot;bread&quot;]], supplies = [&quot;yeast&quot;,&quot;flour&quot;,&quot;meat&quot;]
Output: [&quot;bread&quot;,&quot;sandwich&quot;,&quot;burger&quot;]
Explanation:
We can create &quot;bread&quot; since we have the ingredients &quot;yeast&quot; and &quot;flour&quot;.
We can create &quot;sandwich&quot; since we have the ingredient &quot;meat&quot; and can create the ingredient &quot;bread&quot;.
We can create &quot;burger&quot; since we have the ingredient &quot;meat&quot; and can create the ingredients &quot;bread&quot; and &quot;sandwich&quot;.

```

 

**Constraints:**

	- `n == recipes.length == ingredients.length`

	- `1 <= n <= 100`

	- `1 <= ingredients[i].length, supplies.length <= 100`

	- `1 <= recipes[i].length, ingredients[i][j].length, supplies[k].length <= 10`

	- `recipes[i], ingredients[i][j]`, and `supplies[k]` consist only of lowercase English letters.

	- All the values of `recipes` and `supplies` combined are unique.

	- Each `ingredients[i]` does not contain any duplicate values.

---

**Links:** [Submissions](https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/) | [Solutions](https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/)
