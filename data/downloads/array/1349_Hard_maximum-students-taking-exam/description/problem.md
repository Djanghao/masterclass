# [1349. Maximum Students Taking Exam](https://leetcode.com/problems/maximum-students-taking-exam/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 882 | 19 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation), [`matrix`](https://leetcode.com/tag/matrix), [`bitmask`](https://leetcode.com/tag/bitmask)

**Companies:** `google`, `sap`

## Description

Given a `m * n` matrix `seats`  that represent seats distributions in a classroom. If a seat is broken, it is denoted by `'#'` character otherwise it is denoted by a `'.'` character.

Students can see the answers of those sitting next to the left, right, upper left and upper right, but he cannot see the answers of the student sitting directly in front or behind him. Return the **maximum **number of students that can take the exam together without any cheating being possible.

Students must be placed in seats in good condition.

 

**Example 1:**

![image](./images/0.png)
```

Input: seats = [[&quot;#&quot;,&quot;.&quot;,&quot;#&quot;,&quot;#&quot;,&quot;.&quot;,&quot;#&quot;],
&nbsp;               [&quot;.&quot;,&quot;#&quot;,&quot;#&quot;,&quot;#&quot;,&quot;#&quot;,&quot;.&quot;],
&nbsp;               [&quot;#&quot;,&quot;.&quot;,&quot;#&quot;,&quot;#&quot;,&quot;.&quot;,&quot;#&quot;]]
Output: 4
Explanation: Teacher can place 4 students in available seats so they don&#39;t cheat on the exam. 

```

**Example 2:**

```

Input: seats = [[&quot;.&quot;,&quot;#&quot;],
&nbsp;               [&quot;#&quot;,&quot;#&quot;],
&nbsp;               [&quot;#&quot;,&quot;.&quot;],
&nbsp;               [&quot;#&quot;,&quot;#&quot;],
&nbsp;               [&quot;.&quot;,&quot;#&quot;]]
Output: 3
Explanation: Place all students in available seats. 


```

**Example 3:**

```

Input: seats = [[&quot;#&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;#&quot;],
&nbsp;               [&quot;.&quot;,&quot;#&quot;,&quot;.&quot;,&quot;#&quot;,&quot;.&quot;],
&nbsp;               [&quot;.&quot;,&quot;.&quot;,&quot;#&quot;,&quot;.&quot;,&quot;.&quot;],
&nbsp;               [&quot;.&quot;,&quot;#&quot;,&quot;.&quot;,&quot;#&quot;,&quot;.&quot;],
&nbsp;               [&quot;#&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;#&quot;]]
Output: 10
Explanation: Place students in available seats in column 1, 3 and 5.

```

 

**Constraints:**

	- `seats` contains only characters `'.' and``'#'.`

	- `m == seats.length`

	- `n == seats[i].length`

	- `1 <= m <= 8`

	- `1 <= n <= 8`

---

**Links:** [Submissions](https://leetcode.com/problems/maximum-students-taking-exam/) | [Solutions](https://leetcode.com/problems/maximum-students-taking-exam/)
