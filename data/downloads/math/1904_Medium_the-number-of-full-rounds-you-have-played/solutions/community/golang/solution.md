# O(1) `0ms faster than 100%`

**Author:** Dias1c
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-number-of-full-rounds-you-have-played/solutions/1284505/](https://leetcode.com/problems/the-number-of-full-rounds-you-have-played/solutions/1284505/)

---

```
func numberOfRounds(startTime string, finishTime string) int {
	//Converting to Numbers
	sH, sM := convertTimeToInts(startTime)
	fH, fM := convertTimeToInts(finishTime)
	//I change the values for the convenience of calculation
	fM, sM = fM-fM%15, sM+(60-sM)%15
	totalH, totalM := fH-sH, fM-sM
	if totalM < 0 {
		totalH--
		fM = fM + 60
		totalM = fM - sM
	}
	//I get how many matches there can be during these minutes
	inMins := totalM / 15
	if totalH < 0 {
		totalH = 24 + totalH
	}
	result := 4*totalH + inMins
	return result
}

func convertTimeToInts(hh_mm string) (int, int) {
	h := int(hh_mm[0]-48)*10 + int(hh_mm[1]-48)
	m := int(hh_mm[3]-48)*10 + int(hh_mm[4]-48)
	return h, m
}
```