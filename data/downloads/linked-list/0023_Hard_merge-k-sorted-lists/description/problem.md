# [23. Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 20966 | 781 |

**Tags:** [`linked-list`](https://leetcode.com/tag/linked-list), [`divide-and-conquer`](https://leetcode.com/tag/divide-and-conquer), [`heap-priority-queue`](https://leetcode.com/tag/heap-priority-queue), [`merge-sort`](https://leetcode.com/tag/merge-sort)

**Companies:** `amazon`, `facebook`, `google`, `microsoft`, `apple`, `oracle`, `tiktok`, `rippling`, `bloomberg`, `nvidia`, `snowflake`, `deloitte`, `palantir-technologies`, `cloudflare`, `salesforce`, `anduril`, `uber`, `ebay`, `walmart-labs`, `yandex`, `adobe`, `citadel`, `warnermedia`, `goldman-sachs`, `mongodb`, `indeed`, `linkedin`, `cisco`, `two-sigma`, `nutanix`, `samsung`, `sofi`, `doordash`, `airbnb`, `ixl`, `twitter`

## Description

You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order.

*Merge all the linked-lists into one sorted linked-list and return it.*

 

**Example 1:**

```

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1-&gt;4-&gt;5,
  1-&gt;3-&gt;4,
  2-&gt;6
]
merging them into one sorted linked list:
1-&gt;1-&gt;2-&gt;3-&gt;4-&gt;4-&gt;5-&gt;6

```

**Example 2:**

```

Input: lists = []
Output: []

```

**Example 3:**

```

Input: lists = [[]]
Output: []

```

 

**Constraints:**

	- `k == lists.length`

	- `0 <= k <= 10^4`

	- `0 <= lists[i].length <= 500`

	- `-10^4 <= lists[i][j] <= 10^4`

	- `lists[i]` is sorted in **ascending order**.

	- The sum of `lists[i].length` will not exceed `10^4`.

---

**Links:** [Submissions](https://leetcode.com/problems/merge-k-sorted-lists/) | [Solutions](https://leetcode.com/problems/merge-k-sorted-lists/)
