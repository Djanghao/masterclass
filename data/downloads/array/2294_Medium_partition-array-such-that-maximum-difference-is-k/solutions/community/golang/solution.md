# Go(lang) Solution

**Author:** 0xedb
**Votes:** 3
**Link:** [https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/solutions/2112756/](https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/solutions/2112756/)

---

```go
func partitionArray(nums []int, k int) int {
    // remember you're trying to minimize difference 
    // k is the ceiling
    // sort to group higher values together (to minimize difference)
    
    // then keep expanding till difference larger than k 
    // create new sequence(increment) in that case
    
    sort.Ints(nums)
    
    ans := 1
    
    
    min := nums[0]
    max := nums[0]
    
    for i := 0; i < len(nums); i++ {
        max = nums[i]
        
        if (max - min) > k {
            ans++
            
            min = nums[i]
        }
    }
    
    return ans
}
```