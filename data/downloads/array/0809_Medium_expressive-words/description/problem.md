# [809. Expressive Words](https://leetcode.com/problems/expressive-words/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 902 | 1946 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`two-pointers`](https://leetcode.com/tag/two-pointers), [`string`](https://leetcode.com/tag/string)

**Companies:** `google`

## Description

Sometimes people repeat letters to represent extra feeling. For example:

	- `"hello" -> "heeellooo"`

	- `"hi" -> "hiiii"`

In these strings like `"heeellooo"`, we have groups of adjacent letters that are all the same: `"h"`, `"eee"`, `"ll"`, `"ooo"`.

You are given a string `s` and an array of query strings `words`. A query word is **stretchy** if it can be made to be equal to `s` by any number of applications of the following extension operation: choose a group consisting of characters `c`, and add some number of characters `c` to the group so that the size of the group is **three or more**.

	- For example, starting with `"hello"`, we could do an extension on the group `"o"` to get `"hellooo"`, but we cannot get `"helloo"` since the group `"oo"` has a size less than three. Also, we could do another extension like `"ll" -> "lllll"` to get `"helllllooo"`. If `s = "helllllooo"`, then the query word `"hello"` would be **stretchy** because of these two extension operations: `query = "hello" -> "hellooo" -> "helllllooo" = s`.

Return *the number of query strings that are **stretchy***.

 

**Example 1:**

```

Input: s = &quot;heeellooo&quot;, words = [&quot;hello&quot;, &quot;hi&quot;, &quot;helo&quot;]
Output: 1
Explanation: 
We can extend &quot;e&quot; and &quot;o&quot; in the word &quot;hello&quot; to get &quot;heeellooo&quot;.
We can&#39;t extend &quot;helo&quot; to get &quot;heeellooo&quot; because the group &quot;ll&quot; is not size 3 or more.

```

**Example 2:**

```

Input: s = &quot;zzzzzyyyyy&quot;, words = [&quot;zzyy&quot;,&quot;zy&quot;,&quot;zyy&quot;]
Output: 3

```

 

**Constraints:**

	- `1 <= s.length, words.length <= 100`

	- `1 <= words[i].length <= 100`

	- `s` and `words[i]` consist of lowercase letters.

---

**Links:** [Submissions](https://leetcode.com/problems/expressive-words/) | [Solutions](https://leetcode.com/problems/expressive-words/)
