# i use conditional &&

**Author:** Sebasers
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/solutions/5939515/](https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/solutions/5939515/)

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
```golang []
func busyStudent(startTime []int, endTime []int, queryTime int) (r int) {
	for i := 0; i < len(startTime); i++ {
		if startTime[i] <= queryTime && endTime[i] >= queryTime {
			r++
		}
	}
	return
}
```