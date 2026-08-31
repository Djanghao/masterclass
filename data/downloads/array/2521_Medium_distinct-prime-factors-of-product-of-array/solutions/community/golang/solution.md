# Golang Using Hashmap

**Author:** thinkchar
**Votes:** 1
**Link:** [https://leetcode.com/problems/distinct-prime-factors-of-product-of-array/solutions/2979331/](https://leetcode.com/problems/distinct-prime-factors-of-product-of-array/solutions/2979331/)

---



# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func distinctPrimeFactors(nums []int) int {
    hashmap := make(map[int]int)
	for _, n := range nums {
		for i := 2; n > 1; i++ {
			for n%i == 0 {
				hashmap[i]++
				n = n / i
			}
		}
	}

	return len(hashmap)
}
```