# Golang solution beat 98%

**Author:** tjucoder
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-fruits-harvested-after-at-most-k-steps/solutions/1641163/](https://leetcode.com/problems/maximum-fruits-harvested-after-at-most-k-steps/solutions/1641163/)

---

```go
func maxTotalFruits(fruits [][]int, startPos int, k int) int {
	leftBound, rightBound := startPos - k, startPos + k
	// fix leftBound
	if leftBound < 0 {
		leftBound = 0
	}
	// fix rightBound
	if rightBound > fruits[len(fruits)-1][0] {
		rightBound = fruits[len(fruits)-1][0]
	}
	// WARNING: rightBound must \u2265 startPos
	// I got WA here, fix rightBound is not necessary :( 
	if rightBound < startPos {
		rightBound = startPos
	}
	magic := make([]int, rightBound+1)
	for _, v := range fruits {
		if v[0] >= leftBound && v[0] <= rightBound {
			magic[v[0]] = v[1]
		}
	}
	for i := startPos-1; i >= leftBound; i-- {
		magic[i] += magic[i+1]
	}
	for i := startPos+1; i <= rightBound; i++ {
		magic[i] += magic[i-1]
	}
	maxFruits := 0
	for i := leftBound; i <= startPos; i++ {
		// res step: k-(startPos-i)
		j := startPos + (k-(startPos-i))/2
		if j > rightBound {
			j = rightBound
		}
		curFruits := magic[i] + magic[j] - magic[startPos]
		if curFruits > maxFruits {
			maxFruits = curFruits
		}
	}
	for i := rightBound; i >= startPos; i-- {
		// res step: k-(i-startPos)
		j := startPos - (k-(i-startPos))/2
		if j < leftBound {
			j = leftBound
		}
		curFruits := magic[i] + magic[j] - magic[startPos]
		if curFruits > maxFruits {
			maxFruits = curFruits
		}
	}
	return maxFruits
}
```