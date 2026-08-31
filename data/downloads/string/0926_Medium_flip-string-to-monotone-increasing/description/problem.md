# [926. Flip String to Monotone Increasing](https://leetcode.com/problems/flip-string-to-monotone-increasing/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 4548 | 183 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)

**Companies:** `amazon`, `expedia`, `facebook`, `tiktok`, `ibm`, `google`

## Description

A binary string is monotone increasing if it consists of some number of `0`'s (possibly none), followed by some number of `1`'s (also possibly none).

You are given a binary string `s`. You can flip `s[i]` changing it from `0` to `1` or from `1` to `0`.

Return *the minimum number of flips to make *`s`* monotone increasing*.

 

**Example 1:**

```

Input: s = &quot;00110&quot;
Output: 1
Explanation: We flip the last digit to get 00111.

```

**Example 2:**

```

Input: s = &quot;010110&quot;
Output: 2
Explanation: We flip to get 011111, or alternatively 000111.

```

**Example 3:**

```

Input: s = &quot;00011000&quot;
Output: 2
Explanation: We flip to get 00000000.

```

 

**Constraints:**

	- `1 <= s.length <= 10^5`

	- `s[i]` is either `'0'` or `'1'`.

---

**Links:** [Submissions](https://leetcode.com/problems/flip-string-to-monotone-increasing/) | [Solutions](https://leetcode.com/problems/flip-string-to-monotone-increasing/)
