# Simple backtracking. Hours of pondering and solving indexing problems. Jeez louis

**Author:** arnab_thakuria
**Votes:** 0
**Link:** [https://leetcode.com/problems/word-pattern-ii/solutions/5198751/](https://leetcode.com/problems/word-pattern-ii/solutions/5198751/)

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
func wordPatternMatch(pattern string, s string) bool {

	var is_possible func(map[byte]string, int, int) bool

	is_mapped := func(curr_pattern string, state map[byte]string) bool {
		for _, val := range state {
			if curr_pattern == val {
				return true
			}
		}
		return false
	}
	is_possible = func(state map[byte]string, patternIdx, sIdx int) bool {
		//fmt.Printf("current state %v, %d, %d\
", state, patternIdx, sIdx)
		if patternIdx >= len(pattern) && sIdx >= len(s) {
			return true
		} else if patternIdx >= len(pattern) || sIdx >= len(s) {
			return false
		}

		oldPattern, valid := state[pattern[patternIdx]]
		if sIdx+len(oldPattern) <= len(s) {
			if valid {
				currPattern := s[sIdx : sIdx+len(oldPattern)]
				if currPattern != oldPattern {
					return false
				} else {
					//fmt.Println("found a old pattern ")
					return is_possible(state, patternIdx+1, sIdx+len(oldPattern))
				}
			} else {
				res := false
				for j := sIdx; j < len(s); j++ {
					if is_mapped(s[sIdx:j+1], state) {
						continue
					}
					state[pattern[patternIdx]] = s[sIdx : j+1]
					res = res || is_possible(state, patternIdx+1, j+1)
					delete(state, pattern[patternIdx])
					if res {
						return true
					}
				}

			}
		}
		return false

	}

	for j := 0; j < len(s); j++ {
		curr_map := map[byte]string{
			pattern[0]: s[0 : j+1],
		}
		if is_possible(curr_map, 1, j+1) {
			return true
		}
	}
	return false
}

```