# Segment Tree

**Author:** ravneet_b
**Votes:** 0
**Link:** [https://leetcode.com/problems/peaks-in-array/solutions/5324045/](https://leetcode.com/problems/peaks-in-array/solutions/5324045/)

---

# Intuition
The problem asks for range queries and point updates. Segment Tree data structure is an obvious choice.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Other than the basic working of a Segment Tree, there are couple of things you want to take note of:
- The first and last index of the array or the queried subarray cannot be a peak. So exclude the first and last index of the queried subarray.
- When you update a value, the neighbouring values can also become a peak or stop being a peak.
<!-- Describe your approach to solving the problem. -->

# Complexity
$O(n)$ to build the tree.
$O(\\log n)$ for each query (or update).
Total: $O(n + q\\log n)$ for $q$ number of queries.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

# Code
```Go []
func countOfPeaks(nums []int, queries [][]int) []int {
    st := newSegmentTree(len(nums))
    for i := range nums {
        if checkPeak(nums, i) {
            st.update(i, 1, 1, 0, len(nums)-1)
        }
    }
    result := []int{}
    for _, q := range queries {
        if q[0] == 1 {
            result = append(result, st.query(q[1]+1, q[2]-1, 0, len(nums)-1, 1))
        } else {
            index := q[1]
            value := q[2]
            nums[index] = value
            for i := index-1; i <= index+1; i++ {
                if checkPeak(nums, i) {
                    st.update(i, 1, 1, 0, len(nums)-1)
                } else {
                    st.update(i, 0, 1, 0, len(nums)-1)
                }
            }
        }
    }
    return result
}

func checkPeak(nums []int, i int) bool {
    return i > 0 && i < len(nums)-1 && nums[i] > nums[i-1] && nums[i] > nums[i+1]
}

type segmentTree struct {
    tree []int
}

func newSegmentTree(n int) *segmentTree {
    return &segmentTree { tree: make([]int, 4*n) }
}

func (s *segmentTree) query(queryLeft, queryRight, left, right, treeNode int) int {
    if left > right { return 0 }
    if queryRight < left || queryLeft > right { return 0 }
    if queryLeft <= left && queryRight >= right { return s.tree[treeNode] }
    mid := (left+right)/2
    return s.query(queryLeft, queryRight, left, mid, 2*treeNode) + s.query(queryLeft, queryRight, mid+1, right, 2*treeNode+1)
}

func (s *segmentTree) update(index, value, treeNode, left, right int) {
    if treeNode >= len(s.tree) { return }
    if index < left || index > right { return }
    if left > right { return }
    if left == right { 
        s.tree[treeNode] = value
        return
    }
    mid := (left+right)/2
    s.update(index, value, 2*treeNode, left, mid)
    s.update(index, value, 2*treeNode + 1, mid+1, right)
    s.tree[treeNode] = s.tree[2*treeNode] + s.tree[2*treeNode+1]
}
```
```Java []
class Solution {
    public List<Integer> countOfPeaks(int[] nums, int[][] queries) {
        SegmentTree st = new SegmentTree(nums.length);
        for (int i = 0; i < nums.length; i++) {
            if (checkPeak(nums, i)) {
                st.update(i, 1, 1, 0, nums.length-1);
            }
        }
        List<Integer> result = new ArrayList<>();
        for (int[] query : queries) {
            if (query[0] == 1) {
                result.add(st.query(query[1]+1, query[2]-1, 0, nums.length-1, 1));
            } else {
                int index = query[1];
                nums[index] = query[2];
                for (int i = index-1; i <= index+1; i++) {
                    if (checkPeak(nums, i)) {
                        st.update(i, 1, 1, 0, nums.length-1);
                    } else {
                        st.update(i, 0, 1, 0, nums.length-1);
                    }
                }
            }
        }
        return result;
    }
    private boolean checkPeak(int[] nums, int i) {
        return i > 0 && i < nums.length - 1 && nums[i] > nums[i - 1] && nums[i] > nums[i + 1];
    }
}

class SegmentTree {
    int[] tree;

    SegmentTree(int n) {
        tree = new int[4*n];
    }
    
    int query(int queryLeft, int queryRight, int left, int right, int treeNode) {
        if (left > right) return 0;
        if (queryRight < left || queryLeft > right) return 0;
        if (queryLeft <= left && queryRight >= right) return tree[treeNode];
        int mid = (left + right) / 2;
        return query(queryLeft, queryRight, left, mid, 2*treeNode) +
            query(queryLeft, queryRight, mid+1, right, 2*treeNode+1);
    }

    void update(int index, int value, int treeNode, int left, int right) {
        if (treeNode >= tree.length) return;
        if (index < left || index > right) return;
        if (left > right) return;
        if (left == right) {
            tree[treeNode] = value;
            return;
        }
        int mid = (left+right)/2;
        update(index, value, 2*treeNode, left, mid);
        update(index, value, 2*treeNode+1, mid+1, right);
        tree[treeNode] = tree[2*treeNode] + tree[2*treeNode+1]; 
    }
}
```