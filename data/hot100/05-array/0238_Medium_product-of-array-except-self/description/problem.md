# [238. Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 25232 | 1641 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`prefix-sum`](https://leetcode.com/tag/prefix-sum)

**Companies:** `amazon`, `google`, `microsoft`, `apple`, `yandex`, `bloomberg`, `paypal`, `zoho`, `thousandeyes`, `facebook`, `goldman-sachs`, `asana`, `adobe`, `nvidia`, `fractal-analytics`, `zs-associates`, `uber`, `intuit`, `warnermedia`, `flipkart`, `yahoo`, `oracle`, `turing`, `tekion`, `walmart-labs`, `salesforce`, `tiktok`, `accenture`, `ibm`, `disney`, `autodesk`, `sigmoid`, `infosys`, `linkedin`

## Description

Given an integer array `nums`, return *an array* `answer` *such that* `answer[i]` *is equal to the product of all the elements of* `nums` *except* `nums[i]`.

The product of any prefix or suffix of `nums` is **guaranteed** to fit in a **32-bit** integer.

You must write an algorithm that runs in `O(n)` time and without using the division operation.

 

**Example 1:**

```
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

```
**Example 2:**

```
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

```

 

**Constraints:**

	- `2 <= nums.length <= 10^5`

	- `-30 <= nums[i] <= 30`

	- The input is generated such that `answer[i]` is **guaranteed** to fit in a **32-bit** integer.

 

**Follow up:** Can you solve the problem in `O(1)` extra space complexity? (The output array **does not** count as extra space for space complexity analysis.)

---

**Links:** [Submissions](https://leetcode.com/problems/product-of-array-except-self/) | [Solutions](https://leetcode.com/problems/product-of-array-except-self/)
