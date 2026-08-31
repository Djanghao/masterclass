# [2791. Count Paths That Can Form a Palindrome in a Tree](https://leetcode.com/problems/count-paths-that-can-form-a-palindrome-in-a-tree/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 431 | 15 |

**Tags:** [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation), [`tree`](https://leetcode.com/tag/tree), [`depth-first-search`](https://leetcode.com/tag/depth-first-search), [`bitmask`](https://leetcode.com/tag/bitmask)

**Companies:** `weride`, `uber`, `thoughtspot`, `tiktok`

## Description

You are given a **tree** (i.e. a connected, undirected graph that has no cycles) **rooted** at node `0` consisting of `n` nodes numbered from `0` to `n - 1`. The tree is represented by a **0-indexed** array `parent` of size `n`, where `parent[i]` is the parent of node `i`. Since node `0` is the root, `parent[0] == -1`.

You are also given a string `s` of length `n`, where `s[i]` is the character assigned to the edge between `i` and `parent[i]`. `s[0]` can be ignored.

Return *the number of pairs of nodes *`(u, v)`* such that *`u = 1`

	- `parent[0] == -1`

	- `parent` represents a valid tree.

	- `s` consists of only lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/count-paths-that-can-form-a-palindrome-in-a-tree/) | [Solutions](https://leetcode.com/problems/count-paths-that-can-form-a-palindrome-in-a-tree/)
