# [354. Russian Doll Envelopes](https://leetcode.com/problems/russian-doll-envelopes/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 6401 | 166 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`binary-search`](https://leetcode.com/tag/binary-search), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`sorting`](https://leetcode.com/tag/sorting)

**Companies:** `google`, `amazon`, `medianet`, `goldman-sachs`, `atlassian`, `microsoft`, `intuit`

## Description

You are given a 2D array of integers `envelopes` where `envelopes[i] = [w_i, h_i]` represents the width and the height of an envelope.

One envelope can fit into another if and only if both the width and height of one envelope are greater than the other envelope's width and height.

Return *the maximum number of envelopes you can Russian doll (i.e., put one inside the other)*.

**Note:** You cannot rotate an envelope.

 

**Example 1:**

```

Input: envelopes = [[5,4],[6,4],[6,7],[2,3]]
Output: 3
Explanation: The maximum number of envelopes you can Russian doll is 3 ([2,3] =&gt; [5,4] =&gt; [6,7]).

```

**Example 2:**

```

Input: envelopes = [[1,1],[1,1],[1,1]]
Output: 1

```

 

**Constraints:**

	- `1 <= envelopes.length <= 10^5`

	- `envelopes[i].length == 2`

	- `1 <= w_i, h_i <= 10^5`

---

**Links:** [Submissions](https://leetcode.com/problems/russian-doll-envelopes/) | [Solutions](https://leetcode.com/problems/russian-doll-envelopes/)
