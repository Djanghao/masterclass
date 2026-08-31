# Easy Solution O(n)

**Author:** DurkaVerder
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-array-concatenation-value/solutions/5596012/](https://leetcode.com/problems/find-the-array-concatenation-value/solutions/5596012/)

---



# Complexity
- Time complexity:
 $$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
func findTheArrayConcVal(nums []int) int64 {
	n := len(nums)
    l, r := 0, n-1
    res := 0
	for l < r {
		digits := int(math.Log10(float64(nums[r]))) + 1
        res += nums[l] * int(math.Pow(10, float64(digits))) + nums[r]
        
		l++
		r--
	}

    if n % 2 != 0{
        res += nums[l]
    }
    return int64(res)

}
```