# [1347. Minimum Number of Steps to Make Two Strings Anagram](https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 2806 | 121 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`counting`](https://leetcode.com/tag/counting)

**Companies:** `bloomberg`, `jpmorgan`, `microsoft`, `oracle`, `doordash`, `amazon`, `ixl`, `adobe`, `apple`, `google`, `twitter`

## Description

You are given two strings of the same length `s` and `t`. In one step you can choose **any character** of `t` and replace it with **another character**.

Return *the minimum number of steps* to make `t` an anagram of `s`.

An **Anagram** of a string is a string that contains the same characters with a different (or the same) ordering.

 

**Example 1:**

```

Input: s = &quot;bab&quot;, t = &quot;aba&quot;
Output: 1
Explanation: Replace the first &#39;a&#39; in t with b, t = &quot;bba&quot; which is anagram of s.

```

**Example 2:**

```

Input: s = &quot;leetcode&quot;, t = &quot;practice&quot;
Output: 5
Explanation: Replace &#39;p&#39;, &#39;r&#39;, &#39;a&#39;, &#39;i&#39; and &#39;c&#39; from t with proper characters to make t anagram of s.

```

**Example 3:**

```

Input: s = &quot;anagram&quot;, t = &quot;mangaar&quot;
Output: 0
Explanation: &quot;anagram&quot; and &quot;mangaar&quot; are anagrams. 

```

 

**Constraints:**

	- `1 <= s.length <= 5 * 10^4`

	- `s.length == t.length`

	- `s` and `t` consist of lowercase English letters only.

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/) | [Solutions](https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/)
