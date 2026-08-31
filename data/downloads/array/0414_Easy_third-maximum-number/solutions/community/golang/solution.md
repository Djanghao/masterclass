# O(1) Space [Golang, Go]

**Author:** AleksKK
**Votes:** 9
**Link:** [https://leetcode.com/problems/third-maximum-number/solutions/753661/](https://leetcode.com/problems/third-maximum-number/solutions/753661/)

---

Runtime: 4 ms, faster than 93.78% of Go online submissions for Third Maximum Number.
Memory Usage: 3 MB, less than 100.00% of Go online submissions for Third Maximum Number.
```
import "math"


func thirdMax(nums []int) int {
	max, second, third := math.MinInt64, math.MinInt64, math.MinInt64
    
    for _, v := range nums {        
		if v == max || v == second || v == third {
			continue
		}
        
        switch {
        case v > max:
            max, second, third = v, max, second
        case v > second:
            second, third = v, second
        case v > third:
            third = v
        }
	}
    
	if third == math.MinInt64 {
		return max
	}
    
	return third
}
```