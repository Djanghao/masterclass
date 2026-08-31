# O(1), O(N), should be fast

**Author:** dspasibenko
**Votes:** 0
**Link:** [https://leetcode.com/problems/product-of-the-last-k-numbers/solutions/5270709/](https://leetcode.com/problems/product-of-the-last-k-numbers/solutions/5270709/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(N)

# Code
```
type ProductOfNumbers struct {
    p []int
}


func Constructor() ProductOfNumbers {
    return ProductOfNumbers{}
}


func (this *ProductOfNumbers) Add(num int)  {
    if num == 0 {
        this.p = nil 
        return
    }
    v := 1
    if len(this.p) > 0 {
        v = this.p[len(this.p)-1]        
    }
    this.p = append(this.p, num*v)
}


func (this *ProductOfNumbers) GetProduct(k int) int {
    if k > len(this.p) {
        return 0
    }
    v := 1
    if k < len(this.p) {
        v = this.p[len(this.p)-k-1]
    }
    return this.p[len(this.p)-1]/v
}


/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Add(num);
 * param_2 := obj.GetProduct(k);
 */
```