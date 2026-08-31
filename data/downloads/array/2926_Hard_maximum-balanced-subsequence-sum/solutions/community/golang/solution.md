# GoLang Solution

**Author:** passionFruitFlower
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-balanced-subsequence-sum/solutions/4257593/](https://leetcode.com/problems/maximum-balanced-subsequence-sum/solutions/4257593/)

---

## Idea
Coordinate Compression + Segment Tree
## Code
```
type SegmentTree struct {
    vec []int64
}
func (st *SegmentTree) build (n int) {
    for n & (n - 1) != 0 {
        n += 1
    }
    st.vec = make([]int64, 2 * n)
}
func (st *SegmentTree) query_rec (dum int, tl int, tr int, l int, r int) int64 {
    if (tl >= l && tr <= r) {
        return st.vec[dum]
    }
    if tl > r || tr < l {
        return -1e15
    }
    return max(st.query_rec(2 * dum + 1, tl, (tl + tr)/2, l, r), st.query_rec(2 * dum + 2, (tl + tr)/2 + 1, tr, l, r))
}
func (st *SegmentTree) query (l int, r int) int64 {
    return st.query_rec(0, 0, len(st.vec)/2 - 1, l, r)
}
func (st *SegmentTree) update (x int, y int64) {
    x += len(st.vec)/2 - 1
    st.vec[x] = y
    for x != 0 {
        x = (x - 1)/2
        st.vec[x] = max(st.vec[2 * x + 1] , st.vec[2 * x + 2])
    }
}
func maxBalancedSubsequenceSum(nums []int) int64 {
    n := len(nums)
    vec := make([][]int, len(nums))
    for i := 0; i < len(nums); i++ {
        vec[i] = make([]int, 2)
        vec[i][0] = nums[i] - i
        vec[i][1] = i
    }
    sort.Slice (vec, func(i int, j int) bool {
        if vec[i][0] != vec[j][0] {
            return (vec[i][0] < vec[j][0])
        }
        return vec[i][1] < vec[j][1]
    })
    m := make(map[int]int)
    for i, x := range vec {
        m[x[0]] = i + 1
    }
    st := SegmentTree{}
    st.build(n + 10)
    for i := 0; i < len(st.vec)/2; i++ {
        st.update(i, -1e15)
        fmt.Print(st.query(i, i))
    }
    st.update(0, 0)
    for i, x := range nums {
        st.update(m[x - i], st.query(0, m[x - i]) + int64(x))
    }
    return st.query(1, n + 1)
}
```