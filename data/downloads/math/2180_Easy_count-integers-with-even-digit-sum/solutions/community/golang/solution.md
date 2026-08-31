# easy solutuon for beginers

**Author:** D1YoR_Dev
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-integers-with-even-digit-sum/solutions/5126364/](https://leetcode.com/problems/count-integers-with-even-digit-sum/solutions/5126364/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func sumNumberic(n int) bool {
	sum := 0

	for n != 0 {
		sum += n % 10
		n /= 10
	}
	return sum%2 == 0
}

func countEven(num int) int {
	c := 0
	for i := 1; i <= num; i++ {
		if sumNumberic(i) {
			c++
		}
	}
	return c
}

```