# [2697. Lexicographically Smallest Palindrome](https://leetcode.com/problems/lexicographically-smallest-palindrome/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 402 | 28 |

**Tags:** [`two-pointers`](https://leetcode.com/tag/two-pointers), [`string`](https://leetcode.com/tag/string), [`greedy`](https://leetcode.com/tag/greedy)

**Companies:** `amazon`, `mathworks`

## Description

You are given a string s consisting of **lowercase English letters**, and you are allowed to perform operations on it. In one operation, you can **replace** a character in s with another lowercase English letter.

Your task is to make s a **palindrome** with the **minimum** **number** **of operations** possible. If there are **multiple palindromes** that can be made using the **minimum** number of operations, make the **lexicographically smallest** one.

A string `a` is lexicographically smaller than a string `b` (of the same length) if in the first position where `a` and `b` differ, string `a` has a letter that appears earlier in the alphabet than the corresponding letter in `b`.

Return *the resulting palindrome string.*

 

**Example 1:**

```

Input: s = &quot;egcfe&quot;
Output: &quot;efcfe&quot;
Explanation: The minimum number of operations to make &quot;egcfe&quot; a palindrome is 1, and the lexicographically smallest palindrome string we can get by modifying one character is &quot;efcfe&quot;, by changing &#39;g&#39;.

```

**Example 2:**

```

Input: s = &quot;abcd&quot;
Output: &quot;abba&quot;
Explanation: The minimum number of operations to make &quot;abcd&quot; a palindrome is 2, and the lexicographically smallest palindrome string we can get by modifying two characters is &quot;abba&quot;.

```

**Example 3:**

```

Input: s = &quot;seven&quot;
Output: &quot;neven&quot;
Explanation: The minimum number of operations to make &quot;seven&quot; a palindrome is 1, and the lexicographically smallest palindrome string we can get by modifying one character is &quot;neven&quot;.

```

 

**Constraints:**

	- `1 .

---

**Links:** [Submissions](https://leetcode.com/problems/lexicographically-smallest-palindrome/) | [Solutions](https://leetcode.com/problems/lexicographically-smallest-palindrome/)
