# Go solution easy to understand

**Author:** tuanbieber
**Votes:** 3
**Link:** [https://leetcode.com/problems/numbers-with-same-consecutive-differences/solutions/2522387/](https://leetcode.com/problems/numbers-with-same-consecutive-differences/solutions/2522387/)

---

```
func numsSameConsecDiff(n int, k int) []int {
    var result []int
    
    combination := make([]int, n)
    
    var backtrack func(int)
    backtrack = func(index int) {
        if index == n {
            if combination[0] != 0 {
                result = append(result, toInt(combination))
            }
            
            return
        }
        
        for digit := 0; digit <= 9; digit++ {
            if index == 0 || diffByK(digit, combination[index-1], k) {
                combination[index] = digit
                backtrack(index + 1)
            }
        }
    }
    
    backtrack(0)
    
    return result
}

func diffByK(a, b, k int) bool {
    return a - b == k || b - a == k
}

func toInt(combination []int) int {    
    result := 0
    
    for _, num := range combination {
        result = result * 10 + num
    }
    
    return result
}
```