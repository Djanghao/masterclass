# [682. Baseball Game](https://leetcode.com/problems/baseball-game/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 3253 | 1959 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`stack`](https://leetcode.com/tag/stack), [`simulation`](https://leetcode.com/tag/simulation)

**Companies:** `google`, `facebook`, `microsoft`, `turing`, `amazon`

## Description

You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

You are given a list of strings `operations`, where `operations[i]` is the `i^th` operation you must apply to the record and is one of the following:

	- An integer `x`.

	
		Record a new score of `x`.

	
	
	- `'+'`.
	
		Record a new score that is the sum of the previous two scores.

	
	
	- `'D'`.
	
		Record a new score that is the double of the previous score.

	
	
	- `'C'`.
	
		Invalidate the previous score, removing it from the record.

	
	

Return *the sum of all the scores on the record after applying all the operations*.

The test cases are generated such that the answer and all intermediate calculations fit in a **32-bit** integer and that all operations are valid.

 

**Example 1:**

```

Input: ops = [&quot;5&quot;,&quot;2&quot;,&quot;C&quot;,&quot;D&quot;,&quot;+&quot;]
Output: 30
Explanation:
&quot;5&quot; - Add 5 to the record, record is now [5].
&quot;2&quot; - Add 2 to the record, record is now [5, 2].
&quot;C&quot; - Invalidate and remove the previous score, record is now [5].
&quot;D&quot; - Add 2 * 5 = 10 to the record, record is now [5, 10].
&quot;+&quot; - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
The total sum is 5 + 10 + 15 = 30.

```

**Example 2:**

```

Input: ops = [&quot;5&quot;,&quot;-2&quot;,&quot;4&quot;,&quot;C&quot;,&quot;D&quot;,&quot;9&quot;,&quot;+&quot;,&quot;+&quot;]
Output: 27
Explanation:
&quot;5&quot; - Add 5 to the record, record is now [5].
&quot;-2&quot; - Add -2 to the record, record is now [5, -2].
&quot;4&quot; - Add 4 to the record, record is now [5, -2, 4].
&quot;C&quot; - Invalidate and remove the previous score, record is now [5, -2].
&quot;D&quot; - Add 2 * -2 = -4 to the record, record is now [5, -2, -4].
&quot;9&quot; - Add 9 to the record, record is now [5, -2, -4, 9].
&quot;+&quot; - Add -4 + 9 = 5 to the record, record is now [5, -2, -4, 9, 5].
&quot;+&quot; - Add 9 + 5 = 14 to the record, record is now [5, -2, -4, 9, 5, 14].
The total sum is 5 + -2 + -4 + 9 + 5 + 14 = 27.

```

**Example 3:**

```

Input: ops = [&quot;1&quot;,&quot;C&quot;]
Output: 0
Explanation:
&quot;1&quot; - Add 1 to the record, record is now [1].
&quot;C&quot; - Invalidate and remove the previous score, record is now [].
Since the record is empty, the total sum is 0.

```

 

**Constraints:**

	- `1 <= operations.length <= 1000`

	- `operations[i]` is `"C"`, `"D"`, `"+"`, or a string representing an integer in the range `[-3 * 10^4, 3 * 10^4]`.

	- For operation `"+"`, there will always be at least two previous scores on the record.

	- For operations `"C"` and `"D"`, there will always be at least one previous score on the record.

---

**Links:** [Submissions](https://leetcode.com/problems/baseball-game/) | [Solutions](https://leetcode.com/problems/baseball-game/)
