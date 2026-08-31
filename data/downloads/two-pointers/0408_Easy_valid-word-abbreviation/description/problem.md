# [408. Valid Word Abbreviation](https://leetcode.com/problems/valid-word-abbreviation/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 908 | 2396 |

**Tags:** [`two-pointers`](https://leetcode.com/tag/two-pointers), [`string`](https://leetcode.com/tag/string)

**Companies:** `facebook`, `amazon`, `datadog`, `google`, `tiktok`, `snowflake`

## Description

A string can be **abbreviated** by replacing any number of **non-adjacent**, **non-empty** substrings with their lengths. The lengths **should not** have leading zeros.

For example, a string such as `"substitution"` could be abbreviated as (but not limited to):

	- `"s10n"` (`"s ubstitutio n"`)

	- `"sub4u4"` (`"sub stit u tion"`)

	- `"12"` (`"substitution"`)

	- `"su3i1u2on"` (`"su bst i t u ti on"`)

	- `"substitution"` (no substrings replaced)

The following are **not valid** abbreviations:

	- `"s55n"` (`"s ubsti tutio n"`, the replaced substrings are adjacent)

	- `"s010n"` (has leading zeros)

	- `"s0ubstitution"` (replaces an empty substring)

Given a string `word` and an abbreviation `abbr`, return *whether the string **matches** the given abbreviation*.

A **substring** is a contiguous **non-empty** sequence of characters within a string.

 

**Example 1:**

```

Input: word = &quot;internationalization&quot;, abbr = &quot;i12iz4n&quot;
Output: true
Explanation: The word &quot;internationalization&quot; can be abbreviated as &quot;i12iz4n&quot; (&quot;i nternational iz atio n&quot;).

```

**Example 2:**

```

Input: word = &quot;apple&quot;, abbr = &quot;a2e&quot;
Output: false
Explanation: The word &quot;apple&quot; cannot be abbreviated as &quot;a2e&quot;.

```

 

**Constraints:**

	- `1 <= word.length <= 20`

	- `word` consists of only lowercase English letters.

	- `1 <= abbr.length <= 10`

	- `abbr` consists of lowercase English letters and digits.

	- All the integers in `abbr` will fit in a 32-bit integer.

---

**Links:** [Submissions](https://leetcode.com/problems/valid-word-abbreviation/) | [Solutions](https://leetcode.com/problems/valid-word-abbreviation/)
