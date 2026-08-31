# [3018. Maximum Number of Removal Queries That Can Be Processed I](https://leetcode.com/problems/maximum-number-of-removal-queries-that-can-be-processed-i/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 6 | 3 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)


## Description

You are given a **0-indexed** array `nums` and a **0-indexed** array `queries`.

You can do the following operation at the beginning **at most once**:

	- Replace `nums` with a subsequence of `nums`.

We start processing queries in the given order; for each query, we do the following:

	- If the first **and** the last element of `nums` is **less than** `queries[i]`, the processing of queries **ends**.

	- Otherwise, we choose either the first **or** the last element of `nums` if it is **greater than or equal to** `queries[i]`, and we **remove** the chosen element from `nums`.

Return *the **maximum** number of queries that can be processed by doing the operation optimally.*

 

**Example 1:**

```

Input: nums = [1,2,3,4,5], queries = [1,2,3,4,6]
Output: 4
Explanation: We don&#39;t do any operation and process the queries as follows:
1- We choose and remove nums[0] since 1 &lt;= 1, then nums becomes [2,3,4,5].
2- We choose and remove nums[0] since 2 &lt;= 2, then nums becomes [3,4,5].
3- We choose and remove nums[0] since 3 &lt;= 3, then nums becomes [4,5].
4- We choose and remove nums[0] since 4 &lt;= 4, then nums becomes [5].
5- We can not choose any elements from nums since they are not greater than or equal to 5.
Hence, the answer is 4.
It can be shown that we can&#39;t process more than 4 queries.

```

**Example 2:**

```

Input: nums = [2,3,2], queries = [2,2,3]
Output: 3
Explanation: We don&#39;t do any operation and process the queries as follows:
1- We choose and remove nums[0] since 2 &lt;= 2, then nums becomes [3,2].
2- We choose and remove nums[1] since 2 &lt;= 2, then nums becomes [3].
3- We choose and remove nums[0] since 3 &lt;= 3, then nums becomes [].
Hence, the answer is 3.
It can be shown that we can&#39;t process more than 3 queries.

```

**Example 3:**

```

Input: nums = [3,4,3], queries = [4,3,2]
Output: 2
Explanation: First we replace nums with the subsequence of nums [4,3].
Then we can process the queries as follows:
1- We choose and remove nums[0] since 4 &lt;= 4, then nums becomes [3].
2- We choose and remove nums[0] since 3 &lt;= 3, then nums becomes [].
3- We can not process any more queries since nums is empty.
Hence, the answer is 2.
It can be shown that we can&#39;t process more than 2 queries.

```

 

**Constraints:**

	- `1 <= nums.length <= 1000`

	- `1 <= queries.length <= 1000`

	- `1 <= nums[i], queries[i] <= 10^9`

---

**Links:** [Submissions](https://leetcode.com/problems/maximum-number-of-removal-queries-that-can-be-processed-i/) | [Solutions](https://leetcode.com/problems/maximum-number-of-removal-queries-that-can-be-processed-i/)
