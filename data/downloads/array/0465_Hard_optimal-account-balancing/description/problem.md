# [465. Optimal Account Balancing](https://leetcode.com/problems/optimal-account-balancing/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 1522 | 163 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`backtracking`](https://leetcode.com/tag/backtracking), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation), [`bitmask`](https://leetcode.com/tag/bitmask)

**Companies:** `pinterest`, `google`, `amazon`, `affirm`, `goldman-sachs`, `uber`, `salesforce`, `microsoft`, `tiktok`, `zscaler`, `rippling`, `stripe`

## Description

You are given an array of transactions `transactions` where `transactions[i] = [from_i, to_i, amount_i]` indicates that the person with `ID = from_i` gave `amount_i $` to the person with `ID = to_i`.

Return *the minimum number of transactions required to settle the debt*.

 

**Example 1:**

```

Input: transactions = [[0,1,10],[2,0,5]]
Output: 2
Explanation:
Person #0 gave person #1 $10.
Person #2 gave person #0 $5.
Two transactions are needed. One way to settle the debt is person #1 pays person #0 and #2 $5 each.

```

**Example 2:**

```

Input: transactions = [[0,1,10],[1,0,1],[1,2,5],[2,0,5]]
Output: 1
Explanation:
Person #0 gave person #1 $10.
Person #1 gave person #0 $1.
Person #1 gave person #2 $5.
Person #2 gave person #0 $5.
Therefore, person #1 only need to give person #0 $4, and all debt is settled.

```

 

**Constraints:**

	- `1 <= transactions.length <= 8`

	- `transactions[i].length == 3`

	- `0 <= from_i, to_i < 12`

	- `from_i != to_i`

	- `1 <= amount_i <= 100`

---

**Links:** [Submissions](https://leetcode.com/problems/optimal-account-balancing/) | [Solutions](https://leetcode.com/problems/optimal-account-balancing/)
