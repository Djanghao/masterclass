# [2063. Vowels of All Substrings](https://leetcode.com/problems/vowels-of-all-substrings/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 901 | 36 |

**Tags:** [`math`](https://leetcode.com/tag/math), [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`combinatorics`](https://leetcode.com/tag/combinatorics)

**Companies:** `servicenow`

## Description

Given a string `word`, return *the **sum of the number of vowels** (*`'a'`, `'e'`*,* `'i'`*,* `'o'`*, and* `'u'`*)* *in every substring of *`word`.

A **substring** is a contiguous (non-empty) sequence of characters within a string.

**Note:** Due to the large constraints, the answer may not fit in a signed 32-bit integer. Please be careful during the calculations.

 

**Example 1:**

```

Input: word = &quot;aba&quot;
Output: 6
Explanation: 
All possible substrings are: &quot;a&quot;, &quot;ab&quot;, &quot;aba&quot;, &quot;b&quot;, &quot;ba&quot;, and &quot;a&quot;.
- &quot;b&quot; has 0 vowels in it
- &quot;a&quot;, &quot;ab&quot;, &quot;ba&quot;, and &quot;a&quot; have 1 vowel each
- &quot;aba&quot; has 2 vowels in it
Hence, the total sum of vowels = 0 + 1 + 1 + 1 + 1 + 2 = 6. 

```

**Example 2:**

```

Input: word = &quot;abc&quot;
Output: 3
Explanation: 
All possible substrings are: &quot;a&quot;, &quot;ab&quot;, &quot;abc&quot;, &quot;b&quot;, &quot;bc&quot;, and &quot;c&quot;.
- &quot;a&quot;, &quot;ab&quot;, and &quot;abc&quot; have 1 vowel each
- &quot;b&quot;, &quot;bc&quot;, and &quot;c&quot; have 0 vowels each
Hence, the total sum of vowels = 1 + 1 + 1 + 0 + 0 + 0 = 3.

```

**Example 3:**

```

Input: word = &quot;ltcd&quot;
Output: 0
Explanation: There are no vowels in any substring of &quot;ltcd&quot;.

```

 

**Constraints:**

	- `1 <= word.length <= 10^5`

	- `word` consists of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/vowels-of-all-substrings/) | [Solutions](https://leetcode.com/problems/vowels-of-all-substrings/)
