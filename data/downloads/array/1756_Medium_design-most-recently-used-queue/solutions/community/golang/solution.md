# Used Golang Slice Tricks To Solve This Problem

**Author:** nathannaveen
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-most-recently-used-queue/solutions/1357734/](https://leetcode.com/problems/design-most-recently-used-queue/solutions/1357734/)

---

I know that in an actual interview, we wouldn't use this solution, for an interviewer is probably going to ask for a more algorithmic solution, but I thought it might be fun to do this.

``` go
type MRUQueue struct {
    arr []int
}

func Constructor(n int) MRUQueue {
    arr := make([]int, n)
    for i := 0; i < n; i++ {
        arr[i] = i + 1
    }
    return MRUQueue{ arr }
}

func (this *MRUQueue) Fetch(k int) int {
    this.arr = append(this.arr, this.arr[k - 1])
    this.arr = append(this.arr[:k - 1], this.arr[k:]...)
    return this.arr[len(this.arr) - 1]
}
```