# [1816. Truncate Sentence](https://leetcode.com/problems/truncate-sentence/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 1211 | 34 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string)

**Companies:** `bloomberg`

## Description

A **sentence** is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of **only** uppercase and lowercase English letters (no punctuation).

	- For example, `"Hello World"`, `"HELLO"`, and `"hello world hello world"` are all sentences.

You are given a sentence `s`​​​​​​ and an integer `k`​​​​​​. You want to **truncate** `s`​​​​​​ such that it contains only the **first** `k`​​​​​​ words. Return `s`​​​​*​​ after **truncating** it.*

 

**Example 1:**

```

Input: s = &quot;Hello how are you Contestant&quot;, k = 4
Output: &quot;Hello how are you&quot;
Explanation:
The words in s are [&quot;Hello&quot;, &quot;how&quot; &quot;are&quot;, &quot;you&quot;, &quot;Contestant&quot;].
The first 4 words are [&quot;Hello&quot;, &quot;how&quot;, &quot;are&quot;, &quot;you&quot;].
Hence, you should return &quot;Hello how are you&quot;.

```

**Example 2:**

```

Input: s = &quot;What is the solution to this problem&quot;, k = 4
Output: &quot;What is the solution&quot;
Explanation:
The words in s are [&quot;What&quot;, &quot;is&quot; &quot;the&quot;, &quot;solution&quot;, &quot;to&quot;, &quot;this&quot;, &quot;problem&quot;].
The first 4 words are [&quot;What&quot;, &quot;is&quot;, &quot;the&quot;, &quot;solution&quot;].
Hence, you should return &quot;What is the solution&quot;.
```

**Example 3:**

```

Input: s = &quot;chopper is not a tanuki&quot;, k = 5
Output: &quot;chopper is not a tanuki&quot;

```

 

**Constraints:**

	- `1 <= s.length <= 500`

	- `k` is in the range `[1, the number of words in s]`.

	- `s` consist of only lowercase and uppercase English letters and spaces.

	- The words in `s` are separated by a single space.

	- There are no leading or trailing spaces.

---

**Links:** [Submissions](https://leetcode.com/problems/truncate-sentence/) | [Solutions](https://leetcode.com/problems/truncate-sentence/)
