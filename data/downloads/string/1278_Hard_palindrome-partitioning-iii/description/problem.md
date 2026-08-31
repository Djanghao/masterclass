# [1278. Palindrome Partitioning III](https://leetcode.com/problems/palindrome-partitioning-iii/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 1199 | 19 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)


## Description

You are given a string `s` containing lowercase letters and an integer `k`. You need to :

	- First, change some characters of `s` to other lowercase English letters.

	- Then divide `s` into `k` non-empty disjoint substrings such that each substring is a palindrome.

Return *the minimal number of characters that you need to change to divide the string*.

 

**Example 1:**

```

Input: s = &quot;abc&quot;, k = 2
Output: 1
Explanation:&nbsp;You can split the string into &quot;ab&quot; and &quot;c&quot;, and change 1 character in &quot;ab&quot; to make it palindrome.

```

**Example 2:**

```

Input: s = &quot;aabbc&quot;, k = 3
Output: 0
Explanation:&nbsp;You can split the string into &quot;aa&quot;, &quot;bb&quot; and &quot;c&quot;, all of them are palindrome.
```

**Example 3:**

```

Input: s = &quot;leetcode&quot;, k = 8
Output: 0

```

 

**Constraints:**

	- `1 <= k <= s.length <= 100`.

	- `s` only contains lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/palindrome-partitioning-iii/) | [Solutions](https://leetcode.com/problems/palindrome-partitioning-iii/)
