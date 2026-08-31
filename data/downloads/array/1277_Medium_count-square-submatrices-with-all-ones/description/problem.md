# [1277. Count Square Submatrices with All Ones](https://leetcode.com/problems/count-square-submatrices-with-all-ones/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 5900 | 114 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`matrix`](https://leetcode.com/tag/matrix)

**Companies:** `amazon`, `google`, `facebook`, `microsoft`

## Description

Given a `m * n` matrix of ones and zeros, return how many **square** submatrices have all ones.

 

**Example 1:**

```

Input: matrix =
[
&nbsp; [0,1,1,1],
&nbsp; [1,1,1,1],
&nbsp; [0,1,1,1]
]
Output: 15
Explanation: 
There are 10 squares of side 1.
There are 4 squares of side 2.
There is  1 square of side 3.
Total number of squares = 10 + 4 + 1 = 15.

```

**Example 2:**

```

Input: matrix = 
[
  [1,0,1],
  [1,1,0],
  [1,1,0]
]
Output: 7
Explanation: 
There are 6 squares of side 1.  
There is 1 square of side 2. 
Total number of squares = 6 + 1 = 7.

```

 

**Constraints:**

	- `1 <= arr.length <= 300`

	- `1 <= arr[0].length <= 300`

	- `0 <= arr[i][j] <= 1`

---

**Links:** [Submissions](https://leetcode.com/problems/count-square-submatrices-with-all-ones/) | [Solutions](https://leetcode.com/problems/count-square-submatrices-with-all-ones/)
