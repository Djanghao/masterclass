# [3784. Minimum Deletion Cost to Make All Characters Equal](https://leetcode.com/problems/minimum-deletion-cost-to-make-all-characters-equal/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 38 | 4 |




## Description

You are given a string `s` of length `n` and an integer array `cost` of the same length, where `cost[i]` is the cost to **delete** the `i^th` character of `s`.

You may delete any number of characters from `s` (possibly none), such that the resulting string is **non-empty** and consists of **equal** characters.

Return an integer denoting the **minimum** total deletion cost required.

 

**Example 1:**

**Input:** s = "aabaac", cost = [1,2,3,4,1,10]

**Output:** 11

**Explanation:**

Deleting the characters at indices 0, 1, 2, 3, 4 results in the string `"c"`, which consists of equal characters, and the total cost is `cost[0] + cost[1] + cost[2] + cost[3] + cost[4] = 1 + 2 + 3 + 4 + 1 = 11`.

**Example 2:**

**Input:** s = "abc", cost = [10,5,8]

**Output:** 13

**Explanation:**

Deleting the characters at indices 1 and 2 results in the string `"a"`, which consists of equal characters, and the total cost is `cost[1] + cost[2] = 5 + 8 = 13`.

**Example 3:**

**Input:** s = "zzzzz", cost = [67,67,67,67,67]

**Output:** 0

**Explanation:**

All characters in `s` are equal, so the deletion cost is 0.

 

**Constraints:**

	- `n == s.length == cost.length`

	- `1 <= n <= 10^5`

	- `1 <= cost[i] <= 10^9`

	- `s` consists of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-deletion-cost-to-make-all-characters-equal/) | [Solutions](https://leetcode.com/problems/minimum-deletion-cost-to-make-all-characters-equal/)
