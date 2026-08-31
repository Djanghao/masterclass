# [438. Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 13016 | 367 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`sliding-window`](https://leetcode.com/tag/sliding-window)

**Companies:** `databricks`, `microsoft`, `yandex`, `amazon`, `snowflake`, `facebook`, `google`, `bloomberg`, `splunk`, `walmart-labs`, `bolt`, `apple`, `tiktok`, `turing`, `accenture`

## Description

Given two strings `s` and `p`, return an array of all the start indices of `p`'s anagrams in `s`. You may return the answer in **any order**.

 

**Example 1:**

```

Input: s = &quot;cbaebabacd&quot;, p = &quot;abc&quot;
Output: [0,6]
Explanation:
The substring with start index = 0 is &quot;cba&quot;, which is an anagram of &quot;abc&quot;.
The substring with start index = 6 is &quot;bac&quot;, which is an anagram of &quot;abc&quot;.

```

**Example 2:**

```

Input: s = &quot;abab&quot;, p = &quot;ab&quot;
Output: [0,1,2]
Explanation:
The substring with start index = 0 is &quot;ab&quot;, which is an anagram of &quot;ab&quot;.
The substring with start index = 1 is &quot;ba&quot;, which is an anagram of &quot;ab&quot;.
The substring with start index = 2 is &quot;ab&quot;, which is an anagram of &quot;ab&quot;.

```

 

**Constraints:**

	- `1 <= s.length, p.length <= 3 * 10^4`

	- `s` and `p` consist of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/find-all-anagrams-in-a-string/) | [Solutions](https://leetcode.com/problems/find-all-anagrams-in-a-string/)
