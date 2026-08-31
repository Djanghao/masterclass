# [2416. Sum of Prefix Scores of Strings](https://leetcode.com/problems/sum-of-prefix-scores-of-strings/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 1187 | 111 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string), [`trie`](https://leetcode.com/tag/trie), [`counting`](https://leetcode.com/tag/counting)

**Companies:** `amazon`, `bloomberg`, `google`

## Description

You are given an array `words` of size `n` consisting of **non-empty** strings.

We define the **score** of a string `term` as the **number** of strings `words[i]` such that `term` is a **prefix** of `words[i]`.

	- For example, if `words = ["a", "ab", "abc", "cab"]`, then the score of `"ab"` is `2`, since `"ab"` is a prefix of both `"ab"` and `"abc"`.

Return *an array *`answer`* of size *`n`* where *`answer[i]`* is the **sum** of scores of every **non-empty** prefix of *`words[i]`.

**Note** that a string is considered as a prefix of itself.

 

**Example 1:**

```

Input: words = [&quot;abc&quot;,&quot;ab&quot;,&quot;bc&quot;,&quot;b&quot;]
Output: [5,4,3,2]
Explanation: The answer for each string is the following:
- &quot;abc&quot; has 3 prefixes: &quot;a&quot;, &quot;ab&quot;, and &quot;abc&quot;.
- There are 2 strings with the prefix &quot;a&quot;, 2 strings with the prefix &quot;ab&quot;, and 1 string with the prefix &quot;abc&quot;.
The total is answer[0] = 2 + 2 + 1 = 5.
- &quot;ab&quot; has 2 prefixes: &quot;a&quot; and &quot;ab&quot;.
- There are 2 strings with the prefix &quot;a&quot;, and 2 strings with the prefix &quot;ab&quot;.
The total is answer[1] = 2 + 2 = 4.
- &quot;bc&quot; has 2 prefixes: &quot;b&quot; and &quot;bc&quot;.
- There are 2 strings with the prefix &quot;b&quot;, and 1 string with the prefix &quot;bc&quot;.
The total is answer[2] = 2 + 1 = 3.
- &quot;b&quot; has 1 prefix: &quot;b&quot;.
- There are 2 strings with the prefix &quot;b&quot;.
The total is answer[3] = 2.

```

**Example 2:**

```

Input: words = [&quot;abcd&quot;]
Output: [4]
Explanation:
&quot;abcd&quot; has 4 prefixes: &quot;a&quot;, &quot;ab&quot;, &quot;abc&quot;, and &quot;abcd&quot;.
Each prefix has a score of one, so the total is answer[0] = 1 + 1 + 1 + 1 = 4.

```

 

**Constraints:**

	- `1 <= words.length <= 1000`

	- `1 <= words[i].length <= 1000`

	- `words[i]` consists of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/sum-of-prefix-scores-of-strings/) | [Solutions](https://leetcode.com/problems/sum-of-prefix-scores-of-strings/)
