# Runtime 963 ms Beats 100.00% of users with Go

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-common-subpath/solutions/5055481/](https://leetcode.com/problems/longest-common-subpath/solutions/5055481/)

---

# Code
```
func longestCommonSubpath(n int, paths [][]int) int {
	minPathLen := len(paths[0])
	for _, p := range paths {
		if len(p) < minPathLen {
			minPathLen = len(p)
		}
	}

	return longestCommonSubpathHelper(n, paths, minPathLen)
}

func longestCommonSubpathHelper(n int, paths [][]int, minPathLen int) int {
	left, right := 0, minPathLen

	for left < right {
		mid := left + (right-left+1)/2
		if hasCommon(paths, mid, n) {
			left = mid
		} else {
			right = mid - 1
		}
	}

	return left
}

func hasCommon(paths [][]int, length, n int) bool {
	n++
	mod := int(1e9 + 7)
	pow := int64(1)
	for i := 0; i < length-1; i++ {
		pow = (pow * int64(n)) % int64(mod)
	}

	hashToEndIdx := make(map[int64][][]int)
	for p := 0; p < len(paths); p++ {
		hash := int64(0)
		for i := 0; i < len(paths[p]); i++ {
			if i >= length {
				hash = (hash - pow*int64(paths[p][i-length])) % int64(mod)
			}
			hash = ((hash*int64(n) + int64(paths[p][i])) % int64(mod) + int64(mod)) % int64(mod)

			if i >= length-1 {
				hashToEndIdx[hash] = append(hashToEndIdx[hash], []int{p, i})
			}
		}
	}

	for _, endIdxs := range hashToEndIdx {
		if len(endIdxs) < len(paths) {
			continue
		}

		var common []int
		friends := make(map[int]bool)
		for _, endIdx := range endIdxs {
			i, j := endIdx[0], endIdx[1]

			if _, exists := friends[i]; exists {
				continue
			}

			if common == nil {
				common = append(common, paths[i][j-length+1:j+1]...)
			} else {
				if !equal(common, paths[i][j-length+1:j+1]) {
					common = nil
					break
				}
			}
			friends[i] = true
		}

		if len(friends) == len(paths) && common != nil {
			return true
		}
	}

	return false
}

func equal(arr1, arr2 []int) bool {
	if len(arr1) != len(arr2) {
		return false
	}
	for i := range arr1 {
		if arr1[i] != arr2[i] {
			return false
		}
	}
	return true
}
```