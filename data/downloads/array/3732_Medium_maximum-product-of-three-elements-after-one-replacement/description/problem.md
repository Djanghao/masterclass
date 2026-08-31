# [3732. Maximum Product of Three Elements After One Replacement](https://leetcode.com/problems/maximum-product-of-three-elements-after-one-replacement/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 70 | 7 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`math`](https://leetcode.com/tag/math), [`greedy`](https://leetcode.com/tag/greedy), [`sorting`](https://leetcode.com/tag/sorting)


## Description

You are given an integer array `nums`.

You **must** replace **exactly one** element in the array with **any** integer value in the range `[-10^5, 10^5]` (inclusive).

After performing this single replacement, determine the **maximum possible product** of **any three** elements at **distinct indices** from the modified array.

Return an integer denoting the **maximum product** achievable.

 

**Example 1:**

**Input:** nums = [-5,7,0]

**Output:** 3500000

**Explanation:**

Replacing 0 with -105 gives the array `[-5, 7, -10^5]`, which has a product `(-5) * 7 * (-10^5) = 3500000`. The maximum product is 3500000.

**Example 2:**

**Input:** nums = [-4,-2,-1,-3]

**Output:** 1200000

**Explanation:**

Two ways to achieve the maximum product include:

	- `[-4, -2, -3]` &rarr; replace -2 with 105 &rarr; product = `(-4) * 10^5 * (-3) = 1200000`.

	- `[-4, -1, -3]` &rarr; replace -1 with 105 &rarr; product = `(-4) * 10^5 * (-3) = 1200000`.

The maximum product is 1200000.

**Example 3:**

**Input:** nums = [0,10,0]

**Output:** 0

**Explanation:**

There is no way to replace an element with another integer and not have a 0 in the array. Hence, the product of all three elements will always be 0, and the maximum product is 0.

 

**Constraints:**

	- `3 <= nums.length <= 10^5`

	- `-10^5 <= nums[i] <= 10^5`

---

**Links:** [Submissions](https://leetcode.com/problems/maximum-product-of-three-elements-after-one-replacement/) | [Solutions](https://leetcode.com/problems/maximum-product-of-three-elements-after-one-replacement/)
