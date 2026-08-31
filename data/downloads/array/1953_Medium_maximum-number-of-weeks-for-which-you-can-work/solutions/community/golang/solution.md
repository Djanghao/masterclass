# Solution no.1953

**Author:** nqnlong
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-weeks-for-which-you-can-work/solutions/5489443/](https://leetcode.com/problems/maximum-number-of-weeks-for-which-you-can-work/solutions/5489443/)

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
func numberOfWeeks(milestones []int) int64 {
    if len(milestones) == 0 {
		return 0
	}

	max := milestones[0]
	total := 0
	for _, m := range milestones {
		if m > max {
			max = m
		}
		total += m
	}

	total -= max

	if total == max {
		return int64(total) * 2
	} else if total < max {
		return int64(total)*2 + 1
	}

	return int64(total) + int64(max)
}
```