# [1717. Maximum Score From Removing Substrings](https://leetcode.com/problems/maximum-score-from-removing-substrings/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1908 | 137 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`stack`](https://leetcode.com/tag/stack), [`greedy`](https://leetcode.com/tag/greedy)

**Companies:** `google`, `juspay`, `facebook`, `bloomberg`, `amazon`

## Description

You are given a string `s` and two integers `x` and `y`. You can perform two types of operations any number of times.

	- Remove substring `"ab"` and gain `x` points.

	
		For example, when removing `"ab"` from `"cabxbae"` it becomes `"cxbae"`.

	
	
	- Remove substring `"ba"` and gain `y` points.
	
		For example, when removing `"ba"` from `"cabxbae"` it becomes `"cabxe"`.

	
	

Return *the maximum points you can gain after applying the above operations on* `s`.

 

**Example 1:**

```

Input: s = &quot;cdbcbbaaabab&quot;, x = 4, y = 5
Output: 19
Explanation:
- Remove the &quot;ba&quot; underlined in &quot;cdbcbbaaabab&quot;. Now, s = &quot;cdbcbbaaab&quot; and 5 points are added to the score.
- Remove the &quot;ab&quot; underlined in &quot;cdbcbbaaab&quot;. Now, s = &quot;cdbcbbaa&quot; and 4 points are added to the score.
- Remove the &quot;ba&quot; underlined in &quot;cdbcbbaa&quot;. Now, s = &quot;cdbcba&quot; and 5 points are added to the score.
- Remove the &quot;ba&quot; underlined in &quot;cdbcba&quot;. Now, s = &quot;cdbc&quot; and 5 points are added to the score.
Total score = 5 + 4 + 5 + 5 = 19.
```

**Example 2:**

```

Input: s = &quot;aabbaaxybbaabb&quot;, x = 5, y = 4
Output: 20

```

 

**Constraints:**

	- `1 <= s.length <= 10^5`

	- `1 <= x, y <= 10^4`

	- `s` consists of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/maximum-score-from-removing-substrings/) | [Solutions](https://leetcode.com/problems/maximum-score-from-removing-substrings/)
