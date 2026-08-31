# Go simple solution

**Author:** tuanbieber
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-greatest-common-divisor-of-array/solutions/2462181/](https://leetcode.com/problems/find-greatest-common-divisor-of-array/solutions/2462181/)

---

```
func findGCD(nums []int) int {
    min, max := nums[0], nums[1]
    
    for _, num := range nums {
        if num > max {
            max = num
        }
        
        if num < min {
            min = num
        }
    }
    
    return GCD(min, max)
}

func GCD(a, b int) int {
	for b != 0 {
		t := b
		b = a % b
		a = t
	}
	return a
}
```