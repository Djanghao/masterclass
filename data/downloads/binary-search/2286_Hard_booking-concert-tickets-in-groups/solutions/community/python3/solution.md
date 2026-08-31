# [Python 3] Sum and Max segment trees + Binary Search

**Author:** chestnut890123
**Votes:** 2
**Link:** [https://leetcode.com/problems/booking-concert-tickets-in-groups/solutions/2084835/](https://leetcode.com/problems/booking-concert-tickets-in-groups/solutions/2084835/)

---

The key is to update the search lower bound after each `scatter` call. So we don't need to update and query any rows beyond that.

```
class TreeNode:
    def __init__(self, val=0, start=None, end=None, left=None, right=None):
        self.val = val
        self.start = start
        self.end = end
        self.left = left
        self.right = right

class SegmentTree:
    def __init__(self, start, end, vals, mode='sum'):
        def build(start, end, vals):
            if start == end:
                return TreeNode(vals[start], start, end)
            mid = (start + end) // 2
            l, r = build(start, mid, vals), build(mid+1, end, vals)
            return TreeNode(l.val+r.val, start, end, l, r) if mode == 'sum' else TreeNode(max(l.val, r.val), start, end, l, r)
        self.t = build(start, end, vals)
        self.mode = mode
    
    def update(self, root, index, value):
        if index == root.start == root.end:
            root.val = value
            return
        mid = (root.start + root.end) // 2
        if index <= mid:
            self.update(root.left, index, value)
        else:
            self.update(root.right, index, value)
        root.val = root.left.val + root.right.val if self.mode == 'sum' else max(root.left.val, root.right.val)

    def query(self, root, i, j):
        if root.start == i and root.end == j:
            return root.val
        mid = (root.start + root.end) // 2
        if j <= mid:
            return self.query(root.left, i, j)
        elif i > mid:
            return self.query(root.right, i, j)
        else:
            return self.query(root.left, i, mid) + self.query(root.right, mid+1, j) if self.mode == 'sum' else max(self.query(root.left, i, mid), self.query(root.right, mid+1, j))
        

class BookMyShow:

    def __init__(self, n: int, m: int):
        self.st_sum = SegmentTree(0, n - 1, [m] * n)
        self.st_max = SegmentTree(0, n - 1, [m] * n, mode='max')
        self.m, self.n = m, n
        self.low = 0 # this is the search lower bound (any row beyond this has no seat)
        
    def gather(self, k: int, maxRow: int) -> List[int]:
        st_max = self.st_max
        st_sum = self.st_sum
        low = self.low
        if low > maxRow or st_max.query(st_max.t, low, maxRow) < k: return []
        # find smallest row between search lower bound and maxRow with seat >= k
        l, h = low, maxRow
        while l < h:
            mid = l + (h - l) // 2
            if st_max.query(st_max.t, low, mid) >= k:
                h = mid
            else:
                l = mid + 1
        # update seat for both trees 
        rest = st_max.query(st_max.t, l, l)
        st_max.update(st_max.t, l, rest - k)
        st_sum.update(st_sum.t, l, rest - k)
        return [l, self.m - rest]
        
    
    def scatter(self, k: int, maxRow: int) -> bool:
        st_max = self.st_max
        st_sum = self.st_sum
        low = self.low
        
        if low > maxRow or st_sum.query(st_sum.t, low, maxRow) < k: return False
        # find smallest row between search lower bound and maxRow with sum seat >= k
        l, h = low, maxRow
        while l < h:
            mid = l + (h - l) // 2
            if st_sum.query(st_sum.t, low, mid) >= k:
                h = mid
            else:
                l = mid + 1
        
        tot = st_sum.query(st_sum.t, low, l)
        rest = tot - k
        if not rest:
            self.low = l + 1 # if no remaining seat, then current row has no seat and go to next row
        else:
            self.low = l # otherwise the current row still has seat and need to update the number
            st_sum.update(st_sum.t, l, rest)
            st_max.update(st_max.t, l, rest)
            
        return True


