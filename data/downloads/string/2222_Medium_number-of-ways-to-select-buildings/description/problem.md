# [2222. Number of Ways to Select Buildings](https://leetcode.com/problems/number-of-ways-to-select-buildings/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1052 | 54 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`prefix-sum`](https://leetcode.com/tag/prefix-sum)

**Companies:** `de-shaw`, `amazon`, `dream11`

## Description

You are given a **0-indexed** binary string `s` which represents the types of buildings along a street where:

	- `s[i] = '0'` denotes that the `i^th` building is an office and

	- `s[i] = '1'` denotes that the `i^th` building is a restaurant.

As a city official, you would like to **select** 3 buildings for random inspection. However, to ensure variety, **no two consecutive** buildings out of the **selected** buildings can be of the same type.

	- For example, given `s = "001101"`, we cannot select the `1^st`, `3^rd`, and `5^th` buildings as that would form `"011"` which is **not** allowed due to having two consecutive buildings of the same type.

Return *the number of valid ways to select 3 buildings.*

 

**Example 1:**

```

Input: s = &quot;001101&quot;
Output: 6
Explanation: 
The following sets of indices selected are valid:
- [0,2,4] from &quot;001101&quot; forms &quot;010&quot;
- [0,3,4] from &quot;001101&quot; forms &quot;010&quot;
- [1,2,4] from &quot;001101&quot; forms &quot;010&quot;
- [1,3,4] from &quot;001101&quot; forms &quot;010&quot;
- [2,4,5] from &quot;001101&quot; forms &quot;101&quot;
- [3,4,5] from &quot;001101&quot; forms &quot;101&quot;
No other selection is valid. Thus, there are 6 total ways.

```

**Example 2:**

```

Input: s = &quot;11100&quot;
Output: 0
Explanation: It can be shown that there are no valid selections.

```

 

**Constraints:**

	- `3 <= s.length <= 10^5`

	- `s[i]` is either `'0'` or `'1'`.

---

**Links:** [Submissions](https://leetcode.com/problems/number-of-ways-to-select-buildings/) | [Solutions](https://leetcode.com/problems/number-of-ways-to-select-buildings/)
