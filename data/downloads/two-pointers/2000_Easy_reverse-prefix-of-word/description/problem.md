# [2000. Reverse Prefix of Word](https://leetcode.com/problems/reverse-prefix-of-word/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 1478 | 44 |

**Tags:** [`two-pointers`](https://leetcode.com/tag/two-pointers), [`string`](https://leetcode.com/tag/string), [`stack`](https://leetcode.com/tag/stack)

**Companies:** `google`, `optum`

## Description

Given a **0-indexed** string `word` and a character `ch`, **reverse** the segment of `word` that starts at index `0` and ends at the index of the **first occurrence** of `ch` (**inclusive**). If the character `ch` does not exist in `word`, do nothing.

	- For example, if `word = "abcdefd"` and `ch = "d"`, then you should **reverse** the segment that starts at `0` and ends at `3` (**inclusive**). The resulting string will be `"dcbaefd"`.

Return *the resulting string*.

 

**Example 1:**

```

Input: word = &quot;abcdefd&quot;, ch = &quot;d&quot;
Output: &quot;dcbaefd&quot;
Explanation:&nbsp;The first occurrence of &quot;d&quot; is at index 3. 
Reverse the part of word from 0 to 3 (inclusive), the resulting string is &quot;dcbaefd&quot;.

```

**Example 2:**

```

Input: word = &quot;xyxzxe&quot;, ch = &quot;z&quot;
Output: &quot;zxyxxe&quot;
Explanation:&nbsp;The first and only occurrence of &quot;z&quot; is at index 3.
Reverse the part of word from 0 to 3 (inclusive), the resulting string is &quot;zxyxxe&quot;.

```

**Example 3:**

```

Input: word = &quot;abcd&quot;, ch = &quot;z&quot;
Output: &quot;abcd&quot;
Explanation:&nbsp;&quot;z&quot; does not exist in word.
You should not do any reverse operation, the resulting string is &quot;abcd&quot;.

```

 

**Constraints:**

	- `1 <= word.length <= 250`

	- `word` consists of lowercase English letters.

	- `ch` is a lowercase English letter.

---

**Links:** [Submissions](https://leetcode.com/problems/reverse-prefix-of-word/) | [Solutions](https://leetcode.com/problems/reverse-prefix-of-word/)
