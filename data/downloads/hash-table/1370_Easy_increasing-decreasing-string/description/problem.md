# [1370. Increasing Decreasing String](https://leetcode.com/problems/increasing-decreasing-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 835 | 878 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`counting`](https://leetcode.com/tag/counting)

**Companies:** `google`, `akuna-capital`

## Description

You are given a string `s`. Reorder the string using the following algorithm:

	- Remove the **smallest** character from `s` and **append** it to the result.

	- Remove the **smallest** character from `s` that is greater than the last appended character, and **append** it to the result.

	- Repeat step 2 until no more characters can be removed.

	- Remove the **largest** character from `s` and **append** it to the result.

	- Remove the **largest** character from `s` that is smaller than the last appended character, and **append** it to the result.

	- Repeat step 5 until no more characters can be removed.

	- Repeat steps 1 through 6 until all characters from `s` have been removed.

If the smallest or largest character appears more than once, you may choose any occurrence to append to the result.

Return the resulting string after reordering `s` using this algorithm.

 

**Example 1:**

```

Input: s = &quot;aaaabbbbcccc&quot;
Output: &quot;abccbaabccba&quot;
Explanation: After steps 1, 2 and 3 of the first iteration, result = &quot;abc&quot;
After steps 4, 5 and 6 of the first iteration, result = &quot;abccba&quot;
First iteration is done. Now s = &quot;aabbcc&quot; and we go back to step 1
After steps 1, 2 and 3 of the second iteration, result = &quot;abccbaabc&quot;
After steps 4, 5 and 6 of the second iteration, result = &quot;abccbaabccba&quot;

```

**Example 2:**

```

Input: s = &quot;rat&quot;
Output: &quot;art&quot;
Explanation: The word &quot;rat&quot; becomes &quot;art&quot; after re-ordering it with the mentioned algorithm.

```

 

**Constraints:**

	- `1 <= s.length <= 500`

	- `s` consists of only lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/increasing-decreasing-string/) | [Solutions](https://leetcode.com/problems/increasing-decreasing-string/)
