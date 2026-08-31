# [go] Simple solution | O(n^2) 4ms, 3.3 mb

**Author:** akash__gupta
**Votes:** 1
**Link:** [https://leetcode.com/problems/valid-triangle-number/solutions/1339686/](https://leetcode.com/problems/valid-triangle-number/solutions/1339686/)

---

```
func triangleNumber(nums []int) int {
    count := 0
    sort.Ints(nums)
    l := len(nums)
    
    for i:=l-1; i>=2; i-- {
        l, r := 0, i - 1
        for l < r {
            if nums[l] + nums[r] > nums[i] {
                count += (r - l)
                r--
            } else {
                l++
            }
        }
    }
    
    return count
}