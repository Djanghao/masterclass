# Clean golang solution

**Author:** klakovskiy
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-divisible-substrings/solutions/4843724/](https://leetcode.com/problems/number-of-divisible-substrings/solutions/4843724/)

---

# Complexity
- Time complexity: $$O(n)$$ 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$ 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func countDivisibleSubstrings(word string) int {
	res := 0
	for i := 1; i < 10; i++ {
		m := map[int]int{0: 1}
		s := 0
		for _, r := range word {
			s += 9 - int('z'-r)/3 - i
			res += m[s]
			m[s]++
		}
	}
	return res
}

```