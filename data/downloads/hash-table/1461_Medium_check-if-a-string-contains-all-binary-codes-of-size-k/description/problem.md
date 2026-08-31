# [1461. Check If a String Contains All Binary Codes of Size K](https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 2313 | 100 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation), [`rolling-hash`](https://leetcode.com/tag/rolling-hash), [`hash-function`](https://leetcode.com/tag/hash-function)

**Companies:** `grammarly`, `microsoft`, `google`

## Description

Given a binary string `s` and an integer `k`, return `true` *if every binary code of length* `k` *is a substring of* `s`. Otherwise, return `false`.

 

**Example 1:**

```

Input: s = &quot;00110110&quot;, k = 2
Output: true
Explanation: The binary codes of length 2 are &quot;00&quot;, &quot;01&quot;, &quot;10&quot; and &quot;11&quot;. They can be all found as substrings at indices 0, 1, 3 and 2 respectively.

```

**Example 2:**

```

Input: s = &quot;0110&quot;, k = 1
Output: true
Explanation: The binary codes of length 1 are &quot;0&quot; and &quot;1&quot;, it is clear that both exist as a substring. 

```

**Example 3:**

```

Input: s = &quot;0110&quot;, k = 2
Output: false
Explanation: The binary code &quot;00&quot; is of length 2 and does not exist in the array.

```

 

**Constraints:**

	- `1 <= s.length <= 5 * 10^5`

	- `s[i]` is either `'0'` or `'1'`.

	- `1 <= k <= 20`

---

**Links:** [Submissions](https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/) | [Solutions](https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/)
