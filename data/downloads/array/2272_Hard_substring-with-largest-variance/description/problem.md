# [2272. Substring With Largest Variance](https://leetcode.com/problems/substring-with-largest-variance/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 1912 | 212 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)

**Companies:** `amazon`

## Description

The **variance** of a string is defined as the largest difference between the number of occurrences of **any** `2` characters present in the string. Note the two characters may or may not be the same.

Given a string `s` consisting of lowercase English letters only, return *the **largest variance** possible among all **substrings** of* `s`.

A **substring** is a contiguous sequence of characters within a string.

 

**Example 1:**

```

Input: s = &quot;aababbb&quot;
Output: 3
Explanation:
All possible variances along with their respective substrings are listed below:
- Variance 0 for substrings &quot;a&quot;, &quot;aa&quot;, &quot;ab&quot;, &quot;abab&quot;, &quot;aababb&quot;, &quot;ba&quot;, &quot;b&quot;, &quot;bb&quot;, and &quot;bbb&quot;.
- Variance 1 for substrings &quot;aab&quot;, &quot;aba&quot;, &quot;abb&quot;, &quot;aabab&quot;, &quot;ababb&quot;, &quot;aababbb&quot;, and &quot;bab&quot;.
- Variance 2 for substrings &quot;aaba&quot;, &quot;ababbb&quot;, &quot;abbb&quot;, and &quot;babb&quot;.
- Variance 3 for substring &quot;babbb&quot;.
Since the largest possible variance is 3, we return it.

```

**Example 2:**

```

Input: s = &quot;abcde&quot;
Output: 0
Explanation:
No letter occurs more than once in s, so the variance of every substring is 0.

```

 

**Constraints:**

	- `1 <= s.length <= 10^4`

	- `s` consists of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/substring-with-largest-variance/) | [Solutions](https://leetcode.com/problems/substring-with-largest-variance/)
