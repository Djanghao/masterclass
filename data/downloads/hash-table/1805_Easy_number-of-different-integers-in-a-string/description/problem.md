# [1805. Number of Different Integers in a String](https://leetcode.com/problems/number-of-different-integers-in-a-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 657 | 106 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string)


## Description

You are given a string `word` that consists of digits and lowercase English letters.

You will replace every non-digit character with a space. For example, `"a123bc34d8ef34"` will become `" 123  34 8  34"`. Notice that you are left with some integers that are separated by at least one space: `"123"`, `"34"`, `"8"`, and `"34"`.

Return *the number of **different** integers after performing the replacement operations on *`word`.

Two integers are considered different if their decimal representations **without any leading zeros** are different.

 

**Example 1:**

```

Input: word = &quot;a123bc34d8ef34&quot;
Output: 3
Explanation: The three different integers are &quot;123&quot;, &quot;34&quot;, and &quot;8&quot;. Notice that &quot;34&quot; is only counted once.

```

**Example 2:**

```

Input: word = &quot;leet1234code234&quot;
Output: 2

```

**Example 3:**

```

Input: word = &quot;a1b01c001&quot;
Output: 1
Explanation: The three integers &quot;1&quot;, &quot;01&quot;, and &quot;001&quot; all represent the same integer because
the leading zeros are ignored when comparing their decimal values.

```

 

**Constraints:**

	- `1 <= word.length <= 1000`

	- `word` consists of digits and lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/number-of-different-integers-in-a-string/) | [Solutions](https://leetcode.com/problems/number-of-different-integers-in-a-string/)
