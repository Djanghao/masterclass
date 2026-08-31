# [1494. Parallel Courses II](https://leetcode.com/problems/parallel-courses-ii/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 1119 | 77 |

**Tags:** [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation), [`graph`](https://leetcode.com/tag/graph), [`bitmask`](https://leetcode.com/tag/bitmask)

**Companies:** `tiktok`, `google`

## Description

You are given an integer `n`, which indicates that there are `n` courses labeled from `1` to `n`. You are also given an array `relations` where `relations[i] = [prevCourse_i, nextCourse_i]`, representing a prerequisite relationship between course `prevCourse_i` and course `nextCourse_i`: course `prevCourse_i` has to be taken before course `nextCourse_i`. Also, you are given the integer `k`.

In one semester, you can take **at most** `k` courses as long as you have taken all the prerequisites in the **previous** semesters for the courses you are taking.

Return *the **minimum** number of semesters needed to take all courses*. The testcases will be generated such that it is possible to take every course.

 

**Example 1:**

![image](./images/0.png)
```

Input: n = 4, relations = [[2,1],[3,1],[1,4]], k = 2
Output: 3
Explanation: The figure above represents the given graph.
In the first semester, you can take courses 2 and 3.
In the second semester, you can take course 1.
In the third semester, you can take course 4.

```

**Example 2:**

![image](./images/1.png)
```

Input: n = 5, relations = [[2,1],[3,1],[4,1],[1,5]], k = 2
Output: 4
Explanation: The figure above represents the given graph.
In the first semester, you can only take courses 2 and 3 since you cannot take more than two per semester.
In the second semester, you can take course 4.
In the third semester, you can take course 1.
In the fourth semester, you can take course 5.

```

 

**Constraints:**

	- `1 <= n <= 15`

	- `1 <= k <= n`

	- `0 <= relations.length <= n * (n-1) / 2`

	- `relations[i].length == 2`

	- `1 <= prevCourse_i, nextCourse_i <= n`

	- `prevCourse_i != nextCourse_i`

	- All the pairs `[prevCourse_i, nextCourse_i]` are **unique**.

	- The given graph is a directed acyclic graph.

---

**Links:** [Submissions](https://leetcode.com/problems/parallel-courses-ii/) | [Solutions](https://leetcode.com/problems/parallel-courses-ii/)
