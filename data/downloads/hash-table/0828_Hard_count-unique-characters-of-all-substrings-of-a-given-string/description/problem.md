# [828. Count Unique Characters of All Substrings of a Given String](https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 2237 | 255 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)

**Companies:** `amazon`, `microsoft`, `forusall`

## Description

Let's define a function `countUniqueChars(s)` that returns the number of unique characters in `s`.

	- For example, calling `countUniqueChars(s)` if `s = "LEETCODE"` then `"L"`, `"T"`, `"C"`, `"O"`, `"D"` are the unique characters since they appear only once in `s`, therefore `countUniqueChars(s) = 5`.

Given a string `s`, return the sum of `countUniqueChars(t)` where `t` is a substring of `s`. The test cases are generated such that the answer fits in a 32-bit integer.

Notice that some substrings can be repeated so in this case you have to count the repeated ones too.

 

**Example 1:**

```

Input: s = &quot;ABC&quot;
Output: 10
Explanation: All possible substrings are: &quot;A&quot;,&quot;B&quot;,&quot;C&quot;,&quot;AB&quot;,&quot;BC&quot; and &quot;ABC&quot;.
Every substring is composed with only unique letters.
Sum of lengths of all substring is 1 + 1 + 1 + 2 + 2 + 3 = 10

```

**Example 2:**

```

Input: s = &quot;ABA&quot;
Output: 8
Explanation: The same as example 1, except countUniqueChars(&quot;ABA&quot;) = 1.

```

**Example 3:**

```

Input: s = &quot;LEETCODE&quot;
Output: 92

```

 

**Constraints:**

	- `1 <= s.length <= 10^5`

	- `s` consists of uppercase English letters only.

---

**Links:** [Submissions](https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/) | [Solutions](https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/)
