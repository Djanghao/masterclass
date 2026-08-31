# [953. Verifying an Alien Dictionary](https://leetcode.com/problems/verifying-an-alien-dictionary/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 5037 | 1678 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string)

**Companies:** `uber`, `facebook`, `apple`, `anduril`, `amazon`, `microsoft`, `google`, `bloomberg`, `tiktok`, `wix`

## Description

In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different `order`. The `order` of the alphabet is some permutation of lowercase letters.

Given a sequence of `words` written in the alien language, and the `order` of the alphabet, return `true` if and only if the given `words` are sorted lexicographically in this alien language.

 

**Example 1:**

```

Input: words = [&quot;hello&quot;,&quot;leetcode&quot;], order = &quot;hlabcdefgijkmnopqrstuvwxyz&quot;
Output: true
Explanation: As &#39;h&#39; comes before &#39;l&#39; in this language, then the sequence is sorted.

```

**Example 2:**

```

Input: words = [&quot;word&quot;,&quot;world&quot;,&quot;row&quot;], order = &quot;worldabcefghijkmnpqstuvxyz&quot;
Output: false
Explanation: As &#39;d&#39; comes after &#39;l&#39; in this language, then words[0] &gt; words[1], hence the sequence is unsorted.

```

**Example 3:**

```

Input: words = [&quot;apple&quot;,&quot;app&quot;], order = &quot;abcdefghijklmnopqrstuvwxyz&quot;
Output: false
Explanation: The first three characters &quot;app&quot; match, and the second string is shorter (in size.) According to lexicographical rules &quot;apple&quot; &gt; &quot;app&quot;, because &#39;l&#39; &gt; &#39;&empty;&#39;, where &#39;&empty;&#39; is defined as the blank character which is less than any other character (More info).

```

 

**Constraints:**

	- `1 <= words.length <= 100`

	- `1 <= words[i].length <= 20`

	- `order.length == 26`

	- All characters in `words[i]` and `order` are English lowercase letters.

---

**Links:** [Submissions](https://leetcode.com/problems/verifying-an-alien-dictionary/) | [Solutions](https://leetcode.com/problems/verifying-an-alien-dictionary/)
