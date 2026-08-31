# [135. Candy](https://leetcode.com/problems/candy/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 9146 | 840 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`greedy`](https://leetcode.com/tag/greedy)

**Companies:** `google`, `amazon`, `bloomberg`, `microsoft`, `facebook`, `goldman-sachs`, `adobe`, `phonepe`, `tiktok`, `flipkart`, `salesforce`, `oracle`, `de-shaw`, `roku`, `urban-company`

## Description

There are `n` children standing in a line. Each child is assigned a rating value given in the integer array `ratings`.

You are giving candies to these children subjected to the following requirements:

	- Each child must have at least one candy.

	- Children with a higher rating get more candies than their neighbors.

Return *the minimum number of candies you need to have to distribute the candies to the children*.

 

**Example 1:**

```

Input: ratings = [1,0,2]
Output: 5
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.

```

**Example 2:**

```

Input: ratings = [1,2,2]
Output: 4
Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
The third child gets 1 candy because it satisfies the above two conditions.

```

 

**Constraints:**

	- `n == ratings.length`

	- `1 <= n <= 2 * 10^4`

	- `0 <= ratings[i] <= 2 * 10^4`

---

**Links:** [Submissions](https://leetcode.com/problems/candy/) | [Solutions](https://leetcode.com/problems/candy/)
