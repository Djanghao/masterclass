# My Golang Solution 16ms

**Author:** miryang
**Votes:** 13
**Link:** [https://leetcode.com/problems/missing-number/solutions/402153/](https://leetcode.com/problems/missing-number/solutions/402153/)

---

```
func missingNumber(nums []int) int {
    var arrsum, allsum int
    for i:=0; i<len(nums); i++{
        arrsum+=nums[i]
        allsum+=i
    }
    return (allsum+len(nums))-arrsum
}
```