# [1570. Dot Product of Two Sparse Vectors](https://leetcode.com/problems/dot-product-of-two-sparse-vectors/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1306 | 170 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`two-pointers`](https://leetcode.com/tag/two-pointers), [`design`](https://leetcode.com/tag/design)

**Companies:** `facebook`, `bloomberg`, `amazon`, `nvidia`, `linkedin`, `tiktok`, `apple`, `microsoft`, `goldman-sachs`, `general-motors`

## Description

Given two sparse vectors, compute their dot product.

Implement class `SparseVector`:

	- `SparseVector(nums)` Initializes the object with the vector `nums`

	- `dotProduct(vec)` Compute the dot product between the instance of *SparseVector* and `vec`

A **sparse vector** is a vector that has mostly zero values, you should store the sparse vector **efficiently **and compute the dot product between two *SparseVector*.

**Follow up: **What if only one of the vectors is sparse?

 

**Example 1:**

```

Input: nums1 = [1,0,0,2,3], nums2 = [0,3,0,4,0]
Output: 8
Explanation: v1 = SparseVector(nums1) , v2 = SparseVector(nums2)
v1.dotProduct(v2) = 1*0 + 0*3 + 0*0 + 2*4 + 3*0 = 8

```

**Example 2:**

```

Input: nums1 = [0,1,0,0,0], nums2 = [0,0,0,0,2]
Output: 0
Explanation: v1 = SparseVector(nums1) , v2 = SparseVector(nums2)
v1.dotProduct(v2) = 0*0 + 1*0 + 0*0 + 0*0 + 0*2 = 0

```

**Example 3:**

```

Input: nums1 = [0,1,0,0,2,0,0], nums2 = [1,0,0,0,3,0,4]
Output: 6

```

 

**Constraints:**

	- `n == nums1.length == nums2.length`

	- `1 <= n <= 10^5`

	- `0 <= nums1[i], nums2[i] <= 100`

---

**Links:** [Submissions](https://leetcode.com/problems/dot-product-of-two-sparse-vectors/) | [Solutions](https://leetcode.com/problems/dot-product-of-two-sparse-vectors/)
