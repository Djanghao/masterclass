# golang bitwise shift

**Author:** zakharovvi
**Votes:** 2
**Link:** [https://leetcode.com/problems/binary-gap/solutions/1364757/](https://leetcode.com/problems/binary-gap/solutions/1364757/)

---

```
func binaryGap(n int) int {
	curDistance, maxDistance := 0, 0
	seenOne := false
	for ; n > 0; n >>= 1 {
		if n & 1 == 1 {
			if curDistance > maxDistance {
				maxDistance = curDistance
			}
			curDistance = 1
			seenOne = true
		} else if seenOne {
			curDistance++
		}
	}
	return maxDistance
}
```