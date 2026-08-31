# [886. Possible Bipartition](https://leetcode.com/problems/possible-bipartition/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 4879 | 118 |

**Tags:** [`depth-first-search`](https://leetcode.com/tag/depth-first-search), [`breadth-first-search`](https://leetcode.com/tag/breadth-first-search), [`union-find`](https://leetcode.com/tag/union-find), [`graph`](https://leetcode.com/tag/graph)

**Companies:** `amazon`, `tiktok`, `linkedin`, `facebook`, `meesho`, `uber`, `google`, `pinterest`, `microsoft`

## Description

We want to split a group of `n` people (labeled from `1` to `n`) into two groups of **any size**. Each person may dislike some other people, and they should not go into the same group.

Given the integer `n` and the array `dislikes` where `dislikes[i] = [a_i, b_i]` indicates that the person labeled `a_i` does not like the person labeled `b_i`, return `true` *if it is possible to split everyone into two groups in this way*.

 

**Example 1:**

```

Input: n = 4, dislikes = [[1,2],[1,3],[2,4]]
Output: true
Explanation: The first group has [1,4], and the second group has [2,3].

```

**Example 2:**

```

Input: n = 3, dislikes = [[1,2],[1,3],[2,3]]
Output: false
Explanation: We need at least 3 groups to divide them. We cannot put them in two groups.

```

 

**Constraints:**

	- `1 <= n <= 2000`

	- `0 <= dislikes.length <= 10^4`

	- `dislikes[i].length == 2`

	- `1 <= a_i < b_i <= n`

	- All the pairs of `dislikes` are **unique**.

---

**Links:** [Submissions](https://leetcode.com/problems/possible-bipartition/) | [Solutions](https://leetcode.com/problems/possible-bipartition/)
