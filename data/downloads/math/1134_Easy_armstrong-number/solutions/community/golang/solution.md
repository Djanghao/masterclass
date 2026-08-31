# Not the fastest one but one in go

**Author:** deleted_user
**Votes:** 0
**Link:** [https://leetcode.com/problems/armstrong-number/solutions/5481906/](https://leetcode.com/problems/armstrong-number/solutions/5481906/)

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
func isArmstrong(n int) bool {

	sum := 0
	dup := n

    str := strconv.Itoa(n)

	if n > 0 && n <= 9 {
		return true
	}

	for n > 0 {
		ld := n % 10
		sum = sum + int(math.Pow(float64(ld), float64(len(str))))
		n = n / 10

        fmt.Println(sum)
	}

	if sum == dup {
		return true
	}

	return false
}
```