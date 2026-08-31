# [2283. Check if Number Has Equal Digit Count and Digit Value](https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 668 | 98 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`counting`](https://leetcode.com/tag/counting)

**Companies:** `google`, `jpmorgan`

## Description

You are given a **0-indexed** string `num` of length `n` consisting of digits.

Return `true` *if for **every** index *`i`* in the range *`0 <= i < n`*, the digit *`i`* occurs *`num[i]`* times in *`num`*, otherwise return *`false`.

 

**Example 1:**

```

Input: num = &quot;1210&quot;
Output: true
Explanation:
num[0] = &#39;1&#39;. The digit 0 occurs once in num.
num[1] = &#39;2&#39;. The digit 1 occurs twice in num.
num[2] = &#39;1&#39;. The digit 2 occurs once in num.
num[3] = &#39;0&#39;. The digit 3 occurs zero times in num.
The condition holds true for every index in &quot;1210&quot;, so return true.

```

**Example 2:**

```

Input: num = &quot;030&quot;
Output: false
Explanation:
num[0] = &#39;0&#39;. The digit 0 should occur zero times, but actually occurs twice in num.
num[1] = &#39;3&#39;. The digit 1 should occur three times, but actually occurs zero times in num.
num[2] = &#39;0&#39;. The digit 2 occurs zero times in num.
The indices 0 and 1 both violate the condition, so return false.

```

 

**Constraints:**

	- `n == num.length`

	- `1 <= n <= 10`

	- `num` consists of digits.

---

**Links:** [Submissions](https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/) | [Solutions](https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/)
