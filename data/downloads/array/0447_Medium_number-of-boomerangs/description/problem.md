# [447. Number of Boomerangs](https://leetcode.com/problems/number-of-boomerangs/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 887 | 1039 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`math`](https://leetcode.com/tag/math)

**Companies:** `google`

## Description

You are given `n` `points` in the plane that are all **distinct**, where `points[i] = [x_i, y_i]`. A **boomerang** is a tuple of points `(i, j, k)` such that the distance between `i` and `j` equals the distance between `i` and `k` **(the order of the tuple matters)**.

Return *the number of boomerangs*.

 

**Example 1:**

```

Input: points = [[0,0],[1,0],[2,0]]
Output: 2
Explanation: The two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]].

```

**Example 2:**

```

Input: points = [[1,1],[2,2],[3,3]]
Output: 2

```

**Example 3:**

```

Input: points = [[1,1]]
Output: 0

```

 

**Constraints:**

	- `n == points.length`

	- `1 <= n <= 500`

	- `points[i].length == 2`

	- `-10^4 <= x_i, y_i <= 10^4`

	- All the points are **unique**.

---

**Links:** [Submissions](https://leetcode.com/problems/number-of-boomerangs/) | [Solutions](https://leetcode.com/problems/number-of-boomerangs/)
