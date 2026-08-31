# [818. Race Car](https://leetcode.com/problems/race-car/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 2009 | 190 |

**Tags:** [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)

**Companies:** `google`, `anduril`, `turing`, `amazon`

## Description

Your car starts at position `0` and speed `+1` on an infinite number line. Your car can go into negative positions. Your car drives automatically according to a sequence of instructions `'A'` (accelerate) and `'R'` (reverse):

	- When you get an instruction `'A'`, your car does the following:

	
		`position += speed`

		- `speed *= 2`

	
	
	- When you get an instruction `'R'`, your car does the following:
	
		If your speed is positive then `speed = -1`

		- otherwise `speed = 1`

	
	Your position stays the same.

For example, after commands `"AAR"`, your car goes to positions `0 --> 1 --> 3 --> 3`, and your speed goes to `1 --> 2 --> 4 --> -1`.

Given a target position `target`, return *the length of the shortest sequence of instructions to get there*.

 

**Example 1:**

```

Input: target = 3
Output: 2
Explanation: 
The shortest instruction sequence is &quot;AA&quot;.
Your position goes from 0 --&gt; 1 --&gt; 3.

```

**Example 2:**

```

Input: target = 6
Output: 5
Explanation: 
The shortest instruction sequence is &quot;AAARA&quot;.
Your position goes from 0 --&gt; 1 --&gt; 3 --&gt; 7 --&gt; 7 --&gt; 6.

```

 

**Constraints:**

	- `1 <= target <= 10^4`

---

**Links:** [Submissions](https://leetcode.com/problems/race-car/) | [Solutions](https://leetcode.com/problems/race-car/)
