# Dynamic Segment Tree

**Author:** dekail
**Votes:** 8
**Link:** [https://leetcode.com/problems/range-module/solutions/4834892/](https://leetcode.com/problems/range-module/solutions/4834892/)

---


# Approach
As the value range is 1e9, we need to build a dynamic segment tree instead of the static one.


# Code
```
class SegmentTree:
    def __init__(self):
        # store values
        self.tree = defaultdict(int)
        # store lazy values
        self.lazy = defaultdict(int)

    def update(self, query_start, query_end, root_start, root_end, idx, val):
        # no overlap
        if root_end < query_start or query_end < root_start:
            return

        # fully overlap
        if query_start <= root_start and root_end <= query_end:
            self.tree[idx] = val
            self.lazy[idx] = val

        # partially overlap
        else:
            mid = root_start + (root_end - root_start) // 2
            self.push_down(idx)
            self.update(query_start, query_end, root_start, mid, 2 * idx, val)
            self.update(query_start, query_end, mid + 1, root_end, 2 * idx + 1, val)
            self.tree[idx] = self.tree[2 * idx] and self.tree[2 * idx + 1]

    def push_down(self, idx):
        if idx in self.lazy:
            self.tree[2 * idx] = self.lazy[idx]
            self.lazy[2 * idx] = self.lazy[idx]

            self.tree[2 * idx + 1] = self.lazy[idx]
            self.lazy[2 * idx + 1] = self.lazy[idx]

            del self.lazy[idx]

    def query(self, query_start, query_end, root_start, root_end, idx):
        # no overlap
        if root_end < query_start or query_end < root_start:
            return True

        # fully overlap
        if query_start <= root_start and root_end <= query_end:
            return self.tree[idx]

        # partially overlap
        self.push_down(idx)
        mid = root_start + (root_end - root_start) // 2
        return self.query(query_start, query_end, root_start, mid, 2 * idx) and self.query(query_start, query_end, mid + 1, root_end, 2 * idx + 1)

class RangeModule:

    def __init__(self):
        self.tree = SegmentTree()

    def addRange(self, left, right):
        self.tree.update(left, right - 1, 0, 10**9, 1, True)

    def removeRange(self, left, right):
        self.tree.update(left, right - 1, 0, 10**9, 1, False)

    def queryRange(self, left, right):
        return self.tree.query(left, right - 1, 0, 10**9, 1)



```