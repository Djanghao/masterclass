# [2030. Smallest K-Length Subsequence With Occurrences of a Letter](https://leetcode.com/problems/smallest-k-length-subsequence-with-occurrences-of-a-letter/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 510 | 15 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`stack`](https://leetcode.com/tag/stack), [`greedy`](https://leetcode.com/tag/greedy), [`monotonic-stack`](https://leetcode.com/tag/monotonic-stack)

**Companies:** `deutsche-bank`

## Description

You are given a string `s`, an integer `k`, a letter `letter`, and an integer `repetition`.

Return *the **lexicographically smallest** subsequence of* `s`* of length* `k` *that has the letter* `letter` *appear **at least*** `repetition` *times*. The test cases are generated so that the `letter` appears in `s` **at least** `repetition` times.

A **subsequence** is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.

A string `a` is **lexicographically smaller** than a string `b` if in the first position where `a` and `b` differ, string `a` has a letter that appears earlier in the alphabet than the corresponding letter in `b`.

 

**Example 1:**

```

Input: s = &quot;leet&quot;, k = 3, letter = &quot;e&quot;, repetition = 1
Output: &quot;eet&quot;
Explanation: There are four subsequences of length 3 that have the letter &#39;e&#39; appear at least 1 time:
- &quot;lee&quot; (from &quot;leet&quot;)
- &quot;let&quot; (from &quot;leet&quot;)
- &quot;let&quot; (from &quot;leet&quot;)
- &quot;eet&quot; (from &quot;leet&quot;)
The lexicographically smallest subsequence among them is &quot;eet&quot;.

```

**Example 2:**

![image](./images/0.png)
```

Input: s = &quot;leetcode&quot;, k = 4, letter = &quot;e&quot;, repetition = 2
Output: &quot;ecde&quot;
Explanation: &quot;ecde&quot; is the lexicographically smallest subsequence of length 4 that has the letter &quot;e&quot; appear at least 2 times.

```

**Example 3:**

```

Input: s = &quot;bb&quot;, k = 2, letter = &quot;b&quot;, repetition = 2
Output: &quot;bb&quot;
Explanation: &quot;bb&quot; is the only subsequence of length 2 that has the letter &quot;b&quot; appear at least 2 times.

```

 

**Constraints:**

	- `1 <= repetition <= k <= s.length <= 5 * 10^4`

	- `s` consists of lowercase English letters.

	- `letter` is a lowercase English letter, and appears in `s` at least `repetition` times.

---

**Links:** [Submissions](https://leetcode.com/problems/smallest-k-length-subsequence-with-occurrences-of-a-letter/) | [Solutions](https://leetcode.com/problems/smallest-k-length-subsequence-with-occurrences-of-a-letter/)
