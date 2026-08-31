# [1554. Strings Differ by One Character](https://leetcode.com/problems/strings-differ-by-one-character/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 385 | 104 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`rolling-hash`](https://leetcode.com/tag/rolling-hash), [`hash-function`](https://leetcode.com/tag/hash-function)

**Companies:** `okta`, `airbnb`

## Description

Given a list of strings `dict` where all the strings are of the same length.

Return `true` if there are 2 strings that only differ by 1 character in the same index, otherwise return `false`.

 

**Example 1:**

```

Input: dict = [&quot;abcd&quot;,&quot;acbd&quot;, &quot;aacd&quot;]
Output: true
Explanation: Strings &quot;abcd&quot; and &quot;aacd&quot; differ only by one character in the index 1.

```

**Example 2:**

```

Input: dict = [&quot;ab&quot;,&quot;cd&quot;,&quot;yz&quot;]
Output: false

```

**Example 3:**

```

Input: dict = [&quot;abcd&quot;,&quot;cccc&quot;,&quot;abyd&quot;,&quot;abab&quot;]
Output: true

```

 

**Constraints:**

	- The number of characters in `dict <= 10^5`

	- `dict[i].length == dict[j].length`

	- `dict[i]` should be unique.

	- `dict[i]` contains only lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/strings-differ-by-one-character/) | [Solutions](https://leetcode.com/problems/strings-differ-by-one-character/)
