# Golang solution

**Author:** nathannaveen
**Votes:** 1
**Link:** [https://leetcode.com/problems/two-sum-iii-data-structure-design/solutions/1279109/](https://leetcode.com/problems/two-sum-iii-data-structure-design/solutions/1279109/)

---

I have to admit that this is not the best solution to solve this problem, but I think it is the easiest to understand. For all we do is:

* Append to `this.arr` to `Add(number)`.
* And use a two-pointer approach for `Find(value)`.

``` go
type TwoSum struct {
    arr []int
}


/** Initialize your data structure here. */
func Constructor() TwoSum {
    return TwoSum{[]int{}}
}


/** Add the number to an internal data structure.. */
func (this *TwoSum) Add(number int)  {
    this.arr = append(this.arr, number)
}


/** Find if there exists any pair of numbers which sum is equal to the value. */
func (this *TwoSum) Find(value int) bool {
    sort.Ints(this.arr)
    left, right := 0, len(this.arr) - 1
    
    for left < right {
        if this.arr[left] + this.arr[right] < value {
            left++
        } else if this.arr[left] + this.arr[right] > value {
            right--
        } else {
            return true
        }
    }
    return false
}
```