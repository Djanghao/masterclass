# [2864. Maximum Odd Binary Number](https://leetcode.com/problems/maximum-odd-binary-number/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 825 | 34 |

**Tags:** [`math`](https://leetcode.com/tag/math), [`string`](https://leetcode.com/tag/string), [`greedy`](https://leetcode.com/tag/greedy)

**Companies:** `facebook`, `amazon`

## Description

You are given a **binary** string `s` that contains at least one `'1'`.

You have to **rearrange** the bits in such a way that the resulting binary number is the **maximum odd binary number** that can be created from this combination.

Return *a string representing the maximum odd binary number that can be created from the given combination.*

**Note **that the resulting string **can** have leading zeros.

 

**Example 1:**

```

Input: s = &quot;010&quot;
Output: &quot;001&quot;
Explanation: Because there is just one &#39;1&#39;, it must be in the last position. So the answer is &quot;001&quot;.

```

**Example 2:**

```

Input: s = &quot;0101&quot;
Output: &quot;1001&quot;
Explanation: One of the &#39;1&#39;s must be in the last position. The maximum number that can be made with the remaining digits is &quot;100&quot;. So the answer is &quot;1001&quot;.

```

 

**Constraints:**

	- `1 <= s.length <= 100`

	- `s` consists only of `'0'` and `'1'`.

	- `s` contains at least one `'1'`.

---

**Links:** [Submissions](https://leetcode.com/problems/maximum-odd-binary-number/) | [Solutions](https://leetcode.com/problems/maximum-odd-binary-number/)
