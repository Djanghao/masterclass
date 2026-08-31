# [1395. Count Number of Teams](https://leetcode.com/problems/count-number-of-teams/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 3435 | 235 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`binary-indexed-tree`](https://leetcode.com/tag/binary-indexed-tree), [`segment-tree`](https://leetcode.com/tag/segment-tree)

**Companies:** `goldman-sachs`, `amazon`

## Description

There are `n` soldiers standing in a line. Each soldier is assigned a **unique** `rating` value.

You have to form a team of 3 soldiers amongst them under the following rules:

	- Choose 3 soldiers with index (`i`, `j`, `k`) with rating (`rating[i]`, `rating[j]`, `rating[k]`).

	- A team is valid if: (`rating[i]  rating[j] > rating[k]`) where (`0 <= i < j < k < n`).

Return the number of teams you can form given the conditions. (soldiers can be part of multiple teams).

 

**Example 1:**

```

Input: rating = [2,5,3,4,1]
Output: 3
Explanation: We can form three teams given the conditions. (2,3,4), (5,4,1), (5,3,1). 

```

**Example 2:**

```

Input: rating = [2,1,3]
Output: 0
Explanation: We can&#39;t form any team given the conditions.

```

**Example 3:**

```

Input: rating = [1,2,3,4]
Output: 4

```

 

**Constraints:**

	- `n == rating.length`

	- `3 <= n <= 1000`

	- `1 <= rating[i] <= 10^5`

	- All the integers in `rating` are **unique**.

---

**Links:** [Submissions](https://leetcode.com/problems/count-number-of-teams/) | [Solutions](https://leetcode.com/problems/count-number-of-teams/)
