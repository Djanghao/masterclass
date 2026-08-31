# Go 100% Binary Search

**Author:** rsfrafrefiajgoirfsa
**Votes:** 0
**Link:** [https://leetcode.com/problems/building-boxes/solutions/4225169/](https://leetcode.com/problems/building-boxes/solutions/4225169/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(log_ n * \\sqrt{k} )$$ k is the search key from 0 to n 

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$
# Code
```
func minimumBoxes(n int) int {
	return sort.Search(n, func(i int) bool { return n <= b(i) })
}

func b(n int) int {
	t := 1
	s := 0
	for n > 0 {
		// fmt.Println(n)
		if n >= t {
			n -= t
			s += c(t)
			t++
		} else {
			s += c(n)
			break
		}
	}

	return s
}

func c(n int) int {
	if n == 1 {
		return 1
	}
	return (n + 1) * n / 2
}
```