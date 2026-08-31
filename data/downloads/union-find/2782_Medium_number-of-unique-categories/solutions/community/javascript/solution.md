# Javascript - Hash Set

**Author:** faustaleonardo
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-unique-categories/solutions/3789946/](https://leetcode.com/problems/number-of-unique-categories/solutions/3789946/)

---

# Code
```
/**
 * Definition for a category handler.
 * class CategoryHandler {
 *     @param {number[]} categories
 *     constructor(categories);
 *
 *     @param {number} a
 *     @param {number} b
 *     @return {boolean}
 *     haveSameCategory(a, b);
 * }
 */
/**
 * @param {number} n
 * @param {CategoryHandler} categoryHandler
 * @return {number}
 */
var numberOfCategories = function (n, categoryHandler) {
  const result = new result(n).fill();

  for (let i = 0; i < n; i++) {
    if (result[i] !== undefined) continue;

    for (let j = i; j < n; j++) {
      if (categoryHandler.haveSameCategory(i, j)) {
        result[i] = i;
        result[j] = i;
      }
    }
  }

  return new Set(result).size;
};

```