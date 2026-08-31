# [482. License Key Formatting](https://leetcode.com/problems/license-key-formatting/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 1177 | 1453 |

**Tags:** [`string`](https://leetcode.com/tag/string)

**Companies:** `google`

## Description

You are given a license key represented as a string `s` that consists of only alphanumeric characters and dashes. The string is separated into `n + 1` groups by `n` dashes. You are also given an integer `k`.

We want to reformat the string `s` such that each group contains exactly `k` characters, except for the first group, which could be shorter than `k` but still must contain at least one character. Furthermore, there must be a dash inserted between two groups, and you should convert all lowercase letters to uppercase.

Return *the reformatted license key*.

 

**Example 1:**

```

Input: s = &quot;5F3Z-2e-9-w&quot;, k = 4
Output: &quot;5F3Z-2E9W&quot;
Explanation: The string s has been split into two parts, each part has 4 characters.
Note that the two extra dashes are not needed and can be removed.

```

**Example 2:**

```

Input: s = &quot;2-5g-3-J&quot;, k = 2
Output: &quot;2-5G-3J&quot;
Explanation: The string s has been split into three parts, each part has 2 characters except the first part as it could be shorter as mentioned above.

```

 

**Constraints:**

	- `1 <= s.length <= 10^5`

	- `s` consists of English letters, digits, and dashes `'-'`.

	- `1 <= k <= 10^4`

---

**Links:** [Submissions](https://leetcode.com/problems/license-key-formatting/) | [Solutions](https://leetcode.com/problems/license-key-formatting/)
