# Go pair up and look forward

**Author:** dchooyc
**Votes:** 0
**Link:** [https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/solutions/4291181/](https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/solutions/4291181/)

---

```
func lenLongestFibSubseq(arr []int) int {
    res, nums := 0, make(map[int]bool)

    for _, val := range arr {
        nums[val] = true
    }

    for i := 0; i < len(arr); i++ {
        for j := i + 1; j < len(arr); j++ {
            length := 2
            prev, cur := arr[i], arr[j]
            
            for target := prev + cur; nums[target]; target = prev + cur {
                length++
                prev, cur = cur, target
            }

            if length > res {
                res = length
            }
        }
    }

    if res >= 3 { return res }
    return 0
}
```