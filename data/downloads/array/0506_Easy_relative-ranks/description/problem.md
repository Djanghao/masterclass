# [506. Relative Ranks](https://leetcode.com/problems/relative-ranks/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 2127 | 149 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`sorting`](https://leetcode.com/tag/sorting), [`heap-priority-queue`](https://leetcode.com/tag/heap-priority-queue)

**Companies:** `amazon`, `google`

## Description

You are given an integer array `score` of size `n`, where `score[i]` is the score of the `i^th` athlete in a competition. All the scores are guaranteed to be **unique**.

The athletes are **placed** based on their scores, where the `1^st` place athlete has the highest score, the `2^nd` place athlete has the `2^nd` highest score, and so on. The placement of each athlete determines their rank:

	- The `1^st` place athlete's rank is `"Gold Medal"`.

	- The `2^nd` place athlete's rank is `"Silver Medal"`.

	- The `3^rd` place athlete's rank is `"Bronze Medal"`.

	- For the `4^th` place to the `n^th` place athlete, their rank is their placement number (i.e., the `x^th` place athlete's rank is `"x"`).

Return an array `answer` of size `n` where `answer[i]` is the **rank** of the `i^th` athlete.

 

**Example 1:**

```

Input: score = [5,4,3,2,1]
Output: [&quot;Gold Medal&quot;,&quot;Silver Medal&quot;,&quot;Bronze Medal&quot;,&quot;4&quot;,&quot;5&quot;]
Explanation: The placements are [1st, 2nd, 3rd, 4th, 5th].
```

**Example 2:**

```

Input: score = [10,3,8,9,4]
Output: [&quot;Gold Medal&quot;,&quot;5&quot;,&quot;Bronze Medal&quot;,&quot;Silver Medal&quot;,&quot;4&quot;]
Explanation: The placements are [1st, 5th, 3rd, 2nd, 4th].


```

 

**Constraints:**

	- `n == score.length`

	- `1 <= n <= 10^4`

	- `0 <= score[i] <= 10^6`

	- All the values in `score` are **unique**.

---

**Links:** [Submissions](https://leetcode.com/problems/relative-ranks/) | [Solutions](https://leetcode.com/problems/relative-ranks/)
