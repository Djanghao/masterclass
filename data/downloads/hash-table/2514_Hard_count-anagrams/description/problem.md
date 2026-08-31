# [2514. Count Anagrams](https://leetcode.com/problems/count-anagrams/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 467 | 42 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`math`](https://leetcode.com/tag/math), [`string`](https://leetcode.com/tag/string), [`combinatorics`](https://leetcode.com/tag/combinatorics), [`counting`](https://leetcode.com/tag/counting)

**Companies:** `mathworks`

## Description

You are given a string `s` containing one or more words. Every consecutive pair of words is separated by a single space `' '`.

A string `t` is an **anagram** of string `s` if the `i^th` word of `t` is a **permutation** of the `i^th` word of `s`.

	- For example, `"acb dfe"` is an anagram of `"abc def"`, but `"def cab"` and `"adc bef"` are not.

Return *the number of **distinct anagrams** of *`s`. Since the answer may be very large, return it **modulo** `10^9 + 7`.

 

**Example 1:**

```

Input: s = &quot;too hot&quot;
Output: 18
Explanation: Some of the anagrams of the given string are &quot;too hot&quot;, &quot;oot hot&quot;, &quot;oto toh&quot;, &quot;too toh&quot;, and &quot;too oht&quot;.

```

**Example 2:**

```

Input: s = &quot;aa&quot;
Output: 1
Explanation: There is only one anagram possible for the given string.
```

 

**Constraints:**

	- `1 <= s.length <= 10^5`

	- `s` consists of lowercase English letters and spaces `' '`.

	- There is single space between consecutive words.

---

**Links:** [Submissions](https://leetcode.com/problems/count-anagrams/) | [Solutions](https://leetcode.com/problems/count-anagrams/)
