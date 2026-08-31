# [2957. Remove Adjacent Almost-Equal Characters](https://leetcode.com/problems/remove-adjacent-almost-equal-characters/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 198 | 25 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`greedy`](https://leetcode.com/tag/greedy)

**Companies:** `salesforce`

## Description

You are given a **0-indexed** string `word`.

In one operation, you can pick any index `i` of `word` and change `word[i]` to any lowercase English letter.

Return *the **minimum** number of operations needed to remove all adjacent **almost-equal** characters from* `word`.

Two characters `a` and `b` are **almost-equal** if `a == b` or `a` and `b` are adjacent in the alphabet.

 

**Example 1:**

```

Input: word = &quot;aaaaa&quot;
Output: 2
Explanation: We can change word into &quot;acaca&quot; which does not have any adjacent almost-equal characters.
It can be shown that the minimum number of operations needed to remove all adjacent almost-equal characters from word is 2.

```

**Example 2:**

```

Input: word = &quot;abddez&quot;
Output: 2
Explanation: We can change word into &quot;ybdoez&quot; which does not have any adjacent almost-equal characters.
It can be shown that the minimum number of operations needed to remove all adjacent almost-equal characters from word is 2.
```

**Example 3:**

```

Input: word = &quot;zyxyxyz&quot;
Output: 3
Explanation: We can change word into &quot;zaxaxaz&quot; which does not have any adjacent almost-equal characters. 
It can be shown that the minimum number of operations needed to remove all adjacent almost-equal characters from word is 3.

```

 

**Constraints:**

	- `1 <= word.length <= 100`

	- `word` consists only of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/remove-adjacent-almost-equal-characters/) | [Solutions](https://leetcode.com/problems/remove-adjacent-almost-equal-characters/)
