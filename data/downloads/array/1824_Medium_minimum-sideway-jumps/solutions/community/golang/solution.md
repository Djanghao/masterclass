# [Go] Easy understanding

**Author:** adithyasashasai
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-sideway-jumps/solutions/4541727/](https://leetcode.com/problems/minimum-sideway-jumps/solutions/4541727/)

---

# Code
```
func minSideJumps(obstacles []int) int {
    l1, l2, l3 := 1, 0, 1
    for i := 0; i < len(obstacles)-1; i++ {
        switch obstacles[i+1] {
            case 1:
                if obstacles[i] != 2 {
                    l2 = min(l2, 1 + l1)
                }
                if obstacles[i] != 3 {
                    l3 = min(l3, 1 + l1)
                }
                l1 = math.MaxInt - 1
            case 2:
                if obstacles[i] != 1 {
                    l1 = min(l1, 1 + l2)
                }
                if obstacles[i] != 3 {
                    l3 = min(l3, 1 + l2)
                }
                l2 = math.MaxInt - 1
            case 3:
                if obstacles[i] != 1 {
                    l1 = min(l1, 1 + l3)
                }
                if obstacles[i] != 2 {
                    l2 = min(l2, 1 + l3)
                }
                l3 = math.MaxInt - 1
        }
    }
    return min(l1, min(l2, l3))
}

func min(a, b int) int {
    if a < b { return a }
    return b
}
```