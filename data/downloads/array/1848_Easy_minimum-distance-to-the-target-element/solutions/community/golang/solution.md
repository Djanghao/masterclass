# [Go] simple solution

**Author:** casshsu
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-distance-to-the-target-element/solutions/1187614/](https://leetcode.com/problems/minimum-distance-to-the-target-element/solutions/1187614/)

---

```
func getMinDistance(nums []int, target int, start int) int {
    ans := 100000
    for i, n := range(nums) {
        if n == target {
            diff := i - start
            if diff < 0 {
                diff = -diff
            }
            if diff < ans {
                ans = diff
            }
        }
    }
    return ans
}
```