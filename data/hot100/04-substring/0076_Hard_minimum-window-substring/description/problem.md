# [76. Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 19674 | 833 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`sliding-window`](https://leetcode.com/tag/sliding-window)

**Companies:** `facebook`, `amazon`, `google`, `lyft`, `bloomberg`, `linkedin`, `adobe`, `tiktok`, `zeta`, `snowflake`, `microsoft`, `yandex`, `uber`, `snapchat`, `salesforce`, `infosys`, `ibm`, `meesho`, `airbnb`, `sofi`, `zopsmart`, `apple`, `ebay`, `nagarro`, `swiggy`, `makemytrip`, `thoughtspot`

## Description

Given two strings `s` and `t` of lengths `m` and `n` respectively, return *the **minimum window*** ***substring**** of *`s`* such that every character in *`t`* (**including duplicates**) is included in the window*. If there is no such substring, return *the empty string *`""`.

The testcases will be generated such that the answer is **unique**.

 

**Example 1:**

```

Input: s = &quot;ADOBECODEBANC&quot;, t = &quot;ABC&quot;
Output: &quot;BANC&quot;
Explanation: The minimum window substring &quot;BANC&quot; includes &#39;A&#39;, &#39;B&#39;, and &#39;C&#39; from string t.

```

**Example 2:**

```

Input: s = &quot;a&quot;, t = &quot;a&quot;
Output: &quot;a&quot;
Explanation: The entire string s is the minimum window.

```

**Example 3:**

```

Input: s = &quot;a&quot;, t = &quot;aa&quot;
Output: &quot;&quot;
Explanation: Both &#39;a&#39;s from t must be included in the window.
Since the largest window of s only has one &#39;a&#39;, return empty string.

```

 

**Constraints:**

	- `m == s.length`

	- `n == t.length`

	- `1 <= m, n <= 10^5`

	- `s` and `t` consist of uppercase and lowercase English letters.

 

**Follow up:** Could you find an algorithm that runs in `O(m + n)` time?

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-window-substring/) | [Solutions](https://leetcode.com/problems/minimum-window-substring/)
