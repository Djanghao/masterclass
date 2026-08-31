# Golang simple solution

**Author:** kevin51034
**Votes:** 2
**Link:** [https://leetcode.com/problems/design-bitset/solutions/1749301/](https://leetcode.com/problems/design-bitset/solutions/1749301/)

---

using two map to store the one & zero index

**Time & Space complexity:**
Time:
Initialization and toString() are both **O(size)**, others are all **O(1)**;
Space:
**O(size)**

note that if use + sign to concate string in toString() function will cause TLE

```
type Bitset struct {
    bitSlice []int
    size int
    oneIndex map[int]int
    zeroIndex map[int]int
}


func Constructor(size int) Bitset {
    zeroIndex := make(map[int]int, size)
    for i:=0; i<size; i++ {
        zeroIndex[i] = 1
    }
    return Bitset{bitSlice: make([]int, size), size: size, oneIndex:make(map[int]int, size), zeroIndex:zeroIndex}
}


func (this *Bitset) Fix(idx int)  {
    this.oneIndex[idx] = 1
    delete(this.zeroIndex, idx)
}


func (this *Bitset) Unfix(idx int)  {
    this.zeroIndex[idx] = 1
    delete(this.oneIndex, idx)
}


func (this *Bitset) Flip()  {
    this.zeroIndex, this.oneIndex = this.oneIndex, this.zeroIndex
}


func (this *Bitset) All() bool {
    return len(this.oneIndex) == this.size
}


func (this *Bitset) One() bool {
    return len(this.oneIndex) > 0
}


func (this *Bitset) Count() int {
    return len(this.oneIndex)
}


func (this *Bitset) ToString() string {
    // don't use + to concate string
    // + is much slower than strings.Builder, so it will TLE
    var bitString strings.Builder
    for i:=0; i<this.size; i++ {
        if this.oneIndex[i] == 1 {
            bitString.WriteString("1")
        } else {
            bitString.WriteString("0")
        }
    }
    return bitString.String()
}
```