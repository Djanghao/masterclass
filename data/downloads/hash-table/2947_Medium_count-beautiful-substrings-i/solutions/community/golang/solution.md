# Golang beat 100%✅

**Author:** tjucoder
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-beautiful-substrings-i/solutions/5523751/](https://leetcode.com/problems/count-beautiful-substrings-i/solutions/5523751/)

---

# Code
```go
func beautifulSubstrings(s string, k int) int {
	vowels, consonants := make([]int, len(s)), make([]int, len(s))
	vv, cc := 0, 0
	for i, c := range s {
		switch c {
		case 'a', 'e', 'i', 'o', 'u':
			vv++
		default:
			cc++
		}
		vowels[i] = vv
		consonants[i] = cc
	}
	beautiful := 0
	for i := 0; i < len(s); i++ {
		for j := i; j < len(s); j++ {
			curV, curC := vowels[j], consonants[j]
			if i > 0 {
				curV -= vowels[i-1]
				curC -= consonants[i-1]
			}
			if curV != curC {
				continue
			}
			if (curV * curC) % k != 0 {
				continue
			}
            beautiful++
		}
	}
	return beautiful
}
```