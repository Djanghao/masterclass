# golang right/left brute force :p

**Author:** citaces
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/solutions/5160208/](https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/solutions/5160208/)

---


# Code
```

func captureForts(forts []int) int {
	maxForts := 0
	startCap := false
	maxCap := make([]int, 0, len(forts))

	for _, f := range forts {
		if f == 1 {
			startCap = true
			maxForts = 0
			continue
		}
		if f == -1 {
			maxCap = append(maxCap, maxForts)
			maxForts = 0
			startCap = false
		}
		if startCap {
			maxForts++
		}
	}

	maxForts = 0
	startCap = false

	for i := len(forts) - 1; i >= 0; i-- {
		if forts[i] == 1 {
			startCap = true
			maxForts = 0
			continue
		}
		if forts[i] == -1 {
			maxCap = append(maxCap, maxForts)
			maxForts = 0
			startCap = false
		}
		if startCap {
			maxForts++
		}
	}
	if len(maxCap) == 0 {
		return 0
	}
	sort.Ints(maxCap)
	return maxCap[len(maxCap)-1]
}

```