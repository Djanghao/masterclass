# Golang solution DIFF Array

**Author:** 54k
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-positions-on-street-with-required-brightness/solutions/4223909/](https://leetcode.com/problems/count-positions-on-street-with-required-brightness/solutions/4223909/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Use https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/714/bonus/4688/ diff array method mentioned in leetcode's algo course

# Code
```
func meetRequirement(n int, lights [][]int, requirement []int) int {
	min := func (a, b int) int {
		if a < b {
			return a
		}
		return b
	}

	max := func (a, b int) int {
		if a > b {
			return a
		}
		return b
	}

	prefix := make([]int, n+1)
	for _, l := range lights {
		left := max(0, l[0] - l[1])
		right := min(n, l[0] + l[1] + 1)

		prefix[left] += 1
		prefix[right] -= 1
	}

	for i := 1; i < len(prefix); i++ {
		prefix[i] = max(0, prefix[i] + prefix[i-1])
	}

	// fmt.Println(prefix)
	
	ans := 0
	for i, req := range requirement {
		if prefix[i] >= req {
			ans++
		}
	}

	return ans
}
```