# [1404. Number of Steps to Reduce a Number in Binary Representation to One](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1420 | 89 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation), [`simulation`](https://leetcode.com/tag/simulation)

**Companies:** `general-motors`, `microsoft`, `grab`, `google`, `amazon`

## Description

Given the binary representation of an integer as a string `s`, return *the number of steps to reduce it to *`1`* under the following rules*:

	- 
	
If the current number is even, you have to divide it by `2`.

	

	- 
	
If the current number is odd, you have to add `1` to it.

	

It is guaranteed that you can always reach one for all test cases.

 

**Example 1:**

```

Input: s = &quot;1101&quot;
Output: 6
Explanation: &quot;1101&quot; corressponds to number 13 in their decimal representation.
Step 1) 13 is odd, add 1 and obtain 14.&nbsp;
Step 2) 14 is even, divide by 2 and obtain 7.
Step 3) 7 is odd, add 1 and obtain 8.
Step 4) 8 is even, divide by 2 and obtain 4.&nbsp; 
Step 5) 4 is even, divide by 2 and obtain 2.&nbsp;
Step 6) 2 is even, divide by 2 and obtain 1.&nbsp; 

```

**Example 2:**

```

Input: s = &quot;10&quot;
Output: 1
Explanation: &quot;10&quot; corresponds to number 2 in their decimal representation.
Step 1) 2 is even, divide by 2 and obtain 1.&nbsp; 

```

**Example 3:**

```

Input: s = &quot;1&quot;
Output: 0

```

 

**Constraints:**

	- `1 <= s.length <= 500`

	- `s` consists of characters '0' or '1'

	- `s[0] == '1'`

---

**Links:** [Submissions](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/) | [Solutions](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/)
