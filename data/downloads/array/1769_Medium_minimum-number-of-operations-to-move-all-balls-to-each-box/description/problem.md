# [1769. Minimum Number of Operations to Move All Balls to Each Box](https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 3088 | 136 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string), [`prefix-sum`](https://leetcode.com/tag/prefix-sum)

**Companies:** `google`, `amazon`, `facebook`, `tiktok`

## Description

You have `n` boxes. You are given a binary string `boxes` of length `n`, where `boxes[i]` is `'0'` if the `i^th` box is **empty**, and `'1'` if it contains **one** ball.

In one operation, you can move **one** ball from a box to an adjacent box. Box `i` is adjacent to box `j` if `abs(i - j) == 1`. Note that after doing so, there may be more than one ball in some boxes.

Return an array `answer` of size `n`, where `answer[i]` is the **minimum** number of operations needed to move all the balls to the `i^th` box.

Each `answer[i]` is calculated considering the **initial** state of the boxes.

 

**Example 1:**

```

Input: boxes = &quot;110&quot;
Output: [1,1,3]
Explanation: The answer for each box is as follows:
1) First box: you will have to move one ball from the second box to the first box in one operation.
2) Second box: you will have to move one ball from the first box to the second box in one operation.
3) Third box: you will have to move one ball from the first box to the third box in two operations, and move one ball from the second box to the third box in one operation.

```

**Example 2:**

```

Input: boxes = &quot;001011&quot;
Output: [11,8,5,4,3,4]
```

 

**Constraints:**

	- `n == boxes.length`

	- `1 <= n <= 2000`

	- `boxes[i]` is either `'0'` or `'1'`.

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/) | [Solutions](https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/)
