# [2840. Check if Strings Can be Made Equal With Operations II](https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-ii/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 271 | 4 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`sorting`](https://leetcode.com/tag/sorting)

**Companies:** `citrix`

## Description

You are given two strings `s1` and `s2`, both of length `n`, consisting of **lowercase** English letters.

You can apply the following operation on **any** of the two strings **any** number of times:

	- Choose any two indices `i` and `j` such that `i < j` and the difference `j - i` is **even**, then **swap** the two characters at those indices in the string.

Return `true`* if you can make the strings *`s1`* and *`s2`* equal, and *`false`* otherwise*.

 

**Example 1:**

```

Input: s1 = &quot;abcdba&quot;, s2 = &quot;cabdab&quot;
Output: true
Explanation: We can apply the following operations on s1:
- Choose the indices i = 0, j = 2. The resulting string is s1 = &quot;cbadba&quot;.
- Choose the indices i = 2, j = 4. The resulting string is s1 = &quot;cbbdaa&quot;.
- Choose the indices i = 1, j = 5. The resulting string is s1 = &quot;cabdab&quot; = s2.

```

**Example 2:**

```

Input: s1 = &quot;abe&quot;, s2 = &quot;bea&quot;
Output: false
Explanation: It is not possible to make the two strings equal.

```

 

**Constraints:**

	- `n == s1.length == s2.length`

	- `1 <= n <= 10^5`

	- `s1` and `s2` consist only of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-ii/) | [Solutions](https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-ii/)
