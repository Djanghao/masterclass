# Golang | Segment Tree with Lazy Propagation

**Author:** tw13
**Votes:** 0
**Link:** [https://leetcode.com/problems/handling-sum-queries-after-update/solutions/3620126/](https://leetcode.com/problems/handling-sum-queries-after-update/solutions/3620126/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(qlog(n) + n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(max(q,n))$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
type segmentTree struct {
    tree []int
    lazy []int
}

func NewSegmentTree(n int) *segmentTree {
    return &segmentTree{
        tree: make([]int, 4*n),
        lazy: make([]int, 4*n),
    }
}

func (s *segmentTree) Build(treeIndex int, treeLo int, treeHi int, arr []int) {
    if treeLo == treeHi {
        s.tree[treeIndex] = arr[treeLo]
        return
    }
    mid := (treeHi-treeLo)/2+treeLo
    s.Build(treeIndex*2, treeLo, mid, arr)
    s.Build(treeIndex*2+1, mid+1, treeHi, arr)
    s.tree[treeIndex] = s.tree[treeIndex*2] + s.tree[treeIndex*2+1]
}

func (s *segmentTree) Update(treeIndex int, treeLo int, treeHi int, updateLo int, updateHi int) {
    if s.lazy[treeIndex] > 0 {
        s.tree[treeIndex] = treeHi-treeLo+1-s.tree[treeIndex]
        if treeLo != treeHi {
            s.lazy[treeIndex*2] ^= 1
            s.lazy[treeIndex*2+1] ^= 1
        }
        s.lazy[treeIndex] = 0
    }
    if treeLo > updateHi || treeHi < updateLo {
        return
    }
    if updateLo <= treeLo && treeHi <= updateHi {
        s.tree[treeIndex] = treeHi-treeLo+1-s.tree[treeIndex]
        if treeLo != treeHi {
            s.lazy[treeIndex*2] ^= 1
            s.lazy[treeIndex*2+1] ^= 1
        }
        return
    }
    mid := (treeHi-treeLo)/2+treeLo
    s.Update(treeIndex*2, treeLo, mid, updateLo, updateHi)
    s.Update(treeIndex*2+1, mid+1, treeHi, updateLo, updateHi)
    s.tree[treeIndex] = s.tree[treeIndex*2] + s.tree[treeIndex*2+1]
}


func handleQuery(nums1 []int, nums2 []int, queries [][]int) []int64 {
    l := len(nums1)
    var sum int64
    for _, num := range nums2 {
        sum += int64(num)
    }
    segmentTree := NewSegmentTree(l)
    segmentTree.Build(1, 0, l-1, nums1)
    var ans []int64
    for _, q := range queries {
        switch q[0] {
            case 1:
                segmentTree.Update(1, 0, l-1, q[1], q[2])
            case 2:
                sum += int64(segmentTree.tree[1] * q[1])
            case 3:
                ans = append(ans, sum)
        }
    }
    return ans
}
```