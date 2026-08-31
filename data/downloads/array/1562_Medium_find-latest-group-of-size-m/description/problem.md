# [1562. Find Latest Group of Size M](https://leetcode.com/problems/find-latest-group-of-size-m/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 675 | 144 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`binary-search`](https://leetcode.com/tag/binary-search), [`simulation`](https://leetcode.com/tag/simulation)

**Companies:** `amazon`, `google`

## Description

Given an array `arr` that represents a permutation of numbers from `1` to `n`.

You have a binary string of size `n` that initially has all its bits set to zero. At each step `i` (assuming both the binary string and `arr` are 1-indexed) from `1` to `n`, the bit at position `arr[i]` is set to `1`.

You are also given an integer `m`. Find the latest step at which there exists a group of ones of length `m`. A group of ones is a contiguous substring of `1`'s such that it cannot be extended in either direction.

Return *the latest step at which there exists a group of ones of length **exactly*** `m`. *If no such group exists, return* `-1`.

 

**Example 1:**

```

Input: arr = [3,5,1,2,4], m = 1
Output: 4
Explanation: 
Step 1: &quot;00100&quot;, groups: [&quot;1&quot;]
Step 2: &quot;00101&quot;, groups: [&quot;1&quot;, &quot;1&quot;]
Step 3: &quot;10101&quot;, groups: [&quot;1&quot;, &quot;1&quot;, &quot;1&quot;]
Step 4: &quot;11101&quot;, groups: [&quot;111&quot;, &quot;1&quot;]
Step 5: &quot;11111&quot;, groups: [&quot;11111&quot;]
The latest step at which there exists a group of size 1 is step 4.

```

**Example 2:**

```

Input: arr = [3,1,5,4,2], m = 2
Output: -1
Explanation: 
Step 1: &quot;00100&quot;, groups: [&quot;1&quot;]
Step 2: &quot;10100&quot;, groups: [&quot;1&quot;, &quot;1&quot;]
Step 3: &quot;10101&quot;, groups: [&quot;1&quot;, &quot;1&quot;, &quot;1&quot;]
Step 4: &quot;10111&quot;, groups: [&quot;1&quot;, &quot;111&quot;]
Step 5: &quot;11111&quot;, groups: [&quot;11111&quot;]
No group of size 2 exists during any step.

```

 

**Constraints:**

	- `n == arr.length`

	- `1 <= m <= n <= 10^5`

	- `1 <= arr[i] <= n`

	- All integers in `arr` are **distinct**.

---

**Links:** [Submissions](https://leetcode.com/problems/find-latest-group-of-size-m/) | [Solutions](https://leetcode.com/problems/find-latest-group-of-size-m/)
