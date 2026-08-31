# [868. Binary Gap](https://leetcode.com/problems/binary-gap/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 687 | 672 |

**Tags:** [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation)

**Companies:** `twitter`, `ebay`

## Description

Given a positive integer `n`, find and return *the **longest distance** between any two **adjacent** *`1`*'s in the binary representation of *`n`*. If there are no two adjacent *`1`*'s, return *`0`*.*

Two `1`'s are **adjacent** if there are only `0`'s separating them (possibly no `0`'s). The distance between two `1`'s is the absolute difference between their bit positions. For example, the two `1`'s in `"1001"` have a distance of 3.

 

**Example 1:**

```

Input: n = 22
Output: 2
Explanation: 22 in binary is &quot;10110&quot;.
The first adjacent pair of 1&#39;s is &quot;10110&quot; with a distance of 2.
The second adjacent pair of 1&#39;s is &quot;10110&quot; with a distance of 1.
The answer is the largest of these two distances, which is 2.
Note that &quot;10110&quot; is not a valid pair since there is a 1 separating the two 1&#39;s underlined.

```

**Example 2:**

```

Input: n = 8
Output: 0
Explanation: 8 in binary is &quot;1000&quot;.
There are not any adjacent pairs of 1&#39;s in the binary representation of 8, so we return 0.

```

**Example 3:**

```

Input: n = 5
Output: 2
Explanation: 5 in binary is &quot;101&quot;.

```

 

**Constraints:**

	- `1 <= n <= 10^9`

---

**Links:** [Submissions](https://leetcode.com/problems/binary-gap/) | [Solutions](https://leetcode.com/problems/binary-gap/)
