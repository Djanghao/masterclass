# [411. Minimum Unique Word Abbreviation](https://leetcode.com/problems/minimum-unique-word-abbreviation/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 183 | 146 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string), [`backtracking`](https://leetcode.com/tag/backtracking), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation)

**Companies:** `google`

## Description

A string can be **abbreviated** by replacing any number of **non-adjacent** substrings with their lengths. For example, a string such as `"substitution"` could be abbreviated as (but not limited to):

	- `"s10n"` (`"s ubstitutio n"`)

	- `"sub4u4"` (`"sub stit u tion"`)

	- `"12"` (`"substitution"`)

	- `"su3i1u2on"` (`"su bst i t u ti on"`)

	- `"substitution"` (no substrings replaced)

Note that `"s55n"` (`"s ubsti tutio n"`) is not a valid abbreviation of `"substitution"` because the replaced substrings are adjacent.

The **length** of an abbreviation is the number of letters that were not replaced plus the number of substrings that were replaced. For example, the abbreviation `"s10n"` has a length of `3` (`2` letters + `1` substring) and `"su3i1u2on"` has a length of `9` (`6` letters + `3` substrings).

Given a target string `target` and an array of strings `dictionary`, return *an **abbreviation** of *`target`* with the **shortest possible length** such that it is **not an abbreviation** of **any** string in *`dictionary`*. If there are multiple shortest abbreviations, return any of them*.

 

**Example 1:**

```

Input: target = &quot;apple&quot;, dictionary = [&quot;blade&quot;]
Output: &quot;a4&quot;
Explanation: The shortest abbreviation of &quot;apple&quot; is &quot;5&quot;, but this is also an abbreviation of &quot;blade&quot;.
The next shortest abbreviations are &quot;a4&quot; and &quot;4e&quot;. &quot;4e&quot; is an abbreviation of blade while &quot;a4&quot; is not.
Hence, return &quot;a4&quot;.

```

**Example 2:**

```

Input: target = &quot;apple&quot;, dictionary = [&quot;blade&quot;,&quot;plain&quot;,&quot;amber&quot;]
Output: &quot;1p3&quot;
Explanation: &quot;5&quot; is an abbreviation of both &quot;apple&quot; but also every word in the dictionary.
&quot;a4&quot; is an abbreviation of &quot;apple&quot; but also &quot;amber&quot;.
&quot;4e&quot; is an abbreviation of &quot;apple&quot; but also &quot;blade&quot;.
&quot;1p3&quot;, &quot;2p2&quot;, and &quot;3l1&quot; are the next shortest abbreviations of &quot;apple&quot;.
Since none of them are abbreviations of words in the dictionary, returning any of them is correct.

```

 

**Constraints:**

	- `m == target.length`

	- `n == dictionary.length`

	- `1  0`

	- `target` and `dictionary[i]` consist of lowercase English letters.

	- `dictionary` does not contain `target`.

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-unique-word-abbreviation/) | [Solutions](https://leetcode.com/problems/minimum-unique-word-abbreviation/)
