# [402. Remove K Digits](https://leetcode.com/problems/remove-k-digits/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 10378 | 543 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`stack`](https://leetcode.com/tag/stack), [`greedy`](https://leetcode.com/tag/greedy), [`monotonic-stack`](https://leetcode.com/tag/monotonic-stack)

**Companies:** `google`, `amazon`, `microsoft`, `facebook`, `walmart-labs`, `bloomberg`, `phonepe`, `tiktok`, `coupang`, `snowflake`, `josh-technology`, `zopsmart`, `adobe`, `oracle`, `samsung`, `zeta-suite`, `huawei`, `snapchat`

## Description

Given string num representing a non-negative integer `num`, and an integer `k`, return *the smallest possible integer after removing* `k` *digits from* `num`.

 

**Example 1:**

```

Input: num = &quot;1432219&quot;, k = 3
Output: &quot;1219&quot;
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.

```

**Example 2:**

```

Input: num = &quot;10200&quot;, k = 1
Output: &quot;200&quot;
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.

```

**Example 3:**

```

Input: num = &quot;10&quot;, k = 2
Output: &quot;0&quot;
Explanation: Remove all the digits from the number and it is left with nothing which is 0.

```

 

**Constraints:**

	- `1 <= k <= num.length <= 10^5`

	- `num` consists of only digits.

	- `num` does not have any leading zeros except for the zero itself.

---

**Links:** [Submissions](https://leetcode.com/problems/remove-k-digits/) | [Solutions](https://leetcode.com/problems/remove-k-digits/)
