# [2114. Maximum Number of Words Found in Sentences](https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 1860 | 64 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string)

**Companies:** `google`, `amazon`

## Description

A **sentence** is a list of **words** that are separated by a single space with no leading or trailing spaces.

You are given an array of strings `sentences`, where each `sentences[i]` represents a single **sentence**.

Return *the **maximum number of words** that appear in a single sentence*.

 

**Example 1:**

```

Input: sentences = [&quot;alice and bob love leetcode&quot;, &quot;i think so too&quot;, &quot;this is great thanks very much&quot;]
Output: 6
Explanation: 
- The first sentence, &quot;alice and bob love leetcode&quot;, has 5 words in total.
- The second sentence, &quot;i think so too&quot;, has 4 words in total.
- The third sentence, &quot;this is great thanks very much&quot;, has 6 words in total.
Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.

```

**Example 2:**

```

Input: sentences = [&quot;please wait&quot;, &quot;continue to fight&quot;, &quot;continue to win&quot;]
Output: 3
Explanation: It is possible that multiple sentences contain the same number of words. 
In this example, the second and third sentences (underlined) have the same number of words.

```

 

**Constraints:**

	- `1 <= sentences.length <= 100`

	- `1 <= sentences[i].length <= 100`

	- `sentences[i]` consists only of lowercase English letters and `' '` only.

	- `sentences[i]` does not have leading or trailing spaces.

	- All the words in `sentences[i]` are separated by a single space.

---

**Links:** [Submissions](https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/) | [Solutions](https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/)
