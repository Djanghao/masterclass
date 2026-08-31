# [3703. Remove K-Balanced Substrings](https://leetcode.com/problems/remove-k-balanced-substrings/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 120 | 11 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`stack`](https://leetcode.com/tag/stack), [`simulation`](https://leetcode.com/tag/simulation)


## Description

You are given a string `s` consisting of `'('` and `')'`, and an integer `k`.

A **string** is **k-balanced** if it is **exactly** `k` **consecutive** `'('` followed by `k` **consecutive** `')'`, i.e., `'(' * k + ')' * k`.

For example, if `k = 3`, k-balanced is `"((()))"`.

You must **repeatedly** remove all **non-overlapping k-balanced substrings** from `s`, and then join the remaining parts. Continue this process until no k-balanced **substring** exists.

Return the final string after all possible removals.

 

​​​​​​​**Example 1:**

**Input:** s = "(())", k = 1

**Output:** ""

**Explanation:**

k-balanced substring is `"()"`

	
		
			Step
			Current `s`
			`k-balanced`
			Result `s`
		
	
	
		
			1
			`(())`
			`(())`
			`()`
		
		
			2
			`()`
			**`()`**
			Empty
		
	

Thus, the final string is `""`.

**Example 2:**

**Input:** s = "(()(", k = 1

**Output:** "(("

**Explanation:**

k-balanced substring is `"()"`

	
		
			Step
			Current `s`
			`k-balanced`
			Result `s`
		
	
	
		
			1
			`(()(`
			`(()(`
			`((`
		
		
			2
			`((`
			-
			`((`
		
	

Thus, the final string is `"(("`.

**Example 3:**

**Input:** s = "((()))()()()", k = 3

**Output:** "()()()"

**Explanation:**

k-balanced substring is `"((()))"`

	
		
			Step
			Current `s`
			`k-balanced`
			Result `s`
		
	
	
		
			1
			`((()))()()()`
			`((()))()()()`
			`()()()`
		
		
			2
			`()()()`
			-
			`()()()`
		
	

Thus, the final string is `"()()()"`.

 

**Constraints:**

	- `2 <= s.length <= 10^5`

	- `s` consists only of `'('` and `')'`.

	- `1 <= k <= s.length / 2`

---

**Links:** [Submissions](https://leetcode.com/problems/remove-k-balanced-substrings/) | [Solutions](https://leetcode.com/problems/remove-k-balanced-substrings/)
