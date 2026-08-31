# [854. K-Similar Strings](https://leetcode.com/problems/k-similar-strings/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 1171 | 63 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`breadth-first-search`](https://leetcode.com/tag/breadth-first-search)

**Companies:** `google`

## Description

Strings `s1` and `s2` are `k`**-similar** (for some non-negative integer `k`) if we can swap the positions of two letters in `s1` exactly `k` times so that the resulting string equals `s2`.

Given two anagrams `s1` and `s2`, return the smallest `k` for which `s1` and `s2` are `k`**-similar**.

 

**Example 1:**

```

Input: s1 = &quot;ab&quot;, s2 = &quot;ba&quot;
Output: 1
Explanation: The two string are 1-similar because we can use one swap to change s1 to s2: &quot;ab&quot; --&gt; &quot;ba&quot;.

```

**Example 2:**

```

Input: s1 = &quot;abc&quot;, s2 = &quot;bca&quot;
Output: 2
Explanation: The two strings are 2-similar because we can use two swaps to change s1 to s2: &quot;abc&quot; --&gt; &quot;bac&quot; --&gt; &quot;bca&quot;.

```

 

**Constraints:**

	- `1 <= s1.length <= 20`

	- `s2.length == s1.length`

	- `s1` and `s2` contain only lowercase letters from the set `{'a', 'b', 'c', 'd', 'e', 'f'}`.

	- `s2` is an anagram of `s1`.

---

**Links:** [Submissions](https://leetcode.com/problems/k-similar-strings/) | [Solutions](https://leetcode.com/problems/k-similar-strings/)
