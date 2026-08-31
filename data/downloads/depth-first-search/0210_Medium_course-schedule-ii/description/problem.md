# [210. Course Schedule II](https://leetcode.com/problems/course-schedule-ii/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 11752 | 374 |

**Tags:** [`depth-first-search`](https://leetcode.com/tag/depth-first-search), [`breadth-first-search`](https://leetcode.com/tag/breadth-first-search), [`graph`](https://leetcode.com/tag/graph), [`topological-sort`](https://leetcode.com/tag/topological-sort)

**Companies:** `amazon`, `roblox`, `microsoft`, `facebook`, `apple`, `bloomberg`, `netflix`, `tiktok`, `google`, `citadel`, `oracle`, `linkedin`, `snowflake`, `uber`, `snapchat`, `salesforce`, `anduril`, `goldman-sachs`, `flipkart`, `arista-networks`, `mongodb`, `qualcomm`, `remitly`, `intuit`, `doordash`, `walmart-labs`, `nvidia`, `ebay`, `yahoo`, `palantir-technologies`, `karat`, `zenefits`

## Description

There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [a_i, b_i]` indicates that you **must** take course `b_i` first if you want to take course `a_i`.

	- For example, the pair `[0, 1]`, indicates that to take course `0` you have to first take course `1`.

Return *the ordering of courses you should take to finish all courses*. If there are many valid answers, return **any** of them. If it is impossible to finish all courses, return **an empty array**.

 

**Example 1:**

```

Input: numCourses = 2, prerequisites = [[1,0]]
Output: [0,1]
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].

```

**Example 2:**

```

Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
Output: [0,2,1,3]
Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].

```

**Example 3:**

```

Input: numCourses = 1, prerequisites = []
Output: [0]

```

 

**Constraints:**

	- `1 <= numCourses <= 2000`

	- `0 <= prerequisites.length <= numCourses * (numCourses - 1)`

	- `prerequisites[i].length == 2`

	- `0 <= a_i, b_i < numCourses`

	- `a_i != b_i`

	- All the pairs `[a_i, b_i]` are **distinct**.

---

**Links:** [Submissions](https://leetcode.com/problems/course-schedule-ii/) | [Solutions](https://leetcode.com/problems/course-schedule-ii/)
