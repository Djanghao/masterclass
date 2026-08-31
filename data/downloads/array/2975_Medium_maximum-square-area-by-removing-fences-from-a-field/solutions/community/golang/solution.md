# GO | 2 Easy Solutions

**Author:** 2107mohitverma
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-square-area-by-removing-fences-from-a-field/solutions/5693844/](https://leetcode.com/problems/maximum-square-area-by-removing-fences-from-a-field/solutions/5693844/)

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
func maximizeSquareArea(m int, n int, hFences []int, vFences []int) int {
	hFences = append([]int{1}, append(hFences, m)...)
	vFences = append([]int{1}, append(vFences, n)...)
	sort.Ints(hFences)
	sort.Ints(vFences)

	hDiffs := make(map[int]bool)
	for i := 0; i < len(hFences)-1; i++ {
		for j := i + 1; j < len(hFences); j++ {
			hDiffs[hFences[j]-hFences[i]] = true
		}
	}

	maxArea := int64(-1)
	for x := 0; x < len(vFences)-1; x++ {
		for y := x + 1; y < len(vFences); y++ {
			vDiff := vFences[y] - vFences[x]
			if hDiffs[vDiff] {
				maxArea = max(maxArea, int64(vDiff*vDiff))
			}
		}
	}

	return int(maxArea % 1_000_000_007)
}

func max(a int64, b int64) int64 {
	if a > b {
		return a
	}
	return b
}

// BRUTE FORCE
// func maximizeSquareArea(m int, n int, hFences []int, vFences []int) int {
// 	hFences = append([]int{1}, append(hFences, m)...)
// 	vFences = append([]int{1}, append(vFences, n)...)
// 	sort.Ints(hFences)
// 	sort.Ints(vFences)

// 	hDiff, vDiff := []int{}, []int{}
// 	for i := 0; i < len(hFences)-1; i++ {
// 		for j := i + 1; j < len(hFences); j++ {
// 			hDiff = append(hDiff, hFences[j]-hFences[i])
// 		}
// 	}
// 	sort.Ints(hDiff)

// 	for x := 0; x < len(vFences)-1; x++ {
// 		for y := x + 1; y < len(vFences); y++ {
// 			vDiff = append(vDiff, vFences[y]-vFences[x])
// 		}
// 	}
// 	sort.Ints(vDiff)

// 	maxCommVal := -1
// 	i, j := 0, 0
// 	for i < len(hDiff) && j < len(vDiff) {
// 		if hDiff[i] == vDiff[j] {
// 			maxCommVal = hDiff[i]
// 			i++
// 			j++
// 		} else if hDiff[i] < vDiff[j] {
// 			i++
// 		} else {
// 			j++
// 		}
// 	}

// 	if maxCommVal == -1 {
// 		return -1
// 	}

// 	MODULO := 1_000_000_007
// 	return ((maxCommVal % MODULO) * (maxCommVal % MODULO)) % MODULO
// }
```