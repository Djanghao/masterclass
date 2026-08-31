# [1738. Find Kth Largest XOR Coordinate Value](https://leetcode.com/problems/find-kth-largest-xor-coordinate-value/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 534 | 84 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`divide-and-conquer`](https://leetcode.com/tag/divide-and-conquer), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation), [`sorting`](https://leetcode.com/tag/sorting), [`heap-priority-queue`](https://leetcode.com/tag/heap-priority-queue), [`matrix`](https://leetcode.com/tag/matrix), [`prefix-sum`](https://leetcode.com/tag/prefix-sum), [`quickselect`](https://leetcode.com/tag/quickselect)

**Companies:** `google`

## Description

You are given a 2D `matrix` of size `m x n`, consisting of non-negative integers. You are also given an integer `k`.

The **value** of coordinate `(a, b)` of the matrix is the XOR of all `matrix[i][j]` where `0 <= i <= a < m` and `0 <= j <= b < n` **(0-indexed)**.

Find the `k^th` largest value **(1-indexed)** of all the coordinates of `matrix`.

 

**Example 1:**

```

Input: matrix = [[5,2],[1,6]], k = 1
Output: 7
Explanation: The value of coordinate (0,1) is 5 XOR 2 = 7, which is the largest value.

```

**Example 2:**

```

Input: matrix = [[5,2],[1,6]], k = 2
Output: 5
Explanation: The value of coordinate (0,0) is 5 = 5, which is the 2nd largest value.

```

**Example 3:**

```

Input: matrix = [[5,2],[1,6]], k = 3
Output: 4
Explanation: The value of coordinate (1,0) is 5 XOR 1 = 4, which is the 3rd largest value.
```

 

**Constraints:**

	- `m == matrix.length`

	- `n == matrix[i].length`

	- `1 <= m, n <= 1000`

	- `0 <= matrix[i][j] <= 10^6`

	- `1 <= k <= m * n`

---

**Links:** [Submissions](https://leetcode.com/problems/find-kth-largest-xor-coordinate-value/) | [Solutions](https://leetcode.com/problems/find-kth-largest-xor-coordinate-value/)
