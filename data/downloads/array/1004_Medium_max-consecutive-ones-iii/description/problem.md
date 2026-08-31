# [1004. Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 10088 | 178 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`binary-search`](https://leetcode.com/tag/binary-search), [`sliding-window`](https://leetcode.com/tag/sliding-window), [`prefix-sum`](https://leetcode.com/tag/prefix-sum)

**Companies:** `facebook`, `linkedin`, `amazon`, `microsoft`, `google`, `bloomberg`, `ibm`, `yandex`, `citadel`, `nutanix`, `goldman-sachs`, `salesforce`, `akamai`, `tiktok`, `oracle`, `walmart-labs`, `roku`

## Description

Given a binary array `nums` and an integer `k`, return *the maximum number of consecutive *`1`*'s in the array if you can flip at most* `k` `0`'s.

 

**Example 1:**

```

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
```

**Example 2:**

```

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

```

 

**Constraints:**

	- `1 <= nums.length <= 10^5`

	- `nums[i]` is either `0` or `1`.

	- `0 <= k <= nums.length`

---

**Links:** [Submissions](https://leetcode.com/problems/max-consecutive-ones-iii/) | [Solutions](https://leetcode.com/problems/max-consecutive-ones-iii/)
