# Golang 4 ms 6.1 MB

**Author:** maxhero90
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-game/solutions/2747492/](https://leetcode.com/problems/sum-game/solutions/2747492/)

---

```
func abs(a int32) int32 {
	if a >= 0 {
		return a
	}
	return -a
}

func sum(num string) (sum, questionMarkCount int32) {
	for i := 0; i < len(num); i++ {
		if num[i] == '?' {
			questionMarkCount++
		} else {
			sum += int32(num[i] - '0')
		}
	}
	return
}

func sumGame(num string) bool {
	mid := len(num) >> 1
	sum1, qmCount1 := sum(num[:mid])
	sum2, qmCount2 := sum(num[mid:])

	if qmCount1 == qmCount2 {
		return sum1 != sum2
	}
	if abs(qmCount1-qmCount2)%2 == 1 {
		return true
	}
    return sum1-sum2 != (qmCount2-qmCount1)>>1*9
}
```