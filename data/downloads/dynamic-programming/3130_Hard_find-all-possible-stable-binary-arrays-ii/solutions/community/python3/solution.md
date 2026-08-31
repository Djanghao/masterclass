# Easily understandable DP

**Author:** 27sui_JGLer
**Votes:** 46
**Link:** [https://leetcode.com/problems/find-all-possible-stable-binary-arrays-ii/solutions/5080135/](https://leetcode.com/problems/find-all-possible-stable-binary-arrays-ii/solutions/5080135/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Very straightforward DP.
1. Recall the problem that calcuates how many different ways a robot can reach the corner in a m*n board. [lc #62](https://leetcode.com/problems/unique-paths) 
2. Here the difference is, we cannot go in a single direction for too many steps. There is a "limit".
3. Therefore, for each node, we store the information seperately: one is the counts coming from the top, the other is that from the left.
4. For the node [i][j], we need to eliminate the counts that comes from node [i-limit-1][j] and [i][j-limit-1].
5. Note that some counts have already been deducted at [i-1][j] and [i][j-1], **so we definitely don't want to do the double deduction**. That's the ***key point*** why I split a node into two counts.
6. The rest is trivial.


# Complexity
- Time complexity: $$O(mn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(mn)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def numberOfStableArrays(self, zero: int, one: int, limit: int) -> int:
        mo = (10**9)+7
        store = [[[0,0] for _ in range(one+1)] for _ in range(zero+1)]
        for i in range(zero+1):
            store[i][0] = [1,0] if i<=limit else [0,0]
        for j in range(one+1):
            store[0][j] = [0,1] if j<=limit else [0,0]
        for i in range(1,zero+1):
            for j in range(1,one+1):
                store[i][j]=[sum(store[i-1][j]),sum(store[i][j-1])]
                if i>limit:
                    store[i][j][0]-=store[i-limit-1][j][1]
                if j>limit:
                    store[i][j][1]-=store[i][j-limit-1][0]
                for t in range(2):
                    store[i][j][t]%=mo
        return sum(store[-1][-1])%mo
```