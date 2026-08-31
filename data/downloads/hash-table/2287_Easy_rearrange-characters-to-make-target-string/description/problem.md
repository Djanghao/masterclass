# [2287. Rearrange Characters to Make Target String](https://leetcode.com/problems/rearrange-characters-to-make-target-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 519 | 37 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`counting`](https://leetcode.com/tag/counting)

**Companies:** `amazon`

## Description

You are given two **0-indexed** strings `s` and `target`. You can take some letters from `s` and rearrange them to form new strings.

Return* the **maximum** number of copies of *`target`* that can be formed by taking letters from *`s`* and rearranging them.*

 

**Example 1:**

```

Input: s = &quot;ilovecodingonleetcode&quot;, target = &quot;code&quot;
Output: 2
Explanation:
For the first copy of &quot;code&quot;, take the letters at indices 4, 5, 6, and 7.
For the second copy of &quot;code&quot;, take the letters at indices 17, 18, 19, and 20.
The strings that are formed are &quot;ecod&quot; and &quot;code&quot; which can both be rearranged into &quot;code&quot;.
We can make at most two copies of &quot;code&quot;, so we return 2.

```

**Example 2:**

```

Input: s = &quot;abcba&quot;, target = &quot;abc&quot;
Output: 1
Explanation:
We can make one copy of &quot;abc&quot; by taking the letters at indices 0, 1, and 2.
We can make at most one copy of &quot;abc&quot;, so we return 1.
Note that while there is an extra &#39;a&#39; and &#39;b&#39; at indices 3 and 4, we cannot reuse the letter &#39;c&#39; at index 2, so we cannot make a second copy of &quot;abc&quot;.

```

**Example 3:**

```

Input: s = &quot;abbaccaddaeea&quot;, target = &quot;aaaaa&quot;
Output: 1
Explanation:
We can make one copy of &quot;aaaaa&quot; by taking the letters at indices 0, 3, 6, 9, and 12.
We can make at most one copy of &quot;aaaaa&quot;, so we return 1.

```

 

**Constraints:**

	- `1  1189: Maximum Number of Balloons.

---

**Links:** [Submissions](https://leetcode.com/problems/rearrange-characters-to-make-target-string/) | [Solutions](https://leetcode.com/problems/rearrange-characters-to-make-target-string/)
