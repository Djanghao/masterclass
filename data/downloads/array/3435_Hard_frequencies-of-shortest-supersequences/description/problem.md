# [3435. Frequencies of Shortest Supersequences](https://leetcode.com/problems/frequencies-of-shortest-supersequences/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 27 | 8 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation), [`graph`](https://leetcode.com/tag/graph), [`topological-sort`](https://leetcode.com/tag/topological-sort), [`enumeration`](https://leetcode.com/tag/enumeration)


## Description

You are given an array of strings `words`. Find all **shortest common supersequences (SCS)** of `words` that are not permutations of each other.

A **shortest common supersequence** is a string of **minimum** length that contains each string in `words` as a subsequence.

Return a 2D array of integers `freqs` that represent all the SCSs. Each `freqs[i]` is an array of size 26, representing the frequency of each letter in the lowercase English alphabet for a single SCS. You may return the frequency arrays in any order.

 

**Example 1:**

**Input:** words = ["ab","ba"]

**Output: **[[1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]

**Explanation:**

The two SCSs are `"aba"` and `"bab"`. The output is the letter frequencies for each one.

**Example 2:**

**Input:** words = ["aa","ac"]

**Output: **[[2,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]

**Explanation:**

The two SCSs are `"aac"` and `"aca"`. Since they are permutations of each other, keep only `"aac"`.

**Example 3:**

**Input:** words = ["aa","bb","cc"]

**Output: **[[2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]

**Explanation:**

`"aabbcc"` and all its permutations are SCSs.

 

**Constraints:**

	- `1 <= words.length <= 256`

	- `words[i].length == 2`

	- All strings in `words` will altogether be composed of no more than 16 unique lowercase letters.

	- All strings in `words` are unique.

---

**Links:** [Submissions](https://leetcode.com/problems/frequencies-of-shortest-supersequences/) | [Solutions](https://leetcode.com/problems/frequencies-of-shortest-supersequences/)
