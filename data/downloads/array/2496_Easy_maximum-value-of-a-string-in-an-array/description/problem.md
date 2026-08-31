# [2496. Maximum Value of a String in an Array](https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 427 | 24 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string)


## Description

The **value** of an alphanumeric string can be defined as:

	- The **numeric** representation of the string in base `10`, if it comprises of digits **only**.

	- The **length** of the string, otherwise.

Given an array `strs` of alphanumeric strings, return *the **maximum value** of any string in *`strs`.

 

**Example 1:**

```

Input: strs = [&quot;alic3&quot;,&quot;bob&quot;,&quot;3&quot;,&quot;4&quot;,&quot;00000&quot;]
Output: 5
Explanation: 
- &quot;alic3&quot; consists of both letters and digits, so its value is its length, i.e. 5.
- &quot;bob&quot; consists only of letters, so its value is also its length, i.e. 3.
- &quot;3&quot; consists only of digits, so its value is its numeric equivalent, i.e. 3.
- &quot;4&quot; also consists only of digits, so its value is 4.
- &quot;00000&quot; consists only of digits, so its value is 0.
Hence, the maximum value is 5, of &quot;alic3&quot;.

```

**Example 2:**

```

Input: strs = [&quot;1&quot;,&quot;01&quot;,&quot;001&quot;,&quot;0001&quot;]
Output: 1
Explanation: 
Each string in the array has value 1. Hence, we return 1.

```

 

**Constraints:**

	- `1 <= strs.length <= 100`

	- `1 <= strs[i].length <= 9`

	- `strs[i]` consists of only lowercase English letters and digits.

---

**Links:** [Submissions](https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/) | [Solutions](https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/)
