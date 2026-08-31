# [1451. Rearrange Words in a Sentence](https://leetcode.com/problems/rearrange-words-in-a-sentence/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 784 | 79 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`sorting`](https://leetcode.com/tag/sorting)

**Companies:** `microsoft`, `expedia`

## Description

Given a sentence `text` (A *sentence* is a string of space-separated words) in the following format:

	- First letter is in upper case.

	- Each word in `text` are separated by a single space.

Your task is to rearrange the words in text such that all words are rearranged in an increasing order of their lengths. If two words have the same length, arrange them in their original order.

Return the new text following the format shown above.

 

**Example 1:**

```

Input: text = &quot;Leetcode is cool&quot;
Output: &quot;Is cool leetcode&quot;
Explanation: There are 3 words, &quot;Leetcode&quot; of length 8, &quot;is&quot; of length 2 and &quot;cool&quot; of length 4.
Output is ordered by length and the new first word starts with capital letter.

```

**Example 2:**

```

Input: text = &quot;Keep calm and code on&quot;
Output: &quot;On and keep calm code&quot;
Explanation: Output is ordered as follows:
&quot;On&quot; 2 letters.
&quot;and&quot; 3 letters.
&quot;keep&quot; 4 letters in case of tie order by position in original text.
&quot;calm&quot; 4 letters.
&quot;code&quot; 4 letters.

```

**Example 3:**

```

Input: text = &quot;To be or not to be&quot;
Output: &quot;To be or to be not&quot;

```

 

**Constraints:**

	- `text` begins with a capital letter and then contains lowercase letters and single space between words.

	- `1 <= text.length <= 10^5`

---

**Links:** [Submissions](https://leetcode.com/problems/rearrange-words-in-a-sentence/) | [Solutions](https://leetcode.com/problems/rearrange-words-in-a-sentence/)
