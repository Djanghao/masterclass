# [1400. Construct K Palindrome Strings](https://leetcode.com/problems/construct-k-palindrome-strings/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1787 | 159 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`greedy`](https://leetcode.com/tag/greedy), [`counting`](https://leetcode.com/tag/counting)

**Companies:** `microsoft`, `bloomberg`, `google`, `uber`

## Description

Given a string `s` and an integer `k`, return `true` if you can use all the characters in `s` to construct **non-empty** `k` palindrome strings or `false` otherwise.

 

**Example 1:**

```

Input: s = &quot;annabelle&quot;, k = 2
Output: true
Explanation: You can construct two palindromes using all characters in s.
Some possible constructions &quot;anna&quot; + &quot;elble&quot;, &quot;anbna&quot; + &quot;elle&quot;, &quot;anellena&quot; + &quot;b&quot;

```

**Example 2:**

```

Input: s = &quot;leetcode&quot;, k = 3
Output: false
Explanation: It is impossible to construct 3 palindromes using all the characters of s.

```

**Example 3:**

```

Input: s = &quot;true&quot;, k = 4
Output: true
Explanation: The only possible solution is to put each character in a separate string.

```

 

**Constraints:**

	- `1 <= s.length <= 10^5`

	- `s` consists of lowercase English letters.

	- `1 <= k <= 10^5`

---

**Links:** [Submissions](https://leetcode.com/problems/construct-k-palindrome-strings/) | [Solutions](https://leetcode.com/problems/construct-k-palindrome-strings/)
