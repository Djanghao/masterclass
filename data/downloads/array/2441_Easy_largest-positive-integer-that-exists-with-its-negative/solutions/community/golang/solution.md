# Go solution. Beats 96%

**Author:** upikoth
**Votes:** 4
**Link:** [https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/solutions/5100143/](https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/solutions/5100143/)

---

# Code
```
func findMaxK(nums []int) int {
    alreadySeenNums := map[int]bool{}
    res := -1

    for _, num := range nums {
        numAbs := int(math.Abs(float64(num)))

        if numAbs < res {
            continue
        }

        if alreadySeenNums[-num] {
            res = numAbs
        } else {
            alreadySeenNums[num] = true
        }
    }

    return res
}
```

Please upvote if you found this solution useful