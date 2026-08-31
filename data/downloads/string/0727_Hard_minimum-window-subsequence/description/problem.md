# [727. Minimum Window Subsequence](https://leetcode.com/problems/minimum-window-subsequence/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 1480 | 95 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`sliding-window`](https://leetcode.com/tag/sliding-window)

**Companies:** `facebook`, `microsoft`, `google`, `ebay`

## Description

Given strings `s1` and `s2`, return *the minimum contiguous substring part of *`s1`*, so that *`s2`* is a subsequence of the part*.

If there is no such window in `s1` that covers all characters in `s2`, return the empty string `""`. If there are multiple such minimum-length windows, return the one with the **left-most starting index**.

 

**Example 1:**

```

Input: s1 = &quot;abcdebdde&quot;, s2 = &quot;bde&quot;
Output: &quot;bcde&quot;
Explanation: 
&quot;bcde&quot; is the answer because it occurs before &quot;bdde&quot; which has the same length.
&quot;deb&quot; is not a smaller window because the elements of s2 in the window must occur in order.

```

**Example 2:**

```

Input: s1 = &quot;jmeqksfrsdcmsiwvaovztaqenprpvnbstl&quot;, s2 = &quot;u&quot;
Output: &quot;&quot;

```

 

**Constraints:**

	- `1 <= s1.length <= 2 * 10^4`

	- `1 <= s2.length <= 100`

	- `s1` and `s2` consist of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-window-subsequence/) | [Solutions](https://leetcode.com/problems/minimum-window-subsequence/)
