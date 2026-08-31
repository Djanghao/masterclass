# [2484. Count Palindromic Subsequences](https://leetcode.com/problems/count-palindromic-subsequences/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 600 | 31 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)

**Companies:** `microsoft`, `millennium`, `phonepe`, `citadel`, `google`, `uber`, `amazon`, `salesforce`, `oracle`, `goldman-sachs`

## Description

Given a string of digits `s`, return *the number of **palindromic subsequences** of* `s`* having length *`5`. Since the answer may be very large, return it **modulo** `10^9 + 7`.

**Note:**

	- A string is **palindromic** if it reads the same forward and backward.

	- A **subsequence** is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.

 

**Example 1:**

```

Input: s = &quot;103301&quot;
Output: 2
Explanation: 
There are 6 possible subsequences of length 5: &quot;10330&quot;,&quot;10331&quot;,&quot;10301&quot;,&quot;10301&quot;,&quot;13301&quot;,&quot;03301&quot;. 
Two of them (both equal to &quot;10301&quot;) are palindromic.

```

**Example 2:**

```

Input: s = &quot;0000000&quot;
Output: 21
Explanation: All 21 subsequences are &quot;00000&quot;, which is palindromic.

```

**Example 3:**

```

Input: s = &quot;9999900000&quot;
Output: 2
Explanation: The only two palindromic subsequences are &quot;99999&quot; and &quot;00000&quot;.

```

 

**Constraints:**

	- `1 <= s.length <= 10^4`

	- `s` consists of digits.

---

**Links:** [Submissions](https://leetcode.com/problems/count-palindromic-subsequences/) | [Solutions](https://leetcode.com/problems/count-palindromic-subsequences/)
