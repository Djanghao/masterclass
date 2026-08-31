# [1191. K-Concatenation Maximum Sum](https://leetcode.com/problems/k-concatenation-maximum-sum/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1497 | 129 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)


## Description

Given an integer array `arr` and an integer `k`, modify the array by repeating it `k` times.

For example, if `arr = [1, 2]` and `k = 3 `then the modified array will be `[1, 2, 1, 2, 1, 2]`.

Return the maximum sub-array sum in the modified array. Note that the length of the sub-array can be `0` and its sum in that case is `0`.

As the answer can be very large, return the answer **modulo** `10^9 + 7`.

 

**Example 1:**

```

Input: arr = [1,2], k = 3
Output: 9

```

**Example 2:**

```

Input: arr = [1,-2,1], k = 5
Output: 2

```

**Example 3:**

```

Input: arr = [-1,-2], k = 7
Output: 0

```

 

**Constraints:**

	- `1 <= arr.length <= 10^5`

	- `1 <= k <= 10^5`

	- `-10^4 <= arr[i] <= 10^4`

---

**Links:** [Submissions](https://leetcode.com/problems/k-concatenation-maximum-sum/) | [Solutions](https://leetcode.com/problems/k-concatenation-maximum-sum/)
