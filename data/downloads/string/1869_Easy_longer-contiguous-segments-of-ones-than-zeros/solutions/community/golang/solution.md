# Go 1ms O(n)

**Author:** tuanbieber
**Votes:** 3
**Link:** [https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/solutions/2181073/](https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/solutions/2181073/)

---

```
func checkZeroOnes(s string) bool {
	if len(s) == 0 {
		return false
	}

	longestZeroSegment, longestOneSegment := 0, 0

	leftZero, leftOne := -1, -1

	for i := 0; i < len(s); i++ {
		if s[i] == 48 && leftZero == -1 {
			leftZero = i
		}

		if s[i] == 49 && leftOne == -1 {
			leftOne = i
		}

		if leftZero != -1 && leftOne != -1 {
			break
		}
	}

	for i := 1; i < len(s); i++ {
		if s[i] == 48 {
			if s[i-1] == 48 {
				// 00
				continue
			} else {
				//10
				leftZero = i
				longestOneSegment = max(longestOneSegment, i-leftOne)
			}
		} else {
			if s[i-1] == 48 {
				//01
				leftOne = i
				longestZeroSegment = max(longestZeroSegment, i-leftZero)
			} else {
				//11
				continue
			}
		}
	}

	if s[len(s)-1] == 48 {
		longestZeroSegment = max(longestZeroSegment, len(s)-leftZero)
	} else {
		longestOneSegment = max(longestOneSegment, len(s)-leftOne)
	}

	return longestOneSegment > longestZeroSegment
}

func max(a, b int) int {
	if a > b {
		return a
	}

	return b
}
```