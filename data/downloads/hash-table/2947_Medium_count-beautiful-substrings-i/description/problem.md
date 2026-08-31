# [2947. Count Beautiful Substrings I](https://leetcode.com/problems/count-beautiful-substrings-i/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 170 | 16 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`math`](https://leetcode.com/tag/math), [`string`](https://leetcode.com/tag/string), [`enumeration`](https://leetcode.com/tag/enumeration), [`number-theory`](https://leetcode.com/tag/number-theory), [`prefix-sum`](https://leetcode.com/tag/prefix-sum)

**Companies:** `amazon`

## Description

You are given a string `s` and a positive integer `k`.

Let `vowels` and `consonants` be the number of vowels and consonants in a string.

A string is **beautiful** if:

	- `vowels == consonants`.

	- `(vowels * consonants) % k == 0`, in other terms the multiplication of `vowels` and `consonants` is divisible by `k`.

Return *the number of **non-empty beautiful substrings** in the given string* `s`.

A **substring** is a contiguous sequence of characters in a string.

**Vowel letters** in English are `'a'`, `'e'`, `'i'`, `'o'`, and `'u'`.

**Consonant letters** in English are every letter except vowels.

 

**Example 1:**

```

Input: s = &quot;baeyh&quot;, k = 2
Output: 2
Explanation: There are 2 beautiful substrings in the given string.
- Substring &quot;baeyh&quot;, vowels = 2 ([&quot;a&quot;,e&quot;]), consonants = 2 ([&quot;y&quot;,&quot;h&quot;]).
You can see that string &quot;aeyh&quot; is beautiful as vowels == consonants and vowels * consonants % k == 0.
- Substring &quot;baeyh&quot;, vowels = 2 ([&quot;a&quot;,e&quot;]), consonants = 2 ([&quot;b&quot;,&quot;y&quot;]). 
You can see that string &quot;baey&quot; is beautiful as vowels == consonants and vowels * consonants % k == 0.
It can be shown that there are only 2 beautiful substrings in the given string.

```

**Example 2:**

```

Input: s = &quot;abba&quot;, k = 1
Output: 3
Explanation: There are 3 beautiful substrings in the given string.
- Substring &quot;abba&quot;, vowels = 1 ([&quot;a&quot;]), consonants = 1 ([&quot;b&quot;]). 
- Substring &quot;abba&quot;, vowels = 1 ([&quot;a&quot;]), consonants = 1 ([&quot;b&quot;]).
- Substring &quot;abba&quot;, vowels = 2 ([&quot;a&quot;,&quot;a&quot;]), consonants = 2 ([&quot;b&quot;,&quot;b&quot;]).
It can be shown that there are only 3 beautiful substrings in the given string.

```

**Example 3:**

```

Input: s = &quot;bcdf&quot;, k = 1
Output: 0
Explanation: There are no beautiful substrings in the given string.

```

 

**Constraints:**

	- `1 <= s.length <= 1000`

	- `1 <= k <= 1000`

	- `s` consists of only English lowercase letters.

---

**Links:** [Submissions](https://leetcode.com/problems/count-beautiful-substrings-i/) | [Solutions](https://leetcode.com/problems/count-beautiful-substrings-i/)
