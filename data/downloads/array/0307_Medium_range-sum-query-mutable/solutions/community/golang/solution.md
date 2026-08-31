# [Golang] Binary Index Tree

**Author:** vasakris
**Votes:** 3
**Link:** [https://leetcode.com/problems/range-sum-query-mutable/solutions/2732193/](https://leetcode.com/problems/range-sum-query-mutable/solutions/2732193/)

---

```
type NumArray struct {
    BitArr []int
}


func Constructor(nums []int) NumArray {
    bitArr := make([]int, len(nums)+1)
    build(bitArr, nums)
    return NumArray{bitArr}
}


func (this *NumArray) Update(index int, val int)  {
    oldValue := query(this.BitArr, index+1) - query(this.BitArr, index)
    update(this.BitArr, index+1, val-oldValue)
}


func (this *NumArray) SumRange(left int, right int) int {
    return query(this.BitArr, right+1) - query(this.BitArr, left)
}

func build(bitArr, nums []int) {
    for i := 0; i < len(nums); i++ {
        update(bitArr, i+1, nums[i])
    }
}

func update(bitArr []int, idx, value int) {
    for i := idx; i < len(bitArr); i += next(i) {
        bitArr[i] += value
    }
}

func query(bitArr []int, idx int) int {
    sum := 0
    for i := idx; i > 0; i -= next(i) {
        sum += bitArr[i]
    }
    return sum
}

func next(n int) int {
    return n & (-n)
}

/**
 * Your NumArray object will be instantiated and called as such:
 * obj := Constructor(nums);
 * obj.Update(index,val);
 * param_2 := obj.SumRange(left,right);
 */
```