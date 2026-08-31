# [1498. Number of Subsequences That Satisfy the Given Sum Condition](https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 4608 | 432 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`two-pointers`](https://leetcode.com/tag/two-pointers), [`binary-search`](https://leetcode.com/tag/binary-search), [`sorting`](https://leetcode.com/tag/sorting)

**Companies:** `google`, `amazon`, `facebook`, `turing`

## Description

You are given an array of integers `nums` and an integer `target`.

Return *the number of **non-empty** subsequences of *`nums`* such that the sum of the minimum and maximum element on it is less or equal to *`target`. Since the answer may be too large, return it **modulo** `10^9 + 7`.

 

**Example 1:**

```

Input: nums = [3,5,6,7], target = 9
Output: 4
Explanation: There are 4 subsequences that satisfy the condition.
[3] -&gt; Min value + max value &lt;= target (3 + 3 &lt;= 9)
[3,5] -&gt; (3 + 5 &lt;= 9)
[3,5,6] -&gt; (3 + 6 &lt;= 9)
[3,6] -&gt; (3 + 6 &lt;= 9)

```

**Example 2:**

```

Input: nums = [3,3,6,8], target = 10
Output: 6
Explanation: There are 6 subsequences that satisfy the condition. (nums can have repeated numbers).
[3] , [3] , [3,3], [3,6] , [3,6] , [3,3,6]

```

**Example 3:**

```

Input: nums = [2,3,3,4,6,7], target = 12
Output: 61
Explanation: There are 63 non-empty subsequences, two of them do not satisfy the condition ([6,7], [7]).
Number of valid subsequences (63 - 2 = 61).

```

 

**Constraints:**

	- `1 <= nums.length <= 10^5`

	- `1 <= nums[i] <= 10^6`

	- `1 <= target <= 10^6`

---

**Links:** [Submissions](https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/) | [Solutions](https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/)
