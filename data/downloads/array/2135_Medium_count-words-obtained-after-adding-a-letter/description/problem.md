# [2135. Count Words Obtained After Adding a Letter](https://leetcode.com/problems/count-words-obtained-after-adding-a-letter/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 720 | 167 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation), [`sorting`](https://leetcode.com/tag/sorting)

**Companies:** `google`

## Description

You are given two **0-indexed** arrays of strings `startWords` and `targetWords`. Each string consists of **lowercase English letters** only.

For each string in `targetWords`, check if it is possible to choose a string from `startWords` and perform a **conversion operation** on it to be equal to that from `targetWords`.

The **conversion operation** is described in the following two steps:

	- **Append** any lowercase letter that is **not present** in the string to its end.

	
		For example, if the string is `"abc"`, the letters `'d'`, `'e'`, or `'y'` can be added to it, but not `'a'`. If `'d'` is added, the resulting string will be `"abcd"`.

	
	
	- **Rearrange** the letters of the new string in **any** arbitrary order.
	
		For example, `"abcd"` can be rearranged to `"acbd"`, `"bacd"`, `"cbda"`, and so on. Note that it can also be rearranged to `"abcd"` itself.

	
	

Return *the **number of strings** in *`targetWords`* that can be obtained by performing the operations on **any** string of *`startWords`.

**Note** that you will only be verifying if the string in `targetWords` can be obtained from a string in `startWords` by performing the operations. The strings in `startWords` **do not** actually change during this process.

 

**Example 1:**

```

Input: startWords = [&quot;ant&quot;,&quot;act&quot;,&quot;tack&quot;], targetWords = [&quot;tack&quot;,&quot;act&quot;,&quot;acti&quot;]
Output: 2
Explanation:
- In order to form targetWords[0] = &quot;tack&quot;, we use startWords[1] = &quot;act&quot;, append &#39;k&#39; to it, and rearrange &quot;actk&quot; to &quot;tack&quot;.
- There is no string in startWords that can be used to obtain targetWords[1] = &quot;act&quot;.
  Note that &quot;act&quot; does exist in startWords, but we must append one letter to the string before rearranging it.
- In order to form targetWords[2] = &quot;acti&quot;, we use startWords[1] = &quot;act&quot;, append &#39;i&#39; to it, and rearrange &quot;acti&quot; to &quot;acti&quot; itself.

```

**Example 2:**

```

Input: startWords = [&quot;ab&quot;,&quot;a&quot;], targetWords = [&quot;abc&quot;,&quot;abcd&quot;]
Output: 1
Explanation:
- In order to form targetWords[0] = &quot;abc&quot;, we use startWords[0] = &quot;ab&quot;, add &#39;c&#39; to it, and rearrange it to &quot;abc&quot;.
- There is no string in startWords that can be used to obtain targetWords[1] = &quot;abcd&quot;.

```

 

**Constraints:**

	- `1 <= startWords.length, targetWords.length <= 5 * 10^4`

	- `1 <= startWords[i].length, targetWords[j].length <= 26`

	- Each string of `startWords` and `targetWords` consists of lowercase English letters only.

	- No letter occurs more than once in any string of `startWords` or `targetWords`.

---

**Links:** [Submissions](https://leetcode.com/problems/count-words-obtained-after-adding-a-letter/) | [Solutions](https://leetcode.com/problems/count-words-obtained-after-adding-a-letter/)
