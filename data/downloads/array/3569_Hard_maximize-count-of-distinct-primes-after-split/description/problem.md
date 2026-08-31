# [3569. Maximize Count of Distinct Primes After Split](https://leetcode.com/problems/maximize-count-of-distinct-primes-after-split/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 22 | 4 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`math`](https://leetcode.com/tag/math), [`segment-tree`](https://leetcode.com/tag/segment-tree), [`number-theory`](https://leetcode.com/tag/number-theory)


## Description

You are given an integer array `nums` having length `n` and a 2D integer array `queries` where `queries[i] = [idx, val]`.

For each query:

	- Update `nums[idx] = val`.

	- Choose an integer `k` with `1 st query, `nums = [2, 2, 3, 1, 2]`. Split `nums` into `[2]` and `[2, 3, 1, 2]`. `[2]` consists of 1 distinct prime and `[2, 3, 1, 2]` consists of 2 distinct primes. Hence, the answer for this query is `1 + 2 = 3`.

	- After 2nd query, `nums = [2, 2, 3, 3, 2]`. Split `nums` into `[2, 2, 3]` and `[3, 2]` with an answer of `2 + 2 = 4`.

	- The output is `[3, 4]`.

**Example 2:**

**Input:** nums = [2,1,4], queries = [[0,1]]

**Output:** [0]

**Explanation:**

	- Initially `nums = [2, 1, 4]`.

	- After 1st query, `nums = [1, 1, 4]`. There are no prime numbers in `nums`, hence the answer for this query is 0.

	- The output is `[0]`.

 

**Constraints:**

	- `2 <= n == nums.length <= 5 * 10^4`

	- `1 <= queries.length <= 5 * 10^4`

	- `1 <= nums[i] <= 10^5`

	- `0 <= queries[i][0] < nums.length`

	- `1 <= queries[i][1] <= 10^5`

---

**Links:** [Submissions](https://leetcode.com/problems/maximize-count-of-distinct-primes-after-split/) | [Solutions](https://leetcode.com/problems/maximize-count-of-distinct-primes-after-split/)
