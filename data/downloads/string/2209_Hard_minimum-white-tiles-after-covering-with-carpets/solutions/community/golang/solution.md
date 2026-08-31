# Golang DP solution

**Author:** tjucoder
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-white-tiles-after-covering-with-carpets/solutions/1903622/](https://leetcode.com/problems/minimum-white-tiles-after-covering-with-carpets/solutions/1903622/)

---

```go
func minimumWhiteTiles(floor string, numCarpets int, carpetLen int) int {
	black, white := byte('0'), byte('1')
	_ = black
	_ = white
	if numCarpets*carpetLen >= len(floor) {
		return 0
	}
	dpMask := make([][]int, len(floor))
	for i := range dpMask {
		dpMask[i] = make([]int, numCarpets+1)
	}
	if floor[0] == white {
		for i := 1; i < len(dpMask[0]); i++ {
			dpMask[0][i] = 1
		}
	}
	whiteHelper := make([]int, len(floor)+1)
	for i := range floor {
		whiteHelper[i+1] = whiteHelper[i]
		if floor[i] == white {
			whiteHelper[i+1]++
		}
	}
	for i := 1; i < len(floor); i++ {
		for carpets := 1; carpets <= numCarpets; carpets++ {
			dpMask[i][carpets] = dpMask[i-1][carpets]
			if i < carpetLen {
				dpMask[i][carpets] = whiteHelper[i+1]
			} else {
				tempWhiteMask := whiteHelper[i+1] - whiteHelper[i+1-carpetLen] + dpMask[i-carpetLen][carpets-1]
				if tempWhiteMask > dpMask[i][carpets] {
					dpMask[i][carpets] = tempWhiteMask
				}
			}
		}
	}
	return whiteHelper[len(whiteHelper)-1] - dpMask[len(dpMask)-1][numCarpets]
}
```