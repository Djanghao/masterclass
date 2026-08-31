# [2904. Shortest and Lexicographically Smallest Beautiful String](https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 202 | 11 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`sliding-window`](https://leetcode.com/tag/sliding-window)

**Companies:** `ibm`, `wells-fargo`

## Description

You are given a binary string `s` and a positive integer `k`.

A substring of `s` is **beautiful** if the number of `1`'s in it is exactly `k`.

Let `len` be the length of the **shortest** beautiful substring.

Return *the lexicographically **smallest** beautiful substring of string *`s`* with length equal to *`len`. If `s` doesn't contain a beautiful substring, return *an **empty** string*.

A string `a` is lexicographically **larger** than a string `b` (of the same length) if in the first position where `a` and `b` differ, `a` has a character strictly larger than the corresponding character in `b`.

	- For example, `"abcd"` is lexicographically larger than `"abcc"` because the first position they differ is at the fourth character, and `d` is greater than `c`.

 

**Example 1:**

```

Input: s = &quot;100011001&quot;, k = 3
Output: &quot;11001&quot;
Explanation: There are 7 beautiful substrings in this example:
1. The substring &quot;100011001&quot;.
2. The substring &quot;100011001&quot;.
3. The substring &quot;100011001&quot;.
4. The substring &quot;100011001&quot;.
5. The substring &quot;100011001&quot;.
6. The substring &quot;100011001&quot;.
7. The substring &quot;100011001&quot;.
The length of the shortest beautiful substring is 5.
The lexicographically smallest beautiful substring with length 5 is the substring &quot;11001&quot;.

```

**Example 2:**

```

Input: s = &quot;1011&quot;, k = 2
Output: &quot;11&quot;
Explanation: There are 3 beautiful substrings in this example:
1. The substring &quot;1011&quot;.
2. The substring &quot;1011&quot;.
3. The substring &quot;1011&quot;.
The length of the shortest beautiful substring is 2.
The lexicographically smallest beautiful substring with length 2 is the substring &quot;11&quot;.

```

**Example 3:**

```

Input: s = &quot;000&quot;, k = 1
Output: &quot;&quot;
Explanation: There are no beautiful substrings in this example.

```

 

**Constraints:**

	- `1 <= s.length <= 100`

	- `1 <= k <= s.length`

---

**Links:** [Submissions](https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string/) | [Solutions](https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string/)
