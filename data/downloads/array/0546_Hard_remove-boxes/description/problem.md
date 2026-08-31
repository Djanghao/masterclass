# [546. Remove Boxes](https://leetcode.com/problems/remove-boxes/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 2434 | 136 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`memoization`](https://leetcode.com/tag/memoization)

**Companies:** `teradata`, `zeta`, `phonepe`, `google`, `bloomberg`, `capital-one`, `tencent`

## Description

You are given several `boxes` with different colors represented by different positive numbers.

You may experience several rounds to remove boxes until there is no box left. Each time you can choose some continuous boxes with the same color (i.e., composed of `k` boxes, `k >= 1`), remove them and get `k * k` points.

Return *the maximum points you can get*.

 

**Example 1:**

```

Input: boxes = [1,3,2,2,2,3,4,3,1]
Output: 23
Explanation:
[1, 3, 2, 2, 2, 3, 4, 3, 1] 
----&gt; [1, 3, 3, 4, 3, 1] (3*3=9 points) 
----&gt; [1, 3, 3, 3, 1] (1*1=1 points) 
----&gt; [1, 1] (3*3=9 points) 
----&gt; [] (2*2=4 points)

```

**Example 2:**

```

Input: boxes = [1,1,1]
Output: 9

```

**Example 3:**

```

Input: boxes = [1]
Output: 1

```

 

**Constraints:**

	- `1 <= boxes.length <= 100`

	- `1 <= boxes[i] <= 100`

---

**Links:** [Submissions](https://leetcode.com/problems/remove-boxes/) | [Solutions](https://leetcode.com/problems/remove-boxes/)
