# [2430. Maximum Deletions on a String](https://leetcode.com/problems/maximum-deletions-on-a-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 517 | 61 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`rolling-hash`](https://leetcode.com/tag/rolling-hash), [`string-matching`](https://leetcode.com/tag/string-matching), [`hash-function`](https://leetcode.com/tag/hash-function)

**Companies:** `de-shaw`

## Description

You are given a string `s` consisting of only lowercase English letters. In one operation, you can:

	- Delete **the entire string** `s`, or

	- Delete the **first** `i` letters of `s` if the first `i` letters of `s` are **equal** to the following `i` letters in `s`, for any `i` in the range `1 <= i <= s.length / 2`.

For example, if `s = "ababc"`, then in one operation, you could delete the first two letters of `s` to get `"abc"`, since the first two letters of `s` and the following two letters of `s` are both equal to `"ab"`.

Return *the **maximum** number of operations needed to delete all of *`s`.

 

**Example 1:**

```

Input: s = &quot;abcabcdabc&quot;
Output: 2
Explanation:
- Delete the first 3 letters (&quot;abc&quot;) since the next 3 letters are equal. Now, s = &quot;abcdabc&quot;.
- Delete all the letters.
We used 2 operations so return 2. It can be proven that 2 is the maximum number of operations needed.
Note that in the second operation we cannot delete &quot;abc&quot; again because the next occurrence of &quot;abc&quot; does not happen in the next 3 letters.

```

**Example 2:**

```

Input: s = &quot;aaabaab&quot;
Output: 4
Explanation:
- Delete the first letter (&quot;a&quot;) since the next letter is equal. Now, s = &quot;aabaab&quot;.
- Delete the first 3 letters (&quot;aab&quot;) since the next 3 letters are equal. Now, s = &quot;aab&quot;.
- Delete the first letter (&quot;a&quot;) since the next letter is equal. Now, s = &quot;ab&quot;.
- Delete all the letters.
We used 4 operations so return 4. It can be proven that 4 is the maximum number of operations needed.

```

**Example 3:**

```

Input: s = &quot;aaaaa&quot;
Output: 5
Explanation: In each operation, we can delete the first letter of s.

```

 

**Constraints:**

	- `1 <= s.length <= 4000`

	- `s` consists only of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/maximum-deletions-on-a-string/) | [Solutions](https://leetcode.com/problems/maximum-deletions-on-a-string/)
