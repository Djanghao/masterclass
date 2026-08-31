# [1641. Count Sorted Vowel Strings](https://leetcode.com/problems/count-sorted-vowel-strings/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 3924 | 93 |

**Tags:** [`math`](https://leetcode.com/tag/math), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`combinatorics`](https://leetcode.com/tag/combinatorics)


## Description

Given an integer `n`, return *the number of strings of length *`n`* that consist only of vowels (*`a`*, *`e`*, *`i`*, *`o`*, *`u`*) and are **lexicographically sorted**.*

A string `s` is **lexicographically sorted** if for all valid `i`, `s[i]` is the same as or comes before `s[i+1]` in the alphabet.

 

**Example 1:**

```

Input: n = 1
Output: 5
Explanation: The 5 sorted strings that consist of vowels only are [&quot;a&quot;,&quot;e&quot;,&quot;i&quot;,&quot;o&quot;,&quot;u&quot;].

```

**Example 2:**

```

Input: n = 2
Output: 15
Explanation: The 15 sorted strings that consist of vowels only are
[&quot;aa&quot;,&quot;ae&quot;,&quot;ai&quot;,&quot;ao&quot;,&quot;au&quot;,&quot;ee&quot;,&quot;ei&quot;,&quot;eo&quot;,&quot;eu&quot;,&quot;ii&quot;,&quot;io&quot;,&quot;iu&quot;,&quot;oo&quot;,&quot;ou&quot;,&quot;uu&quot;].
Note that &quot;ea&quot; is not a valid string since &#39;e&#39; comes after &#39;a&#39; in the alphabet.

```

**Example 3:**

```

Input: n = 33
Output: 66045

```

 

**Constraints:**

	- `1 <= n <= 50`

---

**Links:** [Submissions](https://leetcode.com/problems/count-sorted-vowel-strings/) | [Solutions](https://leetcode.com/problems/count-sorted-vowel-strings/)
