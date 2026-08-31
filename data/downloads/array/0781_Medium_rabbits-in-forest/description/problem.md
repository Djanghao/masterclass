# [781. Rabbits in Forest](https://leetcode.com/problems/rabbits-in-forest/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 2107 | 986 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`math`](https://leetcode.com/tag/math), [`greedy`](https://leetcode.com/tag/greedy)

**Companies:** `facebook`, `amazon`, `google`, `apple`, `wish`

## Description

There is a forest with an unknown number of rabbits. We asked n rabbits **"How many rabbits have the same color as you?"** and collected the answers in an integer array `answers` where `answers[i]` is the answer of the `i^th` rabbit.

Given the array `answers`, return *the minimum number of rabbits that could be in the forest*.

 

**Example 1:**

```

Input: answers = [1,1,2]
Output: 5
Explanation:
The two rabbits that answered &quot;1&quot; could both be the same color, say red.
The rabbit that answered &quot;2&quot; can&#39;t be red or the answers would be inconsistent.
Say the rabbit that answered &quot;2&quot; was blue.
Then there should be 2 other blue rabbits in the forest that didn&#39;t answer into the array.
The smallest possible number of rabbits in the forest is therefore 5: 3 that answered plus 2 that didn&#39;t.

```

**Example 2:**

```

Input: answers = [10,10,10]
Output: 11

```

 

**Constraints:**

	- `1 <= answers.length <= 1000`

	- `0 <= answers[i] < 1000`

---

**Links:** [Submissions](https://leetcode.com/problems/rabbits-in-forest/) | [Solutions](https://leetcode.com/problems/rabbits-in-forest/)
