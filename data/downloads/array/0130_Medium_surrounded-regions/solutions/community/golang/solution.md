# Fast and very easy to understand | DFS from borders | O(N) time | O(N) Space

**Author:** dartkron
**Votes:** 60
**Link:** [https://leetcode.com/problems/surrounded-regions/solutions/1551810/](https://leetcode.com/problems/surrounded-regions/solutions/1551810/)

---

This problem could be solved two ways:
1. Identify all isolated `'O'` cells and mark them as `'X'` then.
2. Mark all accessible from boarders `'O'` and then turn all inaccessible ones into `'X'`.

This solution is about the **second way**.

To mark cells as "reachable", algorithm changing their values to `'R'` instead of `'O'`.

1. Follow through left and right borders of the board and look for `'O'` cells. If found recursevly mark all accessible `'O'` cells as `'R'`.
2. Follow through top and bottom borders of the board and do the same.
3. Follow through the whole board and flip `'O'` -> `'X'` and `'R'` -> `'O'`

**Time compexity:** `O(N * M), where N is the height of the board and M is the width of the board. Since in the wrost case algorithm processes all cells twice and O(2 * N * M) == O(N * M)`
**Space complexity:** `O(N * M)` \u2014 only the fixed set of variables of the fixed size is allocated and all 'marks' are done 'in-place' **BUT** recursive function calls are stored on the stack and use N * M memory in the worst case. There are no "real" allocations since the stack is allocated when the program starts, but space complexity is about all **used space**. (Thanks for the [@kim_123 comment](https://leetcode.com/problems/surrounded-regions/discuss/1551810/Fast-and-very-easy-to-understand-or-DFS-from-boarders-or-O(N)-time-or-O(1)-Space/1134588) with the clarifications).

<iframe src="https://leetcode.com/playground/mRtTsxAF/shared" frameBorder="0" width="100%" height="850"></iframe>

Thank you for reading this! =)