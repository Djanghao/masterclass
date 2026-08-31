# [3174. Clear Digits](https://leetcode.com/problems/clear-digits/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 675 | 26 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`stack`](https://leetcode.com/tag/stack), [`simulation`](https://leetcode.com/tag/simulation)

**Companies:** `google`, `facebook`, `flexera`

## Description

You are given a string `s`.

Your task is to remove **all** digits by doing this operation repeatedly:

	- Delete the *first* digit and the **closest** non-digit character to its *left*.

Return the resulting string after removing all digits.

**Note** that the operation *cannot* be performed on a digit that does not have any non-digit character to its left.

 

**Example 1:**

**Input:** s = "abc"

**Output:** "abc"

**Explanation:**

There is no digit in the string.

**Example 2:**

**Input:** s = "cb34"

**Output:** ""

**Explanation:**

First, we apply the operation on `s[2]`, and `s` becomes `"c4"`.

Then we apply the operation on `s[1]`, and `s` becomes `""`.

 

**Constraints:**

	- `1 <= s.length <= 100`

	- `s` consists only of lowercase English letters and digits.

	- The input is generated such that it is possible to delete all digits.

---

**Links:** [Submissions](https://leetcode.com/problems/clear-digits/) | [Solutions](https://leetcode.com/problems/clear-digits/)
