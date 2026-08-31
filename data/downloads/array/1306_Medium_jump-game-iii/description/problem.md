# [1306. Jump Game III](https://leetcode.com/problems/jump-game-iii/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 4311 | 116 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`depth-first-search`](https://leetcode.com/tag/depth-first-search), [`breadth-first-search`](https://leetcode.com/tag/breadth-first-search)

**Companies:** `microsoft`, `amazon`, `pinterest`

## Description

Given an array of non-negative integers `arr`, you are initially positioned at `start` index of the array. When you are at index `i`, you can jump to `i + arr[i]` or `i - arr[i]`, check if you can reach **any** index with value 0.

Notice that you can not jump outside of the array at any time.

 

**Example 1:**

```

Input: arr = [4,2,3,0,3,1,2], start = 5
Output: true
Explanation: 
All possible ways to reach at index 3 with value 0 are: 
index 5 -&gt; index 4 -&gt; index 1 -&gt; index 3 
index 5 -&gt; index 6 -&gt; index 4 -&gt; index 1 -&gt; index 3 

```

**Example 2:**

```

Input: arr = [4,2,3,0,3,1,2], start = 0
Output: true 
Explanation: 
One possible way to reach at index 3 with value 0 is: 
index 0 -&gt; index 4 -&gt; index 1 -&gt; index 3

```

**Example 3:**

```

Input: arr = [3,0,2,1,2], start = 2
Output: false
Explanation: There is no way to reach at index 1 with value 0.

```

 

**Constraints:**

	- `1 <= arr.length <= 5 * 10^4`

	- `0 <= arr[i] < arr.length`

	- `0 <= start < arr.length`

---

**Links:** [Submissions](https://leetcode.com/problems/jump-game-iii/) | [Solutions](https://leetcode.com/problems/jump-game-iii/)
