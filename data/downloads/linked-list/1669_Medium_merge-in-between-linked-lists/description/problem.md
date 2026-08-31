# [1669. Merge In Between Linked Lists](https://leetcode.com/problems/merge-in-between-linked-lists/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 2238 | 227 |

**Tags:** [`linked-list`](https://leetcode.com/tag/linked-list)

**Companies:** `microsoft`, `squarepoint-capital`, `google`, `oracle`, `arista-networks`, `amazon`, `facebook`, `salesforce`, `nvidia`, `paypal`

## Description

You are given two linked lists: `list1` and `list2` of sizes `n` and `m` respectively.

Remove `list1`'s nodes from the `a^th` node to the `b^th` node, and put `list2` in their place.

The blue edges and nodes in the following figure indicate the result:

![image](./images/0.png)

*Build the result list and return its head.*

 

**Example 1:**

![image](./images/1.png)
```

Input: list1 = [10,1,13,6,9,5], a = 3, b = 4, list2 = [1000000,1000001,1000002]
Output: [10,1,13,1000000,1000001,1000002,5]
Explanation: We remove the nodes 3 and 4 and put the entire list2 in their place. The blue edges and nodes in the above figure indicate the result.

```

**Example 2:**

![image](./images/2.png)
```

Input: list1 = [0,1,2,3,4,5,6], a = 2, b = 5, list2 = [1000000,1000001,1000002,1000003,1000004]
Output: [0,1,1000000,1000001,1000002,1000003,1000004,6]
Explanation: The blue edges and nodes in the above figure indicate the result.

```

 

**Constraints:**

	- `3 <= list1.length <= 10^4`

	- `1 <= a <= b < list1.length - 1`

	- `1 <= list2.length <= 10^4`

---

**Links:** [Submissions](https://leetcode.com/problems/merge-in-between-linked-lists/) | [Solutions](https://leetcode.com/problems/merge-in-between-linked-lists/)
