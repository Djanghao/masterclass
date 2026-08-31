# go solution w/ pre-caching

**Author:** carti
**Votes:** 2
**Link:** [https://leetcode.com/problems/dot-product-of-two-sparse-vectors/solutions/2229216/](https://leetcode.com/problems/dot-product-of-two-sparse-vectors/solutions/2229216/)

---

```go
type SparseVector struct {
    nonZeroes map[int]int
}

func Constructor(nums []int) SparseVector {
    nonZeroes := map[int]int{}
    
    // go through each number, and pre-cache non zeroes
    for index, num := range nums {
        if num != 0 {
            nonZeroes[index] = num
        }
    }
    
    return SparseVector{ nonZeroes }
}

// Return the dotProduct of two sparse vectors
func (this *SparseVector) dotProduct(vec SparseVector) int {
    result := 0
    
    // go through all of the non zero indices in this
    for index, num := range this.nonZeroes {
        // check if also in other's cache
        if otherNum, ok := vec.nonZeroes[index]; ok {
            result += num * otherNum
        }
    }
    
    return result
}
```