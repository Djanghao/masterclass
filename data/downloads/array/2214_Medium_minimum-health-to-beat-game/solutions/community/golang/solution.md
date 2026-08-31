# Go | One Pass | Time - O(n), Space - O(1)

**Author:** anr-m
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-health-to-beat-game/solutions/1892413/](https://leetcode.com/problems/minimum-health-to-beat-game/solutions/1892413/)

---

```go
func minimumHealth(damage []int, armor int) int64 {
    var sumDamage, maxDamage int
    
    for _, d := range damage {
        sumDamage += d
        maxDamage = max(maxDamage, d)
    }
	
    return int64(sumDamage - min(armor, maxDamage) + 1)
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}
```