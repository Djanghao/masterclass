# Golang 0ms Solution

**Author:** tjucoder
**Votes:** 2
**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-applying-operations/solutions/925101/](https://leetcode.com/problems/lexicographically-smallest-string-after-applying-operations/solutions/925101/)

---

```go
func findLexSmallestString(s string, a int, b int) string {
	if a == 3 || a == 7 || a == 9 {
		a = 1
	}
	if a == 4 || a == 6 || a == 8 {
		a = 2
	}
	// a in [1,2,5] now

	smallest := s
	processed := make([]bool, len(s))
	for i := 0; processed[i%len(s)] == false; i += b {
		index := i % len(s)
		processed[index] = true
		if cur := minimizing(s[len(s)-index:]+s[:len(s)-index], a, b%2 == 1); cur < smallest {
			smallest = cur
		}
	}
	return smallest
}

func minimizing(original string, step int, changePrev bool) string {
	inRune := []rune(original)
	minus := rune(0)
	minusPrev := rune(0)
	switch step {
	case 1:
		minus = inRune[1] - '0'
		minusPrev = inRune[0] - '0'
	case 2:
		minus = inRune[1] - '0'
		minusPrev = inRune[0] - '0'
		if minus%2 == 1 {
			minus--
		}
		if minusPrev%2 == 1 {
			minusPrev--
		}
	case 5:
		if inRune[1] >= '5' {
			minus = 5
		}
		if inRune[0] >= '5' {
			minusPrev = 5
		}
	}
	for i := 1; i < len(inRune); i += 2 {
		inRune[i] -= minus
		if inRune[i] < '0' {
			inRune[i] += 10
		}
		if changePrev {
			inRune[i-1] -= minusPrev
			if inRune[i-1] < '0' {
				inRune[i-1] += 10
			}
		}
	}
	return string(inRune)
}
```