# [1061. Lexicographically Smallest Equivalent String](https://leetcode.com/problems/lexicographically-smallest-equivalent-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 2860 | 185 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`union-find`](https://leetcode.com/tag/union-find)

**Companies:** `amazon`, `google`, `facebook`, `cloudera`

## Description

You are given two strings of the same length `s1` and `s2` and a string `baseStr`.

We say `s1[i]` and `s2[i]` are equivalent characters.

	- For example, if `s1 = "abc"` and `s2 = "cde"`, then we have `'a' == 'c'`, `'b' == 'd'`, and `'c' == 'e'`.

Equivalent characters follow the usual rules of any equivalence relation:

	- **Reflexivity:** `'a' == 'a'`.

	- **Symmetry:** `'a' == 'b'` implies `'b' == 'a'`.

	- **Transitivity:** `'a' == 'b'` and `'b' == 'c'` implies `'a' == 'c'`.

For example, given the equivalency information from `s1 = "abc"` and `s2 = "cde"`, `"acd"` and `"aab"` are equivalent strings of `baseStr = "eed"`, and `"aab"` is the lexicographically smallest equivalent string of `baseStr`.

Return *the lexicographically smallest equivalent string of *`baseStr`* by using the equivalency information from *`s1`* and *`s2`.

 

**Example 1:**

```

Input: s1 = &quot;parker&quot;, s2 = &quot;morris&quot;, baseStr = &quot;parser&quot;
Output: &quot;makkek&quot;
Explanation: Based on the equivalency information in s1 and s2, we can group their characters as [m,p], [a,o], [k,r,s], [e,i].
The characters in each group are equivalent and sorted in lexicographical order.
So the answer is &quot;makkek&quot;.

```

**Example 2:**

```

Input: s1 = &quot;hello&quot;, s2 = &quot;world&quot;, baseStr = &quot;hold&quot;
Output: &quot;hdld&quot;
Explanation: Based on the equivalency information in s1 and s2, we can group their characters as [h,w], [d,e,o], [l,r].
So only the second letter &#39;o&#39; in baseStr is changed to &#39;d&#39;, the answer is &quot;hdld&quot;.

```

**Example 3:**

```

Input: s1 = &quot;leetcode&quot;, s2 = &quot;programs&quot;, baseStr = &quot;sourcecode&quot;
Output: &quot;aauaaaaada&quot;
Explanation: We group the equivalent characters in s1 and s2 as [a,o,e,r,s,c], [l,p], [g,t] and [d,m], thus all letters in baseStr except &#39;u&#39; and &#39;d&#39; are transformed to &#39;a&#39;, the answer is &quot;aauaaaaada&quot;.

```

 

**Constraints:**

	- `1 <= s1.length, s2.length, baseStr <= 1000`

	- `s1.length == s2.length`

	- `s1`, `s2`, and `baseStr` consist of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/lexicographically-smallest-equivalent-string/) | [Solutions](https://leetcode.com/problems/lexicographically-smallest-equivalent-string/)
