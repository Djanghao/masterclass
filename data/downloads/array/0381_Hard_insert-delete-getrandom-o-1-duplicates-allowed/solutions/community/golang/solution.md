# List+map+slice

**Author:** dspasibenko
**Votes:** 0
**Link:** [https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/solutions/5304083/](https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/solutions/5304083/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
import "math/rand"

type item struct {
    val int
    idx int
    prev *item
    next *item
}


type RandomizedCollection struct {
    items []*item
    m map[int]*item
}


func Constructor() RandomizedCollection {
    return RandomizedCollection{m: make(map[int]*item)}
}


func (this *RandomizedCollection) Insert(val int) bool {
    itm := &item{val:val, idx: len(this.items)}
    this.items = append(this.items, itm)
    if i, ok := this.m[val]; ok {
        itm.next = i
        i.prev = itm
        this.m[val] = itm
        return false
    }
    this.m[val] = itm
    return true
}


func (this *RandomizedCollection) Remove(val int) bool {
    i, ok := this.m[val]
    if !ok {
        return false
    }
    this.items[i.idx] = this.items[len(this.items)-1]
    this.items[i.idx].idx = i.idx
    this.items = this.items[:len(this.items)-1]
    if i.next == nil {
        delete(this.m, i.val)
        return true
    }
    i = i.next
    i.prev = nil 
    this.m[i.val]= i
    return true
}


func (this *RandomizedCollection) GetRandom() int {
    n := rand.Intn(len(this.items))
    return this.items[n].val
}


/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * obj := Constructor();
 * param_1 := obj.Insert(val);
 * param_2 := obj.Remove(val);
 * param_3 := obj.GetRandom();
 */
```