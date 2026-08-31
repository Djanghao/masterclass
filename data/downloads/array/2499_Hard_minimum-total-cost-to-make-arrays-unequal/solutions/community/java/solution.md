# [C++||Java||Python] O(1) space complexity with Moore vote algorithm

**Author:** RealFan
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-total-cost-to-make-arrays-unequal/solutions/2988658/](https://leetcode.com/problems/minimum-total-cost-to-make-arrays-unequal/solutions/2988658/)

---

> **I know almost nothing about English, pointing out the mistakes in my article would be much appreciated.**

> **In addition, I'm too weak, please be critical of my ideas.**

> **Vote welcome if this solution helped.**
---
# Intuition

1. Define "internally" as indexes $i$ satisfy $$a[i] = b[i]$$. It seems that swap internally should be done as much as possible, but there is no guarantee that internal swapping is always possible.
2. Every time an internal pair $i,j$ which $$i \
e j$$ is found, an internal swap can be completed. So if we can swap internally for whole array, the $$ S = {\\sum_{a[i]=b[i]}^{} i} $$ will be the result.
3. In which condition we must swap externally? Obviously only if the number of internal swaps is insufficient.
4. Why not sufficient? An obvious case is that there is a value occurs more than half of the inner. In mathematics, that is, **the majority is more than a half**.
5. Another case is the internal number is odd, so it must remain one index. Fortunately, **we have the freedom to choose any index as the remainder, the other indexes will always matchable**. 
6. How to choose? Since the chosen index will swap externally, we strongly want it can swap with `0`. Is it guaranteed to find such an index? The answer is "Yes". 
7. Because the majority is less than half, there are **at least 3 different value inside**. So we can always find a $$i$$ which satisfy $$a[i] \
e a[0]$$ and $$ a[i] \
e b[0]$$. Choose this $$i$$ as the remainder, we can still maintain the result as $$S$$.
8. Finally, if we are forced to do external swaps, we should choose the smallest possible indexes.

# Approach
Through the above analysis, the problem becomes:
1. How to find the majority?
2. If the majority is greater than half, which external indexes can be included for swapping?

Solve these questions sequentially:

1.  It's a classical problem: [LeetCode 169](https://leetcode.com/problems/majority-element/), can be solved in $O(1)$ space complexity with [Boyer\u2013Moore majority vote algorithm](https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm).
2. First, the newly included $$j$$ must be external. Secondly, the newly included $$a[j]$$ and $$b[j]$$ can't be majority, otherwise there will be an equal situation after the swap. Finally enumerate from small to large until the number is sufficient.

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code
``` C++ []
class Solution {
public:
    long long minimumTotalCost(vector<int>& a, vector<int>& b) {
        // repeat is the number of a[i] == b[i]
        int n = a.size(), repeat = 0;   
        // s is the sum of i that satisfies a[i] == b[i]
        long long s = 0; 
        // val is the only candidate for majority  
        int val = -1, x = 0;   
        for (int i = 0; i < n; ++i) {
            if (a[i] == b[i]) {
                if (x == 0) val = a[i];
                x += 2 * (val == a[i]) - 1;
                repeat++;
                s += i;
            }
        }
        // cnt is the count of val
        int cnt = 0;  
        for (int i = 0; i < n; ++i) {
            cnt += a[i] == b[i] && a[i] == val;
        }
        // less than half, so s is the result
        if (cnt * 2 < repeat) return s;
        // the number which need to be swapped externally
        int m = 2 * cnt - repeat;
        for (int i = 0; i < n && m > 0; ++i) {
            // index satisfying this condition can be used for swap
            if (a[i] != val && b[i] != val && a[i] != b[i]) {
                s += i;
                m--;
            }
        }
        if (m > 0) return -1;
        return s;
    }
};
```
``` Java []
class Solution {
    public long minimumTotalCost(int[] a, int[] b) {
        // repeat is the number of a[i] == b[i]
        int n = a.length;
        int repeat = 0;   
        // s is the sum of i that satisfies a[i] == b[i]
        long s = 0; 
        // val is the only candidate for majority  
        int val = -1;
        int x = 0;   
        for (int i = 0; i < n; ++i) {
            if (a[i] == b[i]) {
                if (x == 0) val = a[i];
                if (val == a[i]) x--;
                else x++;
                repeat++;
                s += i;
            }
        }
        // cnt is the count of val
        int cnt = 0;  
        for (int i = 0; i < n; ++i) {
            if (a[i] == b[i] && a[i] == val)
                cnt++;
        }
        // less than half, so s is the result
        if (cnt * 2 < repeat) return s;
        // the number which need to be swapped externally
        int m = 2 * cnt - repeat;
        for (int i = 0; i < n && m > 0; ++i) {
            // index satisfying this condition can be used for swap
            if (a[i] != val && b[i] != val && a[i] != b[i]) {
                s += i;
                m--;
            }
        }
        if (m > 0) return -1;
        return s;
    }
}
```
``` Python []
class Solution:
    def minimumTotalCost(self, a: List[int], b: List[int]) -> int:
        n = len(a)
        # repeat is the number of a[i] == b[i]
        repeat = 0  
        # s is the sum of i that satisfies a[i] == b[i]
        s = 0
        # val is the only candidate for majority  
        val, x = -1, 0
        for i in range(n):
            if a[i] == b[i]:
                if x == 0: val = a[i]
                x += 2 * (val == a[i]) - 1
                repeat += 1
                s += i
        # cnt is the count of val
        cnt = sum(a[i] == b[i] and a[i] == val for i in range(n))
        # less than half, so s is the result
        if cnt * 2 < repeat: 
            return s
        # the number which need to be swapped externally
        m = 2 * cnt - repeat
        for i in range(n):
            # index satisfying this condition can be used for swap
            if a[i] != val and b[i] != val and a[i] != b[i]:
                s += i
                m -= 1
            if m <= 0:
                return s
        return -1
```
