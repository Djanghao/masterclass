# [2024. Maximize the Confusion of an Exam](https://leetcode.com/problems/maximize-the-confusion-of-an-exam/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 3057 | 53 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`binary-search`](https://leetcode.com/tag/binary-search), [`sliding-window`](https://leetcode.com/tag/sliding-window), [`prefix-sum`](https://leetcode.com/tag/prefix-sum)

**Companies:** `google`, `arcesium`

## Description

A teacher is writing a test with `n` true/false questions, with `'T'` denoting true and `'F'` denoting false. He wants to confuse the students by **maximizing** the number of **consecutive** questions with the **same** answer (multiple trues or multiple falses in a row).

You are given a string `answerKey`, where `answerKey[i]` is the original answer to the `i^th` question. In addition, you are given an integer `k`, the maximum number of times you may perform the following operation:

	- Change the answer key for any question to `'T'` or `'F'` (i.e., set `answerKey[i]` to `'T'` or `'F'`).

Return *the **maximum** number of consecutive* `'T'`s or `'F'`s *in the answer key after performing the operation at most* `k` *times*.

 

**Example 1:**

```

Input: answerKey = &quot;TTFF&quot;, k = 2
Output: 4
Explanation: We can replace both the &#39;F&#39;s with &#39;T&#39;s to make answerKey = &quot;TTTT&quot;.
There are four consecutive &#39;T&#39;s.

```

**Example 2:**

```

Input: answerKey = &quot;TFFT&quot;, k = 1
Output: 3
Explanation: We can replace the first &#39;T&#39; with an &#39;F&#39; to make answerKey = &quot;FFFT&quot;.
Alternatively, we can replace the second &#39;T&#39; with an &#39;F&#39; to make answerKey = &quot;TFFF&quot;.
In both cases, there are three consecutive &#39;F&#39;s.

```

**Example 3:**

```

Input: answerKey = &quot;TTFTTFTT&quot;, k = 1
Output: 5
Explanation: We can replace the first &#39;F&#39; to make answerKey = &quot;TTTTTFTT&quot;
Alternatively, we can replace the second &#39;F&#39; to make answerKey = &quot;TTFTTTTT&quot;. 
In both cases, there are five consecutive &#39;T&#39;s.

```

 

**Constraints:**

	- `n == answerKey.length`

	- `1 <= n <= 5 * 10^4`

	- `answerKey[i]` is either `'T'` or `'F'`

	- `1 <= k <= n`

---

**Links:** [Submissions](https://leetcode.com/problems/maximize-the-confusion-of-an-exam/) | [Solutions](https://leetcode.com/problems/maximize-the-confusion-of-an-exam/)
