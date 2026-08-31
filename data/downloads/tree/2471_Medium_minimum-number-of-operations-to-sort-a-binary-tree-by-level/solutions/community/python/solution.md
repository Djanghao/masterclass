# Python 3   ||   13 lines, bfs, w/ explanation and example   ||   T/S: 73% / 54%

**Author:** Spaulding_
**Votes:** 12
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/solutions/2815060/](https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/solutions/2815060/)

---

Here's the plan.

For each level:

1. We collect the node values in order in a list `level`.
1. We attach list index to each value in `level` as a tuple.
1. We sort the the tuple list with repect to values.
1. We peel off the indices in order to `idx`.
1. We count the number of steps required to restore `idx` to consecutive order.

```
class Solution:                                                             # Ex:  root = [1, 4,3, 7,6,8,5, None,None,11,None,9,None,10,None]
    def minimumOperations(self, root: TreeNode) -> int:                     #           _____1____
                                                                            #          /          \\
        ans, queue, level = 0, [root],[]                                    #         4___         3___
                                                                            #        /    \\       /    \\
        while queue :                                                       #       7     _6     8     _5
                                                                            #            /      /     /
            for node in queue:                                              #           11     9     10
                    if node:  level.extend([node.left, node.right])         #
                                                                            #  level         idx             ans
            arr = [(v,i) for i,v in enumerate([c.val for c in level if c])] #  \u2013\u2013\u2013\u2013\u2013        \u2013\u2013\u2013\u2013\u2013           \u2013\u2013\u2013\u2013\u2013
            idx = [i for _,i in sorted(arr)]                                #  [4,3]        [1,0]             1
                                                                            #  [7,6,8,5]    [2,1,3,0]         2
            for i in range(len(idx)):                                       #  [11,9,10]    [1,2,0]           2
                while (idx[i] != i):                                        #                               \u2013\u2013\u2013\u2013\u2013
                    j = idx[i]                                              #                                 5   <--- ans
                    idx[i], idx[j] = idx[j], idx[i]
                    ans += 1

            queue, level = level, []
        
        return ans
```
[
https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/submissions/1290398854/](
https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/submissions/1290398854/)

I could be wrong, but I think that time complexity is *O*(*N* log *N*) and space complexity is *O*(*N*), in which *N* ~ the number of nodes in the tree.
