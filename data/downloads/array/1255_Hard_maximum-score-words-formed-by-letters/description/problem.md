# [1255. Maximum Score Words Formed by Letters](https://leetcode.com/problems/maximum-score-words-formed-by-letters/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 1839 | 119 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`backtracking`](https://leetcode.com/tag/backtracking), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation), [`counting`](https://leetcode.com/tag/counting), [`bitmask`](https://leetcode.com/tag/bitmask)

**Companies:** `google`, `amazon`, `infosys`

## Description

Given a list of `words`, list of  single `letters` (might be repeating) and `score` of every character.

Return the maximum score of **any** valid set of words formed by using the given letters (`words[i]` cannot be used two or more times).

It is not necessary to use all characters in `letters` and each letter can only be used once. Score of letters `'a'`, `'b'`, `'c'`, ... ,`'z'` is given by `score[0]`, `score[1]`, ... , `score[25]` respectively.

 

**Example 1:**

```

Input: words = [&quot;dog&quot;,&quot;cat&quot;,&quot;dad&quot;,&quot;good&quot;], letters = [&quot;a&quot;,&quot;a&quot;,&quot;c&quot;,&quot;d&quot;,&quot;d&quot;,&quot;d&quot;,&quot;g&quot;,&quot;o&quot;,&quot;o&quot;], score = [1,0,9,5,0,0,3,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0]
Output: 23
Explanation:
Score  a=1, c=9, d=5, g=3, o=2
Given letters, we can form the words &quot;dad&quot; (5+1+5) and &quot;good&quot; (3+2+2+5) with a score of 23.
Words &quot;dad&quot; and &quot;dog&quot; only get a score of 21.
```

**Example 2:**

```

Input: words = [&quot;xxxz&quot;,&quot;ax&quot;,&quot;bx&quot;,&quot;cx&quot;], letters = [&quot;z&quot;,&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;x&quot;,&quot;x&quot;,&quot;x&quot;], score = [4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,10]
Output: 27
Explanation:
Score  a=4, b=4, c=4, x=5, z=10
Given letters, we can form the words &quot;ax&quot; (4+5), &quot;bx&quot; (4+5) and &quot;cx&quot; (4+5) with a score of 27.
Word &quot;xxxz&quot; only get a score of 25.
```

**Example 3:**

```

Input: words = [&quot;leetcode&quot;], letters = [&quot;l&quot;,&quot;e&quot;,&quot;t&quot;,&quot;c&quot;,&quot;o&quot;,&quot;d&quot;], score = [0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0]
Output: 0
Explanation:
Letter &quot;e&quot; can only be used once.
```

 

**Constraints:**

	- `1 <= words.length <= 14`

	- `1 <= words[i].length <= 15`

	- `1 <= letters.length <= 100`

	- `letters[i].length == 1`

	- `score.length == 26`

	- `0 <= score[i] <= 10`

	- `words[i]`, `letters[i]` contains only lower case English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/maximum-score-words-formed-by-letters/) | [Solutions](https://leetcode.com/problems/maximum-score-words-formed-by-letters/)
