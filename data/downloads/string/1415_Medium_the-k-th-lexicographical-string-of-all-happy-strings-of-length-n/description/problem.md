# [1415. The k-th Lexicographical String of All Happy Strings of Length n](https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1525 | 45 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`backtracking`](https://leetcode.com/tag/backtracking)

**Companies:** `google`, `bloomberg`, `amazon`, `facebook`, `microsoft`

## Description

A **happy string** is a string that:

	- consists only of letters of the set `['a', 'b', 'c']`.

	- `s[i] != s[i + 1]` for all values of `i` from `1` to `s.length - 1` (string is 1-indexed).

For example, strings **"abc", "ac", "b"** and **"abcbabcbcb"** are all happy strings and strings **"aa", "baa"** and **"ababbc"** are not happy strings.

Given two integers `n` and `k`, consider a list of all happy strings of length `n` sorted in lexicographical order.

Return *the kth string* of this list or return an **empty string** if there are less than `k` happy strings of length `n`.

 

**Example 1:**

```

Input: n = 1, k = 3
Output: &quot;c&quot;
Explanation: The list [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;] contains all happy strings of length 1. The third string is &quot;c&quot;.

```

**Example 2:**

```

Input: n = 1, k = 4
Output: &quot;&quot;
Explanation: There are only 3 happy strings of length 1.

```

**Example 3:**

```

Input: n = 3, k = 9
Output: &quot;cab&quot;
Explanation: There are 12 different happy string of length 3 [&quot;aba&quot;, &quot;abc&quot;, &quot;aca&quot;, &quot;acb&quot;, &quot;bab&quot;, &quot;bac&quot;, &quot;bca&quot;, &quot;bcb&quot;, &quot;cab&quot;, &quot;cac&quot;, &quot;cba&quot;, &quot;cbc&quot;]. You will find the 9th string = &quot;cab&quot;

```

 

**Constraints:**

	- `1 <= n <= 10`

	- `1 <= k <= 100`

---

**Links:** [Submissions](https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/) | [Solutions](https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/)
