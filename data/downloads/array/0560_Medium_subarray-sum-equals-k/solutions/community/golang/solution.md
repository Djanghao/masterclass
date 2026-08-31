# golang solution

**Author:** Xing98
**Votes:** 7
**Link:** [https://leetcode.com/problems/subarray-sum-equals-k/solutions/478170/](https://leetcode.com/problems/subarray-sum-equals-k/solutions/478170/)

---

```go
func subarraySum(nums []int, k int) int {
    // the hashmap prefix stores the prefix sum from 0 to i and the number of its occurence.
    prefix := map[int]int{0: 1}
    var sum int
    var count int

    for _, num := range nums {
        // sum represents the sum of nums[:i](including nums[i])
        sum += num
        // since the hashmap prefix has stored the sum of the subarray nums[:j](0<=j<=i) and
        // the number of its occurence, so the number of the subarray nums[j:i](including i
        // and j) whose sum is k is equal to the number of the prefix nums[:j] whose sum is
        // sum-k.
        count += prefix[sum-k]
        prefix[sum]++
    }
    
    return count
}
```