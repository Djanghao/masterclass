# [1416. Restore The Array](https://leetcode.com/problems/restore-the-array/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 1660 | 53 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)


## Description

A program was supposed to print an array of integers. The program forgot to print whitespaces and the array is printed as a string of digits `s` and all we know is that all integers in the array were in the range `[1, k]` and there are no leading zeros in the array.

Given the string `s` and the integer `k`, return *the number of the possible arrays that can be printed as *`s`* using the mentioned program*. Since the answer may be very large, return it **modulo** `10^9 + 7`.

 

**Example 1:**

```

Input: s = &quot;1000&quot;, k = 10000
Output: 1
Explanation: The only possible array is [1000]

```

**Example 2:**

```

Input: s = &quot;1000&quot;, k = 10
Output: 0
Explanation: There cannot be an array that was printed this way and has all integer &gt;= 1 and &lt;= 10.

```

**Example 3:**

```

Input: s = &quot;1317&quot;, k = 2000
Output: 8
Explanation: Possible arrays are [1317],[131,7],[13,17],[1,317],[13,1,7],[1,31,7],[1,3,17],[1,3,1,7]

```

 

**Constraints:**

	- `1 <= s.length <= 10^5`

	- `s` consists of only digits and does not contain leading zeros.

	- `1 <= k <= 10^9`

---

**Links:** [Submissions](https://leetcode.com/problems/restore-the-array/) | [Solutions](https://leetcode.com/problems/restore-the-array/)
