# [484. Find Permutation](https://leetcode.com/problems/find-permutation/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 726 | 151 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string), [`stack`](https://leetcode.com/tag/stack), [`greedy`](https://leetcode.com/tag/greedy)

**Companies:** `google`

## Description

A permutation `perm` of `n` integers of all the integers in the range `[1, n]` can be represented as a string `s` of length `n - 1` where:

	- `s[i] == 'I'` if `perm[i]  perm[i + 1]`.

Given a string `s`, reconstruct the lexicographically smallest permutation `perm` and return it.

 

**Example 1:**

```

Input: s = &quot;I&quot;
Output: [1,2]
Explanation: [1,2] is the only legal permutation that can represented by s, where the number 1 and 2 construct an increasing relationship.

```

**Example 2:**

```

Input: s = &quot;DI&quot;
Output: [2,1,3]
Explanation: Both [2,1,3] and [3,1,2] can be represented as &quot;DI&quot;, but since we want to find the smallest lexicographical permutation, you should return [2,1,3]

```

 

**Constraints:**

	- `1 <= s.length <= 10^5`

	- `s[i]` is either `'I'` or `'D'`.

---

**Links:** [Submissions](https://leetcode.com/problems/find-permutation/) | [Solutions](https://leetcode.com/problems/find-permutation/)
