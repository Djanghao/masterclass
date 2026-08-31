# [1220. Count Vowels Permutation](https://leetcode.com/problems/count-vowels-permutation/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 3291 | 219 |

**Tags:** [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)


## Description

Given an integer `n`, your task is to count how many strings of length `n` can be formed under the following rules:

	- Each character is a lower case vowel (`'a'`, `'e'`, `'i'`, `'o'`, `'u'`)

	- Each vowel `'a'` may only be followed by an `'e'`.

	- Each vowel `'e'` may only be followed by an `'a'` or an `'i'`.

	- Each vowel `'i'` **may not** be followed by another `'i'`.

	- Each vowel `'o'` may only be followed by an `'i'` or a `'u'`.

	- Each vowel `'u'` may only be followed by an `'a'`.

Since the answer may be too large, return it modulo `10^9 + 7`.

 

**Example 1:**

```

Input: n = 1
Output: 5
Explanation: All possible strings are: &quot;a&quot;, &quot;e&quot;, &quot;i&quot; , &quot;o&quot; and &quot;u&quot;.

```

**Example 2:**

```

Input: n = 2
Output: 10
Explanation: All possible strings are: &quot;ae&quot;, &quot;ea&quot;, &quot;ei&quot;, &quot;ia&quot;, &quot;ie&quot;, &quot;io&quot;, &quot;iu&quot;, &quot;oi&quot;, &quot;ou&quot; and &quot;ua&quot;.

```

**Example 3: **

```

Input: n = 5
Output: 68
```

 

**Constraints:**

	- `1 <= n <= 2 * 10^4`

---

**Links:** [Submissions](https://leetcode.com/problems/count-vowels-permutation/) | [Solutions](https://leetcode.com/problems/count-vowels-permutation/)
