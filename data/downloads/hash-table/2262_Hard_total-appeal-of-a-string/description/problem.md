# [2262. Total Appeal of A String](https://leetcode.com/problems/total-appeal-of-a-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 1209 | 35 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)

**Companies:** `microsoft`, `amazon`

## Description

The appeal of a string is the number of **distinct** characters found in the string.

	- For example, the appeal of `"abbca"` is `3` because it has `3` distinct characters: `'a'`, `'b'`, and `'c'`.

Given a string `s`, return *the **total appeal of all of its substrings**.*

A **substring** is a contiguous sequence of characters within a string.

 

**Example 1:**

```

Input: s = &quot;abbca&quot;
Output: 28
Explanation: The following are the substrings of &quot;abbca&quot;:
- Substrings of length 1: &quot;a&quot;, &quot;b&quot;, &quot;b&quot;, &quot;c&quot;, &quot;a&quot; have an appeal of 1, 1, 1, 1, and 1 respectively. The sum is 5.
- Substrings of length 2: &quot;ab&quot;, &quot;bb&quot;, &quot;bc&quot;, &quot;ca&quot; have an appeal of 2, 1, 2, and 2 respectively. The sum is 7.
- Substrings of length 3: &quot;abb&quot;, &quot;bbc&quot;, &quot;bca&quot; have an appeal of 2, 2, and 3 respectively. The sum is 7.
- Substrings of length 4: &quot;abbc&quot;, &quot;bbca&quot; have an appeal of 3 and 3 respectively. The sum is 6.
- Substrings of length 5: &quot;abbca&quot; has an appeal of 3. The sum is 3.
The total sum is 5 + 7 + 7 + 6 + 3 = 28.

```

**Example 2:**

```

Input: s = &quot;code&quot;
Output: 20
Explanation: The following are the substrings of &quot;code&quot;:
- Substrings of length 1: &quot;c&quot;, &quot;o&quot;, &quot;d&quot;, &quot;e&quot; have an appeal of 1, 1, 1, and 1 respectively. The sum is 4.
- Substrings of length 2: &quot;co&quot;, &quot;od&quot;, &quot;de&quot; have an appeal of 2, 2, and 2 respectively. The sum is 6.
- Substrings of length 3: &quot;cod&quot;, &quot;ode&quot; have an appeal of 3 and 3 respectively. The sum is 6.
- Substrings of length 4: &quot;code&quot; has an appeal of 4. The sum is 4.
The total sum is 4 + 6 + 6 + 4 = 20.

```

 

**Constraints:**

	- `1 <= s.length <= 10^5`

	- `s` consists of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/total-appeal-of-a-string/) | [Solutions](https://leetcode.com/problems/total-appeal-of-a-string/)
