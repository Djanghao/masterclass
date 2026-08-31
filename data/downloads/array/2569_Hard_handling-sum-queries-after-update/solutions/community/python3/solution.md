# [Python3] lazy segment tree

**Author:** ye15
**Votes:** 9
**Link:** [https://leetcode.com/problems/handling-sum-queries-after-update/solutions/3203321/](https://leetcode.com/problems/handling-sum-queries-after-update/solutions/3203321/)

---


```
class SegTreeLazy: 
    
    def __init__(self, arr: List[int]): 
        """Build the segmentation tree."""
        self.n = n = len(arr)
        self.tree = [0]*(4*n)
        self.lazy = [0]*(4*n)
        
        def build(k: int, lo: int, hi: int) -> None: 
            """Build segment tree from array."""
            if lo+1 == hi: self.tree[k] = arr[lo]
            else: 
                mid = lo + hi >> 1
                build(2*k+1, lo, mid)
                build(2*k+2, mid, hi)
                self.tree[k] = self.tree[2*k+1] + self.tree[2*k+2]
        
        build(0, 0, n)


    def update(self, qlo: int, qhi: int, k: int = 0, lo: int = 0, hi: int = 0) -> None:
        """Update segment tree when value in [qlo, qhi) is flipped."""
        if not hi: hi = self.n
        if self.lazy[k]: 
            self.tree[k] = (hi - lo) - self.tree[k]
            if lo+1 < hi: 
                self.lazy[2*k+1] ^= 1
                self.lazy[2*k+2] ^= 1 
            self.lazy[k] = 0
        if lo < hi and qlo < hi and lo < qhi: 
            if qlo <= lo and hi <= qhi: # total overlap
                self.tree[k] = (hi - lo) - self.tree[k]
                if lo+1 < hi: 
                    self.lazy[2*k+1] ^= 1
                    self.lazy[2*k+2] ^= 1
                return 
            mid = lo + hi >> 1
            self.update(qlo, qhi, 2*k+1, lo, mid) 
            self.update(qlo, qhi, 2*k+2, mid, hi)
            self.tree[k] = self.tree[2*k+1] + self.tree[2*k+2]
            

class Solution:
    def handleQuery(self, nums1: List[int], nums2: List[int], queries: List[List[int]]) -> List[int]:
        tree = SegTreeLazy(nums1)
        ans = []
        val = sum(nums2)
        for x, y, z in queries: 
            if x == 1: tree.update(y, z+1)
            elif x == 2: val += y * tree.tree[0]
            else: ans.append(val)
        return ans 
```