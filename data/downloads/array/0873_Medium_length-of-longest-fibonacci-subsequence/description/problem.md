# [873. Length of Longest Fibonacci Subsequence](https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 2685 | 108 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)

**Companies:** `amazon`, `google`, `bloomberg`, `goldman-sachs`, `microsoft`, `baidu`

## Description

A sequence `x_1, x_2, ..., x_n` is *Fibonacci-like* if:

	- `n >= 3`

	- `x_i + x_i+1 == x_i+2` for all `i + 2 strictly increasing array `arr` of positive integers forming a sequence, return *the **length** of the longest Fibonacci-like subsequence of* `arr`. If one does not exist, return `0`.

A **subsequence** is derived from another sequence `arr` by deleting any number of elements (including none) from `arr`, without changing the order of the remaining elements. For example, `[3, 5, 8]` is a subsequence of `[3, 4, 5, 6, 7, 8]`.

 

**Example 1:**

```

Input: arr = [1,2,3,4,5,6,7,8]
Output: 5
Explanation: The longest subsequence that is fibonacci-like: [1,2,3,5,8].
```

**Example 2:**

```

Input: arr = [1,3,7,11,12,14,18]
Output: 3
Explanation: The longest subsequence that is fibonacci-like: [1,11,12], [3,11,14] or [7,11,18].
```

 

**Constraints:**

	- `3 <= arr.length <= 1000`

	- `1 <= arr[i] < arr[i + 1] <= 10^9`

---

**Links:** [Submissions](https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/) | [Solutions](https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/)
