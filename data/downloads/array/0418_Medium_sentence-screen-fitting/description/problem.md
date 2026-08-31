# [418. Sentence Screen Fitting](https://leetcode.com/problems/sentence-screen-fitting/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1137 | 543 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)

**Companies:** `google`

## Description

Given a `rows x cols` screen and a `sentence` represented as a list of strings, return *the number of times the given sentence can be fitted on the screen*.

The order of words in the sentence must remain unchanged, and a word cannot be split into two lines. A single space must separate two consecutive words in a line.

 

**Example 1:**

```

Input: sentence = [&quot;hello&quot;,&quot;world&quot;], rows = 2, cols = 8
Output: 1
Explanation:
hello---
world---
The character &#39;-&#39; signifies an empty space on the screen.

```

**Example 2:**

```

Input: sentence = [&quot;a&quot;, &quot;bcd&quot;, &quot;e&quot;], rows = 3, cols = 6
Output: 2
Explanation:
a-bcd- 
e-a---
bcd-e-
The character &#39;-&#39; signifies an empty space on the screen.

```

**Example 3:**

```

Input: sentence = [&quot;i&quot;,&quot;had&quot;,&quot;apple&quot;,&quot;pie&quot;], rows = 4, cols = 5
Output: 1
Explanation:
i-had
apple
pie-i
had--
The character &#39;-&#39; signifies an empty space on the screen.

```

 

**Constraints:**

	- `1 <= sentence.length <= 100`

	- `1 <= sentence[i].length <= 10`

	- `sentence[i]` consists of lowercase English letters.

	- `1 <= rows, cols <= 2 * 10^4`

---

**Links:** [Submissions](https://leetcode.com/problems/sentence-screen-fitting/) | [Solutions](https://leetcode.com/problems/sentence-screen-fitting/)
