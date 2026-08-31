# [777. Swap Adjacent in LR String](https://leetcode.com/problems/swap-adjacent-in-lr-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1319 | 950 |

**Tags:** [`two-pointers`](https://leetcode.com/tag/two-pointers), [`string`](https://leetcode.com/tag/string)

**Companies:** `google`

## Description

In a string composed of `'L'`, `'R'`, and `'X'` characters, like `"RXXLRXRXL"`, a move consists of either replacing one occurrence of `"XL"` with `"LX"`, or replacing one occurrence of `"RX"` with `"XR"`. Given the starting string `start` and the ending string `result`, return `True` if and only if there exists a sequence of moves to transform `start` to `result`.

 

**Example 1:**

```

Input: start = &quot;RXXLRXRXL&quot;, result = &quot;XRLXXRRLX&quot;
Output: true
Explanation: We can transform start to result following these steps:
RXXLRXRXL -&gt;
XRXLRXRXL -&gt;
XRLXRXRXL -&gt;
XRLXXRRXL -&gt;
XRLXXRRLX

```

**Example 2:**

```

Input: start = &quot;X&quot;, result = &quot;L&quot;
Output: false

```

 

**Constraints:**

	- `1 <= start.length <= 10^4`

	- `start.length == result.length`

	- Both `start` and `result` will only consist of characters in `'L'`, `'R'`, and `'X'`.

---

**Links:** [Submissions](https://leetcode.com/problems/swap-adjacent-in-lr-string/) | [Solutions](https://leetcode.com/problems/swap-adjacent-in-lr-string/)
