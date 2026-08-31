# [Go] solution with hash and binary search

**Author:** inoyau
**Votes:** 1
**Link:** [https://leetcode.com/problems/range-frequency-queries/solutions/1590662/](https://leetcode.com/problems/range-frequency-queries/solutions/1590662/)

---

```
import "sort"


type RangeFreqQuery struct {
    cache map[int][]int
}


func Constructor(arr []int) RangeFreqQuery {
    this:=RangeFreqQuery{cache:make(map[int][]int)}
    for i,e := range arr {
        if _,ok := this.cache[e]; !ok {
            this.cache[e] = []int{i}
        } else {
            this.cache[e] = append(this.cache[e],i)
        }
    }
    return this
}


func (this *RangeFreqQuery) Query(left int, right int, value int) int {
    if val,ok := this.cache[value]; ok {
        lower := sort.Search(len(val), func (i int) bool { return val[i] >= left} )
        upper := sort.Search(len(val), func (i int) bool { return val[i] > right} )
        return upper - lower
    }
    return 0
}
```