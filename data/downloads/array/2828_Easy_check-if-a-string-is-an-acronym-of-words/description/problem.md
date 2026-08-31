# [2828. Check if a String Is an Acronym of Words](https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 360 | 12 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string)

**Companies:** `uber`

## Description

Given an array of strings `words` and a string `s`, determine if `s` is an **acronym** of words.

The string `s` is considered an acronym of `words` if it can be formed by concatenating the **first** character of each string in `words` **in order**. For example, `"ab"` can be formed from `["apple", "banana"]`, but it can't be formed from `["bear", "aardvark"]`.

Return `true`* if *`s`* is an acronym of *`words`*, and *`false`* otherwise. *

 

**Example 1:**

```

Input: words = [&quot;alice&quot;,&quot;bob&quot;,&quot;charlie&quot;], s = &quot;abc&quot;
Output: true
Explanation: The first character in the words &quot;alice&quot;, &quot;bob&quot;, and &quot;charlie&quot; are &#39;a&#39;, &#39;b&#39;, and &#39;c&#39;, respectively. Hence, s = &quot;abc&quot; is the acronym. 

```

**Example 2:**

```

Input: words = [&quot;an&quot;,&quot;apple&quot;], s = &quot;a&quot;
Output: false
Explanation: The first character in the words &quot;an&quot; and &quot;apple&quot; are &#39;a&#39; and &#39;a&#39;, respectively. 
The acronym formed by concatenating these characters is &quot;aa&quot;. 
Hence, s = &quot;a&quot; is not the acronym.

```

**Example 3:**

```

Input: words = [&quot;never&quot;,&quot;gonna&quot;,&quot;give&quot;,&quot;up&quot;,&quot;on&quot;,&quot;you&quot;], s = &quot;ngguoy&quot;
Output: true
Explanation: By concatenating the first character of the words in the array, we get the string &quot;ngguoy&quot;. 
Hence, s = &quot;ngguoy&quot; is the acronym.

```

 

**Constraints:**

	- `1 <= words.length <= 100`

	- `1 <= words[i].length <= 10`

	- `1 <= s.length <= 100`

	- `words[i]` and `s` consist of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/) | [Solutions](https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/)
