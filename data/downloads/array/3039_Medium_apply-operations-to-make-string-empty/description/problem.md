# [3039. Apply Operations to Make String Empty](https://leetcode.com/problems/apply-operations-to-make-string-empty/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 163 | 8 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`sorting`](https://leetcode.com/tag/sorting), [`counting`](https://leetcode.com/tag/counting)

**Companies:** `virtusa`

## Description

You are given a string `s`.

Consider performing the following operation until `s` becomes **empty**:

	- For **every** alphabet character from `'a'` to `'z'`, remove the **first** occurrence of that character in `s` (if it exists).

For example, let initially `s = "aabcbbca"`. We do the following operations:

	- Remove the underlined characters `s = "aabcbbca"`. The resulting string is `s = "abbca"`.

	- Remove the underlined characters `s = "abbca"`. The resulting string is `s = "ba"`.

	- Remove the underlined characters `s = "ba"`. The resulting string is `s = ""`.

Return *the value of the string *`s`* right **before** applying the **last** operation*. In the example above, answer is `"ba"`.

 

**Example 1:**

```

Input: s = &quot;aabcbbca&quot;
Output: &quot;ba&quot;
Explanation: Explained in the statement.

```

**Example 2:**

```

Input: s = &quot;abcd&quot;
Output: &quot;abcd&quot;
Explanation: We do the following operation:
- Remove the underlined characters s = &quot;abcd&quot;. The resulting string is s = &quot;&quot;.
The string just before the last operation is &quot;abcd&quot;.

```

 

**Constraints:**

	- `1 <= s.length <= 5 * 10^5`

	- `s` consists only of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/apply-operations-to-make-string-empty/) | [Solutions](https://leetcode.com/problems/apply-operations-to-make-string-empty/)
