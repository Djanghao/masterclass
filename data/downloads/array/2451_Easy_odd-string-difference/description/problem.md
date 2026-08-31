# [2451. Odd String Difference](https://leetcode.com/problems/odd-string-difference/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 424 | 123 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string)

**Companies:** `salesforce`, `ibm`, `visa`

## Description

You are given an array of equal-length strings `words`. Assume that the length of each string is `n`.

Each string `words[i]` can be converted into a **difference integer array** `difference[i]` of length `n - 1` where `difference[i][j] = words[i][j+1] - words[i][j]` where `0 <= j <= n - 2`. Note that the difference between two letters is the difference between their **positions** in the alphabet i.e. the position of `'a'` is `0`, `'b'` is `1`, and `'z'` is `25`.

	- For example, for the string `"acb"`, the difference integer array is `[2 - 0, 1 - 2] = [2, -1]`.

All the strings in words have the same difference integer array, **except one**. You should find that string.

Return* the string in *`words`* that has different **difference integer array**.*

 

**Example 1:**

```

Input: words = [&quot;adc&quot;,&quot;wzy&quot;,&quot;abc&quot;]
Output: &quot;abc&quot;
Explanation: 
- The difference integer array of &quot;adc&quot; is [3 - 0, 2 - 3] = [3, -1].
- The difference integer array of &quot;wzy&quot; is [25 - 22, 24 - 25]= [3, -1].
- The difference integer array of &quot;abc&quot; is [1 - 0, 2 - 1] = [1, 1]. 
The odd array out is [1, 1], so we return the corresponding string, &quot;abc&quot;.

```

**Example 2:**

```

Input: words = [&quot;aaa&quot;,&quot;bob&quot;,&quot;ccc&quot;,&quot;ddd&quot;]
Output: &quot;bob&quot;
Explanation: All the integer arrays are [0, 0] except for &quot;bob&quot;, which corresponds to [13, -13].

```

 

**Constraints:**

	- `3 <= words.length <= 100`

	- `n == words[i].length`

	- `2 <= n <= 20`

	- `words[i]` consists of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/odd-string-difference/) | [Solutions](https://leetcode.com/problems/odd-string-difference/)
