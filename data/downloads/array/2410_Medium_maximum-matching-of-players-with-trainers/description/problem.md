# [2410. Maximum Matching of Players With Trainers](https://leetcode.com/problems/maximum-matching-of-players-with-trainers/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 901 | 33 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`two-pointers`](https://leetcode.com/tag/two-pointers), [`greedy`](https://leetcode.com/tag/greedy), [`sorting`](https://leetcode.com/tag/sorting)

**Companies:** `google`, `facebook`, `amazon`

## Description

You are given a **0-indexed** integer array `players`, where `players[i]` represents the **ability** of the `i^th` player. You are also given a **0-indexed** integer array `trainers`, where `trainers[j]` represents the **training capacity **of the `j^th` trainer.

The `i^th` player can **match** with the `j^th` trainer if the player's ability is **less than or equal to** the trainer's training capacity. Additionally, the `i^th` player can be matched with at most one trainer, and the `j^th` trainer can be matched with at most one player.

Return *the **maximum** number of matchings between *`players`* and *`trainers`* that satisfy these conditions.*

 

**Example 1:**

```

Input: players = [4,7,9], trainers = [8,2,5,8]
Output: 2
Explanation:
One of the ways we can form two matchings is as follows:
- players[0] can be matched with trainers[0] since 4 &lt;= 8.
- players[1] can be matched with trainers[3] since 7 &lt;= 8.
It can be proven that 2 is the maximum number of matchings that can be formed.

```

**Example 2:**

```

Input: players = [1,1,1], trainers = [10]
Output: 1
Explanation:
The trainer can be matched with any of the 3 players.
Each player can only be matched with one trainer, so the maximum answer is 1.

```

 

**Constraints:**

	- `1  445: Assign Cookies.

---

**Links:** [Submissions](https://leetcode.com/problems/maximum-matching-of-players-with-trainers/) | [Solutions](https://leetcode.com/problems/maximum-matching-of-players-with-trainers/)
