# Golang Binary-Search O(NlogN)

**Author:** tjucoder
**Votes:** 0
**Link:** [https://leetcode.com/problems/replace-the-substring-for-balanced-string/solutions/802195/](https://leetcode.com/problems/replace-the-substring-for-balanced-string/solutions/802195/)

---

```go
func balancedString(s string) int {
	magic := make([][4]int, 0, len(s)+1)
	current := [...]int{0, 0, 0, 0}
	magic = append(magic, current)
	for _, v := range s {
		switch v {
		case 'Q':
			current[0]++
		case 'W':
			current[1]++
		case 'E':
			current[2]++
		case 'R':
			current[3]++
		}
		magic = append(magic, current)
	}
	if current[0] == current[1] && current[2] == current[3] && current[0] == current[2] {
		return 0
	}
	minLength := len(s)
	for i := 1; i <= len(s); i++ {
		l, r := i, len(s)
		for l <= r {
			m := (l+r)>>1
			Q := magic[len(s)][0] - magic[m][0] + magic[i-1][0]
			W := magic[len(s)][1] - magic[m][1] + magic[i-1][1]
			E := magic[len(s)][2] - magic[m][2] + magic[i-1][2]
			R := magic[len(s)][3] - magic[m][3] + magic[i-1][3]
			if isBalanced([...]int{Q,W,E,R}, m-i+1) {
				if m-i+1 < minLength {
					minLength = m-i+1
				}
				r = m-1
			} else {
				l = m+1
			}
		}
	}
	return minLength
}

func isBalanced(alpha [4]int, length int) bool {
	maxv := alpha[0]
	for i := 1; i <= 3; i++ {
		if alpha[i] > maxv {
			maxv = alpha[i]
		}
	}
	v := maxv*4 - alpha[0] - alpha[1] - alpha[2] - alpha[3]
	return v <= length
}
```