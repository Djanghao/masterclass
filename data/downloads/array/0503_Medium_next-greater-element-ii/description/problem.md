# [503. Next Greater Element II](https://leetcode.com/problems/next-greater-element-ii/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 8908 | 229 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`stack`](https://leetcode.com/tag/stack), [`monotonic-stack`](https://leetcode.com/tag/monotonic-stack)

**Companies:** `amazon`, `microsoft`, `google`, `bloomberg`, `facebook`, `zoho`, `apple`, `tiktok`, `uber`, `intuit`, `morgan-stanley`, `goldman-sachs`, `sigmoid`

## Description

Given a circular integer array `nums` (i.e., the next element of `nums[nums.length - 1]` is `nums[0]`), return *the **next greater number** for every element in* `nums`.

The **next greater number** of a number `x` is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return `-1` for this number.

 

**Example 1:**

```

Input: nums = [1,2,1]
Output: [2,-1,2]
Explanation: The first 1&#39;s next greater number is 2; 
The number 2 can&#39;t find next greater number. 
The second 1&#39;s next greater number needs to search circularly, which is also 2.

```

**Example 2:**

```

Input: nums = [1,2,3,4,3]
Output: [2,3,4,-1,4]

```

 

**Constraints:**

	- `1 <= nums.length <= 10^4`

	- `-10^9 <= nums[i] <= 10^9`

---

**Links:** [Submissions](https://leetcode.com/problems/next-greater-element-ii/) | [Solutions](https://leetcode.com/problems/next-greater-element-ii/)
