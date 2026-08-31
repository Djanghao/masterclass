# [972. Equal Rational Numbers](https://leetcode.com/problems/equal-rational-numbers/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 106 | 218 |

**Tags:** [`math`](https://leetcode.com/tag/math), [`string`](https://leetcode.com/tag/string)

**Companies:** `google`, `microsoft`

## Description

Given two strings `s` and `t`, each of which represents a non-negative rational number, return `true` if and only if they represent the same number. The strings may use parentheses to denote the repeating part of the rational number.

A **rational number** can be represented using up to three parts: ``, ``, and a ``. The number will be represented in one of the following three ways:

	- ``

	
		For example, `12`, `0`, and `123`.

	
	
	- ``
	
		For example, `0.5`, `1.`, `2.12`, and `123.0001`.

	
	
	- ``
	
		For example, `0.1(6)`, `1.(9)`, `123.00(1212)`.

	
	

The repeating portion of a decimal expansion is conventionally denoted within a pair of round brackets. For example:

	- `1/6 = 0.16666666... = 0.1(6) = 0.1666(6) = 0.166(66)`.

 

**Example 1:**

```

Input: s = &quot;0.(52)&quot;, t = &quot;0.5(25)&quot;
Output: true
Explanation: Because &quot;0.(52)&quot; represents 0.52525252..., and &quot;0.5(25)&quot; represents 0.52525252525..... , the strings represent the same number.

```

**Example 2:**

```

Input: s = &quot;0.1666(6)&quot;, t = &quot;0.166(66)&quot;
Output: true

```

**Example 3:**

```

Input: s = &quot;0.9(9)&quot;, t = &quot;1.&quot;
Output: true
Explanation: &quot;0.9(9)&quot; represents 0.999999999... repeated forever, which equals 1.  [See this link for an explanation.]
&quot;1.&quot; represents the number 1, which is formed correctly: (IntegerPart) = &quot;1&quot; and (NonRepeatingPart) = &quot;&quot;.

```

 

**Constraints:**

	- Each part consists only of digits.

	- The `` does not have leading zeros (except for the zero itself).

	- `1 .length .length .length <= 4`

---

**Links:** [Submissions](https://leetcode.com/problems/equal-rational-numbers/) | [Solutions](https://leetcode.com/problems/equal-rational-numbers/)
