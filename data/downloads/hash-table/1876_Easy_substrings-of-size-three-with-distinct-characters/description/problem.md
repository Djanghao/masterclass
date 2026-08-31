# [1876. Substrings of Size Three with Distinct Characters](https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 1655 | 53 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`sliding-window`](https://leetcode.com/tag/sliding-window), [`counting`](https://leetcode.com/tag/counting)

**Companies:** `visa`, `quora`

## Description

A string is **good** if there are no repeated characters.

Given a string `s`​​​​​, return *the number of **good substrings** of length **three **in *`s`​​​​​​.

Note that if there are multiple occurrences of the same substring, every occurrence should be counted.

A **substring** is a contiguous sequence of characters in a string.

 

**Example 1:**

```

Input: s = &quot;xyzzaz&quot;
Output: 1
Explanation: There are 4 substrings of size 3: &quot;xyz&quot;, &quot;yzz&quot;, &quot;zza&quot;, and &quot;zaz&quot;. 
The only good substring of length 3 is &quot;xyz&quot;.

```

**Example 2:**

```

Input: s = &quot;aababcabc&quot;
Output: 4
Explanation: There are 7 substrings of size 3: &quot;aab&quot;, &quot;aba&quot;, &quot;bab&quot;, &quot;abc&quot;, &quot;bca&quot;, &quot;cab&quot;, and &quot;abc&quot;.
The good substrings are &quot;abc&quot;, &quot;bca&quot;, &quot;cab&quot;, and &quot;abc&quot;.

```

 

**Constraints:**

	- `1 <= s.length <= 100`

	- `s`​​​​​​ consists of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/) | [Solutions](https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/)
