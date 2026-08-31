# Golang | 100% Faster | Easy Solution✅

**Author:** gmanayath
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-the-maximum-divisibility-score/solutions/3426856/](https://leetcode.com/problems/find-the-maximum-divisibility-score/solutions/3426856/)

---

# Code\u2705
```
import (
	"sort"
)
func maxDivScore(nums []int, divisors []int) int {
   max := 0
   maxDiv := 0
   for _, div := range divisors{
        currentMax := 0
        for _, num := range nums{
            if num % div == 0 {
                currentMax += 1
            } 
        }
        if currentMax == max {
            if div < maxDiv {
                maxDiv = div
            }
        } else if currentMax > max {
            maxDiv = div
            max = currentMax
        }
   }
   
   if max == 0 {
       sort.Ints(divisors)
       return divisors[0] 
   }
   return  maxDiv
}
```