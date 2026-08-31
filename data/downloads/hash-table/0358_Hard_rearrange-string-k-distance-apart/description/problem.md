# [358. Rearrange String k Distance Apart](https://leetcode.com/problems/rearrange-string-k-distance-apart/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 987 | 39 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`greedy`](https://leetcode.com/tag/greedy), [`sorting`](https://leetcode.com/tag/sorting), [`heap-priority-queue`](https://leetcode.com/tag/heap-priority-queue), [`counting`](https://leetcode.com/tag/counting)

**Companies:** `tiktok`, `amazon`, `google`

## Description

Given a string `s` and an integer `k`, rearrange `s` such that the same characters are **at least** distance `k` from each other. If it is not possible to rearrange the string, return an empty string `""`.

 

**Example 1:**

```

Input: s = &quot;aabbcc&quot;, k = 3
Output: &quot;abcabc&quot;
Explanation: The same letters are at least a distance of 3 from each other.

```

**Example 2:**

```

Input: s = &quot;aaabc&quot;, k = 3
Output: &quot;&quot;
Explanation: It is not possible to rearrange the string.

```

**Example 3:**

```

Input: s = &quot;aaadbbcc&quot;, k = 2
Output: &quot;abacabcd&quot;
Explanation: The same letters are at least a distance of 2 from each other.

```

 

**Constraints:**

	- `1 <= s.length <= 3 * 10^5`

	- `s` consists of only lowercase English letters.

	- `0 <= k <= s.length`

---

**Links:** [Submissions](https://leetcode.com/problems/rearrange-string-k-distance-apart/) | [Solutions](https://leetcode.com/problems/rearrange-string-k-distance-apart/)
