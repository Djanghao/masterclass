# Go clear solution

**Author:** qube
**Votes:** 2
**Link:** [https://leetcode.com/problems/peeking-iterator/solutions/1980059/](https://leetcode.com/problems/peeking-iterator/solutions/1980059/)

---

```
type PeekingIterator struct {
    oneStepAhead    *Iterator
    current         int
}

func Constructor(iter *Iterator) *PeekingIterator {
    pi := &PeekingIterator{iter, 0} // 0 means no next value since: 1 <= nums[i] <= 1000
    if iter.hasNext() { pi.current = iter.next() }
    return pi
}

func (this *PeekingIterator) hasNext() bool {
    return this.current != 0
}

func (this *PeekingIterator) next() int {
    res := this.current
    if this.oneStepAhead.hasNext() { this.current = this.oneStepAhead.next() } else { this.current = 0 }
    return res
}

func (this *PeekingIterator) peek() int {
    return this.current
}
```