# Go | 0ms | simple loops

**Author:** MichaelGov-ctrl
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/solutions/5661046/](https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/solutions/5661046/)

---

# Code
```golang []
func findIndices(nums []int, indexDifference int, valueDifference int) []int {
    for i := 0; i < len(nums); i++ {
        for j := i + indexDifference; j < len(nums); j++ {
            if abs(nums[i] - nums[j]) >= valueDifference {
                return []int{i, j}
            }
        }
    }

    return []int{-1, -1}
}

func abs(x int) int {
    if x < 0 {
        return -x
    }
    return x
}
```