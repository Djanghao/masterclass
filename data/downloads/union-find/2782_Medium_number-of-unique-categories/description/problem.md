# [2782. Number of Unique Categories](https://leetcode.com/problems/number-of-unique-categories/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 35 | 3 |

**Tags:** [`union-find`](https://leetcode.com/tag/union-find), [`interactive`](https://leetcode.com/tag/interactive), [`counting`](https://leetcode.com/tag/counting)

**Companies:** `amazon`

## Description

You are given an integer `n` and an object `categoryHandler` of class `CategoryHandler`.

There are `n `elements, numbered from `0` to `n - 1`. Each element has a category, and your task is to find the number of unique categories.

The class `CategoryHandler` contains the following function, which may help you:

	- `boolean haveSameCategory(integer a, integer b)`: Returns `true` if `a` and `b` are in the same category and `false` otherwise. Also, if either `a` or `b` is not a valid number (i.e. it's greater than or equal to `n`or less than `0`), it returns `false`.

Return *the number of unique categories.*

 

**Example 1:**

```

Input: n = 6, categoryHandler = [1,1,2,2,3,3]
Output: 3
Explanation: There are 6 elements in this example. The first two elements belong to category 1, the second two belong to category 2, and the last two elements belong to category 3. So there are 3 unique categories.

```

**Example 2:**

```

Input: n = 5, categoryHandler = [1,2,3,4,5]
Output: 5
Explanation: There are 5 elements in this example. Each element belongs to a unique category. So there are 5 unique categories.

```

**Example 3:**

```

Input: n = 3, categoryHandler = [1,1,1]
Output: 1
Explanation: There are 3 elements in this example. All of them belong to one category. So there is only 1 unique category.

```

 

**Constraints:**

	- `1 <= n <= 100`

---

**Links:** [Submissions](https://leetcode.com/problems/number-of-unique-categories/) | [Solutions](https://leetcode.com/problems/number-of-unique-categories/)
