# [2085. Count Common Words With One Occurrence](https://leetcode.com/problems/count-common-words-with-one-occurrence/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 900 | 21 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`counting`](https://leetcode.com/tag/counting)

**Companies:** `jane-street`

## Description

Given two string arrays `words1` and `words2`, return *the number of strings that appear **exactly once** in each of the two arrays.*

 

**Example 1:**

```

Input: words1 = [&quot;leetcode&quot;,&quot;is&quot;,&quot;amazing&quot;,&quot;as&quot;,&quot;is&quot;], words2 = [&quot;amazing&quot;,&quot;leetcode&quot;,&quot;is&quot;]
Output: 2
Explanation:
- &quot;leetcode&quot; appears exactly once in each of the two arrays. We count this string.
- &quot;amazing&quot; appears exactly once in each of the two arrays. We count this string.
- &quot;is&quot; appears in each of the two arrays, but there are 2 occurrences of it in words1. We do not count this string.
- &quot;as&quot; appears once in words1, but does not appear in words2. We do not count this string.
Thus, there are 2 strings that appear exactly once in each of the two arrays.

```

**Example 2:**

```

Input: words1 = [&quot;b&quot;,&quot;bb&quot;,&quot;bbb&quot;], words2 = [&quot;a&quot;,&quot;aa&quot;,&quot;aaa&quot;]
Output: 0
Explanation: There are no strings that appear in each of the two arrays.

```

**Example 3:**

```

Input: words1 = [&quot;a&quot;,&quot;ab&quot;], words2 = [&quot;a&quot;,&quot;a&quot;,&quot;a&quot;,&quot;ab&quot;]
Output: 1
Explanation: The only string that appears exactly once in each of the two arrays is &quot;ab&quot;.

```

 

**Constraints:**

	- `1 <= words1.length, words2.length <= 1000`

	- `1 <= words1[i].length, words2[j].length <= 30`

	- `words1[i]` and `words2[j]` consists only of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/count-common-words-with-one-occurrence/) | [Solutions](https://leetcode.com/problems/count-common-words-with-one-occurrence/)
