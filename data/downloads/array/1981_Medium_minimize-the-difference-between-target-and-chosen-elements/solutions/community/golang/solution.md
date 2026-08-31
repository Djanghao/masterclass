# Minimize the Difference Between Target and Choosen Element

**Author:** Naeem_ABD
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-the-difference-between-target-and-chosen-elements/solutions/6125574/](https://leetcode.com/problems/minimize-the-difference-between-target-and-chosen-elements/solutions/6125574/)

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
func minimizeTheDifference(mat [][]int, target int) int {
	baseSummary := 0
	magic := make([][]int, len(mat))
	for ri, rows := range mat {
		sort.Ints(rows)
		baseSummary += rows[0]
		for i := 1; i < len(rows); i++ {
			if rows[i] != rows[i-1] {
				magic[ri] = append(magic[ri], rows[i]-rows[0])
			}
		}
	}
	minDifference := abs(target - baseSummary)
	if baseSummary >= target {
		return minDifference
	}
	hash := make(map[int]bool, 871)
	hash[baseSummary] = true
	for _, tires := range magic {
		more := make([]int, 0)
		for _, tryValue := range tires {
			for basic := range hash {
				if basic+tryValue > 870 {
					// iteration order is NOT dependent on any sorted criterion
					// we should continue, not break
					continue
				}
				if hash[basic+tryValue] == false {
					// we can't modify map during iteration
					// push back to more, insert into map after tires
					more = append(more, basic+tryValue)
				}
				if basic+tryValue == target {
					return 0
				}
			}
		}
		for _, mv := range more {
			hash[mv] = true
		}
	}
	for k := range hash {
		if curDifference := abs(target - k); curDifference < minDifference {
			minDifference = curDifference
		}
	}
	return minDifference
}

func abs(v int) int {
	if v > 0 {
		return v
	}
	return v * -1
}
```