# [1855. Maximum Distance Between a Pair of Values](https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1259 | 32 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`two-pointers`](https://leetcode.com/tag/two-pointers), [`binary-search`](https://leetcode.com/tag/binary-search)


## Description

You are given two **non-increasing 0-indexed **integer arrays `nums1`​​​​​​ and `nums2`​​​​​​.

A pair of indices `(i, j)`, where `0 = arr[i]` for every `1 <= i < arr.length`.

 

**Example 1:**

```

Input: nums1 = [55,30,5,4,2], nums2 = [100,20,10,10,5]
Output: 2
Explanation: The valid pairs are (0,0), (2,2), (2,3), (2,4), (3,3), (3,4), and (4,4).
The maximum distance is 2 with pair (2,4).

```

**Example 2:**

```

Input: nums1 = [2,2,2], nums2 = [10,10,1]
Output: 1
Explanation: The valid pairs are (0,0), (0,1), and (1,1).
The maximum distance is 1 with pair (0,1).

```

**Example 3:**

```

Input: nums1 = [30,29,19,5], nums2 = [25,25,25,25,25]
Output: 2
Explanation: The valid pairs are (2,2), (2,3), (2,4), (3,3), and (3,4).
The maximum distance is 2 with pair (2,4).

```

 

**Constraints:**

	- `1 <= nums1.length, nums2.length <= 10^5`

	- `1 <= nums1[i], nums2[j] <= 10^5`

	- Both `nums1` and `nums2` are **non-increasing**.

---

**Links:** [Submissions](https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/) | [Solutions](https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/)
