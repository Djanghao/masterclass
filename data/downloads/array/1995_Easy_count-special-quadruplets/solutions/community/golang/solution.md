# Go non-brute force

**Author:** dchooyc
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-special-quadruplets/solutions/2152537/](https://leetcode.com/problems/count-special-quadruplets/solutions/2152537/)

---

[Credit](https://leetcode.com/problems/count-special-quadruplets/discuss/1446988/JavaC%2B%2BPython3-Real-O(n2)-solution)
```
func countQuadruplets(nums []int) int {
    res, n := 0, len(nums)
    
    count := map[int]int{(nums[n - 1] - nums[n - 2]): 1}
    
    for b := n - 3; b > 0; b-- {
        for a := b - 1; a >= 0; a-- {
            res += count[nums[a] + nums[b]]
        }
        
        c := b
        
        for d := n - 1; d > c; d-- {
            count[nums[d] - nums[c]]++
        }
    }
    
    return res
}
```