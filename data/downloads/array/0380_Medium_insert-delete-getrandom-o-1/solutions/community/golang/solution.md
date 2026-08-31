# Golang

**Author:** tw13
**Votes:** 8
**Link:** [https://leetcode.com/problems/insert-delete-getrandom-o1/solutions/2858201/](https://leetcode.com/problems/insert-delete-getrandom-o1/solutions/2858201/)

---

```
type RandomizedSet struct {
    m map[int]int
    l []int
}


func Constructor() RandomizedSet {
    m := make(map[int]int)
    l := make([]int, 0)
    return RandomizedSet{m, l}
}


func (this *RandomizedSet) Insert(val int) bool {
    if _, ok := this.m[val]; ok {
        return false
    }
    this.m[val] = len(this.l)
    this.l = append(this.l, val)
    return true
}


func (this *RandomizedSet) Remove(val int) bool {
    if _, ok := this.m[val]; !ok {
        return false
    }
    n, i := len(this.l), this.m[val]
    this.l[i], this.l[n-1] = this.l[n-1], this.l[i]
    this.m[this.l[i]] = i
    this.l = this.l[:n-1]
    delete(this.m, val)
    return true
}


func (this *RandomizedSet) GetRandom() int {
    i := rand.Intn(len(this.l))
    return this.l[i]
}
```